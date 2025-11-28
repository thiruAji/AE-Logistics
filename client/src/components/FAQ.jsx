import React, { useState } from 'react';

function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "Do you provide packing materials?",
            answer: "Yes, we can provide boxes, tape, bubble wrap, and other packing materials upon request. We also offer full packing services if you prefer us to handle everything."
        },
        {
            question: "How far in advance should I book my move?",
            answer: "We recommend booking at least 1-2 weeks in advance to ensure your preferred date and time slot. However, we do our best to accommodate last-minute requests."
        },
        {
            question: "Are there any hidden charges?",
            answer: "No, we believe in transparent pricing. The quote we provide includes all agreed-upon services. Any potential extra costs (e.g., for stairs if no lift is available) will be discussed upfront."
        },
        {
            question: "Do you offer disposal services?",
            answer: "Yes, we provide disposal services for old furniture and household items. We ensure they are disposed of responsibly at designated recycling or disposal centers."
        },
        {
            question: "Is my furniture insured during the move?",
            answer: "We take every precaution to ensure the safety of your items. Basic insurance coverage is included, and we can discuss additional coverage options for high-value items."
        }
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div style={{ padding: '60px 20px', background: 'white' }}>
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                    <h2 style={{ fontSize: '2.5rem', color: '#27ae60', marginBottom: '10px' }}>Frequently Asked Questions</h2>
                    <p style={{ fontSize: '1.2rem', color: '#666' }}>Got questions? We have answers.</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    {faqs.map((faq, index) => (
                        <div key={index} style={{
                            border: '1px solid #eee',
                            borderRadius: '10px',
                            overflow: 'hidden',
                            boxShadow: activeIndex === index ? '0 5px 15px rgba(0,0,0,0.05)' : 'none',
                            transition: 'all 0.3s ease'
                        }}>
                            <div
                                onClick={() => toggleFAQ(index)}
                                style={{
                                    padding: '20px',
                                    background: activeIndex === index ? '#f9f9f9' : 'white',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    fontWeight: 'bold',
                                    color: '#333'
                                }}
                            >
                                <span>{faq.question}</span>
                                <span style={{
                                    transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0)',
                                    transition: 'transform 0.3s ease',
                                    color: '#27ae60'
                                }}>
                                    ▼
                                </span>
                            </div>
                            {activeIndex === index && (
                                <div style={{ padding: '20px', borderTop: '1px solid #eee', color: '#555', lineHeight: '1.6', background: 'white' }}>
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FAQ;
