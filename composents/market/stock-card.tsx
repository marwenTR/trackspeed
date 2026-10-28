'use client'

import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, DollarSign } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Driver {
  id: string
  name: string
  number: number
  team: string
  value: number
  change: number
}

interface StockCardProps {
  driver: Driver
  onBuy: () => void
  onSell: () => void
  userShares: number
}

export function StockCard({ driver, onBuy, onSell, userShares }: StockCardProps) {
  const isPositive = driver.change >= 0

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -4 }}
      className="glass-card p-5"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="h-14 w-14 rounded-full bg-gradient-to-br from-f1-red/20 to-f1-red/5 flex items-center justify-center">
              <span className="text-2xl font-bold">{driver.number}</span>
            </div>
            <div className={`absolute -bottom-1 -right-1 h-4 w-4 rounded-full ${isPositive ? 'bg-green-500' : 'bg-red-500'} animate-pulse`} />
          </div>
          <div>
            <h3 className="text-lg font-bold">{driver.name}</h3>
            <p className="text-sm text-white/60">{driver.team}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="flex items-center gap-1">
            <DollarSign className="h-4 w-4 text-white/40" />
            <span className="font-mono text-lg">${driver.value.toLocaleString()}</span>
          </div>
          <div className={`flex items-center justify-end gap-1 text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {isPositive ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
            <span>{Math.abs(driver.change)}%</span>
          </div>
        </div>
      </div>
      {userShares > 0 && (
        <div className="mt-3 text-xs text-white/40">Shares owned: {userShares}</div>
      )}
      <div className="mt-4 flex gap-2">
        <Button onClick={onBuy} className="flex-1 bg-f1-red hover:bg-f1-red/90 text-sm">Buy</Button>
        <Button onClick={onSell} variant="outline" className="flex-1 glass">Sell</Button>
      </div>
    </motion.div>
  )
}