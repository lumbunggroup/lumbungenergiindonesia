# Technical Overview: LEI Website

## **Core Components**

### **1. Application Architecture**
- **Framework**: Next.js 15.5.4 (App Router) with React 19.1.0
- **Build System**: Turbopack-enabled development and production builds
- **Language**: TypeScript 5 with strict mode enabled
- **Styling**: Tailwind CSS 4 with design token system (CSS variables in OKLCH color space)

### **2. Component Hierarchy**

**Layout Components** (`components/layout/`)
- `Container`: Responsive wrapper (max-w-7xl with responsive padding)
- `Section`: Semantic section wrapper with consistent vertical spacing (py-16 lg:py-24)
- `Footer`: Full-featured footer with contact info, navigation links, and social media
- `HeroHeader`: Sticky navigation with scroll-based backdrop blur and mobile menu

**Feature Components** (`components/sections/`)
- **Hero Section**: Full-screen hero with video background and CTA buttons
- **Divisions Section**: Business unit showcase with card-based layout
- **Features Section**: Service offerings with icon-based presentation
- **Credibility Section**: Trust indicators and social proof
- **Contact Form Section**: Lead capture with validation and Supabase integration

**UI Primitives** (`components/ui/`)
- **shadcn/ui components**: Button, Card, Dialog, Form, Input, Select, Textarea, Badge, Label
- **Custom components**: InfiniteSlider, Marquee, TextAnimate, ProgressiveBlur
- All components use `class-variance-authority` for variant management

### **3. Design System**

**Semantic Color Tokens**
```css
--primary: oklch(0.3148 0.1207 258.7745)     // Brand color
--muted-foreground: oklch(0.4400 0 0)         // Subtle text
--background: oklch(0.9900 0 0)               // Main bg
--card: oklch(1 0 0)                          // Card bg
```

**Typography System**
- H1-H6 automatically styled via globals.css
- Responsive sizing: `text-4xl lg:text-5xl xl:text-6xl` (h1)
- Font: Geist (Google Fonts) with fallback stack
- All text in Bahasa Indonesia

## **Component Interactions**

### **1. Data Flow**

**Form Submission Pipeline**
```
Client Form Component
  ↓ (react-hook-form + zod validation)
API Route (/api/contact)
  ↓ (rate limiting check)
  ├─→ Supabase (lead storage)
  └─→ Resend (email notifications)
  ↓
Response to Client
  ↓
Toast Notification (sonner)
```

**State Management**
- **Local State**: React hooks (useState, useEffect)
- **Form State**: react-hook-form with zodResolver
- **Scroll State**: Framer Motion useScroll hook
- No global state management (Redux/Zustand) - intentionally simple

### **2. API Routes** (`app/api/`)

**POST /api/contact**
- Rate limiting: 3 requests per hour per IP (in-memory)
- Validation: Zod schema (contactFormSchema)
- Data persistence: Supabase `leads` table
- Email: Dual send (sales notification + auto-reply via Resend)
- UTM tracking: Captures campaign parameters from URL
- Error handling: Graceful degradation (continues if email/DB fails)

**GET /api/download/company-profile**
- Serves company profile PDF
- CDN URL redirect (Vercel Blob Storage)

### **3. External Services**

