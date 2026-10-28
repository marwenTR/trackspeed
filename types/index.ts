export interface Driver {
  id: string
  name: string
  number: number
  team: string
  value: number
  change: number
  image: string
}

export interface User {
  id: string
  email: string
  name?: string
}

export interface Race {
  id: string
  name: string
  circuit: string
  date: string
  time: string
  country: string
  round: number
}

export interface Portfolio {
  drivers: Record<string, { shares: number; avgPrice: number }>
  totalValue: number
}

export interface Transaction {
  id: string
  driverId: string
  type: 'buy' | 'sell'
  price: number
  shares: number
  timestamp: Date
}