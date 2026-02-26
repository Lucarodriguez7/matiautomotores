/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Vehicle {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  type: 'SUV' | 'Sedan' | 'Hatchback' | 'Pickup';
  km: number;
  fuel: string;
  transmission: string;
  images: string[];
  description: string;
  featured?: boolean;
}

export const vehicles: Vehicle[] = [
  {
    id: '1',
    brand: 'Toyota',
    model: 'Hilux SRX 4x4',
    year: 2023,
    price: 45000000,
    type: 'Pickup',
    km: 12000,
    fuel: 'Diesel',
    transmission: 'Automática',
    images: [
      'https://imgur.com/indEAfX.jpg',
      'https://picsum.photos/seed/hilux2/800/600',
      'https://picsum.photos/seed/hilux3/800/600'
    ],
    description: 'Impecable estado, única mano, service oficiales. La pickup más confiable del mercado.',
    featured: true
  },
  {
    id: '2',
    brand: 'Volkswagen',
    model: 'Taos Highline',
    year: 2022,
    price: 32000000,
    type: 'SUV',
    km: 25000,
    fuel: 'Nafta',
    transmission: 'Automática',
    images: [
      'https://imgur.com/QZRnJzE.jpg',
      'https://picsum.photos/seed/taos2/800/600'
    ],
    description: 'Tecnología y confort en un solo lugar. Techo panorámico, ADAS y el mejor andar.',
    featured: true
  },
  {
    id: '3',
    brand: 'Peugeot',
    model: '208 Feline',
    year: 2021,
    price: 18500000,
    type: 'Hatchback',
    km: 38000,
    fuel: 'Nafta',
    transmission: 'Automática',
    images: [
      'https://imgur.com/N1vbMKC.jpg',
      'https://picsum.photos/seed/208-2/800/600'
    ],
    description: 'Diseño europeo, i-Cockpit y bajo consumo. Ideal para la ciudad.',
    featured: true
  },
  {
    id: '4',
    brand: 'Ford',
    model: 'Ranger Limited',
    year: 2020,
    price: 38000000,
    type: 'Pickup',
    km: 65000,
    fuel: 'Diesel',
    transmission: 'Automática',
    images: [
      'https://imgur.com/TUtNGAV.jpg'
    ],
    description: 'Potencia y robustez. Lista para trabajar o disfrutar en familia.',
    featured: false
  },
  {
    id: '5',
    brand: 'Chevrolet',
    model: 'Cruze LTZ',
    year: 2022,
    price: 24000000,
    type: 'Sedan',
    km: 15000,
    fuel: 'Nafta',
    transmission: 'Automática',
    images: [
      'https://imgur.com/lRFHS2W.jpg'
    ],
    description: 'Elegancia y motor turbo. El sedán nacional más vendido.',
    featured: false
  },
  {
    id: '6',
    brand: 'Jeep',
    model: 'Compass Longitude',
    year: 2019,
    price: 28500000,
    type: 'SUV',
    km: 72000,
    fuel: 'Nafta',
    transmission: 'Automática',
    images: [
      'https://imgur.com/RZJOksR.jpg'
    ],
    description: 'Aventura y distinción. Excelente estado general.',
    featured: false
  }
];
