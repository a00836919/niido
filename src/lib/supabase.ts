import { createClient } from "@supabase/supabase-js";

/**
 * Cliente de Supabase para el servidor. Usa la llave anónima a propósito:
 * la tabla waitlist solo permite INSERT por RLS, nadie puede leer la lista
 * desde el navegador ni desde aquí.
 */
export function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) return null;

  return createClient(url, key, { auth: { persistSession: false } });
}
