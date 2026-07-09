import './global.css'
import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'isabella — founder, builder, web3/ai',
    template: '%s | isabella',
  },
  description:
    'Isabella — final-year student, startup founder, web3/AI evangelist, wellness + biohacker. A very online personal site.',
  openGraph: {
    title: 'isabella',
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
  themeColor: '#f3efe4',
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
        spaceGrotesk.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased font-sans selection:bg-cobalt">
        <Navbar />
        <main className="flex-auto min-w-0 flex flex-col">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
