'use client'

import React, { useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { Navigation } from '@/components/layout/navigation'
import { teams } from '@/data/teams'

export default function TeamProfilePage() {
  const params = useParams()
  const team = teams.find((t) => t.id === params.id)
  const [activeTab, setActiveTab] = useState<'statistics' | 'info'>('statistics')

  if (!team) {
    return <div className="min-h-screen bg-alive flex items-center justify-center text-white">Team not found.</div>
  }

  // Determine Season Position dynamically based on points
  const sortedTeams = [...teams].sort((a, b) => b.points - a.points)
  const seasonPosition = sortedTeams.findIndex(t => t.id === team.id) + 1

  return (
    <div className="relative min-h-screen bg-alive overflow-hidden pb-20">
      <Navigation />
      <div className="container mx-auto px-6 relative z-10 max-w-6xl pt-28">
        
        {/* Top Nav Bar */}
        <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
          <Link href="/teams" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium">
            <ArrowLeft className="h-4 w-4" /> All Teams
          </Link>
          <div className="flex gap-6 text-sm font-bold">
            <button 
              onClick={() => setActiveTab('statistics')}
              className={`pb-4 -mb-[17px] transition-colors ${activeTab === 'statistics' ? 'text-white border-b-2 border-f1-red' : 'text-gray-500 hover:text-white'}`}
            >
              Statistics
            </button>
            <button 
              onClick={() => setActiveTab('info')}
              className={`pb-4 -mb-[17px] transition-colors ${activeTab === 'info' ? 'text-white border-b-2 border-f1-red' : 'text-gray-500 hover:text-white'}`}
            >
              Team Info
            </button>
          </div>
        </div>

        {/* Hero Title */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter italic mb-2">{team.name}</h1>
          <p className="text-gray-400 text-sm">{team.fullName}</p>
        </div>

        {/* The 2 Driver Cards (Horizontal) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {team.drivers.map((driverName, idx) => {
            const driverId = driverName.toLowerCase().replace(' ', '-')
            return (
              <Link key={idx} href={`/drivers/${driverId}`}>
                <div 
                  className="relative h-48 rounded-xl overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                  style={{ background: `linear-gradient(to right, ${team.color} 0%, ${team.color} 50%, #1A1A1A 100%)` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent z-10" />
                  
                  <div className="absolute bottom-0 right-0 w-[60%] h-full z-0">
                    <Image src={`/drivers/${driverId}.png`} alt={driverName} fill className="object-cover object-top drop-shadow-2xl" />
                  </div>

                  <div className="absolute top-6 left-6 z-20">
                    <p className="text-sm text-black/70 uppercase font-bold tracking-wider">{driverName.split(' ')[0]}</p>
                    <h2 className="text-2xl font-black text-white leading-tight uppercase tracking-wide mb-4">
                      {driverName.split(' ').slice(1).join(' ')}
                    </h2>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* The Red Separator Line */}
        <div className="h-2 w-full bg-gradient-to-r from-f1-red via-f1-red to-transparent mb-12 relative">
           <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black to-transparent" />
        </div>

        {/* --- TAB CONTENT --- */}

        {/* STATISTICS TAB */}
        {activeTab === 'statistics' && (
          <>
            <h2 className="text-4xl font-black text-white italic mb-8">STATISTICS</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Left Column: 2026 Season */}
              <div>
                <h3 className="text-2xl font-black text-white italic mb-8 uppercase">2026 Season</h3>
                <div className="space-y-6">
                  <StatRow label="Season Position" value={`${seasonPosition}${seasonPosition === 1 ? 'st' : seasonPosition === 2 ? 'nd' : seasonPosition === 3 ? 'rd' : 'th'}`} />
                  <StatRow label="Season Points" value={team.points} />
                  <StatRow label="Grand Prix Races" value="19" />
                  <StatRow label="Grand Prix Points" value={team.points} />
                  <StatRow label="Grand Prix Wins" value={team.wins} />
                  <StatRow label="Grand Prix Podiums" value={team.podiums} />
                  <StatRow label="Grand Prix Poles" value={team.poles} />
                  <StatRow label="Grand Prix Top 10s" value={team.top10s} />
                  <StatRow label="DHL Fastest Laps" value={team.fastestLaps} />
                  <StatRow label="DNFs" value={team.dnfs} />
                </div>
              </div>

              {/* Right Column: Team Summary */}
              <div>
                <div className="bg-[#1A1A1A] rounded-2xl p-8 border border-white/5 h-full">
                  <h3 className="text-2xl font-black text-white italic mb-8 uppercase">Team Summary</h3>
                  <div className="space-y-6">
                    <StatRow label="Grands Prix Entered" value={team.gpEntered} dark />
                    <StatRow label="Team Points" value={team.careerPoints} dark />
                    <StatRow label="Highest Race Finish" value="1" dark />
                    <StatRow label="Podiums" value={team.careerPodiums} dark />
                    <StatRow label="Highest Grid Position" value="1" dark />
                    <StatRow label="Pole Positions" value={team.careerPoles} dark />
                    <StatRow label="World Championships" value={team.championships} dark />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* TEAM INFO TAB */}
        {activeTab === 'info' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-4xl font-black text-white italic mb-8">TEAM INFO</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Bio */}
              <div className="lg:col-span-2 bg-[#111620] rounded-2xl p-8 border border-white/5">
                <h3 className="text-xl font-bold text-white mb-4">About {team.name}</h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {team.bio}
                </p>
              </div>

              {/* Quick Facts */}
              <div className="bg-[#111620] rounded-2xl p-8 border border-white/5">
                <h3 className="text-xl font-bold text-white mb-6">Quick Facts</h3>
                <div className="space-y-5">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Team Principal</p>
                    <p className="text-white font-bold">{team.teamPrincipal}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Base</p>
                    <p className="text-white font-bold">{team.base}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Chassis</p>
                    <p className="text-white font-bold">{team.chassis}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Power Unit</p>
                    <p className="text-white font-bold">{team.powerUnit}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">First Entry</p>
                    <p className="text-white font-bold">1950</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  )
}

// Reusable Stat Row Component
function StatRow({ label, value, dark = false }: { label: string, value: string | number, dark?: boolean }) {
  return (
    <div className={`flex justify-between items-center pb-4 ${dark ? 'border-b border-white/10' : 'border-b border-white/20'}`}>
      <span className={`text-sm font-medium ${dark ? 'text-gray-400' : 'text-gray-500'}`}>{label}</span>
      <span className="text-xl font-black text-white">{value}</span>
    </div>
  )
}