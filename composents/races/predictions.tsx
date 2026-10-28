'use client'

import { Card } from '@/components/ui/card'
import { Award, Target } from 'lucide-react'
import { motion } from 'framer-motion'

interface PredictionsProps {
  predictions: {
    winner: { name: string; probability: number }
    podium: Array<{ name: string; probability: number }>
    fastestLap: { name: string; probability: number }
  }
}

export function Predictions({ predictions }: PredictionsProps) {
  return (
    <Card className="glass-card p-6">
      <h3 className="text-lg font-semibold mb-4">Race Predictions</h3>
      <div className="space-y-4">
        <div className="p-4 rounded-lg bg-gradient-to-r from-f1-red/20 to-transparent">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-f1-red" />
              <span className="font-semibold">Winner Prediction</span>
            </div>
            <span className="text-2xl font-bold">{predictions.winner.probability}%</span>
          </div>
          <p className="text-xl font-bold">{predictions.winner.name}</p>
          <div className="mt-2 h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${predictions.winner.probability}%` }}
              className="h-full bg-f1-red rounded-full"
            />
          </div>
        </div>

        <div>
          <p className="text-sm text-white/60 mb-2">Podium Predictions</p>
          <div className="space-y-2">
            {predictions.podium.map((driver, idx) => (
              <div key={idx} className="flex items-center justify-between p-2 rounded-lg bg-white/5">
                <div className="flex items-center gap-3">
                  <span className="text-f1-red font-bold">#{idx + 1}</span>
                  <span>{driver.name}</span>
                </div>
                <span className="text-sm text-white/60">{driver.probability}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
          <div className="flex items-center gap-2">
            <Target className="h-4 w-4 text-f1-red" />
            <span>Fastest Lap</span>
          </div>
          <div className="text-right">
            <p className="font-medium">{predictions.fastestLap.name}</p>
            <p className="text-xs text-white/40">{predictions.fastestLap.probability}% probability</p>
          </div>
        </div>
      </div>
    </Card>
  )
}