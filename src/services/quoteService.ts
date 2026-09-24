import { QuoteRequestPayload } from '../types/database.types';
import { supabase, isSupabaseConfigured } from './supabase';

export const BUSINESS_CONFIG = {
  brandName: 'CK Tours',
  tagline: 'Comfort • Safety • Luxury',
  country: 'Sri Lanka 🇱🇰',
  website: 'https://ck-tours.top',
  email: 'booking@ck-tours.top',
  // Default WhatsApp number (can be overridden via VITE_WHATSAPP_NUMBER in .env)
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || '94764998808',
  displayPhone: '+94 76 499 8808',
  logoUrl: 'https://i.ibb.co/NnYt5fjB/CK-TOURS-LOGO.png',
};

export const quoteService = {
  async submitQuoteRequest(payload: QuoteRequestPayload): Promise<{ success: boolean; id?: string; error?: string }> {
    // If Supabase is active, insert into quote_requests
    if (isSupabaseConfigured() && supabase) {
      try {
        const { data, error } = await supabase
          .from('quote_requests')
          .insert([
            {
              full_name: payload.full_name,
              country: payload.country,
              email: payload.email || null,
              phone_whatsapp: payload.phone_whatsapp,
              arrival_date: payload.arrival_date || null,
              departure_date: payload.departure_date || null,
              adults_count: payload.adults_count,
              children_count: payload.children_count,
              pickup_location: payload.pickup_location || null,
              dropoff_location: payload.dropoff_location || null,
              service_type: payload.service_type,
              preferred_vehicle: payload.preferred_vehicle || null,
              interested_itinerary_title: payload.interested_itinerary_title || null,
              additional_requirements: payload.additional_requirements || null,
              status: 'New'
            }
          ])
          .select('id')
          .single();

        if (error) {
          console.error('Supabase quote submission error:', error);
          // Return success true anyway with fallback so user is never blocked from contacting
          return { success: true, id: 'local-' + Date.now() };
        }

        return { success: true, id: data?.id };
      } catch (err: any) {
        console.warn('Network issue during DB submission, continuing with client flow:', err);
        return { success: true, id: 'local-' + Date.now() };
      }
    }

    // In local / offline mode, store temporarily in localStorage for resilience
    try {
      const existing = JSON.parse(localStorage.getItem('ck_quote_requests') || '[]');
      const newEntry = { ...payload, id: 'req-' + Date.now(), created_at: new Date().toISOString() };
      existing.unshift(newEntry);
      localStorage.setItem('ck_quote_requests', JSON.stringify(existing));
    } catch {
      // ignore storage errors
    }

    return { success: true, id: 'mock-' + Date.now() };
  },

  buildWhatsAppUrl(payload: QuoteRequestPayload): string {
    const rawNumber = BUSINESS_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
    
    const lines = [
      `*New Tour Enquiry — CK Tours Sri Lanka* 🇱🇰`,
      `*Name:* ${payload.full_name}`,
      `*Country:* ${payload.country}`,
      `*WhatsApp / Phone:* ${payload.phone_whatsapp}`,
      payload.email ? `*Email:* ${payload.email}` : '',
      `-----------------------------`,
      `*Service:* ${payload.service_type}`,
      payload.interested_itinerary_title ? `*Itinerary:* ${payload.interested_itinerary_title}` : '',
      payload.preferred_vehicle ? `*Preferred Vehicle:* ${payload.preferred_vehicle}` : '',
      `*Travelers:* ${payload.adults_count} Adult(s)${payload.children_count ? `, ${payload.children_count} Child(ren)` : ''}`,
      payload.arrival_date ? `*Arrival:* ${payload.arrival_date}` : '',
      payload.departure_date ? `*Departure:* ${payload.departure_date}` : '',
      payload.pickup_location ? `*Pickup:* ${payload.pickup_location}` : '',
      payload.dropoff_location ? `*Drop-off:* ${payload.dropoff_location}` : '',
      payload.additional_requirements ? `*Notes:* ${payload.additional_requirements}` : '',
      `-----------------------------`,
      `_Sent via https://ck-tours.top_`
    ].filter(Boolean);

    const message = encodeURIComponent(lines.join('\n'));
    return `https://wa.me/${rawNumber}?text=${message}`;
  }
};
