import { Service, Incident } from './supabase'

export const demoServices: Service[] = [
  {
    id: '1',
    name: 'API',
    description: 'Core API endpoints',
    status: 'operational',
    uptime_percentage: 99.98,
    created_at: '2026-01-01T00:00:00Z',
    updated_at: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'Web Application',
    description: 'Main web dashboard and UI',
    status: 'operational',
    uptime_percentage: 99.95,
    created_at: '2026-01-01T00:00:00Z',
    updated_at: new Date().toISOString(),
  },
  {
    id: '3',
    name: 'Database',
    description: 'Primary database cluster',
    status: 'operational',
    uptime_percentage: 99.99,
    created_at: '2026-01-01T00:00:00Z',
    updated_at: new Date().toISOString(),
  },
  {
    id: '4',
    name: 'CDN',
    description: 'Content delivery network',
    status: 'degraded',
    uptime_percentage: 99.87,
    created_at: '2026-01-01T00:00:00Z',
    updated_at: new Date().toISOString(),
  },
  {
    id: '5',
    name: 'Email Service',
    description: 'Transactional email delivery',
    status: 'operational',
    uptime_percentage: 99.92,
    created_at: '2026-01-01T00:00:00Z',
    updated_at: new Date().toISOString(),
  },
]

export const demoIncidents: Incident[] = [
  {
    id: '1',
    service_id: '4',
    title: 'Elevated CDN latency in EU regions',
    description: 'We are investigating reports of increased latency for assets served through our EU CDN nodes. Some users may experience slower page loads.',
    status: 'monitoring',
    severity: 'minor',
    created_at: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    resolved_at: null,
  },
  {
    id: '2',
    service_id: '1',
    title: 'API rate limiting issue',
    description: 'A brief issue with rate limiting caused some API requests to be incorrectly throttled. The issue has been identified and resolved.',
    status: 'resolved',
    severity: 'minor',
    created_at: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString(),
    resolved_at: new Date(Date.now() - 47 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '3',
    service_id: '2',
    title: 'Dashboard login delays',
    description: 'Users experienced intermittent delays when logging into the dashboard. Root cause was identified as a misconfigured cache layer.',
    status: 'resolved',
    severity: 'major',
    created_at: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    resolved_at: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000 + 3600000).toISOString(),
  },
]

export function getOverallStatus(services: Service[]): { label: string; color: string } {
  const hasOutage = services.some(s => s.status === 'major_outage')
  const hasDegraded = services.some(s => s.status === 'degraded')
  
  if (hasOutage) return { label: 'Major Outage', color: 'text-danger' }
  if (hasDegraded) return { label: 'Partial Degradation', color: 'text-warning' }
  return { label: 'All Systems Operational', color: 'text-success' }
}

export function getOverallUptime(services: Service[]): number {
  if (services.length === 0) return 100
  return Number((services.reduce((acc, s) => acc + s.uptime_percentage, 0) / services.length).toFixed(2))
}
