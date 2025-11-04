# 🚀 Vercel Deployment Guide - Turso DB

## ⚠️ URGENT: Add Environment Variables

**The deployment is building now!** You need to add these environment variables to Vercel:

---

## Step 1: Go to Vercel Dashboard

1. Open: https://vercel.com/dashboard
2. Select your project: **lei-website** (or lumbungenergiindonesia)
3. Go to: **Settings** → **Environment Variables**

---

## Step 2: Add Turso Environment Variables

Add these **2 new variables**:

### 1. TURSO_DATABASE_URL
```
libsql://lei-website-db-lumbunggroup.aws-ap-northeast-1.turso.io
```

**Settings:**
- Environment: ✅ Production, ✅ Preview, ✅ Development
- Click **Save**

### 2. TURSO_AUTH_TOKEN
```
eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3NjIyMjQ0OTMsImlkIjoiYjJhODJkZmItZGZhOS00YmRjLWE3NTctMGE1ZmExOTg0MGViIiwicmlkIjoiOTBhNWZiYTItMTZiZC00YThkLWEyNTUtNWJhZGRiMjg0NzA0In0.xAjGE3AAx5KvRqTS5_1we-5RkdtOCM-q7BQhHgE5GaEnTsDUgCWujTrX1YvAumhKgQvQ-2n1zis3KPmqI1hNCg
```

**Settings:**
- Environment: ✅ Production, ✅ Preview, ✅ Development
- **Mark as Sensitive** (hide value)
- Click **Save**

---

## Step 3: Redeploy (if needed)

If the current deployment finishes before you add the variables:

1. Go to **Deployments** tab
2. Find the latest deployment
3. Click **⋮** (three dots) → **Redeploy**
4. Select **Use existing Build Cache**
5. Click **Redeploy**

---

## Step 4: Verify Deployment

Once deployed:

### Check Build Logs
1. Go to **Deployments** → Latest deployment
2. Check **Build Logs** - should show no errors
3. Look for: `✓ Compiled successfully`

### Test Production
Visit your production URL and test:

**Test Contact Form:**
```bash
curl -X POST https://your-domain.vercel.app/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Production Test",
    "email": "test@example.com",
    "company": "Test Corp",
    "message": "Testing production deployment",
    "consent": true
  }'
```

Expected response:
```json
{
  "message": "Terima kasih! Permintaan Anda telah diterima."
}
```

**Test Gallery API:**
```bash
curl https://your-domain.vercel.app/api/admin/gallery
```

Should return:
```json
{
  "data": []
}
```

### Verify in Turso Dashboard
1. Go to: https://turso.tech/app
2. Select: `lei-website-db-lumbunggroup`
3. Check **Metrics** for incoming requests
4. Verify data in tables

---

## Environment Variables Checklist

Make sure ALL these variables are set in Vercel:

- [x] `TURSO_DATABASE_URL` ← **NEW (just added)**
- [x] `TURSO_AUTH_TOKEN` ← **NEW (just added)**
- [ ] `RESEND_API_KEY` ← (existing)
- [ ] `SALES_EMAIL` ← (existing)
- [ ] `CLOUDFLARE_TURNSTILE_SECRET_KEY` ← (existing)
- [ ] `NEXT_PUBLIC_TURNSTILE_SITE_KEY` ← (existing)
- [ ] `NEXT_PUBLIC_SITE_URL` ← (existing)
- [ ] `WHATSAPP_NUMBER` ← (existing)
- [ ] `BLOB_READ_WRITE_TOKEN` ← (existing)

**Note:** You can remove these (no longer used):
- ❌ `NEXT_PUBLIC_SUPABASE_URL`
- ❌ `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- ❌ `SUPABASE_SERVICE_ROLE_KEY`

---

## Troubleshooting

### Build Fails
**Error:** `Cannot find module '@libsql/client'`
**Solution:** Dependencies are installed - just redeploy

**Error:** `process.env.TURSO_DATABASE_URL is undefined`
**Solution:** Add environment variables in Vercel dashboard, then redeploy

### Runtime Errors
**Error:** `LibsqlError: URL_INVALID`
**Solution:** Check `TURSO_DATABASE_URL` is correct in Vercel

**Error:** `Unauthorized`
**Solution:** Check `TURSO_AUTH_TOKEN` is correct in Vercel

### API Not Working
1. Check deployment logs for errors
2. Test locally first: `npm run dev`
3. Verify Turso dashboard shows requests
4. Check browser console for errors

---

## Quick Links

- **Vercel Dashboard:** https://vercel.com/dashboard
- **Turso Dashboard:** https://turso.tech/app
- **Production URL:** (check Vercel dashboard)
- **Deployment Status:** https://vercel.com/dashboard/deployments

---

## Expected Timeline

1. **Push to GitHub:** ✅ Done
2. **Vercel Build:** ~3-5 minutes
3. **Add Env Variables:** ⚠️ Do this NOW!
4. **Redeploy (if needed):** ~2-3 minutes
5. **Test Production:** ~2 minutes
6. **Done!** 🎉

---

## Success Indicators

✅ Build completes without errors  
✅ Contact form works on production  
✅ Gallery API returns data  
✅ Turso dashboard shows requests  
✅ No console errors on production  

---

## Next Steps After Deployment

1. **Test all forms** on production website
2. **Monitor Turso dashboard** for usage
3. **Check error logs** in Vercel for any issues
4. **Update DNS** if needed
5. **Celebrate!** 🎉

---

**Current Status:** 🚀 Deploying...

Go to Vercel dashboard NOW to add the environment variables!
