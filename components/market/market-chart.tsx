'use client'

import React from 'react'
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
    <div className="glass-card bg-white/5 border-white/10 backdrop-blur-md p-6 rounded-2xl">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-white">Market Overview</h3>
        <span className="text-xs text-green-400 bg-green-500/10 px-2 py-1 rounded-md border border-green-500/20">+2.4% Today</span>
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#E10600" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#E10600" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="time" 
              stroke="#444" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#666', fontSize: 12 }} 
            />
            <YAxis 
              stroke="#444" 
              tickFormatter={(value) => `$${value / 1000}k`} 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#666', fontSize: 12 }} 
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(20, 20, 20, 0.9)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '12px',
                color: '#fff',
                backdropFilter: 'blur(10px)'
              }}
              itemStyle={{ color: '#E10600', fontWeight: 'bold' }}
            />
            <Area type="monotone" dataKey="value" stroke="#E10600" strokeWidth={3} fill="url(#colorValue)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}