import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav style={{ background: 'white', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', position: 'sticky', top: 0, zIndex: 1000 }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 20px', position: 'relative', height: '80px' }}>
                <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                    <img
                        src={`${import.meta.env.BASE_URL}assets/logo-final.png`}
                        alt="Assalaamualaikum Enterprises"
                        style={{
                            height: '375px',
                            width: 'auto',
                            mixBlendMode: 'multiply',
                            display: 'block',
                            position: 'absolute',
                            top: '-150px',
                            left: '20px',
                            zIndex: 999
                        }}
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="desktop-menu" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/about" className="nav-link">About Us</Link>
                    <Link to="/services" className="nav-link">Services</Link>
                    <Link to="/blog" className="nav-link">Blog</Link>
                    <Link to="/contact" className="nav-link">Contact Us</Link>
                    <Link to="/booking">
                        <button className="btn" style={{ padding: '8px 20px', fontSize: '1rem' }}>Get Estimate</button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="mobile-menu-btn" onClick={toggleMenu} style={{ cursor: 'pointer', position: 'relative', zIndex: 1002 }}>
                    <div style={{ width: '25px', height: '3px', background: '#333', margin: '5px 0' }}></div>
                    <div style={{ width: '25px', height: '3px', background: '#333', margin: '5px 0' }}></div>
                    <div style={{ width: '25px', height: '3px', background: '#333', margin: '5px 0' }}></div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="mobile-menu" style={{ background: 'white', padding: '20px', borderTop: '1px solid #eee' }}>
                    <Link to="/" className="nav-link-mobile" onClick={toggleMenu}>Home</Link>
                    <Link to="/about" className="nav-link-mobile" onClick={toggleMenu}>About Us</Link>
                    <Link to="/services" className="nav-link-mobile" onClick={toggleMenu}>Services</Link>
                    <Link to="/blog" className="nav-link-mobile" onClick={toggleMenu}>Blog</Link>
                    <Link to="/contact" className="nav-link-mobile" onClick={toggleMenu}>Contact Us</Link>
                    <Link to="/booking" onClick={toggleMenu}>
                        <button className="btn" style={{ width: '100%', marginTop: '10px' }}>Get Estimate</button>
                    </Link>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
