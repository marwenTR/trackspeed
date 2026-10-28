'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Navigation } from '@/components/layout/navigation'
import { driverProfiles } from '@/data/driver-profiles'

export default function DriversPage() {
  const allDrivers = Object.entries(driverProfiles).map(([id, data]) => ({ id, ...data }))

  return (
    <div className="relative min-h-screen bg-alive overflow-hidden">
      <Navigation />
      <div className="container mx-auto px-6 pt-28 pb-20 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <h1 className="text-4xl font-bold text-white tracking-tight">F1 Drivers</h1>
          <p className="mt-2 text-gray-400 text-sm">2026 Season Driver Directory</p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {allDrivers.map((driver, idx) => (
            <motion.div key={driver.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }}>
              <Link href={`/drivers/${driver.id}`}>
                <div className="relative h-[320px] rounded-xl overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-[1.02]" style={{ background: `linear-gradient(to right, ${driver.teamColor} 0%, ${driver.teamColor} 40%, #1A1A1A 100%)` }}>
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent z-10" />
                  <div className="absolute bottom-0 right-0 w-[85%] h-[100%] z-0">
                    <Image src={driver.image} alt={driver.name} fill className="object-cover object-top drop-shadow-2xl" />
                  </div>
                  <div className="absolute top-6 left-6 z-20 w-1/2">
                    <h2 className="text-xl font-bold text-white leading-tight uppercase tracking-wide">{driver.name.split(' ').map((n: string, i: number) => <span key={i} className="block">{n}</span>)}</h2>
                    <p className="text-[11px] font-semibold text-black/70 mt-1 uppercase tracking-wider">{driver.team}</p>
                    <div className="mt-6"><span className="text-5xl font-black text-white italic tracking-tighter drop-shadow-md">{driver.number}</span></div>
                  </div>
                  <div className="absolute bottom-6 left-6 z-20">
                    <div className="w-6 h-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30"><span className="text-[10px] uppercase font-bold text-white">{driver.country.substring(0, 2)}</span></div>
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