import { notFound } from 'next/navigation'
import Hero from '@/components/Home/hero'
import CustomizationSection from '@/components/Home/CustomizationSection'
import TestimonialCarousel from '@/components/Home/testimonials'
import GettingStarted from '@/components/Home/GettingStarted'
import InvestorsSection from '@/components/Home/InvestorsSection'

interface ParamTypes {
 params: Promise<{
  sub_page: string
 }>
}

const subPages = {
 'gallery': 'Gallery',
 'testimonials': 'Testimonials',
 'investors': 'Investors',
 'getting-started': 'Getting Started'
}

export default async function HomeSubPage({ params }: ParamTypes) {
 const { sub_page } = await params

 if (!(sub_page in subPages)) {
  notFound()
 }

 return (
  <div className="flex flex-col">
   <Hero />
   {sub_page === 'gallery' && <CustomizationSection />}
   {sub_page === 'testimonials' && <TestimonialCarousel />}
   {sub_page === 'investors' && <InvestorsSection />}
   {sub_page === 'getting-started' && <GettingStarted />}
  </div>
 )
}