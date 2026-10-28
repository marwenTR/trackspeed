'use client'

import React from 'react'
import { Gauge, Map, TrendingUp, Activity } from 'lucide-react'

export function TrackInfo({ track }: any) {
  const specs = [
    { icon: Gauge, label: 'Track Length', value: track.length },
    { icon: Activity, label: 'Turns', value: track.turns },
    { icon: TrendingUp, label: 'DRS Zones', value: track.drsZones },
    { icon: Map, label: 'Top Speed', value: track.topSpeed },
  ]

  return (
    <div className="glass-card bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl">
      <h3 className="text-lg font-semibold text-white mb-4">Track Information</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {specs.map((spec, idx) => (
          <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-black/30 border border-white/5">
            <div className="p-2 rounded-lg bg-white/5 border border-white/10">
              <spec.icon className="h-5 w-5 text-f1-red" />
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-0.5">{spec.label}</p>
              <p className="font-mono font-bold text-white">{spec.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}