import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-border/50 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="14" fill="#1e40af" />
                <path d="M10 16C10 13.5 12 10 16 10C20 10 22 13.5 22 16" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <circle cx="16" cy="16" r="2.5" fill="white" />
                <path d="M16 18.5V22" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span className="text-lg font-bold text-white">StatusOwl</span>
            </div>
            <p className="text-text-muted text-sm">
              Beautiful status pages and uptime monitoring for modern SaaS teams.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/features" className="text-text-muted hover:text-white transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="text-text-muted hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/status" className="text-text-muted hover:text-white transition-colors">Demo Status Page</Link></li>
              <li><Link href="/dashboard" className="text-text-muted hover:text-white transition-colors">Dashboard</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog" className="text-text-muted hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/blog/free-status-page-guide" className="text-text-muted hover:text-white transition-colors">Free Status Page Guide</Link></li>
              <li><Link href="/blog/status-page-for-saas" className="text-text-muted hover:text-white transition-colors">Status Pages for SaaS</Link></li>
              <li><Link href="/blog/uptime-monitoring-open-source-alternative" className="text-text-muted hover:text-white transition-colors">Open Source Alternatives</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://deependventures.com" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-white transition-colors">Deep End Ventures</a></li>
              <li><a href="https://github.com/deep-end-ventures/statusowl" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-white transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-dim text-sm">
            © {new Date().getFullYear()} StatusOwl. All rights reserved.
          </p>
          <a
            href="https://deependventures.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-text-dim hover:text-text-muted transition-colors text-sm"
          >
            Built by
            <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="6" fill="#1e40af"/>
              <path d="M8 10h4l4 6-4 6H8l4-6-4-6z" fill="white"/>
              <path d="M16 10h4l4 6-4 6h-4l4-6-4-6z" fill="white" opacity="0.6"/>
            </svg>
            <span className="font-medium">Deep End Ventures</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
