'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function CTASection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="glass-card p-12 text-center"
        >
          <h2 className="text-4xl font-bold mb-4">Ready to Join the Elite?</h2>
          <p className="text-white/60 mb-8 max-w-2xl mx-auto">
            Start your F1 trading journey today and compete with thousands of traders worldwide.
          </p>
          <Button size="lg" asChild className="bg-f1-red hover:bg-f1-red/90 text-lg px-8">
            <Link href="/auth">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}