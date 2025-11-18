"use client"

import { cn } from "lib/utils"
import {
  Moon,
  Sun,
  Menu,
  X,
  ChevronUp,
  ChevronDown,
  ChevronRight,
} from "lucide-react"
import Image from "next/image"
import React, { HTMLAttributes, useEffect, useState } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import Button from "./ui/button"
import { MdBathroom, MdOutlineShower, MdOutlineDesignServices } from "react-icons/md";
import { FiMapPin, FiMap } from "react-icons/fi";
import { FaLayerGroup, FaRegClone } from "react-icons/fa";
import {
  NavigationMenu, NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu"
interface NavProps extends HTMLAttributes<HTMLDivElement> { }

const serviceAreaOptions = [
  {
    title: "Service Area Oklahoma City",
    href: "/ServiceArea/Oklahoma",
    icon: <FiMap size={18} />,
  },
  {
    title: "Service in North Texas Service",
    href: "/ServiceArea/TexasandTexoma",
    icon: <FiMapPin size={18} />,
  },
];
function useNavigation() {
  const [isFeaturesDropdownOpen, setIsFeaturesDropdownOpen] = React.useState(false)
  const closeFeaturesDropdown = React.useCallback(() => {
    setIsFeaturesDropdownOpen(false)
  }, [])
  return { isFeaturesDropdownOpen, closeFeaturesDropdown }
}

function useSidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false)
  return { isSidebarOpen, setIsSidebarOpen }
}

const products = [
  {
    title: "Framed & Frameless Glass Enclosures",
    href: "/GlassShowers/FramedFramelessGlass",
    icon: <MdBathroom size={18} />,
  },
  {
    title: "Glass Shower Doors",
    href: "/GlassShowers/GlassShowerDoors",
    icon: <MdOutlineShower size={18} />,
  },
  {
    title: "Shower Design Options",
    href: "/GlassShowers/ShowerDesignOptions",
    icon: <MdOutlineDesignServices size={18} />,
  },
];
const components = [
  {
    title: "Glass Shelves, Tabletops & More",
    href: "/CustomGlass&Mirrors/GlassShelvesTabletops",
    icon: <FaLayerGroup size={18} />,
  },
  {
    title: "Custom Mirrors",
    href: "/CustomGlass&Mirrors/CustomMirrors",
    icon: <FaRegClone size={18} />,
  },
];
const staticBgColors = [
  "bg-red-500/20 text-red-500",
  "bg-blue-500/20 text-blue-500",
  "bg-green-500/20 text-green-500",
  "bg-yellow-500/20 text-yellow-500",
  "bg-purple-500/20 text-purple-500",
  "bg-pink-500/20 text-pink-500",
  "bg-indigo-500/20 text-indigo-500",
  "bg-teal-500/20 text-teal-500",
]

