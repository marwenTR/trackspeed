'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Trophy, Medal, TrendingUp, User, Star, Target } from 'lucide-react'
import { Navigation } from '@/components/layout/navigation'
import { useMarketStore } from '@/store/marketStore'
import { useUserStatsStore } from '@/store/userStatsStore'
import { usePredictionsStore } from '@/store/predictionsStore'

const fakeTraders = [
  { rank: 1, name: "AlexV", value: 245678, change: 23.4, trades: 156, points: 125, isUser: false },
  { rank: 2, name: "F1TraderPro", value: 198234, change: 18.2, trades: 142, points: 95, isUser: false },
  { rank: 3, name: "RacingKing", value: 187456, change: 15.7, trades: 128, points: 78, isUser: false },
  { rank: 4, name: "SpeedMaster", value: 165789, change: 12.3, trades: 115, points: 60, isUser: false },
  { rank: 5, name: "PolePosition", value: 154321, change: 11.8, trades: 108, points: 45, isUser: false },
]

export default function LeaderboardPage() {
  const [isMounted, setIsMounted] = useState(false)
  const { calculateTotalValue } = useMarketStore()
  const { username, totalTrades } = useUserStatsStore()
  const { totalPoints, recalcAllScores } = usePredictionsStore()

  useEffect(() => {
    setIsMounted(true)
    // Recalculate scores on mount in case race results have updated
    recalcAllScores()
  }, [recalcAllScores])

  // Build the combined leaderboard
  const userValue = isMounted ? calculateTotalValue() : 1000000
  const userChange = isMounted ? ((userValue - 1000000) / 1000000) * 100 : 0
  const userPoints = isMounted ? totalPoints : 0

  const userEntry = {
    rank: 0,
    name: username || 'You',
    value: userValue,
    change: userChange,
    trades: totalTrades,
    points: userPoints,
    isUser: true
  }

  // NEW SORTING: Value + (Points * 10000)
  // This makes 1 prediction point worth $10,000 in portfolio value.
  const allTraders = [...fakeTraders, userEntry]
    .sort((a, b) => {
      const scoreA = a.value + (a.points * 10000)
      const scoreB = b.value + (b.points * 10000)
      return scoreB - scoreA
    })
    .map((trader, idx) => ({ ...trader, rank: idx + 1 }))

  const userRank = allTraders.findIndex(t => t.isUser) + 1

  // Safe formatting helper
  const formatMoney = (amount: number) => {
    return isMounted ? `$${Math.round(amount).toLocaleString()}` : `$${Math.round(amount)}`
  }

  return (
    <div className="relative min-h-screen bg-alive overflow-hidden">
      <Navigation />
      <div className="container mx-auto px-6 pt-28 pb-20 relative z-10">
        
        {/* HEADER */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-2xl mb-4">
            <Trophy className="h-8 w-8 text-yellow-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Global <span className="text-f1-red">Leaderboard</span>
          </h1>
          <p className="mt-3 text-gray-400 text-sm max-w-md mx-auto">
            You are ranked <span className="text-f1-red font-bold">#{isMounted ? userRank : '...'}</span> out of {allTraders.length} traders.
          </p>
        </motion.div>

        {/* PODIUM */}
        <div className="flex flex-col md:flex-row items-end justify-center gap-4 mb-10 mt-16">
          {[1, 0, 2].map((rankIndex) => {
            const trader = allTraders[rankIndex]
            if (!trader) return null;
            const isFirst = trader.rank === 1
            
            return (
              <motion.div 
                key={trader.name}
                initial={{ opacity: 0, y: 50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: rankIndex * 0.1 }} 
                className={`w-full ${isFirst ? 'md:w-72 order-1 md:order-2' : 'md:w-64 order-2 md:order-1'}`}
              >
                <div className={`glass-card backdrop-blur-md p-6 rounded-2xl text-center relative ${
                  isFirst 
                    ? 'bg-gradient-to-b from-yellow-500/10 to-transparent border-yellow-500/30 shadow-[0_0_30px_rgba(234,179,8,0.15)]' 
                    : 'bg-white/5 border-white/10'
                } ${trader.isUser ? 'ring-2 ring-f1-red/50' : ''}`}>
                  
                  <div className={`absolute -top-6 left-1/2 -translate-x-1/2 h-12 w-12 rounded-full flex items-center justify-center shadow-lg ${
                    isFirst ? 'bg-yellow-500 shadow-yellow-500/40 border border-yellow-300' : 
                    trader.rank === 2 ? 'bg-gray-800 border-2 border-gray-500 shadow-gray-500/20' : 
                    'bg-amber-900/50 border-2 border-amber-700 shadow-amber-700/20'
                  }`}>
                    {isFirst ? <Trophy className="h-6 w-6 text-black" /> : <Medal className="h-6 w-6 text-gray-300" />}
                  </div>

                  <div className="mt-8">
                    {trader.isUser && <Star className="h-4 w-4 text-f1-red mx-auto mb-1 fill-f1-red" />}
                    <p className={`text-sm font-medium ${trader.isUser ? 'text-f1-red' : 'text-gray-400'}`}>{trader.name}</p>
                    <p className={`font-black mt-1 ${isFirst ? 'text-3xl text-white' : 'text-2xl text-white'}`}>
                      {formatMoney(trader.value)}
                    </p>
                    <p className={`text-xs mt-1 font-medium ${trader.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {isMounted ? `${trader.change >= 0 ? '+' : ''}${trader.change.toFixed(1)}%` : '...'}
                    </p>
                    {/* NEW: Prediction Points on Podium */}
                    <div className="mt-3 inline-flex items-center gap-1.5 bg-yellow-500/10 border border-yellow-500/20 px-2 py-1 rounded-md">
                      <Target className="h-3 w-3 text-yellow-500" />
                      <span className="text-[10px] font-bold text-yellow-500">{trader.points} PTS</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* TABLE */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">Season 2026 Rankings</h2>
            <span className="text-xs text-gray-400 bg-black/40 px-3 py-1 rounded-full border border-white/5">{allTraders.length} Traders</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-xs text-gray-500 uppercase tracking-wider border-b border-white/5 bg-black/20">
                  <th className="px-6 py-4 font-medium">Rank</th>
                  <th className="px-6 py-4 font-medium">Trader</th>
                  <th className="px-6 py-4 font-medium text-right">Portfolio Value</th>
                  <th className="px-6 py-4 font-medium text-right">Return</th>
                  <th className="px-6 py-4 font-medium text-right">Trades</th>
                  {/* NEW: Prediction Points Column */}
                  <th className="px-6 py-4 font-medium text-right text-yellow-500/70">Pred. Pts</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {allTraders.map((trader) => (
                  <tr key={trader.name} className={`transition-colors group ${trader.isUser ? 'bg-f1-red/5 hover:bg-f1-red/10' : 'hover:bg-white/5'}`}>
                    <td className="px-6 py-4">
                      <span className={`font-mono ${trader.isUser ? 'text-f1-red font-bold' : 'text-gray-400'}`}>
                        #{trader.rank}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`h-8 w-8 rounded-full flex items-center justify-center border ${trader.isUser ? 'bg-f1-red/20 border-f1-red/30' : 'bg-white/10 border-white/5'}`}>
                          <User className={`h-4 w-4 ${trader.isUser ? 'text-f1-red' : 'text-gray-300'}`} />
                        </div>
                        <span className={`font-medium ${trader.isUser ? 'text-f1-red' : 'text-white'}`}>
                          {trader.name} {trader.isUser && '(You)'}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right font-mono font-bold text-white">
                      {formatMoney(trader.value)}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className={`flex items-center justify-end gap-1 font-medium text-sm ${trader.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                        <TrendingUp className="h-3 w-3" />
                        {isMounted ? `${trader.change >= 0 ? '+' : ''}${trader.change.toFixed(1)}%` : '...'}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right font-mono text-gray-400">{trader.trades}</td>
                    {/* NEW: Prediction Points Cell */}
                    <td className="px-6 py-4 text-right">
                      <span className="inline-flex items-center gap-1 font-mono font-bold text-yellow-400 bg-yellow-500/10 px-2 py-1 rounded border border-yellow-500/20 text-xs">
                        <Target className="h-3 w-3" />
                        {trader.points}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  )
}