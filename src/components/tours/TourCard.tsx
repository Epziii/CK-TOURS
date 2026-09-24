import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, ArrowRight, Calendar, Sparkles } from 'lucide-react';
import { Tour } from '../../types/database.types';

interface TourCardProps {
  tour: Tour;
  featured?: boolean;
}

export const TourCard: React.FC<TourCardProps> = ({ tour, featured = false }) => {
  return (
    <div className={`group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-luxury border border-warm-200 transition-all duration-300 flex flex-col ${featured ? 'ring-1 ring-gold-400/40' : ''}`}>
      {/* Image Container with Badges */}
      <div className="relative aspect-[16/10] overflow-hidden bg-ceylon-950">
        <img
          src={tour.cover_image}
          alt={tour.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ceylon-950/80 via-transparent to-black/20" />

        {/* Duration Badge */}
        <div className="absolute top-3 left-3 bg-ceylon-900/90 backdrop-blur-md text-gold-400 px-3 py-1.5 rounded-full text-xs font-semibold flex items-center space-x-1.5 shadow-md border border-gold-500/20">
          <Clock className="w-3.5 h-3.5" />
          <span>{tour.duration_days} Days / {tour.duration_nights} Nights</span>
        </div>

        {/* Private Chauffeur Badge */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-warm-100">
          <div className="flex items-center space-x-1">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span className="font-medium tracking-wide">Private Vehicle & Chauffeur</span>
          </div>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-serif font-bold text-xl text-ceylon-950 group-hover:text-ceylon-700 transition-colors line-clamp-1 mb-2">
            {tour.title}
          </h3>

          <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed mb-4">
            {tour.short_description}
          </p>

          {/* Key Destinations */}
          <div className="mb-5 pt-3 border-t border-warm-100">
            <div className="flex items-start space-x-2 text-xs text-gray-600">
              <MapPin className="w-3.5 h-3.5 text-ceylon-600 mt-0.5 flex-shrink-0" />
              <div className="flex flex-wrap gap-1.5">
                {tour.destinations.map((dest, idx) => (
                  <span
                    key={dest}
                    className="inline-block bg-warm-100 text-ceylon-850 px-2 py-0.5 rounded text-[11px] font-medium"
                  >
                    {dest}{idx < tour.destinations.length - 1 ? '' : ''}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2.5 pt-2">
          <Link
            to={`/tours/${tour.slug}`}
            className="flex items-center justify-center space-x-1 px-3 py-2.5 rounded-xl border border-ceylon-700/30 text-ceylon-800 text-xs font-semibold hover:bg-warm-100 hover:border-ceylon-800 transition-colors text-center"
          >
            <span>View Itinerary</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <Link
            to={`/quote?itinerary=${encodeURIComponent(tour.title)}`}
            className="flex items-center justify-center space-x-1 px-3 py-2.5 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 text-ceylon-950 text-xs font-bold hover:from-gold-400 hover:to-gold-500 shadow-sm transition-all text-center"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Get a Quote</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