**Supabase Integration**
- Client: `createClient()` with anon key (public operations)
- Admin: `supabaseAdmin` with service role key (backend operations)
- Tables: `leads` with RLS policies
- Environment: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`

**Resend Email Service**
- API key: `RESEND_API_KEY`
- Templates: HTML generation via `@/lib/email/templates`
- Sender: `noreply@lumbungenergi.id`
- Recipients: Sales team + form submitter

**Asset Storage**
- Vercel Blob Storage for large assets (logo, videos, PDFs)
- Unsplash for stock imagery with automatic optimization
- Next.js Image component for all images (automatic optimization)

## **Deployment Architecture**

### **1. Build Process**

**Development**
```bash
npm run dev --turbopack    # Hot reload with Turbopack
```

**Production**
```bash
npm run build --turbopack  # Optimized static/server build
npm run start              # Production server (Node.js)
```

**Build Output**
- Static pages: Pre-rendered at build time
- Server components: Rendered on-demand
- API routes: Serverless functions
- Assets: Optimized and hashed

### **2. Environment Configuration**

**Required Variables**
```env
NEXT_PUBLIC_SUPABASE_URL        # Supabase project URL
NEXT_PUBLIC_SUPABASE_ANON_KEY   # Public API key
SUPABASE_SERVICE_ROLE_KEY       # Admin API key (server-only)
RESEND_API_KEY                  # Email service
SALES_EMAIL                     # Recipient for leads
NEXT_PUBLIC_SITE_URL            # Base URL for metadata
```

**Optional Variables**
```env
CLOUDFLARE_TURNSTILE_SECRET_KEY # Anti-spam (not yet implemented)
NEXT_PUBLIC_TURNSTILE_SITE_KEY  # Anti-spam public key
WHATSAPP_NUMBER                 # Contact number
```

### **3. Deployment Targets**

**Primary: Vercel**
- Auto-deploy from Git (main branch)
- Edge network for global CDN
- Serverless functions for API routes
- Environment variables via dashboard
- Built-in analytics (`@vercel/analytics`)

**Infrastructure Requirements**
- Node.js runtime (18+)
- PostgreSQL database (via Supabase)
- Email service (via Resend)
- Blob storage (via Vercel Blob)

### **4. Security Headers**

**Next.js Config** (`next.config.ts`)
```typescript
X-Frame-Options: DENY                           // Prevent clickjacking
X-Content-Type-Options: nosniff                 // Prevent MIME sniffing
Referrer-Policy: strict-origin-when-cross-origin // Privacy
Permissions-Policy: camera=(), microphone=()    // Disable features
```

## **Runtime Behavior**

### **1. Application Initialization**

**Root Layout** (`app/layout.tsx`)
1. HTML lang set to "id" (Indonesian)
2. Geist font loaded with `font-sans` variable
3. Global styles applied (`globals.css`)
4. Toaster component mounted (for notifications)
5. Vercel Analytics initialized

**Page Rendering** (`app/page.tsx`)
```
┌─────────────────────┐
│  <HeroHeader />     │ ← Sticky navigation
├─────────────────────┤
│  <HeroSection />    │ ← Video hero with CTAs
│  <DivisionsSection/>│ ← Business divisions
│  <Features05 />     │ ← Service offerings
│  <CredibilitySection/>│ ← Social proof
│  <ContactFormLEI />│ ← Lead capture form
└─────────────────────┘
│  <Footer />         │ ← Footer with links
```

### **2. Request Handling**

**Client-Side Rendering (CSR)**
- Header scroll behavior (Framer Motion)
- Form interactions (react-hook-form)
- Navigation menu toggle
- Modal/dialog interactions

**Server-Side Rendering (SSR)**
- None - all pages are static or client-rendered

**API Request Flow**
```
1. Client submits form
   ↓
2. Client-side validation (Zod)
   ↓
3. POST /api/contact
   ↓
4. Rate limit check (IP-based)
   ↓
5. Server-side validation (Zod)
   ↓
6. Parallel operations:
   - Insert to Supabase
   - Send emails via Resend
   ↓
7. Return JSON response
   ↓
