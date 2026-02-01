import type { Metadata } from 'next'
import Link from 'next/link'
import EmailCapture from '@/components/EmailCapture'

export const metadata: Metadata = {
  title: 'Free Status Page — Create Yours in 60 Seconds | StatusOwl',
  description: 'Create a free status page for your website, app, or API. Beautiful, responsive, real-time — no credit card required. 80% cheaper than Statuspage.io.',
  keywords: ['free status page', 'free status page tool', 'status page generator', 'create status page free', 'website status page'],
  openGraph: {
    title: 'Free Status Page — Create Yours in 60 Seconds | StatusOwl',
    description: 'Create a free status page for your website, app, or API. Beautiful, responsive, real-time — no credit card required.',
    url: 'https://statusowl.deependventures.com/free-status-page',
  },
  alternates: {
    canonical: 'https://statusowl.deependventures.com/free-status-page',
  },
}

const faqs = [
  {
    question: 'Is StatusOwl really free?',
    answer: 'Yes. The free plan includes 1 status page, 5 services, uptime checks every 5 minutes, email notifications, and 7-day history. No credit card required, free forever.',
  },
  {
    question: 'What does a free status page include?',
    answer: 'Your free StatusOwl status page includes real-time service status, uptime monitoring, incident updates, a public URL you can share, and email notifications — all fully functional.',
  },
  {
    question: 'Can I use a custom domain on the free plan?',
    answer: 'Custom domains are available on Pro ($9/month) and Business ($29/month) plans. The free plan gives you a statusowl.com subdomain like yourapp.statusowl.com.',
  },
  {
    question: 'How does StatusOwl compare to Statuspage.io pricing?',
    answer: 'Statuspage.io starts at $29/month for their cheapest plan. StatusOwl offers a generous free tier and Pro plans starting at $9/month — that\'s 80% cheaper for comparable features.',
  },
  {
    question: 'How long does setup take?',
    answer: 'Under 60 seconds. Sign up, name your services, and your status page is live. No configuration files, no DNS changes, no waiting.',
  },
  {
    question: 'Can I monitor APIs and websites?',
    answer: 'Yes. StatusOwl monitors any HTTP/HTTPS endpoint. Add your API endpoints, marketing site, app server, database health checks — anything with a URL.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
}

const softwareJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'StatusOwl — Free Status Page',
  applicationCategory: 'WebApplication',
  operatingSystem: 'Any',
  description: 'Create a free status page for your website, app, or API in 60 seconds.',
  url: 'https://statusowl.deependventures.com/free-status-page',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

const competitors = [
  { name: 'Statuspage.io', freePages: '0', startingPrice: '$29/mo', monitoring: 'Third-party only', setup: '~15 min' },
  { name: 'Instatus', freePages: '1', startingPrice: '$20/mo', monitoring: 'Built-in', setup: '~5 min' },
  { name: 'Cachet (self-hosted)', freePages: 'Unlimited', startingPrice: 'Free (self-host)', monitoring: 'None', setup: '~2 hours' },
  { name: 'StatusOwl', freePages: '1', startingPrice: 'Free forever', monitoring: 'Built-in', setup: '<60 seconds' },
]

const useCases = [
  { icon: '🚀', title: 'SaaS Products', desc: 'Show customers your API and app are reliable.' },
  { icon: '🛒', title: 'E-Commerce', desc: 'Keep shoppers informed during checkout outages.' },
  { icon: '🎮', title: 'Gaming Platforms', desc: 'Communicate server status to your player base.' },
  { icon: '🏗️', title: 'Developer Tools', desc: 'Build trust with developers who depend on your API.' },
  { icon: '📱', title: 'Mobile Apps', desc: 'Display backend status for mobile users.' },
  { icon: '🏢', title: 'Internal Tools', desc: 'Track internal service health for your ops team.' },
]

export default function FreeStatusPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          <div className="inline-flex items-center gap-2 bg-success/10 border border-success/20 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span className="text-sm text-success">100% Free — No Credit Card</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white max-w-4xl mx-auto leading-tight tracking-tight">
            Create a <span className="text-accent-light">free status page</span> in 60 seconds
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
            Beautiful, real-time status pages with built-in uptime monitoring.
            Free forever — no credit card, no catch.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/dashboard" className="bg-accent hover:bg-accent-hover text-white px-8 py-3.5 rounded-lg font-semibold text-lg transition-all hover:shadow-lg hover:shadow-accent/25">
              Create Free Status Page →
            </Link>
            <Link href="/status" className="border border-border hover:border-text-dim text-text-muted hover:text-white px-8 py-3.5 rounded-lg font-medium text-lg transition-colors">
              See Live Example
            </Link>
          </div>
        </div>
      </section>

      {/* What You Get Free */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">What&apos;s included in the free plan</h2>
          <p className="mt-3 text-text-muted text-lg">Everything you need to get started — forever free.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: '📊', title: '1 Status Page', desc: 'A fully functional public status page with your branding.' },
            { icon: '🔍', title: '5 Service Monitors', desc: 'Monitor up to 5 endpoints with automatic uptime checks.' },
            { icon: '⏱️', title: '5-Minute Intervals', desc: 'Uptime checks every 5 minutes from multiple regions.' },
            { icon: '📧', title: 'Email Notifications', desc: 'Get notified instantly when a service goes down.' },
            { icon: '📅', title: '7-Day History', desc: 'Uptime history and incident timeline for the past week.' },
            { icon: '🚨', title: 'Incident Management', desc: 'Create, update, and resolve incidents with public updates.' },
          ].map((item) => (
            <div key={item.title} className="bg-surface border border-border rounded-xl p-6 hover:border-accent/30 transition-colors">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Who needs a free status page?</h2>
          <p className="mt-3 text-text-muted text-lg">If you have users, you need a status page.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((uc) => (
            <div key={uc.title} className="bg-surface border border-border rounded-xl p-6">
              <div className="text-3xl mb-3">{uc.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-1">{uc.title}</h3>
              <p className="text-text-muted text-sm">{uc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Competitor Comparison */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">How StatusOwl compares</h2>
          <p className="mt-3 text-text-muted text-lg">More features, less cost.</p>
        </div>
        <div className="bg-surface border border-border rounded-xl overflow-hidden">
          <div className="grid grid-cols-5 gap-0 text-sm">
            <div className="p-4 font-semibold text-text-muted border-b border-border bg-surface-light">Tool</div>
            <div className="p-4 font-semibold text-text-muted border-b border-border bg-surface-light">Free Pages</div>
            <div className="p-4 font-semibold text-text-muted border-b border-border bg-surface-light">Starting Price</div>
            <div className="p-4 font-semibold text-text-muted border-b border-border bg-surface-light">Monitoring</div>
            <div className="p-4 font-semibold text-text-muted border-b border-border bg-surface-light">Setup Time</div>
            {competitors.map((c) => (
              <>
                <div key={`${c.name}-name`} className={`p-4 border-b border-border ${c.name === 'StatusOwl' ? 'text-accent-light font-semibold' : 'text-white'}`}>{c.name}</div>
                <div key={`${c.name}-pages`} className="p-4 border-b border-border text-text-muted">{c.freePages}</div>
                <div key={`${c.name}-price`} className={`p-4 border-b border-border ${c.name === 'StatusOwl' ? 'text-success font-medium' : 'text-text-muted'}`}>{c.startingPrice}</div>
                <div key={`${c.name}-monitoring`} className="p-4 border-b border-border text-text-muted">{c.monitoring}</div>
                <div key={`${c.name}-setup`} className={`p-4 border-b border-border ${c.name === 'StatusOwl' ? 'text-success font-medium' : 'text-text-muted'}`}>{c.setup}</div>
              </>
            ))}
          </div>
        </div>
      </section>

      {/* Email Capture */}
      <EmailCapture
        title="Get Status Page Best Practices"
        description="Tips on uptime monitoring, incident communication, and building trust with users."
        source="free-status-page"
      />

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-surface border border-border rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
              <p className="text-text-muted leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* More Tools */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">More Free Tools from StatusOwl</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <Link href="/uptime-monitoring-tool" className="bg-surface border border-border rounded-xl p-6 hover:border-accent/30 transition-colors group">
            <h3 className="text-lg font-semibold text-white group-hover:text-accent-light transition-colors">Uptime Monitoring Tool →</h3>
            <p className="text-text-muted text-sm mt-2">Free uptime monitoring with multi-region checks and instant alerts.</p>
          </Link>
          <Link href="/incident-management" className="bg-surface border border-border rounded-xl p-6 hover:border-accent/30 transition-colors group">
            <h3 className="text-lg font-semibold text-white group-hover:text-accent-light transition-colors">Incident Management →</h3>
            <p className="text-text-muted text-sm mt-2">Streamlined incident communication with real-time public updates.</p>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to create your free status page?</h2>
        <p className="mt-4 text-lg text-text-muted max-w-xl mx-auto">Takes less than 60 seconds. No credit card. Free forever.</p>
        <Link href="/dashboard" className="mt-8 inline-block bg-accent hover:bg-accent-hover text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-lg hover:shadow-accent/25">
          Get Started — It&apos;s Free →
        </Link>
      </section>
    </div>
  )
}
