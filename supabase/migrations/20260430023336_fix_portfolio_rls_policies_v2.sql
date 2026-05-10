/*
  # Fix Portfolio Images RLS Policies - Version 2

  1. Security Fix
    - Remove overly permissive RLS policies that allow any authenticated user to modify portfolio entries
    - Implement proper admin-only access control using app_metadata
    - Keep public read access for viewing the gallery
    - Only admins can insert, update, delete portfolio entries

  2. Changes
    - Drop existing overly permissive policies for insert, update, delete
    - Create new restrictive policies that check for admin role in auth metadata
    - Policies now enforce that only users with admin role can modify entries

  3. Admin Role Setup
    - Users must have `admin: true` in their app_metadata to access admin functions
    - This must be set in Supabase Auth user metadata, not by the user themselves
*/

-- Drop the overly permissive policies
DROP POLICY IF EXISTS "Authenticated users can insert portfolio images" ON portfolio_images;
DROP POLICY IF EXISTS "Authenticated users can update portfolio images" ON portfolio_images;
DROP POLICY IF EXISTS "Authenticated users can delete portfolio images" ON portfolio_images;

-- INSERT: Only authenticated users with admin role can insert
CREATE POLICY "Only admins can insert portfolio images"
  ON portfolio_images
  FOR INSERT
  TO authenticated
  WITH CHECK (
    (SELECT (auth.jwt() -> 'app_metadata' -> 'admin')::boolean) = true
  );

-- UPDATE: Only authenticated users with admin role can update
CREATE POLICY "Only admins can update portfolio images"
  ON portfolio_images
  FOR UPDATE
  TO authenticated
  USING (
    (SELECT (auth.jwt() -> 'app_metadata' -> 'admin')::boolean) = true
  )
  WITH CHECK (
    (SELECT (auth.jwt() -> 'app_metadata' -> 'admin')::boolean) = true
  );

-- DELETE: Only authenticated users with admin role can delete
CREATE POLICY "Only admins can delete portfolio images"
  ON portfolio_images
  FOR DELETE
  TO authenticated
  USING (
    (SELECT (auth.jwt() -> 'app_metadata' -> 'admin')::boolean) = true
  );
