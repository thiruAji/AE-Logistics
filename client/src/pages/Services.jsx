import React from 'react';
import SEOHelmet from '../components/SEOHelmet';
import FAQ from '../components/FAQ';

function Services() {
    const services = [
        {
            id: 1,
            title: "House Moving",
            description: "Professional house moving services tailored to your needs. We handle everything from small apartments to large landed properties with care and efficiency.",
            image: "/assets/service-moving.png"
        },
        {
            id: 2,
            title: "Disposal Services",
            description: "Eco-friendly disposal of unwanted furniture and household items. We ensure proper recycling and disposal of your old belongings.",
            image: "/assets/service-disposal.png"
        },
        {
            id: 3,
            title: "Storage Solutions",
            description: "Secure and clean storage facilities for your short-term or long-term needs. Keep your belongings safe while you transition between homes.",
            image: "/assets/service-storage.png"
        },
        {
            id: 4,
            title: "Professional Packing",
            description: "Expert packing services using high-quality materials. We wrap your fragile items, electronics, and furniture to prevent any damage during transit.",
            image: "/assets/service-packing.png"
        }
    ];

    return (
        <div className="container" style={{ padding: '40px 20px' }}>
            <SEOHelmet
                title="Our Services - Assalaamualaikum Enterprises"
                description="Explore our range of professional services: House Moving, Furniture Disposal, Storage Solutions, and Professional Packing in Singapore."
                keywords="house moving service, furniture disposal, storage singapore, packing service, movers services"
            />

            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                <h1 style={{ fontSize: '2.5rem', color: '#27ae60', marginBottom: '10px' }}>Our Services</h1>
                <p style={{ fontSize: '1.2rem', color: '#666' }}>Comprehensive moving and handyman solutions for every need.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                {services.map((service, index) => (
                    <div key={service.id} className="card fade-in" style={{
                        padding: '0',
                        overflow: 'hidden',
                        borderRadius: '15px',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                        transition: 'transform 0.3s ease',
                        cursor: 'pointer',
                        animationDelay: `${index * 0.2}s`
                    }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        <div style={{ height: '250px', overflow: 'hidden' }}>
                            <img
                                src={service.image}
                                alt={service.title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            />
                        </div>
                        <div style={{ padding: '30px' }}>
                            <h3 style={{ fontSize: '1.8rem', color: '#27ae60', marginBottom: '15px' }}>{service.title}</h3>
                            <p style={{ color: '#555', lineHeight: '1.6', fontSize: '1rem' }}>{service.description}</p>
                            <button className="btn" style={{
                                marginTop: '20px',
                                background: 'transparent',
                                color: '#27ae60',
                                border: '2px solid #27ae60',
                                padding: '10px 20px',
                                borderRadius: '30px',
                                fontWeight: 'bold',
                                cursor: 'pointer'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = '#27ae60';
                                    e.currentTarget.style.color = 'white';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'transparent';
                                    e.currentTarget.style.color = '#27ae60';
                                }}
                            >
                                Learn More
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* FAQ Section */}
            <FAQ />
        </div>
    );
}

export default Services;
