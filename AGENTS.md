# ShadCN MCP Usage Rule:
When asked to use shadcn components, use the MCP server.

Planning Rule:
-When asked to plan using anything related to shadcn:

-Use the MCP server during planning

-Apply components wherever components are applicable

-Use whole blocks where possible (e.g., login page, calendar)

Implementation Rule
When implementing:

-First call the demo tool to see how it is used

-Then implement it so that it is implemented correctly

---

# Design System & Consistency Rules

## 1. Semantic Color Tokens (MANDATORY)
**ALWAYS use semantic color tokens from the design system. NEVER use hardcoded colors.**

### ❌ FORBIDDEN (Hardcoded Colors):
```tsx
// DON'T use specific color values
bg-blue-500, text-red-600, bg-gray-100
#ffffff, #000000, rgb(255, 255, 255)
text-white, bg-black, border-gray-200
```

### ✅ REQUIRED (Semantic Tokens):
```tsx
// Background & Foreground
bg-background       // Main background color
text-foreground     // Main text color
bg-card            // Card background
text-card-foreground // Card text

// Primary Colors
bg-primary         // Primary brand color
text-primary       // Primary text
bg-primary-foreground // Text on primary bg
hover:bg-primary/90 // Hover states with opacity

// Secondary Colors
bg-secondary       // Secondary brand color
text-secondary     // Secondary text
bg-secondary-foreground

// Muted (Subtle backgrounds & text)
bg-muted          // Subtle background
text-muted-foreground // Subtle text (descriptions, labels)

// Accent (Highlights)
bg-accent         // Accent background
text-accent-foreground // Accent text

// Destructive (Errors, Warnings)
bg-destructive    // Error/warning background
text-destructive  // Error text
bg-destructive-foreground

// UI Elements
border-border     // All borders
bg-input          // Input backgrounds
ring-ring         // Focus rings
```

### Color Usage Guidelines:
1. **Backgrounds**: Use `bg-background`, `bg-card`, `bg-muted`, `bg-primary`
2. **Text**: Use `text-foreground`, `text-muted-foreground`, `text-primary`
3. **Borders**: Use `border-border` (NEVER `border-gray-300`)
4. **Hover States**: Use opacity modifiers like `hover:bg-primary/90`
5. **Gradients**: Use semantic tokens: `from-primary to-primary/60`

---

## 2. Typography Standards (MANDATORY)
**ALWAYS use semantic HTML tags for typography. Let globals.css handle the styling.**

### ✅ CORRECT Way:
```tsx
// Use semantic HTML tags without custom classes
<h1>Main Page Title</h1>           // Auto: text-4xl lg:text-5xl xl:text-6xl font-semibold
<h2>Section Title</h2>              // Auto: text-3xl lg:text-4xl xl:text-5xl font-semibold
<h3>Subsection Title</h3>           // Auto: text-2xl lg:text-3xl font-semibold
<h4>Card Title</h4>                 // Auto: text-xl lg:text-2xl font-semibold
<p>Body text automatically styled</p> // Auto: text-base lg:text-lg text-muted-foreground
```

### ❌ WRONG Way (Don't Override):
```tsx
// DON'T manually specify text sizes and weights
<h1 className="text-6xl font-bold">        // ❌ Wrong
<h2 className="text-4xl font-semibold">    // ❌ Wrong
<h3 className="text-2xl font-bold">        // ❌ Wrong
<p className="text-lg text-gray-600">      // ❌ Wrong
```

### Typography Hierarchy:
- `<h1>`: Hero/Page title (only ONE per page)
- `<h2>`: Section titles
- `<h3>`: Subsection titles  
- `<h4>`: Card/Component titles
- `<p>`: Body text (paragraphs, descriptions)

### When to Override:
Only override when you need:
- Different text size: `<p className="text-sm">` or `<p className="text-base">`
- Specific spacing: `<h2 className="mb-6">`
- Different color context: Keep semantic tokens

---

## 3. Button Styling (MANDATORY)
**ALWAYS use the Button component from shadcn/ui with variants.**

