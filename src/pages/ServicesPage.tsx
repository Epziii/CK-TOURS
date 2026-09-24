import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Hotel, Building2, Map, CheckCircle2, ArrowRight, Shield, Clock, HeartHandshake } from 'lucide-react';
import { HowItWorks } from '../components/home/HowItWorks';

export const ServicesPage: React.FC = () => {
  const serviceCards = [
    {
      id: 'vehicle-only',
      title: 'Vehicle Only Service',
      emoji: '🚐',
      tagline: 'Private vehicle and driver for airport transfers, day trips and multi-day journeys.',
      details: [
        'Dedicated modern air-conditioned vehicle matched to your group size',
        'Professional, licensed English-speaking Sri Lankan chauffeur',
        'All fuel, toll tickets, parking fees, and driver meals/lodging covered',
        'Available for point-to-point airport transfers, single-day city excursions, or round-island multi-day expeditions'
      ],
      idealFor: 'Travelers who already have their accommodation booked and desire safe, stress-free transportation.',
      ctaText: 'Explore Vehicles',
      ctaLink: '/vehicles'
    },
    {
      id: 'vehicle-accommodation',
      title: 'Vehicle + Accommodation Package',
      emoji: '🏨',
      tagline: 'Private transportation combined with accommodation arrangements according to the customer’s requirements.',
      details: [
        'Curated selection of verified boutique hotels, heritage villas, tea estate bungalows, and coastal resorts',
        'Customized according to your preferred comfort tier (Comfort, Boutique Luxury, or Family Suites)',
        'Seamless daily check-in and check-out coordinated by your driver',
        'Single consolidated itinerary and manual quotation covering everything'
      ],
      idealFor: 'Couples and families looking for a complete, hassle-free holiday package planned by local specialists.',
      ctaText: 'Plan My Trip',
      ctaLink: '/quote?service=Vehicle%20%2B%20Accommodation'
    },
    {
      id: 'accommodation-assistance',
      title: 'Accommodation Assistance',
      emoji: '🛏️',
      tagline: 'Accommodation recommendations and booking assistance for unique stays across Sri Lanka.',
      details: [
        'Unbiased local recommendations based on current standards and cleanliness',
        'Advice on convenient locations close to attractions avoiding unnecessary traffic',
        'Assistance securing seasonal rooms in high-demand areas like Nuwara Eliya, Ella, and Mirissa',
        'Tailored options for romantic honeymoons, scenic viewpoints, or family-friendly villas'
      ],
      idealFor: 'Guests wanting authentic local hotel insights without navigating confusing online platforms.',
      ctaText: 'Contact Us for Advice',
      ctaLink: '/contact'
    },
    {
      id: 'custom-tour',
      title: 'Custom Tour Planning',
      emoji: '🗺️',
      tagline: 'Tell CK Tours what you want to experience and the team will manually create a suitable travel plan and quotation.',
      details: [
        '100% tailor-made route designed around your interests, flight times, and rhythm',
        'Includes wildlife safaris, scenic train rides, tea plantation visits, spice gardens, and surfing bays',
        'Flexible pacing: adjust travel times on the fly whenever you wish to linger longer',
        'Handcrafted manual quotation prepared personally by the CK Tours team'
      ],
      idealFor: 'Independent explorers who want a unique, personalized Sri Lankan experience with zero cookie-cutter constraints.',
      ctaText: 'Request a Free Quote',
      ctaLink: '/quote?service=Custom%20Tour'
    }
  ];

  return (
    <div className="pt-28 pb-24 bg-warm-50 min-h-screen animate-fade-in">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-gold-100 text-gold-900 text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Our Offerings</span>
          </div>

          <h1 className="font-serif font-bold text-3xl sm:text-5xl text-ceylon-950 tracking-tight mb-4">
            Private Transportation & Travel Services
          </h1>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            CK Tours offers human-assisted travel planning and private chauffeur services throughout Sri Lanka. We tailor our services around your schedule, ensuring comfort, safety, and luxury at every kilometer.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {serviceCards.map((service, index) => (
          <div
            key={service.id}
            className="bg-white rounded-3xl p-8 sm:p-12 border border-warm-200 shadow-soft grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-3xl" role="img" aria-label={service.title}>
                  {service.emoji}
                </span>
                <div>
                  <h3 className="font-serif font-bold text-2xl sm:text-3xl text-ceylon-950">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-gold-600">
                    CK Tours Sri Lanka
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
                {service.tagline}
              </p>

              <div className="pt-2">
                <h4 className="text-xs uppercase font-bold tracking-wider text-gray-500 mb-3">
                  Service Inclusions & Standards
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {service.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start space-x-2 text-xs sm:text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 text-xs text-gray-500 italic">
                <strong>Best Suited For:</strong> {service.idealFor}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center items-stretch lg:border-l lg:border-warm-200 lg:pl-8 space-y-4">
              <div className="p-4 rounded-2xl bg-warm-50 text-xs text-gray-600 text-center">
                <HeartHandshake className="w-6 h-6 text-gold-600 mx-auto mb-2" />
                <span>Personalized planning with no automated calculation. Tailored manually by our local team.</span>
              </div>

              <Link
                to={service.ctaLink}
                className="w-full py-4 px-6 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-ceylon-950 font-bold rounded-2xl text-xs uppercase tracking-wider text-center shadow transition-all flex items-center justify-center space-x-2"
              >
                <span>{service.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* How It Works Section */}
      <div className="mt-20">
        <HowItWorks />
      </div>
    </div>
  );
};
