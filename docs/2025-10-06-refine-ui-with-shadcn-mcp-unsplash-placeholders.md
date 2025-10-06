## Ringkasan Temuan
- Stack: Next.js (app dir) + Tailwind v4 + shadcn/ui sudah terpasang (components.json ada).
- Placeholder terlihat di: Hero image dan grid “Logo” pada CredibilitySection.
- next.config.ts belum mengizinkan domain gambar eksternal (Unsplash), sehingga <Image> remote akan gagal.

## Rencana Implementasi (menggunakan agent shadcn + MCP sesuai express_agent.md)
1) Konfigurasi gambar eksternal
- Tambah konfigurasi images untuk Unsplash agar aman digunakan.

2) Tambah komponen shadcn bila perlu (via MCP)
- aspect-ratio (untuk menjaga rasio gambar) dan skeleton (opsional untuk loading state).
- Langkah agent (ringkas):
  - mcp__shadcn__get_project_registries → verifikasi registries
  - mcp__shadcn__search_items_in_registries: "aspect-ratio", "skeleton"
  - mcp__shadcn__get_add_command_for_items → jalankan npx shadcn add [item]

3) Revisi HeroSection
- Ganti placeholder dengan Next <Image> dari Unsplash + overlay gradient; tetap responsif dan aksesibel.

4) Revisi CredibilitySection
- Ganti box “Logo 1..6” menjadi grid gambar Unsplash bertema industri (grayscale/low opacity agar terasa seperti brand band). Gunakan AspectRatio untuk konsistensi.

5) Polish kecil
- Periksa spacing, kontras, fokus state tombol, dan responsivitas di breakpoint kunci.

6) Verifikasi
- Jalankan lint/build, uji manual di mobile/desktop.

---

## Cuplikan Perubahan Utama

1) next.config.ts (tambahan images)
```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "source.unsplash.com" },
    ],
  },
  async headers() {
    return [
      { source: "/:path*", headers: [
        { key: "X-Frame-Options", value: "DENY" },
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
      ]} ,
    ];
  },
};

export default nextConfig;
```

2) HeroSection: ganti placeholder dengan gambar Unsplash
```tsx
import Image from "next/image";

// ... di Right Column
<div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border">
  <Image
    src="https://images.unsplash.com/photo-1581091012184-5c1d7b0f0a5b?auto=format&fit=crop&q=70&w=1600"
    alt="Proyek industri energi"
    fill
    priority
    className="object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
</div>
```

3) CredibilitySection: ganti grid logo menjadi grid gambar Unsplash + styling netral
```tsx
import Image from "next/image";
const items = Array.from({ length: 6 }, (_, i) =>
  `https://source.unsplash.com/400x200?industry,factory&sig=${i+1}`
);

<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
  {items.map((src, i) => (
    <div key={i} className="relative aspect-[3/1] rounded-lg overflow-hidden border border-border bg-card">
      <Image src={src} alt={`Mitra industri ${i+1}`} fill className="object-cover grayscale opacity-80" />
    </div>
  ))}
</div>
```

4) Perintah agent shadcn (via MCP → npx)
```bash
# contoh jika diperlukan
npx shadcn@latest add aspect-ratio
npx shadcn@latest add skeleton
```

Jika setuju dengan spec ini, saya akan mulai implementasi, mengganti placeholder dengan foto Unsplash bertema energi/industri dan memoles UI agar terlihat lebih final. Apakah saya lanjut?