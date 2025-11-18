import DotsLoader from '@/components/ui/Loader'

export default function Loading() {
 return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-[#0a2743] via-[#102842] to-[#171c28] dark:bg-gradient-to-bl dark:from-[#121c2d] dark:via-[#182337] dark:to-[#23293a]">
   <DotsLoader />
  </div>
 )
}