export function NavigationMenuComponent() {
  const { isFeaturesDropdownOpen, closeFeaturesDropdown } = useNavigation()
  const featuresTriggerRef = React.useRef<HTMLButtonElement>(null)

  // Effect to programmatically open Features dropdown
  React.useEffect(() => {
    if (isFeaturesDropdownOpen && featuresTriggerRef.current) {
      featuresTriggerRef.current.click()
      // Reset the state after triggering
      setTimeout(() => {
        closeFeaturesDropdown()
      }, 100)
    }
  }, [isFeaturesDropdownOpen, closeFeaturesDropdown])

  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        {/* Home */}
        <NavigationMenuItem className="font-bricolage-grotesque">
          <NavigationMenuLink
            asChild
            className={`${navigationMenuTriggerStyle()}`}
          >
            <Link href="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Products */}
        <NavigationMenuItem className="relative">
          <NavigationMenuTrigger className="font-bricolage-grotesque">
            Glass Showers
          </NavigationMenuTrigger>
          <NavigationMenuContent className="absolute top-full left-0 mt-2 w-[400px] md:w-[500px] lg:w-[600px] rounded-xl border bg-popover text-popover-foreground shadow-lg z-50">
            <ul className="grid gap-2 grid-cols-1 md:grid-cols-2">
              {products.map((component, idx) => (
                <li key={component.title}>
                  <Link
                    href={component.href}
                    className="group flex items-center gap-3 rounded-lg p-2.5 transition-colors hover:bg-accent/50 dark:hover:bg-accent/30"
                  >
                    <div
                      className={`ml-5 size-10 shrink-0 rounded-full ring-1 ring-border/60 shadow-sm flex items-center justify-center transition-all group-hover:ring-primary/60 group-hover:shadow-md ${staticBgColors[idx % staticBgColors.length]
                        }`}
                    >
                      <span className="transition-transform group-hover:scale-110">{component.icon}</span>
                    </div>
                    <span className="flex-1">
                      <div className="font-semibold text-[15px] font-bricolage-grotesque leading-tight">
                        {component.title}
                      </div>
                    </span>
                    <ChevronRight className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-muted-foreground" size={16} />
                  </Link>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="font-bricolage-grotesque">
          <NavigationMenuLink
            asChild
            className={`${navigationMenuTriggerStyle()}`}
          >
            <Link href="/CommercialGlass">Commercial Glass</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        {/* Solutions */}
        <NavigationMenuItem className="relative">
          <NavigationMenuTrigger className="font-bricolage-grotesque">
            Custom Glass & Mirrors
          </NavigationMenuTrigger>
          <NavigationMenuContent className="absolute top-full left-0 mt-2 w-[400px] md:w-[500px] lg:w-[600px] rounded-xl border bg-popover text-popover-foreground shadow-lg z-50">
            <ul className="grid gap-2 grid-cols-1 md:grid-cols-2">
              {components.map((component, idx) => (
                <li key={component.title}>
                  <Link
                    href={component.href}
                    className="group flex items-center gap-3 rounded-lg p-2.5 transition-colors hover:bg-accent/40 dark:hover:bg-accent/60"
                  >
                    <div
                      className={`ml-5 size-10 shrink-0 rounded-full ring-1 ring-border/60 shadow-sm flex items-center justify-center transition-all group-hover:ring-primary/60 group-hover:shadow-md ${staticBgColors[idx % staticBgColors.length]
                        }`}
                    >
                      <span className="transition-transform group-hover:scale-110">{component.icon}</span>
                    </div>
                    <span className="flex-1">
                      <div className="font-semibold text-[15px] font-bricolage-grotesque leading-tight">
                        {component.title}
                      </div>
                    </span>
                    <ChevronRight className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-muted-foreground" size={16} />
                  </Link>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem className="relative">
          <NavigationMenuTrigger className="font-bricolage-grotesque">
            Service Area
          </NavigationMenuTrigger>
          <NavigationMenuContent className="absolute top-full left-0 mt-2 w-[400px] md:w-[500px] lg:w-[600px] rounded-xl border bg-popover text-popover-foreground shadow-lg z-50 ">
            <ul className="grid gap-2 grid-cols-1 md:grid-cols-2">
              {serviceAreaOptions.map((option, idx) => (
                <li key={option.title}>
                  <Link
                    href={option.href}
                    className="group flex items-center gap-3 rounded-lg p-2.5 transition-colors hover:bg-accent/50 dark:hover:bg-accent/30"
                  >
                    <div
                      className={`ml-5 size-10 shrink-0 rounded-full ring-1 ring-border/60 shadow-sm flex items-center justify-center transition-all group-hover:ring-primary/60 group-hover:shadow-md ${staticBgColors[idx % staticBgColors.length]
                        }`}
                    >
                      <span className="transition-transform group-hover:scale-110">{option.icon}</span>
                    </div>
                    <span className="flex-1">
                      <div className="font-semibold text-[15px] font-bricolage-grotesque leading-tight">
                        {option.title}
                      </div>
                    </span>
                    <ChevronRight className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-muted-foreground" size={16} />
                  </Link>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Commercial Glass */}
        <NavigationMenuItem className="font-bricolage-grotesque">
          <NavigationMenuLink
            asChild
            className={`${navigationMenuTriggerStyle()}`}
          >
            <Link href="/contact">Contact</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"button">,
  React.ComponentPropsWithoutRef<"button"> & { title: string }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <button
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium font-bricolage-grotesque">
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground font-bricolage-grotesque">
            {children}
          </p>
        </button>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

function NavHeader({ className, ...otherProps }: NavProps) {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const { isSidebarOpen, setIsSidebarOpen } = useSidebar()

  const baseClass = "p-3 w-full bg-[var(--bg)] dark:bg-[var(--bg)] border-b"
  const [mobileAccordionOpen, setMobileAccordionOpen] = useState([
    false,
    false,
    false,
    false,
  ])

  useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) return null

  return (
    <nav
      {...otherProps}
      className={cn(baseClass, "sticky top-0 z-80 ", className)}>
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="inline-flex items-center justify-center bg-white rounded-md  p-1">
            <Image
              src="/CAPITOLsvg.svg"
              alt="Capitol Glass & Mirror"
              width={100}
              height={100}
              className="object-contain"
              priority
            />
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenuComponent />
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Button
            onClick={() =>
              setTheme((prev) => (prev === "dark" ? "light" : "dark"))
            }
            variant="outline"
            className={`cursor-pointer ${theme === "dark" ? "dark:text-yellow-500" : ""}`}
          >
            {theme === "dark" ? <Moon size={18} /> : <Sun size={18} />}
          </Button>

          {/* Call Button */}
          <a href="tel:+405-789-1485">
  <Button
    variant="default"
    className="text-sm font-medium transition-all duration-200 bg-indigo-500 text-white hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
  >
    Call: +405-789-1485
  </Button>
</a>

        </div>


        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden justify-start">
          <Button
            onClick={() =>
              setTheme((prev) => (prev === "dark" ? "light" : "dark"))
            }
            variant={theme === "dark" ? "default" : "secondary"}
            className={`cursor-pointer ${theme === "dark" ? "dark:text-yellow-500" : ""
              }`}
          >
            {theme === "dark" ? <Moon size={18} /> : <Sun size={18} />}
          </Button>

          <Button variant={"secondary"} onClick={() => setIsSidebarOpen(true)}>
            <Menu size={30} />
          </Button>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-[color:rgba(0,0,0,0.4)] dark:bg-[color:rgba(0,0,0,0.7)] z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-100 bg-[var(--bg)] dark:bg-[var(--bg)] z-50 md:hidden transform transition-transform duration-300 ease-in-out shadow-lg flex flex-col",
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex justify-end items-center p-2   border-b shrink-0">

          <Button variant="ghost" onClick={() => setIsSidebarOpen(false)}>
            <X size={24} />
          </Button>
        </div>
        {/* Scrollable Nav */}
        <div className="flex-1 overflow-y-auto px-4 ">
          <nav className="flex flex-col gap-2">
            {/* Static Links */}
            {[
              { title: "Home", href: "/" },
              { title: "Commercial Glass", href: "/CommercialGlass" },
              { title: "Contact", href: "/contact" },

            ].map(({ title, href }) => (
              <Link
                key={title}
                href={href}
                className="py-2 px-3 rounded hover:bg-accent dark:text-popover-foreground dark:hover:bg-accent"
                onClick={() => setIsSidebarOpen(false)}
              >
                {title}
              </Link>))}
            {[{ title: "Glass Showers", data: products },
              { title: "Custom Glass & Mirrors", data: components },
              { title: "Service Area", data: serviceAreaOptions },
            ].map((section, idx) => (
              <div key={section.title} className="border-t pt-3">
                <button
                  className="w-full flex justify-between items-center font-semibold px-2 py-2 "
                  onClick={() =>
                    setMobileAccordionOpen((prev) =>
                      prev.map((v, i) => (i === idx ? !v : v))
                    )
                  }>
                  {section.title}
                  {mobileAccordionOpen[idx] ? (
                    <ChevronUp size={16} className="text-gray-600" />
                  ) : (
                    <ChevronDown size={16} className="text-gray-600" />
                  )}
                </button>
                {mobileAccordionOpen[idx] && (
                  <ul className="pl-4 mt-2 space-y-2">
                    {section.data.map(({ title, href, icon }) => (
                      <li key={title}>
                        <Link
                          href={href}
                          className="flex items-center gap-2 py-1 px-2 rounded hover:bg-muted dark:hover:bg-accent dark:text-popover-foreground"
                          onClick={() => setIsSidebarOpen(false)}
                        >
                          <span className="w-4 h-4 text-muted-foreground">
                            {icon}
                          </span>
                          <span>{title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* Mobile Call Button */}
            <div className="border-t pt-4 mb-6">
              <a href="tel:+405-789-1485">
                <Button className=" w-full text-sm font-medium transition-all duration-200 bg-indigo-500 text-white hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-400 focus:outline-none">
                  Call:+405-789-1485
                </Button>
              </a>
            </div>

          </nav>
        </div>
      </div>
    </nav>
  )
}

export default NavHeader
