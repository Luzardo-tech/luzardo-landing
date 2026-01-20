-- ==========================================
-- FIX 1: SERVER-SIDE INPUT VALIDATION
-- Add validation trigger for name and email
-- ==========================================

-- Create validation function
CREATE OR REPLACE FUNCTION public.validate_signup_data()
RETURNS TRIGGER AS $$
BEGIN
  -- Trim and normalize input
  NEW.name := trim(NEW.name);
  NEW.email := lower(trim(NEW.email));
  
  -- Validate name length (1-100 characters)
  IF length(NEW.name) < 1 THEN
    RAISE EXCEPTION 'Name cannot be empty';
  END IF;
  
  IF length(NEW.name) > 100 THEN
    RAISE EXCEPTION 'Name must be 100 characters or less';
  END IF;
  
  -- Validate email length (max 255 characters)
  IF length(NEW.email) > 255 THEN
    RAISE EXCEPTION 'Email must be 255 characters or less';
  END IF;
  
  -- Validate email format using regex
  IF NEW.email !~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$' THEN
    RAISE EXCEPTION 'Invalid email format';
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for input validation
CREATE TRIGGER validate_signup_before_insert
BEFORE INSERT ON public.early_access_signups
FOR EACH ROW EXECUTE FUNCTION public.validate_signup_data();

-- ==========================================
-- FIX 2: RATE LIMITING
-- Add database-level rate limiting (3 attempts per hour per email)
-- ==========================================

-- Create rate limiting tracking table
CREATE TABLE public.signup_rate_limit (
  identifier TEXT PRIMARY KEY,
  attempt_count INTEGER DEFAULT 1,
  first_attempt TIMESTAMP WITH TIME ZONE DEFAULT now(),
  last_attempt TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS on rate limit table (deny all public access - only trigger can access)
ALTER TABLE public.signup_rate_limit ENABLE ROW LEVEL SECURITY;

-- No policies = no direct access (only via SECURITY DEFINER trigger function)

-- Create rate limiting function
CREATE OR REPLACE FUNCTION public.check_signup_rate_limit()
RETURNS TRIGGER AS $$
DECLARE
  v_identifier TEXT;
  v_record RECORD;
BEGIN
  -- Use email as identifier for rate limiting
  v_identifier := lower(trim(NEW.email));
  
  -- Get existing rate limit record within the last hour
  SELECT attempt_count, first_attempt INTO v_record
  FROM public.signup_rate_limit
  WHERE identifier = v_identifier
  AND first_attempt > now() - INTERVAL '1 hour';
  
  -- Check if rate limit exceeded (max 3 attempts per hour per email)
  IF v_record.attempt_count IS NOT NULL AND v_record.attempt_count >= 3 THEN
    RAISE EXCEPTION 'Rate limit exceeded. Please try again later.';
  END IF;
  
  -- Update or insert rate limit record
  INSERT INTO public.signup_rate_limit (identifier, attempt_count, first_attempt, last_attempt)
  VALUES (v_identifier, 1, now(), now())
  ON CONFLICT (identifier) DO UPDATE
  SET 
    attempt_count = CASE 
      WHEN public.signup_rate_limit.first_attempt > now() - INTERVAL '1 hour' 
      THEN public.signup_rate_limit.attempt_count + 1
      ELSE 1
    END,
    first_attempt = CASE 
      WHEN public.signup_rate_limit.first_attempt > now() - INTERVAL '1 hour' 
      THEN public.signup_rate_limit.first_attempt
      ELSE now()
    END,
    last_attempt = now();
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Create trigger for rate limiting (runs before validation)
CREATE TRIGGER check_rate_limit_before_signup
BEFORE INSERT ON public.early_access_signups
FOR EACH ROW EXECUTE FUNCTION public.check_signup_rate_limit();

-- ==========================================
-- FIX 3: TIGHTEN RLS POLICY
-- The SELECT policy is overly permissive (allows all authenticated users)
-- Restrict to specific admin role or remove if not needed
-- ==========================================

-- Drop the overly permissive SELECT policy
DROP POLICY IF EXISTS "Authenticated users can view signups" ON public.early_access_signups;

-- Create more restrictive policy - only service role (admin) can view
-- Since there's no admin role table yet, we'll restrict to service_role only
-- (signups can be viewed via Supabase dashboard or service role key)
CREATE POLICY "Only service role can view signups"
ON public.early_access_signups
FOR SELECT
TO service_role
USING (true);

-- ==========================================
-- CLEANUP FUNCTION for old rate limit records
-- ==========================================

CREATE OR REPLACE FUNCTION public.cleanup_old_rate_limits()
RETURNS void AS $$
BEGIN
  DELETE FROM public.signup_rate_limit
  WHERE first_attempt < now() - INTERVAL '24 hours';
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;