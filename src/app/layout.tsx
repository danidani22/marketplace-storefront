import type { Viewport, Metadata } from 'next'
import './globals.css'
// import { Provider } from './provider'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  title: 'Crafted Collective',
  description: 'Place for all your crafting needs',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-cream text-tea min-h-dvh">{children}</body>
    </html>
  )
}
