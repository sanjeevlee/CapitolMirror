import Image from "next/image";
import Button from "../ui/button";

export default function HeroSection() {
  return (
    <section className="relative py-10 md:py-16 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">
        {/* Left Section */}
        <div className="md:w-1/2 flex flex-col justify-center gap-6 text-center md:text-left">
          <span className="inline-flex items-center gap-2 w-fit mx-auto md:mx-0 rounded-full border px-3 py-1 text-xs sm:text-sm bg-card/60 backdrop-blur">
            Trusted Commercial Glass Partner in OKC
          </span>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight tracking-tight">
            Capitol
            <span className="text-blue-600 dark:text-blue-400"> Glass & Mirror</span>
            <br />
            Oklahoma City's leading glass partner for commercial building projects of all sizes
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-medium max-w-xl mx-auto md:mx-0">
            For commercial glass services and contract glazing in Oklahoma City, contact the team at Capitol Glass & Mirror. We construct and install glass storefronts, entrances, and glass doors for strip malls and other commercial spaces both large and small. Our experienced team provides accurate quotes and top-notch installation services.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-sm text-muted-foreground text-left mx-auto md:mx-0">
            <li className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-blue-500" />
              Glass walls and doors
            </li>
            <li className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-blue-500" />
              Construction for glass entryways
            </li>
            <li className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-blue-500" />
              Tempered glass for showers
            </li>
            <li className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-blue-500" />
              Glass storefronts
            </li>
          </ul>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4">
            <a href="/contact">
              <Button>Request a Quote</Button>
            </a>
            <a href="tel:+405-789-1485">
              <Button variant="outline">Call: +405-789-1485</Button>
            </a>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <div className="relative w-full max-w-md sm:max-w-sm md:max-w-lg aspect-[4/5] sm:aspect-[4/5] md:aspect-[4/5] lg:aspect-[4/5] overflow-hidden">
            <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-blue-500/20 via-blue-400/10 to-transparent blur-2xl" />
            <Image
              fill
              src="/CommercialGlass/commercialglass.jpg"
              alt="Commercial glass storefront installation in Oklahoma City"
              className="absolute inset-0 rounded-3xl shadow-2xl ring-1 ring-border object-cover"
              priority
              quality={90}
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
