import React from 'react';
import { Helmet } from 'react-helmet-async';

function StructuredData() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "MovingCompany",
        "name": "Assalaamualaikum Enterprises",
        "image": "/assets/logo-final.png",
        "description": "Professional moving and handyman services in Singapore with 30 years of experience",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "30 Loyang Way",
            "addressLocality": "Singapore",
            "addressCountry": "SG"
        },
        "telephone": "+65-84076882",
        "priceRange": "$$",
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                ],
                "opens": "09:00",
                "closes": "18:00"
            }
        ],
        "areaServed": {
            "@type": "Country",
            "name": "Singapore"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Moving and Handyman Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "House Moving Service",
                        "description": "Professional house moving with experienced team"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Handyman Service",
                        "description": "Skilled handyman services for furniture assembly and repairs"
                    }
                }
            ]
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "150"
        }
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </Helmet>
    );
}

export default StructuredData;
