import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageSquare, Calendar } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../services/quoteService';

export const FloatingQuoteCTA: React.FC = () => {
  const location = useLocation();
  const rawWhatsApp = BUSINESS_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');

  // Hide on quote page itself to prevent clutter
  if (location.pathname === '/quote') {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-3 sm:p-4 bg-ceylon-950/95 backdrop-blur-md border-t border-ceylon-800/80 lg:hidden shadow-2xl">
      <div className="flex items-center space-x-2.5 max-w-md mx-auto">
        <a
          href={`https://wa.me/${rawWhatsApp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center p-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-medium shadow-md transition-colors"
          aria-label="Direct WhatsApp Contact"
          title="Chat on WhatsApp"
        >
          <MessageSquare className="w-5 h-5" />
        </a>

        <Link
          to="/quote"
          className="flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 text-ceylon-950 font-bold text-sm tracking-wide shadow-lg active:scale-[0.98] transition-transform"
        >
          <Calendar className="w-4 h-4 text-ceylon-950" />
          <span>Get a Free Quote</span>
        </Link>
      </div>
    </div>
  );
};
