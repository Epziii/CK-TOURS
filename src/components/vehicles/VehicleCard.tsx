import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Wind, CheckCircle2, ArrowRight } from 'lucide-react';
import { Vehicle } from '../../types/database.types';

interface VehicleCardProps {
  vehicle: Vehicle;
}

export const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-luxury border border-warm-200 transition-all duration-300 flex flex-col">
      {/* Vehicle Photo */}
      <div className="relative aspect-[16/10] overflow-hidden bg-ceylon-950">
        <img
          src={vehicle.cover_image}
          alt={`${vehicle.brand} ${vehicle.model}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ceylon-950/80 via-transparent to-transparent" />

        {/* Category Pill */}
        <div className="absolute top-3 left-3 bg-ceylon-900/90 backdrop-blur-md text-gold-400 px-3 py-1 rounded-full text-xs font-semibold shadow-md border border-gold-500/20">
          {vehicle.category}
        </div>

        {/* Capacity Quick Stats */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-warm-100 font-medium">
          <div className="flex items-center space-x-1.5 bg-ceylon-950/70 backdrop-blur-sm px-2.5 py-1 rounded-lg">
            <Users className="w-3.5 h-3.5 text-gold-400" />
            <span>Up to {vehicle.passenger_capacity} Passengers</span>
          </div>
          {vehicle.ac_equipped && (
            <div className="flex items-center space-x-1 bg-ceylon-950/70 backdrop-blur-sm px-2 py-1 rounded-lg text-emerald-300">
              <Wind className="w-3.5 h-3.5" />
              <span className="text-[11px]">Full A/C</span>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="text-xs uppercase font-bold tracking-wider text-ceylon-600 mb-1">
            {vehicle.brand}
          </div>
          <h3 className="font-serif font-bold text-xl text-ceylon-950 group-hover:text-ceylon-700 transition-colors mb-2">
            {vehicle.model}
          </h3>

          <p className="text-xs text-gray-600 mb-4 line-clamp-2">
            {vehicle.suitability}
          </p>

          {/* Key Comfort Features */}
          <div className="space-y-1.5 mb-5 pt-3 border-t border-warm-100">
            {vehicle.features.slice(0, 4).map((feature, idx) => (
              <div key={idx} className="flex items-center space-x-2 text-xs text-gray-600">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-2">
          <Link
            to={`/vehicles/${vehicle.slug}`}
            className="flex items-center justify-center space-x-1 px-3 py-2.5 rounded-xl border border-ceylon-700/30 text-ceylon-800 text-xs font-semibold hover:bg-warm-100 transition-colors text-center"
          >
            <span>View Details</span>
            <ArrowRight className="w-3 h-3" />
          </Link>

          <Link
            to={`/quote?vehicle=${encodeURIComponent(vehicle.model)}`}
            className="flex items-center justify-center space-x-1 px-3 py-2.5 rounded-xl bg-gradient-to-r from-ceylon-800 to-ceylon-900 text-gold-400 text-xs font-bold hover:bg-ceylon-950 shadow-sm transition-all text-center"
          >
            <span>Request Vehicle</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
