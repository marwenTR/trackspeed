import { driverProfiles } from '@/data/driver-profiles'
import { drivers as marketDrivers } from '@/data/drivers'
import { races } from '@/data/races'

export function predictPodium(raceId: string): Array<{ driver: string; team: string; score: number; color: string }> {
  const allDrivers = Object.values(driverProfiles) as any[]
  const race = races.find(r => r.id === raceId)
  
  if (!race) return []

  const turns = race.track?.turns || 15
  const drs = race.track?.drsZones || 2
  const topSpeed = parseInt(race.track?.topSpeed?.replace(/[^0-9]/g, '') || '330')
  const precipitation = race.weather?.precipitation || 0
  const temperature = race.weather?.temperature || 25
  const recentWinners = race.recentWinners || []

  // Classify the track
  const isStreetCircuit = turns > 18 && topSpeed < 300
  const isSpeedTrack = topSpeed > 340 || (drs >= 3 && turns < 15)
  const isWetRace = precipitation >= 30
  const isHotRace = temperature >= 30

  const scored = allDrivers.map((profile) => {
    // 1. Season Points (max 25)
    const pointsScore = (profile.seasonPoints / 365) * 25

    // 2. Recent Form (max 20)
    const formValues: Record<string, number> = { 'P1': 10, 'P2': 8, 'P3': 6, 'DNF': 0 }
    const formScore = (profile.recentForm || []).reduce((acc: number, pos: string) => {
      if (formValues[pos] !== undefined) return acc + formValues[pos]
      const posNum = parseInt(pos.replace('P', ''))
      return acc + (posNum <= 10 ? 4 : 1)
    }, 0) / 5 * 2

    // 3. Team Car Performance (max 20)
    const teamTiers: Record<string, number> = {
      'Mercedes': 20, 'Ferrari': 18, 'McLaren': 16, 'Red Bull Racing': 16,
      'Racing Bulls': 8, 'Aston Martin': 6, 'Williams': 5, 'Alpine': 4, 'Haas': 3, 'Audi': 2, 'Cadillac': 1
    }
    const teamScore = teamTiers[profile.team] || 5

    // 4. Track History Bonus (max 15) - Based on recent winners
    const lastName = profile.name.split(' ').slice(1).join(' ')
    const winCount = recentWinners.filter((w: string) => w.toLowerCase() === lastName.toLowerCase()).length
    const trackHistoryScore = winCount * 5

    // 5. Circuit Profile Bonus (max 15)
    let circuitProfileScore = 0
    if (isStreetCircuit) {
      circuitProfileScore = profile.dnfs <= 5 ? 15 : 0
    } else if (isSpeedTrack) {
      const isTopTeam = ['Mercedes', 'Ferrari', 'Red Bull Racing', 'McLaren'].includes(profile.team)
      circuitProfileScore = isTopTeam ? 12 : 3
    } else {
      circuitProfileScore = 10
    }

    // 6. Weather Adaptation (max 10)
    let weatherScore = 0
    if (isWetRace) {
      weatherScore = profile.dnfs <= 5 ? 10 : 2
    } else if (isHotRace) {
      weatherScore = profile.age < 30 ? 8 : 5
    } else {
      weatherScore = 5
    }

    // 7. Market Confidence (max 5)
    const market = marketDrivers.find(d => d.name === profile.name)
    const marketScore = market ? Math.max(0, (market.change + 5) / 15) * 5 : 2

    const totalScore = pointsScore + formScore + teamScore + trackHistoryScore + circuitProfileScore + weatherScore + marketScore

    return {
      driver: profile.name,
      team: profile.team,
      color: profile.teamColor,
      score: Math.round(totalScore * 10) / 10
    }
  })

  return scored.sort((a, b) => b.score - a.score).slice(0, 3)
}