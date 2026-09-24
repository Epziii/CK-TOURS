// TypeScript definitions matching the Supabase production database schema
export type VehicleCategory = 
  | 'Mini Car'
  | 'Sedan'
  | 'SUV'
  | 'Flat Roof Van'
  | 'High Roof Van'
  | 'Mini Bus'
  | 'Bus';

export type ServiceType =
  | 'Vehicle Only'
  | 'Vehicle + Accommodation'
  | 'Accommodation Assistance'
  | 'Custom Tour';

export interface VehicleType {
  id: string;
  name: string;
  slug: string;
  category: VehicleCategory;
  passenger_capacity: number;
  luggage_capacity?: number;
  description: string;
}

export interface Vehicle {
  id: string;
  slug: string;
  brand: string;
  model: string;
  year?: number;
  category: VehicleCategory;
  passenger_capacity: number;
  luggage_capacity?: number;
  ac_equipped: boolean;
  seating_type: string;
  features: string[];
  suitability: string;
  cover_image: string;
  gallery_images?: string[];
  is_published: boolean;
}

export interface TourItineraryDay {
  day_number: number;
  title: string;
  route: string;
  description: string;
  activities: string[];
  overnight_stay?: string;
  distance_or_scenic_notes?: string;
}

export interface Tour {
  id: string;
  title: string;
  slug: string;
  duration_days: number;
  duration_nights: number;
  short_description: string;
  overview: string;
  cover_image: string;
  destinations: string[];
  highlights: string[];
  suitable_for?: string[];
  itinerary: TourItineraryDay[];
  is_published: boolean;
}

export interface QuoteRequestPayload {
  full_name: string;
  country: string;
  email?: string;
  phone_whatsapp: string;
  arrival_date?: string;
  departure_date?: string;
  adults_count: number;
  children_count: number;
  pickup_location?: string;
  dropoff_location?: string;
  service_type: ServiceType;
  preferred_vehicle?: string;
  interested_itinerary_title?: string;
  interested_itinerary_id?: string;
  additional_requirements?: string;
}

export interface GuestMemory {
  id: string;
  traveler_name: string;
  country: string;
  trip_date: string;
  route_summary: string;
  feedback_quote: string;
  story_text?: string;
  photo_urls: string[];
  driver_mentioned?: string;
  vehicle_used?: string;
  is_published: boolean;
}
