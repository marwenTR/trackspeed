'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { User, TrendingUp, DollarSign, Wallet, History, ArrowRight, Award, Activity, RotateCcw } from 'lucide-react'
import { Navigation } from '@/components/layout/navigation'
import { useMarketStore } from '@/store/marketStore'
import { useUserStatsStore } from '@/store/userStatsStore'
import { useAuth } from '@/hooks/useAuth'

export default function ProfilePage() {
  const [isMounted, setIsMounted] = useState(false)
  const { user } = useAuth()
  const { calculateTotalValue, resetAccount } = useMarketStore()
  const { username, totalTrades, profitableTrades, trades, resetStats } = useUserStatsStore()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  const totalValue = calculateTotalValue()
  const profit = totalValue - 1000000
  const winRate = totalTrades > 0 ? (profitableTrades / totalTrades) * 100 : 0

  const formatMoney = (amount: number) => `$${Math.round(amount).toLocaleString()}`

  const handleReset = () => {
    if (confirm('Are you sure? This will reset your portfolio and trade history.')) {
      resetAccount()
      resetStats()
    }
  }

  return (
    <div className="relative min-h-screen bg-alive overflow-hidden">
      <Navigation />
      <div className="container mx-auto px-6 pt-28 pb-20 relative z-10 max-w-5xl">
        
        {/* Profile Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <div className="flex flex-wrap items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-f1-red to-red-700 flex items-center justify-center shadow-[0_0_30px_rgba(225,6,0,0.3)]">
              <User className="h-12 w-12 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-400 uppercase tracking-widest">Trader Profile</p>
              <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter italic">{username}</h1>
              <p className="text-sm text-gray-500 mt-1">{user?.email || 'demo@trackspeed.com'}</p>
            </div>
            <button 
              onClick={handleReset}
              className="flex items-center gap-2 text-xs text-gray-500 hover:text-red-400 transition-colors border border-white/10 hover:border-red-500/30 px-3 py-2 rounded-lg"
            >
              <RotateCcw className="h-3 w-3" /> Reset Account
            </button>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {[
            { icon: DollarSign, label: 'Portfolio Value', value: formatMoney(totalValue), color: 'text-white' },
            { icon: TrendingUp, label: 'Total P&L', value: `${profit >= 0 ? '+' : ''}${formatMoney(profit)}`, color: profit >= 0 ? 'text-green-400' : 'text-red-400' },
            { icon: Activity, label: 'Total Trades', value: totalTrades.toString(), color: 'text-white' },
            { icon: Award, label: 'Win Rate', value: `${winRate.toFixed(0)}%`, color: 'text-white' },
          ].map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: idx * 0.1 }}
              className="glass-card bg-white/5 border border-white/10 backdrop-blur-md p-5 rounded-2xl"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                  <stat.icon className="h-5 w-5 text-f1-red" />
                </div>
              </div>
              <div className={`text-2xl font-black font-mono ${stat.color}`}>{stat.value}</div>
              <div className="text-xs text-gray-500 mt-1 uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Quick Links */}
        <div className="grid gap-4 sm:grid-cols-3 mb-8">
          <Link href="/dashboard">
            <div className="glass-card bg-white/5 border border-white/10 hover:border-f1-red/30 p-4 rounded-xl flex justify-between items-center group transition-colors cursor-pointer">
              <span className="text-white font-bold">Dashboard</span>
              <ArrowRight className="h-4 w-4 text-gray-500 group-hover:text-f1-red group-hover:translate-x-1 transition-all" />
            </div>
          </Link>
          <Link href="/market">
            <div className="glass-card bg-white/5 border border-white/10 hover:border-f1-red/30 p-4 rounded-xl flex justify-between items-center group transition-colors cursor-pointer">
              <span className="text-white font-bold">Market</span>
              <ArrowRight className="h-4 w-4 text-gray-500 group-hover:text-f1-red group-hover:translate-x-1 transition-all" />
            </div>
          </Link>
          <Link href="/leaderboard">
            <div className="glass-card bg-white/5 border border-white/10 hover:border-f1-red/30 p-4 rounded-xl flex justify-between items-center group transition-colors cursor-pointer">
              <span className="text-white font-bold">Leaderboard</span>
              <ArrowRight className="h-4 w-4 text-gray-500 group-hover:text-f1-red group-hover:translate-x-1 transition-all" />
            </div>
          </Link>
        </div>

        {/* Trade History */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.4 }}
          className="glass-card bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl overflow-hidden"
        >
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <History className="h-5 w-5 text-f1-red" />
              <h2 className="text-lg font-bold text-white uppercase italic">Trade History</h2>
            </div>
            <span className="text-xs text-gray-500">{trades.length} transactions</span>
          </div>
          
          {trades.length === 0 ? (
            <div className="p-12 text-center">
              <Wallet className="h-12 w-12 text-gray-600 mx-auto mb-3" />
              <p className="text-gray-500 text-sm">No trades yet. Head to the market to start trading!</p>
              <Link href="/market">
                <button className="mt-4 bg-f1-red hover:bg-red-700 text-white text-sm font-bold px-6 py-2 rounded-lg">
                  Go to Market
                </button>
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-xs text-gray-500 uppercase tracking-wider border-b border-white/5 bg-black/20">
                    <th className="px-6 py-4 font-medium">Date</th>
                    <th className="px-6 py-4 font-medium">Driver</th>
                    <th className="px-6 py-4 font-medium">Action</th>
                    <th className="px-6 py-4 font-medium text-right">Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {trades.map((trade) => (
                    <tr key={trade.id} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-400 font-mono">
                        {new Date(trade.timestamp).toLocaleString('en-GB', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })}
                      </td>
                      <td className="px-6 py-4 text-sm font-bold text-white">{trade.driverName}</td>
                      <td className="px-6 py-4">
                        <span className={`text-xs font-bold px-2 py-1 rounded ${trade.action === 'BUY' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-red-500/20 text-red-400 border border-red-500/30'}`}>
                          {trade.action}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right text-sm font-mono font-bold text-white">
                        ${trade.price.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </motion.div>

      </div>
    </div>
  )
}