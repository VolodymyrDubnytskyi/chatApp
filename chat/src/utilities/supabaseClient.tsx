import { Database } from '@/types/supabase';
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient<Database>(import.meta.env.VITE_REACT_APP_SUPABASE_URL!, import.meta.env.VITE_REACT_APP_SUPABASE_ANON_KEY!);