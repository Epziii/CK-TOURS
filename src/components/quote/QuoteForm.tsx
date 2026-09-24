import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Send, CheckCircle2, MessageSquare, ShieldCheck, Calendar, Users, MapPin, Car, Briefcase, Sparkles } from 'lucide-react';
import { ServiceType, VehicleCategory } from '../../types/database.types';
import { TOURS_DATA } from '../../data/toursData';
import { quoteService, BUSINESS_CONFIG } from '../../services/quoteService';

export const QuoteForm: React.FC = () => {
  const [searchParams] = useSearchParams();

  // Form states
  const [fullName, setFullName] = useState('');
  const [country, setCountry] = useState('');
  const [email, setEmail] = useState('');
  const [phoneWhatsApp, setPhoneWhatsApp] = useState('');
  
  const [arrivalDate, setArrivalDate] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [pickupLocation, setPickupLocation] = useState('Bandaranaike Int. Airport (CMB)');
  const [dropoffLocation, setDropoffLocation] = useState('Bandaranaike Int. Airport (CMB)');

  const [serviceType, setServiceType] = useState<ServiceType>('Custom Tour');
  const [preferredVehicle, setPreferredVehicle] = useState('High Roof Van (Toyota KDH)');
  const [interestedItinerary, setInterestedItinerary] = useState('I want a custom itinerary');
  const [additionalRequirements, setAdditionalRequirements] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedWhatsAppUrl, setSubmittedWhatsAppUrl] = useState('');

  // Handle URL query parameters (e.g. ?itinerary=... or ?vehicle=...)
  useEffect(() => {
    const tourParam = searchParams.get('itinerary');
    if (tourParam) {
      setInterestedItinerary(tourParam);
    }

    const vehicleParam = searchParams.get('vehicle');
    if (vehicleParam) {
      setPreferredVehicle(vehicleParam);
    }

    const serviceParam = searchParams.get('service');
    if (serviceParam && ['Vehicle Only', 'Vehicle + Accommodation', 'Accommodation Assistance', 'Custom Tour'].includes(serviceParam)) {
      setServiceType(serviceParam as ServiceType);
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !country || !phoneWhatsApp) {
      alert('Please fill in required fields: Full Name, Country, and WhatsApp / Phone number.');
      return;
    }

    setIsSubmitting(true);

    const payload = {
      full_name: fullName,
      country,
      email,
      phone_whatsapp: phoneWhatsApp,
      arrival_date: arrivalDate,
      departure_date: departureDate,
      adults_count: adults,
      children_count: children,
      pickup_location: pickupLocation,
      dropoff_location: dropoffLocation,
      service_type: serviceType,
      preferred_vehicle: preferredVehicle,
      interested_itinerary_title: interestedItinerary,
      additional_requirements: additionalRequirements
    };

    const result = await quoteService.submitQuoteRequest(payload);
    const waUrl = quoteService.buildWhatsAppUrl(payload);
    setSubmittedWhatsAppUrl(waUrl);

    setIsSubmitting(false);
    if (result.success) {
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-luxury border border-warm-200 text-center max-w-2xl mx-auto">
        <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-600 mb-6 border border-emerald-100">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <span className="text-xs uppercase font-bold tracking-widest text-gold-600 bg-gold-50 px-3 py-1 rounded-full">
          CK Tours 🇱🇰 • Quotation Request
        </span>

        <h3 className="font-serif font-bold text-3xl sm:text-4xl text-ceylon-950 mt-3 mb-4">
          Your enquiry has been received.
        </h3>

        <p className="text-base text-gray-700 leading-relaxed max-w-lg mx-auto mb-8">
          Thank you for contacting <span className="font-bold text-ceylon-900">CK Tours</span>. Our team will review your requirements and contact you to discuss your journey and quotation.
        </p>

        <div className="p-6 bg-warm-50 rounded-2xl border border-warm-200/80 text-left mb-8 space-y-2 text-xs sm:text-sm text-gray-700">
          <div><strong className="text-ceylon-950">Traveler:</strong> {fullName} ({country})</div>
          <div><strong className="text-ceylon-950">Service Selected:</strong> {serviceType}</div>
          <div><strong className="text-ceylon-950">Itinerary / Preference:</strong> {interestedItinerary}</div>
          {preferredVehicle && <div><strong className="text-ceylon-950">Vehicle:</strong> {preferredVehicle}</div>}
          <div><strong className="text-ceylon-950">Travelers:</strong> {adults} Adult(s){children > 0 ? `, ${children} Child(ren)` : ''}</div>
        </div>

        <div className="space-y-4">
          <a
            href={submittedWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 px-6 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-2xl shadow-lg transition-all flex items-center justify-center space-x-2.5 text-base"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Chat Directly on WhatsApp with This Enquiry</span>
          </a>

          <p className="text-xs text-gray-500">
            Clicking will open WhatsApp with your travel details neatly formatted so our local planner can assist you without delay.
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-warm-200 flex items-center justify-center space-x-2 text-xs text-gray-400">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>No automated pricing • Handcrafted quotations by Sri Lankan travel specialists</span>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-luxury border border-warm-200 max-w-4xl mx-auto">
      
      {/* Step 1: Personal Information */}
      <div className="mb-10">
        <div className="flex items-center space-x-3 mb-6 pb-3 border-b border-warm-200">
          <div className="w-8 h-8 rounded-lg bg-ceylon-900 text-gold-400 flex items-center justify-center font-bold text-sm">
            01
          </div>
          <div>
            <h3 className="font-serif font-bold text-xl text-ceylon-950">
              Personal Information
            </h3>
            <p className="text-xs text-gray-500">How should our travel team contact you?</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. John Smith"
              className="w-full px-4 py-3 rounded-xl border border-warm-300 text-sm focus:outline-none focus:ring-2 focus:ring-ceylon-600 bg-warm-50/50"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
              Country of Residence <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="e.g. United Kingdom, Germany, Australia"
              className="w-full px-4 py-3 rounded-xl border border-warm-300 text-sm focus:outline-none focus:ring-2 focus:ring-ceylon-600 bg-warm-50/50"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
              WhatsApp / Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              required
              value={phoneWhatsApp}
              onChange={(e) => setPhoneWhatsApp(e.target.value)}
              placeholder="Include country code, e.g. +44 7911 123456"
              className="w-full px-4 py-3 rounded-xl border border-warm-300 text-sm focus:outline-none focus:ring-2 focus:ring-ceylon-600 bg-warm-50/50"
            />
            <span className="text-[11px] text-gray-400 mt-1 block">Preferred for fast, direct quotation delivery</span>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
              Email Address (Optional)
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. john@example.com"
              className="w-full px-4 py-3 rounded-xl border border-warm-300 text-sm focus:outline-none focus:ring-2 focus:ring-ceylon-600 bg-warm-50/50"
            />
          </div>
        </div>
      </div>

      {/* Step 2: Trip Information */}
      <div className="mb-10">
        <div className="flex items-center space-x-3 mb-6 pb-3 border-b border-warm-200">
          <div className="w-8 h-8 rounded-lg bg-ceylon-900 text-gold-400 flex items-center justify-center font-bold text-sm">
            02
          </div>
          <div>
            <h3 className="font-serif font-bold text-xl text-ceylon-950">
              Trip Details & Schedule
            </h3>
            <p className="text-xs text-gray-500">Dates, party size, and travel locations</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
              Arrival Date
            </label>
            <div className="relative">
              <input
                type="date"
                value={arrivalDate}
                onChange={(e) => setArrivalDate(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-warm-300 text-sm focus:outline-none focus:ring-2 focus:ring-ceylon-600 bg-warm-50/50"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
              Departure Date
            </label>
            <div className="relative">
              <input
                type="date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-warm-300 text-sm focus:outline-none focus:ring-2 focus:ring-ceylon-600 bg-warm-50/50"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
              Adult Travelers (12+ yrs)
            </label>
            <input
              type="number"
              min={1}
              max={50}
              value={adults}
              onChange={(e) => setAdults(parseInt(e.target.value) || 1)}
              className="w-full px-4 py-3 rounded-xl border border-warm-300 text-sm focus:outline-none focus:ring-2 focus:ring-ceylon-600 bg-warm-50/50"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
              Children (0 - 11 yrs)
            </label>
            <input
              type="number"
              min={0}
              max={30}
              value={children}
              onChange={(e) => setChildren(parseInt(e.target.value) || 0)}
              className="w-full px-4 py-3 rounded-xl border border-warm-300 text-sm focus:outline-none focus:ring-2 focus:ring-ceylon-600 bg-warm-50/50"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
              Pickup Location
            </label>
            <input
              type="text"
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              placeholder="e.g. Bandaranaike Int. Airport (CMB) or Hotel"
              className="w-full px-4 py-3 rounded-xl border border-warm-300 text-sm focus:outline-none focus:ring-2 focus:ring-ceylon-600 bg-warm-50/50"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
              Drop-off Location
            </label>
            <input
              type="text"
              value={dropoffLocation}
              onChange={(e) => setDropoffLocation(e.target.value)}
              placeholder="e.g. Bandaranaike Int. Airport (CMB) or Galle"
              className="w-full px-4 py-3 rounded-xl border border-warm-300 text-sm focus:outline-none focus:ring-2 focus:ring-ceylon-600 bg-warm-50/50"
            />
          </div>
        </div>
      </div>

      {/* Step 3: Service & Preferences */}
      <div className="mb-10">
        <div className="flex items-center space-x-3 mb-6 pb-3 border-b border-warm-200">
          <div className="w-8 h-8 rounded-lg bg-ceylon-900 text-gold-400 flex items-center justify-center font-bold text-sm">
            03
          </div>
          <div>
            <h3 className="font-serif font-bold text-xl text-ceylon-950">
              Service, Fleet & Itinerary Selection
            </h3>
            <p className="text-xs text-gray-500">Customize how you wish to experience Sri Lanka</p>
          </div>
        </div>

        {/* Service Type Selection */}
        <div className="mb-6">
          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-3">
            Select Desired Service <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { id: 'Vehicle Only', label: '🚐 Vehicle Only', desc: 'Private vehicle + dedicated driver for all travel' },
              { id: 'Vehicle + Accommodation', label: '🏨 Vehicle + Stays', desc: 'Transportation + tailored hotel arrangements' },
              { id: 'Accommodation Assistance', label: '🛏️ Stay Assistance', desc: 'Hotel advice & booking assistance' },
              { id: 'Custom Tour', label: '🗺️ Custom Tour', desc: 'Full custom itinerary + vehicle + bespoke plan' },
            ].map((srv) => (
              <button
                key={srv.id}
                type="button"
                onClick={() => setServiceType(srv.id as ServiceType)}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  serviceType === srv.id
                    ? 'border-ceylon-800 bg-ceylon-50/80 ring-2 ring-ceylon-700 text-ceylon-950 shadow-sm'
                    : 'border-warm-200 hover:border-warm-400 bg-white text-gray-700'
                }`}
              >
                <div className="font-bold text-sm mb-1">{srv.label}</div>
                <div className="text-[11px] text-gray-500 leading-snug">{srv.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Vehicle Selection & Itinerary Selection */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
              Preferred Vehicle
            </label>
            <select
              value={preferredVehicle}
              onChange={(e) => setPreferredVehicle(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-warm-300 text-sm focus:outline-none focus:ring-2 focus:ring-ceylon-600 bg-warm-50/50"
            >
              <option value="High Roof Van (Toyota KDH)">High Roof Van (Toyota KDH — up to 6 pax)</option>
              <option value="Flat Roof Van (Toyota KDH)">Flat Roof Van (Toyota KDH — up to 5 pax)</option>
              <option value="Sedan (Toyota Premio/Axio)">Sedan (Toyota Premio / Axio — up to 3 pax)</option>
              <option value="SUV (Toyota Prado / Honda)">SUV (Toyota Land Cruiser Prado — up to 4 pax)</option>
              <option value="Mini Car (Suzuki/Daihatsu)">Mini Car (Suzuki Wagon R / Alto — 2 pax)</option>
              <option value="Mini Bus (Toyota Coaster)">Mini Bus (Toyota Coaster — up to 15 pax)</option>
              <option value="Large Coach Bus">Luxury Coach Bus (20+ pax)</option>
              <option value="No Preference / Recommend for me">No Preference (Recommend for me)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
              Interested Itinerary
            </label>
            <select
              value={interestedItinerary}
              onChange={(e) => setInterestedItinerary(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-warm-300 text-sm focus:outline-none focus:ring-2 focus:ring-ceylon-600 bg-warm-50/50"
            >
              <option value="I want a custom itinerary">✨ I want a custom itinerary tailored for me</option>
              {TOURS_DATA.map((t) => (
                <option key={t.id} value={t.title}>
                  {t.title} ({t.duration_days} Days)
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Additional Requirements */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
            Additional Requirements & Travel Wishes
          </label>
          <textarea
            rows={4}
            value={additionalRequirements}
            onChange={(e) => setAdditionalRequirements(e.target.value)}
            placeholder="Tell us anything you'd like us to know about your trip: specific places you wish to visit (e.g. Ella train, Sigiriya, Yala safari, surfing), special pacing requirements, child seats, luggage volume, or hotel preferences..."
            className="w-full px-4 py-3 rounded-xl border border-warm-300 text-sm focus:outline-none focus:ring-2 focus:ring-ceylon-600 bg-warm-50/50"
          />
        </div>
      </div>

      {/* Submit Section */}
      <div className="pt-6 border-t border-warm-200">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-gray-500 max-w-md">
            By submitting, CK Tours will manually prepare a customized Sri Lanka quotation with zero obligation.
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 hover:from-gold-300 hover:to-gold-400 text-ceylon-950 font-bold text-base rounded-2xl shadow-luxury hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center space-x-2 tracking-wide disabled:opacity-50"
          >
            <Send className="w-5 h-5 text-ceylon-950" />
            <span>{isSubmitting ? 'Submitting Request...' : 'REQUEST FREE QUOTE'}</span>
          </button>
        </div>
      </div>
    </form>
  );
};
