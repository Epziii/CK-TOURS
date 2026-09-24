# CK TOURS 🇱🇰 — Comfort • Safety • Luxury

**Official Website**: [https://ck-tours.top](https://ck-tours.top)  
**Primary Business**: Private Transportation & Custom Tour Planning across Sri Lanka  
**Contact Email**: [booking@ck-tours.top](mailto:booking@ck-tours.top)  
**WhatsApp**: `+94 76 499 8808` (`94764998808`)

---

## 🌴 Overview

CK Tours provides private chauffeured vehicles, pre-made & custom Sri Lanka itineraries, vehicle-only hire, vehicle + accommodation packages, and personalized travel assistance.

The business operates on an authentic, human-assisted travel model:
- **No robotic dynamic pricing** or artificial algorithms
- **No fake customer reviews, fake awards, or inflated statistics**
- Every quotation is handcrafted manually by the CK Tours local team
- International travelers can request free quotations online and connect seamlessly via WhatsApp and email

---

## 🚀 Website Structure & Pages

1. **Home (`/`)**: Scenic Ceylon hero, 6 value pillars (Comfort, Safety, Luxury), 4 core services, featured itineraries, fleet highlights, real traveler memories & guest feedback, and 4-step human planning process.
2. **Itineraries (`/tours`)**: Pre-made Sri Lanka tours (5d, 7d, 8d, 10d, 12d) with duration filters and custom itinerary callouts.
3. **Itinerary Detail (`/tours/:slug`)**: Day-by-Day schedule (Day 01, Day 02, etc.), destinations, route maps, signature highlights, and "Customize This Journey" quotation action.
4. **Vehicles (`/vehicles`)**: Fleet showcase covering Mini Cars, Sedans, SUVs, Flat Roof Vans, High Roof Vans (Toyota KDH), Mini Buses, and Coaches with passenger and luggage capacities.
5. **Vehicle Detail (`/vehicles/:slug`)**: Detailed comfort specifications, dual A/C features, seating types, and direct vehicle booking requests.
6. **Services (`/services`)**: In-depth presentation of Vehicle Only, Vehicle + Accommodation, Accommodation Assistance, and Custom Tours + 4-step workflow.
7. **Memories & Feedback (`/memories`)**: Real moments and traveler guestbook reflections from international visitors across UK, Germany, Australia, Netherlands, and France. Includes a submission modal for past guests.
8. **About CK Tours (`/about`)**: Factual, honest story of CK Tours, local knowledge, safety standards, and driver etiquette.
9. **Contact (`/contact`)**: Direct WhatsApp chat links, official email, and quick inquiry form.
10. **Free Quote (`/quote`)**: Multi-step quotation form collecting personal details, dates, traveler counts, service preferences, and vehicle selections with instant WhatsApp pre-formatted dispatch.

---

## 🛠️ Technology Stack

- **Framework**: Vite + React 18 + TypeScript
- **Styling**: Tailwind CSS with custom Ceylon Emerald (`#07241C`) and Warm Gold (`#D59220`) palette
- **Icons**: Lucide React
- **Routing**: React Router v6 with scroll restoration
- **Database**: Supabase client readiness with complete PostgreSQL schema (`supabase/schema.sql`)
- **SEO**: Semantic HTML, Open Graph tags, JSON-LD Schema ready, `robots.txt`, and `sitemap.xml`

---

## 🗄️ Database & Admin Readiness (`supabase/schema.sql`)

The repository includes a production PostgreSQL migration with Row-Level Security (RLS) policies:
- `drivers` (Strict RLS: sensitive NIC, license number, private phone numbers are hidden; public view `public_drivers` is sanitized)
- `vehicles`, `vehicle_types`, `vehicle_photos`
- `tours`, `tour_itineraries`
- `quote_requests` (Public insert allowed; admin review)
- `guest_memories` (Public insert with `is_published = false` moderation)
- `admins` (Future `admin.ck-tours.top` portal readiness)

---

## 💻 Development & Production

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Compile TypeScript & build production bundle
npm run build

# Preview production build locally
npm run preview
```
