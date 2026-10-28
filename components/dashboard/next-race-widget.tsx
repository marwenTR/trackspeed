'use client'

import React from 'react'
import { Card } from '@/components/ui/card'
import { Calendar, MapPin, Clock } from 'lucide-react'

export function NextRaceWidget() {
  return (
    
    <Card className="glass-card p-6 bg-white/5 border-white/10 backdrop-blur-md relative overflow-hidden">
      
      {/* Little red glow inside the card */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-f1-red/20 rounded-full blur-[50px] pointer-events-none" />

      <div className="relative z-10">
        <h3 className="text-lg font-semibold text-white mb-4">Next Race</h3>
        
        <div className="text-center">
          <div className="text-2xl font-bold text-white mb-2">Bahrain Grand Prix</div>
          
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-400 mb-6">
            <div className="flex items-center gap-1.5 bg-black/40 px-2 py-1 rounded-md border border-white/5">
              <MapPin className="h-3 w-3 text-f1-red" /> 
              <span>Bahrain</span>
            </div>
            <div className="flex items-center gap-1.5 bg-black/40 px-2 py-1 rounded-md border border-white/5">
              <Calendar className="h-3 w-3 text-f1-red" /> 
              <span>Mar 2, 2024</span>
            </div>
            <div className="flex items-center gap-1.5 bg-black/40 px-2 py-1 rounded-md border border-white/5">
              <Clock className="h-3 w-3 text-f1-red" /> 
              <span>14 Days</span>
            </div>
          </div>

          {/* Countdown Bar */}
          <div className="relative">
            <div className="h-2 bg-black/50 border border-white/5 rounded-full overflow-hidden">
              <div className="h-full w-1/3 bg-gradient-to-r from-f1-red to-red-500 rounded-full" />
            </div>
            <p className="text-[10px] uppercase tracking-wider text-gray-500 mt-2 font-medium">
              Until race day
            </p>
          </div>
        </div>
      </div>
    </Card>
  )
}