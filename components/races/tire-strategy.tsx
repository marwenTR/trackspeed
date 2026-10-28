'use client'

import React from 'react'

// Custom F1 Tire Icon Component
const TireIcon = ({ compound, laps }: { compound: string; laps: number }) => {
  const getColors = () => {
    switch (compound.toLowerCase()) {
      case 'soft':
        return { ring: 'border-red-500', text: 'text-red-500', bg: 'bg-red-500/10' }
      case 'medium':
        return { ring: 'border-yellow-400', text: 'text-yellow-400', bg: 'bg-yellow-400/10' }
      case 'hard':
        return { ring: 'border-white', text: 'text-white', bg: 'bg-white/10' }
      default:
        return { ring: 'border-gray-500', text: 'text-gray-500', bg: 'bg-gray-500/10' }
    }
  }

  const colors = getColors()

  return (
    <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-black/40 border border-white/5 w-full hover:bg-white/5 transition-colors group">
      {/* The Tire Graphic */}
      <div className="relative flex items-center justify-center w-10 h-10 mb-2">
        {/* Outer Tire */}
        <div className="absolute inset-0 rounded-full border-[3px] border-[#222] bg-[#111]" />
        {/* Compound Ring */}
        <div className={`absolute inset-1 rounded-full border-[2.5px] ${colors.ring}`} />
        {/* Center Hole */}
        <div className="absolute inset-3 rounded-full bg-[#0A0A0A]" />
      </div>
      
      {/* Laps Text */}
      <span className="text-xs font-mono font-bold text-white mb-0.5">{laps}</span>
      <span className="text-[9px] text-gray-500 uppercase tracking-wider font-semibold">Laps</span>
    </div>
  )
}

export function TireStrategy({ strategy }: any) {
  return (
    <div className="glass-card bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl">
      <h3 className="text-lg font-semibold text-white mb-4">Tire Strategy</h3>
      
      <div className="space-y-6">
        {strategy.map((driver: any, idx: number) => (
          <div key={idx}>
            <div className="flex items-center justify-between mb-3">
              <p className="font-bold text-sm text-gray-200">{driver.driver}</p>
              <span className="text-[10px] text-gray-500 font-mono bg-white/5 px-2 py-1 rounded-md border border-white/10">
                {driver.tires.length} Stops
              </span>
            </div>
            
            <div className="flex gap-2">
              {driver.tires.map((tire: any, tireIdx: number) => (
                <TireIcon key={tireIdx} compound={tire.compound} laps={tire.laps} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 mt-6 pt-4 border-t border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full border-[2px] border-red-500" />
          <span className="text-[10px] text-gray-400 font-medium">Soft</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full border-[2px] border-yellow-400" />
          <span className="text-[10px] text-gray-400 font-medium">Medium</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full border-[2px] border-white" />
          <span className="text-[10px] text-gray-400 font-medium">Hard</span>
        </div>
      </div>
    </div>
  )
}