import { ServiceStatus } from '@/lib/supabase'

const statusConfig: Record<ServiceStatus, { label: string; color: string; bg: string; dot: string }> = {
  operational: { label: 'Operational', color: 'text-success', bg: 'bg-success/10', dot: 'bg-success' },
  degraded: { label: 'Degraded', color: 'text-warning', bg: 'bg-warning/10', dot: 'bg-warning' },
  major_outage: { label: 'Major Outage', color: 'text-danger', bg: 'bg-danger/10', dot: 'bg-danger' },
}

export default function StatusBadge({ status }: { status: ServiceStatus }) {
  const config = statusConfig[status]
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${config.bg} ${config.color}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${config.dot} animate-pulse`} />
      {config.label}
    </span>
  )
}
