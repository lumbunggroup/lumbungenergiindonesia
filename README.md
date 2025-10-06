# Lumbung Energi Indonesia - Landing Page

Corporate B2B landing page untuk PT Lumbung Energi Indonesia. Website ini dirancang untuk menampilkan proposisi nilai perusahaan, kredibilitas, dan mendorong konversi melalui dua CTA utama: **Hubungi Sales** dan **Unduh Company Profile**.

## Tech Stack

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **UI Components:** shadcn/ui
- **Database:** Supabase (PostgreSQL)
- **Forms:** React Hook Form + Zod validation
- **Email:** Resend (optional)
- **Analytics:** Vercel Analytics
- **Deployment:** Vercel

## Features

✅ **Hero Section** dengan dual CTA (Hubungi Sales + Unduh Profile)  
✅ **Services Section** - 4 layanan utama dengan icon dan deskripsi  
✅ **Why LEI Section** - 5 keunggulan perusahaan  
✅ **Credibility Section** - Client logos, sertifikasi, testimonials  
✅ **CTA Repeat Section** - Mendorong konversi dengan trust signals  
✅ **Contact Form** - Validated form dengan rate limiting  
✅ **WhatsApp Integration** - Quick contact via WhatsApp  
✅ **PDF Download** - Company profile download dengan tracking  
✅ **Email Notifications** - Auto-reply & sales notification (via Resend)  
✅ **Mobile Responsive** - Optimal untuk semua device sizes  
✅ **SEO Optimized** - Metadata, OG tags, robots.txt, sitemap  
✅ **Security Headers** - X-Frame-Options, CSP, dll  

## Quick Start

### 1. Clone & Install

```bash
cd lei-website
npm install
```

### 2. Environment Setup

```bash
cp .env.example .env.local
```

Fill in your Supabase credentials and other variables. See [SETUP.md](./SETUP.md) for detailed guide.

### 3. Run Development Server

```bash
npm run dev
```

Visit http://localhost:3000

## Project Structure

```
lei-website/
├── app/
│   ├── api/
│   │   ├── contact/          # Contact form API
│   │   └── download/         # PDF download API
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page
│   └── globals.css           # Global styles
├── components/
│   ├── layout/               # Layout components (Header, Footer, etc)
│   ├── sections/             # Page sections (Hero, Services, etc)
│   └── ui/                   # shadcn/ui components
├── lib/
│   ├── supabase.ts           # Supabase client
│   ├── validations/          # Zod schemas
│   └── email/                # Email templates
└── public/
    └── documents/            # PDF files (company profile)
```

## Database Schema

Tables:
- **leads** - Contact form submissions
- **clients** - Client logos for credibility section
- **testimonials** - Customer testimonials
- **services** - Service listings
- **downloads** - PDF download tracking

See database migrations in Supabase project.

## Deployment

Deploy to Vercel:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your Git repository to Vercel dashboard.

**Important:** Don't forget to add all environment variables in Vercel dashboard!

## Content Management (Future V1)

For MVP, content is hardcoded. For V1, implement:
- Simple CMS dashboard untuk manage clients, testimonials, services
- Supabase Auth untuk admin access
- CRUD operations untuk dynamic content

## Contributing

See [SETUP.md](./SETUP.md) for development setup guide.

## License

Proprietary - PT Lumbung Energi Indonesia
