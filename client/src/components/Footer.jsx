import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer style={{ background: '#333', color: 'white', padding: '60px 0 20px', marginTop: '50px' }}>
            <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'space-between' }}>

                {/* Column 1: About */}
                <div style={{ flex: '1 1 300px' }}>
                    <h3 style={{ color: '#27ae60', marginBottom: '20px' }}>Assalaamualaikum Enterprises</h3>
                    <p style={{ lineHeight: '1.6', color: '#ccc' }}>
                        Your trusted partner for house moving, disposal, and handyman services in Singapore.
                        We make your move stress-free with our experienced team and affordable rates.
                    </p>
                </div>

                {/* Column 2: Quick Links */}
                <div style={{ flex: '1 1 200px' }}>
                    <h3 style={{ color: 'white', marginBottom: '20px' }}>Quick Links</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '10px' }}><Link to="/" style={{ color: '#ccc', textDecoration: 'none' }}>Home</Link></li>
                        <li style={{ marginBottom: '10px' }}><Link to="/about" style={{ color: '#ccc', textDecoration: 'none' }}>About Us</Link></li>
                        <li style={{ marginBottom: '10px' }}><Link to="/services" style={{ color: '#ccc', textDecoration: 'none' }}>Services</Link></li>
                        <li style={{ marginBottom: '10px' }}><Link to="/blog" style={{ color: '#ccc', textDecoration: 'none' }}>Blog</Link></li>
                        <li style={{ marginBottom: '10px' }}><Link to="/contact" style={{ color: '#ccc', textDecoration: 'none' }}>Contact Us</Link></li>
                    </ul>
                </div>

                {/* Column 3: Contact Info */}
                <div style={{ flex: '1 1 300px' }}>
                    <h3 style={{ color: 'white', marginBottom: '20px' }}>Contact Us</h3>
                    <p style={{ marginBottom: '10px', color: '#ccc' }}>📍 30 Loyang Way #06-07/08/09/10 Singapore 50876</p>
                    <p style={{ marginBottom: '10px', color: '#ccc' }}>📞 +65 8407 6882</p>
                    <p style={{ marginBottom: '10px', color: '#ccc' }}>📧 info@assalaamualaikum.com</p>

                    <div style={{ marginTop: '20px', display: 'flex', gap: '15px' }}>
                        {/* Social Icons (Placeholders) */}
                        <span style={{ fontSize: '1.5rem', cursor: 'pointer' }}>📘</span>
                        <span style={{ fontSize: '1.5rem', cursor: 'pointer' }}>📸</span>
                        <span style={{ fontSize: '1.5rem', cursor: 'pointer' }}>🐦</span>
                    </div>
                </div>
            </div>

            <div style={{ textAlign: 'center', borderTop: '1px solid #444', marginTop: '40px', paddingTop: '20px', color: '#888', fontSize: '0.9rem' }}>
                <p>&copy; {new Date().getFullYear()} Assalaamualaikum Enterprises. All rights reserved. Website designed by Thiru.</p>
            </div>
        </footer>
    );
}

export default Footer;
