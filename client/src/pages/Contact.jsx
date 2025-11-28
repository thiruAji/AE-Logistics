import React, { useState } from 'react';
import SEOHelmet from '../components/SEOHelmet';

function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for contacting us! We will get back to you shortly.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="container" style={{ padding: '40px 20px' }}>
            <SEOHelmet
                title="Contact Us - Assalaamualaikum Enterprises"
                description="Get in touch with us for your moving and handyman needs. Call 84076882 or visit us at 30 Loyang Way, Singapore."
                keywords="contact movers singapore, moving quote, handyman contact, 30 loyang way"
            />
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h1 style={{ fontSize: '2.5rem', color: '#27ae60' }}>Contact Us</h1>
                <p style={{ fontSize: '1.2rem', color: '#666' }}>We are here to help you with your move.</p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'center' }}>

                {/* Contact Info */}
                <div className="card" style={{ flex: '1 1 300px', height: 'fit-content' }}>
                    <h3>Get in Touch</h3>
                    <p><strong>📍 Address:</strong><br />30 Loyang Way #06-07/08/09/10 Singapore 50876</p>
                    <p><strong>📞 Phone:</strong><br />+65 8407 6882</p>
                    <p><strong>📧 Email:</strong><br />info@assalaamualaikum.com</p>
                    <p><strong>⏰ Hours:</strong><br />Mon - Sat: 9:00 AM - 6:00 PM</p>
                </div>

                {/* Contact Form */}
                <div className="card" style={{ flex: '1 1 400px' }}>
                    <h3>Send us a Message</h3>
                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: '15px' }}>
                            <label style={{ display: 'block', marginBottom: '5px' }}>Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                style={{ width: '100%' }}
                            />
                        </div>
                        <div style={{ marginBottom: '15px' }}>
                            <label style={{ display: 'block', marginBottom: '5px' }}>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                style={{ width: '100%' }}
                            />
                        </div>
                        <div style={{ marginBottom: '15px' }}>
                            <label style={{ display: 'block', marginBottom: '5px' }}>Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
                            ></textarea>
                        </div>
                        <button type="submit" className="btn" style={{ width: '100%' }}>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
