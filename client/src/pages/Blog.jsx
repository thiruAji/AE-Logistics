import React from 'react';
import SEOHelmet from '../components/SEOHelmet';

function Blog() {
    const articles = [
        {
            id: 1,
            title: "Top 10 Tips for a Stress-Free House Move",
            date: "October 24, 2023",
            excerpt: "Moving can be overwhelming. Here are our top 10 tips to make your shift smooth and hassle-free, from packing early to labeling boxes.",
            content: "1. Start Early: Don't wait until the last minute. \n2. Declutter: Get rid of things you don't need. \n3. Label Everything: Mark boxes by room. \n4. Hire Professionals: Call Assalaamualaikum Enterprises!..."
        },
        {
            id: 2,
            title: "How to Pack Fragile Items Safely",
            date: "November 5, 2023",
            excerpt: "Worried about your glassware and electronics? Learn the best techniques for bubble wrapping and securing your delicate belongings.",
            content: "Use plenty of bubble wrap. Pack plates vertically like records. Fill empty spaces in boxes with paper to prevent shifting..."
        },
        {
            id: 3,
            title: "The Benefits of Hiring Professional Movers",
            date: "November 15, 2023",
            excerpt: "Why DIY when you can hire experts? Discover how professional movers save you time, money, and back pain.",
            content: "Professional movers have the right equipment, trucks, and experience. We handle the heavy lifting so you can focus on settling into your new home..."
        }
    ];

    return (
        <div className="container" style={{ padding: '40px 20px' }}>
            <SEOHelmet
                title="Moving Tips & Blog - Assalaamualaikum Enterprises"
                description="Read our latest tips and guides on house moving, packing, and home maintenance in Singapore."
                keywords="moving tips, packing guide, home maintenance singapore, moving blog"
            />
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                <h1 style={{ fontSize: '2.5rem', color: '#27ae60' }}>Moving Blog & Tips</h1>
                <p style={{ fontSize: '1.2rem', color: '#666' }}>Expert advice for your next big move.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                {articles.map(article => (
                    <article key={article.id} className="card" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                        <img
                            src={`https://placehold.co/600x400/2ecc71/white?text=${encodeURIComponent(article.title)}`}
                            alt={article.title}
                            style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                        />
                        <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <div style={{ fontSize: '0.9rem', color: '#888', marginBottom: '10px' }}>{article.date}</div>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#333' }}>{article.title}</h2>
                            <p style={{ color: '#555', lineHeight: '1.6', flex: 1 }}>{article.excerpt}</p>
                            <button className="btn" style={{ marginTop: '20px', alignSelf: 'start', background: 'transparent', color: '#27ae60', border: '1px solid #27ae60' }}>Read More</button>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}

export default Blog;
