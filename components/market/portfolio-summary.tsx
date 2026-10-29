'use client'

import React from 'react'
import { DollarSign, TrendingUp, PieChart } from 'lucide-react'
import { useMarketStore } from '@/store/marketStore'

export function PortfolioSummary() {
  const { balance, calculateTotalValue } = useMarketStore()
  const totalValue = calculateTotalValue()
  const profit = totalValue - 1000000

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <div className="glass-card bg-white/5 border-white/10 backdrop-blur-md p-6 rounded-2xl flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-400 mb-1">Total Portfolio Value</p>
          <p className="text-2xl font-bold text-white">${totalValue.toLocaleString()}</p>
        </div>
        <div className="h-12 w-12 rounded-full bg-f1-red/10 flex items-center justify-center border border-f1-red/20">
          <DollarSign className="h-6 w-6 text-f1-red" />
        </div>
      </div>

      <div className="glass-card bg-white/5 border-white/10 backdrop-blur-md p-6 rounded-2xl flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-400 mb-1">Total Profit / Loss</p>
          <p className={`text-2xl font-bold ${profit >= 0 ? 'text-green-400' : 'text-red-400'}`}>
            {profit >= 0 ? '+' : '-'}${Math.abs(profit).toLocaleString()}
          </p>
        </div>
        <div className={`h-12 w-12 rounded-full flex items-center justify-center border ${profit >= 0 ? 'bg-green-500/10 border-green-500/20' : 'bg-red-500/10 border-red-500/20'}`}>
          <TrendingUp className={`h-6 w-6 ${profit >= 0 ? 'text-green-400' : 'text-red-400'}`} />
        </div>
      </div>

      <div className="glass-card bg-white/5 border-white/10 backdrop-blur-md p-6 rounded-2xl flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-400 mb-1">Available Cash</p>
          <p className="text-2xl font-bold text-white">${balance.toLocaleString()}</p>
        </div>
        <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
          <PieChart className="h-6 w-6 text-gray-300" />
        </div>
      </div>
    </div>
  )
}