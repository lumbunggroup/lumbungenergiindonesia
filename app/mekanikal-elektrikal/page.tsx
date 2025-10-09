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
import { PenTool, Wrench, Cog, Building } from "lucide-react"
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
  title: "Divisi Mekanikal & Elektrikal - PT Lumbung Energi Indonesia",
  description: "Engineering design dan technical excellence. Layanan instalasi sistem ME, piping, fabrikasi mesin, commissioning, dan konstruksi sipil dengan standar HSE ketat.",
  openGraph: {
    title: "Divisi Mekanikal & Elektrikal - PT Lumbung Energi Indonesia",
    description: "Engineering design dan technical excellence untuk proyek industri Anda. Instalasi sistem ME, piping, fabrikasi mesin, dan commissioning dengan standar HSE ketat.",
    type: "website",
    locale: "id_ID",
    siteName: "PT Lumbung Energi Indonesia",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/mekanikal-elektrikal`,
    images: [
      {
        url: "https://31erzxwc41uobyzd.public.blob.vercel-storage.com/lumbungenergiindonesia.webp",
        width: 1200,
        height: 630,
        alt: "Divisi Mekanikal & Elektrikal - Lumbung Energi Indonesia",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Divisi Mekanikal & Elektrikal - PT Lumbung Energi Indonesia",
    description: "Engineering design dan technical excellence untuk proyek industri Anda. Instalasi sistem ME, piping, fabrikasi mesin, dan commissioning dengan standar HSE ketat.",
    images: ["https://31erzxwc41uobyzd.public.blob.vercel-storage.com/lumbungenergiindonesia.webp"],
  },
}

const services = [
  {
    icon: PenTool,
    title: "Engineering Design",
    description: "Desain sistem mekanikal, elektrikal, dan piping sesuai standar industri internasional",
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&q=80",
  },
  {
    icon: Wrench,
    title: "Instalasi & Commissioning",
    description: "Pemasangan sistem ME, pengujian menyeluruh, dan serah terima terdokumentasi",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80",
  },
  {
    icon: Cog,
    title: "Fabrikasi Mesin",
    description: "Manufaktur komponen dan mesin custom sesuai spesifikasi proyek Anda",
    image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=600&q=80",
  },
  {
    icon: Building,
    title: "Konstruksi Sipil",
    description: "Pembangunan infrastruktur pendukung operasional industri yang kokoh",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80",
  },
]

const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80",
    alt: "Instalasi sistem piping",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
    alt: "Perakitan panel elektrikal",
  },
  {
    src: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&q=80",
    alt: "Workshop fabrikasi mesin",
  },
  {
    src: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
    alt: "Lokasi konstruksi",
    className: "md:col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80",
    alt: "Proses commissioning",
  },
  {
    src: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80",
    alt: "Kepatuhan HSE di lapangan",
  },
]

export default function MekanikalElektrikalPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroHeader />
      <main className="flex-1">
        <DivisionHero
          badge="Divisi Mekanikal & Elektrikal"
          headline="Engineering Design & Technical Excellence"
          description="Dari konsep hingga commissioning—layanan engineering, instalasi, dan fabrikasi dengan standar HSE ketat dan tim berpengalaman untuk memastikan keberhasilan proyek Anda."
          imageSrc="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&q=80"
          imageAlt="Divisi Mekanikal & Elektrikal Lumbung Energi Indonesia"
        />

        <ServicesCards 
          title="Layanan Mekanikal & Elektrikal"
          description="Solusi engineering lengkap dari desain hingga commissioning"
          services={services} 
        />

        <GalleryBento
          title="Dokumentasi Proyek"
          description="Portfolio proyek engineering dan instalasi ME yang telah kami selesaikan"
          items={galleryItems}
        />

        <Section className="bg-gradient-to-b from-background via-muted/30 to-background">
          <Container>
            <div className="text-center mb-12">
              <h2 className="mb-6">
                Dipercaya oleh 500+ Perusahaan
              </h2>
              <p className="max-w-3xl mx-auto">
                Partner terpercaya untuk proyek engineering dan instalasi di berbagai industri
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
          title="Tingkatkan Efisiensi Fasilitas Industri Anda"
          description="Percayakan kebutuhan engineering dan instalasi ME Anda kepada tim profesional kami. Dari desain hingga commissioning—kami pastikan proyek Anda sukses."
        />
      </main>
      <Footer />
    </div>
  )
}
