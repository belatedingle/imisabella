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
  applicationName: 'hi :3',
  title: 'hi :3',
  description: "hi, i'm isabella - software dev from sydney, australia.",
  appleWebApp: {
    title: 'hi :3',
  },
  openGraph: {
    title: 'hi :3',
    description: "hi, i'm isabella - software dev from sydney, australia.",
    url: baseUrl,
    siteName: 'hi :3',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'hi :3',
    description: "hi, i'm isabella - software dev from sydney, australia.",
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
