'use client'

import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { TrackInfo } from '@/components/races/track-info'
import { WeatherWidget } from '@/components/races/weather-widget'
import { Predictions } from '@/components/races/predictions'
import { DriverComparison } from '@/components/races/driver-comparison'
import { TelemetryChart } from '@/components/races/telemetry-chart'
import { TireStrategy } from '@/components/races/tire-strategy'
import { Calendar, MapPin, Clock, ArrowLeft, Flag, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import { races } from '@/data/races'
import { Navigation } from '@/components/layout/navigation'

export default function RaceDetailPage() {
  const params = useParams()
  const [race, setRace] = useState<any>(null)

  useEffect(() => {
    const foundRace = races.find(r => r.id === params.id)
    setRace(foundRace)
  }, [params.id])

  if (!race) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-f1-red/20 border-t-f1-red" />
      </div>
    )
  }

  // Check if we have the telemetry/driver data (only for the "next" race)
  const hasData = race.drivers && race.drivers.length > 0

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] overflow-hidden">
      
      <Navigation />

      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-f1-red/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        
        {/* Back Button */}
        <Link href="/races" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 text-sm">
          <ArrowLeft className="h-4 w-4" />
          Back to Calendar
        </Link>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative mb-10 overflow-hidden rounded-3xl glass-card bg-white/5 border border-white/10 backdrop-blur-md p-8 md:p-12"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-f1-red/20 via-transparent to-transparent pointer-events-none" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold text-f1-red bg-f1-red/10 border border-f1-red/20 px-3 py-1 rounded-full uppercase tracking-wider">
                Round {race.round}
              </span>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">2026 Season</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6">{race.name}</h1>
            <div className="flex flex-wrap gap-6 text-gray-300 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-f1-red" />
                <span>{race.circuit}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-f1-red" />
                <span>{race.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-f1-red" />
                <span>{race.time}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* If the race is finished and has no data, show a summary */}
        {!hasData ? (
          <div className="glass-card bg-white/5 border border-white/10 backdrop-blur-md p-12 rounded-3xl text-center">
            <div className="inline-flex items-center justify-center p-4 bg-green-500/10 rounded-full mb-4">
              <CheckCircle2 className="h-12 w-12 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Race Completed</h2>
            <p className="text-gray-400">The {race.name} has already taken place. Telemetry data for this event is archived.</p>
          </div>
        ) : (
          /* If the race is the "Next" race, show all the data widgets */
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-2">
              <TrackInfo track={race.track} />
              <div className="grid gap-6 md:grid-cols-2">
                <WeatherWidget weather={race.weather} />
                <Predictions predictions={race.predictions} />
              </div>
              <DriverComparison drivers={race.drivers} />
              <TelemetryChart telemetry={race.telemetry} />
            </div>

            <div className="space-y-6">
              <TireStrategy strategy={race.tireStrategy} />
              
              <div className="glass-card bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-white mb-4">Session Times</h3>
                <div className="space-y-2">
                  {race.sessions?.map((session: any, idx: number) => (
                    <div key={idx} className="flex justify-between items-center p-3 rounded-xl bg-black/20 border border-white/5">
                      <span className="font-medium text-gray-300 text-sm">{session.name}</span>
                      <span className="text-gray-400 font-mono text-xs">{session.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}