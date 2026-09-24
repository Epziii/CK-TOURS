import React, { useState } from 'react';
import { X, Send, Heart, Camera, CheckCircle2, MessageSquare } from 'lucide-react';
import { memoryService } from '../../services/memoryService';
import { BUSINESS_CONFIG } from '../../services/quoteService';

interface ShareMemoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareMemoryModal: React.FC<ShareMemoryModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [tripDate, setTripDate] = useState('');
  const [route, setRoute] = useState('');
  const [feedbackQuote, setFeedbackQuote] = useState('');
  const [story, setStory] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !feedbackQuote) return;

    setSubmitting(true);
    await memoryService.submitMemory({
      traveler_name: name,
      country: country || 'International Traveler',
      trip_date: tripDate || 'Recent Journey',
      route_summary: route || 'Custom Sri Lanka Tour',
      feedback_quote: feedbackQuote,
      story_text: story,
      photo_urls: ['https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80']
    });

    setSubmitting(false);
    setSubmitted(true);
  };

  const rawWhatsApp = BUSINESS_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
  const whatsAppShareUrl = `https://wa.me/${rawWhatsApp}?text=${encodeURIComponent(
    `*Traveler Memory / Feedback for CK Tours* 🇱🇰\n\nName: ${name}\nCountry: ${country}\nTrip: ${route} (${tripDate})\n\nFeedback:\n"${feedbackQuote}"\n\nStory:\n${story}`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-warm-200">
        <div className="p-6 sm:p-8">
          <div className="flex items-center justify-between pb-4 border-b border-warm-100">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gold-100 flex items-center justify-center text-gold-700">
                <Heart className="w-4 h-4 fill-gold-500 text-gold-600" />
              </div>
              <h3 className="font-serif font-bold text-xl text-ceylon-950">
                Share Your Trip Memory
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-warm-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-serif font-bold text-2xl text-ceylon-950">
                Thank You for Sharing!
              </h4>
              <p className="text-sm text-gray-600 max-w-sm mx-auto">
                Your memories and kind words mean everything to our driver team. We will review and feature your journey on the website.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={whatsAppShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 px-5 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white rounded-xl text-sm font-semibold transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Photos on WhatsApp</span>
                </a>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 border border-warm-300 rounded-xl text-sm font-medium text-gray-700 hover:bg-warm-50 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <p className="text-xs text-gray-600 leading-relaxed">
                Did you travel across Sri Lanka with CK Tours? We would love to feature your honest experience and favorite travel memories in our guestbook.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. David Miller"
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-warm-300 focus:outline-none focus:ring-2 focus:ring-ceylon-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Country of Origin
                  </label>
                  <input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="e.g. United Kingdom 🇬🇧"
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-warm-300 focus:outline-none focus:ring-2 focus:ring-ceylon-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Route / Places Visited
                  </label>
                  <input
                    type="text"
                    value={route}
                    onChange={(e) => setRoute(e.target.value)}
                    placeholder="e.g. Kandy, Ella, Yala & Galle"
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-warm-300 focus:outline-none focus:ring-2 focus:ring-ceylon-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Date of Journey
                  </label>
                  <input
                    type="text"
                    value={tripDate}
                    onChange={(e) => setTripDate(e.target.value)}
                    placeholder="e.g. January 2026"
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-warm-300 focus:outline-none focus:ring-2 focus:ring-ceylon-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Overall Feedback / Highlight Quote *
                </label>
                <textarea
                  required
                  rows={2}
                  value={feedbackQuote}
                  onChange={(e) => setFeedbackQuote(e.target.value)}
                  placeholder="In a sentence or two, how was your experience with your private driver and vehicle?"
                  className="w-full px-3.5 py-2 text-sm rounded-xl border border-warm-300 focus:outline-none focus:ring-2 focus:ring-ceylon-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Story or Favorite Moment (Optional)
                </label>
                <textarea
                  rows={3}
                  value={story}
                  onChange={(e) => setStory(e.target.value)}
                  placeholder="Share a memorable moment, scenic stop, or story from your journey..."
                  className="w-full px-3.5 py-2 text-sm rounded-xl border border-warm-300 focus:outline-none focus:ring-2 focus:ring-ceylon-600"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 bg-ceylon-900 hover:bg-ceylon-850 text-gold-400 font-bold rounded-xl text-sm transition-colors flex items-center justify-center space-x-2 shadow-lg disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{submitting ? 'Submitting...' : 'Submit Memory & Feedback'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
