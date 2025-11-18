import { Button } from '@/components/ui/button'
import Header from '@/components/ui/Header'
import { ArrowLeft, Ghost } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function NotFound() {
 return (
  <section className="min-h-screen flex flex-col justify-center items-center
      bg-gradient-to-tr from-[#e7effa] via-[#d4e3f1] to-[#f8fafc]
      dark:bg-gradient-to-bl dark:from-[#000000] dark:via-[#020409] dark:to-[#282829]
      transition-colors duration-500">
   <div className="bg-white/80 shadow-lg rounded-xl px-7 py-9 flex flex-col items-center max-w-md w-full animate-fade-in
         dark:bg-white/5">
    <div className="mb-6 flex items-center">
     <Ghost size={44} className="text-blue-400 mr-2" />
     <span className="text-5xl font-extrabold text-blue-500 select-none dark:text-blue-400">404</span>
    </div>
    <Header className="mb-2 text-2xl text-blue-900 dark:text-gray-50">
     Oops! Page not found
    </Header>
    <p className="mb-6 text-lg text-blue-700 text-center max-w-xs dark:text-gray-200">
     It looks like the page you're seeking doesn't exist. Maybe it's moved or the link is broken.
    </p>
    <Button asChild className="flex gap-2 px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition dark:bg-blue-500 dark:hover:bg-blue-400">
     <Link href="/">
      <ArrowLeft size={18} /> Go back Home
     </Link>
    </Button>
   </div>
  </section>
 )
}

export default NotFound
