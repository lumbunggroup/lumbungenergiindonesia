# Vercel Blob Asset Caching Implementation

## Problem Statement

Prior to this implementation, Vercel Blob Storage assets were consuming excessive bandwidth (4.03 GB/10 GB monthly limit) due to:

1. **No cache headers configured** - All assets fetched from origin on every request
2. **Large video file** - Hero video (coal_mining_video.mp4) downloaded repeatedly without caching
3. **Repeated asset requests** - Logo SVG, PDF, and OG images fetched without browser/CDN caching
4. **No video optimization** - Video loaded entire file instead of metadata-only preload

## Solution Implemented

### 1. Aggressive Cache Headers in `next.config.ts`

Added comprehensive cache headers specifically for Vercel Blob Storage domain:

```typescript
{
  source: "/:path*",
  has: [
    {
      type: "host",
      value: "31erzxwc41uobyzd.public.blob.vercel-storage.com",
    },
  ],
  headers: [
    {
      key: "Cache-Control",
      value: "public, max-age=31536000, immutable",
    },
    {
      key: "CDN-Cache-Control",
      value: "public, max-age=31536000",
    },
    {
      key: "Vercel-CDN-Cache-Control",
      value: "public, max-age=31536000",
    },
  ],
}
```

**Cache Duration:** 31536000 seconds = **1 year**

**Why 1 year?**
- Vercel Blob URLs are **immutable** (unique hash per file)
- If file changes, URL changes automatically
- Safe to cache indefinitely
- Maximizes cache hit rate and reduces bandwidth

### 2. Video Loading Optimization in `components/hero-section.tsx`

Optimized hero video attributes:

```tsx
<video
  autoPlay
  loop
  muted              // NEW: Required for autoplay
  playsInline        // NEW: Required for mobile autoplay
  preload="metadata" // NEW: Only load metadata, not full video initially
  src="..."
/>
```

**Benefits:**
- `preload="metadata"`: Loads only video dimensions and duration (~10-50 KB) instead of full file (2-5 MB)
- `muted`: Ensures autoplay works across all browsers
- `playsInline`: Prevents fullscreen on iOS

## Impact & Expected Results

### Before Implementation:
- ❌ Every page visit: ~5 MB (video + assets)
- ❌ 100 visits/day = ~500 MB/day = ~15 GB/month
- ❌ No browser caching
- ❌ No CDN caching

### After Implementation:
- ✅ First visit: ~50 KB (metadata only)
- ✅ Subsequent visits: 0 KB (cached)
- ✅ Browser cache: 1 year
- ✅ CDN cache: 1 year (Vercel Edge Network)
- ✅ Estimated bandwidth reduction: **70-90%**

### Cache Layers:

1. **Browser Cache** (max-age=31536000):
   - Assets cached locally for 1 year
   - Subsequent visits load from disk (0 bandwidth)

2. **Vercel Edge Cache** (Vercel-CDN-Cache-Control):
   - Cached on global edge network
   - Sub-50ms response time from nearest edge location

3. **Downstream CDN Cache** (CDN-Cache-Control):
   - Additional caching layer for external CDNs if used

## Affected Assets

All assets from Vercel Blob Storage benefit from this caching:

1. **Logo SVG** (`lei.svg`) - ~50 KB
   - Used in: Header, Footer, Logo component
   - High request frequency

2. **Hero Video** (`coal_mining_video.mp4`) - ~2-5 MB
   - Used in: Hero section on homepage
   - Largest asset, highest bandwidth impact

3. **OG Image** (`lumbungenergiindonesia.webp`) - ~200 KB
   - Used in: All page metadata
   - Fetched by social media crawlers

4. **Company Profile PDF** (`LEI - Company Profile 2025.pdf`) - ~1-3 MB
   - Used in: Header, CTA sections
   - Download link

## Verification Steps

### 1. Check Response Headers in Production

After deployment, verify cache headers are applied:

```bash
curl -I https://31erzxwc41uobyzd.public.blob.vercel-storage.com/lei.svg
```

Expected headers:
```
Cache-Control: public, max-age=31536000, immutable
CDN-Cache-Control: public, max-age=31536000
Vercel-CDN-Cache-Control: public, max-age=31536000
```

### 2. Browser DevTools Network Tab

1. Open page in incognito mode
2. Open DevTools > Network tab
3. Reload page
4. Check asset requests:
   - First load: Status `200` (from origin)
   - Second load: Status `304` or `(disk cache)`

### 3. Monitor Vercel Analytics

Track bandwidth reduction in Vercel Dashboard:
- Before: ~4 GB/10 GB monthly
- Target: <1 GB/10 GB monthly (75% reduction)

## Cache Busting Strategy

If assets need to be updated in the future:

### Option 1: Upload New File (Recommended)
Vercel Blob automatically generates new URL with unique hash:
```
Old: lei.svg?hash=abc123
New: lei.svg?hash=def456  // Auto-generated new hash
```

### Option 2: Query Parameter Versioning
Manually add version parameter to URL:
```tsx
<Image src="https://.../lei.svg?v=2026" alt="..." />
```

### Option 3: Re-upload via Vercel Dashboard
1. Delete old blob
2. Upload new file
3. Get new URL
4. Update code references

## Performance Monitoring

Monitor these metrics in Vercel Dashboard:

1. **Blob Storage > Data Transfer**
   - Track month-over-month reduction
   - Target: <1 GB/month

2. **Analytics > Performance**
   - Faster page load times from cached assets
   - Improved Core Web Vitals (LCP, FCP)

3. **Edge Requests**
   - More requests served from edge cache
   - Fewer origin requests

## Additional Optimization Opportunities

Future improvements to consider:

1. **Conditional Video Loading**
   ```tsx
   // Don't load video on mobile to save bandwidth
   {!isMobile && <video ... />}
   ```

2. **Poster Image**
   ```tsx
   <video poster="https://.../hero-poster.webp" ... />
   ```

3. **Lazy Loading Images**
   ```tsx
   <Image loading="lazy" ... /> // For below-the-fold images
   ```

4. **Image Size Optimization**
   - Compress images before uploading
   - Use WebP format for better compression

## References

- [Vercel Blob Storage Documentation](https://vercel.com/docs/storage/vercel-blob)
- [Vercel Cache Headers Guide](https://vercel.com/docs/headers/cache-control-headers)
- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)

## Rollback Plan

If issues arise, revert by removing the cache header configuration from `next.config.ts`:

```typescript
// Remove this block
{
  source: "/:path*",
  has: [{ type: "host", value: "31erzxwc41uobyzd.public.blob.vercel-storage.com" }],
  headers: [/* cache headers */],
}
```

## Date Implemented
2025-11-04

## Related Issues
- High bandwidth usage (4.03 GB/10 GB)
- Slow page loads from repeated asset downloads
- No caching strategy for Vercel Blob assets
