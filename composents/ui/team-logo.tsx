import React from 'react'

export function TeamLogo({ team, color }: { team: string; color: string }) {
  // We use the first letter of the team as the "Logo" shape
  const initial = team.charAt(0)

  return (
    <div 
      className="flex items-center gap-2 px-3 py-1 rounded-md bg-black/40 border border-white/10"
      style={{ borderLeftColor: color, borderLeftWidth: '3px' }}
    >
      <div 
        className="h-5 w-5 rounded-sm flex items-center justify-center text-xs font-black text-black"
        style={{ backgroundColor: color }}
      >
        {initial}
      </div>
      <span className="text-[11px] font-bold text-gray-300 uppercase tracking-wider">
        {team}
      </span>
    </div>
  )
}