import React from 'react';

const ContactSupportCard = () => {
 return (
  <section className=" py-10 px-4">
   <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-8 py-12 text-center shadow-xl">
    <div className="flex justify-center mb-4">
     <div className="bg-blue-600/20 text-blue-500 p-3 rounded-full">
      <svg
       className="w-6 h-6"
       fill="none"
       stroke="currentColor"
       strokeWidth="2"
       viewBox="0 0 24 24"
       xmlns="http://www.w3.org/2000/svg"
      >
       <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18.364 5.636A9 9 0 115.636 18.364 9 9 0 0118.364 5.636z"
       />
       <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v2m0 4h.01"
       />
      </svg>
     </div>
    </div>
    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800  dark:text-white mb-3">
     Need Help Deciding?
    </h2>
    <p className="dark:text-gray-300 text-gray-600 text-base sm:text-lg mb-8">
     Our friendly support team is ready to help you find the best option for your needs.
    </p>
    <a
     href="/contact"
     className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-medium px-6 py-3 rounded-lg transition duration-200"
    >
     Contact Support
    </a>
   </div>
  </section>
 );
};

export default ContactSupportCard;
