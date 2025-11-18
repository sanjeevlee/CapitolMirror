import DotsLoader from '@/components/ui/Loader'

export default function Loading() {
 return (
  <div className="
      min-h-screen flex items-center justify-center
      bg-gradient-to-tr from-[#e7effa] via-[#d4e3f1] to-[#f8fafc]
      dark:bg-gradient-to-bl dark:from-[#000000] dark:via-[#020409] dark:to-[#282829]
      transition-colors duration-500
    ">
   <DotsLoader />
  </div>
 )
}
