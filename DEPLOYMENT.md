# Deployment Checklist

## Pre-Deployment

### 1. Content Review
- [ ] Replace hero image placeholder dengan foto proyek/tim industri
- [ ] Add company profile PDF ke `public/documents/company-profile.pdf`
- [ ] Replace client logo placeholders dengan logo actual
- [ ] Review dan update copy jika diperlukan
- [ ] Update contact information di Footer (email, phone, address)
- [ ] Set WhatsApp number di environment variables

### 2. Environment Variables
- [ ] `NEXT_PUBLIC_SUPABASE_URL` - dari Supabase project settings
- [ ] `NEXT_PUBLIC_SUPABASE_ANON_KEY` - dari Supabase project settings
- [ ] `SUPABASE_SERVICE_ROLE_KEY` - dari Supabase project settings
- [ ] `RESEND_API_KEY` - (optional) dari Resend dashboard
- [ ] `SALES_EMAIL` - email tim sales untuk notifikasi
- [ ] `NEXT_PUBLIC_SITE_URL` - production URL (e.g., https://lumbungenergi.id)
- [ ] `WHATSAPP_NUMBER` - WhatsApp number dengan format 628XXXXXXXXXX
- [ ] `CLOUDFLARE_TURNSTILE_SECRET_KEY` - (optional) dari Cloudflare
- [ ] `NEXT_PUBLIC_TURNSTILE_SITE_KEY` - (optional) dari Cloudflare

### 3. Database Check
- [ ] Verify all tables exist in Supabase
- [ ] Check RLS policies are enabled
- [ ] Test anonymous insert to `leads` table works
- [ ] (Optional) Seed demo data for clients and testimonials

### 4. Testing
- [ ] Test contact form submission locally
- [ ] Verify email notifications work (if Resend configured)
- [ ] Test PDF download
- [ ] Test WhatsApp button
- [ ] Check all navigation links work
- [ ] Test on mobile devices (responsive design)
- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)

### 5. SEO & Meta
- [ ] Verify meta tags in browser inspector
- [ ] Test OG image preview (use https://www.opengraph.xyz/)
- [ ] Check robots.txt accessible at `/robots.txt`
- [ ] Check sitemap accessible at `/sitemap.xml`

## Deployment to Vercel

### 1. Connect Repository
1. Push code to GitHub/GitLab/Bitbucket
2. Go to https://vercel.com/new
3. Import your repository
4. Select "lei-website" as root directory (if monorepo)

### 2. Configure Project
- **Framework Preset:** Next.js
- **Root Directory:** `lei-website` (or `.` if not in monorepo)
- **Build Command:** `npm run build`
- **Output Directory:** `.next`

### 3. Add Environment Variables
Copy all variables from `.env.local` to Vercel:
1. Go to Project Settings → Environment Variables
2. Add each variable (make sure to select Production, Preview, Development)
3. Important: Update `NEXT_PUBLIC_SITE_URL` to your production domain

### 4. Deploy
Click "Deploy" and wait for build to complete.

### 5. Custom Domain
1. Go to Project Settings → Domains
2. Add your custom domain (e.g., lumbungenergi.id, www.lumbungenergi.id)
3. Update DNS records as instructed by Vercel:
   - Type: A, Name: @, Value: 76.76.21.21
   - Type: CNAME, Name: www, Value: cname.vercel-dns.com

## Post-Deployment

### 1. Verify Production
- [ ] Visit production URL
- [ ] Test contact form submission
- [ ] Check email notifications arrive
- [ ] Test PDF download
- [ ] Test WhatsApp integration
- [ ] Verify analytics tracking (check Vercel Analytics dashboard)

### 2. Performance Audit
Run Lighthouse in Chrome DevTools:
- [ ] Performance score > 90
- [ ] Accessibility score > 90
- [ ] Best Practices score > 90
- [ ] SEO score > 90

### 3. Security
- [ ] Check security headers with https://securityheaders.com/
- [ ] Verify SSL certificate is active
- [ ] Test HTTPS redirect (http:// should redirect to https://)

### 4. Monitoring
- [ ] Set up Vercel alerts for deployment failures
- [ ] Monitor Supabase usage dashboard
- [ ] Check email deliverability (Resend dashboard)
- [ ] Set up uptime monitoring (e.g., UptimeRobot)

### 5. Documentation
- [ ] Update team with production URL
- [ ] Share admin credentials for Supabase
- [ ] Document deployment process for future updates

## Rollback Plan

If issues occur in production:

1. **Instant Rollback:**
   - Go to Vercel Deployments tab
   - Find previous working deployment
   - Click "..." → "Promote to Production"

2. **Fix & Redeploy:**
   - Fix issues in development
   - Test thoroughly
   - Push to main branch
   - Automatic deployment via Vercel

## Maintenance

### Regular Tasks
- Monitor lead submissions in Supabase
- Check email deliverability rates
- Review analytics weekly
- Update content as needed
- Keep dependencies updated (`npm update`)

### Monthly
- Run Lighthouse audit
- Check for broken links
- Review security headers
- Update SSL certificates (auto-renewed by Vercel)

## Troubleshooting

### Build Fails
1. Check build logs in Vercel
2. Verify all environment variables are set
3. Test build locally: `npm run build`
4. Check for TypeScript errors: `npm run lint`

### Form Not Working
1. Check Supabase connection
2. Verify RLS policies
3. Check browser console for errors
4. Test API route directly: `/api/contact`

### Emails Not Sending
1. Verify Resend API key
2. Check domain verification in Resend
3. Review Vercel function logs
4. Test with different email addresses

### Slow Performance
1. Run Lighthouse audit
2. Check image optimization
3. Review bundle size
4. Consider adding CDN for assets

## Support Contacts

- **Vercel Support:** https://vercel.com/support
- **Supabase Support:** https://supabase.com/support
- **Resend Support:** https://resend.com/support
- **Internal Team:** [Add team contact info]
