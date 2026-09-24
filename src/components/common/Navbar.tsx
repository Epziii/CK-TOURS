import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageSquare, Compass, ShieldCheck } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../services/quoteService';
import { BrandLogo } from './BrandLogo';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Itineraries', path: '/tours' },
    { name: 'Vehicles', path: '/vehicles' },
    { name: 'Services', path: '/services' },
    { name: 'Memories & Feedback', path: '/memories' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const rawWhatsApp = BUSINESS_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-ceylon-950/95 backdrop-blur-md shadow-lg border-b border-ceylon-800/50 py-3'
            : 'bg-gradient-to-b from-ceylon-950/80 via-ceylon-950/40 to-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <BrandLogo size="md" />
              <div className="flex flex-col">
                <div className="flex items-center space-x-1.5">
                  <span className="font-serif font-bold text-xl sm:text-2xl text-white tracking-wide">
                    CK TOURS
                  </span>
                  <span className="text-lg" role="img" aria-label="Sri Lanka flag">🇱🇰</span>
                </div>
                <span className="text-[10px] sm:text-xs tracking-widest uppercase font-medium text-gold-400">
                  Comfort • Safety • Luxury
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-gold-400 bg-ceylon-900/80 shadow-inner'
                        : 'text-gray-200 hover:text-white hover:bg-ceylon-900/40'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center space-x-3">
              <a
                href={`https://wa.me/${rawWhatsApp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-emerald-300 hover:text-white hover:bg-emerald-950/60 transition-colors border border-emerald-800/40"
                title="Chat with CK Tours on WhatsApp"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp</span>
              </a>

              <Link
                to="/quote"
                className="relative inline-flex items-center justify-center px-4 py-2 text-sm font-semibold tracking-wide text-ceylon-950 transition-all duration-200 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 rounded-lg shadow-md hover:shadow-gold-500/20 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Free Quote</span>
              </Link>
            </div>

            {/* Mobile Hamburger & Quick WhatsApp */}
            <div className="flex items-center space-x-2 lg:hidden">
              <a
                href={`https://wa.me/${rawWhatsApp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-emerald-900/60 text-emerald-400 border border-emerald-800/50"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-5 h-5" />
              </a>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-gray-200 hover:text-white hover:bg-ceylon-900/70 focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {isOpen ? <X className="w-6 h-6 text-gold-400" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        {/* Drawer Panel */}
        <div
          className={`fixed right-0 top-0 bottom-0 w-5/6 max-w-sm bg-ceylon-950 border-l border-ceylon-800 p-6 flex flex-col justify-between transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-ceylon-800/80">
              <div className="flex items-center space-x-2.5">
                <BrandLogo size="sm" />
                <div>
                  <span className="font-serif font-bold text-lg text-white">CK TOURS</span>
                  <p className="text-[10px] text-gold-400 font-medium tracking-wider uppercase">Sri Lanka 🇱🇰</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-gray-400 hover:text-white"
                aria-label="Close Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-6 space-y-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-ceylon-900 text-gold-400 font-semibold'
                        : 'text-gray-200 hover:bg-ceylon-900/50 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="pt-6 border-t border-ceylon-800/80 space-y-3">
            <Link
              to="/quote"
              className="w-full py-3.5 px-4 bg-gradient-to-r from-gold-400 to-gold-500 text-ceylon-950 rounded-xl font-bold text-center block shadow-lg text-sm tracking-wide"
            >
              Request Free Quote
            </Link>

            <a
              href={`https://wa.me/${rawWhatsApp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 bg-emerald-950/80 border border-emerald-700/50 text-emerald-300 rounded-xl font-medium text-center flex items-center justify-center space-x-2 text-sm"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Direct WhatsApp Chat</span>
            </a>

            <div className="pt-2 text-center text-xs text-gray-400 flex items-center justify-center space-x-1">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
              <span>Comfort • Safety • Luxury</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
