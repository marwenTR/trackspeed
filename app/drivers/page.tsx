'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Navigation } from '@/components/layout/navigation'
import { driverProfiles } from '@/data/driver-profiles'

// Helper to convert country names to 2-letter codes for the flag API
const getCountryCode = (country: string) => {
  const map: Record<string, string> = {
    'UK': 'gb',
    'Italy': 'it',
    'Monaco': 'mc',
    'Netherlands': 'nl',
    'France': 'fr',
    'Australia': 'au',
    'Spain': 'es',
    'Canada': 'ca',
    'Thailand': 'th',
    'New Zealand': 'nz',
    'Argentina': 'ar',
    'Germany': 'de',
    'Brazil': 'br',
    'Mexico': 'mx',
    'Finland': 'fi',
  }
  return map[country] || 'un' // 'un' is the fallback for unknown
}

export default function DriversPage() {
  // Sort drivers based on the order in the file
  const allDrivers = Object.entries(driverProfiles).map(([id, data]) => ({ id, ...data }))

  return (
    <div className="relative min-h-screen bg-alive overflow-hidden">
      <Navigation />
      <div className="container mx-auto px-6 pt-28 pb-20 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <h1 className="text-4xl font-black text-white tracking-tight uppercase italic">DRIVERS</h1>
          <p className="mt-2 text-gray-400 text-sm">2026 Season Driver Directory</p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {allDrivers.map((driver, idx) => (
            <motion.div key={driver.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.03 }}>
              <Link href={`/drivers/${driver.id}`}>
                <div 
                  className="relative h-[200px] rounded-xl overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                  style={{ 
                    background: `linear-gradient(to right, ${driver.teamColor} 0%, ${driver.teamColor} 50%, #1A1A1A 100%)` 
                  }}
                >
                  {/* Subtle Dot Matrix Pattern */}
                  <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '6px 6px' }} />
                  
                  {/* Driver Image (Right Side) */}
                  <div className="absolute bottom-0 right-0 w-[65%] h-full z-0">
                    <Image 
                      src={driver.image} 
                      alt={driver.name} 
                      fill 
                      className="object-cover object-top drop-shadow-2xl" 
                    />
                  </div>

                  {/* Driver Info (Left Side) */}
                  <div className="absolute top-5 left-5 z-20 flex flex-col justify-between h-[calc(100%-40px)]">
                    <div>
                      <p className="text-xs text-black/60 uppercase font-bold tracking-wider mb-0.5 drop-shadow-sm">
                        {driver.name.split(' ')[0]}
                      </p>
                      <h2 className="text-xl font-black text-white leading-tight uppercase tracking-wide drop-shadow-md">
                        {driver.name.split(' ').slice(1).join(' ')}
                      </h2>
                      <p className="text-[10px] text-white/70 font-medium mt-1">{driver.team}</p>
                    </div>

                    <div className="mt-auto flex flex-col gap-2">
                      <span className="text-4xl font-black text-white italic tracking-tighter drop-shadow-lg">
                        {driver.number}
                      </span>
                      
                      {/* COUNTRY FLAG - CIRCULAR */}
                      <div className="w-8 h-8 rounded-full border-2 border-white/20 overflow-hidden shadow-lg bg-white/10">
                        <img 
                          src={`https://flagcdn.com/w80/${getCountryCode(driver.country)}.png`} 
                          alt={driver.country}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}