import React from 'react';
import SEOHelmet from '../components/SEOHelmet';

function About() {
    return (
        <div className="container" style={{ padding: '40px 20px' }}>
            <SEOHelmet
                title="About Us - Assalaamualaikum Enterprises"
                description="Learn about our 30 years of experience in moving and handyman services. Trusted, efficient, and affordable movers in Singapore."
                keywords="about movers singapore, experienced movers, handyman services history, moving company profile"
            />
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h1 style={{ fontSize: '2.5rem', color: '#27ae60' }}>About Us</h1>
                <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '800px', margin: '0 auto' }}>
                    Serving our community with trust, care, and efficiency.
                </p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center' }}>
                <div style={{ flex: '1 1 400px' }}>
                    <img
                        src={`${import.meta.env.BASE_URL}assets/team-photo.jpg`}
                        alt="Our Team"
                        style={{ width: '100%', borderRadius: '10px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                        onError={(e) => { e.target.src = 'https://placehold.co/600x400/2ecc71/white?text=Our+Team' }}
                    />
                </div>
                <div style={{ flex: '1 1 400px' }}>
                    <h2 style={{ color: '#333' }}>Our Story</h2>
                    <p style={{ lineHeight: '1.6', color: '#555' }}>
                        Assalaamualaikum Enterprises started with a simple mission: to make house moving stress-free for families.
                        We are an <strong>experienced handyman and moving service</strong> dedicated to helping you settle into your new home with ease.
                        We understand that moving is not just about transporting furniture; it's about moving your life and memories.
                    </p>
                    <p style={{ lineHeight: '1.6', color: '#555' }}>
                        With over <strong>30 years of experience</strong>, our professional team ensures that every item, from the smallest box to the largest sofa, is handled with the utmost care.
                    </p>

                    <h3 style={{ marginTop: '30px', color: '#27ae60' }}>Why Choose Us?</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>✅ <strong>Trusted Service:</strong> We treat your belongings like our own.</li>
                        <li style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>✅ <strong>Affordable Rates:</strong> Honest pricing with no hidden fees.</li>
                        <li style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>✅ <strong>Timely Delivery:</strong> We value your time and schedule.</li>
                    </ul>
                </div>
            </div>

            {/* Our Team Section */}
            <div style={{ marginTop: '80px' }}>
                <h2 style={{ textAlign: 'center', fontSize: '2rem', color: '#27ae60', marginBottom: '40px' }}>Our Team</h2>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center' }}>
                    {/* Card 1: 30 Years of Experience */}
                    <div className="card fade-in" style={{
                        flex: '1 1 300px',
                        maxWidth: '350px',
                        textAlign: 'center',
                        padding: '40px 30px',
                        background: 'linear-gradient(135deg, #dbece2ff 0%, #a3f0c5ff 100%)',
                        color: 'black',
                        borderRadius: '15px',
                        boxShadow: '0 10px 30px rgba(39, 174, 96, 0.3)',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        animationDelay: '0.2s'
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-10px)';
                            e.currentTarget.style.boxShadow = '0 15px 40px rgba(39, 174, 96, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 10px 30px rgba(39, 174, 96, 0.3)';
                        }}>
                        <div style={{ marginBottom: '20px', height: '80px' }}>
                            <img src={`${import.meta.env.BASE_URL}assets/icon-experience.png`} alt="Experience Icon" style={{ height: '100%', objectFit: 'contain' }} />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', fontWeight: 'bold' }}>30 Years of Experience</h3>
                        <p style={{ fontSize: '1rem', lineHeight: '1.6', opacity: 0.95 }}>
                            Three decades of excellence in moving services. Our extensive experience ensures your belongings are handled with expert care and professionalism.
                        </p>
                    </div>

                    {/* Card 2: Skilled Handymen */}
                    <div className="card fade-in" style={{
                        flex: '1 1 300px',
                        maxWidth: '350px',
                        textAlign: 'center',
                        padding: '40px 30px',
                        background: 'linear-gradient(135deg, #fefefeff 0%, #f9fbfaff 100%)',
                        color: 'black',
                        borderRadius: '15px',
                        boxShadow: '0 10px 30px rgba(22, 160, 133, 0.3)',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        animationDelay: '0.4s'
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-10px)';
                            e.currentTarget.style.boxShadow = '0 15px 40px rgba(233, 244, 242, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 10px 30px rgba(220, 232, 230, 0.3)';
                        }}>
                        <div style={{ marginBottom: '20px', height: '80px' }}>
                            <img src={`${import.meta.env.BASE_URL}assets/icon-handyman.png`} alt="Handyman Icon" style={{ height: '100%', objectFit: 'contain' }} />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', fontWeight: 'bold' }}>Skilled Handymen</h3>
                        <p style={{ fontSize: '1rem', lineHeight: '1.6', opacity: 0.95 }}>
                            Beyond moving, our team includes skilled handymen ready to assist with furniture assembly, disassembly, and minor repairs.
                        </p>
                    </div>

                    {/* Card 3: Experienced Moving Team */}
                    <div className="card fade-in" style={{
                        flex: '1 1 300px',
                        maxWidth: '350px',
                        textAlign: 'center',
                        padding: '40px 30px',
                        background: 'linear-gradient(135deg, #c6e8dbff 0%, #67e29aff 100%)',
                        color: 'black',
                        borderRadius: '15px',
                        boxShadow: '0 10px 30px rgba(246, 241, 241, 0.3)',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        animationDelay: '0.6s'
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-10px)';
                            e.currentTarget.style.boxShadow = '0 15px 40px rgba(33, 145, 80, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 10px 30px rgba(33, 145, 80, 0.3)';
                        }}>
                        <div style={{ marginBottom: '20px', height: '80px' }}>
                            <img src={`${import.meta.env.BASE_URL}assets/icon-truck.png`} alt="Truck Icon" style={{ height: '100%', objectFit: 'contain' }} />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', fontWeight: 'bold' }}>Experienced Moving Team</h3>
                        <p style={{ fontSize: '1rem', lineHeight: '1.6', opacity: 0.95 }}>
                            Our movers are trained, efficient, and careful. We work as a cohesive unit to ensure your move is completed smoothly and on time.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
