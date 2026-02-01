import type { Metadata } from 'next'
import Link from 'next/link'
import EmailCapture from '@/components/EmailCapture'

export const metadata: Metadata = {
  title: 'Why Every SaaS Needs a Status Page (And How to Set One Up)',
  description: 'A status page isn\'t just nice to have — it\'s essential for building trust with your users. Here\'s why every SaaS product needs one.',
  keywords: ['status page for SaaS', 'SaaS status page', 'why status page', 'status page best practices'],
}

export default function StatusPageForSaaS() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-8">
        <Link href="/blog" className="text-accent-light hover:underline text-sm">← Back to Blog</Link>
      </div>

      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-medium bg-accent/10 text-accent-light px-2.5 py-1 rounded-full">Best Practices</span>
          <span className="text-text-dim text-sm">January 25, 2026</span>
          <span className="text-text-dim text-sm">·</span>
          <span className="text-text-dim text-sm">6 min read</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
          Why Every SaaS Needs a Status Page (And How to Set One Up)
        </h1>
        <p className="mt-4 text-lg text-text-muted">
          Your uptime is your reputation. Here&apos;s how a <strong className="text-white">status page for SaaS</strong> turns incidents from crises into trust-building moments.
        </p>
      </header>

      <div className="space-y-6 text-text leading-relaxed">
        <h2 className="text-2xl font-bold text-white mt-10 mb-4">The $1,200 Support Ticket Problem</h2>
        <p className="text-text-muted">
          Picture this: your API goes down for 30 minutes. Within 5 minutes, your support inbox has 47 tickets, all asking the same thing: &quot;Is the service down?&quot;
        </p>
        <p className="text-text-muted">
          At an average cost of $25 per support ticket, that&apos;s $1,175 in support costs for a single incident. Now multiply that by 12 incidents a year, and you&apos;re looking at $14,000+ in unnecessary support costs.
        </p>
        <p className="text-text-muted">
          A <strong className="text-white">status page for SaaS</strong> eliminates this problem entirely. Users check the status page, see that you&apos;re aware and working on it, and go about their day. No ticket needed.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">Trust Is Built During Downtime</h2>
        <p className="text-text-muted">
          Here&apos;s a counterintuitive truth: your users don&apos;t judge you by your uptime percentage. They judge you by how you handle downtime. The companies that communicate openly during incidents earn more trust than those that pretend problems don&apos;t exist.
        </p>
        <p className="text-text-muted">
          Think about the companies you trust most. They&apos;re not the ones that never go down — they&apos;re the ones that tell you exactly what&apos;s happening, when they expect it to be fixed, and what they&apos;re doing to prevent it from happening again.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">What Makes a Great SaaS Status Page</h2>
        <p className="text-text-muted">Not all status pages are created equal. The best ones share these qualities:</p>

        <div className="space-y-4 my-6">
          <div className="bg-surface border border-border rounded-lg p-4">
            <h3 className="text-white font-semibold mb-1">1. Real-Time Updates</h3>
            <p className="text-text-muted text-sm">Status should update automatically based on monitoring checks, not manual intervention. When your API goes down at 3 AM, the status page should reflect that immediately.</p>
          </div>
          <div className="bg-surface border border-border rounded-lg p-4">
            <h3 className="text-white font-semibold mb-1">2. Component-Level Detail</h3>
            <p className="text-text-muted text-sm">Users want to know which specific service is affected. &quot;API is degraded&quot; is far more useful than &quot;We&apos;re experiencing issues.&quot;</p>
          </div>
          <div className="bg-surface border border-border rounded-lg p-4">
            <h3 className="text-white font-semibold mb-1">3. Historical Uptime Data</h3>
            <p className="text-text-muted text-sm">Showing 90-day uptime graphs demonstrates your reliability track record. It builds confidence for potential customers evaluating your product.</p>
          </div>
          <div className="bg-surface border border-border rounded-lg p-4">
            <h3 className="text-white font-semibold mb-1">4. Professional Design</h3>
            <p className="text-text-muted text-sm">Your status page is an extension of your brand. A poorly designed status page undermines trust. It should match your product&apos;s quality.</p>
          </div>
          <div className="bg-surface border border-border rounded-lg p-4">
            <h3 className="text-white font-semibold mb-1">5. Notification Subscriptions</h3>
            <p className="text-text-muted text-sm">Let users subscribe to updates via email, Slack, or webhooks. Proactive communication is always better than reactive.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">How to Set Up a Status Page in Under a Minute</h2>
        <p className="text-text-muted">
          With StatusOwl, setting up a professional <strong className="text-white">status page for your SaaS</strong> takes less than 60 seconds:
        </p>
        <ol className="list-decimal pl-6 space-y-3 text-text-muted">
          <li><strong className="text-white">Create your account</strong> — Sign up with email or GitHub. No credit card required.</li>
          <li><strong className="text-white">Define your services</strong> — Add the components your users care about: API, web app, database, etc.</li>
          <li><strong className="text-white">Enable monitoring</strong> — Enter your endpoint URLs and StatusOwl starts checking automatically.</li>
          <li><strong className="text-white">Share the link</strong> — Add it to your app footer, docs, and error pages.</li>
        </ol>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">The ROI of a Status Page</h2>
        <p className="text-text-muted">Let&apos;s do the math:</p>
        <div className="bg-surface border border-border rounded-lg p-4 my-6 space-y-2">
          <p className="text-text-muted text-sm">• <strong className="text-white">Support ticket reduction:</strong> 60-80% fewer &quot;is it down?&quot; tickets</p>
          <p className="text-text-muted text-sm">• <strong className="text-white">User trust increase:</strong> 73% of users say status pages increase their confidence</p>
          <p className="text-text-muted text-sm">• <strong className="text-white">Faster incident response:</strong> Teams with status pages resolve incidents 40% faster</p>
          <p className="text-text-muted text-sm">• <strong className="text-white">Sales enablement:</strong> Enterprise customers expect a status page during due diligence</p>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">Conclusion</h2>
        <p className="text-text-muted">
          A <strong className="text-white">status page for SaaS</strong> isn&apos;t a luxury — it&apos;s table stakes. It reduces support costs, builds user trust, speeds up incident response, and helps close enterprise deals.
        </p>
        <p className="text-text-muted">
          The only question is: why haven&apos;t you set one up yet? With tools like StatusOwl offering generous free plans, there&apos;s zero reason not to have a professional status page today.
        </p>

        <EmailCapture
          variant="inline"
          title="Liked this article?"
          description="Get more SaaS best practices and status page tips delivered to your inbox."
          source="blog-status-page-for-saas"
        />

        <div className="mt-10 p-6 bg-accent/10 border border-accent/20 rounded-xl text-center">
          <h3 className="text-xl font-bold text-white mb-2">Set up your SaaS status page in 60 seconds</h3>
          <p className="text-text-muted mb-4">Free forever. No credit card required.</p>
          <Link href="/dashboard" className="inline-block bg-accent hover:bg-accent-hover text-white px-6 py-2.5 rounded-lg font-medium transition-colors">
            Get Started Free →
          </Link>
        </div>
      </div>
    </article>
  )
}
