import { Vehicle, VehicleCategory } from '../types/database.types';

export const VEHICLE_CATEGORIES: VehicleCategory[] = [
  'Mini Car',
  'Sedan',
  'SUV',
  'Flat Roof Van',
  'High Roof Van',
  'Mini Bus',
  'Bus'
];

export const VEHICLES_DATA: Vehicle[] = [
  {
    id: 'veh-kdh-high-roof',
    slug: 'toyota-kdh-high-roof-van',
    brand: 'Toyota',
    model: 'HiAce KDH — High Roof Luxury Van',
    year: 2022,
    category: 'High Roof Van',
    passenger_capacity: 6,
    luggage_capacity: 6,
    ac_equipped: true,
    seating_type: 'Plush High-Back Individual Reclining Seats',
    features: [
      'Dual Zone High-Capacity Air Conditioning',
      'Individual High-Back Reclining Seats',
      'Generous Standing Room & Wide Windows',
      'Large Luggage Compartment',
      'USB Mobile Charging Ports',
      'Complimentary Bottled Water'
    ],
    suitability: 'The gold standard for families, groups of friends & multi-day Sri Lanka tours with substantial luggage.',
    cover_image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1000&q=80',
    gallery_images: [
      'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1000&q=80'
    ],
    is_published: true
  },
  {
    id: 'veh-sedan-premio',
    slug: 'toyota-premio-axio-sedan',
    brand: 'Toyota',
    model: 'Premio / Axio Luxury Sedan',
    year: 2021,
    category: 'Sedan',
    passenger_capacity: 3,
    luggage_capacity: 3,
    ac_equipped: true,
    seating_type: 'Ergonomic Leather Seating',
    features: [
      'Climate Control Air Conditioning',
      'Ultra Quiet & Smooth Suspension',
      'Tinted UV Sun Protection Glass',
      'Spacious Boot for 3 Medium Suitcases',
      'Phone Charger & Refreshments',
      'Ideal for couples and solo travelers'
    ],
    suitability: 'Ideal for couples, solo travelers, and business airport transfers needing smooth, private comfort.',
    cover_image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1000&q=80',
    is_published: true
  },
  {
    id: 'veh-suv-prado',
    slug: 'toyota-land-cruiser-prado-suv',
    brand: 'Toyota',
    model: 'Land Cruiser Prado Luxury SUV',
    year: 2022,
    category: 'SUV',
    passenger_capacity: 4,
    luggage_capacity: 4,
    ac_equipped: true,
    seating_type: 'Full Leather Heated/Cooled Luxury Captain Chairs',
    features: [
      'Multi-Zone Climate Control',
      'Full 4WD Capability for Hill Country & Safari Tracks',
      'Elevated Road Stance & Panoramic Views',
      'Premium Acoustic Audio System',
      'USB-C Fast Chargers at every seat',
      'Chilled Onboard Refreshments'
    ],
    suitability: 'Premium travelers seeking luxury elevation, mountain stability, and supreme ride comfort across all terrains.',
    cover_image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=80',
    is_published: true
  },
  {
    id: 'veh-kdh-flat-roof',
    slug: 'toyota-kdh-flat-roof-van',
    brand: 'Toyota',
    model: 'HiAce KDH Flat Roof Van',
    year: 2020,
    category: 'Flat Roof Van',
    passenger_capacity: 5,
    luggage_capacity: 4,
    ac_equipped: true,
    seating_type: 'Adjustable Individual Cloth Seats',
    features: [
      'Front & Rear Air Conditioning',
      'Compact Maneuverability for Narrow Hill Roads',
      'Ample Rear Luggage Space',
      'Comfortable ride for 4 to 5 passengers',
      'USB Charging Available'
    ],
    suitability: 'Budget-conscious small families and groups wanting spacious van comfort at economical rates.',
    cover_image: 'https://images.unsplash.com/photo-1559297434-fae8a1916a79?auto=format&fit=crop&w=1000&q=80',
    is_published: true
  },
  {
    id: 'veh-mini-car',
    slug: 'suzuki-wagon-r-mini-car',
    brand: 'Suzuki / Daihatsu',
    model: 'Wagon R / Alto Mini Car',
    year: 2021,
    category: 'Mini Car',
    passenger_capacity: 2,
    luggage_capacity: 2,
    ac_equipped: true,
    seating_type: 'Compact Fabric Seats',
    features: [
      'Effective Air Conditioning',
      'High Fuel Efficiency',
      'Ideal for Short Urban Transfers & Day Trips',
      'Compact Luggage Capacity (1-2 small bags)'
    ],
    suitability: 'Couples or solo backpackers on short transfers or light city excursions.',
    cover_image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80',
    is_published: true
  },
  {
    id: 'veh-mini-bus-coaster',
    slug: 'toyota-coaster-mini-bus',
    brand: 'Toyota',
    model: 'Coaster Luxury Mini Coach',
    year: 2021,
    category: 'Mini Bus',
    passenger_capacity: 15,
    luggage_capacity: 15,
    ac_equipped: true,
    seating_type: 'Wide Aisle Reclining Touring Seats with Armrests',
    features: [
      'Overhead Individual Air Con Vents & Reading Lights',
      'Microphone & PA System for Chauffeur-Guide',
      'Dedicated Rear & Underfloor Luggage Compartment',
      'High Panoramic Windows for Landscape Viewing',
      'Spacious Aisle for Easy Boarding'
    ],
    suitability: 'Extended family groups, corporate retreats, and touring parties seeking unified luxury transportation.',
    cover_image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1000&q=80',
    is_published: true
  },
  {
    id: 'veh-luxury-bus',
    slug: 'mitsubishi-fuso-luxury-coach',
    brand: 'Mitsubishi / Isuzu',
    model: 'Luxury 33-Seater Touring Coach',
    year: 2020,
    category: 'Bus',
    passenger_capacity: 28,
    luggage_capacity: 30,
    ac_equipped: true,
    seating_type: 'Executive High-Deck Reclining Seats',
    features: [
      'Heavy Duty Climate Control System',
      'Massive Underfloor Baggage Holds',
      'Professional Tour Guide Audio Setup',
      'High-Deck Panoramic Observation Height',
      'Air Suspension for Gentle Long-Distance Cruising'
    ],
    suitability: 'Large international travel groups, tour operators, and destination wedding parties across Sri Lanka.',
    cover_image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80',
    is_published: true
  }
];
