'use client'

import React from 'react'
import { Thermometer, Wind, CloudRain, Sun } from 'lucide-react'

export function WeatherWidget({ weather }: any) {
  const items = [
    { icon: Thermometer, label: 'Temperature', value: `${weather.temperature}°C` },
    { icon: Wind, label: 'Wind Speed', value: `${weather.windSpeed} km/h` },
    { icon: CloudRain, label: 'Precipitation', value: `${weather.precipitation}%` },
  ]

  return (
    <div className="glass-card bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">Weather</h3>
        <div className="flex items-center gap-2 bg-yellow-500/10 px-3 py-1 rounded-full border border-yellow-500/20">
          <Sun className="h-4 w-4 text-yellow-500" />
          <span className="text-xs font-medium text-yellow-500">{weather.condition}</span>
        </div>
      </div>
      <div className="space-y-3">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-black/30 border border-white/5">
            <div className="flex items-center gap-3">
              <item.icon className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-300">{item.label}</span>
            </div>
            <span className="font-mono font-bold text-white text-sm">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}