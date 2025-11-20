"use client";

import Image from "next/image";

const galleryImages = [
  { src: "/WineRoom/CutsomeWIneRoom1.png", h: "h-64" },   
  { src: "/Frameless/Frameless2.png", h: "h-72" },
  { src: "/WineRoom/WineRoom1.png", h: "h-96" },      
  { src: "/WineRoom/WineRoom3.png", h: "h-64" },
  { src: "/CommercialOffice/CommercialOffice1.png", h: "h-96" },
  { src: "/Frameless/Frameless3.png", h: "h-72" },
  { src: "/CommercialOffice/CommercialOffice3.png", h: "h-80" },
  { src: "/WineRoom/CutsomeWIneRoom4.png", h: "h-64" },
  { src: "/CommercialOffice/CommercialOffice2.png", h: "h-90" },

];

export default function HomeGallery() {
  return (
    <section>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Our Custom Gallery
        </h2>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-5 space-y-5">
          {galleryImages.map((item, index) => (
            <div key={index} className={`w-full overflow-hidden rounded-xl ${item.h}`}>
              <Image
                src={item.src}
                alt={`Gallery ${index + 1}`}
                width={800}
                height={800}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
