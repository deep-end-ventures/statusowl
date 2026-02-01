import type { Metadata } from 'next'
import StatusBadge from '@/components/StatusBadge'
import { demoServices, demoIncidents, getOverallStatus, getOverallUptime } from '@/lib/demo-data'

export const metadata: Metadata = {
  title: 'Status',
  description: 'Current system status and uptime for StatusOwl services. Real-time incident updates and historical uptime data.',
}

function timeAgo(dateStr: string): string {
  const now = Date.now()
  const date = new Date(dateStr).getTime()
  const diff = now - date
  const minutes = Math.floor(diff / 60000)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  if (days > 0) return `${days}d ago`
  if (hours > 0) return `${hours}h ago`
  if (minutes > 0) return `${minutes}m ago`
  return 'just now'
}

export default function StatusPage() {
  const overall = getOverallStatus(demoServices)
  const uptimeAvg = getOverallUptime(demoServices)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Overall Status Header */}
      <div className="bg-surface border border-border rounded-xl p-8 mb-8 text-center">
        <div className={`inline-flex items-center gap-3 mb-2 ${overall.color}`}>
          <span className={`w-3 h-3 rounded-full ${
            overall.color === 'text-success' ? 'bg-success' :
            overall.color === 'text-warning' ? 'bg-warning' : 'bg-danger'
          } animate-pulse`} />
          <span className="text-2xl font-bold">{overall.label}</span>
        </div>
        <p className="text-text-muted mt-2">
          Overall uptime: <span className="text-white font-semibold">{uptimeAvg}%</span> over the last 30 days
        </p>
      </div>

      {/* Services List */}
      <div className="bg-surface border border-border rounded-xl overflow-hidden mb-8">
        <div className="px-6 py-4 border-b border-border">
          <h2 className="text-lg font-semibold text-white">Services</h2>
        </div>
        <div className="divide-y divide-border">
          {demoServices.map((service) => (
            <div key={service.id} className="flex items-center justify-between px-6 py-4 hover:bg-surface-light/30 transition-colors">
              <div>
                <span className="text-white font-medium">{service.name}</span>
                <p className="text-text-dim text-sm mt-0.5">{service.description}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-text-dim text-sm hidden sm:inline">{service.uptime_percentage}% uptime</span>
                <StatusBadge status={service.status} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Uptime Chart Placeholder */}
      <div className="bg-surface border border-border rounded-xl p-6 mb-8">
        <h2 className="text-lg font-semibold text-white mb-4">30-Day Uptime</h2>
        <div className="flex gap-0.5 items-end h-16">
          {Array.from({ length: 30 }, (_, i) => {
            const height = 50 + Math.random() * 50
            const isToday = i === 29
            return (
              <div
                key={i}
                className={`flex-1 rounded-sm ${isToday ? 'bg-accent-light' : i === 20 ? 'bg-warning' : 'bg-success/70'}`}
                style={{ height: `${height}%` }}
                title={`Day ${i + 1}`}
              />
            )
          })}
        </div>
        <div className="flex justify-between mt-2 text-text-dim text-xs">
          <span>30 days ago</span>
          <span>Today</span>
        </div>
      </div>

      {/* Incidents */}
      <div className="bg-surface border border-border rounded-xl overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <h2 className="text-lg font-semibold text-white">Recent Incidents</h2>
        </div>
        {demoIncidents.length === 0 ? (
          <div className="px-6 py-8 text-center text-text-muted">
            No incidents reported in the last 30 days.
          </div>
        ) : (
          <div className="divide-y divide-border">
            {demoIncidents.map((incident) => (
              <div key={incident.id} className="px-6 py-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-white font-medium">{incident.title}</h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                        incident.status === 'resolved' ? 'bg-success/10 text-success' :
                        incident.status === 'monitoring' ? 'bg-warning/10 text-warning' :
                        'bg-danger/10 text-danger'
                      }`}>
                        {incident.status}
                      </span>
                    </div>
                    <p className="text-text-muted text-sm mt-1">{incident.description}</p>
                  </div>
                  <span className="text-text-dim text-xs whitespace-nowrap">{timeAgo(incident.created_at)}</span>
                </div>
                <div className="mt-2 flex items-center gap-3 text-xs text-text-dim">
                  <span>Severity: <span className={incident.severity === 'critical' ? 'text-danger' : incident.severity === 'major' ? 'text-warning' : 'text-text-muted'}>{incident.severity}</span></span>
                  {incident.resolved_at && <span>Resolved: {timeAgo(incident.resolved_at)}</span>}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <p className="text-center text-text-dim text-sm mt-8">
        This is a demo status page. <a href="/dashboard" className="text-accent-light hover:underline">Create your own →</a>
      </p>
    </div>
  )
}
