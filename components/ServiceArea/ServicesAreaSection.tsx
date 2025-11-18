import React from "react";

export default function ServiceAreaSection() {
 return (
  <section className="relative w-full  grid place-items-center overflow-hidden py-16 md:py-20">
   {/* Background SVG Wave */}
   <div className="absolute top-0 left-0 right-0 z-0">

    <svg className="w-full h-full text-[#cddaf2] dark:text-gray-800 transform -scale-y-100" viewBox="0 0 1440 320" preserveAspectRatio="none">

     <path
      fill="currentColor"
      d="M0,160L80,176C160,192,320,224,480,224C640,224,800,192,960,165.3C1120,139,1280,117,1360,106.7L1440,96V320H1360C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320H0Z"
     />
    </svg>
   </div>

   {/* Floating Label */}
   <span className="absolute top-6 md:top-8 left-1/2 -translate-x-1/2 z-10 text-[10px] md:text-xs text-gray-700 dark:text-gray-200 bg-white/60 dark:bg-black/40 border border-white/30 dark:border-white/10 px-3 md:px-4 py-1.5 rounded-full shadow backdrop-blur-md">
   Our Service Area in Oklahoma City
   </span>

   {/* Content Section */}
   <div className="z-10 w-full max-w-5xl text-center px-4 sm:px-6 lg:px-8">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-100 leading-tight mb-3 md:mb-4">
     Capitol Glass & Mirror:<br />
     OKC Residential and Commercial Glass
    </h1>

    <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 font-medium mb-6 md:mb-8">
    The highly skilled team at Capitol Glass & Mirror is ready and waiting to assist you if you're looking for custom glass in Oklahoma City. We work on all types of residential glass projects as well as commercial glass for businesses and commercial projects.
     
    </p>

    <a href="/contact">
    <button className="bg-[#232723] hover:bg-[#161b16] text-white dark:bg-white dark:text-gray-900 dark:hover:bg-zinc-200 px-6 md:px-7 py-2 rounded-full font-semibold shadow-md transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-800 dark:focus-visible:ring-white dark:focus-visible:ring-offset-gray-900">
     Get In Touch
    </button>
    </a>

    {/* New Section: Services Overview */}
    <div className="mt-10 md:mt-12">
     <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-5 md:mb-6">
      Our Specialties
     </h2>
     <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 md:grid-cols-3 text-left">
      <div className="bg-white dark:bg-zinc-900/60 border border-gray-200 dark:border-gray-800 p-5 md:p-6 rounded-lg shadow-sm hover:shadow-md transition">
       <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1.5 md:mb-2">Custom Shower Glass</h3>
       <p className="text-gray-600 dark:text-gray-300">Elegant and functional shower enclosures tailored to your space and style.</p>
      </div>
      <div className="bg-white dark:bg-zinc-900/60 border border-gray-200 dark:border-gray-800 p-5 md:p-6 rounded-lg shadow-sm hover:shadow-md transition">
       <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1.5 md:mb-2">Storefront Glass</h3>
       <p className="text-gray-600 dark:text-gray-300">Boost curb appeal and security with high-quality commercial glass solutions.</p>
      </div>
      <div className="bg-white dark:bg-zinc-900/60 border border-gray-200 dark:border-gray-800 p-5 md:p-6 rounded-lg shadow-sm hover:shadow-md transition">
       <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1.5 md:mb-2">Mirror Installations</h3>
       <p className="text-gray-600 dark:text-gray-300">Custom mirrors for homes, gyms, salons, and more—cut and installed to perfection.</p>
      </div>
     </div>
    </div>
   </div>
  </section>
 );
}
