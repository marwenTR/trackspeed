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
    
    <Card className="glass-card p-6 bg-white/5 border-white/10 backdrop-blur-md">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">Portfolio Performance</h3>
        <span className="text-sm text-gray-400">Last 7 days</span>
      </div>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis 
              dataKey="day" 
              stroke="#555" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#888', fontSize: 12 }}
            />
            <YAxis 
              stroke="#555" 
              tickFormatter={(value) => `$${value / 1000}k`} 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#888', fontSize: 12 }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1A1A1A',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
                color: '#fff'
              }}
              formatter={(value: number) => [`$${value.toLocaleString()}`, 'Value']}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#E10600" 
              strokeWidth={3} 
              dot={{ fill: '#E10600', r: 4 }} 
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}