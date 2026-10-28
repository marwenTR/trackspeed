'use client'

import { Card } from '@/components/ui/card'

const constructors = [
  { name: 'Red Bull Racing', points: 860, change: '+37' },
  { name: 'Mercedes', points: 409, change: '+18' },
  { name: 'Ferrari', points: 406, change: '+15' },
  { name: 'McLaren', points: 302, change: '+22' },
  { name: 'Aston Martin', points: 280, change: '+8' },
]

export function ConstructorRankings() {
  return (
    <Card className="glass-card p-6">
      <h3 className="text-lg font-semibold mb-4">Constructor Rankings</h3>
      <div className="space-y-3">
        {constructors.map((constructor, idx) => (
          <div key={idx} className="flex justify-between items-center p-2 hover:bg-white/5 rounded-lg transition-colors">
            <div className="flex items-center gap-3">
              <span className="text-sm text-white/40">#{idx + 1}</span>
              <span className="font-medium">{constructor.name}</span>
            </div>
            <div className="text-right">
              <div className="font-mono font-bold">{constructor.points} pts</div>
              <div className="text-xs text-green-500">{constructor.change}</div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}