import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MessageSquare, MapPin, ShieldCheck, Heart, ArrowUpRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../services/quoteService';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  const rawWhatsApp = BUSINESS_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');

  return (
    <footer className="bg-ceylon-950 text-gray-300 pt-16 pb-24 lg:pb-12 border-t border-ceylon-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-ceylon-900">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <BrandLogo size="md" />
              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-serif font-bold text-2xl text-white tracking-wide">
                    CK TOURS
                  </span>
                  <span className="text-xl" role="img" aria-label="Sri Lanka">🇱🇰</span>
                </div>
                <p className="text-xs font-semibold tracking-widest uppercase text-gold-400">
                  Comfort • Safety • Luxury
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Sri Lankan private transportation and personalized travel planning. We pair international travelers with experienced local chauffeurs, modern air-conditioned vehicles, and custom journeys tailored to your pace.
            </p>

            <div className="pt-2 flex items-center space-x-4">
              <a
                href={`https://wa.me/${rawWhatsApp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-emerald-950/80 border border-emerald-700/60 flex items-center justify-center text-emerald-400 hover:text-white hover:bg-emerald-800 transition-colors"
                title="WhatsApp CK Tours"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${BUSINESS_CONFIG.email}`}
                className="w-10 h-10 rounded-lg bg-ceylon-900 border border-ceylon-800 flex items-center justify-center text-gold-400 hover:text-white hover:bg-ceylon-850 transition-colors"
                title="Email CK Tours"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-ceylon-900 border border-ceylon-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-ceylon-850 transition-colors"
                title="Instagram"
              >
                <span className="text-xs font-bold">IG</span>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-ceylon-900 border border-ceylon-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-ceylon-850 transition-colors"
                title="Facebook"
              >
                <span className="text-xs font-bold">FB</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-serif font-semibold text-base tracking-wide">
              Explore Journeys
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/tours" className="text-gray-400 hover:text-gold-400 transition-colors">
                  All Itineraries
                </Link>
              </li>
              <li>
                <Link to="/tours/5-days-sri-lanka-highlights" className="text-gray-400 hover:text-gold-400 transition-colors">
                  5 Days Highlights
                </Link>
              </li>
              <li>
                <Link to="/tours/7-days-classic-sri-lanka" className="text-gray-400 hover:text-gold-400 transition-colors">
                  7 Days Classic Sri Lanka
                </Link>
              </li>
              <li>
                <Link to="/tours/8-days-hill-country-south-coast" className="text-gray-400 hover:text-gold-400 transition-colors">
                  8 Days Hill Country & Coast
                </Link>
              </li>
              <li>
                <Link to="/tours/10-days-complete-sri-lanka" className="text-gray-400 hover:text-gold-400 transition-colors">
                  10 Days Complete Island
                </Link>
              </li>
              <li>
                <Link to="/tours/12-days-ultimate-sri-lanka" className="text-gray-400 hover:text-gold-400 transition-colors">
                  12 Days Ultimate Voyage
                </Link>
              </li>
            </ul>
          </div>

          {/* Services & Fleet */}
          <div className="space-y-4">
            <h4 className="text-white font-serif font-semibold text-base tracking-wide">
              Services & Fleet
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-gold-400 transition-colors">
                  Vehicle Only
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-gold-400 transition-colors">
                  Vehicle + Accommodation
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-gold-400 transition-colors">
                  Accommodation Assistance
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-gold-400 transition-colors">
                  Custom Tour Planning
                </Link>
              </li>
              <li>
                <Link to="/vehicles" className="text-gray-400 hover:text-gold-400 transition-colors">
                  Toyota KDH High Roof
                </Link>
              </li>
              <li>
                <Link to="/vehicles" className="text-gray-400 hover:text-gold-400 transition-colors">
                  Luxury Sedans & SUVs
                </Link>
              </li>
              <li>
                <Link to="/memories" className="text-gray-400 hover:text-gold-400 transition-colors">
                  Guest Memories & Feedback
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-white font-serif font-semibold text-base tracking-wide">
              Direct Contact
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href={`mailto:${BUSINESS_CONFIG.email}`}
                className="flex items-start space-x-2.5 text-gray-300 hover:text-gold-400 transition-colors group"
              >
                <Mail className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                <span className="break-all text-xs sm:text-sm">{BUSINESS_CONFIG.email}</span>
              </a>

              <a
                href={`https://wa.me/${rawWhatsApp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2.5 text-gray-300 hover:text-emerald-400 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>WhatsApp: {BUSINESS_CONFIG.displayPhone}</span>
              </a>

              <div className="flex items-center space-x-2.5 text-gray-400">
                <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Colombo & All Sri Lanka Routes</span>
              </div>

              <div className="pt-2">
                <Link
                  to="/quote"
                  className="inline-flex items-center space-x-1.5 px-4 py-2 bg-gradient-to-r from-gold-500 to-gold-600 text-ceylon-950 rounded-lg text-xs font-bold uppercase tracking-wider shadow hover:from-gold-400 hover:to-gold-500 transition-all"
                >
                  <span>Request Free Quote</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 space-y-4 sm:space-y-0">
          <div>
            © 2026 CK Tours. All rights reserved. Comfort • Safety • Luxury.
          </div>
          <div className="flex items-center space-x-6 text-gray-400">
            <span>Website: <a href="https://ck-tours.top" className="text-gold-400 hover:underline">ck-tours.top</a></span>
            <span>Sri Lanka Private Tourism</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
