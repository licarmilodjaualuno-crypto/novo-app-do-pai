import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://iqcqpgwduomokhagoicx.supabase.co'
const supabaseKey = 'sb_publishable_VAMK3APzhEjml_iGRHV-nA_uBpHcS5a'

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
})
