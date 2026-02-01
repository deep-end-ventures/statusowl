import { NextRequest, NextResponse } from 'next/server'

// In-memory store for demo purposes (would use Supabase in production)
const uptimeChecks: Array<{
  id: string
  service_id: string
  status: 'up' | 'down'
  response_time_ms: number | null
  checked_at: string
}> = []

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { service_id, status, response_time_ms } = body

    if (!service_id) {
      return NextResponse.json(
        { error: 'service_id is required' },
        { status: 400 }
      )
    }

    if (status && !['up', 'down'].includes(status)) {
      return NextResponse.json(
        { error: 'status must be "up" or "down"' },
        { status: 400 }
      )
    }

    const check = {
      id: Date.now().toString(),
      service_id,
      status: status || 'up',
      response_time_ms: response_time_ms || null,
      checked_at: new Date().toISOString(),
    }

    uptimeChecks.push(check)

    // Keep only last 1000 checks in memory
    if (uptimeChecks.length > 1000) {
      uptimeChecks.splice(0, uptimeChecks.length - 1000)
    }

    return NextResponse.json({
      success: true,
      check,
    })
  } catch {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    )
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const serviceId = searchParams.get('service_id')

  if (serviceId) {
    const filtered = uptimeChecks.filter(c => c.service_id === serviceId)
    return NextResponse.json({ checks: filtered.slice(-100) })
  }

  return NextResponse.json({
    message: 'StatusOwl Uptime Check API',
    version: '1.0.0',
    endpoints: {
      'POST /api/ping': {
        description: 'Record an uptime check',
        body: {
          service_id: 'string (required)',
          status: '"up" | "down" (default: "up")',
          response_time_ms: 'number (optional)',
        },
      },
      'GET /api/ping?service_id=xxx': {
        description: 'Get recent uptime checks for a service',
      },
    },
    total_checks: uptimeChecks.length,
  })
}
