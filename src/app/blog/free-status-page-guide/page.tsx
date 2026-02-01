import type { Metadata } from 'next'
import Link from 'next/link'
import EmailCapture from '@/components/EmailCapture'

export const metadata: Metadata = {
  title: 'The Complete Guide to Free Status Pages in 2026',
  description: 'Everything you need to know about setting up a free status page for your SaaS product. Compare tools, features, and learn how to get started in minutes.',
  keywords: ['free status page', 'status page tool', 'free uptime monitoring', 'status page 2026'],
}

export default function FreeStatusPageGuide() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-8">
        <Link href="/blog" className="text-accent-light hover:underline text-sm">← Back to Blog</Link>
      </div>

      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-medium bg-accent/10 text-accent-light px-2.5 py-1 rounded-full">Guide</span>
          <span className="text-text-dim text-sm">January 28, 2026</span>
          <span className="text-text-dim text-sm">·</span>
          <span className="text-text-dim text-sm">8 min read</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
          The Complete Guide to Free Status Pages in 2026
        </h1>
        <p className="mt-4 text-lg text-text-muted">
          Your users deserve to know when something&apos;s down — and you deserve a status page that doesn&apos;t cost a fortune.
        </p>
      </header>

      <div className="prose-custom space-y-6 text-text leading-relaxed">
        <h2 className="text-2xl font-bold text-white mt-10 mb-4">Why You Need a Status Page</h2>
        <p className="text-text-muted">
          Every SaaS product experiences downtime. The difference between a trusted product and a frustrating one isn&apos;t whether you have outages — it&apos;s how you communicate about them. A <strong className="text-white">free status page</strong> is the simplest way to build that trust.
        </p>
        <p className="text-text-muted">
          When users can&apos;t access your service, the first thing they do is check if it&apos;s just them or if it&apos;s everyone. Without a status page, they&apos;re left frustrated, flooding your support inbox with &quot;is the site down?&quot; tickets.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">What to Look for in a Free Status Page</h2>
        <p className="text-text-muted">Not all free status pages are created equal. Here&apos;s what matters:</p>
        <ul className="list-disc pl-6 space-y-2 text-text-muted">
          <li><strong className="text-white">Ease of setup:</strong> You should be able to go live in under 5 minutes. If it takes longer, the tool is too complex.</li>
          <li><strong className="text-white">Design quality:</strong> Your status page represents your brand. It should look professional, not like a homework project.</li>
          <li><strong className="text-white">Uptime monitoring:</strong> The best status pages include built-in monitoring so your page updates automatically.</li>
          <li><strong className="text-white">Incident management:</strong> You need a way to post updates when things go wrong.</li>
          <li><strong className="text-white">Custom domain:</strong> Even on free plans, some tools let you use your own subdomain.</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">Top Free Status Page Tools Compared</h2>
        <p className="text-text-muted">Here&apos;s how the leading free options stack up in 2026:</p>

        <div className="bg-surface border border-border rounded-lg p-4 space-y-4 my-6">
          <div className="border-b border-border pb-4">
            <h3 className="text-white font-semibold">StatusOwl (Free Plan)</h3>
            <p className="text-text-muted text-sm mt-1">Beautiful dark-themed status pages with built-in uptime monitoring. 5 services, email notifications, 7-day history. The fastest setup in the market.</p>
          </div>
          <div className="border-b border-border pb-4">
            <h3 className="text-white font-semibold">Atlassian Statuspage (Free)</h3>
            <p className="text-text-muted text-sm mt-1">Industry standard but limited free tier. 1 page, no custom domain. The interface shows its age and setup takes 20+ minutes.</p>
          </div>
          <div className="border-b border-border pb-4">
            <h3 className="text-white font-semibold">Upptime (Open Source)</h3>
            <p className="text-text-muted text-sm mt-1">GitHub-powered, completely free. Requires technical setup and GitHub Actions. Great for developers, not for non-technical teams.</p>
          </div>
          <div>
            <h3 className="text-white font-semibold">Cachet (Open Source)</h3>
            <p className="text-text-muted text-sm mt-1">Self-hosted PHP application. Full control but requires a server and maintenance. No longer actively maintained.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">Setting Up Your Free Status Page with StatusOwl</h2>
        <p className="text-text-muted">Getting started takes literally 60 seconds:</p>
        <ol className="list-decimal pl-6 space-y-2 text-text-muted">
          <li><strong className="text-white">Sign up for free</strong> — no credit card, no commitment.</li>
          <li><strong className="text-white">Add your services</strong> — API, website, database, whatever you need to monitor.</li>
          <li><strong className="text-white">Share your status page URL</strong> — embed it in your app or link from your docs.</li>
          <li><strong className="text-white">Set up notifications</strong> — get alerted when services go down.</li>
        </ol>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">Best Practices for Status Pages</h2>
        <ul className="list-disc pl-6 space-y-2 text-text-muted">
          <li><strong className="text-white">Be transparent:</strong> Don&apos;t hide incidents. Users respect honesty.</li>
          <li><strong className="text-white">Update frequently:</strong> During an incident, post updates every 15-30 minutes.</li>
          <li><strong className="text-white">Use clear language:</strong> Avoid jargon. &quot;Login is slow&quot; beats &quot;Auth service experiencing elevated P99 latency.&quot;</li>
          <li><strong className="text-white">Post post-mortems:</strong> After major incidents, explain what happened and what you&apos;re doing to prevent it.</li>
          <li><strong className="text-white">Link from your app:</strong> Make the status page easily discoverable — footer link, help docs, error pages.</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">Conclusion</h2>
        <p className="text-text-muted">
          A <strong className="text-white">free status page</strong> is one of the highest-ROI investments you can make for your SaaS. It reduces support tickets, builds user trust, and shows you take reliability seriously — all for $0.
        </p>
        <p className="text-text-muted">
          StatusOwl makes it dead simple to get started. Create your free status page today and give your users the transparency they deserve.
        </p>

        <EmailCapture
          variant="inline"
          title="Enjoyed this guide?"
          description="Get more status page tips and uptime monitoring insights in your inbox."
          source="blog-free-status-page-guide"
        />

        <div className="mt-10 p-6 bg-accent/10 border border-accent/20 rounded-xl text-center">
          <h3 className="text-xl font-bold text-white mb-2">Ready to create your free status page?</h3>
          <p className="text-text-muted mb-4">Get started in 60 seconds. No credit card required.</p>
          <Link href="/dashboard" className="inline-block bg-accent hover:bg-accent-hover text-white px-6 py-2.5 rounded-lg font-medium transition-colors">
            Create Free Status Page →
          </Link>
        </div>
      </div>
    </article>
  )
}
