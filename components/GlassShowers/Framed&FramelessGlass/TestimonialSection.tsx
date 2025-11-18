import React, { useState, useEffect } from "react";
import Image from "next/image";

const images = [
 { src: "/FramedSection/Framedglass13.png", alt: "Glass shower example 1" },
 { src: "/FramedSection/Framedglass14.png", alt: "Glass shower example 2" },
 { src: "/FramedSection/Framedglass15.png", alt: "Glass shower example 3" },
];

export default function TestimonialSection() {
 const [index, setIndex] = useState(0);

 const nextImg = () => setIndex((prev) => (prev + 1) % images.length);
 const prevImg = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

 // Auto-slide every 3 seconds
 useEffect(() => {
  const interval = setInterval(() => {
   nextImg();
  }, 3000);

  return () => clearInterval(interval); // Cleanup on unmount
 }, []);

 return (
  <section className="flex items-center justify-center py-10 bg-grid bg-radial-vignette dark:bg-grid-dark">
   <div className="rounded-3xl shadow-2xl flex flex-col md:flex-row container p-0 overflow-hidden bg-white/70 dark:bg-neutral-900/60 backdrop-blur supports-[backdrop-filter]:bg-white/60">
    <div className="flex-1 p-10 flex flex-col justify-center">
     <div className="text-sky-700 dark:text-sky-300 mb-3 text-xs font-bold uppercase tracking-widest">
      OKLAHOMA CITY GLASS EXPERTS
     </div>
     <h2 className="text-3xl font-extrabold mb-4 text-gray-800 dark:text-gray-100">
     Glass shower and tub enclosures
     </h2>
     <p className="text-gray-700 dark:text-gray-300 mb-4 text-base leading-6">
     Fully surround your shower with a glass enclosure! Glass shower and tub enclosures are not only visually impressive but also easy to clean. Glass for shower enclosures can be cut to fit spaces ranging from large to small, are available in varying thicknesses and can even be etched or textured. Whether you're looking to install hinged shower doors or sliding doors, Capitol Glass & Mirror in Oklahoma City can assist in designing your vision.
     </p>
     <ul className="mb-4 text-sm text-gray-600 dark:text-gray-400 list-disc list-inside space-y-1">
      <li>Glass shower and tub enclosures, custom fit for your space</li>
      <li>Hardware in brushed nickel, matte black, chrome, brass, and more</li>
      <li>Cut glass for shelves, tabletops, walls, doors, and partitions</li>
      <li>Custom fabricated mirrors for residential projects</li>
     </ul>
     <blockquote className="text-lg italic text-gray-700 dark:text-gray-200 p-4 pl-5 border-l-4 border-sky-500 dark:border-sky-400 mb-6 bg-sky-50 dark:bg-sky-900/30 rounded">
      "Are you aware of all of the possible options for glass showers? Finish off your shower with hardware with eye-catching finishes - choose from brushed nickel, matte black, chrome, polished brass, oil rubbed bronze and more."
     </blockquote>
    </div>
    <div className="flex-1 relative flex flex-col">
  <img
    src={images[index].src}
    alt={images[index].alt}
    width={1200}
    height={800}
    className="object-cover w-full h-full min-h-[350px] max-h-[480px] rounded-2xl transition-all duration-500"
    sizes="(max-width: 768px) 100vw,
           (max-width: 1200px) 80vw,
           1200px"
  />
     <div className="flex items-center justify-center gap-3 py-4">
      <button
       aria-label="Previous testimonial image"
       className="inline-flex items-center justify-center rounded-md p-2 text-sky-700 dark:text-sky-300 bg-white/80 dark:bg-black/40 hover:bg-sky-200/70 dark:hover:bg-sky-800/50 transition border border-sky-400 dark:border-sky-600 shadow"
       onClick={prevImg}
      >
       <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 16l-4-4 4-4" />
       </svg>
      </button>
      <button
       aria-label="Next testimonial image"
       className="inline-flex items-center justify-center rounded-md p-2 text-sky-700 dark:text-sky-300 bg-white/80 dark:bg-black/40 hover:bg-sky-200/70 dark:hover:bg-sky-800/50 transition border border-sky-400 dark:border-sky-600 shadow"
       onClick={nextImg}
      >
       <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M7 8l4 4-4 4" />
       </svg>
      </button>
     </div>
     <div className="flex items-center justify-center gap-1 pb-6">
      {images.map((_, i) => (
       <span
        key={i}
        className={`h-2.5 w-2.5 rounded-full transition-colors ${i === index ? "bg-sky-500 dark:bg-sky-400" : "bg-sky-200 dark:bg-sky-800"}`}
       />
      ))}
     </div>
    </div>
   </div>
  </section>
 );
}
