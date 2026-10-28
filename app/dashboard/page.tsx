'use client'

import React, { useEffect, useState } from 'react'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { RefreshCw, TrendingUp, Users, Trophy, Activity, MapPin, Calendar } from 'lucide-react'

export default function DashboardPage() {
  const [username, setUsername] = useState('Racer')
  
  // Timer state
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: false })

  useEffect(() => {
    // 1. Get Username
    const storedUser = localStorage.getItem('pitwall_user')
    if (storedUser) {
      const user = JSON.parse(storedUser)
      const name = user.name || user.email.split('@')[0]
      setUsername(name.charAt(0).toUpperCase() + name.slice(1))
    }

    // 2. Real-time Countdown for Mexico GP (Nov 1, 2026, 14:00)
    const raceDate = new Date('2026-11-01T14:00:00').getTime()
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = raceDate - now

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true })
        return
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
        isPast: false
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const hours = new Date().getHours()
  const greeting = hours < 12 ? 'Good morning' : hours < 18 ? 'Good afternoon' : 'Good evening'

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-f1-red/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <Navigation />

      <main className="pt-32 pb-20 relative z-10">
        <div className="container mx-auto px-6">
          
          {/* Header */}
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-gray-400 text-sm mb-1">{greeting}</p>
              <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                {username}<span className="text-f1-red">.</span>
              </h1>
              <p className="mt-2 text-gray-500 text-sm">Here's your Formula 1 intelligence dashboard.</p>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500 border border-white/10 rounded-lg px-3 py-2 bg-white/5 backdrop-blur-md">
              <RefreshCw className="h-3 w-3" />
              <span>Live · {new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}</span>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            {[
              { icon: TrendingUp, label: 'Portfolio Value', value: '$124,567', change: '+12.5%' },
              { icon: Users, label: 'Global Rank', value: '#1,234', change: '+42' },
              { icon: Trophy, label: 'Win Rate', value: '67%', change: '+5%' },
              { icon: Activity, label: 'Trades', value: '47', change: '+12' },
            ].map((stat, idx) => (
              <div key={idx} className="glass-card bg-white/5 border border-white/10 p-5 rounded-2xl hover:border-f1-red/30 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                    <stat.icon className="h-5 w-5 text-f1-red" />
                  </div>
                  <span className="text-xs text-green-400 font-medium bg-green-500/10 px-2 py-1 rounded-md">{stat.change}</span>
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Left Column (Charts & Tables) */}
            <div className="space-y-6 lg:col-span-2">
              
              {/* Performance Chart (Custom CSS Bars) */}
              <div className="glass-card bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold text-white">Portfolio Performance</h3>
                  <span className="text-xs text-gray-400">Last 7 days</span>
                </div>
                <div className="h-64 flex items-end gap-2 px-4 pb-4 border-b border-l border-white/10">
                  {[40, 55, 45, 70, 65, 85, 95].map((h, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-f1-red/50 to-f1-red rounded-t-sm" style={{ height: `${h}%` }} />
                  ))}
                </div>
                <div className="flex justify-between mt-2 px-4 text-xs text-gray-500 font-medium">
                  <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                </div>
              </div>

              {/* Championship Standings (2026) */}
              <div className="glass-card bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-white">Championship Standings</h3>
                  <span className="text-xs text-gray-400 bg-black/40 px-2 py-1 rounded-md border border-white/5">Round 19/24</span>
                </div>
                <div className="space-y-2">
                  {[
                    { pos: 1, driver: 'Kimi Antonelli', team: 'Mercedes', pts: 365 },
                    { pos: 2, driver: 'George Russell', team: 'Mercedes', pts: 242 },
                    { pos: 3, driver: 'Lewis Hamilton', team: 'Ferrari', pts: 241 },
                    { pos: 4, driver: 'Max Verstappen', team: 'Red Bull Racing', pts: 236 },
                    { pos: 5, driver: 'Charles Leclerc', team: 'Ferrari', pts: 233 },
                  ].map((s) => (
                    <div key={s.pos} className="flex justify-between items-center p-3 rounded-xl bg-black/20 border border-white/5 hover:bg-white/5 transition-colors">
                      <div className="flex items-center gap-4">
                        <span className="text-gray-500 font-mono text-sm w-6">#{s.pos}</span>
                        <div>
                          <p className="font-semibold text-gray-200 text-sm">{s.driver}</p>
                          <p className="text-xs text-gray-500">{s.team}</p>
                        </div>
                      </div>
                      <span className="font-mono text-white text-sm font-bold">{s.pts} <span className="text-[10px] text-gray-500">PTS</span></span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column (Sidebar) */}
            <div className="space-y-6">
              
              {/* Next Race (Live Timer) */}
              <div className="glass-card bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-f1-red/20 rounded-full blur-[50px] pointer-events-none" />
                <h3 className="text-lg font-semibold text-white mb-4 relative z-10">Next Race</h3>
                <div className="text-center relative z-10">
                  <p className="text-xl font-bold text-white mb-2">Mexico City GP</p>
                  <div className="flex justify-center gap-2 mb-4">
                    <span className="text-xs text-gray-400 bg-black/40 border border-white/5 px-2 py-1 rounded-md flex items-center gap-1"><MapPin className="h-3 w-3 text-f1-red" /> Mexico</span>
                    <span className="text-xs text-gray-400 bg-black/40 border border-white/5 px-2 py-1 rounded-md flex items-center gap-1"><Calendar className="h-3 w-3 text-f1-red" /> Nov 1</span>
                  </div>
                  
                  {timeLeft.isPast ? (
                    <div className="text-xl font-bold text-f1-red mb-4">Race Weekend!</div>
                  ) : (
                    <div className="flex justify-center gap-2 mb-4">
                      <div className="text-center bg-black/40 border border-white/5 rounded-lg p-2 w-14">
                        <div className="text-xl font-bold text-white font-mono">{timeLeft.days}</div>
                        <div className="text-[9px] text-gray-500 uppercase tracking-wider">Days</div>
                      </div>
                      <div className="text-center bg-black/40 border border-white/5 rounded-lg p-2 w-14">
                        <div className="text-xl font-bold text-white font-mono">{timeLeft.hours}</div>
                        <div className="text-[9px] text-gray-500 uppercase tracking-wider">Hrs</div>
                      </div>
                      <div className="text-center bg-black/40 border border-white/5 rounded-lg p-2 w-14">
                        <div className="text-xl font-bold text-white font-mono">{timeLeft.minutes}</div>
                        <div className="text-[9px] text-gray-500 uppercase tracking-wider">Min</div>
                      </div>
                      <div className="text-center bg-f1-red/10 border border-f1-red/20 rounded-lg p-2 w-14">
                        <div className="text-xl font-bold text-f1-red font-mono">{timeLeft.seconds}</div>
                        <div className="text-[9px] text-f1-red/70 uppercase tracking-wider">Sec</div>
                      </div>
                    </div>
                  )}
                  <div className="h-1.5 bg-black/50 border border-white/5 rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-gradient-to-r from-f1-red to-red-500 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Portfolio */}
              <div className="glass-card bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-white mb-4">Your Portfolio</h3>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Total Value</p>
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-2xl font-bold text-white">$124,567</p>
                    <span className="text-xs text-green-400 bg-green-500/10 px-2 py-1 rounded-md flex items-center gap-1"><TrendingUp className="h-3 w-3"/> +12.5%</span>
                  </div>
                  <div className="h-px bg-white/5 w-full mb-4" />
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span className="text-gray-500">Invested</span><span className="text-white font-mono">$100k</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Profit</span><span className="text-green-400 font-mono">+$24.5k</span></div>
                  </div>
                </div>
              </div>

              {/* Recent Results */}
              <div className="glass-card bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-white mb-4">Recent Results</h3>
                <div className="space-y-2">
                  {[
                    { name: 'United States GP', winner: 'Kimi Antonelli' },
                    { name: 'Singapore GP', winner: 'Lando Norris' },
                    { name: 'Azerbaijan GP', winner: 'Charles Leclerc' }
                  ].map((race, i) => (
                    <div key={i} className="p-3 rounded-xl bg-black/20 border border-white/5">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-white">{race.name}</span>
                        <span className="text-[10px] text-f1-red bg-f1-red/10 border border-f1-red/20 px-2 py-0.5 rounded">{race.winner}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}