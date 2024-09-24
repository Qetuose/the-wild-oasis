import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://gbkshwrliyakxmshcwug.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdia3Nod3JsaXlha3htc2hjd3VnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcxNzI3MTQsImV4cCI6MjA0Mjc0ODcxNH0.SnOvps2eHVrZ5JNpAE11Z2CEAdamkfwIU9pC1GyzIlc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
