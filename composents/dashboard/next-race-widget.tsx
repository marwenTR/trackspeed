'use client'

import React, { useEffect, useState } from 'react'
import { Card } from '@/components/ui/card'
import { Calendar, MapPin } from 'lucide-react'

export function NextRaceWidget() {
  // Set the exact race date and time (November 1, 2026 at 14:00:00)
  const raceDate = new Date('2026-11-01T14:00:00').getTime()

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: false
  })

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date().getTime()
      const distance = raceDate - now

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true })
        return
      }

      // Calculate exact time
      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds, isPast: false })
    }

    // Run immediately, then every 1 second
    updateTimer()
    const interval = setInterval(updateTimer, 1000)

    return () => clearInterval(interval)
  }, [raceDate])

  return (
    <Card className="glass-card p-6 bg-white/5 border-white/10 backdrop-blur-md relative overflow-hidden">
      {/* Subtle Red Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-f1-red/20 rounded-full blur-[50px] pointer-events-none" />

      <div className="relative z-10">
        <h3 className="text-lg font-semibold text-white mb-4">Next Race</h3>
        
        <div className="text-center">
          <div className="text-2xl font-bold text-white mb-2">Mexico City GP</div>
          
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-gray-400 mb-6">
            <div className="flex items-center gap-1.5 bg-black/40 px-2 py-1 rounded-md border border-white/5">
              <MapPin className="h-3 w-3 text-f1-red" /> 
              <span>Mexico</span>
            </div>
            <div className="flex items-center gap-1.5 bg-black/40 px-2 py-1 rounded-md border border-white/5">
              <Calendar className="h-3 w-3 text-f1-red" /> 
              <span>Nov 1, 2026</span>
            </div>
          </div>

          {/* Real-Time Countdown */}
          {timeLeft.isPast ? (
            <div className="text-xl font-bold text-f1-red mb-4">Race Weekend is Here!</div>
          ) : (
            <div className="flex justify-center gap-3 sm:gap-4 mb-6">
              <div className="text-center bg-black/30 border border-white/5 rounded-xl p-2 w-16">
                <div className="text-2xl font-bold text-white font-mono">{timeLeft.days}</div>
                <div className="text-[9px] text-gray-500 uppercase font-medium tracking-wider">Days</div>
              </div>
              <div className="text-center bg-black/30 border border-white/5 rounded-xl p-2 w-16">
                <div className="text-2xl font-bold text-white font-mono">{timeLeft.hours}</div>
                <div className="text-[9px] text-gray-500 uppercase font-medium tracking-wider">Hours</div>
              </div>
              <div className="text-center bg-black/30 border border-white/5 rounded-xl p-2 w-16">
                <div className="text-2xl font-bold text-white font-mono">{timeLeft.minutes}</div>
                <div className="text-[9px] text-gray-500 uppercase font-medium tracking-wider">Mins</div>
              </div>
              <div className="text-center bg-f1-red/10 border border-f1-red/20 rounded-xl p-2 w-16">
                <div className="text-2xl font-bold text-f1-red font-mono">{timeLeft.seconds}</div>
                <div className="text-[9px] text-f1-red/70 uppercase font-medium tracking-wider">Secs</div>
              </div>
            </div>
          )}

          {/* Progress Bar (Static for visual effect) */}
          <div className="h-1.5 bg-black/50 border border-white/5 rounded-full overflow-hidden">
            <div className="h-full w-[85%] bg-gradient-to-r from-f1-red to-red-500 rounded-full" />
          </div>
          <p className="text-[10px] uppercase tracking-wider text-gray-500 mt-2 font-medium">
            Until race start
          </p>
        </div>
      </div>
    </Card>
  )
}