import type { Metadata } from 'next'
import Link from 'next/link'
import EmailCapture from '@/components/EmailCapture'

export const metadata: Metadata = {
  title: 'Incident Management for SaaS — Real-Time Updates | StatusOwl',
  description: 'Streamline incident communication with real-time public updates. Create, update, and resolve incidents — keep your users informed during outages. Free tier included.',
  keywords: ['incident management', 'incident communication', 'outage communication', 'SaaS incident management', 'incident response tool'],
  openGraph: {
    title: 'Incident Management for SaaS — Real-Time Updates | StatusOwl',
    description: 'Streamline incident communication with real-time public updates. Keep users informed during outages.',
    url: 'https://statusowl.deependventures.com/incident-management',
  },
  alternates: {
    canonical: 'https://statusowl.deependventures.com/incident-management',
  },
}

const faqs = [
  {
    question: 'What is incident management?',
    answer: 'Incident management is the process of identifying, communicating, and resolving service disruptions. StatusOwl provides tools to create incidents, post real-time updates to your status page, and notify affected users automatically.',
  },
  {
    question: 'How do I create an incident in StatusOwl?',
    answer: 'From your dashboard, click "Create Incident," select affected services, choose severity (minor/major/critical), and write your initial message. It goes live on your status page instantly.',
  },
  {
    question: 'Can I post updates during an incident?',
    answer: 'Yes. Add as many updates as needed — investigating, identified, monitoring, resolved. Each update appears in real-time on your public status page, and subscribers get notified.',
  },
  {
    question: 'How are users notified about incidents?',
    answer: 'Users who subscribe to your status page get instant notifications via email. Pro and Business plans add Slack, webhooks, and RSS feed support.',
  },
  {
    question: 'Can I schedule maintenance windows?',
    answer: 'Yes. Create scheduled maintenance events with start/end times. They appear on your status page in advance, so users know when to expect downtime.',
  },
  {
    question: 'Does StatusOwl integrate with PagerDuty or Opsgenie?',
    answer: 'Business plan includes PagerDuty and Opsgenie integrations, so incidents from your on-call rotation can automatically create StatusOwl incidents. Pro plan supports webhooks for custom integrations.',
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
  name: 'StatusOwl — Incident Management',
  applicationCategory: 'WebApplication',
  operatingSystem: 'Any',
  description: 'Incident management with real-time public status page updates and multi-channel notifications.',
  url: 'https://statusowl.deependventures.com/incident-management',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

const workflow = [
  { step: '1', icon: '🚨', title: 'Detect', desc: 'Uptime monitoring detects a failure, or your team reports an issue manually.' },
  { step: '2', icon: '📝', title: 'Create Incident', desc: 'One click to create an incident. Select affected services and severity level.' },
  { step: '3', icon: '📢', title: 'Communicate', desc: 'Status page updates in real-time. Subscribers notified via email, Slack, webhooks.' },
  { step: '4', icon: '🔄', title: 'Update', desc: 'Post progress updates as you investigate and fix. Users see the timeline live.' },
  { step: '5', icon: '✅', title: 'Resolve', desc: 'Mark resolved. Automated "all clear" notification sent to all subscribers.' },
  { step: '6', icon: '📊', title: 'Post-Mortem', desc: 'Document what happened and how you fixed it. Builds long-term trust.' },
]

const features = [
  { icon: '⏱️', title: 'Real-Time Updates', desc: 'Status page updates live as you post incident updates. No page refresh needed.' },
  { icon: '🏷️', title: 'Severity Levels', desc: 'Minor, major, or critical — communicate the right urgency to your users.' },
  { icon: '📅', title: 'Scheduled Maintenance', desc: 'Plan maintenance windows with advance notice on your status page.' },
  { icon: '📧', title: 'Subscriber Notifications', desc: 'Users subscribe to your status page and get automatic incident emails.' },
  { icon: '🔗', title: 'Slack & Webhook Alerts', desc: 'Push incidents to your team Slack channel or custom webhook endpoint.' },
  { icon: '📈', title: 'Incident History', desc: 'Full timeline of past incidents, resolutions, and post-mortems.' },
]

export default function IncidentManagement() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-8">
            <span className="text-sm text-accent-light">🚨 Incident Management Built-In</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white max-w-4xl mx-auto leading-tight tracking-tight">
            Keep users informed during{' '}
            <span className="text-accent-light">every outage</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
            Create incidents, post real-time updates, and resolve issues — all reflected instantly on your public status page.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/dashboard" className="bg-accent hover:bg-accent-hover text-white px-8 py-3.5 rounded-lg font-semibold text-lg transition-all hover:shadow-lg hover:shadow-accent/25">
              Get Started Free →
            </Link>
            <Link href="/status" className="border border-border hover:border-text-dim text-text-muted hover:text-white px-8 py-3.5 rounded-lg font-medium text-lg transition-colors">
              See Incident Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Incident Demo Preview */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 mb-20">
        <div className="bg-surface border border-border rounded-xl p-6 shadow-2xl shadow-black/50">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-danger/10 text-danger">
              <span className="w-2 h-2 rounded-full bg-danger animate-pulse" />
              Major Outage
            </span>
            <span className="text-text-dim text-sm">API Service — Started 14 min ago</span>
          </div>
          <div className="space-y-4 border-l-2 border-border pl-6 ml-2">
            <div>
              <div className="flex items-center gap-2 text-sm text-text-dim mb-1">
                <span className="w-2 h-2 rounded-full bg-warning" />
                <span>Monitoring — 2 min ago</span>
              </div>
              <p className="text-text text-sm">Fix deployed. Monitoring for stability before marking resolved.</p>
            </div>
            <div>
              <div className="flex items-center gap-2 text-sm text-text-dim mb-1">
                <span className="w-2 h-2 rounded-full bg-accent-light" />
                <span>Identified — 8 min ago</span>
              </div>
              <p className="text-text text-sm">Root cause identified: database connection pool exhaustion. Deploying fix now.</p>
            </div>
            <div>
              <div className="flex items-center gap-2 text-sm text-text-dim mb-1">
                <span className="w-2 h-2 rounded-full bg-danger" />
                <span>Investigating — 14 min ago</span>
              </div>
              <p className="text-text text-sm">We are investigating reports of API errors (HTTP 503). Our team is on it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">The incident management workflow</h2>
          <p className="mt-3 text-text-muted text-lg">From detection to resolution in 6 steps.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {workflow.map((w) => (
            <div key={w.step} className="bg-surface border border-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{w.icon}</span>
                <span className="text-xs font-bold text-accent-light bg-accent/10 px-2 py-0.5 rounded-full">Step {w.step}</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{w.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Incident management features</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-surface border border-border rounded-xl p-6 hover:border-accent/30 transition-colors">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why It Matters */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Why incident communication matters</h2>
        </div>
        <div className="space-y-6">
          {[
            { stat: '72%', desc: 'of users say transparent outage communication makes them MORE likely to stay.' },
            { stat: '3x', desc: 'faster incident resolution when teams have structured communication workflows.' },
            { stat: '50%', desc: 'fewer support tickets during outages when a status page is available.' },
          ].map((item) => (
            <div key={item.stat} className="bg-surface border border-border rounded-xl p-6 flex items-center gap-6">
              <div className="text-4xl font-bold text-accent-light shrink-0">{item.stat}</div>
              <p className="text-text-muted text-lg">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Email Capture */}
      <EmailCapture
        title="Get Incident Communication Best Practices"
        description="Templates, workflows, and tips for keeping users informed during outages."
        source="incident-management"
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
          <Link href="/uptime-monitoring-tool" className="bg-surface border border-border rounded-xl p-6 hover:border-accent/30 transition-colors group">
            <h3 className="text-lg font-semibold text-white group-hover:text-accent-light transition-colors">Uptime Monitoring Tool →</h3>
            <p className="text-text-muted text-sm mt-2">Free multi-region uptime monitoring with instant alerts.</p>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Never leave users in the dark again</h2>
        <p className="mt-4 text-lg text-text-muted max-w-xl mx-auto">Set up incident management with a free status page in under a minute.</p>
        <Link href="/dashboard" className="mt-8 inline-block bg-accent hover:bg-accent-hover text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-lg hover:shadow-accent/25">
          Get Started — It&apos;s Free →
        </Link>
      </section>
    </div>
  )
}
