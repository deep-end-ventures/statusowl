'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="border-b border-border/50 bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="14" fill="#1e40af" />
              <path d="M10 16C10 13.5 12 10 16 10C20 10 22 13.5 22 16" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <circle cx="16" cy="16" r="2.5" fill="white" />
              <path d="M16 18.5V22" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <circle cx="16" cy="16" r="7" stroke="white" strokeWidth="1.5" strokeDasharray="2 3" opacity="0.4" />
            </svg>
            <span className="text-xl font-bold text-white">StatusOwl</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/features" className="text-text-muted hover:text-white transition-colors">Features</Link>
            <Link href="/pricing" className="text-text-muted hover:text-white transition-colors">Pricing</Link>
            <Link href="/status" className="text-text-muted hover:text-white transition-colors">Demo Status</Link>
            <Link href="/blog" className="text-text-muted hover:text-white transition-colors">Blog</Link>
            <Link href="/dashboard" className="text-text-muted hover:text-white transition-colors">Dashboard</Link>
            <Link
              href="/dashboard"
              className="bg-accent hover:bg-accent-hover text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Get Started Free
            </Link>
          </div>

          <button
            className="md:hidden text-text-muted hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M6 6L18 18M6 18L18 6" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/features" className="block py-2 text-text-muted hover:text-white transition-colors">Features</Link>
            <Link href="/pricing" className="block py-2 text-text-muted hover:text-white transition-colors">Pricing</Link>
            <Link href="/status" className="block py-2 text-text-muted hover:text-white transition-colors">Demo Status</Link>
            <Link href="/blog" className="block py-2 text-text-muted hover:text-white transition-colors">Blog</Link>
            <Link href="/dashboard" className="block py-2 text-text-muted hover:text-white transition-colors">Dashboard</Link>
            <Link
              href="/dashboard"
              className="block bg-accent hover:bg-accent-hover text-white px-4 py-2 rounded-lg font-medium transition-colors text-center mt-2"
            >
              Get Started Free
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
