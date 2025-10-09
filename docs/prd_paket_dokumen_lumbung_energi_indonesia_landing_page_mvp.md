# masterplan.md

## Ikhtisar Aplikasi & Tujuan
Landing page korporat **Lumbung Energi Indonesia** (LEI) untuk pasar B2B Indonesia. Fokus: menampilkan proposisi nilai perusahaan secara singkat, bukti kredibilitas (klien/proyek/sertifikasi), dan mengarahkan pengunjung ke dua konversi utama: **Hubungi Sales** dan **Unduh Company Profile (PDF)**.

**Sasaran MVP:**
- Menyampaikan positioning LEI secara jelas dalam 5–7 detik pertama (above the fold).
- Mendorong klik pada CTA utama (Hubungi Sales / Unduh Company Profile).
- Menyediakan ringkasan layanan, bukti sosial (logo klien/testimoni), dan kontak yang mudah.
- Bahasa: **Indonesia saja**.
- Tanpa blog/news/knowledge hub pada tahap MVP.

## Target Audiens
- **Buyer persona B2B profesional** di Indonesia: Procurement Manager, Project/Engineering Manager, Operations Manager, dan C‑level di sektor energi/infrastruktur/logistik industri.
- Kebutuhan utama: mitra tepercaya, kapabilitas terverifikasi, waktu respons cepat, materi company profile untuk internal review.

## Fitur Inti & Fungsi Halaman
1. **Hero Section (Above the Fold)**
   - Headline kuat (value proposition), subheadline singkat.
   - Dua CTA primer: **Hubungi Sales** (scroll ke form/WhatsApp/email) & **Unduh Company Profile (PDF)**.
   - Visual hero: foto/ilustrasi industri yang relevan.
2. **Ringkasan Layanan (3–6 kartu)**
   - Tiap kartu: nama layanan, 1‑2 kalimat manfaat, link ke halaman detail (opsional V1) atau modal ringkas.
3. **Keunggulan Utama / Mengapa LEI**
   - 3–5 poin diferensiasi (kapabilitas, jangkauan, compliance, SLA, HSE/quality).
4. **Kredibilitas**
   - Logo klien/mitra, sertifikasi, penghargaan.
   - 1–2 testimoni singkat.
5. **Highlight Proyek (opsional dalam MVP)**
   - 3 item showcase dengan foto & ringkas hasil.
6. **CTA Section**
   - Repeat CTA dengan copy variatif + trust badges.
7. **Form Kontak Sederhana**
   - Nama, Email, Perusahaan, Telepon, Pesan; pilihan topik.
   - Alternatif cepat: tombol WhatsApp.
8. **Footer Ringkas**
   - Kontak, alamat, sosial, kebijakan privasi.

## Rekomendasi Stack Teknis (MVP)
- **Frontend:** Next.js 15, TypeScript, Tailwind CSS, shadcn/ui.
- **State/Forms:** React Hook Form + Zod; reCAPTCHA/Turnstile untuk spam.
- **Analytics:** Plausible/Umami/GA4 (pilih salah satu).
- **Aset/Media:** statis (public/) untuk MVP; **UploadThing** menyusul.
- **Auth & DB:** belum diperlukan untuk landing publik; **Supabase** menyusul untuk form log & dashboard ringan.
- **Email/Notifikasi:** Resend / SMTP untuk kirim notifikasi form.
- **Dokumen:** Company Profile PDF statis versi ID.

## Model Data Konseptual (untuk V1 jika pakai Supabase)
- **leads**: id, name, email, phone, company, topic, message, utm, created_at, status.
- **testimonials**: id, author_name, role_company, quote, logo_url, is_published, order.
- **clients**: id, name, logo_url, is_featured, order.
- **services**: id, title, summary, icon, order.
- **projects** (opsional): id, title, image, brief, tags, order, is_published.
- **downloads**: id, file_name, file_url, version, locale, download_count.

