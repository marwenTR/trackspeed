'use client'

import { HeroSection } from '@/components/landing/hero-section'
import { FeaturesSection } from '@/components/landing/features-section'
import { StatsSection } from '@/components/landing/stats-section'
import { CTASection } from '@/components/landing/cta-section'
import { Footer } from '@/components/layout/footer'

export default function LandingPage() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <CTASection />
      <Footer />
    </main>
  )
}