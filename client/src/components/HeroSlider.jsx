import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SLIDE_IMAGES = [
    "https://placehold.co/1920x800/2ecc71/white?text=Professional+House+Moving",
    "https://placehold.co/1920x800/27ae60/white?text=Safe+and+Secure+Packing",
    "https://placehold.co/1920x800/eafaf1/27ae60?text=Affordable+Moving+Services"
];

function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % SLIDE_IMAGES.length);
        }, 4000); // Change slide every 4 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <div style={{ position: 'relative', height: '600px', overflow: 'hidden', color: 'white' }}>
            {/* Background Images */}
            {SLIDE_IMAGES.map((img, index) => (
                <div
                    key={index}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url(${img})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        opacity: currentSlide === index ? 1 : 0,
                        transition: 'opacity 1s ease-in-out',
                        zIndex: -1
                    }}
                />
            ))}

            {/* Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(0, 0, 0, 0.5)', // Dark overlay for text readability
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                padding: '20px'
            }}>
                <h1 className="fade-in" style={{ fontSize: '4rem', marginBottom: '20px', color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                    Move with Peace of Mind
                </h1>
                <p className="fade-in" style={{ fontSize: '1.5rem', marginBottom: '40px', maxWidth: '800px', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                    Professional, reliable, and affordable house moving services by <strong>Assalaamualaikum Enterprises</strong>.
                </p>
                <div className="fade-in">
                    <Link to="/booking">
                        <button className="btn" style={{ fontSize: '1.3rem', padding: '15px 50px', borderRadius: '50px', border: '2px solid white', background: '#2ecc71' }}>
                            Get a Free Estimate
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default HeroSlider;
