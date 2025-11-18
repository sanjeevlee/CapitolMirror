import React from 'react';
import Image from 'next/image';

interface SEOImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  caption?: string;
  structuredData?: boolean;
}

export default function SEOImage({ 
  src, 
  alt, 
  width, 
  height, 
  className = '', 
  priority = false,
  caption,
  structuredData = false 
}: SEOImageProps) {
  const imageStructuredData = structuredData ? {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "url": src.startsWith('http') ? src : `https://capitolglassok.com${src}`,
    "width": width,
    "height": height,
    "caption": caption || alt,
    "contentUrl": src.startsWith('http') ? src : `https://capitolglassok.com${src}`,
    "encodingFormat": "image/jpeg"
  } : null;

  return (
    <>
      {structuredData && imageStructuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(imageStructuredData, null, 2)
          }}
        />
      )}
      <figure className={className}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className="w-full h-auto"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {caption && (
          <figcaption className="text-sm text-muted-foreground mt-2 text-center">
            {caption}
          </figcaption>
        )}
      </figure>
    </>
  );
}
