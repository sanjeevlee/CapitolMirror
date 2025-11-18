import { Button } from '@/components/ui/button'
import Header from '@/components/ui/Header'
import { ArrowLeft, Ghost } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function NotFound() {
 return (
  <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-tr from-[#0a2743] via-[#102842] to-[#171c28] dark:bg-gradient-to-bl dark:from-[#121c2d] dark:via-[#182337] dark:to-[#23293a] transition-colors duration-500">
   <div className="bg-white/5 shadow-lg rounded-xl px-7 py-9 flex flex-col items-center max-w-md w-full animate-fade-in">
    <div className="mb-6 flex items-center">
     <Ghost size={44} className="text-blue-400 mr-2" />
     <span className="text-5xl font-extrabold text-blue-400 select-none">404</span>
    </div>
    <Header className="mb-2 text-2xl text-gray-50">
     About page not found
    </Header>
    <p className="mb-6 text-lg text-gray-200 text-center max-w-xs">
     The about subpage you're looking for doesn't exist.
    </p>
    <Button asChild className="flex gap-2 px-5 py-2 bg-blue-500 hover:bg-blue-400 text-white font-medium rounded-lg transition">
     <Link href="/about">
      <ArrowLeft size={18} /> Back to About
     </Link>
    </Button>
   </div>
  </section>
 )
}

export default NotFound