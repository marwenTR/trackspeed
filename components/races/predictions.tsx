'use client'

import React from 'react'
import { Award, Target } from 'lucide-react'
import { motion } from 'framer-motion'

export function Predictions({ predictions }: any) {
  return (
    <div className="glass-card bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl">
      <h3 className="text-lg font-semibold text-white mb-4">Race Predictions</h3>
      <div className="space-y-4">
        
        {/* Winner */}
        <div className="p-4 rounded-xl bg-gradient-to-r from-f1-red/20 to-transparent border border-f1-red/20">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-f1-red" />
              <span className="text-sm font-semibold text-white">Winner</span>
            </div>
            <span className="text-xl font-bold text-white">{predictions.winner.probability}%</span>
          </div>
          <p className="text-lg font-bold text-white mb-2">{predictions.winner.name}</p>
          <div className="h-1.5 bg-black/50 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${predictions.winner.probability}%` }}
              className="h-full bg-f1-red rounded-full"
            />
          </div>
        </div>

        {/* Podium */}
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Podium Predictions</p>
          <div className="space-y-2">
            {predictions.podium.map((driver: any, idx: number) => (
              <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-black/30 border border-white/5">
                <div className="flex items-center gap-3">
                  <span className="text-f1-red font-bold text-sm">#{idx + 1}</span>
                  <span className="text-sm text-gray-200">{driver.name}</span>
                </div>
                <span className="text-xs font-mono text-gray-400">{driver.probability}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Fastest Lap */}
        <div className="flex items-center justify-between p-3 rounded-xl bg-black/30 border border-white/5">
          <div className="flex items-center gap-2">
            <Target className="h-4 w-4 text-f1-red" />
            <span className="text-sm text-gray-300">Fastest Lap</span>
          </div>
          <div className="text-right">
            <p className="text-sm font-bold text-white">{predictions.fastestLap.name}</p>
            <p className="text-[10px] text-gray-500">{predictions.fastestLap.probability}% probability</p>
          </div>
        </div>
      </div>
    </div>
  )
}