'use client'

import { Card } from '@/components/ui/card'
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { time: '9:30', value: 98400 },
  { time: '10:30', value: 99200 },
  { time: '11:30', value: 98800 },
  { time: '12:30', value: 100200 },
  { time: '13:30', value: 101500 },
  { time: '14:30', value: 102800 },
  { time: '15:30', value: 103200 },
]

export function MarketChart() {
  return (
    <Card className="glass-card p-6">
      <h3 className="text-lg font-semibold mb-4">Market Overview</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#E10600" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#E10600" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="time" stroke="#666" />
            <YAxis stroke="#666" tickFormatter={(value) => `$${value / 1000}k`} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1A1A1A',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
              }}
              formatter={(value: number) => [`$${value.toLocaleString()}`, 'Market Value']}
            />
            <Area type="monotone" dataKey="value" stroke="#E10600" fill="url(#colorValue)" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}