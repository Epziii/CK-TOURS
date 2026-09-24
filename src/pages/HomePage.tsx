import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Shield, Sparkles, Car } from 'lucide-react';
import { HeroSection } from '../components/home/HeroSection';
import { TrustValueSection } from '../components/home/TrustValueSection';
import { ServicesSection } from '../components/home/ServicesSection';
import { HowItWorks } from '../components/home/HowItWorks';
import { MemoriesSection } from '../components/home/MemoriesSection';
import { TourCard } from '../components/tours/TourCard';
import { VehicleCard } from '../components/vehicles/VehicleCard';
import { TOURS_DATA } from '../data/toursData';
import { VEHICLES_DATA } from '../data/vehiclesData';

export const HomePage: React.FC = () => {
  const featuredTours = TOURS_DATA.slice(0, 3);
  const featuredVehicles = VEHICLES_DATA.slice(0, 3);

  return (
    <div className="animate-fade-in">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Trust & Value Section */}
      <TrustValueSection />

      {/* 3. Core Services Grid */}
      <ServicesSection />

      {/* 4. Pre-Made Itineraries (Explore Sri Lanka) */}
      <section className="py-20 sm:py-28 bg-white border-b border-warm-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
            <div className="max-w-2xl">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-warm-100 text-ceylon-850 text-xs font-semibold uppercase tracking-wider mb-4">
                <Compass className="w-3.5 h-3.5 text-ceylon-700" />
                <span>Explore Sri Lanka</span>
              </div>

              <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-ceylon-950 tracking-tight mb-4">
                Curated Sri Lanka Itineraries
              </h2>

              <p className="text-base text-gray-600 leading-relaxed font-normal">
                Carefully crafted travel routes designed around comfortable driving distances, cultural wonders, tea hills, and scenic shores. Each plan can be customized for your trip.
              </p>
            </div>

            <div className="mt-6 md:mt-0">
              <Link
                to="/tours"
                className="inline-flex items-center space-x-1.5 px-5 py-3 rounded-xl bg-ceylon-900 hover:bg-ceylon-800 text-gold-400 text-xs font-bold tracking-wider uppercase transition-colors"
              >
                <span>View All Itineraries</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>

          {/* Custom Route Callout */}
          <div className="mt-14 bg-warm-50 rounded-3xl p-8 border border-warm-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif font-bold text-xl text-ceylon-950 mb-1">
                Have specific destinations in mind?
              </h3>
              <p className="text-sm text-gray-600">
                We design custom day-by-day travel routes tailored to your flights and personal interests.
              </p>
            </div>
            <Link
              to="/quote?service=Custom%20Tour"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 text-ceylon-950 text-xs font-bold uppercase tracking-wider shadow hover:from-gold-400 hover:to-gold-500 transition-all flex-shrink-0"
            >
              Request Custom Route
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Fleet Showcase */}
      <section className="py-20 sm:py-28 bg-warm-50 border-b border-warm-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
            <div className="max-w-2xl">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-gold-100 text-gold-900 text-xs font-semibold uppercase tracking-wider mb-4">
                <Car className="w-3.5 h-3.5 text-gold-700" />
                <span>Premium Fleet</span>
              </div>

              <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-ceylon-950 tracking-tight mb-4">
                Comfortable Vehicles for Every Journey
              </h2>

              <p className="text-base text-gray-600 leading-relaxed font-normal">
                Air-conditioned sedans, high-roof vans, and luxury coaches maintained to high standards for long-distance cruising across Sri Lanka's scenic terrain.
              </p>
            </div>

            <div className="mt-6 md:mt-0">
              <Link
                to="/vehicles"
                className="inline-flex items-center space-x-1.5 px-5 py-3 rounded-xl bg-ceylon-900 hover:bg-ceylon-800 text-gold-400 text-xs font-bold tracking-wider uppercase transition-colors"
              >
                <span>View Full Fleet</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredVehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Authentic Traveler Memories & Feedback */}
      <MemoriesSection />

      {/* 7. 4-Step Process (How It Works) */}
      <HowItWorks />

      {/* 8. Bottom Quotation Callout */}
      <section className="py-20 bg-gradient-to-br from-ceylon-900 via-ceylon-950 to-ceylon-900 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-gold-500/20 text-gold-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-gold-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready to Explore?</span>
          </div>

          <h2 className="font-serif font-bold text-3xl sm:text-5xl tracking-tight mb-6">
            Get Your Free Sri Lanka Travel Quotation
          </h2>

          <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
            Tell us about your travel dates and requirements. Our local team will prepare a personalized itinerary and transparent quotation with zero booking obligation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/quote"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 text-ceylon-950 font-bold text-base shadow-luxury hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Request Free Quote
            </Link>

            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/20 transition-all"
            >
              Contact CK Tours
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
