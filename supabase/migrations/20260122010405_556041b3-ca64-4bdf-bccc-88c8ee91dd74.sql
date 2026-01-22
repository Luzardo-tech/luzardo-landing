-- Fix 1: Add RLS policies for signup_rate_limit table
-- The rate limiting is handled by SECURITY DEFINER triggers, so we don't need public access
-- But we need to ensure the trigger function can operate properly

-- Drop any existing policies first (if any)
DROP POLICY IF EXISTS "No public access to rate limits" ON public.signup_rate_limit;

-- Create a policy that denies direct public access (security definer triggers bypass RLS)
CREATE POLICY "No public access to rate limits"
ON public.signup_rate_limit
FOR ALL
USING (false)
WITH CHECK (false);

-- Fix 2: Update the SELECT policy on early_access_signups to properly restrict access
-- The current policy uses 'true' which allows anyone to read all data

-- Drop the current overly permissive SELECT policy
DROP POLICY IF EXISTS "Only service role can view signups" ON public.early_access_signups;

-- Create a properly restrictive SELECT policy
-- Note: Service role bypasses RLS entirely, so we deny all regular access
-- Only service_role (which bypasses RLS) can read this data
CREATE POLICY "No public read access to signups"
ON public.early_access_signups
FOR SELECT
USING (false);