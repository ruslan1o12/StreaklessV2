/*
  # Create portfolio images table for Streakless Windows

  1. New Tables
    - `portfolio_images`
      - `id` (uuid, primary key)
      - `title` (text) - project name/title
      - `description` (text) - optional description
      - `before_image_url` (text) - URL to before image in storage
      - `after_image_url` (text) - URL to after image in storage
      - `created_at` (timestamptz) - when the portfolio entry was created
      - `updated_at` (timestamptz) - when last updated

  2. Storage
    - Create public bucket `portfolio-images` for storing before/after photos
    
  3. Security
    - Enable RLS on `portfolio_images` table
    - Public can view all portfolio images (read-only)
    - Admin users can insert, update, delete portfolio entries
    - Use authenticated user check for admin operations
*/

CREATE TABLE IF NOT EXISTS portfolio_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  before_image_url text NOT NULL,
  after_image_url text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE portfolio_images ENABLE ROW LEVEL SECURITY;

-- Anyone can view portfolio images
CREATE POLICY "Portfolio images are viewable by everyone"
  ON portfolio_images
  FOR SELECT
  USING (true);

-- Only authenticated users can insert portfolio images
CREATE POLICY "Authenticated users can insert portfolio images"
  ON portfolio_images
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Only authenticated users can update portfolio images
CREATE POLICY "Authenticated users can update portfolio images"
  ON portfolio_images
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Only authenticated users can delete portfolio images
CREATE POLICY "Authenticated users can delete portfolio images"
  ON portfolio_images
  FOR DELETE
  TO authenticated
  USING (true);
