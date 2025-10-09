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
import { Zap, Leaf, Sun, TrendingUp } from "lucide-react"
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
  title: "Divisi Energi - PT Lumbung Energi Indonesia",
  description: "Solusi energi andal dan berkelanjutan. Pasokan batubara, biomassa (cangkang sawit), dan instalasi PLTS skala industri dengan standar kualitas tinggi.",
  openGraph: {
    title: "Divisi Energi - PT Lumbung Energi Indonesia",
    description: "Solusi energi andal dan berkelanjutan untuk kebutuhan industri Anda",
    images: [
      {
        url: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Divisi Energi LEI",
      },
    ],
  },
}

const services = [
  {
    icon: Zap,
    title: "Pasokan Batubara",
    description: "Batubara kalori tinggi dengan dokumentasi lengkap dan konsistensi pasokan terjamin",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80",
  },
  {
    icon: Leaf,
    title: "Biomassa (Cangkang Sawit)",
    description: "Alternatif energi ramah lingkungan untuk kebutuhan industri berkelanjutan",
    image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=600&q=80",
  },
  {
    icon: Sun,
    title: "PLTS (Solar Power)",
    description: "Desain, instalasi, dan commissioning sistem pembangkit listrik tenaga surya skala industri",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80",
  },
  {
    icon: TrendingUp,
    title: "Konsultasi Energi",
    description: "Konsultasi pemilihan sumber energi optimal dan audit efisiensi energi",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  },
]

const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
    alt: "Fasilitas penyimpanan batubara",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&q=80",
    alt: "Biomassa cangkang sawit",
  },
  {
    src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    alt: "Instalasi panel surya industri",
  },
  {
    src: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80",
    alt: "PLTS rooftop skala besar",
    className: "md:col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&q=80",
    alt: "Armada pengiriman energi",
  },
  {
    src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
    alt: "Kontrol kualitas laboratorium",
  },
]

export default function EnergiPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroHeader />
      <main className="flex-1">
        <DivisionHero
          badge="Divisi Energi"
          headline="Solusi Energi Andal & Berkelanjutan"
          description="Dari pasokan batubara dan biomassa hingga instalasi PLTS industri—kami hadirkan energi yang tepat untuk kebutuhan Anda dengan standar kualitas tinggi dan kepatuhan penuh terhadap regulasi."
          imageSrc="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&q=80"
          imageAlt="Divisi Energi Lumbung Energi Indonesia"
        />

        <ServicesCards 
          title="Layanan Divisi Energi"
          description="Solusi energi lengkap untuk kebutuhan industri Anda"
          services={services} 
        />

        <GalleryBento
          title="Dokumentasi Proyek"
          description="Portofolio proyek energi yang telah kami kerjakan untuk berbagai industri"
          items={galleryItems}
        />

        <Section className="bg-gradient-to-b from-background via-muted/30 to-background">
          <Container>
            <div className="text-center mb-12">
              <h2 className="mb-6">
                Dipercaya oleh 500+ Perusahaan
              </h2>
              <p className="max-w-3xl mx-auto">
                Berbagai perusahaan di sektor industri mempercayai kami untuk solusi energi mereka
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
          title="Wujudkan Proyek Energi Anda Bersama Kami"
          description="Konsultasikan kebutuhan energi industri Anda dengan tim ahli kami. Dari batubara, biomassa, hingga PLTS—kami siap memberikan solusi terbaik."
        />
      </main>
      <Footer />
    </div>
  )
}
