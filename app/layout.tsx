import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { baseUrl } from './sitemap'
import { Cursor } from './components/cursor'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'hi :3',
    template: '%s | Isabella',
  },
  description:
    'Isabella — creative developer, startup founder, and very-online builder working at the edge of web, AI, and design.',
  openGraph: {
    title: 'Isabella — creative developer',
    description:
      'Creative developer, founder, and builder working at the edge of web, AI, and design.',
    url: baseUrl,
    siteName: 'Isabella',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport = {
  themeColor: '#0f0f12',
  colorScheme: 'dark',
}

const cx = (...classes: (string | false | undefined)[]) =>
  classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'bg-paper text-ink',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased font-sans">
        <Cursor />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
