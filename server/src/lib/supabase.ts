import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://zdfftrlqypoiadtfkxsr.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpkZmZ0cmxxeXBvaWFkdGZreHNyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MTA3NzI3NywiZXhwIjoxOTk2NjUzMjc3fQ.QjNNNz2MkUeapeZuTMhWQ3WjzzfWh3lZId1UVOZF1Hs',
)
