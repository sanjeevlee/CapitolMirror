"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
 Card,
 CardContent,
 CardDescription,
 CardHeader,
 CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

interface ContactProps {
 subPage?: string;
}
function getContactHref(title: string, detail: string) {
 if (title === "Phone") {
  const digits = detail.replace(/[^0-9+]/g, "");
  return { href: `tel:${digits}`, external: false };
 }
 if (title === "Email") {
  return { href: `mailto:${detail}`, external: false };
 }
 if (title === "Address") {
  const query = encodeURIComponent(detail);
  return { href: `https://maps.app.goo.gl/8iRFDDKXPSGfFhG57`, external: true };
 }
 return { href: "", external: false };
}
const contactDetails = [
 {
  icon: Phone,
  title: "Phone",
  detail: "405-789-1485",
  color: "from-green-400 to-emerald-500",
 },
 {
  icon: Mail,
  title: "Email",
  detail: "sales@capitolglassok.com",
  color: "from-pink-500 to-rose-400",
 },
 {
  icon: MapPin,
  title: "Address",
  detail: "3730 N. MacArthur Blvd Oklahoma City, OK 73122",
  color: "from-blue-500 to-cyan-400",
 },
 {
  icon: Clock,
  title: "Business Hours",
  detail: "Monday - Friday: 8AM–5PM",
  color: "from-amber-400 to-orange-500",
 },
];

