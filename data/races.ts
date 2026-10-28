export const races = [
  // --- FINISHED RACES (Rounds 1 to 19) ---
  { id: 'australia', round: 1, name: 'Australian Grand Prix', circuit: 'Albert Park', date: 'March 8, 2026', time: '15:00', country: 'Australia', status: 'finished', track: { length: '5.278 km', turns: 14, drsZones: 4, topSpeed: '330 km/h', avgSpeed: '225 km/h', lapRecord: '1:20.260' }, weather: { temperature: 24, humidity: 50, windSpeed: 12, precipitation: 0, condition: 'Clear' }, predictions: {}, drivers: [], telemetry: { laps: [] }, tireStrategy: [], sessions: [] },
  { id: 'china', round: 2, name: 'Chinese Grand Prix', circuit: 'Shanghai International', date: 'March 15, 2026', time: '15:00', country: 'China', status: 'finished', track: { length: '5.451 km', turns: 16, drsZones: 2, topSpeed: '335 km/h', avgSpeed: '210 km/h', lapRecord: '1:32.238' }, weather: { temperature: 18, humidity: 60, windSpeed: 10, precipitation: 10, condition: 'Cloudy' }, predictions: {}, drivers: [], telemetry: { laps: [] }, tireStrategy: [], sessions: [] },
  { id: 'japan', round: 3, name: 'Japanese Grand Prix', circuit: 'Suzuka Circuit', date: 'March 29, 2026', time: '14:00', country: 'Japan', status: 'finished', track: { length: '5.807 km', turns: 18, drsZones: 1, topSpeed: '320 km/h', avgSpeed: '230 km/h', lapRecord: '1:30.983' }, weather: { temperature: 20, humidity: 55, windSpeed: 8, precipitation: 0, condition: 'Sunny' }, predictions: {}, drivers: [], telemetry: { laps: [] }, tireStrategy: [], sessions: [] },
  { id: 'bahrain', round: 4, name: 'Bahrain Grand Prix', circuit: 'Bahrain International', date: 'April 12, 2026', time: '18:00', country: 'Bahrain', status: 'finished', track: { length: '5.412 km', turns: 15, drsZones: 3, topSpeed: '332 km/h', avgSpeed: '210 km/h', lapRecord: '1:28.997' }, weather: { temperature: 28, humidity: 45, windSpeed: 12, precipitation: 0, condition: 'Clear' }, predictions: {}, drivers: [], telemetry: { laps: [] }, tireStrategy: [], sessions: [] },
  { id: 'saudi', round: 5, name: 'Saudi Arabian Grand Prix', circuit: 'Jeddah Corniche', date: 'April 19, 2026', time: '20:00', country: 'Saudi Arabia', status: 'finished', track: { length: '6.174 km', turns: 27, drsZones: 3, topSpeed: '322 km/h', avgSpeed: '250 km/h', lapRecord: '1:30.734' }, weather: { temperature: 32, humidity: 35, windSpeed: 8, precipitation: 0, condition: 'Clear' }, predictions: {}, drivers: [], telemetry: { laps: [] }, tireStrategy: [], sessions: [] },
  { id: 'miami', round: 6, name: 'Miami Grand Prix', circuit: 'Miami International Autodrome', date: 'May 3, 2026', time: '16:00', country: 'USA', status: 'finished', track: { length: '5.412 km', turns: 19, drsZones: 3, topSpeed: '340 km/h', avgSpeed: '215 km/h', lapRecord: '1:29.708' }, weather: { temperature: 30, humidity: 70, windSpeed: 15, precipitation: 20, condition: 'Humid' }, predictions: {}, drivers: [], telemetry: { laps: [] }, tireStrategy: [], sessions: [] },
  { id: 'canada', round: 7, name: 'Canadian Grand Prix', circuit: 'Circuit Gilles Villeneuve', date: 'May 24, 2026', time: '16:00', country: 'Canada', status: 'finished', track: { length: '4.361 km', turns: 14, drsZones: 2, topSpeed: '330 km/h', avgSpeed: '200 km/h', lapRecord: '1:13.078' }, weather: { temperature: 22, humidity: 50, windSpeed: 10, precipitation: 0, condition: 'Clear' }, predictions: {}, drivers: [], telemetry: { laps: [] }, tireStrategy: [], sessions: [] },
  { id: 'monaco', round: 8, name: 'Monaco Grand Prix', circuit: 'Circuit de Monaco', date: 'June 7, 2026', time: '15:00', country: 'Monaco', status: 'finished', track: { length: '3.337 km', turns: 19, drsZones: 1, topSpeed: '290 km/h', avgSpeed: '160 km/h', lapRecord: '1:12.909' }, weather: { temperature: 24, humidity: 60, windSpeed: 5, precipitation: 0, condition: 'Sunny' }, predictions: {}, drivers: [], telemetry: { laps: [] }, tireStrategy: [], sessions: [] },
  { id: 'spain-bcn', round: 9, name: 'Spanish Grand Prix', circuit: 'Circuit de Barcelona-Catalunya', date: 'June 14, 2026', time: '15:00', country: 'Spain', status: 'finished', track: { length: '4.657 km', turns: 16, drsZones: 2, topSpeed: '325 km/h', avgSpeed: '205 km/h', lapRecord: '1:16.330' }, weather: { temperature: 28, humidity: 40, windSpeed: 12, precipitation: 0, condition: 'Clear' }, predictions: {}, drivers: [], telemetry: { laps: [] }, tireStrategy: [], sessions: [] },
  { id: 'austria', round: 10, name: 'Austrian Grand Prix', circuit: 'Red Bull Ring', date: 'June 28, 2026', time: '15:00', country: 'Austria', status: 'finished', track: { length: '4.318 km', turns: 10, drsZones: 3, topSpeed: '330 km/h', avgSpeed: '230 km/h', lapRecord: '1:05.619' }, weather: { temperature: 25, humidity: 45, windSpeed: 15, precipitation: 10, condition: 'Partly Cloudy' }, predictions: {}, drivers: [], telemetry: { laps: [] }, tireStrategy: [], sessions: [] },
  { id: 'britain', round: 11, name: 'British Grand Prix', circuit: 'Silverstone Circuit', date: 'July 5, 2026', time: '15:00', country: 'UK', status: 'finished', track: { length: '5.891 km', turns: 18, drsZones: 2, topSpeed: '330 km/h', avgSpeed: '235 km/h', lapRecord: '1:27.097' }, weather: { temperature: 20, humidity: 65, windSpeed: 18, precipitation: 30, condition: 'Showers' }, predictions: {}, drivers: [], telemetry: { laps: [] }, tireStrategy: [], sessions: [] },
  { id: 'belgium', round: 12, name: 'Belgian Grand Prix', circuit: 'Spa-Francorchamps', date: 'July 19, 2026', time: '15:00', country: 'Belgium', status: 'finished', track: { length: '7.004 km', turns: 19, drsZones: 2, topSpeed: '350 km/h', avgSpeed: '240 km/h', lapRecord: '1:46.286' }, weather: { temperature: 18, humidity: 70, windSpeed: 20, precipitation: 40, condition: 'Rain' }, predictions: {}, drivers: [], telemetry: { laps: [] }, tireStrategy: [], sessions: [] },
  { id: 'hungary', round: 13, name: 'Hungarian Grand Prix', circuit: 'Hungaroring', date: 'July 26, 2026', time: '15:00', country: 'Hungary', status: 'finished', track: { length: '4.381 km', turns: 14, drsZones: 1, topSpeed: '315 km/h', avgSpeed: '190 km/h', lapRecord: '1:16.627' }, weather: { temperature: 30, humidity: 40, windSpeed: 8, precipitation: 0, condition: 'Sunny' }, predictions: {}, drivers: [], telemetry: { laps: [] }, tireStrategy: [], sessions: [] },
  { id: 'netherlands', round: 14, name: 'Dutch Grand Prix', circuit: 'Circuit Zandvoort', date: 'August 23, 2026', time: '15:00', country: 'Netherlands', status: 'finished', track: { length: '4.259 km', turns: 14, drsZones: 2, topSpeed: '320 km/h', avgSpeed: '205 km/h', lapRecord: '1:11.097' }, weather: { temperature: 22, humidity: 60, windSpeed: 15, precipitation: 10, condition: 'Cloudy' }, predictions: {}, drivers: [], telemetry: { laps: [] }, tireStrategy: [], sessions: [] },
  { id: 'italy', round: 15, name: 'Italian Grand Prix', circuit: 'Autodromo Nazionale Monza', date: 'September 6, 2026', time: '15:00', country: 'Italy', status: 'finished', track: { length: '5.793 km', turns: 11, drsZones: 2, topSpeed: '360 km/h', avgSpeed: '250 km/h', lapRecord: '1:21.046' }, weather: { temperature: 26, humidity: 50, windSpeed: 10, precipitation: 0, condition: 'Clear' }, predictions: {}, drivers: [], telemetry: { laps: [] }, tireStrategy: [], sessions: [] },
  { id: 'spain-mad', round: 16, name: 'Spanish Grand Prix (Madrid)', circuit: 'Madring', date: 'September 13, 2026', time: '15:00', country: 'Spain', status: 'finished', track: { length: '5.400 km', turns: 20, drsZones: 2, topSpeed: '325 km/h', avgSpeed: '210 km/h', lapRecord: 'N/A' }, weather: { temperature: 28, humidity: 45, windSpeed: 12, precipitation: 0, condition: 'Sunny' }, predictions: {}, drivers: [], telemetry: { laps: [] }, tireStrategy: [], sessions: [] },
  { id: 'azerbaijan', round: 17, name: 'Azerbaijan Grand Prix', circuit: 'Baku City Circuit', date: 'September 26, 2026', time: '15:00', country: 'Azerbaijan', status: 'finished', track: { length: '6.003 km', turns: 20, drsZones: 2, topSpeed: '360 km/h', avgSpeed: '215 km/h', lapRecord: '1:43.009' }, weather: { temperature: 24, humidity: 55, windSpeed: 15, precipitation: 0, condition: 'Clear' }, predictions: {}, drivers: [], telemetry: { laps: [] }, tireStrategy: [], sessions: [] },
  { id: 'singapore', round: 18, name: 'Singapore Grand Prix', circuit: 'Marina Bay Street Circuit', date: 'October 11, 2026', time: '20:00', country: 'Singapore', status: 'finished', track: { length: '4.940 km', turns: 19, drsZones: 3, topSpeed: '320 km/h', avgSpeed: '180 km/h', lapRecord: '1:35.867' }, weather: { temperature: 30, humidity: 80, windSpeed: 5, precipitation: 20, condition: 'Humid' }, predictions: {}, drivers: [], telemetry: { laps: [] }, tireStrategy: [], sessions: [] },
  { id: 'usa', round: 19, name: 'United States Grand Prix', circuit: 'Circuit of the Americas', date: 'October 25, 2026', time: '15:00', country: 'USA', status: 'finished', track: { length: '5.513 km', turns: 20, drsZones: 2, topSpeed: '330 km/h', avgSpeed: '205 km/h', lapRecord: '1:36.169' }, weather: { temperature: 26, humidity: 50, windSpeed: 12, precipitation: 0, condition: 'Clear' }, predictions: {}, drivers: [], telemetry: { laps: [] }, tireStrategy: [], sessions: [] },

  // --- UPCOMING RACES (Rounds 20 to 24) - NOW WITH FULL DATA ---
  { 
    id: 'mexico', round: 20, name: 'Mexico City Grand Prix', circuit: 'Autódromo Hermanos Rodríguez', date: 'November 1, 2026', time: '14:00', country: 'Mexico', status: 'next',
    track: { length: '4.304 km', turns: 17, drsZones: 2, topSpeed: '345 km/h', avgSpeed: '200 km/h', lapRecord: '1:17.774' },
    weather: { temperature: 22, humidity: 55, windSpeed: 10, precipitation: 10, condition: 'Partly Cloudy' },
    predictions: { winner: { name: 'Kimi Antonelli', probability: 50 }, podium: [{ name: 'Max Verstappen', probability: 35 }, { name: 'Charles Leclerc', probability: 30 }, { name: 'George Russell', probability: 25 }], fastestLap: { name: 'Kimi Antonelli', probability: 40 } },
    drivers: [
      { name: 'Kimi Antonelli', team: 'Mercedes', stats: { qualifying: 96, racePace: 98, tyreManagement: 94, overtaking: 92, consistency: 96 } },
      { name: 'Max Verstappen', team: 'Red Bull Racing', stats: { qualifying: 95, racePace: 96, tyreManagement: 92, overtaking: 94, consistency: 93 } },
      { name: 'Charles Leclerc', team: 'Ferrari', stats: { qualifying: 94, racePace: 93, tyreManagement: 90, overtaking: 91, consistency: 89 } },
    ],
    telemetry: { laps: Array.from({ length: 20 }, (_, i) => ({ lap: i + 1, driver1: 78 + Math.random() * 5, driver2: 79 + Math.random() * 5, driver3: 78.5 + Math.random() * 5 })) },
    tireStrategy: [ { driver: 'Kimi Antonelli', tires: [{ compound: 'Medium', laps: 30 }, { compound: 'Hard', laps: 41 }] }, { driver: 'Max Verstappen', tires: [{ compound: 'Soft', laps: 20 }, { compound: 'Medium', laps: 28 }, { compound: 'Hard', laps: 23 }] } ],
    sessions: [ { name: 'Practice 1', time: '12:30 - 13:30' }, { name: 'Practice 2', time: '16:00 - 17:00' }, { name: 'Practice 3', time: '11:30 - 12:30' }, { name: 'Qualifying', time: '15:00 - 16:00' }, { name: 'Race', time: '14:00' } ]
  },
  { 
    id: 'brazil', round: 21, name: 'São Paulo Grand Prix', circuit: 'Autódromo José Carlos Pace', date: 'November 8, 2026', time: '14:00', country: 'Brazil', status: 'upcoming',
    track: { length: '4.309 km', turns: 15, drsZones: 2, topSpeed: '330 km/h', avgSpeed: '210 km/h', lapRecord: '1:10.540' },
    weather: { temperature: 24, humidity: 70, windSpeed: 12, precipitation: 30, condition: 'Showers' },
    predictions: { winner: { name: 'Lando Norris', probability: 40 }, podium: [{ name: 'Kimi Antonelli', probability: 35 }, { name: 'Max Verstappen', probability: 30 }], fastestLap: { name: 'Lando Norris', probability: 35 } },
    drivers: [
      { name: 'Lando Norris', team: 'McLaren', stats: { qualifying: 95, racePace: 94, tyreManagement: 91, overtaking: 93, consistency: 92 } },
      { name: 'Kimi Antonelli', team: 'Mercedes', stats: { qualifying: 96, racePace: 98, tyreManagement: 94, overtaking: 92, consistency: 96 } },
      { name: 'Max Verstappen', team: 'Red Bull Racing', stats: { qualifying: 95, racePace: 96, tyreManagement: 92, overtaking: 94, consistency: 93 } },
    ],
    telemetry: { laps: Array.from({ length: 20 }, (_, i) => ({ lap: i + 1, driver1: 71 + Math.random() * 5, driver2: 72 + Math.random() * 5, driver3: 71.5 + Math.random() * 5 })) },
    tireStrategy: [ { driver: 'Lando Norris', tires: [{ compound: 'Soft', laps: 18 }, { compound: 'Medium', laps: 25 }, { compound: 'Hard', laps: 15 }] }, { driver: 'Kimi Antonelli', tires: [{ compound: 'Medium', laps: 24 }, { compound: 'Hard', laps: 34 }] } ],
    sessions: [ { name: 'Practice 1', time: '15:30 - 16:30' }, { name: 'Practice 2', time: '19:00 - 20:00' }, { name: 'Practice 3', time: '15:30 - 16:30' }, { name: 'Qualifying', time: '19:00 - 20:00' }, { name: 'Race', time: '14:00' } ]
  },
  { 
    id: 'las-vegas', round: 22, name: 'Las Vegas Grand Prix', circuit: 'Las Vegas Strip Circuit', date: 'November 21, 2026', time: '20:00', country: 'USA', status: 'upcoming',
    track: { length: '6.201 km', turns: 17, drsZones: 2, topSpeed: '350 km/h', avgSpeed: '230 km/h', lapRecord: '1:35.490' },
    weather: { temperature: 15, humidity: 40, windSpeed: 10, precipitation: 0, condition: 'Clear' },
    predictions: { winner: { name: 'Max Verstappen', probability: 45 }, podium: [{ name: 'Kimi Antonelli', probability: 35 }, { name: 'George Russell', probability: 30 }], fastestLap: { name: 'Max Verstappen', probability: 40 } },
    drivers: [
      { name: 'Max Verstappen', team: 'Red Bull Racing', stats: { qualifying: 95, racePace: 96, tyreManagement: 92, overtaking: 94, consistency: 93 } },
      { name: 'Kimi Antonelli', team: 'Mercedes', stats: { qualifying: 96, racePace: 98, tyreManagement: 94, overtaking: 92, consistency: 96 } },
      { name: 'George Russell', team: 'Mercedes', stats: { qualifying: 94, racePace: 95, tyreManagement: 92, overtaking: 90, consistency: 94 } },
    ],
    telemetry: { laps: Array.from({ length: 20 }, (_, i) => ({ lap: i + 1, driver1: 96 + Math.random() * 6, driver2: 97 + Math.random() * 6, driver3: 96.5 + Math.random() * 6 })) },
    tireStrategy: [ { driver: 'Max Verstappen', tires: [{ compound: 'Medium', laps: 22 }, { compound: 'Hard', laps: 28 }] }, { driver: 'Kimi Antonelli', tires: [{ compound: 'Soft', laps: 16 }, { compound: 'Medium', laps: 20 }, { compound: 'Hard', laps: 14 }] } ],
    sessions: [ { name: 'Practice 1', time: '18:30 - 19:30' }, { name: 'Practice 2', time: '22:00 - 23:00' }, { name: 'Practice 3', time: '18:30 - 19:30' }, { name: 'Qualifying', time: '22:00 - 23:00' }, { name: 'Race', time: '20:00' } ]
  },
  { 
    id: 'qatar', round: 23, name: 'Qatar Grand Prix', circuit: 'Lusail International Circuit', date: 'November 29, 2026', time: '19:00', country: 'Qatar', status: 'upcoming',
    track: { length: '5.419 km', turns: 16, drsZones: 1, topSpeed: '330 km/h', avgSpeed: '220 km/h', lapRecord: '1:24.319' },
    weather: { temperature: 26, humidity: 60, windSpeed: 8, precipitation: 0, condition: 'Clear' },
    predictions: { winner: { name: 'Kimi Antonelli', probability: 50 }, podium: [{ name: 'George Russell', probability: 35 }, { name: 'Charles Leclerc', probability: 30 }], fastestLap: { name: 'Kimi Antonelli', probability: 45 } },
    drivers: [
      { name: 'Kimi Antonelli', team: 'Mercedes', stats: { qualifying: 96, racePace: 98, tyreManagement: 94, overtaking: 92, consistency: 96 } },
      { name: 'George Russell', team: 'Mercedes', stats: { qualifying: 94, racePace: 95, tyreManagement: 92, overtaking: 90, consistency: 94 } },
      { name: 'Charles Leclerc', team: 'Ferrari', stats: { qualifying: 94, racePace: 93, tyreManagement: 90, overtaking: 91, consistency: 89 } },
    ],
    telemetry: { laps: Array.from({ length: 20 }, (_, i) => ({ lap: i + 1, driver1: 84 + Math.random() * 5, driver2: 85 + Math.random() * 5, driver3: 84.5 + Math.random() * 5 })) },
    tireStrategy: [ { driver: 'Kimi Antonelli', tires: [{ compound: 'Medium', laps: 25 }, { compound: 'Hard', laps: 32 }] }, { driver: 'George Russell', tires: [{ compound: 'Soft', laps: 18 }, { compound: 'Medium', laps: 22 }, { compound: 'Hard', laps: 17 }] } ],
    sessions: [ { name: 'Practice 1', time: '16:30 - 17:30' }, { name: 'Practice 2', time: '20:00 - 21:00' }, { name: 'Practice 3', time: '17:30 - 18:30' }, { name: 'Qualifying', time: '21:00 - 22:00' }, { name: 'Race', time: '19:00' } ]
  },
  { 
    id: 'abu-dhabi', round: 24, name: 'Abu Dhabi Grand Prix', circuit: 'Yas Marina Circuit', date: 'December 6, 2026', time: '17:00', country: 'UAE', status: 'upcoming',
    track: { length: '5.281 km', turns: 16, drsZones: 2, topSpeed: '325 km/h', avgSpeed: '220 km/h', lapRecord: '1:26.103' },
    weather: { temperature: 26, humidity: 60, windSpeed: 10, precipitation: 0, condition: 'Clear' },
    predictions: { winner: { name: 'Kimi Antonelli', probability: 55 }, podium: [{ name: 'George Russell', probability: 40 }, { name: 'Lewis Hamilton', probability: 35 }], fastestLap: { name: 'Lando Norris', probability: 35 } },
    drivers: [
      { name: 'Kimi Antonelli', team: 'Mercedes', stats: { qualifying: 96, racePace: 98, tyreManagement: 94, overtaking: 92, consistency: 96 } },
      { name: 'George Russell', team: 'Mercedes', stats: { qualifying: 94, racePace: 95, tyreManagement: 92, overtaking: 90, consistency: 94 } },
      { name: 'Lewis Hamilton', team: 'Ferrari', stats: { qualifying: 92, racePace: 93, tyreManagement: 95, overtaking: 90, consistency: 91 } },
    ],
    telemetry: { laps: Array.from({ length: 20 }, (_, i) => ({ lap: i + 1, driver1: 86 + Math.random() * 5, driver2: 87 + Math.random() * 5, driver3: 86.5 + Math.random() * 5 })) },
    tireStrategy: [ { driver: 'Kimi Antonelli', tires: [{ compound: 'Medium', laps: 22 }, { compound: 'Hard', laps: 36 }] }, { driver: 'George Russell', tires: [{ compound: 'Soft', laps: 18 }, { compound: 'Medium', laps: 25 }, { compound: 'Hard', laps: 15 }] } ],
    sessions: [ { name: 'Practice 1', time: '13:30 - 14:30' }, { name: 'Practice 2', time: '17:00 - 18:00' }, { name: 'Practice 3', time: '14:30 - 15:30' }, { name: 'Qualifying', time: '18:00 - 19:00' }, { name: 'Race', time: '17:00' } ]
  },
]