import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xfceiabyoptjofuldrxd.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1Ni...'; // المفتاح الكامل
export const supabase = createClient(supabaseUrl, supabaseKey);