export function Contact({ subPage }: ContactProps) {
 return (
  <section className="bg-gradient-to-br from-blue-100/50 via-indigo-100/50 to-blue-100/50 dark:from-zinc-950 dark:via-zinc-800 dark:to-zinc-900 py-10 px-6">
   <div className="max-w-7xl mx-auto">
    {/* Heading Section */}
    <div className="text-center mb-10">
     <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-400 to-sky-300 bg-clip-text text-transparent">
      Get in Touch
     </h1>
     <p className="text-slate-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
      We'd love to hear from you. Whether you have a question, need assistance, or just want to discuss glass solutions — we're here to help.
     </p>
    </div>
    {/* Grid Layout */}
    <div className="grid lg:grid-cols-2 gap-12 items-start">
     {/* Contact Form */}
     <Card className="bg-white border border-slate-200 shadow-sm p-5 rounded-3xl dark:bg-white/10 dark:backdrop-blur-lg dark:border-white/20 dark:shadow-2xl dark:shadow-cyan-500/20 transition-all duration-500">
      <CardHeader className="text-center">
       <CardTitle className="text-2xl font-semibold text-slate-900 dark:text-white">
        Send us a Message
       </CardTitle>
       <CardDescription className="text-slate-600 dark:text-gray-400">
        Fill out the form and our team will reach out soon.
       </CardDescription>
      </CardHeader>
      <CardContent>
       <form className="space-y-4">
        {/* Name Field */}
        <div>
         <label className="block text-sm mb-2 text-slate-700 dark:text-gray-300">First Name</label>
         <Input
          placeholder="Name"
          className="bg-white border border-slate-300 text-slate-900 dark:bg-white/10 dark:border-white/20 dark:text-white py-2 placeholder-slate-400 dark:placeholder-gray-400 "
         />
        </div>
        {/* Email & Phone */}
        <div>
         <label className="block text-sm mb-2 text-slate-700 dark:text-gray-300">Email</label>
         <Input
          type="email"
          placeholder="you@example.com"
          className="bg-white border border-slate-300 text-slate-900 dark:bg-white/10 dark:border-white/20 dark:text-white py-2 placeholder-slate-400 dark:placeholder-gray-400 "/>
        </div>
        <div>
         <label className="block text-sm mb-2 text-slate-700 dark:text-gray-300">Phone</label>
         <Input
          type="tel"
          placeholder="(555) 123-4567"
          className="bg-white border border-slate-300 text-slate-900 dark:bg-white/10 dark:border-white/20 dark:text-white py-2 placeholder-slate-400 dark:placeholder-gray-400 "/>
        </div>
        {/* Services Checkboxes */}
        <div>
         <label className="block text-sm mb-3 text-slate-700 dark:text-gray-300">
          Services I'm interested in:
         </label>
         <div className="grid sm:grid-cols-2 gap-3">
          {["Shower Glass", "Mirror Glass", "Commercial Glass", "Other"].map(
           (service) => (
            <label
             key={service}
             className="flex items-center space-x-1 bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100 dark:bg-white/5 dark:border-white/20 dark:text-gray-200 dark:hover:bg-white/10 rounded-md px-3 py-2 transition-all duration-200 cursor-pointer"
            >
             <input
              type="checkbox"
              className="accent-blue-700 dark:accent-blue-800 "/>
             <span>{service}</span>
            </label>
           )
          )}
         </div>
        </div>
        {/* Message */}
        <div>
         <label className="block text-sm mb-2 text-slate-700 dark:text-gray-300">Message</label>
         <textarea
          placeholder="Tell us about your project..."
          className="w-full h-32 px-3 py-2 bg-white border border-slate-300 text-slate-900 placeholder-slate-400 dark:bg-white/10 dark:border-white/20 dark:text-white dark:placeholder-gray-400 rounded-md  resize-none"></textarea>
        </div>
        {/* Submit */}
        <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold py-2 rounded-lg transition-all duration-300 shadow-md">
         Send Message
        </Button>
       </form>
      </CardContent>
     </Card>
     {/* Contact Info */}
     <Card className="bg-white border border-slate-200 shadow-sm p-5 rounded-3xl dark:bg-white/10 dark:backdrop-blur-lg dark:border-white/20 dark:shadow-2xl dark:shadow-cyan-500/20 transition-all duration-500">
      <CardHeader className="text-center">
       <CardTitle className="text-2xl font-semibold text-slate-900 dark:text-white">
        Contact Information
       </CardTitle>
       <CardDescription className="text-slate-600 dark:text-gray-300 text-base">
        Reach out to us directly — we’d love to connect and help with your needs.
       </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-2">
       {contactDetails.map((item, index) => (
        <div
         key={index}
         className="flex items-center space-x-4  transition-all duration-300 hover:scale-[1.02] group"
        >
         <div
          className={`p-3 rounded-xl bg-gradient-to-tr ${item.color} shadow-md group-hover:shadow-lg group-hover:shadow-white/20 transition-all`}
         >
          <item.icon className="h-5 w-5 text-white" />
         </div>
         <div>
          <p className="font-semibold text-slate-900 dark:text-white text-lg">{item.title}</p>
          {(() => {
           const { href, external } = getContactHref(item.title, item.detail);
           const content = (
            <span className="text-slate-600 dark:text-gray-300 text-sm leading-relaxed">
             {item.detail}
            </span>
           );
           if (!href) return content;
           if (item.title === "Business Hours") return content;
           return (
            <a
             href={href}
             {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
             className="text-slate-600 dark:text-gray-300 text-sm leading-relaxed hover:underline underline-offset-4 hover:text-slate-900 dark:hover:text-white"
            >
             {item.detail}
            </a>
           );
          })()}
         </div>
        </div>
       ))}
      </CardContent>
      <div className="col-span-1 lg:col-start-2">
       <Card className="overflow-hidden bg-white border border-slate-200 shadow-sm rounded-3xl dark:bg-white/10 dark:border-white/20">
        <CardHeader>
         <CardTitle className="text-xl font-semibold text-slate-900 dark:text-white">Find Us on the Map</CardTitle>
         <CardDescription className="text-slate-600 dark:text-gray-400">We’re located at 3730 N. MacArthur Blvd, Oklahoma City.</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
         <div className="aspect-[16/8] w-full">
          <iframe
           src="https://www.google.com/maps?q=3730%20N.%20MacArthur%20Blvd%20Oklahoma%20City%2C%20OK%2073122&output=embed"
           className="h-full w-full"
           style={{ border: 0 }}
           allowFullScreen
           loading="lazy"
           referrerPolicy="no-referrer-when-downgrade"
            title="Capitol Glass & Mirror Inc Location"
          ></iframe>
         </div>
        </CardContent>
       </Card>
      </div>
     </Card>
    </div>
   </div>
  </section>
 );
}
