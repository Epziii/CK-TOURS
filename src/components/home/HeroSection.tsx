import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Shield, Sparkles, MapPin } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-ceylon-950">
      {/* Background Scenic Image with Multi-Layered Atmosphere */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=2000&q=85"
          alt="Sri Lanka Sigiriya and lush landscapes"
          className="w-full h-full object-cover object-center scale-105 animate-subtle-zoom brightness-90"
        />
        {/* Gradients to ensure text contrast while retaining beauty */}
        <div className="absolute inset-0 bg-gradient-to-t from-ceylon-950 via-ceylon-950/65 to-black/40" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-ceylon-950/40 to-ceylon-950/80" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Brand Accent Pill */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-ceylon-900/80 backdrop-blur-md border border-gold-500/30 text-gold-300 text-xs sm:text-sm font-semibold mb-6 shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span>CK Tours 🇱🇰 • Comfort • Safety • Luxury</span>
        </div>

        {/* Hero Headline */}
        <h1 className="font-serif font-bold text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-[1.12] mb-6 drop-shadow-md">
          Discover Sri Lanka, <br className="hidden sm:block" />
          <span className="italic font-normal text-gold-300">Your Way.</span>
        </h1>

        {/* Supporting Subtext */}
        <p className="max-w-2xl mx-auto text-base sm:text-xl text-gray-200 font-light leading-relaxed mb-10 text-balance">
          Private journeys, comfortable transportation and carefully planned experiences across Sri Lanka.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <Link
            to="/quote"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 text-ceylon-950 font-bold text-base shadow-luxury hover:shadow-gold-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center space-x-2"
          >
            <span>Plan My Trip</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            to="/tours"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-semibold text-base backdrop-blur-md border border-white/20 hover:border-white/40 transition-all flex items-center justify-center space-x-2"
          >
            <Compass className="w-4 h-4 text-gold-400" />
            <span>Explore Itineraries</span>
          </Link>
        </div>

        {/* Highlights Bar */}
        <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
          <div className="flex items-center space-x-3 text-warm-100">
            <div className="w-9 h-9 rounded-xl bg-ceylon-900/80 border border-gold-500/20 flex items-center justify-center text-gold-400 flex-shrink-0">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Private & Safe</div>
              <div className="text-[11px] text-gray-300">Dedicated vehicle & driver</div>
            </div>
          </div>

          <div className="flex items-center space-x-3 text-warm-100">
            <div className="w-9 h-9 rounded-xl bg-ceylon-900/80 border border-gold-500/20 flex items-center justify-center text-gold-400 flex-shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Island-Wide</div>
              <div className="text-[11px] text-gray-300">Highlands to coastal shores</div>
            </div>
          </div>

          <div className="flex items-center space-x-3 text-warm-100">
            <div className="w-9 h-9 rounded-xl bg-ceylon-900/80 border border-gold-500/20 flex items-center justify-center text-gold-400 flex-shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Bespoke Pacing</div>
              <div className="text-[11px] text-gray-300">Flexible stops on your terms</div>
            </div>
          </div>

          <div className="flex items-center space-x-3 text-warm-100">
            <div className="w-9 h-9 rounded-xl bg-ceylon-900/80 border border-gold-500/20 flex items-center justify-center text-gold-400 flex-shrink-0">
              <span className="font-serif font-bold text-sm text-gold-400">100%</span>
            </div>
            <div>
              <div className="text-xs font-bold text-white">Human Support</div>
              <div className="text-[11px] text-gray-300">Personal team assistance</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
