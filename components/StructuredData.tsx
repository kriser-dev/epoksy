import React, { useMemo } from 'react';

const StructuredData = () => {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Epoksy",
    "image": "https://epoksy.pl/logo.png",
    "telephone": "+48500600700",
    "url": "https://epoksy.pl",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Przemysłowa 5",
      "addressLocality": "Poznań",
      "postalCode": "60-101",
      "addressCountry": "PL"
    },
    "priceRange": "$$",
    "description": "Profesjonalne posadzki żywiczne przemysłowe - epoksydowe i poliuretanowe",
    "openingHoursSpecification": [{
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "07:00",
      "closes": "15:00"
    }],
    "sameAs": [
      "https://facebook.com/epoksy",
      "https://instagram.com/epoksy",
      "https://linkedin.com/company/epoksy"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    }
  };

  const jsonLd = useMemo(() => JSON.stringify(data), [data]);

  return (
    <script
      key="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd }}
    />
  );
};

export default StructuredData;