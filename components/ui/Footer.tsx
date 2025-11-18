"use client"

import React, { useEffect, useState } from "react"
import Header from "@/components/ui/Header"
import Link from "next/link"
import Image from "next/image"
import { Globe } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

type FooterLink = {
  name: string
  path?: string
  type?: "phone"
}

type FooterSection = {
  title: string
  links: FooterLink[]
}

export const footerData: FooterSection[] = [
  {
    title: "Services",
    links: [
      { name: "Framed & Frameless Glass Showers", path: "/GlassShowers/FramedFramelessGlass" },
      { name: "Glass Shower Doors", path: "/GlassShowers/GlassShowerDoors" },
      { name: "Glass Shower Design Options", path: "/GlassShowers/ShowerDesignOptions" },
      { name: "Specialty Glass", path: "/CustomGlass&Mirrors/GlassShelvesTabletops" },
      { name: "Custom Mirrors", path: "/CustomGlass&Mirrors/CustomMirrors" },
      { name: "Commercial Glass", path: "/CommercialGlass" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { name: "Home", path: "/" },
      { name: "About Us", path: "/#about" },
      { name: "Frequently Asked Questions", path: "/ServiceArea/Oklahoma#faq" },
      { name: "Contact Us", path: "/contact" },
    ],
  },
  {
    title: "Company Info",
    links: [
      { name: "CAPITOL GLASS & MIRROR" },
      { name: "3730 N. MacArthur Blvd" },
      { name: "Oklahoma City, OK 73122" },
      { name: "405-789-1485", path: "tel:4057891485",type:"phone" },
    ],
  },
  {
    title: "Business Hours",
    links: [{ name: "Monday - Friday: 8 am to 5 pm" }],
  },
]

function Footer() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch for theme-based rendering
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Render static fallback before hydration
    return (
      <footer className="bg-[#37393b] dark:from-neutral-900 dark:to-neutral-950 border-t border-neutral-200 dark:border-neutral-800 shadow-inner dark:shadow-none min-h-[320px] flex flex-col justify-between p-6 sm:p-8 lg:p-14 rounded-t-[32px] sm:rounded-t-[56px] lg:rounded-t-[80px]">
        <section className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
          <div className="flex flex-col items-start">
            <Image
              src="/capitol-logo.png"
              alt="Capitol Glass & Mirror Logo"
              width={200}
              height={200}
              className="mb-2 object-contain w-28 sm:w-40 h-auto"
              sizes="(max-width: 640px) 7rem, (max-width: 1024px) 10rem, 12rem"
            />
            <span className="text-xs text-neutral-400 font-light hidden sm:block">
              Your trusted partner for premium glass solutions.
            </span>
          </div>

          {footerData.map((section) => (
            <div key={section.title} className="flex flex-col gap-2">
              <Header className="!text-lg sm:!text-xl font-bold text-white mb-1 tracking-wide">
                {section.title}
              </Header>
              <ul className="pt-1 flex flex-col gap-1">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.path ? (
                      <Link
                        href={link.path}
                        className="font-bricolage-grotesque text-white transition-colors duration-150 py-1.5 hover:underline underline-offset-4 text-sm"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <span className="font-bricolage-grotesque text-white py-1.5 text-sm">
                        {link.name}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Footer bottom row */}
        <section className="container mx-auto flex flex-col md:flex-row justify-between items-center pt-5 border-t border-neutral-200 dark:border-neutral-800 gap-4 mt-6">
          <span className="font-bricolage-grotesque flex items-center gap-2 text-white">
            <Globe size={18} /> English
          </span>

          <p className="font-bricolage-grotesque text-neutral-400 text-xs sm:text-sm flex flex-wrap gap-2 items-center text-center md:text-left">
            <Link href="#" className="hover:underline">
              privacy policy
            </Link>
            <span className="mx-1 text-neutral-300">|</span>
            <Link href="#" className="hover:underline">
              terms
            </Link>
            <span className="mx-1 text-neutral-300">|</span>
            copyright © 2025 Capitol Glass & Mirror
          </p>
        </section>
      </footer>
    )
  }

  // Main Render after mount
  return (
    <footer className="bg-[#37393b] dark:from-neutral-900 dark:to-neutral-950 border-t border-neutral-200 dark:border-neutral-800 shadow-inner dark:shadow-none min-h-[300px] flex flex-col justify-between p-6 sm:p-8 lg:p-14 rounded-t-[32px] sm:rounded-t-[56px] lg:rounded-t-[80px]">
      <section className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
        <div className="flex flex-col items-start">
          <Image
            src="/capitol-logo.png"
            alt="Capitol Glass & Mirror Logo"
            width={200}
            height={200}
            className="mb-2 object-contain w-28 sm:w-40 h-auto"
            sizes="(max-width: 640px) 7rem, (max-width: 1024px) 10rem, 12rem"
            priority
          />
          <span className="text-xs text-neutral-400 font-light hidden sm:block">
            Your trusted partner for premium glass solutions.
          </span>
        </div>

        {footerData.map((section) => (
          <div key={section.title} className="flex flex-col gap-2">
            <Header className="!text-lg sm:!text-xl font-bold text-white mb-1 tracking-wide">
              {section.title}
            </Header>
            <ul className="pt-1 flex flex-col gap-1">
              {section.links.map((link) => (
                <li key={link.name}>
                  {link.path ? (
                    <Link
                      href={link.path}
                      className={cn(
                        "font-bricolage-grotesque text-white transition-colors duration-150 hover:underline underline-offset-4 text-sm py-1.5",
                        link.type === "phone" && "text-base sm:text-lg font-bold"
                      )}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <span className="font-bricolage-grotesque text-white py-1.5 text-sm">
                      {link.name}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Footer bottom row */}
      <section className="container mx-auto flex flex-col md:flex-row justify-between items-center pt-5 border-t border-neutral-200 dark:border-neutral-800 gap-4 mt-6">
        <span className="font-bricolage-grotesque flex items-center gap-2 text-white">
        </span>

        <p className="font-bricolage-grotesque text-neutral-400 text-xs sm:text-sm flex flex-wrap gap-2 items-center text-center md:text-left">
          Copyright © 2025 Capitol Glass & Mirror. All rights reserved.
        </p>
      </section>
    </footer>
  )
}

export default Footer
