'use client'

import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

// 1. PRICE HISTORY CHART WIDGET
export function PriceHistoryChart({ driver }: { driver: any }) {
  // Generate fake historical data based on their current price for the demo
  const basePrice = driver.value || 350000
  const data = [
    { race: 'Bahrain', price: basePrice * 0.85 },
    { race: 'Saudi', price: basePrice * 0.88 },
    { race: 'Australia', price: basePrice * 0.92 },
    { race: 'Japan', price: basePrice * 0.90 },
    { race: 'China', price: basePrice * 0.95 },
    { race: 'Miami', price: basePrice * 0.98 },
    { race: 'Imola', price: basePrice },
  ]

  return (
    <div className="glass-card bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-white uppercase tracking-tight">Market Price History</h3>
        <span className={`text-xs font-mono px-2 py-1 rounded-md border ${driver.change >= 0 ? 'text-green-400 bg-green-500/10 border-green-500/20' : 'text-red-400 bg-red-500/10 border-red-500/20'}`}>
          {driver.change >= 0 ? '+' : ''}{driver.change}% (7d)
        </span>
      </div>
      <div className="flex-1 min-h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="race" stroke="#444" axisLine={false} tickLine={false} tick={{ fill: '#666', fontSize: 10 }} />
            <YAxis stroke="#444" axisLine={false} tickLine={false} tick={{ fill: '#666', fontSize: 10 }} domain={['auto', 'auto']} tickFormatter={(val) => `$${(val / 1000).toFixed(0)}k`} />
            <Tooltip
              contentStyle={{ backgroundColor: 'rgba(20,20,20,0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff' }}
              itemStyle={{ color: '#E10600', fontWeight: 'bold' }}
              formatter={(value: number) => [`$${value.toLocaleString(undefined, { maximumFractionDigits: 0 })}`, 'Price']}
            />
            <Line type="monotone" dataKey="price" stroke="#E10600" strokeWidth={3} dot={{ fill: '#E10600', r: 4 }} activeDot={{ r: 6 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

// 2. RECENT FORM WIDGET
export function RecentForm({ driver }: { driver: any }) {
  const form = driver.recentForm || ['P1', 'P2', 'P3', 'DNF', 'P4']

  const getPillColor = (result: string) => {
    if (result === 'DNF') return 'bg-red-500/20 text-red-400 border-red-500/30'
    const pos = parseInt(result.replace('P', ''))
    if (pos === 1) return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
    if (pos <= 3) return 'bg-green-500/20 text-green-400 border-green-500/30'
    if (pos <= 10) return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
    return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
  }

  return (
    <div className="glass-card bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl h-full flex flex-col justify-center">
      <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-2">Recent Form</h3>
      <p className="text-xs text-gray-500 mb-6">Last 5 Grand Prix Results</p>
      <div className="flex gap-2">
        {form.map((result: string, idx: number) => (
          <div key={idx} className={`flex-1 flex items-center justify-center py-4 rounded-xl border font-mono font-bold text-sm shadow-inner ${getPillColor(result)}`}>
            {result}
          </div>
        ))}
      </div>
    </div>
  )
}