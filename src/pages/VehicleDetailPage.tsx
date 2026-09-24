import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Users, Briefcase, Wind, CheckCircle2, ArrowLeft, ArrowRight, Shield, Sparkles, MessageSquare, Car } from 'lucide-react';
import { vehicleService } from '../services/vehicleService';
import { Vehicle } from '../types/database.types';
import { BUSINESS_CONFIG } from '../services/quoteService';

export const VehicleDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadVehicle() {
      if (!slug) return;
      setLoading(true);
      const data = await vehicleService.getVehicleBySlug(slug);
      setVehicle(data);
      setLoading(false);
    }
    loadVehicle();
  }, [slug]);

  if (loading) {
    return (
      <div className="pt-32 pb-24 text-center min-h-[60vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-ceylon-800" />
      </div>
    );
  }

  if (!vehicle) {
    return (
      <div className="pt-36 pb-24 text-center max-w-md mx-auto px-4">
        <h2 className="font-serif font-bold text-2xl text-ceylon-950 mb-3">Vehicle Not Found</h2>
        <p className="text-sm text-gray-600 mb-6">The vehicle specification you are looking for does not exist.</p>
        <Link to="/vehicles" className="px-6 py-2.5 bg-ceylon-900 text-gold-400 font-bold rounded-xl text-xs uppercase tracking-wider">
          Browse Fleet
        </Link>
      </div>
    );
  }

  const rawWhatsApp = BUSINESS_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');

  return (
    <div className="animate-fade-in bg-warm-50 min-h-screen pb-24">
      {/* Top Banner Header */}
      <div className="pt-32 pb-12 bg-ceylon-950 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/vehicles"
            className="inline-flex items-center space-x-1.5 text-xs font-semibold text-gold-400 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Full Fleet</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="bg-gold-500/20 text-gold-300 border border-gold-400/30 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {vehicle.category}
            </span>
            <span className="text-xs text-gray-300">
              {vehicle.brand}
            </span>
          </div>

          <h1 className="font-serif font-bold text-3xl sm:text-5xl text-white tracking-tight mb-4">
            {vehicle.model}
          </h1>

          <p className="text-base text-gray-300 leading-relaxed max-w-2xl font-light">
            {vehicle.suitability}
          </p>
        </div>
      </div>

      {/* Main Layout */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Left Column: Photos & Specs */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Primary Photo */}
            <div className="rounded-3xl overflow-hidden shadow-soft border border-warm-200 bg-ceylon-950 aspect-[16/10]">
              <img
                src={vehicle.cover_image}
                alt={`${vehicle.brand} ${vehicle.model}`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Quick Capacities Summary */}
            <div className="grid grid-cols-3 gap-4 bg-white p-6 rounded-3xl border border-warm-200 shadow-soft text-center">
              <div className="p-3">
                <Users className="w-6 h-6 text-gold-600 mx-auto mb-2" />
                <div className="font-bold text-lg text-ceylon-950">{vehicle.passenger_capacity} Passengers</div>
                <div className="text-xs text-gray-500">Max comfort capacity</div>
              </div>

              <div className="p-3 border-x border-warm-100">
                <Briefcase className="w-6 h-6 text-gold-600 mx-auto mb-2" />
                <div className="font-bold text-lg text-ceylon-950">{vehicle.luggage_capacity} Luggage</div>
                <div className="text-xs text-gray-500">Standard suitcases</div>
              </div>

              <div className="p-3">
                <Wind className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                <div className="font-bold text-lg text-ceylon-950">{vehicle.ac_equipped ? 'Equipped' : 'Standard'}</div>
                <div className="text-xs text-gray-500">Dual A/C system</div>
              </div>
            </div>

            {/* Comfort Features */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-warm-200 shadow-soft">
              <h2 className="font-serif font-bold text-xl text-ceylon-950 mb-4">
                Vehicle Features & Passenger Comfort
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
                {vehicle.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-warm-50 border border-warm-200 text-xs text-gray-600 leading-relaxed">
                <strong>Seating Configuration:</strong> {vehicle.seating_type}. Maintained and detailed daily before any departure.
              </div>
            </div>

            {/* Inclusions */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-warm-200 shadow-soft space-y-4">
              <h3 className="font-serif font-bold text-xl text-ceylon-950">
                What is Included with Every Rental
              </h3>
              <ul className="space-y-2.5 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                  <span>Dedicated, courteous English-speaking Sri Lankan chauffeur</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                  <span>All fuel costs, southern expressway & highway toll charges</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                  <span>Chauffeur driver meals & driver accommodation allowances</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                  <span>Comprehensive passenger vehicle insurance and parking fees</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Right Column: Request Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-warm-200 shadow-soft space-y-6">
                <div>
                  <span className="text-xs uppercase font-bold tracking-wider text-gray-500">Fleet Request</span>
                  <h3 className="font-serif font-bold text-xl text-ceylon-950 mt-1">
                    Book {vehicle.brand} {vehicle.model}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Direct human planning & manual quotation
                  </p>
                </div>

                <div className="space-y-3">
                  <Link
                    to={`/quote?vehicle=${encodeURIComponent(vehicle.model)}`}
                    className="w-full py-3.5 px-4 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-ceylon-950 font-bold rounded-xl text-sm shadow text-center block transition-all"
                  >
                    Request This Vehicle
                  </Link>

                  <a
                    href={`https://wa.me/${rawWhatsApp}?text=${encodeURIComponent(`Hi CK Tours, I would like to enquire about renting the ${vehicle.brand} ${vehicle.model} for my Sri Lanka journey.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 bg-emerald-950/80 border border-emerald-700/60 text-emerald-300 hover:text-white rounded-xl text-xs font-semibold text-center flex items-center justify-center space-x-2 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>Inquire via WhatsApp</span>
                  </a>
                </div>

                <div className="pt-4 border-t border-warm-100 space-y-2 text-xs text-gray-500">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>Safe, licensed & verified transport</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-3.5 h-3.5 text-gold-600 flex-shrink-0" />
                    <span>Zero hidden fuel surcharges</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
