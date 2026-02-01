import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Features',
  description: 'StatusOwl features: uptime monitoring, incident management, custom domains, team collaboration, API access, and more.',
}

const featureSections = [
  {
    title: 'Uptime Monitoring',
    description: 'Monitor your services around the clock with configurable check intervals.',
    details: [
      'HTTP, HTTPS, TCP, and ping monitoring',
      'Check intervals from 30 seconds to 5 minutes',
      'Multi-region monitoring from 6 global locations',
      'SSL certificate expiry alerts',
      'Response time tracking and graphs',
    ],
  },
  {
    title: 'Beautiful Status Pages',
    description: 'Professional status pages that match your brand, out of the box.',
    details: [
      'Dark and light theme options',
      'Custom domain support (status.yourapp.com)',
      'Custom branding and logo',
      'Component groups and hierarchies',
      'Historical uptime graphs (7-365 days)',
    ],
  },
  {
    title: 'Incident Management',
    description: 'Keep your users informed with real-time incident updates.',
    details: [
      'Create and manage incidents in seconds',
      'Real-time status updates',
      'Incident templates for common issues',
      'Post-mortem reports',
      'Scheduled maintenance windows',
    ],
  },
  {
    title: 'Notifications & Integrations',
    description: 'Get alerted the way you want, wherever you work.',
    details: [
      'Email notifications',
      'Slack and Discord webhooks',
      'PagerDuty and Opsgenie integration',
      'SMS alerts (Business plan)',
      'Custom webhook endpoints',
    ],
  },
  {
    title: 'Team Collaboration',
    description: 'Work together to keep your services running smoothly.',
    details: [
      'Role-based access control',
      'Team member management',
      'Activity audit log',
      'SSO support (Business plan)',
      'API keys per team member',
    ],
  },
  {
    title: 'API & Developer Tools',
    description: 'Automate everything with our comprehensive REST API.',
    details: [
      'Full REST API',
      'Webhook events for all state changes',
      'CLI tool for CI/CD integration',
      'Terraform provider (coming soon)',
      'GitHub Actions integration',
    ],
  },
]

export default function FeaturesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-white">Powerful features, simple setup</h1>
        <p className="mt-4 text-lg text-text-muted max-w-2xl mx-auto">
          Everything you need to monitor uptime, manage incidents, and communicate with your users.
        </p>
      </div>

      <div className="space-y-16">
        {featureSections.map((section, index) => (
          <div key={section.title} className={`flex flex-col lg:flex-row gap-8 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-white mb-3">{section.title}</h2>
              <p className="text-text-muted mb-6">{section.description}</p>
              <ul className="space-y-3">
                {section.details.map((detail) => (
                  <li key={detail} className="flex items-center gap-3 text-text">
                    <svg className="w-5 h-5 text-accent-light shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 w-full bg-surface border border-border rounded-xl p-8 flex items-center justify-center min-h-[200px]">
              <div className="text-6xl opacity-30">
                {['📊', '🎨', '🚨', '🔔', '👥', '⚙️'][index]}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-24">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to get started?</h2>
        <Link
          href="/dashboard"
          className="inline-block bg-accent hover:bg-accent-hover text-white px-8 py-3.5 rounded-lg font-semibold text-lg transition-all hover:shadow-lg hover:shadow-accent/25"
        >
          Create Free Status Page →
        </Link>
      </div>
    </div>
  )
}
