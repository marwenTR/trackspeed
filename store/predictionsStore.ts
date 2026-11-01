import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { raceResults } from '@/data/race-results'

export interface Prediction {
  raceId: string
  raceName: string
  p1: string
  p2: string
  p3: string
  timestamp: string
  score?: number
}

interface PredictionsState {
  predictions: Record<string, Prediction>
  totalPoints: number
  savePrediction: (prediction: Omit<Prediction, 'timestamp' | 'score'>) => void
  scorePrediction: (raceId: string) => void
  recalcAllScores: () => void
  resetPredictions: () => void
}

const calculateScore = (prediction: Prediction): number => {
  const result = raceResults[prediction.raceId]
  if (!result) return 0

  let score = 0
  const userPodium = [prediction.p1, prediction.p2, prediction.p3]
  const realPodium = [result.p1, result.p2, result.p3]

  // 25 points for correct winner (P1)
  if (userPodium[0] === realPodium[0]) score += 25

  // 10 points for each correctly predicted podium driver (any position)
  userPodium.forEach((driver, idx) => {
    if (idx > 0 && realPodium.includes(driver)) score += 10
  })

  // 20 bonus for exact podium order
  if (userPodium[0] === realPodium[0] && 
      userPodium[1] === realPodium[1] && 
      userPodium[2] === realPodium[2]) {
    score += 20
  }

  return score
}

export const usePredictionsStore = create<PredictionsState>()(
  persist(
    (set, get) => ({
      predictions: {},
      totalPoints: 0,

      savePrediction: (prediction) => {
        const newPrediction: Prediction = {
          ...prediction,
          timestamp: new Date().toISOString()
        }
        newPrediction.score = calculateScore(newPrediction)

        set((state) => {
          const newPredictions = {
            ...state.predictions,
            [prediction.raceId]: newPrediction
          }
          const newTotal = Object.values(newPredictions).reduce(
            (sum, p) => sum + (p.score || 0), 0
          )
          return {
            predictions: newPredictions,
            totalPoints: newTotal
          }
        })
      },

      scorePrediction: (raceId) => {
        const prediction = get().predictions[raceId]
        if (!prediction) return

        const score = calculateScore(prediction)
        set((state) => {
          const newPredictions = {
            ...state.predictions,
            [raceId]: { ...prediction, score }
          }
          const newTotal = Object.values(newPredictions).reduce(
            (sum, p) => sum + (p.score || 0), 0
          )
          return {
            predictions: newPredictions,
            totalPoints: newTotal
          }
        })
      },

      recalcAllScores: () => {
        const { predictions } = get()
        const newPredictions = { ...predictions }
        let total = 0

        Object.keys(newPredictions).forEach((raceId) => {
          const score = calculateScore(newPredictions[raceId])
          newPredictions[raceId] = { ...newPredictions[raceId], score }
          total += score
        })

        set({ predictions: newPredictions, totalPoints: total })
      },

      resetPredictions: () => set({ predictions: {}, totalPoints: 0 })
    }),
    { name: 'trackspeed-predictions-storage' }
  )
)