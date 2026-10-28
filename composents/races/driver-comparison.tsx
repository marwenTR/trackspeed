'use client'

import { Card } from '@/components/ui/card'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { useState } from 'react'

interface DriverComparisonProps {
  drivers: Array<{
    name: string
    team: string
    stats: {
      qualifying: number
      racePace: number
      tyreManagement: number
      overtaking: number
      consistency: number
    }
  }>
}

export function DriverComparison({ drivers }: DriverComparisonProps) {
  const [driver1, setDriver1] = useState(drivers[0])
  const [driver2, setDriver2] = useState(drivers[1])

  const chartData = ['qualifying', 'racePace', 'tyreManagement', 'overtaking', 'consistency'].map(metric => ({
    metric: metric.replace(/([A-Z])/g, ' $1').trim(),
    [driver1.name]: driver1.stats[metric as keyof typeof driver1.stats],
    [driver2.name]: driver2.stats[metric as keyof typeof driver2.stats],
  }))

  return (
    <Card className="glass-card p-6">
      <h3 className="text-lg font-semibold mb-4">Driver Comparison</h3>
      <div className="mb-6 flex gap-4">
        <select 
          className="glass rounded-lg px-3 py-2 text-sm border-white/10"
          onChange={(e) => setDriver1(drivers.find(d => d.name === e.target.value) || drivers[0])}
        >
          {drivers.map(driver => (
            <option key={driver.name} value={driver.name}>{driver.name}</option>
          ))}
        </select>
        <select 
          className="glass rounded-lg px-3 py-2 text-sm border-white/10"
          onChange={(e) => setDriver2(drivers.find(d => d.name === e.target.value) || drivers[1])}
        >
          {drivers.map(driver => (
            <option key={driver.name} value={driver.name}>{driver.name}</option>
          ))}
        </select>
      </div>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <XAxis dataKey="metric" stroke="#666" />
            <YAxis stroke="#666" domain={[0, 100]} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1A1A1A',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
              }}
            />
            <Bar dataKey={driver1.name} fill="#E10600" radius={[4, 4, 0, 0]} />
            <Bar dataKey={driver2.name} fill="#C0C0C0" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}