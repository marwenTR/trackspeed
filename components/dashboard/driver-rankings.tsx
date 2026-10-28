'use client'

import React from 'react'
import { Card } from '@/components/ui/card'

const drivers = [
  { name: 'Kimi Antonelli', points: 365, change: '+25' },
  { name: 'George Russell', points: 242, change: '+4' },
  { name: 'Lewis Hamilton', points: 241, change: '+12' },
  { name: 'Max Verstappen', points: 236, change: '+15' },
  { name: 'Charles Leclerc', points: 233, change: '+18' },
]

export function DriverRankings() {
  return (
    <Card className="glass-card p-6 bg-white/5 border-white/10 backdrop-blur-md h-full">
      <h3 className="text-lg font-semibold text-white mb-4">Driver Rankings</h3>
      <div className="space-y-2">
        {drivers.map((driver, idx) => (
          <div key={idx} className="flex justify-between items-center p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
            <div className="flex items-center gap-4">
              <span className="text-sm font-mono text-gray-500">#{idx + 1}</span>
              <span className="font-semibold text-gray-200">{driver.name}</span>
            </div>
            <div className="text-right">
              <div className="font-mono text-white font-bold text-sm">{driver.points} <span className="text-[10px] text-gray-500">PTS</span></div>
              <div className="text-xs text-green-400 font-medium">{driver.change}</div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}