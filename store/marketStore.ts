import { create } from 'zustand'
import { drivers } from '@/data/drivers'

interface MarketState {
  portfolio: { drivers: Record<string, { shares: number; avgPrice: number }>; totalValue: number }
  balance: number
  buyStock: (driverId: string) => void
  sellStock: (driverId: string) => void
  updatePrices: () => void
}

export const useMarketStore = create<MarketState>((set, get) => ({
  portfolio: { drivers: {}, totalValue: 0 },
  balance: 100000,
  
  buyStock: (driverId: string) => {
    const driver = drivers.find(d => d.id === driverId)
    if (!driver) return
    
    set((state) => {
      const currentShares = state.portfolio.drivers?.[driverId]?.shares || 0
      const cost = driver.value
      
      if (state.balance < cost) return state
      
      const newDrivers = {
        ...state.portfolio.drivers,
        [driverId]: { shares: currentShares + 1, avgPrice: driver.value }
      }
      
      const totalValue = Object.values(newDrivers).reduce((sum, d) => sum + (d.shares * driver.value), 0)
      
      return {
        balance: state.balance - cost,
        portfolio: { drivers: newDrivers, totalValue }
      }
    })
  },
  
  sellStock: (driverId: string) => {
    const driver = drivers.find(d => d.id === driverId)
    if (!driver) return
    
    set((state) => {
      const currentShares = state.portfolio.drivers?.[driverId]?.shares || 0
      if (currentShares === 0) return state
      
      const newDrivers = { ...state.portfolio.drivers }
      if (currentShares === 1) {
        delete newDrivers[driverId]
      } else {
        newDrivers[driverId] = { shares: currentShares - 1, avgPrice: state.portfolio.drivers[driverId].avgPrice }
      }
      
      const totalValue = Object.values(newDrivers).reduce((sum, d) => sum + (d.shares * driver.value), 0)
      
      return {
        balance: state.balance + driver.value,
        portfolio: { drivers: newDrivers, totalValue }
      }
    })
  },
  
  updatePrices: () => {
    // Simulate real-time price updates
    set((state) => {
      const newDrivers = { ...state.portfolio.drivers }
      const totalValue = Object.values(newDrivers).reduce((sum, d) => {
        const driver = drivers.find(drv => drv.id === Object.keys(newDrivers).find(id => newDrivers[id] === d))
        return sum + (d.shares * (driver?.value || 0))
      }, 0)
      
      return { portfolio: { ...state.portfolio, totalValue } }
    })
  }
}))