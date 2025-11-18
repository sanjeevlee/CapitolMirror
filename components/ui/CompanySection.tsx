import React from 'react';
import { Button } from './button';
import { ArrowRight } from 'lucide-react';

const badges = [
  '/Logo/Dunkin.jpeg',
  '/Logo/HM.jpg',
  '/Logo/spencers.jpeg',
  '/Logo/Statestreet.png',
  '/Logo/subway.png',
];

function CompanySection() {
  return (
    <section className="w-full flex justify-center items-center py-8 sm:py-12 md:py-16 lg:py-20 bg-[var(--bg)] rounded-2xl sm:rounded-3xl border border-border shadow-md dark:shadow-lg mx-auto max-w-6xl mt-4 sm:mt-6 md:mt-8 mb-3 sm:mb-4 md:mb-5 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center w-full">
        <p className="text-[var(--text)]/70 font-semibold text-xs sm:text-sm md:text-base mb-3 sm:mb-4 text-center px-2 sm:px-4">
          TRUSTED BY INDUSTRY LEADERS IN ASSET MANAGEMENT
        </p>

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-3 sm:mb-4 md:mb-6 text-[var(--text)] leading-tight px-2 sm:px-4">
          Empowering Excellence in Maintenance
          <br className="hidden sm:block" />
          and Operational Reliability
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[var(--text)]/75 text-center mb-6 sm:mb-8 md:mb-10 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl px-2 sm:px-4 leading-relaxed">
          Unlock the full potential of your asset and equipment data with . Our platform provides comprehensive visibility and actionable insights, enabling informed decision-making and operational efficiency across your organization.
        </p>

        {/* <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10 w-full sm:w-auto px-4 sm:px-0">
          <Button className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-2 sm:py-3">
            Start a Free Trial
            <ArrowRight size={16} className="sm:w-4 sm:h-4 md:w-5 md:h-5 ml-2" />
          </Button>
          <button className="w-full sm:w-auto border border-blue-600 text-blue-700 font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-full text-sm sm:text-base bg-white hover:bg-blue-50 transition-colors duration-200">
            Schedule a Consultation
          </button>
        </div> */}
      </div>

      {/* <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-4 sm:mt-6 px-4 sm:px-0">
        {badges.map((src, idx) => (
          <img 
            key={idx} 
            src={src} 
            alt={`badge-${idx+1}`} 
            className="h-12 w-auto sm:h-14 md:h-16 object-contain opacity-70 hover:opacity-100 transition-opacity duration-200" 
          />
        ))}
      </div> */}
    </section>
  );
}

export default CompanySection; 