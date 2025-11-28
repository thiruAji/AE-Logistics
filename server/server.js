require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
// Using local MongoDB for simplicity as no connection string was provided
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/assalaamualaikum_enterprises';

mongoose.connect(MONGODB_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB Connection Error:', err));

// Schema
const estimateSchema = new mongoose.Schema({
    customerName: String,
    phone: String,
    address: String,
    items: [{
        name: String,
        count: Number
    }],
    totalEstimate: Number, // Hidden from user, calculated on backend
    createdAt: { type: Date, default: Date.now }
});

const Estimate = mongoose.model('Estimate', estimateSchema);

// Routes
// Item Prices (in INR)
const ITEM_PRICES = {
    'chair': 500,
    'table': 1200,
    'sofa': 2500,
    'bed': 2000,
    'queen bed': 3000,
    'wardrobe': 2500,
    'fridge': 1500,
    'washing_machine': 1500,
    'tv': 1000,
    'box': 200
};

// Routes
app.post('/api/estimate', async (req, res) => {
    try {
        const { customerName, phone, address, items } = req.body;

        // Smart Estimate Calculation
        let totalEstimate = 0;
        const pricedItems = items.map(item => {
            const pricePerItem = ITEM_PRICES[item.name.toLowerCase()] || ITEM_PRICES[Object.keys(ITEM_PRICES).find(k => item.name.toLowerCase().includes(k))] || 500; // Fallback 500
            const itemTotal = item.count * pricePerItem;
            totalEstimate += itemTotal;
            return { ...item, pricePerItem, itemTotal };
        });

        // Add a base fee
        const BASE_FEE = 2000;
        totalEstimate += BASE_FEE;

        const newEstimate = new Estimate({
            customerName,
            phone,
            address,
            items,
            totalEstimate
        });

        await newEstimate.save();

        // WhatsApp Notification Logic
        if (process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN) {
            const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

            // 1. Send to Owner (Full Details)
            const ownerMessage = `
📦 *New Estimate Request*
------------------------
👤 *Customer:* ${customerName}
📞 *Phone:* ${phone}
📍 *Address:* ${address}
------------------------
🛋️ *Items:*
${pricedItems.map(i => `- ${i.name}: ${i.count} (₹${i.itemTotal})`).join('\n')}
------------------------
💰 *Total Estimate:* ₹${totalEstimate}
(Includes Base Fee: ₹${BASE_FEE})
------------------------
`;
            await client.messages.create({
                body: ownerMessage,
                from: process.env.TWILIO_PHONE_NUMBER,
                to: process.env.OWNER_PHONE_NUMBER
            });
            console.log('✅ WhatsApp sent to OWNER');

            // 2. Send to Client (Estimate Only)
            const clientMessage = `
👋 *Hello ${customerName},*

Thank you for choosing *Assalaamualaikum Enterprises*!

Based on the items you listed, your estimated moving cost is:
💰 *₹${totalEstimate}*

We will review your request and contact you shortly to confirm the details.

_Note: This is an approximate estimate._
`;
            // Ensure phone number has country code, default to +91 if missing
            let clientPhone = phone.trim();
            if (!clientPhone.startsWith('+')) {
                clientPhone = '+91' + clientPhone; // Assuming India based on currency
            }

            await client.messages.create({
                body: clientMessage,
                from: process.env.TWILIO_PHONE_NUMBER,
                to: `whatsapp:${clientPhone}`
            });
            console.log('✅ WhatsApp sent to CLIENT');

        } else {
            console.log('⚠️ Twilio credentials missing. Using Mock Notification.');
            console.log('------------------------------------------------');
            console.log('📲 [MOCK] TO OWNER:');
            console.log(`Customer: ${customerName}, Total: ₹${totalEstimate}`);
            console.log('📲 [MOCK] TO CLIENT:');
            console.log(`"Your estimated cost is ₹${totalEstimate}"`);
            console.log('------------------------------------------------');
        }

        res.status(201).json({ message: 'Estimate submitted successfully!', estimate: totalEstimate });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
