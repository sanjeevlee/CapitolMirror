export default function NewOwnershipSection() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-5">
      {/* Decorative gradient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-500/25 to-sky-500/25 blur-3xl dark:from-indigo-400/20 dark:to-sky-400/20" />
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-gradient-to-tr from-sky-500/20 to-indigo-500/20 blur-3xl dark:from-sky-400/15 dark:to-indigo-400/15" />
        <div className="absolute -top-24 left-0 h-72 w-72 rounded-full bg-gradient-to-tr from-sky-500/20 to-indigo-500/20 blur-3xl dark:from-sky-400/15 dark:to-indigo-400/15" />
      </div>

      <div className="mx-auto max-w-5xl">
        <div className="relative mx-auto max-w-3xl">
          {/* Badge */}
          <div className="flex justify-center pt-6 sm:pt-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-600 px-3 py-1 text-2xl  font-semibold text-white shadow-md">
              <span className="inline-block h-2 w-2 rounded-full bg-white/90" />
              NEW OWNERSHIP 2025
            </span>
          </div>

          {/* Headings */}
          <div className="px-6 sm:px-10 pt-4 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-sky-600 drop-shadow-sm">
              Capitol Glass & Mirror
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg lg:text-xl leading-relaxed text-gray-700 dark:text-gray-200">
              Custom Glass And Mirror For Commercial And Residential Projects
            </p>
            <p className="mt-1 text-sm sm:text-base text-gray-600 dark:text-gray-300">
              Serving The Oklahoma City Metro Area And Surrounding Communities.
            </p>
            <p className="mt-3 font-medium text-sm sm:text-base text-red-600 dark:text-red-400">
              Now Serving North Texas And Texoma
            </p>
          </div>

          {/* Links & Associations */}
          <div className="px-6 sm:px-10 mt-5 sm:mt-6 text-center">
            
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://cohba.org/"
              className="mt-1 inline-block text-sm sm:text-base underline decoration-indigo-500/60 underline-offset-4 text-indigo-600 hover:text-indigo-500 dark:text-indigo-300 dark:hover:text-indigo-200 transition-colors"
            >
              Proud member of Central Oklahoma Homebuilders Association, Inc (COHBA)
            </a>

            <p className="italic text-xs sm:text-sm text-gray-500 dark:text-gray-400 pt-3 sm:pt-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://fillingthevoid.com/"
                className="pl-2 underline decoration-sky-500/60 underline-offset-4 text-sky-600 hover:text-sky-500 dark:text-sky-300 dark:hover:text-sky-200 transition-colors"
              >
               Proud Supporter of Filling The Void
              </a>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
