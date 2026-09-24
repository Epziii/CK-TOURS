import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Clock, MapPin, CheckCircle2, Calendar, ArrowLeft, ArrowRight, Sparkles, Shield, Car, Heart } from 'lucide-react';
import { tourService } from '../services/tourService';
import { Tour } from '../types/database.types';

export const TourDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [tour, setTour] = useState<Tour | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTour() {
      if (!slug) return;
      setLoading(true);
      const data = await tourService.getTourBySlug(slug);
      setTour(data);
      setLoading(false);
    }
    loadTour();
  }, [slug]);

  if (loading) {
    return (
      <div className="pt-32 pb-24 text-center min-h-[60vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-ceylon-800" />
      </div>
    );
  }

  if (!tour) {
    return (
      <div className="pt-36 pb-24 text-center max-w-md mx-auto px-4">
        <h2 className="font-serif font-bold text-2xl text-ceylon-950 mb-3">Itinerary Not Found</h2>
        <p className="text-sm text-gray-600 mb-6">The tour itinerary you are looking for does not exist or has been relocated.</p>
        <Link to="/tours" className="px-6 py-2.5 bg-ceylon-900 text-gold-400 font-bold rounded-xl text-xs uppercase tracking-wider">
          Browse All Itineraries
        </Link>
      </div>
    );
  }

  return (
    <div className="animate-fade-in bg-warm-50 min-h-screen pb-24">
      {/* Hero Header with Background Cover */}
      <div className="relative pt-32 pb-20 sm:pb-24 bg-ceylon-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={tour.cover_image}
            alt={tour.title}
            className="w-full h-full object-cover brightness-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ceylon-950 via-ceylon-950/70 to-black/40" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/tours"
            className="inline-flex items-center space-x-1.5 text-xs font-semibold text-gold-400 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Itineraries</span>
          </Link>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-ceylon-900/90 border border-gold-500/30 text-gold-400 text-xs font-bold px-3 py-1 rounded-full flex items-center space-x-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>{tour.duration_days} Days / {tour.duration_nights} Nights</span>
            </span>
            <span className="bg-emerald-950/80 border border-emerald-700/50 text-emerald-300 text-xs font-medium px-3 py-1 rounded-full">
              Private Chauffeur Included
            </span>
          </div>

          <h1 className="font-serif font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight mb-5">
            {tour.title}
          </h1>

          <p className="text-base sm:text-xl text-gray-200 font-light leading-relaxed max-w-3xl mb-8">
            {tour.short_description}
          </p>

          {/* Key Destinations Bar */}
          <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/15 text-xs text-gray-300">
            <span className="font-semibold text-gold-400 uppercase tracking-wider mr-2">Route:</span>
            {tour.destinations.map((dest, i) => (
              <span key={dest} className="inline-flex items-center space-x-1 bg-white/10 px-2.5 py-1 rounded-lg backdrop-blur-sm">
                <span>{dest}</span>
                {i < tour.destinations.length - 1 && <span className="text-gold-400 ml-1">→</span>}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Left Column: Itinerary Timeline */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Overview */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-warm-200 shadow-soft">
              <h2 className="font-serif font-bold text-2xl text-ceylon-950 mb-4">
                Journey Overview
              </h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {tour.overview}
              </p>

              {/* Highlights */}
              <div className="mt-6 pt-6 border-t border-warm-100">
                <h3 className="font-serif font-bold text-base text-ceylon-950 mb-3">
                  Signature Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {tour.highlights.map((h, i) => (
                    <div key={i} className="flex items-start space-x-2 text-xs sm:text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Day-by-Day Timeline */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Calendar className="w-5 h-5 text-gold-600" />
                <h2 className="font-serif font-bold text-2xl text-ceylon-950">
                  Day-by-Day Itinerary
                </h2>
              </div>

              <div className="space-y-6">
                {tour.itinerary.map((day) => (
                  <div
                    key={day.day_number}
                    className="bg-white rounded-3xl p-6 sm:p-8 border border-warm-200 shadow-soft relative overflow-hidden group hover:border-gold-300 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-gold-600 bg-gold-50 px-2.5 py-1 rounded-md mb-2 inline-block">
                          Day 0{day.day_number}
                        </span>
                        <h3 className="font-serif font-bold text-xl text-ceylon-950">
                          {day.title}
                        </h3>
                      </div>
                    </div>

                    {/* Route Badge */}
                    <div className="flex items-center space-x-2 text-xs font-semibold text-ceylon-700 bg-warm-50 px-3 py-1.5 rounded-xl w-fit mb-4">
                      <MapPin className="w-3.5 h-3.5 text-ceylon-600" />
                      <span>{day.route}</span>
                    </div>

                    <p className="text-sm text-gray-700 leading-relaxed mb-5">
                      {day.description}
                    </p>

                    {/* Activities */}
                    {day.activities && day.activities.length > 0 && (
                      <div className="pt-4 border-t border-warm-100 flex flex-wrap gap-2 text-xs">
                        {day.activities.map((act, idx) => (
                          <span key={idx} className="bg-warm-100 text-ceylon-900 px-2.5 py-1 rounded-lg font-medium">
                            • {act}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Overnight */}
                    {day.overnight_stay && (
                      <div className="mt-4 pt-3 border-t border-warm-100 text-xs text-gray-500 flex items-center justify-between">
                        <span><strong>Overnight Stay:</strong> {day.overnight_stay}</span>
                        {day.distance_or_scenic_notes && (
                          <span className="italic text-gray-400">{day.distance_or_scenic_notes}</span>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Customization Callout at bottom */}
            <div className="bg-gradient-to-br from-ceylon-900 to-ceylon-950 text-white rounded-3xl p-8 sm:p-10 shadow-luxury">
              <div className="flex items-center space-x-2 text-gold-400 text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Fully Tailored To You</span>
              </div>
              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white mb-3">
                Want to customize this journey?
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                Every journey can be adjusted according to your travel dates, interests, group size and requirements. CK Tours manually prepares an individualized travel plan and transparent quotation with zero obligation.
              </p>
              <Link
                to={`/quote?itinerary=${encodeURIComponent(tour.title)}`}
                className="inline-flex items-center space-x-2 px-6 py-3.5 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 text-ceylon-950 font-bold rounded-xl text-sm shadow hover:scale-[1.01] transition-transform"
              >
                <span>Get a Free Quote for this Journey</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

          {/* Right Column: Sticky Booking Widget */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-warm-200 shadow-soft space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-gray-500">Plan Summary</span>
                  <div className="font-serif font-bold text-xl text-ceylon-950 mt-1">
                    {tour.duration_days} Days Private Journey
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Manual quotation prepared by CK Tours
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-warm-100 text-xs text-gray-600">
                  <div className="flex items-center justify-between py-1 border-b border-warm-50">
                    <span className="flex items-center space-x-2">
                      <Car className="w-4 h-4 text-ceylon-600" />
                      <span>Dedicated Chauffeur</span>
                    </span>
                    <strong className="text-ceylon-900">Included</strong>
                  </div>

                  <div className="flex items-center justify-between py-1 border-b border-warm-50">
                    <span className="flex items-center space-x-2">
                      <Shield className="w-4 h-4 text-ceylon-600" />
                      <span>Fuel & Highway Tolls</span>
                    </span>
                    <strong className="text-ceylon-900">Included</strong>
                  </div>

                  <div className="flex items-center justify-between py-1 border-b border-warm-50">
                    <span className="flex items-center space-x-2">
                      <Sparkles className="w-4 h-4 text-ceylon-600" />
                      <span>Pacing & Stops</span>
                    </span>
                    <strong className="text-ceylon-900">100% Flexible</strong>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to={`/quote?itinerary=${encodeURIComponent(tour.title)}`}
                    className="w-full py-3.5 px-4 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-ceylon-950 font-bold rounded-xl text-sm shadow text-center block transition-all"
                  >
                    Request Free Quote
                  </Link>

                  <p className="text-[11px] text-gray-400 text-center mt-2.5">
                    No payment required now. Receive a handcrafted proposal.
                  </p>
                </div>
              </div>

              {/* Direct Assistance */}
              <div className="bg-ceylon-900 text-white rounded-3xl p-6 border border-ceylon-800 text-center">
                <h4 className="font-serif font-bold text-base mb-2">Need Quick Advice?</h4>
                <p className="text-xs text-gray-300 leading-relaxed mb-4">
                  Chat with CK Tours on WhatsApp to discuss travel dates or adjust this itinerary.
                </p>
                <Link
                  to="/contact"
                  className="inline-block w-full py-2.5 px-4 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-semibold border border-white/20 transition-colors"
                >
                  Contact CK Tours
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
