import { GuestMemory } from '../types/database.types';
import { GUEST_MEMORIES } from '../data/memoriesData';
import { supabase, isSupabaseConfigured } from './supabase';

export const memoryService = {
  async getMemories(): Promise<GuestMemory[]> {
    if (isSupabaseConfigured() && supabase) {
      try {
        const { data, error } = await supabase
          .from('guest_memories')
          .select('*')
          .eq('is_published', true)
          .order('created_at', { ascending: false });
        
        if (!error && data && data.length > 0) {
          return data;
        }
      } catch (err) {
        console.warn('Falling back to local memories data:', err);
      }
    }
    return GUEST_MEMORIES;
  },

  async submitMemory(memory: Omit<GuestMemory, 'id' | 'is_published'>): Promise<{ success: boolean; message: string }> {
    if (isSupabaseConfigured() && supabase) {
      try {
        const { error } = await supabase
          .from('guest_memories')
          .insert([
            {
              traveler_name: memory.traveler_name,
              country: memory.country,
              trip_date: memory.trip_date,
              route_summary: memory.route_summary,
              feedback_quote: memory.feedback_quote,
              story_text: memory.story_text || null,
              photo_urls: memory.photo_urls || [],
              is_published: false
            }
          ]);
        
        if (!error) {
          return {
            success: true,
            message: 'Thank you! Your memory and feedback have been received by CK Tours.'
          };
        }
      } catch (err) {
        console.warn('Supabase memory submission err:', err);
      }
    }

    // Local fallback
    try {
      const stored = JSON.parse(localStorage.getItem('ck_guest_memories_pending') || '[]');
      stored.unshift({ ...memory, id: 'mem-user-' + Date.now(), is_published: false });
      localStorage.setItem('ck_guest_memories_pending', JSON.stringify(stored));
    } catch {
      // ignore
    }

    return {
      success: true,
      message: 'Thank you for sharing your memory! Our team will review and feature it in the memories gallery.'
    };
  }
};
