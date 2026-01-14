-- Migration: Create admin user
-- Run this AFTER creating a user in Authentication > Users
-- Replace 'YOUR-UUID-HERE' with the actual UUID from Authentication > Users
-- Replace 'admin@example.com' with your admin email

INSERT INTO public.profiles (id, email, full_name, role)
VALUES (
  '04f2b307-3247-4336-9a4b-3c432bdf9856',
  'soapboxgenadmin@gmail.com',
  'Admin',
  'admin'
)
ON CONFLICT (id) DO UPDATE SET role = 'admin';
