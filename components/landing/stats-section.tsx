'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Users, TrendingUp, Trophy, DollarSign } from 'lucide-react'

const stats = [
  { icon: Users, value: '10,000+', label: 'Active Traders' },
  { icon: TrendingUp, value: '$98.2M', label: 'Market Cap' },
  { icon: Trophy, value: '94%', label: 'Accuracy Rate' },
  { icon: DollarSign, value: '2.5M', label: 'Daily Volume' },
]

export function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-black to-f1-carbon">
      <div className="container mx-auto px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <stat.icon className="mx-auto mb-4 h-10 w-10 text-f1-red" />
              <div className="text-4xl font-bold">{stat.value}</div>
              <div className="mt-2 text-white/60">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}