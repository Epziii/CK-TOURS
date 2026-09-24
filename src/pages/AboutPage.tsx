import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Compass, HeartHandshake, Car, MessageCircle, MapPin, Sparkles, ArrowRight } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-28 pb-24 bg-warm-50 min-h-screen animate-fade-in">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-gold-100 text-gold-900 text-xs font-semibold uppercase tracking-wider mb-4">
            <span>About CK Tours 🇱🇰</span>
          </div>

          <h1 className="font-serif font-bold text-3xl sm:text-5xl text-ceylon-950 tracking-tight mb-4">
            Comfort • Safety • Luxury
          </h1>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            A Sri Lankan private transportation and tour-planning company dedicated to providing international travelers with trustworthy, comfortable, and personalized journeys across Sri Lanka.
          </p>
        </div>
      </div>

      {/* Main Story & Core Principles */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Story Intro Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-warm-200 shadow-soft">
          <div className="max-w-3xl mx-auto space-y-6 text-sm sm:text-base text-gray-700 leading-relaxed">
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-ceylon-950">
              Our Approach to Sri Lankan Travel
            </h2>

            <p>
              Sri Lanka is an extraordinary island — within a single day, one can travel from humid coastal palms through misty hillside tea plantations to dry-zone wildlife reserves. Navigating these varied terrains comfortably requires attentive local coordination and experienced driving.
            </p>

            <p>
              <strong>CK Tours</strong> was created to offer international tourists a calm, reliable, and premium private travel service. Rather than treating travel as an automated transaction, we handle each itinerary personally. When you inquire with CK Tours, you speak directly with local specialists who understand road conditions, driving durations, and authentic Sri Lankan hospitality.
            </p>

            <p>
              We do not believe in high-pressure sales tactics or forced commercial tourist stops. Our priority is your peace of mind, physical comfort, and freedom to experience Sri Lanka at your own rhythm.
            </p>
          </div>
        </div>

        {/* 6 Core Focus Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-7 rounded-3xl border border-warm-200 shadow-soft">
            <div className="w-10 h-10 rounded-xl bg-ceylon-900 text-gold-400 flex items-center justify-center mb-4">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-ceylon-950 mb-2">Local Knowledge</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Deep familiarity with local travel times, seasonal weather variations across coasts, scenic detour options, and authentic cultural sites.
            </p>
          </div>

          <div className="bg-white p-7 rounded-3xl border border-warm-200 shadow-soft">
            <div className="w-10 h-10 rounded-xl bg-ceylon-900 text-gold-400 flex items-center justify-center mb-4">
              <Car className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-ceylon-950 mb-2">Comfortable Fleet</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Carefully maintained fleet with high-capacity air conditioning, ample legroom, and generous luggage capacity suited for long Sri Lankan roads.
            </p>
          </div>

          <div className="bg-white p-7 rounded-3xl border border-warm-200 shadow-soft">
            <div className="w-10 h-10 rounded-xl bg-ceylon-900 text-gold-400 flex items-center justify-center mb-4">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-ceylon-950 mb-2">Professional Chauffeurs</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Courteous, licensed English-speaking local drivers trained in safe driving techniques, attentive manners, and passenger discretion.
            </p>
          </div>

          <div className="bg-white p-7 rounded-3xl border border-warm-200 shadow-soft">
            <div className="w-10 h-10 rounded-xl bg-ceylon-900 text-gold-400 flex items-center justify-center mb-4">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-ceylon-950 mb-2">Personalized Planning</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              We design itineraries specifically around your travel dates, group size, and interests — from wildlife safaris to secluded coastal retreats.
            </p>
          </div>

          <div className="bg-white p-7 rounded-3xl border border-warm-200 shadow-soft">
            <div className="w-10 h-10 rounded-xl bg-ceylon-900 text-gold-400 flex items-center justify-center mb-4">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-ceylon-950 mb-2">Flexible Journeys</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              You are never locked into a rigid timetable. Stop for photos, sample tropical fruits, or adjust daily timings directly with your driver.
            </p>
          </div>

          <div className="bg-white p-7 rounded-3xl border border-warm-200 shadow-soft">
            <div className="w-10 h-10 rounded-xl bg-ceylon-900 text-gold-400 flex items-center justify-center mb-4">
              <MessageCircle className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-ceylon-950 mb-2">Direct Communication</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Transparent, prompt responses on WhatsApp and email before, during, and after your journey. Direct human support at all times.
            </p>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="bg-ceylon-950 text-white rounded-3xl p-8 sm:p-12 text-center">
          <h3 className="font-serif font-bold text-2xl sm:text-3xl mb-4">
            Plan Your Journey with Local Care
          </h3>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl mx-auto mb-8">
            Tell us about your upcoming travel to Sri Lanka. We will happily draft an itinerary and transparent quotation for your review.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/quote"
              className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-gold-400 to-gold-500 text-ceylon-950 font-bold rounded-xl text-sm shadow hover:scale-[1.02] transition-transform"
            >
              Request Free Quote
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl text-sm border border-white/20 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
