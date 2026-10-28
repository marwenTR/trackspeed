'use client'

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
          className="glass-card p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <stat.icon className="h-8 w-8 text-f1-red" />
            <span className="text-sm text-green-500">{stat.change}</span>
          </div>
          <div className="text-2xl font-bold">{stat.value}</div>
          <div className="text-sm text-white/60 mt-1">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  )
}