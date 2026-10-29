export const teams = [
  { 
    id: 'mercedes', name: 'Mercedes', fullName: 'Mercedes-AMG Petronas', color: '#27F4D2', car: '/teams/mercedes.png', drivers: ['George Russell', 'Kimi Antonelli'], 
    points: 607, wins: 12, podiums: 23, poles: 12, top10s: 30, fastestLaps: 9, dnfs: 4,
    championships: 8, gpEntered: 347, careerPoints: 8766.5, careerPodiums: 219, careerPoles: 148,
    teamPrincipal: 'Toto Wolff', base: 'Brackley, United Kingdom', chassis: 'W17', powerUnit: 'Mercedes',
    bio: 'Mercedes-AMG Petronas Formula One Team is a powerhouse in modern Formula 1. Dominating the hybrid era from 2014 to 2021, the Silver Arrows are known for their engineering excellence, ruthless efficiency, and a relentless pursuit of perfection.'
  },
  { 
    id: 'ferrari', name: 'Ferrari', fullName: 'Scuderia Ferrari', color: '#E8002D', car: '/teams/ferrari.png', drivers: ['Charles Leclerc', 'Lewis Hamilton'], 
    points: 474, wins: 2, podiums: 15, poles: 4, top10s: 24, fastestLaps: 4, dnfs: 5,
    championships: 16, gpEntered: 1098, careerPoints: 10500, careerPodiums: 800, careerPoles: 250,
    teamPrincipal: 'Frédéric Vasseur', base: 'Maranello, Italy', chassis: 'SF-26', powerUnit: 'Ferrari',
    bio: 'Scuderia Ferrari is the oldest and most successful team in Formula 1 history. The Prancing Horse represents passion, heritage, and the purest form of racing. With the arrival of Lewis Hamilton, the Maranello-based squad is looking to reclaim its glory days.'
  },
  { 
    id: 'redbull', name: 'Red Bull Racing', fullName: 'Oracle Red Bull Racing', color: '#3671C6', car: '/teams/redbull.png', drivers: ['Max Verstappen', 'Isack Hadjar'], 
    points: 355, wins: 2, podiums: 10, poles: 3, top10s: 20, fastestLaps: 3, dnfs: 3,
    championships: 6, gpEntered: 400, careerPoints: 7000, careerPodiums: 250, careerPoles: 100,
    teamPrincipal: 'Laurent Mekies', base: 'Milton Keynes, United Kingdom', chassis: 'RB22', powerUnit: 'Honda RBPT',
    bio: 'Red Bull Racing is the team that broke Mercedes\' dominance. Known for their aggressive car design and ruthless winning mentality, the team from Milton Keynes is now in a new era, looking to rebuild around Max Verstappen.'
  },
  { 
    id: 'mclaren', name: 'McLaren', fullName: 'McLaren Formula 1 Team', color: '#FF8000', car: '/teams/mclaren.png', drivers: ['Lando Norris', 'Oscar Piastri'], 
    points: 355, wins: 2, podiums: 8, poles: 5, top10s: 22, fastestLaps: 2, dnfs: 4,
    championships: 8, gpEntered: 950, careerPoints: 6000, careerPodiums: 500, careerPoles: 150,
    teamPrincipal: 'Andrea Stella', base: 'Woking, United Kingdom', chassis: 'MCL40', powerUnit: 'Mercedes',
    bio: 'McLaren is one of the most iconic names in motorsport. After years of rebuilding, the Papaya squad has returned to the front of the grid. With one of the strongest driver line-ups in Lando Norris and Oscar Piastri, they are a constant threat for victories.'
  },
  { 
    id: 'racingbulls', name: 'Racing Bulls', fullName: 'Visa Cash App RB', color: '#6692FF', car: '/teams/racingbulls.png', drivers: ['Liam Lawson', 'Arvid Lindblad'], 
    points: 102, wins: 0, podiums: 1, poles: 0, top10s: 8, fastestLaps: 1, dnfs: 2,
    championships: 0, gpEntered: 350, careerPoints: 800, careerPodiums: 5, careerPoles: 1,
    teamPrincipal: 'Alan Permane', base: 'Faenza, Italy', chassis: 'VCARB 03', powerUnit: 'Honda RBPT',
    bio: 'Racing Bulls (formerly AlphaTauri and Toro Rosso) is Red Bull\'s sister team. Based in Faenza, Italy, the team is known for nurturing young talent and occasionally causing upsets with bold strategy calls.'
  },
  { 
    id: 'alpine', name: 'Alpine', fullName: 'BWT Alpine F1 Team', color: '#FF87BC', car: '/teams/alpine.png', drivers: ['Pierre Gasly', 'Franco Colapinto'], 
    points: 69, wins: 0, podiums: 0, poles: 0, top10s: 5, fastestLaps: 0, dnfs: 6,
    championships: 2, gpEntered: 350, careerPoints: 1500, careerPodiums: 40, careerPoles: 20,
    teamPrincipal: 'Oliver Oakes', base: 'Enstone, United Kingdom', chassis: 'A526', powerUnit: 'Renault',
    bio: 'Alpine represents the French racing heritage of Renault. Based in Enstone, UK, the team has faced challenges in recent years but continues to fight with a passionate spirit and a focus on returning to the top.'
  },
  { 
    id: 'haas', name: 'Haas', fullName: 'MoneyGram Haas F1 Team', color: '#B6BABD', car: '/teams/haas.png', drivers: ['Esteban Ocon', 'Oliver Bearman'], 
    points: 30, wins: 0, podiums: 0, poles: 0, top10s: 3, fastestLaps: 0, dnfs: 5,
    championships: 0, gpEntered: 180, careerPoints: 300, careerPodiums: 0, careerPoles: 0,
    teamPrincipal: 'Ayao Komatsu', base: 'Kannapolis, USA', chassis: 'VF-26', powerUnit: 'Ferrari',
    bio: 'Haas is the only American-owned team on the grid. Known for their technical partnership with Ferrari and their lean operation, the team has shown flashes of brilliance and is looking to establish themselves firmly in the midfield.'
  },
  { 
    id: 'audi', name: 'Audi', fullName: 'Stake F1 Team Kick Sauber', color: '#52E252', car: '/teams/audi.png', drivers: ['Nico Hulkenberg', 'Gabriel Bortoleto'], 
    points: 23, wins: 0, podiums: 0, poles: 0, top10s: 2, fastestLaps: 0, dnfs: 4,
    championships: 0, gpEntered: 400, careerPoints: 500, careerPodiums: 10, careerPoles: 1,
    teamPrincipal: 'Mattia Binotto', base: 'Hinwil, Switzerland', chassis: 'C45', powerUnit: 'Audi',
    bio: 'Audi is entering Formula 1 as a full factory team, taking over the Sauber operation. With a massive budget and a clear vision, the German manufacturer is building for the future, aiming to disrupt the established order.'
  },
  { 
    id: 'williams', name: 'Williams', fullName: 'Williams Racing', color: '#64C4FF', car: '/teams/williams.png', drivers: ['Carlos Sainz', 'Alex Albon'], 
    points: 12, wins: 0, podiums: 0, poles: 0, top10s: 2, fastestLaps: 0, dnfs: 7,
    championships: 9, gpEntered: 800, careerPoints: 3500, careerPodiums: 300, careerPoles: 130,
    teamPrincipal: 'James Vowles', base: 'Grove, United Kingdom', chassis: 'FW48', powerUnit: 'Mercedes',
    bio: 'Williams is one of the most storied teams in F1 history. Under the leadership of James Vowles, the team is undergoing a massive rebuilding phase, focusing on long-term success and a return to the front of the grid.'
  },
  { 
    id: 'astonmartin', name: 'Aston Martin', fullName: 'Aston Martin Aramco', color: '#229971', car: '/teams/astonmartin.png', drivers: ['Fernando Alonso', 'Lance Stroll'], 
    points: 7, wins: 0, podiums: 0, poles: 0, top10s: 1, fastestLaps: 0, dnfs: 5,
    championships: 0, gpEntered: 150, careerPoints: 200, careerPodiums: 5, careerPoles: 0,
    teamPrincipal: 'Andy Cowell', base: 'Silverstone, United Kingdom', chassis: 'AMR26', powerUnit: 'Honda',
    bio: 'Aston Martin is a luxury brand bringing its style to Formula 1. Backed by Lawrence Stroll and spearheaded by legendary designer Adrian Newey, the team is building a state-of-the-art facility and a car to match its ambitions.'
  },
  { 
    id: 'cadillac', name: 'Cadillac', fullName: 'Cadillac F1 Team', color: '#FFD700', car: '/teams/cadillac.png', drivers: ['Sergio Perez', 'Valtteri Bottas'], 
    points: 0, wins: 0, podiums: 0, poles: 0, top10s: 0, fastestLaps: 0, dnfs: 3,
    championships: 0, gpEntered: 0, careerPoints: 0, careerPodiums: 0, careerPoles: 0,
    teamPrincipal: 'Graeme Lowdon', base: 'Indianapolis, USA', chassis: 'Cadillac TBD', powerUnit: 'Ferrari',
    bio: 'Cadillac is the newest team on the grid, bringing American engineering to F1. Partnering with Andretti and backed by General Motors, they are starting their journey with experienced drivers and a long-term vision for success.'
  },
]