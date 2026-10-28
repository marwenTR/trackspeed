'use client'

import React from 'react'
import { Card } from '@/components/ui/card'

const standings = [
  { position: 1, driver: 'Kimi Antonelli', team: 'Mercedes', points: 365 },
  { position: 2, driver: 'George Russell', team: 'Mercedes', points: 242 },
  { position: 3, driver: 'Lewis Hamilton', team: 'Ferrari', points: 241 },
  { position: 4, driver: 'Max Verstappen', team: 'Red Bull Racing', points: 236 },
  { position: 5, driver: 'Charles Leclerc', team: 'Ferrari', points: 233 },
]

export function StandingsWidget() {
  return (
    <Card className="glass-card p-6 bg-white/5 border-white/10 backdrop-blur-md mt-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-white">Championship Standings</h3>
        <span className="text-xs text-gray-400 bg-black/40 px-2 py-1 rounded-md border border-white/5">Round 19/24</span>
      </div>
      <div className="space-y-2">
        {standings.map((standing) => (
          <div 
            key={standing.position} 
            className="flex items-center justify-between p-3 rounded-xl bg-black/20 hover:bg-white/5 transition-colors border border-white/5 group"
          >
            <div className="flex items-center gap-4">
              <div className="w-8 text-center font-mono text-gray-500 group-hover:text-f1-red transition-colors">
                #{standing.position}
              </div>
              <div>
                <p className="font-semibold text-gray-200 text-sm">{standing.driver}</p>
                <p className="text-xs text-gray-500">{standing.team}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold text-white font-mono text-sm">
                {standing.points} <span className="text-[10px] text-gray-500 font-sans">PTS</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}