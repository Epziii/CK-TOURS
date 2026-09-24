-- ==============================================================================
-- CK TOURS (https://ck-tours.top) — PRODUCTION DATABASE SCHEMA
-- Comfort • Safety • Luxury
-- Sri Lanka Private Transportation & Tour Planning
-- ==============================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. VEHICLE TYPES
CREATE TABLE IF NOT EXISTS vehicle_types (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    category VARCHAR(50) NOT NULL, -- 'Mini Car', 'Sedan', 'SUV', 'Flat Roof Van', 'High Roof Van', 'Mini Bus', 'Bus'
    passenger_capacity INT NOT NULL,
    luggage_capacity INT NOT NULL,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. VEHICLES
CREATE TABLE IF NOT EXISTS vehicles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    vehicle_type_id UUID REFERENCES vehicle_types(id) ON DELETE SET NULL,
    brand VARCHAR(100) NOT NULL,
    model VARCHAR(100) NOT NULL,
    year INT,
    passenger_capacity INT NOT NULL,
    luggage_capacity INT NOT NULL,
    ac_equipped BOOLEAN DEFAULT TRUE,
    seating_type VARCHAR(100) DEFAULT 'Comfort Reclining Seats',
    features TEXT[] DEFAULT ARRAY['Air Conditioning', 'Luggage Compartment', 'Bottled Water', 'Mobile Charger'],
    suitability TEXT DEFAULT 'Airport Transfers & Multi-Day Tours',
    is_published BOOLEAN DEFAULT TRUE,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. VEHICLE PHOTOS
CREATE TABLE IF NOT EXISTS vehicle_photos (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    vehicle_id UUID REFERENCES vehicles(id) ON DELETE CASCADE,
    photo_url TEXT NOT NULL,
    caption VARCHAR(255),
    is_primary BOOLEAN DEFAULT FALSE,
    display_order INT DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. DRIVERS (SENSITIVE DATA - STRICT SECURITY)
CREATE TABLE IF NOT EXISTS drivers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    full_name VARCHAR(150) NOT NULL,
    display_name VARCHAR(100) NOT NULL,
    languages TEXT[] DEFAULT ARRAY['English', 'Sinhala'],
    experience_years INT DEFAULT 5,
    bio TEXT,
    avatar_url TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    -- Strictly internal/sensitive columns:
    nic_number VARCHAR(50),
    driving_license_number VARCHAR(50),
    private_phone VARCHAR(50),
    emergency_contact VARCHAR(100),
    internal_notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Safe Public View for Drivers (Hides NIC, License, Private Contacts & Notes)
CREATE OR REPLACE VIEW public_drivers AS
SELECT 
    id,
    display_name,
    languages,
    experience_years,
    bio,
    avatar_url,
    is_active
FROM drivers
WHERE is_active = TRUE;

-- 5. TOURS
CREATE TABLE IF NOT EXISTS tours (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(200) NOT NULL,
    slug VARCHAR(200) UNIQUE NOT NULL,
    duration_days INT NOT NULL,
    duration_nights INT NOT NULL,
    short_description TEXT NOT NULL,
    overview TEXT,
    cover_image TEXT NOT NULL,
    destinations TEXT[] NOT NULL,
    highlights TEXT[] DEFAULT ARRAY[]::TEXT[],
    is_published BOOLEAN DEFAULT TRUE,
    display_order INT DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 6. TOUR ITINERARIES (Day by Day Breakdown)
CREATE TABLE IF NOT EXISTS tour_itineraries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tour_id UUID REFERENCES tours(id) ON DELETE CASCADE,
    day_number INT NOT NULL,
    title VARCHAR(200) NOT NULL,
    route VARCHAR(255) NOT NULL, -- e.g. "Colombo → Kandy"
    description TEXT NOT NULL,
    activities TEXT[],
    overnight_stay VARCHAR(150),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 7. QUOTE REQUESTS (Primary Lead Intake)
CREATE TABLE IF NOT EXISTS quote_requests (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    full_name VARCHAR(150) NOT NULL,
    country VARCHAR(100) NOT NULL,
    email VARCHAR(150),
    phone_whatsapp VARCHAR(50) NOT NULL,
    arrival_date DATE,
    departure_date DATE,
    adults_count INT DEFAULT 1,
    children_count INT DEFAULT 0,
    pickup_location VARCHAR(200),
    dropoff_location VARCHAR(200),
    service_type VARCHAR(100) NOT NULL, -- 'Vehicle Only', 'Vehicle + Accommodation', 'Accommodation Assistance', 'Custom Tour'
    preferred_vehicle VARCHAR(100),
    interested_itinerary_title VARCHAR(200),
    interested_itinerary_id UUID REFERENCES tours(id) ON DELETE SET NULL,
    additional_requirements TEXT,
    status VARCHAR(50) DEFAULT 'New', -- 'New', 'Contacted', 'Quoted', 'Confirmed', 'Archived'
    ip_address VARCHAR(50),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 8. GUEST MEMORIES & FEEDBACK (Authentic Guest Moments)
CREATE TABLE IF NOT EXISTS guest_memories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    traveler_name VARCHAR(150) NOT NULL,
    country VARCHAR(100) NOT NULL,
    trip_date VARCHAR(50),
    route_summary VARCHAR(255),
    feedback_quote TEXT NOT NULL,
    story_text TEXT,
    photo_urls TEXT[] DEFAULT ARRAY[]::TEXT[],
    is_published BOOLEAN DEFAULT FALSE, -- Moderated before appearing publicly
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 9. ADMINS
CREATE TABLE IF NOT EXISTS admins (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    auth_user_id UUID UNIQUE,
    full_name VARCHAR(150) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    role VARCHAR(50) DEFAULT 'admin',
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ==============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ==============================================================================

ALTER TABLE vehicle_types ENABLE ROW LEVEL SECURITY;
ALTER TABLE vehicles ENABLE ROW LEVEL SECURITY;
ALTER TABLE vehicle_photos ENABLE ROW LEVEL SECURITY;
ALTER TABLE drivers ENABLE ROW LEVEL SECURITY;
ALTER TABLE tours ENABLE ROW LEVEL SECURITY;
ALTER TABLE tour_itineraries ENABLE ROW LEVEL SECURITY;
ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE guest_memories ENABLE ROW LEVEL SECURITY;
ALTER TABLE admins ENABLE ROW LEVEL SECURITY;

-- Public can read published catalog data
CREATE POLICY "Public can view published vehicle types" ON vehicle_types FOR SELECT USING (true);
CREATE POLICY "Public can view published vehicles" ON vehicles FOR SELECT USING (is_published = true AND is_active = true);
CREATE POLICY "Public can view vehicle photos" ON vehicle_photos FOR SELECT USING (true);
CREATE POLICY "Public can view published tours" ON tours FOR SELECT USING (is_published = true);
CREATE POLICY "Public can view tour itineraries" ON tour_itineraries FOR SELECT USING (true);
CREATE POLICY "Public can view published memories" ON guest_memories FOR SELECT USING (is_published = true);

-- Public can INSERT quote requests & submit memories for review
CREATE POLICY "Anyone can submit a quote request" ON quote_requests FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can submit a guest memory" ON guest_memories FOR INSERT WITH CHECK (true);

-- Drivers table: NEVER readable by public anon role! Only authenticated admin role can view
CREATE POLICY "Only admins can access drivers table" ON drivers FOR ALL TO authenticated USING (true);
CREATE POLICY "Only admins can view quote requests" ON quote_requests FOR SELECT TO authenticated USING (true);
