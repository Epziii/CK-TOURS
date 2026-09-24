import { GuestMemory } from '../types/database.types';

export const GUEST_MEMORIES: GuestMemory[] = [
  {
    id: 'mem-1',
    traveler_name: 'David & Sophie Miller',
    country: 'United Kingdom 🇬🇧',
    trip_date: 'February 2026',
    route_summary: '7 Days: Colombo → Sigiriya → Kandy → Nuwara Eliya → Galle',
    feedback_quote: 'Our driver was calm, respectful, and navigated the mountain roads with immense skill. We never felt rushed, and every stop felt genuine.',
    story_text: 'Traveling as a couple with lots of photography gear, having a private KDH van made all the difference. Our driver knew exactly when to arrive at Sigiriya before the sun peaked, and pointed out roadside fruit stands for fresh king coconuts.',
    photo_urls: [
      'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1588598198321-9735fd52455b?auto=format&fit=crop&w=800&q=80'
    ],
    vehicle_used: 'Toyota KDH High Roof Van',
    is_published: true
  },
  {
    id: 'mem-2',
    traveler_name: 'Lukas & Elena Becker',
    country: 'Germany 🇩🇪',
    trip_date: 'January 2026',
    route_summary: '8 Days: Kandy → Nuwara Eliya → Ella Train → Yala → Mirissa',
    feedback_quote: 'The coordination for the Ella blue train was seamless. Our driver dropped us at the station, had our heavy suitcases ready at Ella, and arranged an unforgettable Yala safari jeep.',
    story_text: 'We appreciated the honesty from CK Tours right from our initial WhatsApp chat. No hidden fuel extras, no forced shopping stops, just dependable, friendly service throughout our hill country road trip.',
    photo_urls: [
      'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80'
    ],
    vehicle_used: 'Toyota Premio Luxury Sedan',
    is_published: true
  },
  {
    id: 'mem-3',
    traveler_name: 'The Thornton Family (5 Adults & 2 Kids)',
    country: 'Australia 🇦🇺',
    trip_date: 'December 2025',
    route_summary: '10 Days: Cultural Triangle → Tea Country → Yala Safari → Bentota',
    feedback_quote: 'Traveling with children and grandparents is always a challenge, but CK Tours made it completely stress-free. The van had cold AC throughout and the driver was gentle and patient.',
    story_text: 'The high roof van allowed the kids to nap comfortably between destinations while the grandparents enjoyed the lush scenery in full air conditioning. CK Tours helped us adjust the daily pacing whenever the kids got tired.',
    photo_urls: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80'
    ],
    vehicle_used: 'Toyota KDH High Roof Luxury Van',
    is_published: true
  },
  {
    id: 'mem-4',
    traveler_name: 'Camille & Antoine Laurent',
    country: 'France 🇫🇷',
    trip_date: 'November 2025',
    route_summary: '5 Days: Kandy → Tea Trails → Galle Fort',
    feedback_quote: 'Clear communication before we even landed at CMB. The vehicle was spotlessly clean every single morning, with chilled water bottles waiting for us.',
    story_text: 'We booked the vehicle + driver service for 5 days. Having our driver guide us to authentic local curry spots in Kandy and avoiding tourist traps made our holiday so special.',
    photo_urls: [
      'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=800&q=80'
    ],
    vehicle_used: 'Toyota Land Cruiser Prado SUV',
    is_published: true
  },
  {
    id: 'mem-5',
    traveler_name: 'Markus & Sanne van Dijk',
    country: 'Netherlands 🇳🇱',
    trip_date: 'October 2025',
    route_summary: '12 Days: Complete Island Circle',
    feedback_quote: 'What stood out most was the flexibility. When heavy rain hit Nuwara Eliya, our driver suggested an earlier morning drive to Ella, which gave us clear blue skies over Nine Arch Bridge!',
    story_text: 'Over 12 days, we covered more than 1,200 kilometers across Sri Lanka. The vehicle remained impeccable, and our chauffeur became a trusted friend by the time he dropped us back at the airport.',
    photo_urls: [
      'https://images.unsplash.com/photo-1588598198321-9735fd52455b?auto=format&fit=crop&w=800&q=80'
    ],
    vehicle_used: 'Toyota HiAce KDH Van',
    is_published: true
  }
];
