import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
 title: 'Glass Services Oklahoma - Professional Glass Installation & Repair',
 description: 'Comprehensive glass services in Oklahoma including custom glass showers, commercial glass, mirrors, and glass repair. Serving Oklahoma City, Tulsa, and surrounding areas.',
 keywords: [
  'glass services Oklahoma',
  'glass installation Oklahoma',
  'glass repair Oklahoma',
  'custom glass Oklahoma',
  'Oklahoma glass company',
  'glass contractor Oklahoma'
 ],
 url: '/glass-services-oklahoma',
 image: '/Hero1.jpg'
});

export default function GlassServicesOklahoma() {
 return (
  <div className="container mx-auto px-4 py-8">
   <h1 className="text-4xl font-bold mb-6">Professional Glass Services in Oklahoma</h1>

   <div className="prose max-w-none">
    <p className="text-lg mb-6">
     Capitol Glass & Mirror is Oklahoma's premier glass service provider, offering comprehensive
     glass solutions for residential and commercial properties throughout the state.
    </p>

    <h2 className="text-2xl font-semibold mb-4">Our Glass Services Include:</h2>

    <div className="grid md:grid-cols-2 gap-6 mb-8">
     <div>
      <h3 className="text-xl font-semibold mb-2">Residential Glass Services</h3>
      <ul className="list-disc pl-6 space-y-2">
       <li>Custom Glass Showers</li>
       <li>Frameless Glass Doors</li>
       <li>Custom Mirrors</li>
       <li>Glass Shelves & Tabletops</li>
       <li>Window Glass Replacement</li>
       <li>Glass Repair Services</li>
      </ul>
     </div>

     <div>
      <h3 className="text-xl font-semibold mb-2">Commercial Glass Services</h3>
      <ul className="list-disc pl-6 space-y-2">
       <li>Storefront Glass Installation</li>
       <li>Office Building Glass</li>
       <li>Restaurant Glass Solutions</li>
       <li>Retail Space Glass</li>
       <li>Commercial Glass Repair</li>
       <li>Emergency Glass Services</li>
      </ul>
     </div>
    </div>

    <h2 className="text-2xl font-semibold mb-4">Service Areas in Oklahoma</h2>
    <p className="mb-4">
     We proudly serve the following areas in Oklahoma:
    </p>
    <div className="grid md:grid-cols-3 gap-4 mb-8">
     <div>
      <h4 className="font-semibold">Oklahoma City Metro</h4>
      <ul className="text-sm space-y-1">
       <li>Oklahoma City</li>
       <li>Edmond</li>
       <li>Norman</li>
       <li>Moore</li>
       <li>Yukon</li>
      </ul>
     </div>
     <div>
      <h4 className="font-semibold">Tulsa Metro</h4>
      <ul className="text-sm space-y-1">
       <li>Tulsa</li>
       <li>Broken Arrow</li>
       <li>Jenks</li>
       <li>Bixby</li>
       <li>Owasso</li>
      </ul>
     </div>
     <div> 
      <h4 className="font-semibold">Other Areas</h4>
      <ul className="text-sm space-y-1">
       <li>Stillwater</li>
       <li>Lawton</li>
       <li>Muskogee</li>
       <li>Enid</li>
       <li>And surrounding areas</li>
      </ul>
     </div>
    </div>

    <h2 className="text-2xl font-semibold mb-4">Why Choose Capitol Glass & Mirror?</h2>
    <div className="grid md:grid-cols-2 gap-6">
     <div>
      <h3 className="text-lg font-semibold mb-2">Experience & Expertise</h3>
      <p>With years of experience in the glass industry, our team brings unmatched expertise to every project.</p>
     </div>
     <div>
      <h3 className="text-lg font-semibold mb-2">Quality Materials</h3>
      <p>We use only the highest quality glass and materials to ensure durability and longevity.</p>
     </div>
     <div>
      <h3 className="text-lg font-semibold mb-2">Professional Installation</h3>
      <p>Our certified installers ensure proper installation for optimal performance and safety.</p>
     </div>
     <div>
      <h3 className="text-lg font-semibold mb-2">Customer Satisfaction</h3>
      <p>We're committed to exceeding customer expectations with every project we complete.</p>
     </div>
    </div>

    <div className="mt-8 p-6 bg-gray-50 rounded-lg">
     <h3 className="text-xl font-semibold mb-4">Ready to Get Started?</h3>
     <p className="mb-4">
      Contact Capitol Glass & Mirror today for a free consultation and quote on your glass project.
      We're here to help you find the perfect glass solution for your needs.
     </p>
     <a
      href="/contact"
      className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
     >
      Get Free Quote
     </a>
    </div>
   </div>
  </div>
 );
}