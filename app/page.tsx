
import Hero from "@/components/Home/hero";
import TestimonialCarousel from "@/components/Home/testimonials";
import GettingStarted from "@/components/Home/GettingStarted";
import CoreFeatures from "@/components/Home/FeatureGrid";
import InvestorsSection from "@/components/Home/InvestorsSection";
import CategoriesGrid from "@/components/Home/CategoriesGrid";
import ServiceAreaContent from "@/components/ServiceArea/ServiceArea";
import AboutCapitolGlass from "@/components/Home/AboutUs";
import NewOwnershipSection from "@/components/Home/NewOwnershipSection";
import CustomizationSection from "@/components/Home/CustomizationSection";
import HomeGallery from "@/components/Home/HomeGallery";
export default function Home() {

  return (
    <>
      <div className="flex flex-col">
        <Hero />
        <NewOwnershipSection/>
        <InvestorsSection />
        <CustomizationSection />
        <GettingStarted />
        <HomeGallery/>
        <AboutCapitolGlass />
        <ServiceAreaContent />
        <CategoriesGrid />
        <CoreFeatures />
        <TestimonialCarousel />
      </div>
    </>
  );
}
