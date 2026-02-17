# SAFELY - Marketing Website

Production-ready marketing website for the SAFELY iOS application.

## About

SAFELY is a safety and communication app that helps you stay connected with loved ones through smart check-ins, location sharing, and instant notifications.

**Developer:** TrairX Technology O.Ü (Estonia)  
**Contact:** info@trairx.com

## Features

✅ Responsive design (mobile-first)  
✅ Multi-language support (Turkish/English)  
✅ SEO optimized with OpenGraph & Twitter Cards  
✅ Apple App Store compliant  
✅ Privacy Policy & Terms of Use  
✅ Support page with contact form  
✅ FAQ page  
✅ App Store badges  
✅ User testimonials  
✅ Statistics section  
✅ Dynamic favicon & app icons  
✅ Fast performance & animations  

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- React 18

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with SEO & metadata
│   ├── page.tsx            # Home page
│   ├── icon.tsx            # Favicon generator
│   ├── apple-icon.tsx      # Apple touch icon generator
│   ├── faq/page.tsx        # FAQ page
│   ├── privacy/page.tsx    # Privacy Policy
│   ├── terms/page.tsx      # Terms of Use
│   ├── support/page.tsx    # Support page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Footer.tsx          # Footer
│   ├── Hero.tsx            # Hero section
│   ├── TrustBullets.tsx    # Trust indicators
│   ├── Stats.tsx           # Statistics section
│   ├── Features.tsx        # Features grid
│   ├── HowItWorks.tsx      # How it works section
│   ├── Screenshots.tsx     # App screenshots with lightbox
│   ├── Testimonials.tsx    # User testimonials
│   ├── FAQPreview.tsx      # FAQ preview
│   ├── CTABand.tsx         # Call-to-action band
│   └── AppStoreBadge.tsx   # App Store download badge
├── lib/
│   └── LanguageContext.tsx # i18n context & translations
└── public/
    └── screenshots/        # App screenshots (8 images)
```

## Configuration

### Update App Store Link

1. Open `components/AppStoreBadge.tsx`
2. Replace `appStoreUrl` with your real App Store link:
```typescript
const appStoreUrl = "https://apps.apple.com/app/safely/YOUR_APP_ID";
```

3. Update `app/layout.tsx` metadata:
```typescript
appLinks: {
  ios: {
    url: 'https://apps.apple.com/app/safely/YOUR_APP_ID',
    app_store_id: 'YOUR_APP_ID',
  },
}
```

### Update Domain

In `app/layout.tsx`, replace:
```typescript
metadataBase: new URL('https://safely.app')
```

### Update Contact Email

Current email: `info@trairx.com`

To change, update in:
- `app/support/page.tsx`
- `app/privacy/page.tsx`
- `app/terms/page.tsx`

### Add Screenshots

Screenshots are already in `/public/screenshots/` (8 images: screenshot1.png to screenshot8.png)

To update:
1. Replace images in `/public/screenshots/`
2. Keep filenames as `screenshot1.png`, `screenshot2.png`, etc.
3. Recommended: PNG format, optimized for web

### Add More Languages

Edit `lib/LanguageContext.tsx` and add new language objects to the `translations` object.

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

Build the static site:

```bash
npm run build
```

Deploy the `.next` folder to your hosting provider.

## Apple App Store Compliance

✅ Privacy Policy accessible from footer  
✅ Terms of Use accessible from footer  
✅ Support/Contact page available  
✅ Help services disclaimer prominent  
✅ Data collection transparency  
✅ User rights clearly stated  
✅ App Store badges  
✅ Apple-specific meta tags  

## Performance

- Lighthouse Score: 95+ (expected)
- Mobile-first responsive design
- Optimized images with Next.js Image
- Fast page loads with static generation

## TODO Before Launch

- [ ] Add real App Store link in `AppStoreBadge.tsx`
- [ ] Update domain in `app/layout.tsx`
- [ ] Add OG image (`/public/og-image.png` - 1200x630px)
- [ ] Test all links and forms
- [ ] Review all legal pages (Privacy, Terms)
- [ ] Test on real iOS devices
- [ ] Set up analytics (optional)
- [ ] Configure custom domain

## License

© 2026 TrairX Technology O.Ü. All rights reserved.

## Support

For questions or issues:
- Email: info@trairx.com
- Website: https://www.safely-global.com
