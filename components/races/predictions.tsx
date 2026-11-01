'use client'

import React, { useState, useEffect } from 'react'
import { Lock, CheckCircle2, RotateCcw, Target, Brain, Trophy } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { driverProfiles } from '@/data/driver-profiles'
import { predictPodium } from '@/lib/prediction-engine'
import { usePredictionsStore } from '@/store/predictionsStore'
import { raceResults } from '@/data/race-results'

interface PredictionsProps {
  raceId?: string
  raceName?: string
  raceStatus?: string
}

export function Predictions({ raceId = 'default', raceName = 'Next Race', raceStatus = 'upcoming' }: PredictionsProps) {
  const [prediction, setPrediction] = useState({ p1: '', p2: '', p3: '' })
  const [isMounted, setIsMounted] = useState(false)

  const { predictions, savePrediction } = usePredictionsStore()
  const existingPrediction = predictions[raceId]

  useEffect(() => {
    setIsMounted(true)
    if (existingPrediction) {
      setPrediction({ p1: existingPrediction.p1, p2: existingPrediction.p2, p3: existingPrediction.p3 })
    }
  }, [existingPrediction])

  const isLocked = !!existingPrediction
  const isFinished = raceStatus === 'finished' || !!raceResults[raceId]

  const handleSubmit = () => {
    const picks = [prediction.p1, prediction.p2, prediction.p3]
    if (picks.some(p => p === '') || new Set(picks).size !== 3) {
      alert('Please select 3 unique drivers for the podium!')
      return
    }
    savePrediction({ raceId, raceName, ...prediction })
  }

  const handleReset = () => {
    setPrediction({ p1: '', p2: '', p3: '' })
  }

  if (!isMounted) return null

  const aiPodium = predictPodium(raceId)
  const allDriverNames = Object.values(driverProfiles).map((d: any) => d.name)
  const realResult = raceResults[raceId]

  return (
    <div className="glass-card bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-40 h-40 bg-f1-red/10 rounded-full blur-[60px] pointer-events-none" />

      {/* AI PREDICTION */}
      <div className="relative z-10 mb-6 bg-black/30 border border-f1-red/20 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-3">
          <Brain className="h-5 w-5 text-f1-red" />
          <span className="text-xs font-bold text-f1-red uppercase tracking-widest">AI Agent Prediction</span>
          <span className="text-[9px] text-gray-500 ml-auto">{raceName}</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {aiPodium.map((pick, idx) => (
            <div key={idx} className="text-center">
              <div className="text-[10px] text-gray-500 font-bold mb-1">{idx === 0 ? '🥇 P1' : idx === 1 ? '🥈 P2' : '🥉 P3'}</div>
              <div className="text-xs font-bold text-white truncate">{pick.driver.split(' ').slice(1).join(' ')}</div>
              <div className="text-[10px] font-mono" style={{ color: pick.color }}>{pick.score.toFixed(1)} pts</div>
            </div>
          ))}
        </div>
      </div>

      {/* YOUR PREDICTION */}
      <div className="relative z-10 flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Target className="h-5 w-5 text-f1-red" />
            <span className="text-[10px] text-f1-red uppercase tracking-widest font-bold">Your Prediction</span>
          </div>
          <h3 className="text-xl font-black text-white uppercase italic tracking-tight">{raceName}</h3>
        </div>
        {isLocked && !isFinished && (
          <div className="flex items-center gap-1 text-xs font-bold text-green-400 bg-green-500/10 px-2 py-1 rounded-md border border-green-500/20">
            <Lock className="h-3 w-3" /> LOCKED
          </div>
        )}
        {isFinished && existingPrediction && (
          <div className="flex items-center gap-1 text-xs font-bold text-yellow-400 bg-yellow-500/10 px-2 py-1 rounded-md border border-yellow-500/20">
            <Trophy className="h-3 w-3" /> +{existingPrediction.score || 0} PTS
          </div>
        )}
      </div>

      {/* Real Result (if finished) */}
      {isFinished && realResult && (
        <div className="relative z-10 mb-4 bg-green-500/5 border border-green-500/20 rounded-xl p-3">
          <p className="text-[10px] text-green-400 uppercase font-bold mb-2">Actual Result</p>
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div><span className="text-gray-500">P1:</span> <span className="text-white font-bold">{realResult.p1}</span></div>
            <div><span className="text-gray-500">P2:</span> <span className="text-white font-bold">{realResult.p2}</span></div>
            <div><span className="text-gray-500">P3:</span> <span className="text-white font-bold">{realResult.p3}</span></div>
          </div>
        </div>
      )}

      <div className="relative z-10 space-y-3 mb-6">
        {[
          { key: 'p1' as const, label: 'P1 (Winner)', color: 'text-yellow-400' },
          { key: 'p2' as const, label: 'P2', color: 'text-gray-300' },
          { key: 'p3' as const, label: 'P3', color: 'text-amber-600' },
        ].map((slot) => (
          <div key={slot.key} className="flex items-center gap-3">
            <div className="w-20 shrink-0"><span className={`text-xs font-bold uppercase ${slot.color}`}>{slot.label}</span></div>
            <div className="flex-1">
              <select
                value={prediction[slot.key]}
                onChange={(e) => setPrediction({ ...prediction, [slot.key]: e.target.value })}
                disabled={isLocked}
                className={`w-full bg-black/40 border border-white/10 text-white text-sm rounded-lg px-3 py-2.5 focus:outline-none focus:border-f1-red transition-colors ${isLocked ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer hover:border-white/30'}`}
              >
                <option value="" disabled>Select Driver</option>
                {allDriverNames.map(driver => (
                  <option key={driver} value={driver} className="bg-[#111620]">{driver}</option>
                ))}
              </select>
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10 flex gap-2">
        {!isLocked ? (
          <Button onClick={handleSubmit} className="flex-1 bg-f1-red hover:bg-red-700 text-white font-bold rounded-lg h-10">
            <CheckCircle2 className="mr-2 h-4 w-4" /> Lock In Prediction
          </Button>
        ) : (
          !isFinished && (
            <Button onClick={handleReset} variant="outline" className="flex-1 border-white/10 bg-white/5 hover:bg-white/10 text-white rounded-lg h-10">
              <RotateCcw className="mr-2 h-4 w-4" /> Change Prediction
            </Button>
          )
        )}
      </div>
    </div>
  )
}