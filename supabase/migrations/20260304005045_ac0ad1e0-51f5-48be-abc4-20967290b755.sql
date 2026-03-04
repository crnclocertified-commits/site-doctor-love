
-- Create table for email signups
CREATE TABLE public.email_signups (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  source TEXT NOT NULL CHECK (source IN ('nc002_waitlist', 'newsletter')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add unique constraint per source (same email can sign up for both)
CREATE UNIQUE INDEX idx_email_signups_email_source ON public.email_signups (email, source);

-- Enable RLS
ALTER TABLE public.email_signups ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (public forms)
CREATE POLICY "Anyone can submit email signup"
  ON public.email_signups
  FOR INSERT
  WITH CHECK (true);

-- No public SELECT - only accessible via Supabase dashboard
CREATE POLICY "No public read access"
  ON public.email_signups
  FOR SELECT
  USING (false);
