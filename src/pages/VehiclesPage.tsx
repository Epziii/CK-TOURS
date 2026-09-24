import React, { useState } from 'react';
import { Car, CheckCircle, ShieldCheck, Users, Briefcase, Wind } from 'lucide-react';
import { VEHICLES_DATA, VEHICLE_CATEGORIES } from '../data/vehiclesData';
import { VehicleCard } from '../components/vehicles/VehicleCard';
import { VehicleCategory } from '../types/database.types';

export const VehiclesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredVehicles = VEHICLES_DATA.filter((v) => {
    if (selectedCategory === 'All') return true;
    return v.category === selectedCategory;
  });

  return (
    <div className="pt-28 pb-24 bg-warm-50 min-h-screen animate-fade-in">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-gold-100 text-gold-900 text-xs font-semibold uppercase tracking-wider mb-4">
            <Car className="w-3.5 h-3.5 text-gold-700" />
            <span>CK Tours Fleet</span>
          </div>

          <h1 className="font-serif font-bold text-3xl sm:text-5xl text-ceylon-950 tracking-tight mb-4">
            Private Transportation Fleet
          </h1>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            Every journey includes a dedicated, experienced local chauffeur, full air-conditioning, fuel, highway tolls, and comprehensive passenger comfort.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center space-x-2 mt-8 overflow-x-auto pb-2">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
              selectedCategory === 'All'
                ? 'bg-ceylon-900 text-gold-400 shadow-md'
                : 'bg-white text-gray-700 border border-warm-200 hover:border-warm-300'
            }`}
          >
            All Fleet ({VEHICLES_DATA.length})
          </button>
          {VEHICLE_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-ceylon-900 text-gold-400 shadow-md'
                  : 'bg-white text-gray-700 border border-warm-200 hover:border-warm-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Fleet Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>

        {/* Fleet Standards Banner */}
        <div className="mt-16 bg-white rounded-3xl p-8 sm:p-12 border border-warm-200 shadow-soft">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h3 className="font-serif font-bold text-2xl text-ceylon-950 mb-3">
              CK Tours Vehicle & Safety Standards
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              We understand that the comfort and safety of your transportation shapes your Sri Lankan holiday. Every vehicle deployed by CK Tours adheres to uncompromising standards:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm text-gray-700">
            <div className="p-5 rounded-2xl bg-warm-50 border border-warm-200/80">
              <div className="w-9 h-9 rounded-xl bg-ceylon-900 text-gold-400 flex items-center justify-center mb-3">
                <Wind className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-ceylon-950 mb-1">Cold High-Capacity A/C</h4>
              <p className="text-xs text-gray-600">Dual-zone air conditioning rigorously tested for Sri Lanka's tropical climate.</p>
            </div>

            <div className="p-5 rounded-2xl bg-warm-50 border border-warm-200/80">
              <div className="w-9 h-9 rounded-xl bg-ceylon-900 text-gold-400 flex items-center justify-center mb-3">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-ceylon-950 mb-1">Full Commercial Insurance</h4>
              <p className="text-xs text-gray-600">Comprehensive passenger and vehicle coverage for peace of mind across all journeys.</p>
            </div>

            <div className="p-5 rounded-2xl bg-warm-50 border border-warm-200/80">
              <div className="w-9 h-9 rounded-xl bg-ceylon-900 text-gold-400 flex items-center justify-center mb-3">
                <Users className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-ceylon-950 mb-1">Professional Local Drivers</h4>
              <p className="text-xs text-gray-600">Experienced, courteous drivers with intimate knowledge of mountain and coastal routes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
