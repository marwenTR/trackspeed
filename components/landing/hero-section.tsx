'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ChevronRight, Zap } from 'lucide-react'

export function HeroSection() {
  const [daysLeft, setDaysLeft] = useState(0)

  useEffect(() => {
    
    const raceDate = new Date('2026-11-01T14:00:00').getTime()

    const updateTimer = () => {
      const now = new Date().getTime()
      const distance = raceDate - now

      if (distance > 0) {
        const days = Math.ceil(distance / (1000 * 60 * 60 * 24))
        setDaysLeft(days)
      } else {
        setDaysLeft(0)
      }
    }

    updateTimer()
    const interval = setInterval(updateTimer, 1000 * 60 * 60) 
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/2 h-full w-full rounded-full bg-f1-red/10 blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -left-1/2 h-full w-full rounded-full bg-purple-600/10 blur-[100px]"
        />
      </div>

      <div className="container relative mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center text-center"
        >
          {/* Next Race Badge */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <Link href="/races/mexico">
              <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 hover:bg-white/10 transition-colors cursor-pointer border border-white/10">
                <Zap className="h-4 w-4 text-f1-red animate-pulse" />
                <span className="text-sm font-medium text-white">Next Race: Mexico City GP - {daysLeft} Days</span>
              </div>
            </Link>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-5xl text-6xl font-bold tracking-tighter md:text-7xl lg:text-8xl"
          >
            <span className="text-gradient">Master the</span>
            <br />
            <span className="relative">
              World of Formula 1
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
                className="absolute -bottom-4 left-0 h-1 bg-gradient-to-r from-f1-red to-transparent"
              />
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 max-w-2xl text-lg text-gray-400 md:text-xl"
          >
            Experience F1 like never before. Real-time analytics, driver stock market, 
            and predictive intelligence for the modern racing enthusiast.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex flex-col gap-4 sm:flex-row"
          >
            <Button size="lg" asChild className="group bg-gradient-to-r from-f1-red to-red-600 hover:from-red-600 hover:to-red-700 text-lg px-8 h-14 rounded-xl shadow-lg shadow-f1-red/20 transition-transform hover:scale-105 active:scale-95">
              <Link href="/auth">
                Start Trading Now
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" asChild variant="outline" className="glass border-white/10 hover:bg-white/10 text-lg px-8 h-14 rounded-xl">
              <Link href="/races">View Calendar</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}