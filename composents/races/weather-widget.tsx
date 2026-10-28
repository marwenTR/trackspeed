'use client'

import { Card } from '@/components/ui/card'
import { Thermometer, Wind, CloudRain, Sun } from 'lucide-react'
import { motion } from 'framer-motion'

interface WeatherWidgetProps {
  weather: {
    temperature: number
    humidity: number
    windSpeed: number
    precipitation: number
    condition: string
  }
}

export function WeatherWidget({ weather }: WeatherWidgetProps) {
  const items = [
    { icon: Thermometer, label: 'Temperature', value: `${weather.temperature}°C` },
    { icon: Wind, label: 'Wind Speed', value: `${weather.windSpeed} km/h` },
    { icon: CloudRain, label: 'Precipitation', value: `${weather.precipitation}%` },
  ]

  return (
    <Card className="glass-card p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Weather Forecast</h3>
        <div className="flex items-center gap-2">
          <Sun className="h-5 w-5 text-yellow-500" />
          <span className="text-sm">{weather.condition}</span>
        </div>
      </div>
      <div className="space-y-3">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="flex items-center justify-between p-2"
          >
            <div className="flex items-center gap-2">
              <item.icon className="h-4 w-4 text-white/40" />
              <span className="text-sm">{item.label}</span>
            </div>
            <span className="font-mono">{item.value}</span>
          </motion.div>
        ))}
      </div>
    </Card>
  )
}