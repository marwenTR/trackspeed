import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { drivers } from '@/data/drivers'
import { useUserStatsStore } from './userStatsStore'

interface MarketState {
  balance: number
  portfolio: Record<string, number>
  buyStock: (driverId: string) => void
  sellStock: (driverId: string) => void
  calculateTotalValue: () => number
  resetAccount: () => void
}

export const useMarketStore = create<MarketState>()(
  persist(
    (set, get) => ({
      balance: 1000000,
      portfolio: {},

      buyStock: (driverId: string) => {
        const driver = drivers.find(d => d.id === driverId)
        if (!driver) return

        if (get().balance < driver.value) {
          alert("Insufficient funds!")
          return
        }

        set((state) => ({
          balance: state.balance - driver.value,
          portfolio: {
            ...state.portfolio,
            [driverId]: (state.portfolio[driverId] || 0) + 1
          }
        }))

        useUserStatsStore.getState().recordTrade({
          driverId: driver.id,
          driverName: driver.name,
          action: 'BUY',
          price: driver.value
        })
      },

      sellStock: (driverId: string) => {
        const driver = drivers.find(d => d.id === driverId)
        if (!driver) return

        const currentShares = get().portfolio[driverId] || 0
        if (currentShares === 0) {
          alert("You don't own any shares!")
          return
        }

        set((state) => ({
          balance: state.balance + driver.value,
          portfolio: {
            ...state.portfolio,
            [driverId]: state.portfolio[driverId] - 1
          }
        }))

        useUserStatsStore.getState().recordTrade({
          driverId: driver.id,
          driverName: driver.name,
          action: 'SELL',
          price: driver.value
        })
      },

      calculateTotalValue: () => {
        const { balance, portfolio } = get()
        let portfolioValue = 0
        Object.keys(portfolio).forEach((driverId) => {
          const driver = drivers.find(d => d.id === driverId)
          if (driver) portfolioValue += driver.value * portfolio[driverId]
        })
        return balance + portfolioValue
      },

      resetAccount: () => {
        set({ balance: 1000000, portfolio: {} })
      }
    }),
    { name: 'trackspeed-market-storage' }
  )
)