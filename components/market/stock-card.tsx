'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { driverProfiles } from '@/data/driver-profiles'

// HARDCODED TEAM COLORS as a fallback to guarantee they work
const TEAM_COLORS: Record<string, string> = {
  'Mercedes': '#27F4D2',
  'Ferrari': '#E8002D',
  'Red Bull Racing': '#3671C6',
  'McLaren': '#FF8000',
  'Aston Martin': '#229971',
  'Alpine': '#FF87BC',
  'Williams': '#64C4FF',
  'Racing Bulls': '#6692FF',
  'Haas': '#B6BABD',
  'Audi': '#52E252',
  'Cadillac': '#FFD700',
}

export function StockCard({ driver, onBuy, onSell, userShares }: any) {
  const isPositive = driver.change >= 0
  
  // Try to find the profile using the direct ID, OR by searching the profiles
  const profile = driverProfiles[driver.id] || Object.values(driverProfiles).find((p: any) => p.name === driver.name)
  
  // Use the team color from profile, OR the hardcoded team color, OR default to Red
  const teamColor = profile?.teamColor || TEAM_COLORS[driver.team] || '#E10600'
  
  const nameParts = driver.name.split(' ')
  const firstName = nameParts[0]
  const lastName = nameParts.slice(1).join(' ')

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="relative overflow-hidden rounded-2xl bg-[#111620] border border-white/5 p-5 group transition-all duration-300 flex flex-col justify-between"
    >
      {/* Team Color Left Strip - NOW DYNAMIC */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-1.5 z-20 transition-colors duration-300" 
        style={{ backgroundColor: teamColor }} 
      />
      
      {/* Subtle Team Color Glow in Background - NOW DYNAMIC */}
      <div 
        className="absolute top-0 right-0 w-24 h-24 rounded-full blur-[40px] opacity-10 group-hover:opacity-30 transition-opacity pointer-events-none"
        style={{ backgroundColor: teamColor }}
      />

      {/* Background Watermark Number */}
      <div className="absolute -right-2 -bottom-6 text-[100px] font-black text-white/[0.02] font-mono leading-none z-0 pointer-events-none">
        {driver.number}
      </div>

      {/* Top Section */}
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          
          {/* Name & Team */}
          <div>
            <Link href={`/drivers/${driver.id}`}>
              <div className="cursor-pointer">
                <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold mb-0.5">{firstName}</p>
                <h3 className="text-lg font-black text-white uppercase tracking-tight leading-none group-hover:text-white transition-colors">
                  {lastName}
                </h3>
              </div>
            </Link>
            <p className="text-[10px] text-gray-500 mt-1">{driver.team}</p>
          </div>

          {/* Change % */}
          <div className="flex flex-col items-end gap-1">
             <div className={`flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded-md border ${isPositive ? 'text-green-400 bg-green-500/10 border-green-500/20' : 'text-red-400 bg-red-500/10 border-red-500/20'}`}>
              {isPositive ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
              {Math.abs(driver.change)}%
            </div>
            {userShares > 0 && (
              <span className="text-[9px] font-bold text-white bg-white/10 border border-white/20 px-1.5 py-0.5 rounded">
                {userShares} SHARES
              </span>
            )}
          </div>
        </div>

        {/* Price Row */}
        <div className="bg-black/30 border border-white/5 rounded-xl p-3 flex justify-between items-center mb-4">
          <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Price</span>
          <div className="font-mono font-bold text-white text-sm">
            <span className="text-gray-500 text-xs mr-1">$</span>
            {driver.value.toLocaleString()}
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="relative z-10 flex gap-2">
        <Button 
          onClick={onBuy} 
          className="flex-1 bg-white hover:bg-gray-200 text-black font-bold rounded-lg h-9 text-xs transition-colors"
        >
          Buy
        </Button>
        <Button 
          onClick={onSell} 
          variant="outline" 
          className="flex-1 bg-transparent border-white/10 hover:bg-white/5 hover:border-white/30 text-white rounded-lg h-9 text-xs transition-colors"
        >
          Sell
        </Button>
      </div>
    </motion.div>
  )
}