'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ChevronRight, Zap } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-f1-carbon to-black" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-1/2 -right-1/2 h-full w-full rounded-full bg-f1-red/10 blur-[100px]"
        />
      </div>

      <div className="container relative mx-auto px-6 pt-32">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center text-center"
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2">
              <Zap className="h-4 w-4 text-f1-red" />
              <span className="text-sm font-medium">Next Race: Bahrain GP - 14 Days</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="max-w-5xl text-6xl font-bold tracking-tighter md:text-7xl lg:text-8xl"
          >
            <span className="text-gradient">Master the</span>
            <br />
            <span className="relative">
              World of Formula 1
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute -bottom-4 left-0 h-1 bg-gradient-to-r from-f1-red to-transparent"
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mt-8 max-w-2xl text-lg text-white/60 md:text-xl"
          >
            Experience F1 like never before. Real-time analytics, driver stock market, 
            and predictive intelligence for the modern racing enthusiast.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mt-12 flex flex-col gap-4 sm:flex-row"
          >
            <Button size="lg" asChild className="group bg-f1-red hover:bg-f1-red/90 text-lg px-8">
              <Link href="/auth">
                Start Trading Now
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}