### ✅ CORRECT:
```tsx
import { Button } from "@/components/ui/button"

// Primary button
<Button>Click Me</Button>
<Button variant="default">Default</Button>

// Secondary button
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>

// Destructive button
<Button variant="destructive">Delete</Button>

// Ghost/Link buttons
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button size="icon">Icon</Button>
```

### ❌ WRONG:
```tsx
// DON'T create custom button styles
<button className="bg-blue-500 text-white px-4 py-2 rounded">  // ❌
<div className="bg-primary text-white cursor-pointer">        // ❌
```

---

## 4. Component Styling Rules

### Cards:
```tsx
// ✅ CORRECT
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
</Card>

// Colors automatically from design system:
// bg-card, text-card-foreground, border-border
```

### Inputs:
```tsx
// ✅ CORRECT
<Input placeholder="Enter text" />
<Textarea placeholder="Enter message" />

// Automatically uses:
// bg-input, text-foreground, border-border, ring-ring
```

### Badges:
```tsx
// ✅ CORRECT
<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Error</Badge>
<Badge variant="outline">Outline</Badge>
```

---

## 5. Spacing & Layout

### Container & Padding:
```tsx
// Use consistent spacing
py-16 lg:py-24    // Section padding
px-4 lg:px-8      // Container padding
gap-6 lg:gap-8    // Grid/flex gaps
space-y-4         // Vertical spacing
```

### Border Radius:
```tsx
// Use design system radius tokens
rounded-sm    // Small radius
rounded-md    // Medium radius  
rounded-lg    // Large radius (default)
rounded-xl    // Extra large
rounded-2xl   // 2x large
```

---

## 6. Shadow Usage
```tsx
// Use semantic shadow tokens
shadow-sm     // Small shadow
shadow        // Default shadow
shadow-md     // Medium shadow
shadow-lg     // Large shadow
shadow-xl     // Extra large shadow
```

---

## 7. Quick Reference: Common Patterns

### Section Header:
```tsx
<div className="text-center mb-12">
  <Badge variant="outline" className="mb-4">
    Section Label
  </Badge>
  <h2>Section Title</h2>
  <p className="max-w-3xl mx-auto">
    Section description text
  </p>
</div>
```

### Card with Hover:
```tsx
<Card className="hover:shadow-lg transition-all hover:-translate-y-1">
  <CardHeader>
    <h4>Card Title</h4>
    <p className="text-base">Description</p>
  </CardHeader>
</Card>
```

### Icon Container:
```tsx
<div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
  <Icon className="h-6 w-6 text-primary" />
</div>
```

---

## 8. Validation Checklist

