import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Capitol Glass & Mirror - Premium Glass Solutions',
    short_name: 'Capitol Glass',
    description: 'Professional glass and mirror services in Oklahoma. Custom glass showers, commercial glass, mirrors, and glass solutions.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/capitol-logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/capitol-logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['business', 'home', 'lifestyle'],
    lang: 'en',
    orientation: 'portrait-primary',
    scope: '/',
  }
}