## Prinsip Desain UI
- **Ringkas & hierarki kuat**: 1 headline utama, 1 subheadline, 2 CTA. Hindari wall of text.
- **Di atas fold harus menjawab**: siapa kita, apa nilai kita, apa langkah berikutnya.
- **Skimmable**: bullet, kartu, ikon sederhana, whitespace lapang.
- **Trust**: tampilkan klien/sertifikasi dini (di atas midpoint halaman).
- **Aksesibilitas**: kontras AA, ukuran font min 16px, fokus ring, teks alt.

## Keamanan & Kepatuhan
- HTTPS, HSTS, header keamanan (CSP minimal, X‑Frame‑Options, etc.).
- Validasi form sisi klien & server; rate limiting; antibot (Turnstile/reCAPTCHA).
- Sanitasi input; hindari menyimpan PII sensitif di log klien.
- PDF download dengan link non‑indeks (robots noindex,nofollow) bila perlu.

## Fase Pengembangan
- **MVP (2–3 minggu efektivitas kerja):** Landing 1 halaman, form kontak, CTA download, logo klien, testimoni.
- **V1:** Halaman layanan per layanan, halaman proyek ringkas, dashboard leads ringan (Supabase), CMS sederhana.
- **V2:** Bahasa Inggris opsional, blog/insight, integrasi CRM, micro‑site rekrutmen.

## Tantangan & Solusi
- **Copy tidak tajam** → Workshop 1 jam untuk value prop + proof points.
- **Asset visual terbatas** → Gunakan foto industri stok berlisensi sementara; ganti dengan dokumentasi proyek.
- **Spam form** → Turnstile + honeypot + rate limit.
- **Waktu respon sales** → Auto‑forward ke email/WhatsApp grup sales + auto‑reply.

## Ekspansi Masa Depan
- Integrasi CRM (HubSpot/Pipedrive), kalkulator estimasi, portal klien, live chat, microsite karier.

---

# implementation-plan.md

## Tahap MVP
1. **Arsitektur & Setup**
   - Bootstrap Next.js 15 + TS + Tailwind + shadcn/ui; lint/prettier/husky.
   - Layout, theme, tokens (warna/spacing/typography).
   - Komponen dasar: Header (sticky) dengan CTA, Footer, Container, Section.
2. **Copy & Asset**
   - Sesi singkat untuk finalisasi headline/subheadline/keunggulan.
   - Kumpulkan logo klien, sertifikasi, testimoni; siapkan PDF Company Profile.
3. **Halaman & Section**
   - Hero + 2 CTA.
   - Ringkasan Layanan (kartu 3–6).
   - Keunggulan Utama (3–5 poin).
   - Kredibilitas (logo klien/sertifikasi + 1–2 testimoni).
   - CTA ulang.
   - Form kontak + WhatsApp.
4. **Fungsi Download PDF**
   - Link langsung ke PDF di /public atau edge storage; tracking klik.
5. **Form & Notifikasi**
   - React Hook Form + Zod; endpoint API routes.
   - Email notifikasi (Resend/SMTP) + auto‑reply.
   - Anti‑spam: Turnstile + honeypot + rate limit.
6. **Observabilitas & Analitik**
   - Pasang Plausible/Umami/GA4; define goal: contact_submit & company_profile_download.
7. **Keamanan & Kinerja**
   - Header keamanan dasar, image optimization, prefetch, lazyload, Lighthouse >90.
8. **Go‑Live**
   - Deploy (Vercel). Domain, SSL, redirects, robots/sitemap, OG tags.

## Tahap V1 (setelah MVP)
- Halaman Detail Layanan.
- Showcase Proyek ringkas.
- CMS sederhana di Supabase untuk clients/testimonials/services.
- Dashboard Leads (tabel & ekspor CSV).

## Tahap V2 (opsional)
- Bilingual ID/EN.
- Blog/Insights.
- Integrasi CRM & scoring leads.
- UploadThing untuk manajemen aset dinamis.

## Tim & Peran
- **PM/CTO (Anda):** prioritas & review.
- **Desainer UI (part‑time):** komponen & visual.
- **Front‑end dev:** implementasi UI/UX.
- **Konten/Marketing (part‑time):** copy & aset klien.

