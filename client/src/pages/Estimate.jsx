import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SEOHelmet from '../components/SEOHelmet';

const FURNITURE_ITEMS = [
    { id: 'chair', name: 'Chair' },
    { id: 'table', name: 'Table' },
    { id: 'sofa', name: 'Sofa' },
    { id: 'bed', name: 'Bed' },
    { id: 'queen bed', name: 'Queen Bed' },
    { id: 'wardrobe', name: 'Wardrobe' },
    { id: 'fridge', name: 'Refrigerator' },
    { id: 'washing_machine', name: 'Washing Machine' },
    { id: 'tv', name: 'TV' },
    { id: 'box', name: 'Carton Box' },
];

function Estimate() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        customerName: '',
        phone: '',
        address: ''
    });
    const [items, setItems] = useState(
        FURNITURE_ITEMS.map(item => ({ ...item, count: 0 }))
    );
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const updateCount = (id, delta) => {
        setItems(items.map(item =>
            item.id === id ? { ...item, count: Math.max(0, item.count + delta) } : item
        ));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const selectedItems = items.filter(item => item.count > 0);

        if (selectedItems.length === 0) {
            alert('Please select at least one item to move.');
            setLoading(false);
            return;
        }

        try {
            await axios.post('http://localhost:5000/api/estimate', {
                ...formData,
                items: selectedItems.map(({ name, count }) => ({ name, count }))
            });

            alert('Estimate request sent successfully! We will contact you on WhatsApp shortly.');
            navigate('/');
        } catch (error) {
            console.error('Error submitting estimate:', error);
            alert('Failed to submit estimate. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <SEOHelmet
                title="Get a Free Estimate - Assalaamualaikum Enterprises"
                description="Request a free, no-obligation quote for your house moving or handyman needs. Competitive pricing starting from $150."
                keywords="moving quote singapore, free moving estimate, handyman price, moving cost calculator"
            />
            <h2 style={{ textAlign: 'center' }}>Get Your Moving Estimate</h2>
            <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
                <form onSubmit={handleSubmit}>
                    <h3>Your Details</h3>
                    <input
                        type="text"
                        name="customerName"
                        placeholder="Full Name"
                        required
                        value={formData.customerName}
                        onChange={handleInputChange}
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="WhatsApp Number"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                    />
                    <textarea
                        name="address"
                        placeholder="Moving From Address"
                        required
                        style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
                        value={formData.address}
                        onChange={handleInputChange}
                    />

                    <h3>Items to Move</h3>
                    <div style={{ maxHeight: '400px', overflowY: 'auto', marginBottom: '20px' }}>
                        {items.map(item => (
                            <div key={item.id} className="item-row">
                                <span>{item.name}</span>
                                <div className="counter">
                                    <button type="button" onClick={() => updateCount(item.id, -1)}>-</button>
                                    <span>{item.count}</span>
                                    <button type="button" onClick={() => updateCount(item.id, 1)}>+</button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button type="submit" className="btn" style={{ width: '100%' }} disabled={loading}>
                        {loading ? 'Sending...' : 'Submit Request'}
                    </button>
                    <p style={{ fontSize: '0.8rem', color: '#888', textAlign: 'center', marginTop: '10px' }}>
                        * The estimate will be sent to your WhatsApp. It is not shown here.
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Estimate;
