import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'StatusOwl — Beautiful Status Pages & Uptime Monitoring',
    template: '%s | StatusOwl',
  },
  description: 'Create beautiful public status pages with built-in uptime monitoring. 80% cheaper than Statuspage.io, 10x faster to set up. Free tier available.',
  keywords: ['status page', 'uptime monitoring', 'SaaS status page', 'free status page', 'incident management'],
  authors: [{ name: 'Deep End Ventures', url: 'https://deependventures.com' }],
  creator: 'Deep End Ventures',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://statusowl.vercel.app',
    siteName: 'StatusOwl',
    title: 'StatusOwl — Beautiful Status Pages & Uptime Monitoring',
    description: 'Create beautiful public status pages with built-in uptime monitoring. Free tier available.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StatusOwl — Beautiful Status Pages & Uptime Monitoring',
    description: 'Create beautiful public status pages with built-in uptime monitoring. Free tier available.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'StatusOwl',
  applicationCategory: 'WebApplication',
  operatingSystem: 'Any',
  description: 'Beautiful status pages and uptime monitoring for SaaS teams',
  url: 'https://statusowl.vercel.app',
  offers: [
    { '@type': 'Offer', price: '0', priceCurrency: 'USD', name: 'Free' },
    { '@type': 'Offer', price: '9', priceCurrency: 'USD', name: 'Pro' },
    { '@type': 'Offer', price: '29', priceCurrency: 'USD', name: 'Business' },
  ],
  creator: {
    '@type': 'Organization',
    name: 'Deep End Ventures',
    url: 'https://deependventures.com',
  },
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'StatusOwl',
  url: 'https://statusowl.vercel.app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-text antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
