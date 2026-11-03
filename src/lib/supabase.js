import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://iqcqpgwduomokhagoicx.supabase.co'
const supabaseKey = 'sb_publishable_VAMK3APzhEjml_iGRHV-nA_uBpHcS5a'

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
})

// Compatibility layer for the clean PAI client while preserving the existing database RPCs.
const rpc = supabase.rpc.bind(supabase)
supabase.rpc = (fn, args = {}, options) => {
  if (fn === 'create_direct_conversation' && 'p_other_user' in args) args = { other_user: args.p_other_user }
  if (fn === 'create_group_conversation' && 'p_title' in args) args = { group_title: args.p_title }
  return rpc(fn, args, options)
}
