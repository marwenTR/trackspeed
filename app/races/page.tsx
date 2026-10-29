'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, MapPin, Clock, Flag, ArrowRight } from 'lucide-react'
import { Navigation } from '@/components/layout/navigation'
import { races } from '@/data/races'

// Helper to convert country names to 2-letter codes for the flag API
const getCountryCode = (country: string) => {
  const map: Record<string, string> = {
    'Australia': 'au', 'China': 'cn', 'Japan': 'jp', 'Bahrain': 'bh', 'Saudi Arabia': 'sa',
    'USA': 'us', 'Canada': 'ca', 'Monaco': 'mc', 'Spain': 'es', 'Austria': 'at',
    'UK': 'gb', 'Belgium': 'be', 'Hungary': 'hu', 'Netherlands': 'nl', 'Italy': 'it',
    'Azerbaijan': 'az', 'Singapore': 'sg', 'Mexico': 'mx', 'Brazil': 'br', 'Qatar': 'qa',
    'UAE': 'ae'
  }
  return map[country] || 'un'
}

export default function RacesPage() {
  return (
    <div className="relative min-h-screen bg-alive overflow-hidden">
      <Navigation />
      <div className="container mx-auto px-6 pt-28 pb-20 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <h1 className="text-4xl font-black text-white tracking-tight uppercase italic">Race Calendar</h1>
          <p className="mt-2 text-gray-400 text-sm">2026 Formula 1 Season</p>
        </motion.div>

        <div className="grid gap-4">
          {races.map((race, idx) => (
            <motion.div key={race.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.03 }}>
              <Link href={`/races/${race.id}`}>
                <div className={`glass-card bg-[#111620] border ${race.status === 'next' ? 'border-f1-red/50 shadow-[0_0_20px_rgba(225,6,0,0.15)]' : 'border-white/5'} hover:border-f1-red/40 backdrop-blur-md p-6 rounded-2xl group transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer`}>
                  
                  {/* Left Side: Flag & Race Name */}
                  <div className="flex items-center gap-5">
                    {/* CIRCULAR COUNTRY FLAG */}
                    <div className="hidden sm:flex h-14 w-14 rounded-full border-2 border-white/10 bg-white/5 items-center justify-center overflow-hidden shrink-0">
                      <img 
                        src={`https://flagcdn.com/w80/${getCountryCode(race.country)}.png`} 
                        alt={race.country}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="flex items-center gap-1 text-f1-red text-xs font-bold uppercase tracking-wider">
                          <Flag className="h-3 w-3" /> {race.country}
                        </span>
                        
                        {/* Status Badges */}
                        {race.status === 'finished' && (<span className="text-[10px] font-bold text-gray-400 bg-gray-800 px-2 py-0.5 rounded-md border border-gray-700">FINISHED</span>)}
                        {race.status === 'next' && (<span className="text-[10px] font-bold text-f1-red bg-f1-red/10 px-2 py-0.5 rounded-md border border-f1-red/20 animate-pulse">NEXT RACE</span>)}
                        {race.status === 'upcoming' && (<span className="text-[10px] font-bold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-md border border-blue-500/20">UPCOMING</span>)}
                      </div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-f1-red transition-colors">{race.name}</h3>
                      <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-400">
                        <div className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-gray-500" /><span>{race.circuit}</span></div>
                      </div>
                    </div>
                  </div>

                  {/* Right Side: Date & Action */}
                  <div className="flex items-center justify-between md:justify-end gap-8 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-8">
                    <div className="text-left md:text-right">
                      <div className="flex items-center md:justify-end gap-2 text-white font-medium mb-1"><Calendar className="h-4 w-4 text-f1-red" />{race.date}</div>
                      <div className="flex items-center md:justify-end gap-2 text-gray-400 text-sm"><Clock className="h-4 w-4 text-gray-500" />{race.time}</div>
                    </div>
                    
                    <div className={`h-10 w-10 rounded-full border flex items-center justify-center transition-all duration-300 ${race.status === 'next' ? 'bg-f1-red border-f1-red' : 'bg-white/5 border-white/10 group-hover:bg-f1-red group-hover:border-f1-red'}`}>
                      <ArrowRight className="h-5 w-5 text-white" />
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