import type { Metadata } from 'next'
import Link from 'next/link'
import EmailCapture from '@/components/EmailCapture'

export const metadata: Metadata = {
  title: 'Free Uptime Monitoring Tool — Multi-Region Checks | StatusOwl',
  description: 'Monitor your website and API uptime for free. Multi-region checks every 5 minutes, instant email alerts, and uptime history. No credit card required.',
  keywords: ['uptime monitoring tool', 'free uptime monitoring', 'website uptime checker', 'API monitoring', 'uptime monitoring service'],
  openGraph: {
    title: 'Free Uptime Monitoring Tool — Multi-Region Checks | StatusOwl',
    description: 'Monitor your website and API uptime for free. Multi-region checks, instant alerts, uptime history.',
    url: 'https://statusowl.deependventures.com/uptime-monitoring-tool',
  },
  alternates: {
    canonical: 'https://statusowl.deependventures.com/uptime-monitoring-tool',
  },
}

const faqs = [
  {
    question: 'How does uptime monitoring work?',
    answer: 'StatusOwl sends HTTP requests to your endpoints at regular intervals from multiple geographic regions. If a request fails or takes too long, we mark the service as down and alert you immediately.',
  },
  {
    question: 'What monitoring intervals are available?',
    answer: 'Free: every 5 minutes. Pro ($9/mo): every 60 seconds. Business ($29/mo): every 30 seconds. All plans include multi-region monitoring for accurate results.',
  },
  {
    question: 'From which regions do you monitor?',
    answer: 'We monitor from US East, US West, Europe (Frankfurt), and Asia (Tokyo). This ensures you catch regional outages, not just global ones.',
  },
  {
    question: 'What alerting channels are supported?',
    answer: 'Free: email alerts. Pro: email + Slack + webhook. Business: all channels plus PagerDuty, Opsgenie, and SMS. Notifications are instant — typically under 30 seconds.',
  },
  {
    question: 'Can I monitor APIs behind authentication?',
    answer: 'Yes. Configure custom headers (Bearer tokens, API keys) and request bodies for authenticated endpoint monitoring. Available on all plans.',
  },
  {
    question: 'How is this different from UptimeRobot?',
    answer: 'StatusOwl combines uptime monitoring with beautiful public status pages and incident management in one tool. UptimeRobot is monitoring-only — you need separate tools for status pages and incidents.',
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
  name: 'StatusOwl — Uptime Monitoring Tool',
  applicationCategory: 'WebApplication',
  operatingSystem: 'Any',
  description: 'Free uptime monitoring with multi-region checks, instant alerts, and uptime history.',
  url: 'https://statusowl.deependventures.com/uptime-monitoring-tool',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

const monitoringFeatures = [
  { icon: '🌍', title: 'Multi-Region Checks', desc: 'Monitor from US, Europe, and Asia simultaneously. Catch regional outages instantly.' },
  { icon: '⚡', title: 'Sub-Minute Intervals', desc: 'Check every 30 seconds on Business plans. Free plan checks every 5 minutes.' },
  { icon: '🔔', title: 'Instant Alerts', desc: 'Email, Slack, webhooks, PagerDuty — get notified in under 30 seconds.' },
  { icon: '📈', title: 'Uptime Reports', desc: 'Historical uptime data with response time graphs and SLA reporting.' },
  { icon: '🔐', title: 'Auth Support', desc: 'Monitor authenticated endpoints with custom headers and API keys.' },
  { icon: '🔗', title: 'Status Page Included', desc: 'Every monitored service automatically feeds your public status page.' },
]

const competitors = [
  { name: 'UptimeRobot', free: '50 monitors', interval: '5 min', statusPage: '❌ Basic only', price: 'Free / $7/mo' },
  { name: 'Better Uptime', free: '10 monitors', interval: '3 min', statusPage: '✅', price: 'Free / $20/mo' },
  { name: 'Pingdom', free: '❌', interval: '1 min', statusPage: '✅', price: '$15/mo' },
  { name: 'StatusOwl', free: '5 monitors', interval: '30s-5min', statusPage: '✅ Beautiful', price: 'Free / $9/mo' },
]

export default function UptimeMonitoringTool() {
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
            <span className="text-sm text-success">Monitoring from 4 regions</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white max-w-4xl mx-auto leading-tight tracking-tight">
            Free <span className="text-accent-light">uptime monitoring</span> that actually works
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
            Monitor your website, API, and services from multiple regions. Get instant alerts when something breaks. Free forever.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/dashboard" className="bg-accent hover:bg-accent-hover text-white px-8 py-3.5 rounded-lg font-semibold text-lg transition-all hover:shadow-lg hover:shadow-accent/25">
              Start Monitoring Free →
            </Link>
            <Link href="/status" className="border border-border hover:border-text-dim text-text-muted hover:text-white px-8 py-3.5 rounded-lg font-medium text-lg transition-colors">
              See Monitoring in Action
            </Link>
          </div>
          <p className="mt-4 text-sm text-text-dim">5 monitors free · No credit card required</p>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">How uptime monitoring works</h2>
          <p className="mt-3 text-text-muted text-lg">Three steps to peace of mind.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { step: '1', title: 'Add Your Endpoints', desc: 'Enter the URL of your website, API, or any HTTP endpoint you want to monitor.' },
            { step: '2', title: 'We Check Continuously', desc: 'StatusOwl pings your endpoints from 4 regions at your chosen interval (30s to 5min).' },
            { step: '3', title: 'Get Alerted Instantly', desc: 'If a check fails, you get notified via email, Slack, or webhook within 30 seconds.' },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent-light text-xl font-bold mx-auto mb-4">{item.step}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-text-muted text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Monitoring features</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {monitoringFeatures.map((f) => (
            <div key={f.title} className="bg-surface border border-border rounded-xl p-6 hover:border-accent/30 transition-colors">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Code Example */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white">Works with any HTTP endpoint</h2>
          <p className="mt-3 text-text-muted text-lg">If it responds to HTTP, StatusOwl can monitor it.</p>
        </div>
        <div className="bg-surface border border-border rounded-xl p-6 font-mono text-sm">
          <div className="text-text-dim mb-2"># Examples of what you can monitor:</div>
          <div className="space-y-1">
            <div><span className="text-success">✓</span> <span className="text-accent-light">https://api.yourapp.com/health</span> <span className="text-text-dim">→ API health check</span></div>
            <div><span className="text-success">✓</span> <span className="text-accent-light">https://yourapp.com</span> <span className="text-text-dim">→ Main website</span></div>
            <div><span className="text-success">✓</span> <span className="text-accent-light">https://cdn.yourapp.com/ping</span> <span className="text-text-dim">→ CDN endpoint</span></div>
            <div><span className="text-success">✓</span> <span className="text-accent-light">https://db.yourapp.com:5432/health</span> <span className="text-text-dim">→ Database proxy</span></div>
            <div><span className="text-success">✓</span> <span className="text-accent-light">https://mail.yourapp.com/status</span> <span className="text-text-dim">→ Email service</span></div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Compared to other monitoring tools</h2>
        </div>
        <div className="bg-surface border border-border rounded-xl overflow-hidden">
          <div className="grid grid-cols-5 gap-0 text-sm">
            <div className="p-4 font-semibold text-text-muted border-b border-border bg-surface-light">Tool</div>
            <div className="p-4 font-semibold text-text-muted border-b border-border bg-surface-light">Free Tier</div>
            <div className="p-4 font-semibold text-text-muted border-b border-border bg-surface-light">Min Interval</div>
            <div className="p-4 font-semibold text-text-muted border-b border-border bg-surface-light">Status Page</div>
            <div className="p-4 font-semibold text-text-muted border-b border-border bg-surface-light">Price</div>
            {competitors.map((c) => (
              <>
                <div key={`${c.name}-n`} className={`p-4 border-b border-border ${c.name === 'StatusOwl' ? 'text-accent-light font-semibold' : 'text-white'}`}>{c.name}</div>
                <div key={`${c.name}-f`} className="p-4 border-b border-border text-text-muted">{c.free}</div>
                <div key={`${c.name}-i`} className="p-4 border-b border-border text-text-muted">{c.interval}</div>
                <div key={`${c.name}-s`} className="p-4 border-b border-border text-text-muted">{c.statusPage}</div>
                <div key={`${c.name}-p`} className={`p-4 border-b border-border ${c.name === 'StatusOwl' ? 'text-success font-medium' : 'text-text-muted'}`}>{c.price}</div>
              </>
            ))}
          </div>
        </div>
      </section>

      {/* Email Capture */}
      <EmailCapture
        title="Get Uptime Monitoring Tips"
        description="Best practices for monitoring, incident response, and maintaining high availability."
        source="uptime-monitoring-tool"
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
          <Link href="/free-status-page" className="bg-surface border border-border rounded-xl p-6 hover:border-accent/30 transition-colors group">
            <h3 className="text-lg font-semibold text-white group-hover:text-accent-light transition-colors">Free Status Page →</h3>
            <p className="text-text-muted text-sm mt-2">Create a beautiful status page in 60 seconds, completely free.</p>
          </Link>
          <Link href="/incident-management" className="bg-surface border border-border rounded-xl p-6 hover:border-accent/30 transition-colors group">
            <h3 className="text-lg font-semibold text-white group-hover:text-accent-light transition-colors">Incident Management →</h3>
            <p className="text-text-muted text-sm mt-2">Streamlined incident communication with real-time public updates.</p>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Start monitoring your uptime today</h2>
        <p className="mt-4 text-lg text-text-muted max-w-xl mx-auto">Free for up to 5 monitors. Set up in under a minute.</p>
        <Link href="/dashboard" className="mt-8 inline-block bg-accent hover:bg-accent-hover text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-lg hover:shadow-accent/25">
          Start Monitoring Free →
        </Link>
      </section>
    </div>
  )
}
