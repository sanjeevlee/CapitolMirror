import { notFound } from 'next/navigation'
import { About } from '@/components/about'

interface ParamTypes {
 params: Promise<{
  sub_page: string
 }>
}

const subPages = {
 'history': 'History',
 'team': 'Our Team',
 'mission': 'Our Mission',
 'values': 'Our Values'
}

export default async function AboutSubPage({ params }: ParamTypes) {
 const { sub_page } = await params

 if (!(sub_page in subPages)) {
  notFound()
 }

 return (
  <div className="min-h-screen">
   <About subPage={sub_page} />
  </div>
 )
}