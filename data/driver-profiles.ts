// Official F1 Media CDN base URL
const F1_CDN = "https://media.formula1.com/image/upload/c_fit,h_512/q_100/common/f1/2026";

export const driverProfiles: Record<string, any> = {
  // Mercedes 
  'kimi-antonelli': { 
    name: 'Kimi Antonelli', number: 12, team: 'Mercedes', teamColor: '#27F4D2', country: 'Italy', age: 20, height: '1.72 m', weight: '68 kg', wins: 5, podiums: 10, poles: 3, fastestLaps: 4, championships: 0, seasonPoints: 365, seasonPos: '1st', gpEntered: 42, careerPoints: 515, dnfs: 1,
    logo: `${F1_CDN}/mercedes/2026mercedeslogo.png`, 
    logoFilter: 'brightness(0) invert(1)', 
    image: "/drivers/kimi-antonelli.png", 
    bio: '...' 
  },
  'george-russell': { 
    name: 'George Russell', number: 63, team: 'Mercedes', teamColor: '#27F4D2', country: 'UK', age: 28, height: '1.85 m', weight: '70 kg', wins: 8, podiums: 18, poles: 5, fastestLaps: 7, championships: 0, seasonPoints: 242, seasonPos: '2nd', gpEntered: 120, careerPoints: 700, dnfs: 4,
    logo: `${F1_CDN}/mercedes/2026mercedeslogo.png`, 
    logoFilter: 'brightness(0) invert(1)',
    image: "/drivers/george-russell.png", 
    bio: '...' 
  },
  
  // Ferrari
  'lewis-hamilton': { 
    name: 'Lewis Hamilton', number: 44, team: 'Ferrari', teamColor: '#E8002D', country: 'UK', age: 41, height: '1.74 m', weight: '73 kg', wins: 105, podiums: 202, poles: 104, fastestLaps: 67, championships: 7, seasonPoints: 238, seasonPos: '4th', gpEntered: 350, careerPoints: 4800, dnfs: 31,
    logo: `${F1_CDN}/ferrari/2026ferrarilogo.png`, 
    logoFilter: 'none',
    image: "/drivers/lewis-hamilton.png", 
    bio: '...' 
  },
  'charles-leclerc': { 
    name: 'Charles Leclerc', number: 16, team: 'Ferrari', teamColor: '#E8002D', country: 'Monaco', age: 28, height: '1.80 m', weight: '69 kg', wins: 8, podiums: 35, poles: 25, fastestLaps: 10, championships: 0, seasonPoints: 241, seasonPos: '3rd', gpEntered: 150, careerPoints: 1200, dnfs: 12,
    logo: `${F1_CDN}/ferrari/2026ferrarilogo.png`, 
    logoFilter: 'none',
    image: "/drivers/charles-leclerc.png", 
    bio: '...' 
  },
  
  // Red Bull
  'max-verstappen': { 
    name: 'Max Verstappen', number: 3, team: 'Red Bull Racing', teamColor: '#3671C6', country: 'Netherlands', age: 28, height: '1.81 m', weight: '72 kg', wins: 65, podiums: 115, poles: 45, fastestLaps: 35, championships: 4, seasonPoints: 236, seasonPos: '5th', gpEntered: 210, careerPoints: 3000, dnfs: 15,
    logo: `${F1_CDN}/redbullracing/2026redbullracinglogo.png`, 
    logoFilter: 'brightness(0) invert(1)', 
    image: "/drivers/max-verstappen.png", 
    bio: '...' 
  },
  'isack-hadjar': { 
    name: 'Isack Hadjar', number: 6, team: 'Red Bull Racing', teamColor: '#3671C6', country: 'France', age: 22, height: '1.75 m', weight: '67 kg', wins: 0, podiums: 2, poles: 0, fastestLaps: 1, championships: 0, seasonPoints: 45, seasonPos: '12th', gpEntered: 25, careerPoints: 60, dnfs: 2,
    logo: `${F1_CDN}/redbullracing/2026redbullracinglogo.png`, 
    logoFilter: 'brightness(0) invert(1)', 
    image: "/drivers/isack-hadjar.png", 
    bio: '...' 
  },
  
  // McLaren
  'lando-norris': { 
    name: 'Lando Norris', number: 1, team: 'McLaren', teamColor: '#FF8000', country: 'UK', age: 27, height: '1.76 m', weight: '68 kg', wins: 15, podiums: 45, poles: 10, fastestLaps: 12, championships: 1, seasonPoints: 230, seasonPos: '6th', gpEntered: 130, careerPoints: 900, dnfs: 8,
    logo: `${F1_CDN}/mclaren/2026mclarenlogo.png`, 
    logoFilter: 'none',
    image: "/drivers/lando-norris.png", 
    bio: '...' 
  },
  'oscar-piastri': { 
    name: 'Oscar Piastri', number: 81, team: 'McLaren', teamColor: '#FF8000', country: 'Australia', age: 25, height: '1.78 m', weight: '68 kg', wins: 8, podiums: 22, poles: 3, fastestLaps: 5, championships: 0, seasonPoints: 200, seasonPos: '7th', gpEntered: 60, careerPoints: 350, dnfs: 4,
    logo: `${F1_CDN}/mclaren/2026mclarenlogo.png`, 
    logoFilter: 'none',
    image: "/drivers/oscar-piastri.png", 
    bio: '...' 
  },
  
  // Aston Martin
  'fernando-alonso': { 
    name: 'Fernando Alonso', number: 14, team: 'Aston Martin', teamColor: '#229971', country: 'Spain', age: 45, height: '1.74 m', weight: '68 kg', wins: 32, podiums: 106, poles: 22, fastestLaps: 26, championships: 2, seasonPoints: 58, seasonPos: '10th', gpEntered: 400, careerPoints: 2300, dnfs: 65,
    logo: `${F1_CDN}/astonmartin/2026astonmartinlogo.png`, 
    logoFilter: 'none',
    image: "/drivers/fernando-alonso.png", 
    bio: '...' 
  },
  'lance-stroll': { 
    name: 'Lance Stroll', number: 18, team: 'Aston Martin', teamColor: '#229971', country: 'Canada', age: 28, height: '1.82 m', weight: '70 kg', wins: 0, podiums: 3, poles: 1, fastestLaps: 0, championships: 0, seasonPoints: 24, seasonPos: '15th', gpEntered: 160, careerPoints: 300, dnfs: 20,
    logo: `${F1_CDN}/astonmartin/2026astonmartinlogo.png`, 
    logoFilter: 'none',
    image: "/drivers/lance-stroll.png", 
    bio: '...' 
  },
  
  // Alpine
  'pierre-gasly': { 
    name: 'Pierre Gasly', number: 10, team: 'Alpine', teamColor: '#FF87BC', country: 'France', age: 30, height: '1.77 m', weight: '70 kg', wins: 1, podiums: 4, poles: 0, fastestLaps: 3, championships: 0, seasonPoints: 22, seasonPos: '16th', gpEntered: 140, careerPoints: 400, dnfs: 12,
    logo: `${F1_CDN}/alpine/2026alpinelogo.png`, 
    logoFilter: 'none',
    image: "/drivers/pierre-gasly.png", 
    bio: '...' 
  },
  'franco-colapinto': { 
    name: 'Franco Colapinto', number: 43, team: 'Alpine', teamColor: '#FF87BC', country: 'Argentina', age: 23, height: '1.75 m', weight: '69 kg', wins: 0, podiums: 0, poles: 0, fastestLaps: 0, championships: 0, seasonPoints: 5, seasonPos: '20th', gpEntered: 15, careerPoints: 5, dnfs: 3,
    logo: `${F1_CDN}/alpine/2026alpinelogo.png`, 
    logoFilter: 'none',
    image: "/drivers/franco-colapinto.png", 
    bio: '...' 
  },
  
  // Williams
  'alex-albon': { 
    name: 'Alex Albon', number: 23, team: 'Williams', teamColor: '#64C4FF', country: 'Thailand', age: 30, height: '1.86 m', weight: '74 kg', wins: 0, podiums: 2, poles: 0, fastestLaps: 0, championships: 0, seasonPoints: 12, seasonPos: '18th', gpEntered: 100, careerPoints: 240, dnfs: 10,
    logo: `${F1_CDN}/williams/2026williamslogo.png`, 
    logoFilter: 'none',
    image: "/drivers/alex-albon.png", 
    bio: '...' 
  },
  'carlos-sainz': { 
    name: 'Carlos Sainz', number: 55, team: 'Williams', teamColor: '#64C4FF', country: 'Spain', age: 32, height: '1.78 m', weight: '72 kg', wins: 4, podiums: 25, poles: 6, fastestLaps: 4, championships: 0, seasonPoints: 110, seasonPos: '8th', gpEntered: 200, careerPoints: 1100, dnfs: 18,
    logo: `${F1_CDN}/williams/2026williamslogo.png`, 
    logoFilter: 'none',
    image: "/drivers/carlos-sainz.png", 
    bio: '...' 
  },
  
  // Racing Bulls
  'liam-lawson': { 
    name: 'Liam Lawson', number: 30, team: 'Racing Bulls', teamColor: '#6692FF', country: 'New Zealand', age: 24, height: '1.75 m', weight: '68 kg', wins: 0, podiums: 0, poles: 0, fastestLaps: 0, championships: 0, seasonPoints: 8, seasonPos: '19th', gpEntered: 30, careerPoints: 10, dnfs: 2,
    logo: `${F1_CDN}/racingbulls/2026racingbullslogo.png`, 
    logoFilter: 'none',
    image: "/drivers/liam-lawson.png", 
    bio: '...' 
  },
  'arvid-lindblad': { 
    name: 'Arvid Lindblad', number: 41, team: 'Racing Bulls', teamColor: '#6692FF', country: 'UK', age: 19, height: '1.80 m', weight: '70 kg', wins: 0, podiums: 0, poles: 0, fastestLaps: 0, championships: 0, seasonPoints: 0, seasonPos: '22nd', gpEntered: 5, careerPoints: 0, dnfs: 1,
    logo: `${F1_CDN}/racingbulls/2026racingbullslogo.png`, 
    logoFilter: 'none',
    image: "/drivers/arvid-lindblad.png", 
    bio: '...' 
  },
  
  // Haas
  'esteban-ocon': { 
    name: 'Esteban Ocon', number: 31, team: 'Haas', teamColor: '#B6BABD', country: 'France', age: 30, height: '1.86 m', weight: '70 kg', wins: 1, podiums: 4, poles: 0, fastestLaps: 1, championships: 0, seasonPoints: 18, seasonPos: '17th', gpEntered: 150, careerPoints: 400, dnfs: 15,
    logo: `${F1_CDN}/haas/2026haaslogo.png`, 
    logoFilter: 'none',
    image: "/drivers/esteban-ocon.png", 
    bio: '...' 
  },
  'oliver-bearman': { 
    name: 'Oliver Bearman', number: 87, team: 'Haas', teamColor: '#B6BABD', country: 'UK', age: 21, height: '1.82 m', weight: '72 kg', wins: 0, podiums: 1, poles: 0, fastestLaps: 1, championships: 0, seasonPoints: 30, seasonPos: '13th', gpEntered: 25, careerPoints: 40, dnfs: 3,
    logo: `${F1_CDN}/haas/2026haaslogo.png`, 
    logoFilter: 'none',
    image: "/drivers/oliver-bearman.png", 
    bio: '...' 
  },
  
  // Audi
  'nico-hulkenberg': { 
    name: 'Nico Hulkenberg', number: 27, team: 'Audi', teamColor: '#52E252', country: 'Germany', age: 39, height: '1.84 m', weight: '73 kg', wins: 0, podiums: 1, poles: 1, fastestLaps: 2, championships: 0, seasonPoints: 15, seasonPos: '14th', gpEntered: 220, careerPoints: 550, dnfs: 25,
    logo: `${F1_CDN}/audi/2026audilogo.png`, 
    logoFilter: 'none',
    image: "/drivers/nico-hulkenberg.png", 
    bio: '...' 
  },
  'gabriel-bortoleto': { 
    name: 'Gabriel Bortoleto', number: 5, team: 'Audi', teamColor: '#52E252', country: 'Brazil', age: 21, height: '1.80 m', weight: '70 kg', wins: 0, podiums: 0, poles: 0, fastestLaps: 0, championships: 0, seasonPoints: 2, seasonPos: '21st', gpEntered: 10, careerPoints: 2, dnfs: 2,
    logo: `${F1_CDN}/audi/2026audilogo.png`, 
    logoFilter: 'none',
    image: "/drivers/gabriel-bortoleto.png", 
    bio: '...' 
  },
  
  // Cadillac
  'sergio-perez': { 
    name: 'Sergio Perez', number: 11, team: 'Cadillac', teamColor: '#FFD700', country: 'Mexico', age: 36, height: '1.73 m', weight: '63 kg', wins: 6, podiums: 39, poles: 3, fastestLaps: 12, championships: 0, seasonPoints: 40, seasonPos: '11th', gpEntered: 280, careerPoints: 1600, dnfs: 22,
    logo: `${F1_CDN}/cadillac/2026cadillaclogo.png`, 
    logoFilter: 'none',
    image: "/drivers/sergio-perez.png", 
    bio: '...' 
  },
  'valtteri-bottas': { 
    name: 'Valtteri Bottas', number: 77, team: 'Cadillac', teamColor: '#FFD700', country: 'Finland', age: 37, height: '1.73 m', weight: '70 kg', wins: 10, podiums: 67, poles: 20, fastestLaps: 19, championships: 0, seasonPoints: 100, seasonPos: '9th', gpEntered: 240, careerPoints: 1800, dnfs: 20,
    logo: `${F1_CDN}/cadillac/2026cadillaclogo.png`, 
    logoFilter: 'none',
    image: "/drivers/valtteri-bottas.png", 
    bio: '...' 
  }
}