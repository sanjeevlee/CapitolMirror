import { Metadata } from 'next';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  image = '/Hero1.jpg',
  url = '',
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'Capitol Glass & Mirror',
  section,
  tags = []
}: SEOProps): Metadata {
  const baseUrl = 'https://capitolglassok.com';
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl;
  const imageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`;

  const defaultKeywords = [
    'glass services Oklahoma',
    'custom glass showers',
    'commercial glass',
    'mirrors Oklahoma',
    'glass installation',
    'Oklahoma City glass',
    'Tulsa glass services',
    'frameless glass showers',
    'glass doors',
    'custom mirrors'
  ];

  const allKeywords = [...new Set([...defaultKeywords, ...keywords])];

  const metadata: Metadata = {
    title: {
      default: title,
      template: '%s | Capitol Glass & Mirror'
    },
    description,
    keywords: allKeywords,
    authors: [{ name: author }],
    creator: author,
    publisher: 'Capitol Glass & Mirror',
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type:"website",
      locale: 'en_US',
      url: fullUrl,
      siteName: 'Capitol Glass & Mirror',
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(section && { section }),
      ...(tags.length > 0 && { tags }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
      creator: '@capitolglassok',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };

  return metadata;
}

export function generateStructuredData(type: 'localBusiness' | 'service' | 'product', data?: any) {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': type,
    name: 'Capitol Glass & Mirror',
    url: 'https://capitolglassok.com',
    logo: 'https://capitolglassok.com/capitol-logo.png',
    description: 'Professional glass and mirror services in Oklahoma',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
      addressRegion: 'Oklahoma'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      areaServed: 'Oklahoma'
    }
  };

  return data ? { ...baseData, ...data } : baseData;
}

export const seoConfig = {
  defaultTitle: 'Capitol Glass & Mirror - Premium Glass Solutions in Oklahoma',
  defaultDescription: 'Professional glass and mirror services in Oklahoma. Custom glass showers, commercial glass, mirrors, and glass solutions. Serving Oklahoma City, Tulsa, and surrounding areas.',
  defaultImage: '/Hero1.jpg',
  siteUrl: 'https://capitolglassok.com',
  twitterHandle: '@capitolglassok',
  facebookAppId: 'your-facebook-app-id', // Replace with actual Facebook App ID
};