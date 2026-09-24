import { Vehicle, VehicleCategory } from '../types/database.types';

export const VEHICLE_CATEGORIES: VehicleCategory[] = [
  'High Roof Van',
  'Flat Roof Van',
  'Sedan',
  'SUV',
  'Mini Car',
  'Mini Bus'
];

export const VEHICLES_DATA: Vehicle[] = [
  {
    id: 'veh-kdh-high-roof',
    slug: 'toyota-kdh-high-roof-van',
    brand: 'Toyota',
    model: 'HiAce KDH — High Roof Luxury Van',
    year: 2022,
    category: 'High Roof Van',
    passenger_capacity: 14,
    luggage_capacity: 0,
    ac_equipped: true,
    seating_type: 'Plush High-Back Individual Reclining Seats',
    features: [
      'Dual Zone High-Capacity Air Conditioning',
      'Comfortable Reclining Seats',
      'Generous Standing Room & Panoramic Wide Windows',
      'USB Mobile Charging Ports',
      'Complimentary Bottled Water',
      'Dedicated Chauffeur Guide'
    ],
    suitability: 'The gold standard for families, larger tour groups & multi-day Sri Lanka journeys with comfortable seating for up to 14 passengers.',
    cover_image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1000&q=80',
    gallery_images: [
      'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1000&q=80'
    ],
    is_published: true
  },
  {
    id: 'veh-kdh-flat-roof',
    slug: 'toyota-kdh-flat-roof-van',
    brand: 'Toyota',
    model: 'HiAce KDH Flat Roof Van',
    year: 2021,
    category: 'Flat Roof Van',
    passenger_capacity: 9,
    luggage_capacity: 0,
    ac_equipped: true,
    seating_type: 'Adjustable Individual Seats',
    features: [
      'Front & Rear Dual Air Conditioning',
      'Compact Maneuverability for Narrow Hill Country Roads',
      'Comfortable Ride for up to 9 Passengers',
      'USB Charging Available',
      'Quiet & Smooth Highway Cruising'
    ],
    suitability: 'Ideal for medium-sized families and small groups wanting spacious van travel across Sri Lanka.',
    cover_image: 'https://images.unsplash.com/photo-1559297434-fae8a1916a79?auto=format&fit=crop&w=1000&q=80',
    is_published: true
  },
  {
    id: 'veh-sedan-premio',
    slug: 'toyota-premio-axio-sedan',
    brand: 'Toyota',
    model: 'Premio / Axio Luxury Sedan',
    year: 2021,
    category: 'Sedan',
    passenger_capacity: 4,
    luggage_capacity: 0,
    ac_equipped: true,
    seating_type: 'Ergonomic Leather Seating',
    features: [
      'Climate Control Air Conditioning',
      'Ultra Quiet & Smooth Suspension',
      'Tinted UV Sun Protection Glass',
      'Phone Charger & Refreshments',
      'Comfortable seating for 4 passengers'
    ],
    suitability: 'Ideal for couples, small families (up to 4 passengers), and business airport transfers needing smooth, private comfort.',
    cover_image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1000&q=80',
    is_published: true
  },
  {
    id: 'veh-suv-vezel',
    slug: 'honda-vezel-suv',
    brand: 'Honda',
    model: 'Honda Vezel Luxury SUV',
    year: 2022,
    category: 'SUV',
    passenger_capacity: 4,
    luggage_capacity: 0,
    ac_equipped: true,
    seating_type: 'Premium Leather Seating',
    features: [
      'Dual-Zone Automatic Climate Control',
      'High Ground Clearance for Hill Country & Safari Roads',
      'Elevated Road View & Panoramic Comfort',
      'Premium Sound System & Mobile Chargers',
      'Comfortable ride for up to 4 passengers'
    ],
    suitability: 'Premium travelers seeking luxury SUV elevation, mountain stability, and modern Japanese ride comfort across all terrains.',
    cover_image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=80',
    is_published: true
  },
  {
    id: 'veh-mini-car',
    slug: 'suzuki-wagon-r-mini-car',
    brand: 'Suzuki / Daihatsu',
    model: 'Wagon R / Alto Mini Car',
    year: 2021,
    category: 'Mini Car',
    passenger_capacity: 3,
    luggage_capacity: 0,
    ac_equipped: true,
    seating_type: 'Compact Fabric Seats',
    features: [
      'Effective Air Conditioning',
      'High Fuel Efficiency',
      'Ideal for Short Urban Transfers & City Excursions',
      'Accommodates up to 3 passengers'
    ],
    suitability: 'Solo travelers or small parties of up to 3 passengers for short transfers or city day trips.',
    cover_image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80',
    is_published: true
  },
  {
    id: 'veh-mini-bus-coaster',
    slug: 'toyota-coaster-mini-bus',
    brand: 'Toyota',
    model: 'Coaster Luxury Mini Coach',
    year: 2022,
    category: 'Mini Bus',
    passenger_capacity: 25,
    luggage_capacity: 0,
    ac_equipped: true,
    seating_type: 'Wide Aisle Reclining Touring Seats with Armrests',
    features: [
      'Overhead Individual Air Con Vents & Reading Lights',
      'Microphone & PA System for Chauffeur-Guide',
      'High Panoramic Windows for Landscape Viewing',
      'Spacious Aisle for Easy Boarding',
      'Accommodates up to 25 passengers'
    ],
    suitability: 'Extended family groups, corporate retreats, and touring parties seeking unified luxury travel for up to 25 passengers.',
    cover_image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1000&q=80',
    is_published: true
  }
];
