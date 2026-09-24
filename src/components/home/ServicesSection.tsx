import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Hotel, Building2, Map, ArrowRight } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Car,
      emoji: '🚐',
      title: 'Vehicle Only',
      desc: 'Private vehicle and driver for airport transfers, day trips and multi-day journeys across Sri Lanka.',
      features: ['Dedicated English-speaking chauffeur', 'Fuel, highway tolls & driver expenses included', 'Flexible stops along the route'],
      ctaText: 'Explore Vehicles',
      ctaLink: '/vehicles',
      featured: false
    },
    {
      icon: Hotel,
      emoji: '🏨',
      title: 'Vehicle + Accommodation',
      desc: 'Private transportation combined with accommodation arrangements according to the customer\'s requirements.',
      features: ['Curated boutique hotels, villas or eco-lodges', 'Seamless check-ins coordinated by your driver', 'Tailored to your comfort preferences'],
      ctaText: 'Plan My Trip',
      ctaLink: '/quote?service=Vehicle%20%2B%20Accommodation',
      featured: true
    },
    {
      icon: Building2,
      emoji: '🛏️',
      title: 'Accommodation Assistance',
      desc: 'Accommodation recommendations and booking assistance matching your preferred style, location, and travel dates.',
      features: ['Local hotel insight & scenic recommendations', 'Advice on family suites & honeymoon stays', 'Direct coordination support'],
      ctaText: 'Contact Us',
      ctaLink: '/contact',
      featured: false
    },
    {
      icon: Map,
      emoji: '🗺️',
      title: 'Custom Tour',
      desc: 'Tell CK Tours what you want to experience and the team will manually create a suitable travel plan and quotation.',
      features: ['Personalized day-by-day itinerary', 'Customized to your travel pace & group', 'Free, no-obligation quotation'],
      ctaText: 'Request a Free Quote',
      ctaLink: '/quote?service=Custom%20Tour',
      featured: false
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-warm-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-gold-100 text-gold-900 text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Our Core Services</span>
          </div>

          <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-ceylon-950 tracking-tight mb-5">
            Tailored Sri Lanka Travel Solutions
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            Whether you just need an air-conditioned van for a coastal transfer or a comprehensive multi-day journey with hand-selected hotels, we organize it around your exact requirements.
          </p>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={idx}
                className={`bg-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-soft hover:shadow-luxury border ${
                  srv.featured
                    ? 'border-gold-400/80 ring-2 ring-gold-400/30'
                    : 'border-warm-200 hover:border-ceylon-700/30'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-ceylon-900 text-gold-400 flex items-center justify-center shadow">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl" role="img" aria-label={srv.title}>
                      {srv.emoji}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-xl text-ceylon-950 mb-3">
                    {srv.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                    {srv.desc}
                  </p>

                  <ul className="space-y-2 mb-6 pt-4 border-t border-warm-100">
                    {srv.features.map((feat, fIdx) => (
                      <li key={fIdx} className="text-xs text-gray-500 flex items-start space-x-2">
                        <span className="text-gold-600 font-bold">•</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <Link
                    to={srv.ctaLink}
                    className={`w-full py-3 px-4 rounded-xl text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center space-x-1.5 ${
                      srv.featured
                        ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-ceylon-950 hover:from-gold-400 hover:to-gold-500 shadow-md'
                        : 'bg-warm-100 hover:bg-ceylon-900 hover:text-white text-ceylon-900'
                    }`}
                  >
                    <span>{srv.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
