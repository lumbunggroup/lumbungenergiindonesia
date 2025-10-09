import { Metadata } from "next"
import { HeroHeader } from "@/components/header"
import { Footer } from "@/components/layout/footer"
import { DivisionHero } from "@/components/sections/division-hero"
import { ServicesCards } from "@/components/sections/services-cards"
import { GalleryBento } from "@/components/sections/gallery-bento"
import { DivisionCTA } from "@/components/sections/division-cta"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { Marquee } from "@/components/ui/marquee"
import { Truck, MapPin, Warehouse, FileCheck } from "lucide-react"
import {
  Logo01,
  Logo02,
  Logo03,
  Logo04,
  Logo05,
  Logo06,
  Logo07,
  Logo08,
} from "@/components/logos-07/logos"

export const metadata: Metadata = {
  title: "Divisi Logistik - PT Lumbung Energi Indonesia",
  description: "Distribusi dan fleet management terintegrasi. Manajemen distribusi energi dan material industri dengan pemantauan real-time dan dokumentasi lengkap.",
  openGraph: {
    title: "Divisi Logistik - PT Lumbung Energi Indonesia",
    description: "Distribusi dan fleet management terintegrasi untuk kebutuhan industri Anda. Manajemen distribusi energi dan material dengan pemantauan real-time dan dokumentasi lengkap.",
    type: "website",
    locale: "id_ID",
    siteName: "PT Lumbung Energi Indonesia",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/logistik`,
    images: [
      {
        url: "https://31erzxwc41uobyzd.public.blob.vercel-storage.com/lumbungenergiindonesia.webp",
        width: 1200,
        height: 630,
        alt: "Divisi Logistik - Lumbung Energi Indonesia",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Divisi Logistik - PT Lumbung Energi Indonesia",
    description: "Distribusi dan fleet management terintegrasi untuk kebutuhan industri Anda. Manajemen distribusi energi dan material dengan pemantauan real-time dan dokumentasi lengkap.",
    images: ["https://31erzxwc41uobyzd.public.blob.vercel-storage.com/lumbungenergiindonesia.webp"],
  },
}

const services = [
  {
    icon: Truck,
    title: "Distribusi Material",
    description: "Pengiriman batubara, biomassa, dan material industri tepat waktu dan aman",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
  },
  {
    icon: MapPin,
    title: "Fleet Management",
    description: "Koordinasi armada dengan GPS tracking dan optimasi rute untuk efisiensi maksimal",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80",
  },
  {
    icon: Warehouse,
    title: "Warehouse Management",
    description: "Penyimpanan dan pengelolaan stok dengan sistem terintegrasi",
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=600&q=80",
  },
  {
    icon: FileCheck,
    title: "Documentation & Compliance",
    description: "Kelengkapan dokumen pengiriman dan kepatuhan penuh terhadap regulasi",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
  },
]



export default function LogistikPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroHeader />
      <main className="flex-1">
        <DivisionHero
          badge="Divisi Logistik"
          headline="Distribusi & Fleet Management Terintegrasi"
          description="Manajemen distribusi energi dan material industri dengan pemantauan proses real-time, koordinasi armada profesional, dan alur dokumentasi yang jelas untuk memastikan ketepatan waktu."
          imageSrc="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80"
          imageAlt="Divisi Logistik Lumbung Energi Indonesia"
        />

        <ServicesCards 
          title="Layanan Logistik"
          description="Manajemen distribusi terintegrasi untuk efisiensi operasional Anda"
          services={services} 
        />

        <GalleryBento
          title="Dokumentasi Proyek"
          description="Portfolio layanan distribusi dan fleet management untuk berbagai kebutuhan industri"
          category="logistik"
        />

        <Section className="bg-gradient-to-b from-background via-muted/30 to-background">
          <Container>
            <div className="text-center mb-12">
              <h2 className="mb-6">
                Dipercaya oleh 500+ Perusahaan
              </h2>
              <p className="max-w-3xl mx-auto">
                Partner logistik terpercaya untuk distribusi material dan manajemen armada
              </p>
            </div>

            <div className="mb-20 overflow-hidden">
              <div className="space-y-8">
                <Marquee
                  pauseOnHover
                  className="[--duration:40s] [&_svg]:mr-10 mask-x-from-70% mask-x-to-90%"
                >
                  <Logo01 />
                  <Logo02 />
                  <Logo03 />
                  <Logo04 />
                  <Logo05 />
                  <Logo06 />
                  <Logo07 />
                  <Logo08 />
                </Marquee>
                <Marquee
                  pauseOnHover
                  reverse
                  className="[--duration:40s] [&_svg]:mr-10 mask-x-from-70% mask-x-to-90%"
                >
                  <Logo01 />
                  <Logo02 />
                  <Logo03 />
                  <Logo04 />
                  <Logo05 />
                  <Logo06 />
                  <Logo07 />
                  <Logo08 />
                </Marquee>
              </div>
            </div>
          </Container>
        </Section>

        <DivisionCTA 
          title="Optimalkan Distribusi Material Industri Anda"
          description="Percayakan pengelolaan logistik Anda kepada kami. Dengan sistem tracking real-time dan armada profesional—kami pastikan material Anda sampai tepat waktu."
        />
      </main>
      <Footer />
    </div>
  )
}
