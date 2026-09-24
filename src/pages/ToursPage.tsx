import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Compass, Filter, Sparkles, MapPin, Clock } from 'lucide-react';
import { TOURS_DATA } from '../data/toursData';
import { TourCard } from '../components/tours/TourCard';

export const ToursPage: React.FC = () => {
  const [filterDuration, setFilterDuration] = useState<'all' | 'short' | 'medium' | 'long'>('all');

  const filteredTours = TOURS_DATA.filter((tour) => {
    if (filterDuration === 'short') return tour.duration_days <= 5;
    if (filterDuration === 'medium') return tour.duration_days >= 6 && tour.duration_days <= 8;
    if (filterDuration === 'long') return tour.duration_days >= 9;
    return true;
  });

  return (
    <div className="pt-28 pb-24 bg-warm-50 min-h-screen animate-fade-in">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-gold-100 text-gold-900 text-xs font-semibold uppercase tracking-wider mb-4">
            <Compass className="w-3.5 h-3.5 text-gold-700" />
            <span>Sri Lanka Tour Itineraries</span>
          </div>

          <h1 className="font-serif font-bold text-3xl sm:text-5xl text-ceylon-950 tracking-tight mb-4">
            Pre-Made Sri Lanka Journeys
          </h1>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            Proven routes covering UNESCO heritage sites, misty tea country, wild safaris, and tropical beaches. Every itinerary can be tailored to your flight times and preferences.
          </p>
        </div>

        {/* Duration Filter Pills */}
        <div className="flex items-center justify-center space-x-2 sm:space-x-3 mt-8 overflow-x-auto pb-2">
          {[
            { id: 'all', label: 'All Durations' },
            { id: 'short', label: 'Short Highlights (5 Days)' },
            { id: 'medium', label: 'Classic & Coast (7–8 Days)' },
            { id: 'long', label: 'Grand Expeditions (10–12 Days)' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilterDuration(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                filterDuration === tab.id
                  ? 'bg-ceylon-900 text-gold-400 shadow-md'
                  : 'bg-white text-gray-700 border border-warm-200 hover:border-warm-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tours Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>

        {/* Custom Travel Banner */}
        <div className="mt-16 bg-white rounded-3xl p-8 sm:p-12 border border-warm-200 shadow-soft text-center max-w-3xl mx-auto">
          <div className="w-12 h-12 bg-gold-50 border border-gold-200 rounded-2xl flex items-center justify-center mx-auto text-gold-600 mb-4">
            <Sparkles className="w-6 h-6 text-gold-600" />
          </div>

          <h3 className="font-serif font-bold text-2xl text-ceylon-950 mb-3">
            Want to customize any of these journeys?
          </h3>

          <p className="text-sm text-gray-600 leading-relaxed mb-6 max-w-lg mx-auto">
            Every journey can be adjusted according to your travel dates, interests, group size and specific requirements. CK Tours manually prepares customized travel plans at no extra charge.
          </p>

          <Link
            to="/quote?service=Custom%20Tour"
            className="inline-flex items-center space-x-2 px-8 py-3.5 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-ceylon-950 font-bold rounded-xl text-sm shadow transition-all"
          >
            <span>Request a Custom Quote</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
