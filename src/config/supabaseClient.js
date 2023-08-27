import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseUrl = "https://fxcugcfowoaoqemuntzd.supabase.co"
// const supabaseKey = process.env.REACT_APP_ANON_KEY
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ4Y3VnY2Zvd29hb3FlbXVudHpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIyNjQzMDQsImV4cCI6MjAwNzg0MDMwNH0.-b_Yncrh8SWKUuAIuYokL1LArkWayRKUL5p1wFOvlCo"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase