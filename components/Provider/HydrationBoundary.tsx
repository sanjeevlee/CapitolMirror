"use client"

import { useEffect, useState } from "react"

interface HydrationBoundaryProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

export function HydrationBoundary({ children, fallback }: HydrationBoundaryProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return fallback ? <>{fallback}</> : null
  }

  return <>{children}</>
}

// Higher-order component for easier usage
export function withHydrationBoundary<P extends object>(
  Component: React.ComponentType<P>,
  fallback?: React.ReactNode
) {
  return function HydratedComponent(props: P) {
    return (
      <HydrationBoundary fallback={fallback}>
        <Component {...props} />
      </HydrationBoundary>
    )
  }
}
