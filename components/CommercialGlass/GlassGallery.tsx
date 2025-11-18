"use client";
import Image from "next/image";

const galleryItems = [
 {
  img: "/Commercialgallery/Commercialgallery1.png",
  title: "Glass walls and door example",
 },
 {
  img: "/Commercialgallery/Commercialgallery8.png",
  title: "Glass doors",
 },
 {
  img: "/Commercialgallery/Commercialgallery3.png",
  title: "Glass hallway doors",
 },
 {
  img: "/Commercialgallery/Commercialgallery4.png",
  title: "Glass for office cubicles",
 },
 {
  img: "/Commercialgallery/Commercialgallery5.png",
  title: "Glass doors with pull handles",
 },
 {
  img: "/Commercialgallery/Commercialgallery6.png",
  title: "Glass office doors",
 },
 {
  img: "/Commercialgallery/Commercialgallery7.png",
  title: "Construction for glass entryways",
 },
 {
  img: "/Commercialgallery/Commercialgallery10.png",
  title: "Glass stair railing",
 },
 {
  img: "/Commercialgallery/Commercialgallery9.png",
  title: "Glass storefronts",
 },
];

export default function GlassGallery() {
 return (
  <section className="relative py-10 ">
   <div className="container mx-auto px-6 text-center">
    {/* Section Heading */}
    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
     Tempered Glass Image Gallery
    </h2>
    <p className="text-gray-600 dark:text-gray-400 mb-14 max-w-2xl mx-auto text-lg leading-relaxed">
     Explore our recent commercial and residential glass installations,
     showcasing precision craftsmanship, premium quality, and modern design aesthetics.
    </p>

    {/* Gallery Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
     {galleryItems.map((item, index) => (
      <div
       key={index}
       className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 backdrop-blur-lg"
      >
       {/* Image */}
       <div className="relative w-full h-80">
        <Image
         src={item.img}
         alt={item.title}
         fill
         sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
         className="object-cover transition-transform duration-700 group-hover:scale-110"
         quality={85}
         loading="lazy"
         decoding="async"
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
       </div>

       {/* Title Overlay */}
       <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
        <h3 className="text-lg md:text-xl font-semibold text-white translate-y-3 ">
         {item.title}
        </h3>

       </div>
      </div>
     ))}
    </div>
   </div>

   {/* Subtle background pattern */}
   <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-50/30 via-transparent to-transparent dark:from-blue-900/10"></div>
  </section>
 );
}
