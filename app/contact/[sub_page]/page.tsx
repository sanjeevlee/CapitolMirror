import { notFound } from 'next/navigation'
import { Contact } from '@/components/contact'

interface ParamTypes {
 params: Promise<{
  sub_page: string
 }>
}

const subPages = {
 'support': 'Support',
 'sales': 'Sales Inquiry',
 'quote': 'Get Quote',
 'feedback': 'Feedback'
}

export default async function ContactSubPage({ params }: ParamTypes) {
 const { sub_page } = await params

 if (!(sub_page in subPages)) {
  notFound()
 }

 return (
  <div className="min-h-screen">
   <Contact subPage={sub_page} />
  </div>
 )
}