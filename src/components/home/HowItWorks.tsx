import React from 'react';
import { Link } from 'react-router-dom';
import { Send, FileText, CheckCircle, Car, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Tell Us About Your Trip',
      desc: 'Submit your travel dates, group size, and requirements through our quick quotation form or via WhatsApp.',
      icon: Send,
    },
    {
      number: '02',
      title: 'We Plan Your Journey',
      desc: 'CK Tours manually reviews your wishes and prepares a thoughtful itinerary with transparent vehicle & tour pricing.',
      icon: FileText,
    },
    {
      number: '03',
      title: 'Confirm Your Journey',
      desc: 'Discuss the details directly with our team, adjust any stops or hotel tiers, and finalize your travel arrangements.',
      icon: CheckCircle,
    },
    {
      number: '04',
      title: 'Travel Sri Lanka',
      desc: 'Meet your dedicated private chauffeur at the airport and enjoy an unforgettable, relaxed voyage across the island.',
      icon: Car,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-ceylon-950 text-white relative overflow-hidden">
      {/* Subtle background ambient lights */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-ceylon-800/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-ceylon-900 border border-gold-500/20 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Human-Assisted Planning</span>
          </div>

          <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight mb-5">
            How Your Journey Begins
          </h2>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-light">
            We operate with genuine human care. No automated booking algorithms or robotic customer service — just personal local coordination every step of the way.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative bg-ceylon-900/60 backdrop-blur-md rounded-3xl p-8 border border-ceylon-800 hover:border-gold-500/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif font-black text-3xl sm:text-4xl text-gold-400/80 group-hover:text-gold-300 transition-colors">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-ceylon-800/80 text-gold-400 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif font-bold text-xl text-white mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm text-gray-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-ceylon-800/60 flex items-center text-xs text-gold-400/80 font-medium">
                  <span>Step {idx + 1} of 4</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 text-center">
          <Link
            to="/quote"
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 text-ceylon-950 font-bold text-base shadow-luxury hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>Start Your Travel Plan Today</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
