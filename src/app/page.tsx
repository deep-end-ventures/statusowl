import Link from 'next/link'
import EmailCapture from '@/components/EmailCapture'

const faqs = [
  {
    question: 'What is a status page and why do I need one?',
    answer: 'A status page is a public page that shows the real-time health of your services. It builds trust with users by being transparent about uptime, incidents, and maintenance. StatusOwl makes creating one effortless.',
  },
  {
    question: 'How does StatusOwl compare to Statuspage.io?',
    answer: 'StatusOwl offers the same core features — uptime monitoring, incident management, and custom domains — at 80% less cost. Our free tier includes everything you need to get started, vs Statuspage.io starting at $29/month.',
  },
  {
    question: 'How often does StatusOwl check uptime?',
    answer: 'Depending on your plan: every 5 minutes (Free), every 60 seconds (Pro), or every 30 seconds (Business). Checks run from multiple regions for accuracy.',
  },
  {
    question: 'Can I use my own domain for the status page?',
    answer: 'Yes! Pro and Business plans support custom domains (e.g., status.yourapp.com). Just add a CNAME record and StatusOwl handles the rest, including SSL.',
  },
  {
    question: 'Is there a free tier?',
    answer: 'Absolutely. The free plan includes 1 status page, 5 services, email notifications, and 7-day history. No credit card required, free forever.',
  },
  {
    question: 'How do I set up incident management?',
    answer: 'StatusOwl provides a simple dashboard to create, update, and resolve incidents. Your users see real-time updates on your status page. Notifications go out via email, Slack, or webhooks.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

const features = [
  {
    icon: '⚡',
    title: 'Setup in 60 Seconds',
    description: 'Create your status page instantly. No configuration needed — just add your services and go live.',
  },
  {
    icon: '📊',
    title: 'Uptime Monitoring',
    description: 'Automatic uptime checks every 60 seconds. Get notified instantly when something goes down.',
  },
  {
    icon: '🎨',
    title: 'Beautiful by Default',
    description: 'Dark-themed, responsive status pages that look professional without any design work.',
  },
  {
    icon: '🔔',
    title: 'Incident Management',
    description: 'Create, update, and resolve incidents with real-time updates for your users.',
  },
  {
    icon: '📈',
    title: 'Uptime Reports',
    description: 'Historical uptime data with 90-day graphs. Show your users you take reliability seriously.',
  },
  {
    icon: '🔗',
    title: 'Custom Domains',
    description: 'Use your own domain for a seamless brand experience. status.yourapp.com — done.',
  },
]

const pricingTiers = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for side projects and small apps',
    features: ['1 status page', '5 services', 'Uptime checks every 5 min', 'Public status page', 'Email notifications', '7-day history'],
    cta: 'Start Free',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$9',
    period: '/month',
    description: 'For growing SaaS products',
    features: ['3 status pages', '25 services', 'Uptime checks every 60s', 'Custom domain', 'Slack & webhook alerts', '90-day history', 'Team members (up to 5)', 'API access'],
    cta: 'Start Pro Trial',
    highlighted: true,
  },
  {
    name: 'Business',
    price: '$29',
    period: '/month',
    description: 'For teams that need everything',
    features: ['Unlimited status pages', 'Unlimited services', 'Uptime checks every 30s', 'Multiple custom domains', 'All integrations', '365-day history', 'Unlimited team members', 'Priority support', 'SLA reports', 'White-label'],
    cta: 'Start Business Trial',
    highlighted: false,
  },
]

export default function HomePage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 text-center">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span className="text-sm text-accent-light">Now in public beta</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white max-w-4xl mx-auto leading-tight tracking-tight">
            Beautiful status pages your users will{' '}
            <span className="text-accent-light">actually trust</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
            StatusOwl gives your SaaS a professional status page with built-in uptime monitoring. 
            80% cheaper than Statuspage.io, set up in under a minute.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/dashboard"
              className="bg-accent hover:bg-accent-hover text-white px-8 py-3.5 rounded-lg font-semibold text-lg transition-all hover:shadow-lg hover:shadow-accent/25"
            >
              Create Free Status Page →
            </Link>
            <Link
              href="/status"
              className="border border-border hover:border-text-dim text-text-muted hover:text-white px-8 py-3.5 rounded-lg font-medium text-lg transition-colors"
            >
              View Live Demo
            </Link>
          </div>
          <p className="mt-4 text-sm text-text-dim">No credit card required · Free forever plan</p>
        </div>
      </section>

      {/* Demo preview */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 mb-24 relative z-10">
        <div className="bg-surface border border-border rounded-xl p-6 shadow-2xl shadow-black/50">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-success animate-pulse" />
              <span className="text-white font-semibold text-lg">All Systems Operational</span>
            </div>
            <span className="text-text-dim text-sm">99.97% uptime</span>
          </div>
          <div className="space-y-3">
            {['API', 'Web Application', 'Database', 'CDN', 'Email Service'].map((name, i) => (
              <div key={name} className="flex items-center justify-between py-3 px-4 bg-background/50 rounded-lg">
                <span className="text-text font-medium">{name}</span>
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${i === 3 ? 'bg-warning/10 text-warning' : 'bg-success/10 text-success'}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${i === 3 ? 'bg-warning' : 'bg-success'} animate-pulse`} />
                  {i === 3 ? 'Degraded' : 'Operational'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Everything you need for status & uptime</h2>
          <p className="mt-4 text-lg text-text-muted max-w-2xl mx-auto">
            From monitoring to incident management, StatusOwl handles it all.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-surface border border-border rounded-xl p-6 hover:border-accent/30 transition-colors">
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Simple, transparent pricing</h2>
          <p className="mt-4 text-lg text-text-muted max-w-2xl mx-auto">
            Start free, upgrade when you need more. No hidden fees, no surprises.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingTiers.map((tier) => (
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
              <ul className="mt-6 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-text-muted">
                    <svg className="w-4 h-4 mt-0.5 text-accent-light shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Email Capture */}
      <EmailCapture
        title="Stay Ahead on Status Page Best Practices"
        description="Get tips on uptime monitoring, incident communication, and building user trust. Plus early access to new StatusOwl features."
        source="homepage"
      />

      {/* FAQ */}
      <section id="faq" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-text-muted">Everything you need to know about StatusOwl.</p>
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

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to build trust with your users?</h2>
        <p className="mt-4 text-lg text-text-muted max-w-xl mx-auto">
          Join hundreds of SaaS teams using StatusOwl to communicate reliability.
        </p>
        <Link
          href="/dashboard"
          className="mt-8 inline-block bg-accent hover:bg-accent-hover text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-lg hover:shadow-accent/25"
        >
          Get Started — It&apos;s Free →
        </Link>
      </section>
    </div>
  )
}
