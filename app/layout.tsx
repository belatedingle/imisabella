import './global.css'
import type { Metadata } from 'next'
import { Pirata_One, VT323 } from 'next/font/google'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { baseUrl } from './sitemap'

const pirata = Pirata_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const vt323 = VT323({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pixel',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: '❀ isabella ❀',
    template: '%s | isabella',
  },
  description:
    'Isabella — final-year student, startup founder, web3/AI evangelist, wellness + biohacker. A very online personal homepage.',
  openGraph: {
    title: '❀ isabella ❀',
    description:
      'Founder, builder, web3/AI evangelist, wellness + biohacker.',
    url: baseUrl,
    siteName: 'isabella',
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
  themeColor: '#fdeef4',
  colorScheme: 'light',
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
        pirata.variable,
        vt323.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased font-mono">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
