'use client'

import { Card } from '@/components/ui/card'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { day: 'Mon', value: 100000 },
  { day: 'Tue', value: 102500 },
  { day: 'Wed', value: 101800 },
  { day: 'Thu', value: 104200 },
  { day: 'Fri', value: 107800 },
  { day: 'Sat', value: 112400 },
  { day: 'Sun', value: 115600 },
]

export function PerformanceChart() {
  return (
    <Card className="glass-card p-6">
      <h3 className="text-lg font-semibold mb-4">Portfolio Performance</h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="day" stroke="#666" />
            <YAxis stroke="#666" tickFormatter={(value) => `$${value / 1000}k`} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1A1A1A',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
              }}
              formatter={(value: number) => [`$${value.toLocaleString()}`, 'Value']}
            />
            <Line type="monotone" dataKey="value" stroke="#E10600" strokeWidth={3} dot={{ fill: '#E10600' }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}