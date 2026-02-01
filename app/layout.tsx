import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  title: 'Be My Valentine, Queenstar?',
  description: 'A special Valentine message',
  generator: 'Stephen Vals',
  icons: {
    icon: [
      {
        url: '/image.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/image.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/image.png',
        type: 'image/png',
      },
    ],
    apple: '/image.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`} suppressHydrationWarning>
        <audio
          id="background-music"
          loop
          autoPlay
          playsInline
          crossOrigin="anonymous"
          className="hidden"
        >
          <source src="/songs/die-with-a-smile.mp3" type="audio/mpeg" />
        </audio>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
