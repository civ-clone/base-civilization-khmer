"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Khmer_1 = require("./Khmer");
const CityName_1 = require("@civ-clone/core-civilization/CityName");
const CityNameRegistry_1 = require("@civ-clone/core-civilization/CityNameRegistry");
// The first is the capital.
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
].forEach((name, i) => CityNameRegistry_1.instance.register(new CityName_1.default(name, Khmer_1.default, i === 0)));
//# sourceMappingURL=registerCityNames.js.map