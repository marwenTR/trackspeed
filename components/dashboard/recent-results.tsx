'use client'

import React from 'react'
import { Card } from '@/components/ui/card'

const results = [
  { race: 'Abu Dhabi GP', winner: 'Max Verstappen', pole: 'Max Verstappen' },
  { race: 'Las Vegas GP', winner: 'Max Verstappen', pole: 'Charles Leclerc' },
  { race: 'Sao Paulo GP', winner: 'Max Verstappen', pole: 'Max Verstappen' },
  { race: 'Mexico City GP', winner: 'Max Verstappen', pole: 'Charles Leclerc' },
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
              <span className="text-[11px] font-medium text-f1-red bg-f1-red/10 border border-f1-red/20 px-2 py-0.5 rounded-md">
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