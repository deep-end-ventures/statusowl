'use client'

import { useState } from 'react'

interface EmailCaptureProps {
  variant?: 'card' | 'inline'
  title?: string
  description?: string
  source?: string
}

export default function EmailCapture({
  variant = 'card',
  title = 'Get Status Page Tips & Updates',
  description = 'Best practices for uptime monitoring, incident communication, and building user trust. No spam, ever.',
  source = 'homepage',
}: EmailCaptureProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes('@')) return

    setStatus('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source }),
      })
      if (!res.ok) throw new Error('Failed to subscribe')
      setStatus('success')
      setEmail('')
    } catch (err: any) {
      setStatus('error')
      setErrorMsg(err.message || 'Something went wrong')
    }
  }

  if (variant === 'inline') {
    return (
      <div className="my-8 p-6 rounded-xl bg-surface border border-border">
        <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
        <p className="text-text-muted text-sm mb-4">{description}</p>
        {status === 'success' ? (
          <p className="text-success text-sm font-medium">✓ You&apos;re subscribed! Check your inbox.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="flex-1 px-4 py-2.5 bg-background border border-border rounded-lg text-text text-sm placeholder:text-text-dim focus:outline-none focus:border-accent-light"
              required
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-5 py-2.5 bg-accent hover:bg-accent-hover text-white rounded-lg text-sm font-medium transition-colors disabled:opacity-50"
            >
              {status === 'loading' ? '...' : 'Subscribe'}
            </button>
          </form>
        )}
        {status === 'error' && (
          <p className="text-danger text-xs mt-2">{errorMsg}</p>
        )}
      </div>
    )
  }

  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-surface border border-border rounded-xl p-8 sm:p-10 text-center">
        <div className="text-3xl mb-4">🦉</div>
        <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
        <p className="text-text-muted mb-6 max-w-lg mx-auto">{description}</p>
        {status === 'success' ? (
          <div className="bg-success/10 border border-success/20 rounded-lg p-4">
            <p className="text-success font-medium">✓ Welcome aboard! Check your inbox for a welcome email.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="flex-1 px-4 py-3 bg-background border border-border rounded-lg text-text placeholder:text-text-dim focus:outline-none focus:border-accent-light"
              required
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-6 py-3 bg-accent hover:bg-accent-hover text-white rounded-lg font-semibold transition-colors disabled:opacity-50 whitespace-nowrap"
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe Free'}
            </button>
          </form>
        )}
        {status === 'error' && (
          <p className="text-danger text-xs mt-3">{errorMsg}</p>
        )}
        <p className="text-text-dim text-xs mt-4">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  )
}
