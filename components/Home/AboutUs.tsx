// Install Lucide first: npm install lucide-react
import { Building2, ShieldCheck, Users, Award } from 'lucide-react';

const history = [
 {
  year: '1956',
  text: 'Founded by Randle L. Graham.',
  icon: <Building2 className="w-6 h-6 text-blue-700 dark:text-blue-400" />
 },
 {
  year: '1959-2020',
  text: 'Jones family purchased and grew the business.',
  icon: <Users className="w-6 h-6 text-blue-700 dark:text-blue-400" />
 },
 {
  year: '2021-2024',
  text: 'Owned by John & Julene Litke, continued reputation for excellence.',
  icon: <ShieldCheck className="w-6 h-6 text-blue-700 dark:text-blue-400" />
 },
 {
  year: '2025+',
  text: 'Brian & June Post leading with integrity, respect, and customer service.',
  icon: <Award className="w-6 h-6 text-blue-700 dark:text-blue-400" />
 }
];

export default function AboutCapitolGlass() {
 return (
  <section id="about" className="relative isolate overflow-hidden py-10 md:py-14 scroll-mt-24 md:scroll-mt-28">
   {/* Decorative background gradient */}
   <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 b" />
   <div aria-hidden className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-72 w-[48rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-blue-200/40 via-cyan-200/30 to-indigo-200/20 blur-3xl dark:from-blue-500/10 dark:via-cyan-500/10 dark:to-indigo-500/10" />

   <div className="container mx-auto px-4 md:px-0">
    {/* Header */}
    <div className="mx-auto mb-8 flex items-center justify-center gap-3">
     <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/70 ring-1 ring-slate-200 backdrop-blur dark:bg-slate-900/50 dark:ring-slate-800">
      <Building2 className="h-7 w-7 text-blue-700 dark:text-blue-300" />
     </span>
     <h1 className="bg-gradient-to-br from-blue-700 via-indigo-600 to-cyan-600 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent ">
      About Us
     </h1>
    </div>

    <div className="mx-auto mb-2 max-w-2xl text-center">
     <span className="mb-3 inline-flex items-center rounded-full border border-blue-200/70 bg-white/70 px-3 py-1 font-medium text-gray-800 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/60 dark:text-white text-2xl">
      Since 1956
     </span>
     <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
      <span className="font-semibold">Oklahoma City's premier glass and mirror partner for nearly 70 years.</span>
     </p>
    </div>

    {/* New Ownership */}
    <div className="mx-auto mb-10 max-w-4xl rounded-2xl bg-white/80 p-6 shadow-lg ring-1 ring-slate-200 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-zinc-900/50 dark:ring-slate-800">
     <p className="text-gray-700 dark:text-gray-200">
      <span className="font-semibold">Capitol Glass & Mirror</span> has always prioritized uncompromising standards and high-quality products. Our "customer first" culture has earned a stellar reputation, with Bob Jones’s principle, “good enough is not good enough,” shaping our dedication to excellence. Every stage of our process is driven by skilled estimators, fabricators, and installers who meet the highest quality standards.
     </p>
    </div>

    {/* Timeline grid */}
    <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2 container mx-auto px-5">
     {history.map((item) => (
      <div
       key={item.year}
       className="group relative flex items-start gap-4 rounded-2xl bg-white/80 p-6 shadow-lg ring-1 ring-slate-200 transition duration-200 hover:-translate-y-0.5 hover:shadow-xl backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-zinc-900/50 dark:ring-slate-800"
      >
       <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 ring-1 ring-blue-200 dark:bg-zinc-900/30 dark:ring-zinc-800/60">
        {item.icon}
       </div>
       <div>
        <div className="mb-1 text-sm font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-300">{item.year}</div>
        <p className="text-gray-700 dark:text-gray-200">{item.text}</p>
       </div>
       <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-blue-500/0 via-cyan-500/0 to-indigo-500/0 opacity-0 blur-2xl transition group-hover:opacity-30 dark:from-blue-500/10 dark:via-cyan-500/10 dark:to-indigo-500/10" />
      </div>
     ))}
    </div>

    <p className="mx-auto mb-10 max-w-3xl text-center text-gray-700 dark:text-gray-300">
     The Post family continues to maximize craftsmanship and expertise, steering Capitol Glass & Mirror towards future growth while upholding core values of integrity, respect, and customer service.
    </p>

    {/* Affiliations */}
    <div className="mx-auto mb-10 flex max-w-3xl flex-col items-center justify-center gap-6 text-sm md:flex-row">
     <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-gray-700 shadow-sm backdrop-blur transition  dark:border-slate-800 dark:bg-slate-900/60 dark:text-gray-200">
      <ShieldCheck className="h-5 w-5 text-blue-600 dark:text-blue-400" />
      Proud member of COHBA
     </div>
     <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-gray-700 shadow-sm backdrop-blur transition  dark:border-slate-800 dark:bg-slate-900/60 dark:text-gray-200">
      <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
      Proud supporter of Filling The Void Ministry
     </div>
    </div>

   </div>
  </section>
 );
}
