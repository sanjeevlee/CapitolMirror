import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/Provider/theme-provider";
import { HydrationBoundary } from "@/components/Provider/HydrationBoundary";
import NavHeader from "@/components/header";
import Footer from "@/components/ui/Footer";
import StructuredData from "@/components/StructuredData";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import WebVitals from "@/components/analytics/WebVitals";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"], 
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Capitol Glass & Mirror - Premium Glass Solutions in Oklahoma",
    template: "%s | Capitol Glass & Mirror"
  },
  description: "Professional glass and mirror services in Oklahoma. Custom glass showers, commercial glass, mirrors, and glass solutions. Serving Oklahoma City, Tulsa, and surrounding areas.",
  keywords: [
    "glass services Oklahoma",
    "custom glass showers",
    "commercial glass",
    "mirrors Oklahoma",
    "glass installation",
    "Oklahoma City glass",
    "Tulsa glass services",
    "frameless glass showers",
    "glass doors",
    "custom mirrors"
  ],
  authors: [{ name: "Capitol Glass & Mirror" }],
  creator: "Capitol Glass & Mirror",
  publisher: "Capitol Glass & Mirror",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://capitolglassok.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://capitolglassok.com',
    siteName: 'Capitol Glass & Mirror',
    title: 'Capitol Glass & Mirror - Premium Glass Solutions in Oklahoma',
    description: 'Professional glass and mirror services in Oklahoma. Custom glass showers, commercial glass, mirrors, and glass solutions.',
    images: [
      {
        url: '/Hero1.jpg',
        width: 1200,
        height: 630,
        alt: 'Capitol Glass & Mirror - Premium Glass Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Capitol Glass & Mirror - Premium Glass Solutions in Oklahoma',
    description: 'Professional glass and mirror services in Oklahoma. Custom glass showers, commercial glass, mirrors, and glass solutions.',
    images: ['/Hero1.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head> 
        <StructuredData type="localBusiness" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground transition-colors`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <HydrationBoundary>
            <NavHeader />
            {children}
            <Footer />
            <WebVitals />
          </HydrationBoundary>
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
      </body>
    </html>
  );
}