8. Client shows toast notification
```

### **3. Business Workflows**

**Lead Capture Workflow**
1. User fills contact form
2. Client validation (real-time with react-hook-form)
3. Submit button triggers API call
4. Server stores lead in Supabase with UTM data
5. Sales team receives email notification
6. User receives auto-reply email
7. Success toast shown to user
8. Form resets for new submission

**Navigation Workflow**
1. User scrolls → Header becomes translucent with backdrop blur
2. User clicks nav link → Smooth scroll to section (anchor links)
3. Mobile: Hamburger menu toggles full-screen overlay
4. Company Profile button → Opens PDF in new tab (CDN URL)

### **4. Error Handling**

**Form Validation Errors**
- Client-side: Inline error messages (react-hook-form)
- Server-side: 400 response with Indonesian error message
- Toast notification for user feedback

**API Errors**
- Rate limit: 429 response ("Terlalu banyak permintaan")
- Validation: 400 response with field-specific errors
- Server error: 500 response with generic fallback
- Database failures: Log error but continue (graceful degradation)
- Email failures: Log error but return success (non-blocking)

**Fallback Behavior**
- Images: Next.js automatic fallback
- Forms: WhatsApp fallback mentioned in error messages
- Emails: Continue if Resend not configured

### **5. Performance Optimizations**

**Image Optimization**
- Next.js Image component with automatic WebP conversion
- Lazy loading for below-the-fold images
- Priority loading for hero images
- CDN delivery via Vercel Edge Network

**Code Splitting**
- Automatic route-based splitting
- Dynamic imports for heavy components
- Tree-shaking for unused code

**Caching Strategy**
- Static assets: Immutable with content hashing
- API routes: No caching (dynamic)
- Images: Vercel CDN caching (1 year)

---

## **Key Design Patterns**

1. **Composition Pattern**: Layout components (Section, Container) wrap content
2. **Compound Components**: shadcn/ui components (Card + CardHeader + CardContent)
3. **Controlled Components**: react-hook-form manages all form state
4. **Server/Client Boundary**: Clear separation with 'use client' directives
5. **Graceful Degradation**: Continue on non-critical failures (email, DB)
6. **Type Safety**: Zod schemas generate TypeScript types
7. **Semantic HTML**: Proper heading hierarchy (h1 → h4) with semantic tags

---

## **Technology Stack Summary**

| Category | Technology | Purpose |
|----------|-----------|---------|
| **Framework** | Next.js 15.5.4 | React framework with App Router |
| **UI Library** | React 19.1.0 | Component-based UI |
| **Language** | TypeScript 5 | Type-safe development |
| **Styling** | Tailwind CSS 4 | Utility-first CSS framework |
| **Component Library** | shadcn/ui | Pre-built accessible components |
| **Form Management** | react-hook-form + Zod | Form state and validation |
| **Animation** | Framer Motion | Scroll animations and transitions |
| **Database** | Supabase (PostgreSQL) | Lead storage with RLS |
| **Email** | Resend | Transactional email service |
| **Analytics** | Vercel Analytics | User behavior tracking |
| **Deployment** | Vercel | Serverless hosting with CDN |
| **Asset Storage** | Vercel Blob | CDN for large static assets |
| **Icons** | Lucide React | Icon library |

---

## **File Structure Overview**

```
lei-website/
├── app/
│   ├── api/
│   │   ├── contact/route.ts          # Contact form API endpoint
│   │   └── download/company-profile/ # PDF download endpoint
│   ├── kebijakan-privasi/            # Privacy policy page
│   ├── layout.tsx                    # Root layout with metadata
│   ├── page.tsx                      # Home page
│   └── globals.css                   # Global styles + design tokens
├── components/
│   ├── ui/                           # shadcn/ui primitives
│   ├── layout/                       # Container, Section, Footer
│   ├── sections/                     # Page sections (Hero, Divisions, etc.)
│   ├── contact-form-lei/             # Contact form component
│   ├── header.tsx                    # HeroHeader navigation
│   ├── hero-section.tsx              # Hero with video background
│   └── logo.tsx                      # Company logo component
├── lib/
│   ├── validations/                  # Zod schemas
│   ├── email/                        # Email templates
│   ├── supabase.ts                   # Supabase client initialization
│   └── utils.ts                      # Utility functions (cn)
├── docs/                             # Documentation
├── public/                           # Static assets (small files only)
├── .env.example                      # Environment variable template
├── next.config.ts                    # Next.js configuration
├── tailwind.config.ts                # Tailwind configuration
├── components.json                   # shadcn/ui configuration
└── tsconfig.json                     # TypeScript configuration
```
