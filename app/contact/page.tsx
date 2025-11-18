import { Contact } from "@/components/contact";
import { Metadata } from "next";

export const metadata: Metadata = {
 title: "Contact Capitol Glass & Mirror - Get Your Free Quote Today",
 description: "Contact Capitol Glass & Mirror for professional glass services in Oklahoma. Free quotes, expert consultation, and quality installation. Serving Oklahoma City, Tulsa, and surrounding areas.",
 keywords: [
  "contact glass company Oklahoma",
  "glass quote Oklahoma",
  "glass consultation",
  "Oklahoma glass services",
  "free glass estimate"
 ],
 openGraph: {
  title: "Contact Capitol Glass & Mirror - Get Your Free Quote Today",
  description: "Contact Capitol Glass & Mirror for professional glass services in Oklahoma. Free quotes, expert consultation, and quality installation.",
  images: ['/Hero3.jpg'],
 },
 alternates: {
  canonical: '/contact',
 },
};

export default function ContactPage() {
 return <Contact />;
}