import React from 'react';
import { Calendar, Shield, Sparkles, HeartHandshake, CheckCircle2, MessageSquare } from 'lucide-react';
import { QuoteForm } from '../components/quote/QuoteForm';
import { BUSINESS_CONFIG } from '../services/quoteService';

export const QuotePage: React.FC = () => {
  const rawWhatsApp = BUSINESS_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');

  return (
    <div className="pt-28 pb-24 bg-warm-50 min-h-screen animate-fade-in">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-gold-100 text-gold-900 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-700" />
            <span>Tailored Travel Planning</span>
          </div>

          <h1 className="font-serif font-bold text-3xl sm:text-5xl text-ceylon-950 tracking-tight mb-4">
            Request a Free Sri Lanka Quotation
          </h1>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            Every itinerary and journey is prepared manually by the CK Tours local team to match your exact dates, interests, and party size. No automated pricing algorithms — just genuine personal service.
          </p>
        </div>
      </div>

      {/* Main Form Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <QuoteForm />
      </div>

      {/* Guarantees & Clarifications */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-warm-200 shadow-soft text-center">
            <div className="w-10 h-10 rounded-xl bg-ceylon-900 text-gold-400 flex items-center justify-center mx-auto mb-3">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h4 className="font-serif font-bold text-base text-ceylon-950 mb-1">Zero Booking Obligation</h4>
            <p className="text-xs text-gray-500">
              Receiving an itinerary proposal and quotation from CK Tours is completely free. Review and adjust with zero pressure.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-warm-200 shadow-soft text-center">
            <div className="w-10 h-10 rounded-xl bg-ceylon-900 text-gold-400 flex items-center justify-center mx-auto mb-3">
              <Shield className="w-5 h-5" />
            </div>
            <h4 className="font-serif font-bold text-base text-ceylon-950 mb-1">Transparent Pricing</h4>
            <p className="text-xs text-gray-500">
              Your quotation will clearly specify vehicle, driver allowances, fuel, toll fees, and any accommodation inclusions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-warm-200 shadow-soft text-center">
            <div className="w-10 h-10 rounded-xl bg-ceylon-900 text-gold-400 flex items-center justify-center mx-auto mb-3">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h4 className="font-serif font-bold text-base text-ceylon-950 mb-1">Direct Human Contact</h4>
            <p className="text-xs text-gray-500">
              Chat directly with our Sri Lankan team via WhatsApp or email for immediate adjustments and local recommendations.
            </p>
          </div>
        </div>

        {/* Alternative Quick Contact */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-gray-500">
            Prefer to discuss directly over WhatsApp right away?{' '}
            <a
              href={`https://wa.me/${rawWhatsApp}?text=${encodeURIComponent('Hi CK Tours, I would like to inquire about a private driver and tour in Sri Lanka.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 font-bold hover:underline inline-flex items-center space-x-1"
            >
              <span>Click here to open WhatsApp</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
