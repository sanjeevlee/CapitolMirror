import React from 'react';

interface FeaturedSnippetProps {
  question: string;
  answer: string;
  source?: string;
  className?: string;
}

export default function FeaturedSnippet({ 
  question, 
  answer, 
  source, 
  className = '' 
}: FeaturedSnippetProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Question",
    "name": question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": answer,
      ...(source && { "url": source })
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData, null, 2)
        }}
      />
      <div className={`bg-muted/30 border-l-4 border-primary p-6 rounded-r-lg ${className}`}>
        <h3 className="text-lg font-semibold text-foreground mb-3">
          {question}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {answer}
        </p>
        {source && (
          <p className="text-sm text-muted-foreground mt-3">
            Source: <a href={source} className="text-primary hover:underline">{source}</a>
          </p>
        )}
      </div>
    </>
  );
}
