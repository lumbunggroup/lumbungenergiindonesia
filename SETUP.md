# Lumbung Energi Indonesia - Setup Guide

## Prerequisites

- Node.js 18+ installed
- Supabase project already created
- (Optional) Resend account for email notifications
- (Optional) Cloudflare account for Turnstile (anti-spam)

## 1. Environment Variables Setup

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Fill in the values:

### Supabase (Required)
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### Resend (Optional - for email notifications)
```env
RESEND_API_KEY=re_xxxxxxxxxxxx
SALES_EMAIL=sales@lumbungenergi.id
```

### Cloudflare Turnstile (Optional - for anti-spam)
```env
CLOUDFLARE_TURNSTILE_SECRET_KEY=your_secret_key
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_site_key
```

### Site Configuration
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
WHATSAPP_NUMBER=628XXXXXXXXXX
```

## 2. Database Setup

The database schema has been applied via Supabase MCP. Verify tables exist:
- `leads`
- `clients`
- `testimonials`
- `services`
- `downloads`

You can check by running:
```sql
SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';
```

## 3. Install Dependencies

```bash
npm install
```

## 4. Add Company Profile PDF

Place your company profile PDF at:
```
public/documents/company-profile.pdf
```

This file will be served when users click "Unduh Company Profile".

## 5. Run Development Server

```bash
npm run dev
```

Visit http://localhost:3000

## 6. Build for Production

```bash
npm run build
npm start
```

## 7. Deploy to Vercel

1. Push code to GitHub/GitLab
2. Import project to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Vercel Environment Variables
Make sure to add all variables from `.env.local` to Vercel's environment settings.

## 8. Post-Deployment Checklist

- [ ] Test contact form submission
- [ ] Verify email notifications are sent (if Resend configured)
- [ ] Test PDF download
- [ ] Check WhatsApp link works
- [ ] Verify analytics tracking
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit (target >90 score)
- [ ] Update `NEXT_PUBLIC_SITE_URL` to production URL
- [ ] Add custom domain in Vercel
- [ ] Configure DNS records

## Optional: Seed Demo Data

You can seed demo data for testing:

```sql
-- Insert demo services
INSERT INTO services (title, summary, icon, "order") VALUES
('Pengadaan & Supply', 'Kami menyediakan peralatan & material industri yang sesuai spesifikasi proyek, dengan lead time terukur dan dukungan dokumentasi lengkap.', 'package', 1),
('Instalasi & Commissioning', 'Eksekusi lapangan oleh tim bersertifikat, memastikan pemasangan aman, pengujian menyeluruh, dan serah terima terdokumentasi.', 'wrench', 2),
('Perawatan & After-Sales', 'Layanan inspeksi berkala, perbaikan, serta ketersediaan suku cadang untuk memaksimalkan uptime aset Anda.', 'shield', 3),
('Konsultasi Teknis', 'Pendampingan pemilihan solusi, peninjauan spesifikasi, dan evaluasi kelayakan agar keputusan teknis lebih tepat.', 'lightbulb', 4);

-- Insert demo clients (placeholder)
INSERT INTO clients (name, logo_url, is_featured, "order") VALUES
('Client 1', null, true, 1),
('Client 2', null, true, 2),
('Client 3', null, true, 3),
('Client 4', null, false, 4);

-- Insert demo testimonials
INSERT INTO testimonials (author_name, role_company, quote, is_published, "order") VALUES
('Procurement Manager', 'Perusahaan Manufaktur', 'LEI tanggap dan rapi dalam dokumentasi. Proyek kami selesai sesuai jadwal.', true, 1),
('Engineering Manager', 'Perusahaan Infrastruktur', 'Koordinasi yang baik dan tim teknis yang berpengalaman. Sangat membantu proyek kami.', true, 2);
```

## Troubleshooting

### Issue: Email not sending
- Check if `RESEND_API_KEY` is set
- Verify domain is configured in Resend dashboard
- Check Supabase logs for errors

### Issue: Form submission fails
- Check browser console for errors
- Verify Supabase RLS policies allow anonymous inserts to `leads` table
- Check API route logs in Vercel

### Issue: PDF download not working
- Ensure `company-profile.pdf` exists in `public/documents/`
- Check file permissions
- Verify API route is accessible

## Support

For issues or questions, contact the development team.
