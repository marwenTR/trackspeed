'use client'

import React, { useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Navigation } from '@/components/layout/navigation'
import { ArrowLeft, Ruler, Weight, Calendar, ArrowUpRight } from 'lucide-react'
import { driverProfiles } from '@/data/driver-profiles'

export default function DriverProfilePage() {
  const params = useParams()
  const driver = driverProfiles[params.id as string]
  const [activeTab, setActiveTab] = useState<'statistics' | 'biography' | 'news'>('statistics')

  if (!driver) {
    return <div className="min-h-screen bg-alive flex items-center justify-center text-white">Driver not found.</div>
  }

  return (
    <div className="relative min-h-screen bg-alive overflow-hidden pb-20">
      <Navigation />
      <div className="container mx-auto px-6 relative z-10 max-w-6xl pt-28">
        
        <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
          <Link href="/drivers" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium">
            <ArrowLeft className="h-4 w-4" /> All drivers
          </Link>
          <div className="flex gap-6 text-sm font-bold">
            <button onClick={() => setActiveTab('statistics')} className={`pb-4 -mb-[17px] transition-colors ${activeTab === 'statistics' ? 'text-white border-b-2 border-f1-red' : 'text-gray-500 hover:text-white'}`}>Statistics</button>
            <button onClick={() => setActiveTab('biography')} className={`pb-4 -mb-[17px] transition-colors ${activeTab === 'biography' ? 'text-white border-b-2 border-f1-red' : 'text-gray-500 hover:text-white'}`}>Biography</button>
            <button onClick={() => setActiveTab('news')} className={`pb-4 -mb-[17px] transition-colors ${activeTab === 'news' ? 'text-white border-b-2 border-f1-red' : 'text-gray-500 hover:text-white'}`}>News</button>
          </div>
        </div>

        <div className="flex items-center gap-6 mb-16">
          <div className="w-24 h-24 rounded-full overflow-hidden bg-white/5 border-2 relative" style={{ borderColor: driver.teamColor }}>
             <Image src={driver.image} alt={driver.name} fill className="object-cover object-top scale-110" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-white font-bold text-sm uppercase tracking-widest">{driver.team}</span>
              <span className="w-4 h-4 rounded-full" style={{ backgroundColor: driver.teamColor }} />
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter italic">{driver.name}</h1>
          </div>
        </div>

        {activeTab === 'statistics' && (
          <>
            <h2 className="text-4xl font-black text-white italic mb-8">STATISTICS</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-black text-white italic mb-8 uppercase">2026 Season</h3>
                <div className="space-y-6">
                  <StatRow label="Season Position" value={driver.seasonPos} />
                  <StatRow label="Season Points" value={driver.seasonPoints} />
                  <StatRow label="Grand Prix Races" value={18} />
                  <StatRow label="Grand Prix Points" value={334} />
                  <StatRow label="Grand Prix Wins" value={driver.wins} />
                  <StatRow label="Grand Prix Podiums" value={driver.podiums} />
                  <StatRow label="Grand Prix Poles" value={driver.poles} />
                  <StatRow label="Grand Prix Top 10s" value={16} />
                  <StatRow label="DHL Fastest Laps" value={driver.fastestLaps} />
                  <StatRow label="DNFs" value={driver.dnfs} />
                </div>
              </div>
              <div>
                <div className="bg-[#111620] rounded-2xl p-8 border border-white/5 h-full">
                  <h3 className="text-2xl font-black text-white italic mb-8 uppercase">Career Stats</h3>
                  <div className="space-y-6">
                    <StatRow label="Grands Prix Entered" value={driver.gpEntered} dark />
                    <StatRow label="Career Points" value={driver.careerPoints} dark />
                    <StatRow label="Highest Race Finish" value="1 (x9)" dark />
                    <StatRow label="Podiums" value={driver.podiums} dark />
                    <StatRow label="Highest Grid Position" value="1 (x7)" dark />
                    <StatRow label="Pole Positions" value={driver.poles} dark />
                    <StatRow label="World Championships" value={driver.championships} dark />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === 'biography' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-4xl font-black text-white italic mb-8">BIOGRAPHY</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 bg-[#111620] rounded-2xl p-8 border border-white/5">
                <h3 className="text-xl font-bold text-white mb-4">About {driver.name}</h3>
                <p className="text-gray-400 leading-relaxed text-lg mb-6">{driver.bio} Driving for {driver.team}, {driver.name} has established himself as one of the most exciting talents on the grid. With {driver.wins} race wins and {driver.podiums} podium finishes to his name, he continues to push the limits of what is possible in Formula 1.</p>
                <p className="text-gray-400 leading-relaxed text-lg">Born in {driver.country}, he currently races under number {driver.number}. Off the track, he is known for his dedication to fitness and his passion for sim racing.</p>
              </div>
              <div className="bg-[#111620] rounded-2xl p-8 border border-white/5">
                <h3 className="text-xl font-bold text-white mb-6">Driver Details</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4"><div className="p-3 bg-white/5 rounded-xl border border-white/10"><Ruler className="h-5 w-5 text-f1-red" /></div><div><p className="text-sm text-gray-500">Height</p><p className="text-white font-bold text-lg">{driver.height}</p></div></div>
                  <div className="flex items-center gap-4"><div className="p-3 bg-white/5 rounded-xl border border-white/10"><Weight className="h-5 w-5 text-f1-red" /></div><div><p className="text-sm text-gray-500">Weight</p><p className="text-white font-bold text-lg">{driver.weight}</p></div></div>
                  <div className="flex items-center gap-4"><div className="p-3 bg-white/5 rounded-xl border border-white/10"><Calendar className="h-5 w-5 text-f1-red" /></div><div><p className="text-sm text-gray-500">Age</p><p className="text-white font-bold text-lg">{driver.age} years old</p></div></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'news' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-4xl font-black text-white italic mb-8">LATEST NEWS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#111620] rounded-2xl p-6 border border-white/5 group cursor-pointer hover:border-white/20 transition-all">
                <div className="flex items-center justify-between mb-4"><span className="text-xs font-bold text-f1-red uppercase tracking-wider bg-f1-red/10 px-2 py-1 rounded">Race Report</span><span className="text-xs text-gray-500">2 hours ago</span></div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-f1-red transition-colors">{driver.name} Secures Crucial Podium in Thrilling Mexico GP</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">In a race full of strategy and drama, {driver.name} delivered a masterclass in tire management to secure a podium finish, keeping his championship hopes alive.</p>
                <div className="flex items-center gap-2 text-sm text-white font-semibold">Read Full Story <ArrowUpRight className="h-4 w-4" /></div>
              </div>
              <div className="bg-[#111620] rounded-2xl p-6 border border-white/5 group cursor-pointer hover:border-white/20 transition-all">
                <div className="flex items-center justify-between mb-4"><span className="text-xs font-bold text-blue-400 uppercase tracking-wider bg-blue-400/10 px-2 py-1 rounded">Interview</span><span className="text-xs text-gray-500">1 day ago</span></div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-f1-red transition-colors">"{driver.name}: We are pushing the limits every single weekend"</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{driver.name} sits down with F1.com to discuss the development race, his relationship with his engineers, and the pressure of fighting for the 2026 world championship.</p>
                <div className="flex items-center gap-2 text-sm text-white font-semibold">Read Full Story <ArrowUpRight className="h-4 w-4" /></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function StatRow({ label, value, dark = false }: { label: string, value: string | number, dark?: boolean }) {
  return (
    <div className={`flex justify-between items-center pb-4 ${dark ? 'border-b border-white/10' : 'border-b border-white/20'}`}>
      <span className={`text-sm font-medium ${dark ? 'text-gray-400' : 'text-gray-500'}`}>{label}</span>
      <span className="text-xl font-black text-white">{value}</span>
    </div>
  )
}