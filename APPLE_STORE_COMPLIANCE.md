# Apple Store Compliance Changes

## Overview
All Stripe subscription and pricing features have been hidden (not deleted) to comply with Apple Store review requirements. These features can be easily re-enabled later by renaming directories back to their original names.

## Changes Made

### 1. Disabled Directories (Renamed with `_` prefix)
- `app/pricing` → `app/_pricing_disabled`
- `app/success` → `app/_success_disabled`
- `app/api/create-checkout-session` → `app/api/_create-checkout-session_disabled`
- `app/api/webhooks` → `app/api/_webhooks_disabled`

### 2. Removed Navigation Links
- **Navbar** (`components/Navbar.tsx`): Pricing link commented out (line 53-56)
- **Footer** (`components/Footer.tsx`): Pricing link commented out (line 41)

### 3. Removed from Sitemap
- **Sitemap** (`app/sitemap.ts`): Pricing page entry commented out (line 14-19)

## What Remains Active
- All other pages (Home, About, FAQ, Support, Privacy, Terms)
- Contact form API endpoint
- App Store download functionality
- All marketing content and features

## To Re-enable Stripe Features
1. Rename directories back to original names:
   - `app/_pricing_disabled` → `app/pricing`
   - `app/_success_disabled` → `app/success`
   - `app/api/_create-checkout-session_disabled` → `app/api/create-checkout-session`
   - `app/api/_webhooks_disabled` → `app/api/webhooks`

2. Uncomment navigation links in:
   - `components/Navbar.tsx` (line 53-56)
   - `components/Footer.tsx` (line 41)

3. Uncomment sitemap entry in:
   - `app/sitemap.ts` (line 14-19)

4. Rebuild and redeploy

## Notes
- All Stripe configuration files remain in the repository (STRIPE_SETUP.md, etc.)
- Environment variables (.env.local) remain unchanged on the server
- No code was deleted, only disabled through directory renaming
