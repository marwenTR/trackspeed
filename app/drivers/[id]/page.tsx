'use client'

import React, { useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Ruler, Weight, Calendar, ArrowUpRight, TrendingUp, Zap } from 'lucide-react'
import { Navigation } from '@/components/layout/navigation'
import { driverProfiles } from '@/data/driver-profiles'
import { drivers } from '@/data/drivers'
import { PriceHistoryChart, RecentForm } from '@/components/drivers/driver-widgets'

const getCountryCode = (country: string) => {
  const map: Record<string, string> = {
    'UK': 'gb', 'Italy': 'it', 'Monaco': 'mc', 'Netherlands': 'nl', 'France': 'fr',
    'Australia': 'au', 'Spain': 'es', 'Canada': 'ca', 'Thailand': 'th', 'New Zealand': 'nz',
    'Argentina': 'ar', 'Germany': 'de', 'Brazil': 'br', 'Mexico': 'mx', 'Finland': 'fi',
  }
  return map[country] || 'un'
}

export default function DriverProfilePage() {
  const params = useParams()
  const driver = driverProfiles[params.id as string]
  const marketData = drivers.find(d => d.id === params.id) || drivers.find(d => d.name === driver?.name)
  const [activeTab, setActiveTab] = useState<'statistics' | 'biography' | 'news'>('statistics')

  if (!driver) {
    return <div className="min-h-screen bg-alive flex items-center justify-center text-white">Driver not found.</div>
  }

  const firstName = driver.name.split(' ')[0]
  const lastName = driver.name.split(' ').slice(1).join(' ')

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

        <div 
          className="relative rounded-3xl overflow-hidden mb-12 h-[400px] md:h-[480px]"
          style={{ 
            background: `linear-gradient(135deg, ${driver.teamColor} 0%, ${driver.teamColor}cc 50%, #111620 100%)` 
          }}
        >
          <div className="absolute top-0 right-[20%] md:right-[25%] text-[350px] md:text-[450px] font-black text-black/10 leading-none pointer-events-none select-none tracking-tighter">
            {driver.number}
          </div>

          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '8px 8px' }} />

          <div className="absolute bottom-0 right-0 w-[70%] md:w-[55%] h-[95%] z-10 pointer-events-none">
            <Image 
              src={driver.image} 
              alt={driver.name} 
              fill 
              className="object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
              priority
            />
          </div>

          <div className="absolute inset-0 z-20 flex flex-col justify-center p-10 md:p-16">
            <div className="absolute left-0 top-0 bottom-0 w-1.5" style={{ backgroundColor: 'rgba(0,0,0,0.3)' }} />

            <div className="max-w-[50%]">
              <p className="text-3xl md:text-5xl text-white/80 mb-0" style={{ fontFamily: 'cursive' }}>
                {firstName}
              </p>
              
              <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-4 drop-shadow-lg">
                {lastName}
              </h1>

              <div className="flex items-center gap-4 text-sm font-bold text-white/90 mb-6 bg-black/20 backdrop-blur-sm px-3 py-2 rounded-lg w-fit">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-full border border-white/20 overflow-hidden">
                    <img src={`https://flagcdn.com/w80/${getCountryCode(driver.country)}.png`} alt={driver.country} className="w-full h-full object-cover" />
                  </div>
                  <span>{driver.country}</span>
                </div>
                
                <span className="w-px h-4 bg-white/30" />
                
                {/* TEAM NAME TEXT INSTEAD OF LOGO */}
                <span>{driver.team}</span>
                
                <span className="w-px h-4 bg-white/30" />
                
                <span>#{driver.number}</span>
              </div>

              <Link href="/market">
                <button className="group flex items-center gap-2 bg-transparent hover:bg-white text-white hover:text-black border-2 border-white transition-all duration-300 px-6 py-2.5 rounded-full font-bold text-sm">
                  <Zap className="h-4 w-4 fill-current" />
                  Trade Now
                  <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>

          <div className="absolute bottom-6 right-6 z-30 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-4 min-w-[220px]">
            <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Current Market Price</p>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-black text-white font-mono">
                ${marketData?.value.toLocaleString() || '—'}
              </p>
              <div className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-md ${(marketData?.change || 0) >= 0 ? 'text-green-400 bg-green-500/10' : 'text-red-400 bg-red-500/10'}`}>
                <TrendingUp className="h-3 w-3" />
                {marketData?.change || 0}%
              </div>
            </div>
          </div>
        </div>

        {activeTab === 'statistics' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-4xl font-black text-white italic mb-8">STATISTICS</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <div className="lg:col-span-2">
                <PriceHistoryChart driver={marketData || { value: 350000, change: 0 }} />
              </div>
              <div>
                <RecentForm driver={driver} />
              </div>
            </div>

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
                <div className="bg-[#1A1A1A] rounded-2xl p-8 border border-white/5 h-full">
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
          </div>
        )}

        {activeTab === 'biography' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-4xl font-black text-white italic mb-8">BIOGRAPHY</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 bg-[#111620] rounded-2xl p-8 border border-white/5">
                <h3 className="text-xl font-bold text-white mb-4">About {driver.name}</h3>
                <p className="text-gray-400 leading-relaxed text-lg mb-6">{driver.bio}</p>
                <p className="text-gray-400 leading-relaxed text-lg">Born in {driver.country}, he currently races under number {driver.number}. Off the track, he is known for his dedication to fitness and his passion for sim racing.</p>
              </div>
              <div className="bg-[#111620] rounded-2xl p-8 border border-white/5">
                <h3 className="text-xl font-bold text-white mb-6">Driver Details</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10"><Ruler className="h-5 w-5 text-f1-red" /></div>
                    <div><p className="text-sm text-gray-500">Height</p><p className="text-white font-bold text-lg">{driver.height}</p></div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10"><Weight className="h-5 w-5 text-f1-red" /></div>
                    <div><p className="text-sm text-gray-500">Weight</p><p className="text-white font-bold text-lg">{driver.weight}</p></div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10"><Calendar className="h-5 w-5 text-f1-red" /></div>
                    <div><p className="text-sm text-gray-500">Age</p><p className="text-white font-bold text-lg">{driver.age} years old</p></div>
                  </div>
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