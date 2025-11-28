import React from 'react';
import { Helmet } from 'react-helmet-async';

function SEOHelmet({
    title = "Assalaamualaikum Enterprises - Moving & Handyman Services Singapore",
    description = "Professional moving and handyman services in Singapore. 30 years of experience. Affordable rates, trusted service. Call 84076882 for a free quote!",
    keywords = "movers singapore, moving service singapore, handyman singapore, house moving, furniture moving, 30 loyang way",
    ogImage = "/assets/logo-final.png",
    ogUrl = window.location.href
}) {
    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={ogUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={ogUrl} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={ogImage} />
        </Helmet>
    );
}

export default SEOHelmet;
