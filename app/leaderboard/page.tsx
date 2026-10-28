'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Trophy, Medal, TrendingUp, User } from 'lucide-react'
import { Navigation } from '@/components/layout/navigation'

const topTraders = [
  { rank: 1, name: "AlexV", value: "$245,678", change: "+23.4%", trades: 156 },
  { rank: 2, name: "F1TraderPro", value: "$198,234", change: "+18.2%", trades: 142 },
  { rank: 3, name: "RacingKing", value: "$187,456", change: "+15.7%", trades: 128 },
  { rank: 4, name: "SpeedMaster", value: "$165,789", change: "+12.3%", trades: 115 },
  { rank: 5, name: "PolePosition", value: "$154,321", change: "+11.8%", trades: 108 },
  { rank: 6, name: "ApexHunter", value: "$142,000", change: "+9.5%", trades: 98 },
]

export default function LeaderboardPage() {
  return (
    <div className="relative min-h-screen bg-[#0A0A0A] overflow-hidden">
      
      {/* Navigation Bar */}
      <Navigation />

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-f1-red/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-2xl mb-4">
            <Trophy className="h-8 w-8 text-yellow-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Global <span className="text-f1-red">Leaderboard</span>
          </h1>
          <p className="mt-3 text-gray-400 text-sm max-w-md mx-auto">
            The most elite F1 traders. Rankings are based on total portfolio value and trade accuracy.
          </p>
        </motion.div>

        {/* Podium (Top 3) */}
        <div className="flex flex-col md:flex-row items-end justify-center gap-4 mb-10 mt-16">
          
          {/* Rank 2 */}
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="order-2 md:order-1 w-full md:w-64">
            <div className="glass-card bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl text-center relative">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 h-12 w-12 rounded-full bg-gray-800 border-2 border-gray-500 flex items-center justify-center shadow-lg shadow-gray-500/20">
                <Medal className="h-6 w-6 text-gray-300" />
              </div>
              <div className="mt-8">
                <p className="text-sm text-gray-400 font-medium">{topTraders[1].name}</p>
                <p className="text-2xl font-bold text-white mt-1">{topTraders[1].value}</p>
                <p className="text-xs text-green-400 mt-1">{topTraders[1].change}</p>
              </div>
            </div>
          </motion.div>

          {/* Rank 1 */}
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className="order-1 md:order-2 w-full md:w-72">
            <div className="glass-card bg-gradient-to-b from-yellow-500/10 to-transparent border border-yellow-500/30 backdrop-blur-md p-8 rounded-3xl text-center relative shadow-[0_0_30px_rgba(234,179,8,0.15)]">
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 h-14 w-14 rounded-full bg-yellow-500 flex items-center justify-center shadow-lg shadow-yellow-500/40 border border-yellow-300">
                <Trophy className="h-7 w-7 text-black" />
              </div>
              <div className="mt-8">
                <p className="text-base text-yellow-500 font-bold">{topTraders[0].name}</p>
                <p className="text-3xl font-black text-white mt-1">{topTraders[0].value}</p>
                <p className="text-sm text-green-400 mt-1 font-medium">{topTraders[0].change}</p>
              </div>
            </div>
          </motion.div>

          {/* Rank 3 */}
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="order-3 w-full md:w-64">
            <div className="glass-card bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl text-center relative">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 h-12 w-12 rounded-full bg-amber-900/50 border-2 border-amber-700 flex items-center justify-center shadow-lg shadow-amber-700/20">
                <Medal className="h-6 w-6 text-amber-500" />
              </div>
              <div className="mt-8">
                <p className="text-sm text-gray-400 font-medium">{topTraders[2].name}</p>
                <p className="text-2xl font-bold text-white mt-1">{topTraders[2].value}</p>
                <p className="text-xs text-green-400 mt-1">{topTraders[2].change}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* The Table */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.3 }}
          className="glass-card bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl overflow-hidden"
        >
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">Top 100 Traders</h2>
            <span className="text-xs text-gray-400 bg-black/40 px-3 py-1 rounded-full border border-white/5">Season 2024</span>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-xs text-gray-500 uppercase tracking-wider border-b border-white/5 bg-black/20">
                  <th className="px-6 py-4 font-medium">Rank</th>
                  <th className="px-6 py-4 font-medium">Trader</th>
                  <th className="px-6 py-4 font-medium text-right">Portfolio Value</th>
                  <th className="px-6 py-4 font-medium text-right">24h Change</th>
                  <th className="px-6 py-4 font-medium text-right">Total Trades</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {topTraders.map((trader, idx) => (
                  <tr key={trader.rank} className="hover:bg-white/5 transition-colors group">
                    <td className="px-6 py-4">
                      <span className="font-mono text-gray-400 group-hover:text-white transition-colors">
                        #{trader.rank}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center border border-white/5">
                          <User className="h-4 w-4 text-gray-300" />
                        </div>
                        <span className="font-medium text-white">{trader.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right font-mono font-bold text-white">
                      {trader.value}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-1 text-green-400 font-medium text-sm">
                        <TrendingUp className="h-3 w-3" />
                        {trader.change}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right font-mono text-gray-400">
                      {trader.trades}
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