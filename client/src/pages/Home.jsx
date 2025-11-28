import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import SEOHelmet from '../components/SEOHelmet';
import Testimonials from '../components/Testimonials';

function FeatureCard({ icon, title, shortDesc, detailDesc }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div
            className="card feature-card"
            style={{
                flex: '1 1 300px',
                textAlign: 'center',
                padding: '40px 20px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                background: isExpanded ? '#f9f9f9' : 'white',
                transform: isExpanded ? 'scale(1.02)' : 'scale(1)'
            }}
            onClick={() => setIsExpanded(!isExpanded)}
        >
            <div style={{ fontSize: '3rem', marginBottom: '20px' }}>{icon}</div>
            <h3>{title}</h3>
            <p>{shortDesc}</p>
            {isExpanded && (
                <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid #eee', animation: 'fadeIn 0.5s' }}>
                    <p style={{ color: '#27ae60', fontWeight: '500' }}>{detailDesc}</p>
                </div>
            )}
            <div style={{ marginTop: '10px', fontSize: '0.8rem', color: '#999' }}>
                {isExpanded ? 'Show Less' : 'Click to Read More'}
            </div>
        </div>
    );
}

function Home() {
    return (
        <div>
            <SEOHelmet
                title="Assalaamualaikum Enterprises - Moving & Handyman Services Singapore"
                description="Professional moving and handyman services in Singapore. 30 years of experience. Affordable rates from $150. Call 84076882 for a free quote!"
                keywords="movers singapore, moving service singapore, handyman singapore, house moving, furniture moving, 30 loyang way, affordable movers"
            />
            {/* Hero Section with Slider */}
            <HeroSlider />

            {/* Features Section */}
            <div style={{
                padding: '80px 20px',
                backgroundImage: "url('/assets/team-photo.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                position: 'relative'
            }}>
                {/* Overlay for better readability if needed, though the white container handles it */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.3)' // Slight dark tint on the background image
                }}></div>

                <div className="container" style={{
                    position: 'relative',
                    zIndex: 1,
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    padding: '50px',
                    borderRadius: '15px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                }}>
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '50px' }}>Why Choose Us?</h2>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center' }}>
                        <FeatureCard
                            icon="🛡️"
                            title="Safe & Secure"
                            shortDesc="We use high-quality pack&wrap materials to ensure your belongings reach safely."
                            detailDesc="We wrap the things also protect every items also stack safe wise."
                        />
                        <FeatureCard
                            icon="⚡"
                            title="Fast Service"
                            shortDesc="On-time pickup and delivery. We respect your schedule and time."
                            detailDesc="We have experiance team and handy man so we can faster your moving."
                        />
                        <FeatureCard
                            icon="💰"
                            title="Best Prices"
                            shortDesc="Competitive rates with no hidden charges. Get an instant estimate today."
                            detailDesc="We stack upto 6ft to 7 ft so this make fill lorry space exact so this is cost efficient."
                        />
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <Testimonials />

            {/* CTA Section */}
            <div style={{ background: '#27ae60', color: 'white', padding: '60px 20px', textAlign: 'center' }}>
                <h2 style={{ marginBottom: '20px' }}>Ready to Move?</h2>
                <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>Let us handle the heavy lifting for you.</p>
                <Link to="/contact">
                    <button className="btn" style={{ background: 'white', color: '#27ae60', fontWeight: 'bold' }}>Contact Us Now</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;
