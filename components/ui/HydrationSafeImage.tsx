"use client"

import Image from "next/image"
import { ComponentProps } from "react"

interface HydrationSafeImageProps extends ComponentProps<typeof Image> {
  // All Image props are inherited
}

export function HydrationSafeImage(props: HydrationSafeImageProps) {
  return <Image {...props} suppressHydrationWarning />
}

export default HydrationSafeImage
