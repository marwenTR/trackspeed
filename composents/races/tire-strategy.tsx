'use client'

import { Card } from '@/components/ui/card'
import { Circle } from 'lucide-react'

interface TireStrategyProps {
  strategy: Array<{
    driver: string
    tires: Array<{ compound: string; laps: number }>
  }>
}

export function TireStrategy({ strategy }: TireStrategyProps) {
  const getTireColor = (compound: string) => {
    switch (compound.toLowerCase()) {
      case 'soft': return 'bg-red-500'
      case 'medium': return 'bg-yellow-500'
      case 'hard': return 'bg-white'
      default: return 'bg-gray-500'
    }
  }

  return (
    <Card className="glass-card p-6">
      <h3 className="text-lg font-semibold mb-4">Tire Strategy</h3>
      <div className="space-y-4">
        {strategy.map((driver, idx) => (
          <div key={idx} className="space-y-2">
            <p className="font-medium">{driver.driver}</p>
            <div className="flex gap-2">
              {driver.tires.map((tire, tireIdx) => (
                <div key={tireIdx} className="flex-1 p-2 rounded-lg bg-white/5 text-center">
                  <Circle className={`h-4 w-4 mx-auto mb-1 ${getTireColor(tire.compound)}`} />
                  <p className="text-xs font-mono">{tire.laps} laps</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}