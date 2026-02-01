import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://tcxsaocewaamluqhswsh.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type ServiceStatus = 'operational' | 'degraded' | 'major_outage'

export interface Service {
  id: string
  name: string
  description: string
  status: ServiceStatus
  uptime_percentage: number
  created_at: string
  updated_at: string
}

export interface Incident {
  id: string
  service_id: string
  title: string
  description: string
  status: 'investigating' | 'identified' | 'monitoring' | 'resolved'
  severity: 'minor' | 'major' | 'critical'
  created_at: string
  resolved_at: string | null
}

export interface UptimeCheck {
  id: string
  service_id: string
  status: 'up' | 'down'
  response_time_ms: number | null
  checked_at: string
}
