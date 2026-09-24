import React from 'react';
import { MapPin, Calendar, Heart, Car } from 'lucide-react';
import { GuestMemory } from '../../types/database.types';

interface MemoryCardProps {
  memory: GuestMemory;
}

export const MemoryCard: React.FC<MemoryCardProps> = ({ memory }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-luxury border border-warm-200 transition-all duration-300 flex flex-col">
      {/* Photo */}
      {memory.photo_urls && memory.photo_urls.length > 0 && (
        <div className="relative aspect-[16/11] overflow-hidden bg-ceylon-950">
          <img
            src={memory.photo_urls[0]}
            alt={`Memory by ${memory.traveler_name}`}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          <div className="absolute bottom-3 left-3 text-xs text-white flex items-center space-x-1.5 font-medium bg-ceylon-950/70 px-2.5 py-1 rounded-lg backdrop-blur-sm">
            <Calendar className="w-3.5 h-3.5 text-gold-400" />
            <span>{memory.trip_date}</span>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Route Summary */}
          <div className="flex items-start space-x-1.5 text-xs text-ceylon-700 font-semibold mb-3">
            <MapPin className="w-3.5 h-3.5 text-ceylon-600 mt-0.5 flex-shrink-0" />
            <span>{memory.route_summary}</span>
          </div>

          {/* Feedback Quote */}
          <blockquote className="text-sm font-serif italic text-gray-800 leading-relaxed mb-4 pl-3 border-l-2 border-gold-400">
            "{memory.feedback_quote}"
          </blockquote>

          {/* Story Details */}
          {memory.story_text && (
            <p className="text-xs text-gray-600 leading-relaxed mb-4">
              {memory.story_text}
            </p>
          )}

          {/* Vehicle Used */}
          {memory.vehicle_used && (
            <div className="flex items-center space-x-1.5 text-[11px] text-gray-500 mb-4 bg-warm-50 px-2.5 py-1 rounded-md">
              <Car className="w-3 h-3 text-gold-500" />
              <span>Traveled in: {memory.vehicle_used}</span>
            </div>
          )}
        </div>

        {/* Traveler Signature */}
        <div className="pt-4 border-t border-warm-100 flex items-center justify-between">
          <div>
            <div className="font-semibold text-sm text-ceylon-950">
              {memory.traveler_name}
            </div>
            <div className="text-xs text-gray-500">
              {memory.country}
            </div>
          </div>

          <div className="w-8 h-8 rounded-full bg-gold-50 border border-gold-200 flex items-center justify-center text-gold-600">
            <Heart className="w-4 h-4 fill-gold-400 text-gold-500" />
          </div>
        </div>
      </div>
    </div>
  );
};
