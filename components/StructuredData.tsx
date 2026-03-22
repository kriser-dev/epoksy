import React from 'react';

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
    "priceRange": "$$"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export default StructuredData;