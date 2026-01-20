-- Create table for early access signups
CREATE TABLE public.early_access_signups (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.early_access_signups ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public signup form)
CREATE POLICY "Anyone can submit early access signup"
ON public.early_access_signups
FOR INSERT
WITH CHECK (true);

-- Only allow reading via authenticated admin (optional future use)
CREATE POLICY "Authenticated users can view signups"
ON public.early_access_signups
FOR SELECT
TO authenticated
USING (true);