## Checklist Siap Produksi
- [ ] Headline jelas; CTA terlihat pada 1st screen.
- [ ] Analitik & goals berfungsi.
- [ ] Email notifikasi terkirim & SPF/DKIM oke.
- [ ] Form anti‑spam aktif.
- [ ] Lighthouse perf/accessibility/SEO >90.

---

# design-guidelines.md

## Gaya Visual
- **Look & feel:** industrial‑modern, tepercaya, bersih.
- **Typography:** Sans‑serif netral (Inter/Plus Jakarta Sans). Heading tegas, body 16–18px.
- **Warna:**
  - Primer: Biru tua/Navy (kepercayaan), Aksen Oranye/Hijau energi (hemat digunakan).
  - Netral: abu‑abu dingin untuk background, putih luas sebagai kanvas.
- **Ikonografi:** sederhana, outline minimal.
- **Foto:** fasilitas, tim lapangan, armada/proyek; hindari stok generik berlebihan.

## Prinsip Layout
- **Above the fold fokus CTA ganda**; sticky header dengan tombol "Hubungi Sales" & "Unduh Profil".
- **Grid 12 kolom**, spacing besar (24–40px), whitespace lega.
- **Kartu layanan**: ikon, judul, 1–2 kalimat, tombol “Pelajari”.
- **Trust band**: baris logo klien/sertifikasi sebelum scroll pertengahan.
- **CTA akhir**: benefit + bukti singkat + tombol.

## Aksesibilitas
- Kontras warna minimal AA, fokus state terlihat, label form eksplisit.
- Hit area tombol min 44×44 px.
- Teks alternatif untuk gambar; urutan heading logis.

## Tone of Voice (Bahasa Indonesia)
- Profesional, ringkas, berorientasi solusi.
- Hindari jargon berlebihan; gunakan kata kerja aktif.
- Sorot hasil & manfaat, bukan fitur teknis semata.

## Komponen Utama (shadcn/ui)
- Button (primary/secondary/ghost), Card, Badge, Input, Textarea, Select, Dialog (untuk modal ringkas layanan), Toast.

---

# app-flow-pages-and-roles.md

## Struktur Navigasi (MVP)
- **Header:** Beranda (logo), Layanan (anchor ke section), Proyek (anchor opsional), Tentang (anchor singkat), **Hubungi Sales** (button), **Unduh Profil** (button).
- **Halaman:** 1 halaman beranda (landing) + file PDF statis.

## Urutan Alur Pengguna
1. Masuk ke beranda → baca headline & melihat CTA.
2. Scroll → ringkasan layanan & keunggulan → melihat logo klien/sertifikasi.
3. Memutuskan: (a) Klik **Hubungi Sales** → scroll ke form atau WhatsApp; (b) Klik **Unduh Profil** → unduh PDF.
4. (Opsional) Baca testimoni/proyek singkat → klik CTA ulang.

## Section Wajib (dengan tujuan UX)
1. **Hero**: Value prop + 2 CTA.
2. **Layanan**: kartu 3–6.
3. **Keunggulan/Why Us**: 3–5 poin.
4. **Kredibilitas**: logo klien/sertifikasi + testimoni.
5. **CTA Repeat**: dorong tindakan.
6. **Form Kontak**: sederhana + kanal cepat (WhatsApp/email/telepon).
7. **Footer**: informasi perusahaan & legal.

## Peran Pengguna
- **Visitor (publik):** melihat konten, unduh PDF, submit form.
- **Admin (V1):** kelola leads, services, clients, testimonials.
- **Editor (V1):** input konten, tanpa akses pengaturan.

## Izin Akses (V1 dengan Supabase)
- Visitor: read‑only publik.
- Editor: CRUD terbatas (services/clients/testimonials, tidak bisa delete permanen).
- Admin: full CRUD + export leads.

## Event & Metrik
- `cta_contact_click`, `cta_download_click`, `form_submit_success`, `form_submit_fail`, `hero_view`, `section_services_view`.

## Integrasi Eksternal
- Plausible/Umami/GA4, Resend/SMTP, Turnstile/reCAPTCHA, WhatsApp link.

