import { Metadata } from "next";
import CommercialGlassClient from "./CommercialGlassClient";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQ from "@/components/ui/FAQ";

export const metadata: Metadata = {
  title: "Commercial Glass Services Oklahoma - Capitol Glass & Mirror",
  description: "Professional commercial glass installation and repair services in Oklahoma. Storefronts, office buildings, restaurants, and retail spaces. Expert commercial glass solutions.",
  keywords: [
    "commercial glass Oklahoma",
    "storefront glass installation",
    "office building glass",
    "restaurant glass",
    "retail glass services",
    "commercial glass repair",
    "Oklahoma commercial glass"
  ],
  openGraph: {
    title: "Commercial Glass Services Oklahoma - Capitol Glass & Mirror",
    description: "Professional commercial glass installation and repair services in Oklahoma. Storefronts, office buildings, restaurants, and retail spaces.",
    images: ['/CommercialGlass/commercialglass.jpg'],
  },
  alternates: {
    canonical: '/CommercialGlass',
  },
};

const commercialGlassFAQs = [
  {
    question: "How long does commercial glass installation take?",
    answer: "Commercial glass installations typically take 1-3 days depending on the scope and complexity of the project. Large storefronts or office buildings may require additional time."
  },
  {
    question: "Do you provide emergency glass repair services?",
    answer: "Yes, we offer emergency glass repair services for commercial properties in the Oklahoma City area. We understand that broken glass can be a security risk and work quickly to restore your property."
  },
  {
    question: "What types of commercial glass do you install?",
    answer: "We install all types of commercial glass including storefronts, office building windows, restaurant glass, retail displays, glass partitions, and security glass."
  },
  {
    question: "Do you work with insurance companies?",
    answer: "Yes, we work directly with insurance companies to help streamline the repair process for commercial glass damage claims."
  }
];

export default function CommercialGlass() {
  return (
    <>
      
      <CommercialGlassClient />
      <div className="container mx-auto px-4 py-12">
        <FAQ faqs={commercialGlassFAQs} title="Commercial Glass FAQs" />
      </div>
    </>
  );
}
