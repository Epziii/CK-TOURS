import { Vehicle, VehicleCategory } from '../types/database.types';
import { VEHICLES_DATA } from '../data/vehiclesData';
import { supabase, isSupabaseConfigured } from './supabase';

export const vehicleService = {
  async getVehicles(): Promise<Vehicle[]> {
    if (isSupabaseConfigured() && supabase) {
      try {
        const { data, error } = await supabase
          .from('vehicles')
          .select('*, vehicle_photos(*)')
          .eq('is_published', true)
          .eq('is_active', true);
        
        if (!error && data && data.length > 0) {
          return data.map((v: any) => ({
            ...v,
            cover_image: v.vehicle_photos?.find((p: any) => p.is_primary)?.photo_url || v.vehicle_photos?.[0]?.photo_url || v.cover_image,
            gallery_images: v.vehicle_photos?.map((p: any) => p.photo_url) || []
          }));
        }
      } catch (err) {
        console.warn('Falling back to local vehicle data:', err);
      }
    }
    return VEHICLES_DATA.filter(v => v.is_published);
  },

  async getVehicleBySlug(slug: string): Promise<Vehicle | null> {
    if (isSupabaseConfigured() && supabase) {
      try {
        const { data, error } = await supabase
          .from('vehicles')
          .select('*, vehicle_photos(*)')
          .eq('slug', slug)
          .eq('is_published', true)
          .single();
        
        if (!error && data) {
          return {
            ...data,
            cover_image: data.vehicle_photos?.find((p: any) => p.is_primary)?.photo_url || data.cover_image,
            gallery_images: data.vehicle_photos?.map((p: any) => p.photo_url) || []
          };
        }
      } catch (err) {
        console.warn('Falling back to local vehicle data for slug:', slug, err);
      }
    }
    const found = VEHICLES_DATA.find(v => v.slug === slug);
    return found || null;
  },

  async getVehiclesByCategory(category: VehicleCategory): Promise<Vehicle[]> {
    const all = await this.getVehicles();
    return all.filter(v => v.category === category);
  }
};
