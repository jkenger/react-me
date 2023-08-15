import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://qejrjkjktsmqnszafmcz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFlanJqa2prdHNtcW5zemFmbWN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIwOTQwMDQsImV4cCI6MjAwNzY3MDAwNH0.LbsRlURvUX_nv3Dv4nVdpWuzCTxJpnthB78GQuMWLco";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
