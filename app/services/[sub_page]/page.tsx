import { notFound } from 'next/navigation'
import { Services } from '@/components/Home/services'

interface ParamTypes {
 params: Promise<{
  sub_page: string
 }>
}

const subPages = {
 'residential': 'Residential Services',
 'commercial': 'Commercial Services',
 'custom': 'Custom Solutions',
 'repair': 'Repair Services'
}

export default async function ServicesSubPage({ params }: ParamTypes) {
 const { sub_page } = await params

 if (!(sub_page in subPages)) {
  notFound()
 }

 return (
  <div className="min-h-screen">
   <Services subPage={sub_page} />
  </div>
 )
}