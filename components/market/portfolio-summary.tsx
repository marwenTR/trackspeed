'use client'

import React from 'react'
import { DollarSign, TrendingUp, PieChart } from 'lucide-react'

export function PortfolioSummary() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {/* Card 1 */}
      <div className="glass-card bg-white/5 border-white/10 backdrop-blur-md p-6 rounded-2xl flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-400 mb-1">Portfolio Value</p>
          <p className="text-2xl font-bold text-white">$124,567</p>
        </div>
        <div className="h-12 w-12 rounded-full bg-f1-red/10 flex items-center justify-center border border-f1-red/20">
          <DollarSign className="h-6 w-6 text-f1-red" />
        </div>
      </div>

      {/* Card 2 */}
      <div className="glass-card bg-white/5 border-white/10 backdrop-blur-md p-6 rounded-2xl flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-400 mb-1">Today's Change</p>
          <p className="text-2xl font-bold text-green-400">+$2,345</p>
        </div>
        <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20">
          <TrendingUp className="h-6 w-6 text-green-400" />
        </div>
      </div>

      {/* Card 3 */}
      <div className="glass-card bg-white/5 border-white/10 backdrop-blur-md p-6 rounded-2xl flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-400 mb-1">Available Balance</p>
          <p className="text-2xl font-bold text-white">$75,433</p>
        </div>
        <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
          <PieChart className="h-6 w-6 text-gray-300" />
        </div>
      </div>
    </div>
  )
}