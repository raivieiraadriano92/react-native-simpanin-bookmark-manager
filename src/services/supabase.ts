import { createClient } from '@supabase/supabase-js'
import * as SecureStore from 'expo-secure-store'

if (!process.env.SUPABASE_KEY) {
  throw new Error('SUPABASE_KEY variable missing .env')
}

if (!process.env.SUPABASE_URL) {
  throw new Error('SUPABASE_URL variable missing .env')
}

// Better put your these secret keys in .env file
export const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY, {
  localStorage: {
    getItem: SecureStore.getItemAsync,
    removeItem: SecureStore.deleteItemAsync,
    setItem: (key, value) => {
      console.log(key)

      console.log(value)
    }
  },
  detectSessionInUrl: false // Prevents Supabase from evaluating window.location.href, breaking mobile
})