## Konten yang Dibutuhkan
- Headline & subheadline (ID), 3–5 poin keunggulan, 3–6 layanan, 6–12 logo klien/mitra, 1–2 testimoni, PDF company profile, kontak perusahaan & alamat.



---

# HERO COPY & CTA — DRAFT (BAHASA INDONESIA)

> Tujuan: jelaskan nilai LEI dalam 5–7 detik, tampilkan 2 CTA utama (**Hubungi Sales**, **Unduh Company Profile**), dan munculkan kepercayaan saat di atas fold.

## Aturan Ringkas
- **Headline:** 6–10 kata, hasil/keunggulan jelas, tanpa jargon.
- **Subheadline:** 14–22 kata, mempertegas kapabilitas + bukti singkat.
- **CTA Primer:** "Hubungi Sales" (filled) + "Unduh Company Profile" (outline).
- **Trust Teaser:** baris mini "Dipercaya oleh … / Sertifikasi …" tepat di bawah CTA.

---

## Varian A — Outcome-Focused (Default)
**Headline**: Solusi Energi Industri yang Terbukti
**Subheadline**: Kami membantu proyek Anda berjalan aman, tepat waktu, dan sesuai regulasi—dengan tim berpengalaman dan standar mutu yang konsisten.
**CTA 1**: Hubungi Sales
**CTA 2**: Unduh Company Profile
**Trust Teaser**: Dipercaya oleh klien manufaktur & infrastruktur terkemuka. Sertifikasi HSE & Quality.

**Kapan dipakai**: audiens luas (procurement, ops, project). Netral dan aman sebagai default.

---

## Varian B — Reliability & Compliance
**Headline**: Mitra Tepercaya untuk Proyek Kritis
**Subheadline**: Eksekusi lapangan terstandar, dokumentasi lengkap, dan kepatuhan HSE/ISO untuk memenuhi persyaratan audit dan vendor list Anda.
**CTA 1**: Hubungi Sales
**CTA 2**: Unduh Company Profile
**Trust Teaser**: Kepatuhan & keselamatan terverifikasi. SLA jelas. Referensi proyek tersedia.

**Kapan dipakai**: saat buyer persona peduli audit/kepatuhan (oil & gas, utilitas, infrastruktur publik).

---

## Varian C — Turnkey Delivery
**Headline**: Dari Perencanaan hingga Operasional, Satu Pintu
**Subheadline**: Tim multidisiplin menangani desain, pengadaan, instalasi, dan commissioning—mempercepat go‑live tanpa kompromi kualitas.
**CTA 1**: Hubungi Sales
**CTA 2**: Unduh Company Profile
**Trust Teaser**: Portofolio end‑to‑end. Koordinasi lintas vendor. Garansi pekerjaan.

**Kapan dipakai**: saat menonjolkan kapabilitas EPC/turnkey atau layanan menyeluruh.

---

## Microcopy CTA & Elemen Pendukung
- **Label tombol utama**: "Hubungi Sales"
- **Label tombol sekunder**: "Unduh Company Profile"
- **Helper di bawah tombol**: "Respon cepat <4 jam kerja"
- **Alt tombol cepat**: "Chat WhatsApp" (ikon WA) — tampilkan sebagai tertiary action.
- **Tooltip Unduh**: "PDF profil perusahaan • ±3 MB"
- **Toast sukses unduh**: "Unduhan dimulai. Terima kasih telah tertarik pada LEI."
- **Toast sukses form**: "Terima kasih! Tim kami akan menghubungi Anda segera."

### WhatsApp Deep Link (contoh)
`https://wa.me/62812XXXXXXX?text=Halo%20LEI,%20saya%20[Name]%20dari%20[Company].%20Saya%20ingin%20mendiskusikan%20[Topik%20singkat].`

> Catatan: ganti nomor & prefilled text sesuai kebutuhan; panjang maksimal ~2000 karakter.

---

## Struktur Above the Fold (urutan elemen)
1) Logo + Header sticky (nav ringkas)  
2) Headline → Subheadline  
3) **CTA Primer (Hubungi Sales)** + **CTA Sekunder (Unduh Company Profile)**  
4) Trust Teaser (logo klien mini / sertifikasi)  
5) Gambar hero relevan (opsional, tidak mengganggu fokus CTA)

