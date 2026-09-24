import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, MessageSquare, Phone, MapPin, Send, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '../services/quoteService';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const rawWhatsApp = BUSINESS_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) return;
    setSubmitted(true);
  };

  const directWhatsAppUrl = `https://wa.me/${rawWhatsApp}?text=${encodeURIComponent(
    `*Inquiry from CK Tours Website*\nName: ${name || 'Traveler'}\nContact: ${phone || email || 'Not specified'}\nMessage: ${message || 'Hello CK Tours, I would like more information about private tours in Sri Lanka.'}`
  )}`;

  return (
    <div className="pt-28 pb-24 bg-warm-50 min-h-screen animate-fade-in">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-gold-100 text-gold-900 text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Direct Communication</span>
          </div>

          <h1 className="font-serif font-bold text-3xl sm:text-5xl text-ceylon-950 tracking-tight mb-4">
            Contact CK Tours 🇱🇰
          </h1>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            Comfort • Safety • Luxury. We are based in Sri Lanka and ready to assist you with journey advice, vehicle recommendations, or custom tour itineraries.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Methods */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Card (Primary Action) */}
            <div className="bg-emerald-900/90 text-white rounded-3xl p-8 shadow-luxury border border-emerald-800">
              <div className="w-12 h-12 bg-emerald-800 rounded-2xl flex items-center justify-center text-emerald-300 mb-5">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-2xl mb-2">WhatsApp Direct Chat</h3>
              <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed mb-6">
                The fastest way to reach the CK Tours team. Ask questions about driving routes, vehicle space, or get a quotation sent directly to your phone.
              </p>

              <a
                href={`https://wa.me/${rawWhatsApp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 bg-emerald-500 hover:bg-emerald-400 text-ceylon-950 font-bold rounded-xl text-sm shadow text-center block transition-all flex items-center justify-center space-x-2"
              >
                <span>Chat on WhatsApp ({BUSINESS_CONFIG.displayPhone})</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-3xl p-8 border border-warm-200 shadow-soft space-y-4">
              <div className="w-12 h-12 bg-gold-50 text-gold-700 rounded-2xl flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-xl text-ceylon-950">Email Communication</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Send your flight itineraries, hotel preferences, or detailed questions to our official mailbox:
              </p>
              <a
                href={`mailto:${BUSINESS_CONFIG.email}`}
                className="text-sm font-semibold text-ceylon-800 hover:text-gold-600 block transition-colors break-all"
              >
                {BUSINESS_CONFIG.email}
              </a>
            </div>

            {/* Free Quote Banner Card */}
            <div className="bg-gradient-to-br from-ceylon-900 to-ceylon-950 text-white rounded-3xl p-8 shadow-soft space-y-4">
              <h3 className="font-serif font-bold text-xl">Need a Comprehensive Tour Quote?</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                For detailed quotes with party size, dates, and vehicle preferences, use our dedicated quotation intake form.
              </p>
              <Link
                to="/quote"
                className="inline-flex items-center space-x-2 px-5 py-3 bg-gradient-to-r from-gold-400 to-gold-500 text-ceylon-950 font-bold rounded-xl text-xs uppercase tracking-wider shadow hover:scale-[1.02] transition-transform"
              >
                <span>Request Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-3xl p-6 border border-warm-200 flex items-center justify-between text-xs text-gray-600">
              <span className="font-semibold text-ceylon-950">Follow CK Tours:</span>
              <div className="flex items-center space-x-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1.5 rounded-xl bg-warm-50 hover:bg-warm-100 text-ceylon-900 text-xs font-bold transition-colors"
                  title="Instagram"
                >
                  IG
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1.5 rounded-xl bg-warm-50 hover:bg-warm-100 text-ceylon-900 text-xs font-bold transition-colors"
                  title="Facebook"
                >
                  FB
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: General Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-warm-200 shadow-soft">
              <div className="mb-8">
                <span className="text-xs uppercase font-bold tracking-wider text-gold-600">Quick Message</span>
                <h2 className="font-serif font-bold text-2xl sm:text-3xl text-ceylon-950 mt-1">
                  Send Us a Message
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  Have a general question about visiting Sri Lanka? We're happy to guide you.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif font-bold text-2xl text-ceylon-950">
                    Message Sent Successfully
                  </h3>
                  <p className="text-sm text-gray-600 max-w-md mx-auto">
                    Thank you, {name}. Our team will review your message and reply via your provided contact details.
                  </p>
                  <div className="pt-4">
                    <a
                      href={directWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-sm font-semibold transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Continue to WhatsApp</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-4 py-3 rounded-xl border border-warm-300 text-sm focus:outline-none focus:ring-2 focus:ring-ceylon-600 bg-warm-50/50"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                        WhatsApp / Phone Number
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +44 7123 456789"
                        className="w-full px-4 py-3 rounded-xl border border-warm-300 text-sm focus:outline-none focus:ring-2 focus:ring-ceylon-600 bg-warm-50/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. sarah@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-warm-300 text-sm focus:outline-none focus:ring-2 focus:ring-ceylon-600 bg-warm-50/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                      Your Message or Travel Questions *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us what you'd like to know about Sri Lanka, our vehicles, driver services, or customized travel..."
                      className="w-full px-4 py-3 rounded-xl border border-warm-300 text-sm focus:outline-none focus:ring-2 focus:ring-ceylon-600 bg-warm-50/50"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 bg-ceylon-900 hover:bg-ceylon-850 text-gold-400 font-bold rounded-xl text-sm transition-all flex items-center justify-center space-x-2 shadow-lg"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Message to CK Tours</span>
                    </button>
                  </div>
                </form>
              )}

              <div className="mt-8 pt-6 border-t border-warm-100 flex items-center space-x-2 text-xs text-gray-400">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>We respect your privacy. No automated marketing spam or sharing of contact info.</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
