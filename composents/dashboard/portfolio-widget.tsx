'use client'

import { Card } from '@/components/ui/card'
import { TrendingUp, DollarSign } from 'lucide-react'

export function PortfolioWidget() {
  return (
    <Card className="glass-card p-6">
      <h3 className="text-lg font-semibold mb-4">Your Portfolio</h3>
      <div className="space-y-4">
        <div className="flex justify-between items-end">
          <div>
            <p className="text-sm text-white/60">Total Value</p>
            <p className="text-2xl font-bold">$124,567</p>
          </div>
          <div className="text-green-500 flex items-center gap-1">
            <TrendingUp className="h-4 w-4" />
            <span>+12.5%</span>
          </div>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-white/60">Invested</span>
          <span>$100,000</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-white/60">Profit/Loss</span>
          <span className="text-green-500">+$24,567</span>
        </div>
        <div className="h-px bg-white/10" />
        <div className="flex justify-between text-sm">
          <span className="text-white/60">Today's Change</span>
          <span className="text-green-500">+$1,234</span>
        </div>
      </div>
    </Card>
  )
}