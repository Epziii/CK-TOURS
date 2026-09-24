import React, { useState } from 'react';
import { Camera, Heart, Plus, Sparkles, MessageSquare } from 'lucide-react';
import { GUEST_MEMORIES } from '../data/memoriesData';
import { MemoryCard } from '../components/memories/MemoryCard';
import { ShareMemoryModal } from '../components/memories/ShareMemoryModal';
import { BUSINESS_CONFIG } from '../services/quoteService';

export const MemoriesPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const rawWhatsApp = BUSINESS_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');

  return (
    <div className="pt-28 pb-24 bg-warm-50 min-h-screen animate-fade-in">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-gold-100 text-gold-900 text-xs font-semibold uppercase tracking-wider mb-4">
            <Camera className="w-3.5 h-3.5 text-gold-700" />
            <span>Traveler Guestbook & Moments</span>
          </div>

          <h1 className="font-serif font-bold text-3xl sm:text-5xl text-ceylon-950 tracking-tight mb-4">
            Our Memories & Guest Feedback
          </h1>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            Real moments and honest words from international travelers who discovered Sri Lanka with CK Tours. We do not use fake reviews or fabricated awards — here is genuine feedback from our guests.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-ceylon-900 hover:bg-ceylon-850 text-gold-400 text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 shadow"
            >
              <Plus className="w-4 h-4" />
              <span>Share Your Memory & Feedback</span>
            </button>

            <a
              href={`https://wa.me/${rawWhatsApp}?text=${encodeURIComponent('Hi CK Tours, I traveled with you and would like to share my trip photos and feedback!')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 shadow"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Send Photos via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Memories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GUEST_MEMORIES.map((memory) => (
            <MemoryCard key={memory.id} memory={memory} />
          ))}
        </div>

        {/* Note on Authenticity */}
        <div className="mt-16 bg-white rounded-3xl p-8 border border-warm-200 shadow-soft text-center max-w-2xl mx-auto">
          <div className="w-10 h-10 bg-gold-50 text-gold-600 rounded-full flex items-center justify-center mx-auto mb-3">
            <Heart className="w-5 h-5 fill-gold-400" />
          </div>
          <h3 className="font-serif font-bold text-xl text-ceylon-950 mb-2">
            Committed to Genuine Feedback
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            Every memory posted here represents actual journeys coordinated by CK Tours. If you have recently concluded your travel across Sri Lanka with our team, we would be honored to include your memories and travel reflections.
          </p>
        </div>
      </div>

      <ShareMemoryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};
