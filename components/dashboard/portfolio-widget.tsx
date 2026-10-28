'use client'

import React from 'react'
import { Card } from '@/components/ui/card'
import { TrendingUp } from 'lucide-react'

export function PortfolioWidget() {
  return (
    <Card className="glass-card p-6 bg-white/5 border-white/10 backdrop-blur-md">
      <h3 className="text-lg font-semibold text-white mb-4">Your Portfolio</h3>
      <div className="space-y-4">
        <div>
          <p className="text-xs text-gray-500 font-medium mb-1">Total Value</p>
          <div className="flex items-center justify-between">
            <p className="text-3xl font-bold text-white">$124,567</p>
            <div className="text-green-400 flex items-center gap-1 bg-green-500/10 px-2 py-1 rounded-md text-xs font-medium">
              <TrendingUp className="h-3 w-3" />
              <span>+12.5%</span>
            </div>
          </div>
        </div>
        
        <div className="h-px bg-white/5 my-2" />
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Invested</span>
            <span className="text-gray-300 font-mono">$100,000</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Profit/Loss</span>
            <span className="text-green-400 font-mono">+$24,567</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Today's Change</span>
            <span className="text-green-400 font-mono">+$1,234</span>
          </div>
        </div>
      </div>
    </Card>
  )
}