import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'StatusOwl pricing: Free forever plan, Pro at $9/mo, Business at $29/mo. Beautiful status pages and uptime monitoring for every budget.',
}

const tiers = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for side projects, personal apps, and getting started.',
    features: [
      { name: 'Status pages', value: '1' },
      { name: 'Services', value: '5' },
      { name: 'Check interval', value: '5 minutes' },
      { name: 'History retention', value: '7 days' },
      { name: 'Team members', value: '1' },
      { name: 'Notifications', value: 'Email only' },
      { name: 'Custom domain', value: '—' },
      { name: 'API access', value: '—' },
      { name: 'Uptime SLA reports', value: '—' },
    ],
    cta: 'Start Free',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$9',
    period: '/month',
    description: 'For growing SaaS teams that need more power and customization.',
    features: [
      { name: 'Status pages', value: '3' },
      { name: 'Services', value: '25' },
      { name: 'Check interval', value: '60 seconds' },
      { name: 'History retention', value: '90 days' },
      { name: 'Team members', value: '5' },
      { name: 'Notifications', value: 'Email + Slack + Webhooks' },
      { name: 'Custom domain', value: '1' },
      { name: 'API access', value: '✓' },
      { name: 'Uptime SLA reports', value: '—' },
    ],
    cta: 'Start Pro Trial',
    highlighted: true,
  },
  {
    name: 'Business',
    price: '$29',
    period: '/month',
    description: 'For teams that need enterprise-grade status page infrastructure.',
    features: [
      { name: 'Status pages', value: 'Unlimited' },
      { name: 'Services', value: 'Unlimited' },
      { name: 'Check interval', value: '30 seconds' },
      { name: 'History retention', value: '365 days' },
      { name: 'Team members', value: 'Unlimited' },
      { name: 'Notifications', value: 'All channels + SMS' },
      { name: 'Custom domains', value: 'Unlimited' },
      { name: 'API access', value: '✓' },
      { name: 'Uptime SLA reports', value: '✓' },
    ],
    cta: 'Start Business Trial',
    highlighted: false,
  },
]

const faqs = [
  {
    q: 'Can I upgrade or downgrade at any time?',
    a: 'Yes! You can switch plans at any time. When upgrading, you\'ll be prorated. When downgrading, the change takes effect at the end of your billing cycle.',
  },
  {
    q: 'Is there a free trial for paid plans?',
    a: 'Yes, both Pro and Business plans come with a 14-day free trial. No credit card required to start.',
  },
  {
    q: 'What happens if I exceed my plan limits?',
    a: 'We\'ll notify you and give you time to upgrade. We never delete your data or take your status page offline.',
  },
  {
    q: 'Do you offer annual billing?',
    a: 'Yes! Annual billing saves you 20%. That\'s $7.20/mo for Pro and $23.20/mo for Business.',
  },
  {
    q: 'Can I use StatusOwl for free forever?',
    a: 'Absolutely. Our free plan is genuinely free with no time limits. We believe every project deserves a status page.',
  },
]

export default function PricingPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-white">Simple, transparent pricing</h1>
        <p className="mt-4 text-lg text-text-muted max-w-2xl mx-auto">
          Start free, upgrade when you&apos;re ready. 80% cheaper than Statuspage.io.
        </p>
      </div>

      {/* Pricing cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-24">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`rounded-xl p-8 ${
              tier.highlighted
                ? 'bg-accent/10 border-2 border-accent ring-1 ring-accent/20 relative'
                : 'bg-surface border border-border'
            }`}
          >
            {tier.highlighted && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                MOST POPULAR
              </div>
            )}
            <h3 className="text-xl font-bold text-white">{tier.name}</h3>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-4xl font-bold text-white">{tier.price}</span>
              <span className="text-text-muted text-sm">{tier.period}</span>
            </div>
            <p className="mt-2 text-text-muted text-sm">{tier.description}</p>
            <Link
              href="/dashboard"
              className={`mt-6 block w-full text-center py-2.5 rounded-lg font-medium transition-colors ${
                tier.highlighted
                  ? 'bg-accent hover:bg-accent-hover text-white'
                  : 'bg-surface-light hover:bg-border text-white'
              }`}
            >
              {tier.cta}
            </Link>
            <div className="mt-6 space-y-3">
              {tier.features.map((f) => (
                <div key={f.name} className="flex items-center justify-between text-sm">
                  <span className="text-text-muted">{f.name}</span>
                  <span className={`font-medium ${f.value === '—' ? 'text-text-dim' : 'text-text'}`}>{f.value}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently asked questions</h2>
        <div className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-surface border border-border rounded-lg p-6">
              <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
              <p className="text-text-muted text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
