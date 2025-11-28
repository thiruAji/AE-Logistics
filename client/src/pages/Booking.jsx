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

function Booking() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        customerName: '',
        phone: '',
        address: '',
        moveDate: '',
        moveTime: ''
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
            // We'll still use the estimate endpoint for now, or a new booking one if available.
            // For now, we send the extra fields which the backend will likely just include in the message.
            await axios.post('http://localhost:5000/api/estimate', {
                ...formData,
                items: selectedItems.map(({ name, count }) => ({ name, count }))
            });

            alert('Booking request sent successfully! We will contact you on WhatsApp shortly to confirm.');
            navigate('/');
        } catch (error) {
            console.error('Error submitting booking:', error);
            alert('Failed to submit booking. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container" style={{ padding: '40px 20px' }}>
            <SEOHelmet
                title="Book Your Move - Assalaamualaikum Enterprises"
                description="Schedule your house move or handyman service online. Choose your preferred date and time. Fast, reliable, and affordable."
                keywords="book movers singapore, schedule moving service, online moving booking, handyman appointment"
            />
            <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: '#27ae60', marginBottom: '30px' }}>Book Your Move</h2>
            <div className="card" style={{ maxWidth: '600px', margin: '0 auto', padding: '30px', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <form onSubmit={handleSubmit}>
                    <h3 style={{ marginBottom: '20px', color: '#333' }}>Your Details</h3>
                    <div style={{ marginBottom: '15px' }}>
                        <input
                            type="text"
                            name="customerName"
                            placeholder="Full Name"
                            required
                            value={formData.customerName}
                            onChange={handleInputChange}
                            style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem' }}
                        />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="WhatsApp Number"
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                            style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem' }}
                        />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <textarea
                            name="address"
                            placeholder="Moving From Address"
                            required
                            style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem', minHeight: '80px' }}
                            value={formData.address}
                            onChange={handleInputChange}
                        />
                    </div>

                    <h3 style={{ marginBottom: '20px', color: '#333', marginTop: '30px' }}>Preferred Schedule</h3>
                    <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
                        <div style={{ flex: 1 }}>
                            <label style={{ display: 'block', marginBottom: '5px', color: '#666' }}>Date</label>
                            <input
                                type="date"
                                name="moveDate"
                                required
                                value={formData.moveDate}
                                onChange={handleInputChange}
                                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem' }}
                            />
                        </div>
                        <div style={{ flex: 1 }}>
                            <label style={{ display: 'block', marginBottom: '5px', color: '#666' }}>Time</label>
                            <input
                                type="time"
                                name="moveTime"
                                required
                                value={formData.moveTime}
                                onChange={handleInputChange}
                                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem' }}
                            />
                        </div>
                    </div>

                    <h3 style={{ marginBottom: '20px', color: '#333', marginTop: '30px' }}>Items to Move</h3>
                    <div style={{ maxHeight: '300px', overflowY: 'auto', marginBottom: '20px', border: '1px solid #eee', borderRadius: '8px', padding: '10px' }}>
                        {items.map(item => (
                            <div key={item.id} className="item-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', borderBottom: '1px solid #f5f5f5' }}>
                                <span style={{ fontSize: '1rem', color: '#555' }}>{item.name}</span>
                                <div className="counter" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <button type="button" onClick={() => updateCount(item.id, -1)} style={{ width: '30px', height: '30px', borderRadius: '50%', border: 'none', background: '#eee', cursor: 'pointer', fontSize: '1.2rem' }}>-</button>
                                    <span style={{ width: '20px', textAlign: 'center', fontWeight: 'bold' }}>{item.count}</span>
                                    <button type="button" onClick={() => updateCount(item.id, 1)} style={{ width: '30px', height: '30px', borderRadius: '50%', border: 'none', background: '#27ae60', color: 'white', cursor: 'pointer', fontSize: '1.2rem' }}>+</button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button type="submit" className="btn" style={{ width: '100%', padding: '15px', fontSize: '1.1rem', marginTop: '10px' }} disabled={loading}>
                        {loading ? 'Sending Request...' : 'Get Estimate'}
                    </button>
                    <p style={{ fontSize: '0.9rem', color: '#888', textAlign: 'center', marginTop: '15px' }}>
                        * We will confirm your booking via WhatsApp.
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Booking;
