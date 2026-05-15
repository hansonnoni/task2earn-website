import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pfixukibsdgasmvehutm.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmaXh1a2lic2RnYXNtdmVodXRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc3MjE3MzMsImV4cCI6MjA3MzI5NzczM30.W_2KjGBncbFfuznHwbUbrru_efvMA3AIIITaR2obCjk";

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);