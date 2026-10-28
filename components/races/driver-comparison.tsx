'use client'

import React, { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

export function DriverComparison({ drivers }: any) {
  const [driver1, setDriver1] = useState(drivers[0])
  const [driver2, setDriver2] = useState(drivers[1])

  const chartData = ['qualifying', 'racePace', 'tyreManagement', 'overtaking', 'consistency'].map(metric => ({
    metric: metric.replace(/([A-Z])/g, ' $1').trim(),
    [driver1.name]: driver1.stats[metric as keyof typeof driver1.stats],
    [driver2.name]: driver2.stats[metric as keyof typeof driver2.stats],
  }))

  return (
    <div className="glass-card bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl">
      <h3 className="text-lg font-semibold text-white mb-4">Driver Comparison</h3>
      
      <div className="mb-6 flex flex-wrap gap-4">
        <select 
          className="bg-black/50 border border-white/10 text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-f1-red"
          onChange={(e) => setDriver1(drivers.find((d: any) => d.name === e.target.value) || drivers[0])}
          value={driver1.name}
        >
          {drivers.map((driver: any) => (
            <option key={driver.name} value={driver.name} className="bg-[#111]">{driver.name}</option>
          ))}
        </select>
        <select 
          className="bg-black/50 border border-white/10 text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-f1-red"
          onChange={(e) => setDriver2(drivers.find((d: any) => d.name === e.target.value) || drivers[1])}
          value={driver2.name}
        >
          {drivers.map((driver: any) => (
            <option key={driver.name} value={driver.name} className="bg-[#111]">{driver.name}</option>
          ))}
        </select>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <XAxis dataKey="metric" stroke="#444" axisLine={false} tickLine={false} tick={{ fill: '#666', fontSize: 12 }} />
            <YAxis stroke="#444" axisLine={false} tickLine={false} tick={{ fill: '#666', fontSize: 12 }} domain={[0, 100]} />
            <Tooltip
              cursor={{ fill: 'rgba(255,255,255,0.05)' }}
              contentStyle={{ backgroundColor: 'rgba(20,20,20,0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff' }}
            />
            <Bar dataKey={driver1.name} fill="#E10600" radius={[4, 4, 0, 0]} />
            <Bar dataKey={driver2.name} fill="#888888" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}