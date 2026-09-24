import React from 'react';
import { Shield, Car, Compass, UserCheck, MessageCircle, HeartHandshake } from 'lucide-react';

export const TrustValueSection: React.FC = () => {
  const values = [
    {
      icon: Car,
      title: 'Comfortable Private Transportation',
      desc: 'Modern, well-maintained air-conditioned vehicles chosen to match your party size, luggage, and road preferences across Sri Lanka.'
    },
    {
      icon: UserCheck,
      title: 'Experienced Local Drivers',
      desc: 'Polite, English-speaking chauffeurs who know Sri Lanka’s mountain curves, scenic shortcuts, cultural etiquettes, and peaceful spots.'
    },
    {
      icon: Compass,
      title: 'Flexible Travel Plans',
      desc: 'Travel at your own rhythm. Pause for roadside king coconut water, spend extra time at a viewpoint, or adjust day schedules as you go.'
    },
    {
      icon: HeartHandshake,
      title: 'Personalized Assistance',
      desc: 'Every traveler has unique expectations. We build custom routes tailored to families with children, couples, or photography enthusiasts.'
    },
    {
      icon: MessageCircle,
      title: 'Transparent Communication',
      desc: 'Direct, honest discussions about travel durations, vehicle suitability, and route practicalities with no surprise obligations.'
    },
    {
      icon: Shield,
      title: 'Human Support Throughout',
      desc: 'Real people on hand from your initial enquiry until your final airport drop-off, ensuring your trip proceeds smoothly.'
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-warm-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-warm-100 text-ceylon-850 text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Comfort • Safety • Luxury</span>
          </div>

          <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-ceylon-950 tracking-tight mb-5">
            Personalized Travel Planning & Private Chauffeurs
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            CK Tours provides dedicated private transportation and attentive travel planning for international visitors exploring Sri Lanka. We believe the finest journeys are defined by personal care, trustworthy guidance, and uncompromised comfort.
          </p>
        </div>

        {/* 6 Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-warm-50/70 border border-warm-200 hover:border-gold-300 hover:bg-white hover:shadow-soft transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-ceylon-900 text-gold-400 flex items-center justify-center mb-6 shadow group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="font-serif font-bold text-lg text-ceylon-950 mb-3 group-hover:text-ceylon-800 transition-colors">
                  {val.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
