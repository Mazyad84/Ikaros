import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xfceiabyoptjofuldrxd.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhmY2VpYWJ5b3B0am9mdWxkcnhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2NTA3NDAsImV4cCI6MjA2OTIyNjc0MH0.BQQ4g9g97OtGcaEs9bPAZzx7yaATHSEvLAnaH5OuHZ0';

export const supabase = createClient(supabaseUrl, supabaseKey);
