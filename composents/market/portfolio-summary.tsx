'use client'

import { Card } from '@/components/ui/card'
import { TrendingUp, DollarSign, PieChart } from 'lucide-react'

export function PortfolioSummary() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <Card className="glass-card p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-white/60">Portfolio Value</p>
            <p className="text-2xl font-bold">$124,567</p>
          </div>
          <DollarSign className="h-8 w-8 text-f1-red" />
        </div>
      </Card>
      <Card className="glass-card p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-white/60">Today's Change</p>
            <p className="text-2xl font-bold text-green-500">+$2,345</p>
          </div>
          <TrendingUp className="h-8 w-8 text-green-500" />
        </div>
      </Card>
      <Card className="glass-card p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-white/60">Available Balance</p>
            <p className="text-2xl font-bold">$75,433</p>
          </div>
          <PieChart className="h-8 w-8 text-f1-red" />
        </div>
      </Card>
    </div>
  )
}