'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Users, Trophy, Activity } from 'lucide-react'

const stats = [
  { icon: TrendingUp, label: 'Portfolio Value', value: '$124,567', change: '+12.5%' },
  { icon: Users, label: 'Global Rank', value: '#1,234', change: '+42' },
  { icon: Trophy, label: 'Win Rate', value: '67%', change: '+5%' },
  { icon: Activity, label: 'Trades', value: '47', change: '+12' },
]

export function StatsCards() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          className="group relative overflow-hidden rounded-2xl bg-[#111] border border-white/5 p-6 hover:border-f1-red/30 transition-all duration-300"
        >
          {/* Subtle hover glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-f1-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:bg-f1-red/10 group-hover:border-f1-red/20 transition-colors">
                <stat.icon className="h-5 w-5 text-gray-300 group-hover:text-f1-red transition-colors" />
              </div>
              <span className="text-sm text-green-400 font-medium bg-green-500/10 px-2 py-1 rounded-md">
                {stat.change}
              </span>
            </div>
            <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}