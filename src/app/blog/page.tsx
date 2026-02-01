import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Learn about status pages, uptime monitoring, and incident management best practices from the StatusOwl team.',
}

const posts = [
  {
    slug: 'free-status-page-guide',
    title: 'The Complete Guide to Free Status Pages in 2026',
    excerpt: 'Everything you need to know about setting up a free status page for your SaaS product. Compare tools, features, and learn how to get started in minutes.',
    date: 'January 28, 2026',
    readTime: '8 min read',
    category: 'Guide',
  },
  {
    slug: 'status-page-for-saas',
    title: 'Why Every SaaS Needs a Status Page (And How to Set One Up)',
    excerpt: 'A status page isn\'t just nice to have — it\'s essential for building trust with your users. Here\'s why, and how to create one that actually works.',
    date: 'January 25, 2026',
    readTime: '6 min read',
    category: 'Best Practices',
  },
  {
    slug: 'uptime-monitoring-open-source-alternative',
    title: 'Best Open Source Alternatives for Uptime Monitoring in 2026',
    excerpt: 'Tired of paying hundreds for uptime monitoring? We compare the top open source and affordable alternatives to expensive enterprise tools.',
    date: 'January 22, 2026',
    readTime: '10 min read',
    category: 'Comparison',
  },
]

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-white">Blog</h1>
        <p className="mt-4 text-lg text-text-muted">
          Tips, guides, and best practices for status pages and uptime monitoring.
        </p>
      </div>

      <div className="space-y-8">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block bg-surface border border-border rounded-xl p-6 hover:border-accent/30 transition-all group"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-medium bg-accent/10 text-accent-light px-2.5 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-text-dim text-sm">{post.date}</span>
              <span className="text-text-dim text-sm">·</span>
              <span className="text-text-dim text-sm">{post.readTime}</span>
            </div>
            <h2 className="text-xl font-bold text-white group-hover:text-accent-light transition-colors">
              {post.title}
            </h2>
            <p className="mt-2 text-text-muted">{post.excerpt}</p>
            <span className="inline-block mt-4 text-accent-light text-sm font-medium">
              Read more →
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
