'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Search, Wallet } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { StockCard } from '@/components/market/stock-card'
import { PortfolioSummary } from '@/components/market/portfolio-summary'
import { PortfolioDonut } from '@/components/market/portfolio-donut'
import { useMarketStore } from '@/store/marketStore'
import { drivers } from '@/data/drivers'
import { Navigation } from '@/components/layout/navigation'

export default function MarketPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [isMounted, setIsMounted] = useState(false)
  
  const { portfolio } = useMarketStore()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const filteredDrivers = drivers.filter(driver =>
    driver.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    driver.team.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const ownedDrivers = Object.keys(portfolio || {})
    .filter(id => portfolio[id] > 0)
    .map(id => {
      const driver = drivers.find(d => d.id === id)
      if (driver) return { ...driver, shares: portfolio[id] }
      return null
    })
    .filter((driver) => driver !== null) as any[]

  return (
    <div className="relative min-h-screen bg-alive overflow-hidden">
      <Navigation />
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-f1-red/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-32 pb-20">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl font-black text-white tracking-tight uppercase italic">
              Driver Stock <span className="text-f1-red">Market</span>
            </h1>
            <p className="mt-2 text-gray-400 text-sm">Trade virtual stocks of your favorite F1 drivers.</p>
          </motion.div>
          
          <div className="w-full md:w-72 relative">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <Input 
              placeholder="Search drivers..." 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)} 
              className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-10 rounded-xl focus:border-f1-red focus:ring-1 focus:ring-f1-red w-full" 
            />
          </div>
        </div>

        {/* Portfolio Summary Cards */}
        {isMounted && <PortfolioSummary />}

        {/* MAIN LAYOUT */}
        <div className="mt-8 grid gap-8 lg:grid-cols-4">
          
          {/* LEFT SIDE - 4 Columns Grid for Cards */}
          <div className="lg:col-span-3">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {filteredDrivers.map((driver) => (
                <StockCard 
                  key={driver.id} 
                  driver={driver} 
                  onBuy={() => useMarketStore.getState().buyStock(driver.id)} 
                  onSell={() => useMarketStore.getState().sellStock(driver.id)} 
                  userShares={portfolio?.[driver.id] || 0} 
                />
              ))}
            </div>
          </div>

          {/* RIGHT SIDE - Sidebar */}
          <div className="space-y-6">
            
            {/* 1. The Donut Chart */}
            {isMounted && <PortfolioDonut />}

            {/* 2. Your Holdings */}
            <div className="glass-card bg-[#111620] border border-white/5 p-6 rounded-2xl">
              <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2 uppercase tracking-wide">
                <Wallet className="h-4 w-4 text-f1-red" /> Your Holdings
              </h3>
              {ownedDrivers.length === 0 ? (
                <div className="text-center py-6 border border-dashed border-white/10 rounded-xl bg-black/20">
                  <p className="text-xs text-gray-500">No active positions.</p>
                </div>
              ) : (
                <div className="space-y-2">
                  {ownedDrivers.map((driver) => (
                    <div key={driver.id} className="flex justify-between items-center bg-black/40 p-3 rounded-xl border border-white/5 hover:border-white/10 transition-colors cursor-pointer">
                      <div>
                        <p className="text-xs font-bold text-white">{driver.name}</p>
                        <p className="text-[10px] text-gray-500 font-mono mt-0.5">{driver.shares} x ${driver.value.toLocaleString()}</p>
                      </div>
                      <span className="text-xs font-mono text-green-400 font-bold bg-green-500/10 px-2 py-1 rounded-md">
                        ${(driver.value * driver.shares).toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 3. Market Stats */}
            <div className="glass-card bg-[#111620] border border-white/5 p-6 rounded-2xl">
              <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wide">Global Market</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-gray-500 text-xs">Volume</span>
                  <span className="font-mono text-white text-xs font-bold">$1.2M</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-gray-500 text-xs">Traders</span>
                  <span className="font-mono text-white text-xs font-bold">8,942</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-xs">Market Cap</span>
                  <span className="font-mono text-green-400 text-xs font-bold">$98.2M</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}