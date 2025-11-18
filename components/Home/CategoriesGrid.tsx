// components/CategoriesGrid.jsx

import React from "react";
import { Sparkles, ChevronRight } from "lucide-react";

const categories = [
 {
  title: "Bars And Pubs",
  image: "/CategoriesGrid/RoomGlass.jpg",
  label: "BARS AND PUBS",
 },
 {
  title: "Beveled Mirrors",
  image: "/CategoriesGrid/BeveledMirrors.jpg",
  label: "BEVELED MIRRORS",
 },
 {
  title: "Framed antique mirrors",
  image: "/CategoriesGrid/RoomGlass.jpg",
  label: "FRAMED ANTIQUE MIRRORS",
 },
 {
  title: "Living Room Mirrors",
  image: "/CategoriesGrid/LivingRoomMirrors.jpg",
  label: "LIVING ROOM MIRRORS",
 },
 {
  title: "Dining Room Mirrors ",
  image: "/CategoriesGrid/DiningRoomMirrors.jpg",
  label: "DINING ROOM MIRRORS",
 },

];

const CategoriesGrid = () => {
 return (
  <section className="px-4 py-12 ">
   <div className="container mx-auto text-center grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
    {/* Left Large Box */}
    <div className="relative overflow-hidden rounded-2xl p-7 flex flex-col justify-between md:col-span-1 lg:col-span-2 border bg-card text-card-foreground shadow-sm dark:shadow-md">
     <div className="relative z-10 text-left">
      <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium bg-accent text-accent-foreground ring-1 ring-border">
       <Sparkles className="h-3.5 w-3.5 text-primary" />
       <span>Elegant Custom Mirror Work</span>
      </div>
      <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight tracking-tight">
      CALL CAPITOL GLASS & MIRROR TODAY!
      </h2>
      <p className="mt-3 text-sm md:text-base text-muted-foreground">
      Whether you're a builder preparing for a big project or a homeowner planning on remodeling your home or bathroom - give Capitol Glass & Mirror a call! We'll be happy to help design, plan and install custom glass or mirrors to beautify your home.
      </p>
     </div>

     <div className="relative z-10 mt-6 text-xs md:text-sm text-muted-foreground">
      <p>
     Note – we are setting up a phone number for North Texas and will add that in here too along with the 405 Number
      </p>
     </div>
    </div>


    {/* Right Grid Items */}
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5 col-span-2">
     {categories.slice(1).map((item, idx) => (
      <div
       key={idx}
       className="group relative rounded-2xl overflow-hidden h-60 bg-cover bg-center ring-1 ring-border/80 shadow-sm"
       style={{ backgroundImage: `url(${item.image})` }}
      >
       <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/0 dark:from-black/70 dark:via-black/30 transition-opacity" />
       <div className="absolute inset-0 scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500" style={{ background: "radial-gradient(ellipse at center, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.0) 60%)" }} />
       <div className="absolute bottom-3 left-3 flex items-center gap-2">
        <button className="inline-flex items-center gap-1.5 bg-background/90 text-foreground text-[10px] md:text-xs px-3 py-1 rounded-full ring-1 ring-border backdrop-blur-sm hover:ring-primary/50 transition-colors">
         <Sparkles className="h-3.5 w-3.5 text-primary" />
         {item.label}
        </button>
       </div>
      </div>
     ))}
    </div>
   </div>

  </section>
 );
};

export default CategoriesGrid;
