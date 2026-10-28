'use client'

import React from 'react'
import { Card } from '@/components/ui/card'

const results = [
  { race: 'United States GP', winner: 'Kimi Antonelli', pole: 'Kimi Antonelli' },
  { race: 'Singapore GP', winner: 'Lando Norris', pole: 'Lando Norris' },
  { race: 'Azerbaijan GP', winner: 'Charles Leclerc', pole: 'Charles Leclerc' },
  { race: 'Madrid GP', winner: 'George Russell', pole: 'Kimi Antonelli' },
]

export function RecentResults() {
  return (
    <Card className="glass-card p-6 bg-white/5 border-white/10 backdrop-blur-md">
      <h3 className="text-lg font-semibold text-white mb-4">Recent Results</h3>
      <div className="space-y-3">
        {results.map((result, idx) => (
          <div key={idx} className="p-3 rounded-xl hover:bg-white/5 transition-colors border border-white/5">
            <div className="flex justify-between items-start mb-1">
              <span className="font-semibold text-gray-200 text-sm">{result.race}</span>
              <span className="text-[10px] font-medium text-f1-red bg-f1-red/10 border border-f1-red/20 px-2 py-0.5 rounded-md">
                {result.winner}
              </span>
            </div>
            <div className="text-xs text-gray-500 mt-1">Pole: {result.pole}</div>
          </div>
        ))}
      </div>
    </Card>
  )
}