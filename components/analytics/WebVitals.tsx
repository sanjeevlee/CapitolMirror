'use client';

import { useEffect } from 'react';

export function reportWebVitals(metric: any) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      non_interaction: true,
    });
  }

  // Send to custom analytics endpoint
  if (process.env.NODE_ENV === 'production') {
    fetch('/api/analytics/web-vitals', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(metric),
    }).catch((error) => {
      console.error('Failed to send web vitals:', error);
    });
  }
}

export default function WebVitals() {
  useEffect(() => {
    // Import web-vitals dynamically to avoid SSR issues
    import('web-vitals').then((webVitals) => {
      // Use the correct function names for web-vitals v5
      try {
        // Check if functions exist before calling them
        const functions = ['onCLS', 'onFID', 'onFCP', 'onLCP', 'onTTFB'];
        functions.forEach(funcName => {
          if (webVitals && typeof (webVitals as any)[funcName] === 'function') {
            (webVitals as any)[funcName](reportWebVitals);
          }
        });
      } catch (error) {
        console.error('Error initializing web vitals:', error);
      }
    }).catch((error) => {
      console.error('Failed to load web-vitals:', error);
    });
  }, []);

  return null;
}
