'use client'

import React from 'react'
import { Card } from '@/components/ui/card'

const constructors = [
  { name: 'Mercedes', points: 607, change: '+29' },
  { name: 'Ferrari', points: 474, change: '+30' },
  { name: 'Red Bull Racing', points: 341, change: '+15' },
  { name: 'McLaren', points: 355, change: '+6' },
  { name: 'Williams', points: 12, change: '+0' },
]

export function ConstructorRankings() {
  return (
    <Card className="glass-card p-6 bg-white/5 border-white/10 backdrop-blur-md h-full">
      <h3 className="text-lg font-semibold text-white mb-4">Constructor Rankings</h3>
      <div className="space-y-2">
        {constructors.map((constructor, idx) => (
          <div key={idx} className="flex justify-between items-center p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
            <div className="flex items-center gap-4">
              <span className="text-sm font-mono text-gray-500">#{idx + 1}</span>
              <span className="font-semibold text-gray-200">{constructor.name}</span>
            </div>
            <div className="text-right">
              <div className="font-mono text-white font-bold text-sm">{constructor.points} <span className="text-[10px] text-gray-500">PTS</span></div>
              <div className="text-xs text-green-400 font-medium">{constructor.change}</div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}