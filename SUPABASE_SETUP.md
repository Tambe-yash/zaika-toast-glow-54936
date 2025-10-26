# Supabase Setup Instructions

This app is ready to connect to Supabase. Follow these steps:

## 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Sign in or create an account
3. Click "New Project"
4. Fill in your project details and create it

## 2. Import the Database Schema

1. In your Supabase project, go to the SQL Editor
2. Copy the entire contents of `database-schema.sql` from this repository
3. Paste it into the SQL Editor and click "Run"
4. This will create all tables, functions, RLS policies, and sample data

## 3. Get Your Project Credentials

1. Go to Project Settings → API
2. Copy your:
   - **Project URL** (looks like `https://xxxxx.supabase.co`)
   - **anon/public key** (a long string starting with `eyJ...`)

## 4. Configure Environment Variables

Create a `.env` file in the root of your project (copy from `.env.example`):

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

## 5. Configure Authentication

1. In Supabase Dashboard, go to Authentication → URL Configuration
2. Add your site URL (e.g., `http://localhost:8080` for local development)
3. Add redirect URLs:
   - `http://localhost:8080/**` for local
   - Your production URL when deployed

## 6. Optional: Disable Email Confirmation (for testing)

1. Go to Authentication → Settings
2. Disable "Enable email confirmations"
3. This speeds up testing during development

## 7. Create an Admin User

After your first user signs up, you need to grant them admin role:

```sql
-- Run this in your Supabase SQL Editor
-- Replace 'user-id-here' with the actual user ID from auth.users table

INSERT INTO user_roles (user_id, role)
VALUES ('user-id-here', 'admin');
```

## 8. Restart Your Development Server

```bash
npm run dev
```

Your app should now be connected to Supabase!

## Features Enabled by Supabase

- ✅ User Authentication (Sign up/Login/Logout)
- ✅ User Profiles with RLS security
- ✅ Secure Admin Role Management
- ✅ Cart Management (synced across devices)
- ✅ Product Management
- ✅ Order Processing
- ✅ And more...

## Troubleshooting

### "Invalid API key" error
- Double-check your `.env` file has the correct URL and anon key
- Make sure the `.env` file is in the project root
- Restart your dev server after adding `.env`

### Authentication redirects to wrong URL
- Check Authentication → URL Configuration in Supabase
- Make sure your site URL and redirect URLs are correct

### RLS Policy errors
- Make sure you imported the entire `database-schema.sql`
- Check that RLS policies are enabled on tables
- Verify the `has_role` function was created

## Security Notes

- Never commit your `.env` file (it's already in `.gitignore`)
- The anon key is safe to use in client-side code
- RLS policies protect your data even with the anon key exposed
- Admin role is secured via the `user_roles` table and `has_role()` function
