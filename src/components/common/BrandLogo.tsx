import React, { useState } from 'react';
import { BUSINESS_CONFIG } from '../../services/quoteService';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = '', size = 'md' }) => {
  const [srcIndex, setSrcIndex] = useState(0);

  // Ordered candidate sources:
  // 1. Local /logo.png (if saved locally)
  // 2. Direct hosted logo on imgbb with no-referrer
  // 3. Fallback SVG favicon badge
  const sources = [
    '/logo.png',
    BUSINESS_CONFIG.logoUrl || 'https://i.ibb.co/NnYt5fjB/CK-TOURS-LOGO.png',
    '/favicon.svg'
  ];

  const sizeClasses = {
    sm: 'w-9 h-9',
    md: 'w-11 h-11 sm:w-12 sm:h-12',
    lg: 'w-14 h-14 sm:w-16 sm:h-16'
  };

  const handleImgError = () => {
    if (srcIndex < sources.length - 1) {
      setSrcIndex(srcIndex + 1);
    }
  };

  return (
    <div
      className={`${sizeClasses[size]} rounded-xl overflow-hidden bg-white/10 p-0.5 border border-gold-400/40 flex items-center justify-center shadow-md transform transition-transform group-hover:scale-105 flex-shrink-0 ${className}`}
    >
      <img
        src={sources[srcIndex]}
        alt="CK Tours Sri Lanka Logo"
        referrerPolicy="no-referrer"
        crossOrigin="anonymous"
        className="w-full h-full object-contain"
        onError={handleImgError}
      />
    </div>
  );
};
