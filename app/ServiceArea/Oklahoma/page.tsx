"use client";

import ContactSupportCard from "@/components/ServiceArea/ContactSupportCard";
import CoverageAreasSection from "@/components/ServiceArea/CoverageAreasSection";
import FAQAccordion from "@/components/ServiceArea/FAQAccordion";
import OklahomaServiceMap from "@/components/ServiceArea/OklahomaServiceMap";
import ServiceAreaContent from "@/components/ServiceArea/ServiceArea";
import ServiceAreaSection from "@/components/ServiceArea/ServicesAreaSection";
import React from "react";


export default function Oklahoma() {
  return (
    <div className="flex flex-col">
      <ServiceAreaSection />
      <OklahomaServiceMap />
      <CoverageAreasSection/>
      <FAQAccordion />
      <ContactSupportCard />
    </div>
  );
}
