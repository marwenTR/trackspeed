import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface Trade {
  id: string
  driverId: string
  driverName: string
  action: 'BUY' | 'SELL'
  price: number
  timestamp: string
}

interface UserStatsState {
  username: string
  totalTrades: number
  profitableTrades: number
  trades: Trade[]
  startingBalance: number
  setUsername: (name: string) => void
  recordTrade: (trade: Omit<Trade, 'id' | 'timestamp'>) => void
  resetStats: () => void
}

export const useUserStatsStore = create<UserStatsState>()(
  persist(
    (set) => ({
      username: 'Racer',
      totalTrades: 0,
      profitableTrades: 0,
      trades: [],
      startingBalance: 1000000,

      setUsername: (name: string) => set({ username: name }),

      // FIXED: Added explicit types to `state` so TypeScript doesn't infer 'trade' as 'any'
      recordTrade: (trade: Omit<Trade, 'id' | 'timestamp'>) => set((state: UserStatsState) => ({
        totalTrades: (state.totalTrades || 0) + 1,
        profitableTrades: trade.action === 'SELL' 
          ? (state.profitableTrades || 0) + 1 
          : (state.profitableTrades || 0),
        trades: [
          {
            ...trade,
            id: `trade_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            timestamp: new Date().toISOString()
          },
          ...(state.trades || [])
        ].slice(0, 100)
      })),

      resetStats: () => set({ totalTrades: 0, profitableTrades: 0, trades: [] })
    }),
    { 
      name: 'trackspeed-user-stats',
      merge: (persisted: any, current: any) => ({
        ...current,
        ...persisted,
        trades: persisted?.trades || [],
        totalTrades: persisted?.totalTrades || 0,
        profitableTrades: persisted?.profitableTrades || 0,
      })
    }
  )
)