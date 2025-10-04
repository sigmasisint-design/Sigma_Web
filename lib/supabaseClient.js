// lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// As variáveis de ambiente serão lidas do Vercel
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Inicializa e exporta o cliente Supabase.
// Qualquer arquivo que precisar do Supabase importará este 'supabase'.
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
