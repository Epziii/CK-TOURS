import { Tour } from '../types/database.types';
import { TOURS_DATA } from '../data/toursData';
import { supabase, isSupabaseConfigured } from './supabase';

export const tourService = {
  async getTours(): Promise<Tour[]> {
    if (isSupabaseConfigured() && supabase) {
      try {
        const { data, error } = await supabase
          .from('tours')
          .select('*, tour_itineraries(*)')
          .eq('is_published', true)
          .order('display_order', { ascending: true });
        
        if (!error && data && data.length > 0) {
          return data.map((t: any) => ({
            ...t,
            itinerary: t.tour_itineraries || []
          }));
        }
      } catch (err) {
        console.warn('Falling back to local tour data:', err);
      }
    }
    return TOURS_DATA.filter(t => t.is_published);
  },

  async getTourBySlug(slug: string): Promise<Tour | null> {
    if (isSupabaseConfigured() && supabase) {
      try {
        const { data, error } = await supabase
          .from('tours')
          .select('*, tour_itineraries(*)')
          .eq('slug', slug)
          .eq('is_published', true)
          .single();
        
        if (!error && data) {
          return {
            ...data,
            itinerary: data.tour_itineraries || []
          };
        }
      } catch (err) {
        console.warn('Falling back to local tour data for slug:', slug, err);
      }
    }
    const found = TOURS_DATA.find(t => t.slug === slug);
    return found || null;
  }
};