---

## Alternatif Copy Pendek (untuk layar kecil)
- **Headline pendek**: "Solusi Energi Terbukti"
- **Subheadline pendek**: "Aman, tepat waktu, patuh regulasi."
- **CTA**: "Hubungi Sales" • "Unduh Profil"

---

## Navigasi & Label (Header)
- Layanan  •  Proyek  •  Tentang  •  **Hubungi Sales**  •  **Unduh Profil**

---

## A/B Testing yang Disarankan (pasang sebagai goal di analytics)
- **A vs B**: Headline Outcome vs Compliance
- **Primary CTA label**: "Hubungi Sales" vs "Bicara dengan Tim Sales"
- **Helper text**: dengan vs tanpa "Respon cepat <4 jam kerja"
- **Trust teaser**: logo klien vs teks sertifikasi

---

## Catatan Implementasi UI (Tailwind/shadcn)
- Button primer: ukuran lg, radius‑2xl, shadow‑soft; fokus ring terlihat.
- Button sekunder (outline): kontras cukup, hover subtle.
- Spasi vertikal antara headline→CTA: ~20–28px; antara CTA→trust: ~12–16px.
- Breakpoint sm: gunakan alternatif copy pendek di atas.



---

# LANDING PAGE COPY — FINAL (VARIAN A)

> Gaya bahasa: profesional, ringkas, berorientasi hasil. Bahasa Indonesia saja. Dua CTA utama: **Hubungi Sales** (primer) & **Unduh Company Profile** (sekunder).

## 0) Metadata & SEO
- **Title**: Lumbung Energi Indonesia — Solusi Energi Industri yang Terbukti
- **Meta Description**: Lumbung Energi Indonesia membantu proyek Anda berjalan aman, tepat waktu, dan sesuai regulasi. Hubungi sales atau unduh Company Profile kami.
- **OG Title**: Solusi Energi Industri yang Terbukti
- **OG Description**: Aman • Tepat Waktu • Sesuai Regulasi. Kenali kami dan unduh Company Profile.
- **OG Image Alt**: Tim LEI di lokasi proyek energi industri.

## 1) Hero (Varian A — Outcome-Focused)
**Headline**: Solusi Energi Industri yang Terbukti  
**Subheadline**: Kami membantu proyek Anda berjalan aman, tepat waktu, dan sesuai regulasi—dengan tim berpengalaman dan standar mutu yang konsisten.  
**CTA Primer**: Hubungi Sales  
**CTA Sekunder**: Unduh Company Profile  
**Helper Text**: Respon cepat <4 jam kerja  
**Trust Teaser**: Dipercaya oleh klien manufaktur & infrastruktur terkemuka. Sertifikasi HSE & Quality.

---

## 2) Ringkasan Layanan (3–6 Kartu)
> Gunakan 4 kartu untuk MVP; setiap kartu punya judul + 1–2 kalimat.

**Kartu 1 — Pengadaan & Supply**  
Kami menyediakan peralatan & material industri yang sesuai spesifikasi proyek, dengan lead time terukur dan dukungan dokumentasi lengkap.

**Kartu 2 — Instalasi & Commissioning**  
Eksekusi lapangan oleh tim bersertifikat, memastikan pemasangan aman, pengujian menyeluruh, dan serah terima terdokumentasi.

**Kartu 3 — Perawatan & After‑Sales**  
Layanan inspeksi berkala, perbaikan, serta ketersediaan suku cadang untuk memaksimalkan uptime aset Anda.

**Kartu 4 — Konsultasi Teknis**  
Pendampingan pemilihan solusi, peninjauan spesifikasi, dan evaluasi kelayakan agar keputusan teknis lebih tepat.

> *Optional label tombol tiap kartu*: “Pelajari Layanan” (scroll ke form jika detail belum tersedia).

---

