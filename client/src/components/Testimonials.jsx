import React from 'react';

function Testimonials() {
    const reviews = [
        {
            id: 1,
            name: "Sarah Tan",
            role: "Homeowner",
            text: "Assalaamualaikum Enterprises made my move so smooth! The team was professional, careful with my fragile items, and very efficient. Highly recommended!",
            rating: 5
        },
        {
            id: 2,
            name: "James Lim",
            role: "Business Owner",
            text: "We used their disposal services for our office renovation. They were quick, clean, and the price was very reasonable. Will definitely use them again.",
            rating: 5
        },
        {
            id: 3,
            name: "Aishah Binte Ali",
            role: "Resident",
            text: "The handyman service was a lifesaver. They assembled all my IKEA furniture perfectly and even fixed a loose cabinet door. Great job!",
            rating: 5
        }
    ];

    return (
        <div style={{ padding: '60px 20px', background: '#f9f9f9' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                    <h2 style={{ fontSize: '2.5rem', color: '#27ae60', marginBottom: '10px' }}>What Our Customers Say</h2>
                    <p style={{ fontSize: '1.2rem', color: '#666' }}>Trusted by families and businesses across Singapore.</p>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center' }}>
                    {reviews.map(review => (
                        <div key={review.id} className="card" style={{
                            flex: '1 1 300px',
                            maxWidth: '350px',
                            padding: '30px',
                            background: 'white',
                            borderRadius: '15px',
                            boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
                        }}>
                            <div style={{ color: '#f1c40f', fontSize: '1.2rem', marginBottom: '15px' }}>
                                {'★'.repeat(review.rating)}
                            </div>
                            <p style={{ fontStyle: 'italic', color: '#555', marginBottom: '20px', lineHeight: '1.6' }}>
                                "{review.text}"
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '50%',
                                    background: '#eee',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.5rem'
                                }}>
                                    👤
                                </div>
                                <div>
                                    <h4 style={{ margin: 0, color: '#333' }}>{review.name}</h4>
                                    <span style={{ fontSize: '0.9rem', color: '#888' }}>{review.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
