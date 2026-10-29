'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Navigation } from '@/components/layout/navigation'
import { ArrowRight } from 'lucide-react'
import { teams } from '@/data/teams'

export default function TeamsPage() {
  return (
    <div className="relative min-h-screen bg-alive overflow-hidden">
      <Navigation />
      <div className="container mx-auto px-6 pt-28 pb-20 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <h1 className="text-4xl font-black text-white tracking-tight uppercase italic">F1 Constructors</h1>
          <p className="mt-2 text-gray-400 text-sm">2026 Season Team Directory</p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          {teams.map((team, idx) => (
            <motion.div 
              key={team.id} 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: idx * 0.05 }}
            >
              <Link href={`/teams/${team.id}`}>
                <div 
                  className="relative h-[320px] rounded-2xl overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-[1.01] p-6 flex flex-col justify-between"
                  style={{ 
                    background: `linear-gradient(135deg, ${team.color} 0%, ${team.color}bb 60%, #111620 100%)` 
                  }}
                >
                  
                  {/* DOT MATRIX PATTERN (Subtle) */}
                  <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '8px 8px' }} />

                  {/* Top Section: Team Name & Drivers */}
                  <div className="relative z-20 flex justify-between items-start">
                    <div>
                      {/* BIGGER TEAM NAME */}
                      <h2 className="text-3xl md:text-4xl font-black text-white uppercase italic tracking-tighter drop-shadow-md mb-3">
                        {team.name}
                      </h2>
                      
                      {/* Driver Names with small photos */}
                      <div className="flex items-center gap-3">
                        {team.drivers.map((driverName, i) => {
                          const driverId = driverName.toLowerCase().replace(' ', '-');
                          return (
                            <div key={i} className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-white/10">
                              <div className="relative w-6 h-6 rounded-full overflow-hidden bg-white/10 border border-white/20">
                                <Image 
                                  src={`/drivers/${driverId}.png`} 
                                  alt={driverName}
                                  fill
                                  className="object-cover object-top scale-125"
                                />
                              </div>
                              <span className="text-[11px] font-bold text-white tracking-wide">
                                {driverName.split(' ')[0]} <span className="uppercase text-gray-300">{driverName.split(' ')[1]}</span>
                              </span>
                            </div>
                          )
                        })}
                      </div>
                    </div>

                    {/* View Team Arrow */}
                    <div className="h-10 w-10 rounded-full bg-black/30 backdrop-blur-md border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                      <ArrowRight className="h-5 w-5 text-white group-hover:text-black transition-colors" />
                    </div>
                  </div>

                  {/* Bottom Section: The F1 Car - MADE MUCH BIGGER */}
                  <div className="absolute bottom-[-30px] left-[-20px] right-[-20px] h-[240px] z-10">
                    <Image 
                      src={team.car} 
                      alt={`${team.name} Car`} 
                      fill
                      className="object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)] transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2" 
                    />
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