## 3) Keunggulan Utama (Why LEI)
- **Terbukti di Lapangan** — Beragam proyek industri dengan standar mutu konsisten.
- **Kepatuhan & Keselamatan** — Prosedur HSE dan dokumentasi sesuai regulasi.
- **Tepat Waktu** — Perencanaan & eksekusi yang disiplin untuk memenuhi tenggat.
- **Respons Cepat** — Tim sales & teknis siap merespons kebutuhan Anda.
- **Satu Pintu** — Koordinasi pengadaan hingga commissioning dalam satu tim.

---

## 4) Kredibilitas (Logo & Sertifikasi)
**Heading**: Dipercaya oleh Mitra Industri  
**Subcopy**: Terima kasih atas kepercayaan berbagai perusahaan manufaktur dan infrastruktur di Indonesia.

> Placeholder logo: [Logo Klien 1] [Logo Klien 2] [Logo Klien 3] [Logo Klien 4] [Logo Klien 5]

**Sertifikasi & Kepatuhan**  
HSE • Quality Management • Compliance dokumen proyek

**Testimoni (1–2 item)**  
“LEI tanggap dan rapi dalam dokumentasi. Proyek kami selesai sesuai jadwal.” — *Procurement Manager, Perusahaan Manufaktur*

---

## 5) Highlight Proyek (Opsional MVP)
**Heading**: Cuplikan Proyek  
- **Modernisasi Sistem Pompa** — Pemasangan unit baru & commissioning; downtime minimal, performa stabil.  
- **Upgrade Panel Kontrol** — Peningkatan keandalan & kemudahan audit; dokumentasi lengkap.

> Jika belum ada foto, simpan sebagai teks 2‑3 baris.

---

## 6) CTA Repeat (Mid & Pre‑Footer)
**Heading**: Siap Membawa Proyek Anda ke Tahap Berikutnya?  
**Subcopy**: Diskusikan kebutuhan Anda atau unduh profil perusahaan kami untuk dibagikan internal.

**CTA Primer**: Hubungi Sales  
**CTA Sekunder**: Unduh Company Profile

---

## 7) Form Kontak
**Heading**: Hubungi Tim Kami  
**Subcopy**: Isi formulir di bawah ini atau chat WhatsApp untuk respons lebih cepat.

**Field Label**  
- Nama Lengkap*  
- Email Kerja*  
- Perusahaan*  
- Nomor Telepon  
- Topik (Dropdown): Pengadaan • Instalasi/Commissioning • Perawatan • Konsultasi • Lainnya  
- Pesan*  

**Checkbox**  
- Saya setuju dihubungi oleh tim LEI.

**Tombol Submit**: Kirim Permintaan

**WhatsApp Quick Action**: Chat WhatsApp

**Notifikasi**  
- Sukses: “Terima kasih! Tim kami akan menghubungi Anda segera.”  
- Gagal: “Maaf, terjadi kendala. Silakan coba lagi atau hubungi via WhatsApp.”

**Catatan Privasi**: Data Anda hanya digunakan untuk menindaklanjuti permintaan ini.

---

## 8) Footer
**Perusahaan**  
PT Lumbung Energi Indonesia  
Alamat (isi sesuai dokumen resmi)

**Kontak**  
Email: sales@lumbungenergi.id  
Telepon: +62-XXX-XXXX-XXXX

**Legal**  
Kebijakan Privasi • Syarat & Ketentuan • Hak Cipta © Tahun Berjalan

---

## 9) Microcopy Unduhan
- Tooltip tombol: “PDF profil perusahaan • ±3 MB”  
- Snackbar/Toast: “Unduhan dimulai. Terima kasih telah tertarik pada LEI.”

---

## 10) Template WhatsApp
`Halo LEI, saya [Nama] dari [Perusahaan]. Saya ingin mendiskusikan [Topik singkat] untuk proyek di [Lokasi/Kota]. Bisa jadwalkan panggilan?`

---

## 11) Navigasi (Header)
Beranda • Layanan • Proyek • Tentang • **Hubungi Sales** • **Unduh Profil**

> Catatan implementasi: tombol CTA di header selalu terlihat (sticky). Di mobile, gunakan tombol primer “Hubungi Sales” sebagai action menonjol di kanan.

