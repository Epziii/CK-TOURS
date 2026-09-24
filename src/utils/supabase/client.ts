import { createBrowserClient } from "@supabase/ssr";

const supabaseUrl = 
  import.meta.env.VITE_SUPABASE_URL ||
  import.meta.env.NEXT_PUBLIC_SUPABASE_URL ||
  'https://nkrowjmapabbnvtmrvcv.supabase.co';

const supabaseKey = 
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  import.meta.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  'sb_publishable_m714xMw5sZEf_4MLGNIFag_3VeLBEjm';

export const createClient = () =>
  createBrowserClient(
    supabaseUrl,
    supabaseKey,
  );
