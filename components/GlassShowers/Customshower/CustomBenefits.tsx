import React from "react";
import {
 Home,
 Leaf,
 MapPin,
 Wrench,
 DollarSign,
 Palette,
 Droplets,
 Snowflake,
 Waypoints,
} from "lucide-react";
import Button from "@/components/ui/button";

const benefits = [
 {
  icon: <Home className="w-8 h-8 text-red-600" />,
  title: "Trusted Experience Since 1956",
  description: "Over 60 years in custom glass and mirror work across OKC — bringing precision and reliability to every project."
 },
 {
  icon: <Leaf className="w-8 h-8 text-green-600" />,
  title: "Wide Product Range",
  description: "From showers to specialty glass, mirrors to glass wall partitions, we do it all — residential and commercial."
 },
 {
  icon: <MapPin className="w-8 h-8 text-blue-600" />,
  title: "Custom Fabrication & Local Fitting",
  description: "All work is done locally with custom measurements, designed to fit perfectly for your space."
 },
 {
  icon: <Wrench className="w-8 h-8 text-orange-600" />,
  title: "Attention to Detail",
  description: "We hold our glasswork to the highest standards, emphasizing accuracy in every cut, finish, and installation."
 },
 {
  icon: <DollarSign className="w-8 h-8 text-yellow-600" />,
  title: "Free Estimates & Honest Pricing",
  description: "We’ll help you plan your project with transparency and fairness, from design through installation."
 },
 {
  icon: <Palette className="w-8 h-8 text-purple-600" />,
  title: "Custom Options & Styles",
  description: "Choose from a variety of glass types, patterns, textures, finishes and mirror styles to match your aesthetic."
 }
];


const CustomBenefits = () => {
 return (
  <section className="container mx-auto px-8 py-10 min-h-[80vh] grid md:grid-cols-2 gap-12 md:gap-20 items-center">
   {/* Left Side */}


   {/* Right Side */}
   <div className="grid sm:grid-cols-2 gap-8">
    {benefits.map((benefit, index) => (
     <div
      key={index}
      className="p-6 rounded-2xl shadow-lg hover:shadow-2xl transition bg-white dark:bg-zinc-900"
     >
      <div className="mb-4 flex items-center justify-center w-14 h-14 bg-red-50 dark:bg-zinc-800 rounded-full shadow-sm">
       {benefit.icon}
      </div>
      <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
       {benefit.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm">
       {benefit.description}
      </p>
     </div>
    ))}
   </div>
   <div className="max-w-2xl">
    <h2 className="text-4xl md:text-5xl font-bold mb-4">
     <span className="border-b-4 border-red-600" >Framed or Frameless {" "}</span>
    </h2>
    <p className="text-gray-600 dark:text-gray-400 mb-8 ">
     <Button variant={"ghost"} className="p-3 rounded-xl bg-amber-100 dark:bg-amber-900/30 ">
      <Snowflake className="text-amber-600 dark:text-amber-300 w-6 h-6" />
     </Button>{"  "}If you're looking to add glass to other parts of your home, we have you covered! We custom cut glass for shelves, tabletops, walls, doors, partitions and more. Additionally, we also custom fabricated mirrors.
    </p>
    <p className="text-gray-600 dark:text-gray-400 mb-8 ">
     <Button variant={"ghost"} className="p-3 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 ">
      <Waypoints className="text-emerald-600 dark:text-emerald-300 w-6 h-6" />
     </Button>{" "}
     Capitol Glass & Mirror will help you create a completely unique, one-of-a-kind glass shower. We can custom fabricate glass shower doors to fit bathroom spaces of any size. Your first decision is whether you want a framed shower or a shower without a frame. Both framed and frameless options will produce a truly stunning glass shower. If you opt for a shower frame, we can provide you with a wide selection of hardware accessories to complete the look you're trying to achieve.
    </p>

   </div>
  </section >
 );
};

export default CustomBenefits;
