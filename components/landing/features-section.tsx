'use client'

import { motion } from 'framer-motion'
import { TrendingUp, BarChart3, Trophy, Shield, Zap, Globe } from 'lucide-react'

const features = [
  { icon: TrendingUp, title: 'Driver Stock Market', description: 'Trade virtual stocks of F1 drivers based on real performance' },
  { icon: BarChart3, title: 'Real-time Analytics', description: 'Live telemetry and performance data during race weekends' },
  { icon: Trophy, title: 'Global Leaderboards', description: 'Compete with traders worldwide for top rankings' },
  { icon: Shield, title: 'Secure Trading', description: 'Safe and transparent transactions with virtual currency' },
  { icon: Zap, title: 'Instant Updates', description: 'Real-time price changes based on race performance' },
  { icon: Globe, title: 'Global Community', description: 'Join thousands of F1 enthusiasts and traders' },
]

export function FeaturesSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Elite Features for<br />Elite Traders</h2>
          <p className="mt-4 text-white/60">Everything you need to dominate the F1 trading game</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 text-center group hover:border-f1-red/50"
            >
              <feature.icon className="mx-auto mb-4 h-12 w-12 text-f1-red group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-white/60">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}