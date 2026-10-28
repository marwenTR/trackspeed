'use client'

import { Card } from '@/components/ui/card'
import { Gauge, Map, TrendingUp, Activity, Clock } from 'lucide-react'

interface TrackInfoProps {
  track: {
    name: string
    length: string
    turns: number
    drsZones: number
    topSpeed: string
    avgSpeed: string
    lapRecord: string
  }
}

export function TrackInfo({ track }: TrackInfoProps) {
  const specs = [
    { icon: Gauge, label: 'Track Length', value: track.length },
    { icon: Activity, label: 'Turns', value: track.turns },
    { icon: TrendingUp, label: 'DRS Zones', value: track.drsZones },
    { icon: Map, label: 'Top Speed', value: track.topSpeed },
    { icon: Activity, label: 'Average Speed', value: track.avgSpeed },
    { icon: Clock, label: 'Lap Record', value: track.lapRecord },
  ]

  return (
    <Card className="glass-card p-6">
      <h3 className="text-lg font-semibold mb-4">Track Information</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {specs.map((spec, idx) => (
          <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
            <spec.icon className="h-5 w-5 text-f1-red" />
            <div>
              <p className="text-xs text-white/40">{spec.label}</p>
              <p className="font-mono font-semibold">{spec.value}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}