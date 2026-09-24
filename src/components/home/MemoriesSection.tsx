import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Camera, ArrowRight, MessageSquare, Plus } from 'lucide-react';
import { GUEST_MEMORIES } from '../../data/memoriesData';
import { MemoryCard } from '../memories/MemoryCard';
import { ShareMemoryModal } from '../memories/ShareMemoryModal';

export const MemoriesSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const featuredMemories = GUEST_MEMORIES.slice(0, 3);

  return (
    <section className="py-20 sm:py-28 bg-warm-100/60 border-t border-warm-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-gold-100 text-gold-900 text-xs font-semibold uppercase tracking-wider mb-4">
              <Camera className="w-3.5 h-3.5 text-gold-700" />
              <span>Real Traveler Moments</span>
            </div>

            <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-ceylon-950 tracking-tight mb-4">
              Our Memories & Guest Feedback
            </h2>

            <p className="text-base text-gray-600 leading-relaxed font-normal">
              Authentic stories and reflections from guests who explored Sri Lanka with CK Tours. We avoid fabricated reviews — here are real travel moments from the roads of Ceylon.
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex items-center space-x-3">
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-xl border border-ceylon-800 text-ceylon-900 text-xs font-bold hover:bg-ceylon-900 hover:text-white transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Share Your Memory</span>
            </button>

            <Link
              to="/memories"
              className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-ceylon-950 text-xs font-bold transition-all shadow-sm"
            >
              <span>View All Memories</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Memories Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredMemories.map((mem) => (
            <MemoryCard key={mem.id} memory={mem} />
          ))}
        </div>

        {/* Guestbook Banner */}
        <div className="mt-14 bg-white rounded-3xl p-6 sm:p-8 border border-warm-200 shadow-soft flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-gold-50 border border-gold-200 flex items-center justify-center text-gold-600 flex-shrink-0">
              <Heart className="w-6 h-6 fill-gold-400" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-lg text-ceylon-950">
                Traveled with CK Tours recently?
              </h4>
              <p className="text-xs sm:text-sm text-gray-600">
                Help future travelers by sharing your honest feedback and favorite journey photo.
              </p>
            </div>
          </div>

          <button
            onClick={() => setModalOpen(true)}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-ceylon-900 hover:bg-ceylon-800 text-gold-300 text-xs font-bold tracking-wider uppercase transition-colors"
          >
            Leave Your Feedback
          </button>
        </div>

      </div>

      <ShareMemoryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
};
