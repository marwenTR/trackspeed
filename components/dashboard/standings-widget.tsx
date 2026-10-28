'use client'

import React from 'react'
import { Card } from '@/components/ui/card'

const standings = [
  { position: 1, driver: 'Max Verstappen', team: 'Red Bull Racing', points: 575 },
  { position: 2, driver: 'Sergio Perez', team: 'Red Bull Racing', points: 285 },
  { position: 3, driver: 'Lewis Hamilton', team: 'Mercedes', points: 234 },
  { position: 4, driver: 'Fernando Alonso', team: 'Aston Martin', points: 206 },
  { position: 5, driver: 'Charles Leclerc', team: 'Ferrari', points: 206 },
]

export function StandingsWidget() {
  return (
    <Card className="glass-card p-6 bg-white/5 border-white/10 backdrop-blur-md mt-6">
      <h3 className="text-lg font-semibold text-white mb-4">Championship Standings</h3>
      <div className="space-y-2">
        {standings.map((standing) => (
          <div 
            key={standing.position} 
            className="flex items-center justify-between p-3 rounded-xl bg-black/20 hover:bg-white/5 transition-colors border border-white/5 group"
          >
            <div className="flex items-center gap-4">
              {/* Position Number */}
              <div className="w-8 text-center font-mono text-gray-500 group-hover:text-f1-red transition-colors">
                #{standing.position}
              </div>
              
              {/* Driver Info */}
              <div>
                <p className="font-semibold text-gray-200 text-sm">{standing.driver}</p>
                <p className="text-xs text-gray-500">{standing.team}</p>
              </div>
            </div>

            {/* Points */}
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