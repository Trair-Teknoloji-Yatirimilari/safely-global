# Safely.web Production Deployment

## Commit: 7d124

## Changes
- Enhanced support page with professional design
- Added dropdown language selector with flags (EN/TR)
- Changed default language to English
- Contact form with Resend email integration
- Fixed hydration issues

## Deployment Steps

### 1. Connect to Server
```bash
ssh root@your-server-ip
```

### 2. Navigate to Project
```bash
cd /var/www/safely-global
```

### 3. Backup Current Version (Optional but Recommended)
```bash
tar -czf backup-$(date +%Y%m%d-%H%M%S).tar.gz .next app components lib public
```

### 4. Pull Latest Changes
```bash
git pull origin main
```

### 5. Install Dependencies
```bash
npm install
```

### 6. Build Production
```bash
npm run build
```

### 7. Restart PM2 Process
```bash
pm2 restart safely-global
```

### 8. Check Status
```bash
pm2 status
pm2 logs safely-global --lines 50
```

### 9. Verify Website
Visit: https://safely.trairx.com

## Rollback (if needed)
```bash
cd /var/www/safely-global
git reset --hard HEAD~1
npm install
npm run build
pm2 restart safely-global
```

## Important Notes
- ⚠️ This only affects `/var/www/safely-global`
- ⚠️ Other projects (lingochat, checkly-website, etc.) are NOT affected
- ⚠️ Make sure `.env.local` file exists with Resend API key
- ⚠️ PM2 process name: `safely-global`

## Environment Variables Required
```
RESEND_API_KEY=re_VQXyoACG_8csVS8GTuimDpZZ4vZzNNtja
```
