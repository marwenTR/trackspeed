'use client'

import { Card } from '@/components/ui/card'

const drivers = [
  { name: 'Max Verstappen', points: 575, change: '+25' },
  { name: 'Sergio Perez', points: 285, change: '+12' },
  { name: 'Lewis Hamilton', points: 234, change: '+8' },
  { name: 'Fernando Alonso', points: 206, change: '+5' },
  { name: 'Charles Leclerc', points: 206, change: '+10' },
]

export function DriverRankings() {
  return (
    <Card className="glass-card p-6">
      <h3 className="text-lg font-semibold mb-4">Driver Rankings</h3>
      <div className="space-y-3">
        {drivers.map((driver, idx) => (
          <div key={idx} className="flex justify-between items-center p-2 hover:bg-white/5 rounded-lg transition-colors">
            <div className="flex items-center gap-3">
              <span className="text-sm text-white/40">#{idx + 1}</span>
              <span className="font-medium">{driver.name}</span>
            </div>
            <div className="text-right">
              <div className="font-mono font-bold">{driver.points} pts</div>
              <div className="text-xs text-green-500">{driver.change}</div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}