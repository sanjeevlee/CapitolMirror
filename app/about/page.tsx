import { About } from "@/components/about";
import { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FeaturedSnippet from "@/components/ui/FeaturedSnippet";

export const metadata: Metadata = {
 title: "About Capitol Glass & Mirror - Oklahoma's Premier Glass Company",
 description: "Learn about Capitol Glass & Mirror's history, expertise, and commitment to providing premium glass solutions in Oklahoma. Family-owned business with decades of experience.",
 keywords: [
  "about capitol glass",
  "glass company Oklahoma",
  "family owned glass business",
  "Oklahoma glass experts",
  "glass installation experience"
 ],
 openGraph: {
  title: "About Capitol Glass & Mirror - Oklahoma's Premier Glass Company",
  description: "Learn about Capitol Glass & Mirror's history, expertise, and commitment to providing premium glass solutions in Oklahoma.",
  images: ['/Hero2.jpg'],
 },
 alternates: {
  canonical: '/about',
 },
};

export default function AboutPage() {
 return (
   <>
     <Breadcrumbs 
       items={[
         { name: 'About Us', href: '/about' }
       ]} 
     />
     <About />
     <div className="container mx-auto px-4 py-12">
       <FeaturedSnippet
         question="How long has Capitol Glass & Mirror been in business?"
         answer="Capitol Glass & Mirror has been serving the Oklahoma City metro area since 1956, providing over 60 years of experience in custom glass and mirror solutions for both residential and commercial projects."
         source="/about"
       />
     </div>
   </>
 );
}