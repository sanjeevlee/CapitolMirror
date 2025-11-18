"use client"

import { ComponentProps, forwardRef } from "react"

interface HydrationSafeIconProps extends ComponentProps<"svg"> {
  // All SVG props are inherited
}

export const HydrationSafeIcon = forwardRef<SVGSVGElement, HydrationSafeIconProps>(
  (props, ref) => {
    return <svg {...props} ref={ref} suppressHydrationWarning />
  }
)

HydrationSafeIcon.displayName = "HydrationSafeIcon"

export default HydrationSafeIcon
