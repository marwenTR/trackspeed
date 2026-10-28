'use client'

import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts'

export function TelemetryChart({ telemetry }: any) {
  return (
    <div className="glass-card bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl">
      <h3 className="text-lg font-semibold text-white mb-4">Lap Time Comparison</h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={telemetry.laps}>
            <XAxis dataKey="lap" stroke="#444" axisLine={false} tickLine={false} tick={{ fill: '#666', fontSize: 12 }} />
            <YAxis stroke="#444" axisLine={false} tickLine={false} tick={{ fill: '#666', fontSize: 12 }} domain={['auto', 'auto']} />
            <Tooltip
              contentStyle={{ backgroundColor: 'rgba(20,20,20,0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff' }}
              formatter={(value: number) => [`${value.toFixed(3)}s`, 'Lap Time']}
            />
            <Legend wrapperStyle={{ fontSize: 12, paddingTop: 16, color: '#888' }} />
            <Line type="monotone" dataKey="driver1" stroke="#E10600" strokeWidth={3} dot={false} />
            <Line type="monotone" dataKey="driver2" stroke="#A8A8A8" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="driver3" stroke="#FFD700" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}