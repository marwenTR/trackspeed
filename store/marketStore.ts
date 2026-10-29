import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { drivers } from '@/data/drivers'

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
      balance: 1000000, // NEW STARTING BALANCE
      portfolio: {},

      buyStock: (driverId: string) => {
        const driver = drivers.find(d => d.id === driverId)
        if (!driver) return

        const currentBalance = get().balance
        const price = driver.value

        if (currentBalance < price) {
          alert("Insufficient funds! You don't have enough cash.")
          return
        }

        set((state) => ({
          balance: state.balance - price,
          portfolio: {
            ...state.portfolio,
            [driverId]: (state.portfolio[driverId] || 0) + 1
          }
        }))
      },

      sellStock: (driverId: string) => {
        const driver = drivers.find(d => d.id === driverId)
        if (!driver) return

        const currentShares = get().portfolio[driverId] || 0
        if (currentShares === 0) {
          alert("You don't own any shares of this driver!")
          return
        }

        set((state) => ({
          balance: state.balance + driver.value,
          portfolio: {
            ...state.portfolio,
            [driverId]: state.portfolio[driverId] - 1
          }
        }))
      },

      calculateTotalValue: () => {
        const { balance, portfolio } = get()
        let portfolioValue = 0
        
        Object.keys(portfolio).forEach((driverId) => {
          const driver = drivers.find(d => d.id === driverId)
          if (driver) {
            portfolioValue += driver.value * portfolio[driverId]
          }
        })

        return balance + portfolioValue
      },

      resetAccount: () => {
        set({ balance: 1000000, portfolio: {} })
      }
    }),
    {
      name: 'trackspeed-market-storage',
    }
  )
)