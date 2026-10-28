'use client'

import { Card } from '@/components/ui/card'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts'

interface TelemetryChartProps {
  telemetry: {
    laps: Array<{
      lap: number
      driver1: number
      driver2: number
      driver3: number
    }>
  }
}

export function TelemetryChart({ telemetry }: TelemetryChartProps) {
  return (
    <Card className="glass-card p-6">
      <h3 className="text-lg font-semibold mb-4">Lap Time Comparison</h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={telemetry.laps}>
            <XAxis dataKey="lap" stroke="#666" />
            <YAxis stroke="#666" domain={['auto', 'auto']} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1A1A1A',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
              }}
              formatter={(value: number) => [`${value.toFixed(3)}s`, 'Lap Time']}
            />
            <Legend />
            <Line type="monotone" dataKey="driver1" stroke="#E10600" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="driver2" stroke="#C0C0C0" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="driver3" stroke="#FFD700" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}