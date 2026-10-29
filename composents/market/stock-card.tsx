'use client'

import React from 'react'
import Link from 'next/link' 
import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function StockCard({ driver, onBuy, onSell, userShares }: any) {
  const isPositive = driver.change >= 0

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      className="glass-card bg-white/5 border border-white/10 backdrop-blur-md p-5 rounded-2xl group transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="h-14 w-14 rounded-full bg-black/50 border border-white/10 flex items-center justify-center group-hover:border-f1-red/50 transition-colors">
              <span className="text-xl font-bold text-white font-mono">{driver.number}</span>
            </div>
            <div className={`absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-[#0A0A0A] ${isPositive ? 'bg-green-500' : 'bg-red-500'}`} />
          </div>
          <div>
            {/* MAKE THE NAME A CLICKABLE LINK */}
            <Link href={`/drivers/${driver.id}`}>
              <h3 className="text-base font-bold text-white hover:text-f1-red transition-colors cursor-pointer">
                {driver.name}
              </h3>
            </Link>
            <p className="text-xs text-gray-400">{driver.team}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="font-mono text-white font-bold text-sm">${driver.value.toLocaleString()}</div>
          <div className={`flex items-center justify-end gap-1 text-xs font-medium ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
            {isPositive ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
            <span>{Math.abs(driver.change)}%</span>
          </div>
        </div>
      </div>

      {userShares > 0 && (
        <div className="mb-4 text-xs font-medium text-f1-red bg-f1-red/10 px-3 py-1.5 rounded-lg border border-f1-red/20 inline-block">
          You own {userShares} shares
        </div>
      )}

      <div className="flex gap-2 mt-2">
        <Button 
          onClick={onBuy} 
          className="flex-1 bg-gradient-to-r from-f1-red to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold rounded-xl"
        >
          Buy
        </Button>
        <Button 
          onClick={onSell} 
          variant="outline" 
          className="flex-1 bg-white/5 border-white/10 hover:bg-white/10 text-white rounded-xl"
        >
          Sell
        </Button>
      </div>
    </motion.div>
  )
}