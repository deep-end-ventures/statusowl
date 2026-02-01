'use client'

import { useState } from 'react'
import StatusBadge from '@/components/StatusBadge'
import { ServiceStatus } from '@/lib/supabase'
import { demoServices as initialServices, demoIncidents, getOverallStatus, getOverallUptime } from '@/lib/demo-data'
import type { Service } from '@/lib/supabase'

export default function DashboardPage() {
  const [services, setServices] = useState<Service[]>(initialServices)
  const [showAddModal, setShowAddModal] = useState(false)
  const [editingService, setEditingService] = useState<Service | null>(null)
  const [newName, setNewName] = useState('')
  const [newDescription, setNewDescription] = useState('')
  const [newStatus, setNewStatus] = useState<ServiceStatus>('operational')

  const overall = getOverallStatus(services)
  const uptimeAvg = getOverallUptime(services)

  const handleAddService = () => {
    if (!newName.trim()) return
    const service: Service = {
      id: Date.now().toString(),
      name: newName,
      description: newDescription,
      status: newStatus,
      uptime_percentage: 100,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }
    setServices([...services, service])
    setNewName('')
    setNewDescription('')
    setNewStatus('operational')
    setShowAddModal(false)
  }

  const handleUpdateStatus = (id: string, status: ServiceStatus) => {
    setServices(services.map(s =>
      s.id === id ? { ...s, status, updated_at: new Date().toISOString() } : s
    ))
  }

  const handleDeleteService = (id: string) => {
    setServices(services.filter(s => s.id !== id))
  }

  const handleEditService = () => {
    if (!editingService || !newName.trim()) return
    setServices(services.map(s =>
      s.id === editingService.id
        ? { ...s, name: newName, description: newDescription, status: newStatus, updated_at: new Date().toISOString() }
        : s
    ))
    setEditingService(null)
    setNewName('')
    setNewDescription('')
    setNewStatus('operational')
  }

  const openEdit = (service: Service) => {
    setEditingService(service)
    setNewName(service.name)
    setNewDescription(service.description)
    setNewStatus(service.status)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          <p className="text-text-muted mt-1">Manage your services and monitor uptime</p>
        </div>
        <button
          onClick={() => { setShowAddModal(true); setEditingService(null); setNewName(''); setNewDescription(''); setNewStatus('operational') }}
          className="bg-accent hover:bg-accent-hover text-white px-4 py-2 rounded-lg font-medium transition-colors"
        >
          + Add Service
        </button>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
        <div className="bg-surface border border-border rounded-xl p-5">
          <p className="text-text-dim text-sm">Overall Status</p>
          <p className={`text-lg font-bold mt-1 ${overall.color}`}>{overall.label}</p>
        </div>
        <div className="bg-surface border border-border rounded-xl p-5">
          <p className="text-text-dim text-sm">Avg Uptime</p>
          <p className="text-lg font-bold mt-1 text-white">{uptimeAvg}%</p>
        </div>
        <div className="bg-surface border border-border rounded-xl p-5">
          <p className="text-text-dim text-sm">Services</p>
          <p className="text-lg font-bold mt-1 text-white">{services.length}</p>
        </div>
        <div className="bg-surface border border-border rounded-xl p-5">
          <p className="text-text-dim text-sm">Active Incidents</p>
          <p className="text-lg font-bold mt-1 text-warning">{demoIncidents.filter(i => i.status !== 'resolved').length}</p>
        </div>
      </div>

      {/* Services Table */}
      <div className="bg-surface border border-border rounded-xl overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <h2 className="text-lg font-semibold text-white">Services</h2>
        </div>
        {services.length === 0 ? (
          <div className="px-6 py-12 text-center text-text-muted">
            No services yet. Click &quot;Add Service&quot; to get started.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left px-6 py-3 text-text-dim text-xs font-medium uppercase tracking-wider">Name</th>
                  <th className="text-left px-6 py-3 text-text-dim text-xs font-medium uppercase tracking-wider">Status</th>
                  <th className="text-left px-6 py-3 text-text-dim text-xs font-medium uppercase tracking-wider">Uptime</th>
                  <th className="text-left px-6 py-3 text-text-dim text-xs font-medium uppercase tracking-wider">Quick Update</th>
                  <th className="text-right px-6 py-3 text-text-dim text-xs font-medium uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {services.map((service) => (
                  <tr key={service.id} className="hover:bg-surface-light/30 transition-colors">
                    <td className="px-6 py-4">
                      <span className="text-white font-medium">{service.name}</span>
                      <p className="text-text-dim text-sm">{service.description}</p>
                    </td>
                    <td className="px-6 py-4">
                      <StatusBadge status={service.status} />
                    </td>
                    <td className="px-6 py-4 text-text-muted">{service.uptime_percentage}%</td>
                    <td className="px-6 py-4">
                      <div className="flex gap-1">
                        {(['operational', 'degraded', 'major_outage'] as ServiceStatus[]).map((status) => (
                          <button
                            key={status}
                            onClick={() => handleUpdateStatus(service.id, status)}
                            className={`w-3 h-3 rounded-full transition-all ${
                              status === 'operational' ? 'bg-success' :
                              status === 'degraded' ? 'bg-warning' : 'bg-danger'
                            } ${service.status === status ? 'ring-2 ring-white ring-offset-2 ring-offset-surface' : 'opacity-40 hover:opacity-100'}`}
                            title={status.replace('_', ' ')}
                          />
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => openEdit(service)}
                        className="text-text-muted hover:text-white text-sm mr-3 transition-colors"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteService(service.id)}
                        className="text-text-muted hover:text-danger text-sm transition-colors"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Add/Edit Modal */}
      {(showAddModal || editingService) && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-surface border border-border rounded-xl p-6 w-full max-w-md">
            <h3 className="text-lg font-bold text-white mb-4">
              {editingService ? 'Edit Service' : 'Add New Service'}
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-text-muted mb-1">Service Name</label>
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="e.g., API, Web App, Database"
                  className="w-full bg-background border border-border rounded-lg px-3 py-2 text-white placeholder-text-dim focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <div>
                <label className="block text-sm text-text-muted mb-1">Description</label>
                <input
                  type="text"
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  placeholder="Brief description of the service"
                  className="w-full bg-background border border-border rounded-lg px-3 py-2 text-white placeholder-text-dim focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <div>
                <label className="block text-sm text-text-muted mb-1">Status</label>
                <select
                  value={newStatus}
                  onChange={(e) => setNewStatus(e.target.value as ServiceStatus)}
                  className="w-full bg-background border border-border rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="operational">Operational</option>
                  <option value="degraded">Degraded</option>
                  <option value="major_outage">Major Outage</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => { setShowAddModal(false); setEditingService(null) }}
                className="px-4 py-2 text-text-muted hover:text-white transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={editingService ? handleEditService : handleAddService}
                className="bg-accent hover:bg-accent-hover text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                {editingService ? 'Save Changes' : 'Add Service'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
