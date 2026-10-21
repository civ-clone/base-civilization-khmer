import Khmer from './Khmer';
import CityName from '@civ-clone/core-civilization/CityName';
import { instance as cityNameRegistryInstance } from '@civ-clone/core-civilization/CityNameRegistry';

// The first is the capital.
(
  [
    'Angkor',
    'Hariharalaya',
    'Koh Ker',
    'Phnom Penh',
    'Oudong',
    'Banteay Srei',
    'Preah Khan',
    'Phimai',
    'Sambor Prei Kuk',
    'Battambang',
    'Kampong Cham',
    'Kampot',
    'Siem Reap',
    'Longvek',
    'Angkor Borei',
    'Banteay Chhmar',
    'Beng Mealea',
    'Wat Phu',
    'Lopburi',
    'Kampong Thom',
    'Pursat',
    'Kratie',
    'Prey Nokor',
    'Takeo',
    'Svay Rieng',
    'Stung Treng',
    'Mahendraparvata',
    'Banteay Meanchey',
    'Pailin',
    'Kep',
  ] as string[]
).forEach((name, i): void =>
  cityNameRegistryInstance.register(new CityName(name, Khmer, i === 0))
);
