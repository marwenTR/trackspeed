'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { StockCard } from '@/components/market/stock-card'
import { PortfolioSummary } from '@/components/market/portfolio-summary'
import { MarketChart } from '@/components/market/market-chart'
import { useMarketStore } from '@/store/marketStore'
import { drivers } from '@/data/drivers'

// 1. IMPORT THE NAVIGATION
import { Navigation } from '@/components/layout/navigation'

export default function MarketPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const { portfolio, buyStock, sellStock } = useMarketStore()

  const filteredDrivers = drivers.filter(driver =>
    driver.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    driver.team.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    // 2. ADD THE RELATIVE AND OVERFLOW CLASSES
    <div className="relative min-h-screen bg-[#0A0A0A] overflow-hidden">
      
      {/* 3. ADD THE NAVIGATION BAR HERE */}
      <Navigation />

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-f1-red/10 rounded-full blur-[120px]" />
      </div>

      {/* 4. ADD pt-32 TO PUSH CONTENT BELOW THE NAV BAR */}
      <div className="container mx-auto px-6 relative z-10 pt-32 pb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <h1 className="text-4xl font-bold text-white tracking-tight">
            Driver Stock <span className="text-f1-red">Market</span>
          </h1>
          <p className="mt-2 text-gray-400 text-sm">Trade virtual stocks of your favorite F1 drivers.</p>
        </motion.div>

        <PortfolioSummary />

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            
            {/* Search Bar */}
            <div className="mb-6 relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
              <Input
                placeholder="Search drivers or teams..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-12 rounded-xl focus:border-f1-red focus:ring-1 focus:ring-f1-red"
              />
            </div>

            <MarketChart />

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {filteredDrivers.map((driver) => (
                <StockCard
                  key={driver.id}
                  driver={driver}
                  onBuy={() => buyStock(driver.id)}
                  onSell={() => sellStock(driver.id)}
                  userShares={portfolio?.drivers?.[driver.id]?.shares || 0}
                />
              ))}
            </div>
          </div>

          {/* Sidebar Stats */}
          <div className="space-y-6">
            <div className="glass-card bg-white/5 border-white/10 backdrop-blur-md p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-white mb-4">Market Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-gray-400 text-sm">Total Volume</span>
                  <span className="font-mono text-white font-bold">1,234,567</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-gray-400 text-sm">Active Traders</span>
                  <span className="font-mono text-white font-bold">8,942</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Market Cap</span>
                  <span className="font-mono text-green-400 font-bold">$98.2M</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}