Before submitting code, verify:
- [ ] No hardcoded colors (bg-blue-500, #ffffff, etc.)
- [ ] All colors use semantic tokens (bg-primary, text-foreground, etc.)
- [ ] Typography uses semantic HTML (h1, h2, h3, h4, p)
- [ ] No manual text size classes on headings
- [ ] Buttons use Button component with variants
- [ ] Consistent spacing (py-16 lg:py-24 for sections)
- [ ] Border radius uses design tokens (rounded-lg, etc.)
- [ ] Shadows use design tokens (shadow-lg, etc.)

---

## 9. Theme Support

All semantic tokens automatically support dark mode:
```tsx
// This works in both light and dark mode
<div className="bg-background text-foreground">
  <h2>Title</h2>
  <p>Automatically adjusts to theme</p>
  <Button variant="primary">Themed Button</Button>
</div>
```

**NEVER use:**
- `dark:` prefix for colors (semantic tokens handle this)
- Manual color switching logic
- Hardcoded color values

---

---

## 10. Layout Structure (MANDATORY)

### Section Pattern:
**Every major section MUST follow this structure:**

```tsx
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"

<Section id="section-name" className="relative overflow-hidden">
  {/* Background Gradients */}
  <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background -z-10" />
  <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
  
  <Container>
    {/* Section Header */}
    <div className="text-center mb-12">
      <div>
        <Badge variant="outline" className="mb-4">Section Label</Badge>
      </div>
      <h2>Section Title</h2>
      <p className="mt-4 max-w-3xl mx-auto">
        Section description
      </p>
    </div>
    
    {/* Section Content */}
    <div className="mt-10 w-full mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
      {/* Content here */}
    </div>
  </Container>
</Section>
```

### Page Structure:
```tsx
export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <Section1 />
        <Section2 />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
```

---

## 11. Image Handling (MANDATORY)

**ALWAYS use Next.js Image component for images.**

```tsx
import Image from "next/image"

// ✅ CORRECT: Fill container
<div className="relative h-40 rounded-xl overflow-hidden">
  <Image
    src="https://images.unsplash.com/..."
    alt="Descriptive alt text"
    fill
    className="object-cover"
  />
</div>

// ✅ CORRECT: Fixed dimensions
<Image
  src="/logo.png"
  alt="Company logo"
  width={120}
  height={40}
  priority // For hero/above-fold images
/>

// ✅ CORRECT: Responsive hero image
<div className="w-full aspect-video lg:aspect-auto lg:h-screen rounded-xl overflow-hidden relative">
  <Image src="..." alt="..." fill className="object-cover" priority />
</div>
```

### Image Requirements:
- Always include descriptive `alt` text
- Use `fill` for responsive images in containers
- Use `priority` for above-the-fold images
- Use `className="object-cover"` for proper scaling
- Wrap in `relative` container when using `fill`

---

## 12. Responsive Design Patterns

### Grid Layouts:
```tsx
// ✅ CORRECT: Responsive grid
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
  {items.map(...)}
</div>

// ✅ CORRECT: Two-column layout
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
  <div>Left Content</div>
  <div>Right Content</div>
</div>
```

### Text Sizing:
```tsx
// ✅ CORRECT: Responsive text (handled by globals.css)
<h1>Auto-responsive heading</h1>

// When manual sizing needed:
<p className="text-base lg:text-lg">Responsive paragraph</p>
```

### Spacing:
```tsx
// ✅ CORRECT: Responsive spacing
py-16 lg:py-24      // Section padding
px-4 lg:px-8        // Horizontal padding
gap-6 lg:gap-8      // Grid gaps
space-y-4 lg:space-y-6 // Vertical spacing
```

---

## 13. Card Symmetry (MANDATORY)

**All cards in a grid MUST have equal height.**

```tsx
// ✅ CORRECT: Symmetric cards
<div className="h-full"> // Parent takes full grid height
  <Card className="flex flex-col h-full">
    <CardHeader className="flex-1">
      {/* Icon and title */}
      <h4>Card Title</h4>
      <p className="min-h-[4.5rem]">
        {description}
      </p>
    </CardHeader>
    <CardContent className="mt-auto">
      {/* Bottom content */}
    </CardContent>
  </Card>
</div>
```

### Symmetry Rules:
1. Add `h-full` to both wrapper div and Card
2. Use `flex flex-col` on Card
3. Add `flex-1` to CardHeader for flexible content area
4. Use `min-h-[...]` on text to ensure minimum height
5. Add `mt-auto` to bottom sections to push them down

---

## 14. Language & Content Standards

**All content MUST be in Bahasa Indonesia (Indonesian language).**

### Form Labels (Indonesian):
```tsx
// ✅ CORRECT
<label>Nama Lengkap *</label>
<label>Email Kerja *</label>
<label>Perusahaan *</label>
<label>Nomor Telepon</label>
<label>Pesan *</label>

// CTA Buttons
<Button>Hubungi Sales</Button>
<Button>Unduh Company Profile</Button>
<Button>Kirim Permintaan</Button>
```

### Section Headers (Indonesian):
```tsx
<h2>Solusi One-Stop untuk Industri Anda</h2>
<h2>Dipercaya oleh 500+ Perusahaan</h2>
<h2>Siap Membawa Proyek Anda ke Tahap Berikutnya?</h2>
```

---

## 15. Component Organization

### File Structure:
```
components/
├── ui/              # shadcn components
├── layout/          # Layout components
│   ├── header.tsx
│   ├── footer.tsx
│   ├── container.tsx
│   └── section.tsx
├── sections/        # Page sections
│   ├── divisions-section.tsx
│   ├── credibility-section.tsx
│   └── ...
└── [feature]/       # Feature-specific
    └── [feature].tsx
```

### Component Pattern:
```tsx
"use client"  // Only if using hooks/client features

import { /* dependencies */ }

// Component
export function ComponentName() {
  return (
    <Section id="component-id">
      {/* Component content */}
    </Section>
  )
}

// Or default export for pages
export default ComponentName
```

---

## 16. Copywriting Guidelines (MANDATORY)

**All website copy MUST follow these content standards for consistency and clarity.**

### Tone of Voice:
1. **Professional**: Kredibel dan terpercaya untuk industri B2B
2. **Confident**: Menekankan expertise dan track record
3. **Solution-Oriented**: Fokus pada value proposition dan problem-solving
4. **Technical**: Menggunakan terminologi industri yang relevan
5. **Concise**: Singkat, padat, dan mudah dipahami

### Key Messaging Pillars:

#### 1. Integrated Solutions
```tsx
// ✅ GOOD: Clear value proposition
"Solusi One-Stop untuk Kebutuhan Industri"
"LEI menyediakan rantai layanan end-to-end"

// ❌ AVOID: Vague or generic
"Solusi terbaik untuk semua kebutuhan"
"Kami menyediakan berbagai layanan"
```

#### 2. Quality & Compliance
```tsx
// ✅ GOOD: Specific and trustworthy
"Pasokan batubara dan biomassa yang konsisten dengan dokumentasi lengkap"
"Fokus pada kualitas pasokan, kepatuhan, dan ketepatan pengiriman"

// ❌ AVOID: Overpromising
"Kualitas terbaik di dunia"
"100% sempurna tanpa cacat"
```

#### 3. Reliability & Expertise
```tsx
// ✅ GOOD: Concrete evidence
"Dipercaya oleh 500+ Perusahaan"
"Tim bersertifikat dengan standar HSE yang ketat"

// ❌ AVOID: Empty claims
"Perusahaan terbaik"
"Nomor satu di Indonesia"
```

### Content Length Guidelines:

| Element | Recommended Length | Max Length |
|---------|-------------------|------------|
| **Section Title (H2)** | 4-8 words | 10 words |
| **Section Description** | 15-25 words | 35 words |
| **Card Title (H4)** | 3-6 words | 8 words |
| **Card Description** | 15-20 words | 30 words |
| **Division Details** | 20-30 words | 40 words |
| **CTA Button** | 1-3 words | 4 words |

### Writing Style:

#### ✅ DO:
```tsx
// Use active voice
"LEI menyediakan solusi energi" // ✅
// NOT: "Solusi energi disediakan oleh LEI" // ❌

// Be specific
"Pasokan batubara dan biomassa (cangkang sawit)" // ✅
// NOT: "Pasokan energi berbagai jenis" // ❌

// Focus on benefits
"Manajemen distribusi dengan pemantauan proses real-time" // ✅
// NOT: "Kami punya sistem canggih" // ❌

// Use industry terms appropriately
"HSE compliance, commissioning, fleet management" // ✅
```

#### ❌ AVOID:
```tsx
// Superlatives without proof
"Yang terbaik", "Paling hebat", "Terpopuler"

// Redundancy
"Solusi yang solutif", "Kualitas yang berkualitas"

// Jargon overload
"Leverage synergistic paradigms untuk maximize ROI"

// Marketing fluff
"Revolusioner", "Game-changing", "One-of-a-kind"
```

### Content Structure Examples:

#### Section Header Pattern:
```tsx
<div className="text-center mb-16">
  <h2>
    [Action/Value] untuk [Target Audience]
  </h2>
  <p className="mt-4 max-w-3xl mx-auto">
    [Brief explanation: What we do + How it helps]
  </p>
</div>

// Example:
<h2>Perkuat Strategi Bisnis Anda</h2>
<p>LEI menyediakan rantai layanan end-to-end: pasokan energi, 
   desain/instalasi PLTS, ME & IT support, serta logistik.</p>
```

#### Service/Feature Description:
```tsx
// Pattern: [What] + [Specific Details] + [Key Benefit]
"Pasokan batubara dan biomassa (cangkang sawit) yang konsisten, 
 plus solusi PLTS skala industri. Fokus pada kualitas pasokan, 
 kepatuhan, dan ketepatan pengiriman."
```

#### CTA Guidelines:
```tsx
// ✅ Action-oriented, clear intent
<Button>Hubungi Sales</Button>
<Button>Pelajari Lebih Lanjut</Button>
<Button>Kirim Permintaan</Button>

// ❌ Vague or unclear
<Button>Klik Disini</Button>
<Button>Info Lebih Lanjut</Button>
<Button>Submit</Button>
```

### SEO-Friendly Writing:

```tsx
// Include relevant keywords naturally
✅ "Solusi energi industri yang terpercaya. Dari pengadaan 
    batubara dan biomassa hingga maintenance sistem ME & IT."

❌ "We provide solutions for your needs with quality service 
    and professional approach."
```

### Content Review Checklist:

Before publishing copy, verify:
- [ ] All content is in Bahasa Indonesia
- [ ] Tone is professional and solution-oriented
- [ ] No superlatives without evidence
- [ ] Specific details included (not vague)
- [ ] Industry terms used correctly
- [ ] Length within guidelines
- [ ] CTAs are action-oriented
- [ ] No marketing fluff or jargon overload
- [ ] Grammar and spelling checked
- [ ] Consistent with brand voice

### Reference Documentation:

For complete copywriting structure, see: `docs/copywriting-structure.md`

This document contains:
- Full landing page copy breakdown
- Section-by-section content
- Recommended updates and alternatives
- SEO keywords and strategy

---

## 17. Asset Management & CDN Usage (MANDATORY)

**ALWAYS use external CDN URLs for static assets to improve performance and avoid repository bloat.**

### Logo & Brand Assets:

#### ✅ CORRECT: Use CDN URLs
```tsx
import Image from "next/image"

// Company logo from Vercel Blob Storage
<Image
  src="https://31erzxwc41uobyzd.public.blob.vercel-storage.com/lei.svg"
  alt="Lumbung Energi Indonesia"
  width={120}
  height={40}
  priority
/>
```

#### ❌ WRONG: Local large files
```tsx
// DON'T store large SVG/images locally
<Image src="/lei.svg" alt="..." /> // ❌ (if file > 100KB)
<Image src="/large-hero.png" alt="..." /> // ❌
```

### Asset Storage Guidelines:

| Asset Type | Size Limit (Local) | Recommended Storage |
|------------|-------------------|---------------------|
| **SVG Logo** | < 50KB | CDN (Vercel Blob) |
| **PNG/JPG Logo** | < 100KB | CDN |
| **Hero Images** | Any size | CDN (Unsplash/Blob) |
| **Icons** | < 10KB | Local `/public` |
| **Favicons** | < 5KB | Local `/public` |
| **Videos** | Any size | CDN (Vercel Blob) |

### CDN Sources:

#### 1. Vercel Blob Storage (Primary)
```tsx
// For company-specific assets
const COMPANY_LOGO = "https://31erzxwc41uobyzd.public.blob.vercel-storage.com/lei.svg"
const HERO_VIDEO = "https://31erzxwc41uobyzd.public.blob.vercel-storage.com/coal_mining_video.mp4"

<Image src={COMPANY_LOGO} alt="LEI Logo" width={120} height={40} />
<video src={HERO_VIDEO} autoPlay loop />
```

#### 2. Unsplash (For Stock Photos)
```tsx
// For placeholder/stock images
const ENERGY_IMAGE = "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80"

<Image 
  src={ENERGY_IMAGE} 
  alt="Energy facility" 
  fill 
  className="object-cover" 
/>
```

#### 3. Next.js Image Optimization
```tsx
// Next.js automatically optimizes external images
<Image
  src="https://external-cdn.com/image.jpg"
  alt="Optimized image"
  width={600}
  height={400}
  quality={85} // Default: 75
  placeholder="blur" // Optional: blur placeholder
  blurDataURL="data:image/..." // Optional: custom blur
/>
```

### Asset Upload Process:

When adding new assets:

1. **Evaluate Size**: Check if asset should be local or CDN
2. **Upload to CDN**: 
   - Use Vercel Blob for company assets
   - Upload via Vercel dashboard or CLI
3. **Get URL**: Copy the permanent CDN URL
4. **Update Code**: Replace local path with CDN URL
5. **Test**: Verify image loads correctly
6. **Clean Up**: Remove local file if no longer needed

### Performance Benefits:

#### CDN Advantages:
- ✅ Faster load times (global edge network)
- ✅ Smaller repository size
- ✅ No git conflicts with binary files
- ✅ Easier asset management
- ✅ Automatic optimization (compression, format)
- ✅ Better caching

#### Local File Issues:
- ❌ Slower git operations
- ❌ Repository bloat
- ❌ Merge conflicts on binary files
- ❌ No automatic optimization
- ❌ Single server location

### Security Considerations:

```tsx
// ✅ SAFE: Public assets on CDN
<Image src="https://cdn.vercel-storage.com/logo.svg" alt="Logo" />

// ⚠️ CAUTION: Sensitive assets should NOT be public
// Don't upload: client data, internal documents, private keys

// ✅ SAFE: Use environment variables for sensitive URLs
const PRIVATE_ASSET = process.env.NEXT_PUBLIC_PRIVATE_CDN_URL
```

### Asset Organization:

```tsx
// Create a constants file for asset URLs
// lib/assets.ts

export const ASSETS = {
  logo: {
    main: "https://31erzxwc41uobyzd.public.blob.vercel-storage.com/lei.svg",
    icon: "/favicon.ico", // Small, can be local
  },
  videos: {
    hero: "https://31erzxwc41uobyzd.public.blob.vercel-storage.com/coal_mining_video.mp4",
  },
  images: {
    energy: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
    logistics: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  },
} as const

// Usage in components
import { ASSETS } from "@/lib/assets"

<Image src={ASSETS.logo.main} alt="LEI Logo" width={120} height={40} />
```

### Migration Checklist:

When migrating from local to CDN:

- [ ] Identify large files (> 100KB)
- [ ] Upload to CDN (Vercel Blob)
- [ ] Update all import paths
- [ ] Test in development
- [ ] Verify in production
- [ ] Remove local files
- [ ] Update `.gitignore` if needed
- [ ] Document CDN URLs

### Common Patterns:

```tsx
// Logo Component with CDN
export const Logo = ({ className }: { className?: string }) => {
  return (
    <Image
      src="https://31erzxwc41uobyzd.public.blob.vercel-storage.com/lei.svg"
      alt="Lumbung Energi Indonesia"
      width={120}
      height={40}
      className={cn('h-8 w-auto', className)}
      priority
    />
  )
}

// Hero Video with CDN
<video
  autoPlay
  loop
  muted
  className="size-full object-cover"
  src="https://31erzxwc41uobyzd.public.blob.vercel-storage.com/coal_mining_video.mp4"
/>

// Responsive Image with CDN
<div className="relative h-40 rounded-xl overflow-hidden">
  <Image
    src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80"
    alt="Energy facility"
    fill
    className="object-cover"
  />
</div>
```

---

## Summary
✅ **DO**: 
- Use semantic tokens for colors
- Use semantic HTML for typography
- Follow Section + Container pattern
- Use Next.js Image component
- Ensure card symmetry with h-full and flex
- Write all content in Indonesian
- Use shadcn/ui components
- Use consistent spacing and layout patterns
- Follow copywriting guidelines (professional, concise, benefit-focused)
- Use external CDN for assets > 100KB
- Store brand assets on Vercel Blob Storage
- Create asset constants file for organization

❌ **DON'T**: 
- Use hardcoded colors
- Use custom button styles
- Use raw img tags (use Next.js Image)
- Create asymmetric cards in grids
- Use English for user-facing content
- Override typography styles unnecessarily
- Use marketing fluff or empty superlatives
- Store large assets (> 100KB) in repository
- Commit binary files without CDN alternative
- Use vague or generic copywriting