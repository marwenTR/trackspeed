'use client'

import React from 'react'
import Link from 'next/link'
import { TrendingUp, TrendingDown } from 'lucide-react'
import { drivers } from '@/data/drivers'

export function MarketTrending() {
  const sortedByChange = [...drivers].sort((a, b) => b.change - a.change)
  
  const topGainers = sortedByChange.slice(0, 3)
  const topLosers = sortedByChange.slice(-3).reverse()

  return (
    <div className="glass-card bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl flex flex-col gap-6">
      
      <div>
        <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-green-400" /> Top Gainers
        </h3>
        <div className="space-y-2">
          {topGainers.map((driver, idx) => (
            <Link key={driver.id} href={`/drivers/${driver.id}`}>
              <div className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <span className="text-xs text-gray-500 font-mono w-4">{idx + 1}</span>
                  <span className="text-sm font-medium text-gray-200">{driver.name.split(' ').slice(1).join(' ')}</span>
                </div>
                <span className="text-xs font-bold text-green-400 bg-green-500/10 px-2 py-0.5 rounded">
                  +{driver.change}%
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="h-px bg-white/5 w-full" />

      <div>
        <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
          <TrendingDown className="h-4 w-4 text-red-400" /> Top Losers
        </h3>
        <div className="space-y-2">
          {topLosers.map((driver, idx) => (
            <Link key={driver.id} href={`/drivers/${driver.id}`}>
              <div className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <span className="text-xs text-gray-500 font-mono w-4">{idx + 1}</span>
                  <span className="text-sm font-medium text-gray-200">{driver.name.split(' ').slice(1).join(' ')}</span>
                </div>
                <span className="text-xs font-bold text-red-400 bg-red-500/10 px-2 py-0.5 rounded">
                  {driver.change}%
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  )
}