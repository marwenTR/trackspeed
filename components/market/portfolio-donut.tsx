'use client'

import React, { useEffect, useState } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { useMarketStore } from '@/store/marketStore'

export function PortfolioDonut() {
  const [isMounted, setIsMounted] = useState(false)
  const { balance, calculateTotalValue } = useMarketStore()
  
  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return <div className="h-[200px] flex items-center justify-center text-gray-500 text-sm">Loading...</div>

  const totalValue = calculateTotalValue()
  const investedValue = totalValue - balance

  const data = [
    { name: 'Cash', value: balance, color: '#374151' }, // Dark Gray
    { name: 'Invested', value: investedValue, color: '#E10600' }, // F1 Red
  ]

  // If the user hasn't bought anything, just show a full gray circle
  if (investedValue <= 0) {
    data[1].value = 1 // Dummy value
    data[1].color = '#374151'
  }

  return (
    <div className="glass-card bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl flex flex-col items-center">
      <h3 className="text-lg font-semibold text-white mb-2 w-full text-left">Portfolio Allocation</h3>
      
      <div className="h-[180px] w-full relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{ backgroundColor: '#1A1A1A', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff' }}
              itemStyle={{ color: '#fff' }}
              formatter={(value: number) => `$${value.toLocaleString()}`}
            />
          </PieChart>
        </ResponsiveContainer>
        
        {/* Center Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-[10px] text-gray-400 uppercase tracking-wider">Total</span>
          <span className="text-lg font-bold text-white">${totalValue.toLocaleString()}</span>
        </div>
      </div>

      <div className="flex gap-4 mt-2">
        <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#374151]"/> <span className="text-xs text-gray-400">Cash</span></div>
        <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#E10600]"/> <span className="text-xs text-gray-400">Invested</span></div>
      </div>
    </div>
  )
}