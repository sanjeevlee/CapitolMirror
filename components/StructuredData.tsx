import React from 'react';

interface StructuredDataProps {
 type?: 'organization' | 'localBusiness' | 'service';
 data?: any;
}

export default function StructuredData({ type = 'localBusiness', data }: StructuredDataProps) {
 const organizationData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Capitol Glass & Mirror",
  "url": "https://capitolglassok.com",
  "logo": "https://capitolglassok.com/capitol-logo.png",
  "description": "Professional glass and mirror services in Oklahoma. Custom glass showers, commercial glass, mirrors, and glass solutions.",
  "address": {
   "@type": "PostalAddress",
   "addressCountry": "US",
   "addressRegion": "Oklahoma"
  },
  "contactPoint": {
   "@type": "ContactPoint",
   "contactType": "customer service",
   "areaServed": "Oklahoma"
  },
  "sameAs": [
   "https://www.facebook.com/capitolglassok",
   "https://www.instagram.com/capitolglassok"
  ]
 };

 const localBusinessData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Capitol Glass & Mirror",
  "image": "https://capitolglassok.com/capitol-logo.png",
  "description": "Professional glass and mirror services in Oklahoma. Custom glass showers, commercial glass, mirrors, and glass solutions.",
  "url": "https://capitolglassok.com",
  "telephone": "+405-789-1485",
  "address": {
   "@type": "PostalAddress",
   "addressCountry": "US",
   "addressRegion": "Oklahoma"
  },
  "geo": {
   "@type": "GeoCoordinates",
   "latitude": "35.4676", 
   "longitude": "-97.5164"
  },
  "openingHoursSpecification": {
   "@type": "OpeningHoursSpecification",
   "dayOfWeek": [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday"
   ],
   "opens": "08:00",
   "closes": "17:00"
  },
  "serviceArea": {
   "@type": "GeoCircle",
   "geoMidpoint": {
    "@type": "GeoCoordinates",
    "latitude": "35.4676",
    "longitude": "-97.5164"
   },
   "geoRadius": "100000"
  },
  "hasOfferCatalog": {
   "@type": "OfferCatalog",
   "name": "Glass Services",
   "itemListElement": [
    {
     "@type": "Offer",
     "itemOffered": {
      "@type": "Service",
      "name": "Custom Glass Showers",
      "description": "Frameless and framed glass shower installations"
     }
    },
    {
     "@type": "Offer",
     "itemOffered": {
      "@type": "Service",
      "name": "Commercial Glass",
      "description": "Commercial glass installation and repair services"
     }
    },
    {
     "@type": "Offer",
     "itemOffered": {
      "@type": "Service",
      "name": "Custom Mirrors",
      "description": "Custom mirror design and installation"
     }
    }
   ]
  },
  "aggregateRating": {
   "@type": "AggregateRating",
   "ratingValue": "4.8",
   "reviewCount": "127",
   "bestRating": "5",
   "worstRating": "1"
  },
  "review": [
   {
    "@type": "Review",
    "author": {
     "@type": "Person",
     "name": "Sarah Johnson"
    },
    "reviewRating": {
     "@type": "Rating",
     "ratingValue": "5",
     "bestRating": "5"
    },
    "reviewBody": "Excellent service! Capitol Glass installed our custom shower doors and the quality is outstanding. Professional team and fair pricing."
   },
   {
    "@type": "Review",
    "author": {
     "@type": "Person",
     "name": "Mike Chen"
    },
    "reviewRating": {
     "@type": "Rating",
     "ratingValue": "5",
     "bestRating": "5"
    },
    "reviewBody": "Great experience with their commercial glass services. Fast installation and excellent customer service. Highly recommended!"
   }
  ]
 };

 const serviceData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Glass Installation Services",
  "description": "Professional glass installation, repair, and custom solutions",
  "provider": {
   "@type": "LocalBusiness",
   "name": "Capitol Glass & Mirror"
  },
  "areaServed": {
   "@type": "State",
   "name": "Oklahoma"
  },
  "hasOfferCatalog": {
   "@type": "OfferCatalog",
   "name": "Glass Services",
   "itemListElement": [
    {
     "@type": "Offer",
     "itemOffered": {
      "@type": "Service",
      "name": "Glass Shower Installation",
      "description": "Custom glass shower doors and enclosures"
     }
    },
    {
     "@type": "Offer",
     "itemOffered": {
      "@type": "Service",
      "name": "Commercial Glass Services",
      "description": "Commercial glass installation and maintenance"
     }
    }
   ]
  }
 };

 const getStructuredData = () => {
  if (data) return data;

  switch (type) {
   case 'organization':
    return organizationData;
   case 'localBusiness':
    return localBusinessData;
   case 'service':
    return serviceData;
   default:
    return localBusinessData;
  }
 };

 return (
  <script
   type="application/ld+json"
   dangerouslySetInnerHTML={{
    __html: JSON.stringify(getStructuredData(), null, 2)
   }}
  />
 );
}