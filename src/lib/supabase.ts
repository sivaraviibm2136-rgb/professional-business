import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseKey);

export async function submitContact(data: {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}) {
  const { error } = await supabase
    .from('contacts')
    .insert([data]);

  if (error) throw error;
}

export async function subscribeToNewsletter(email: string) {
  const { error } = await supabase
    .from('newsletter_subscribers')
    .insert([{ email }]);

  if (error) throw error;
}
