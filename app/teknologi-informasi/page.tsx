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
import { Server, Network, Shield, Headphones } from "lucide-react"
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
  title: "Divisi Teknologi Informasi - PT Lumbung Energi Indonesia",
  description: "Solusi IT dan digital infrastructure. Pengadaan hardware, network infrastructure, security & SOC, dan managed IT support untuk operasional bisnis modern.",
  openGraph: {
    title: "Divisi Teknologi Informasi - PT Lumbung Energi Indonesia",
    description: "Infrastruktur IT yang andal untuk mendukung operasional bisnis modern",
    images: [
      {
        url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Divisi Teknologi Informasi LEI",
      },
    ],
  },
}

const services = [
  {
    icon: Server,
    title: "Pengadaan Hardware",
    description: "Procurement komputer, server, dan perangkat jaringan berkualitas tinggi",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
  },
  {
    icon: Network,
    title: "Network Infrastructure",
    description: "Desain dan implementasi jaringan LAN, WAN, dan wireless enterprise-grade",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80",
  },
  {
    icon: Shield,
    title: "Security & SOC",
    description: "Sistem keamanan siber, monitoring 24/7, dan incident response cepat",
    image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=600&q=80",
  },
  {
    icon: Headphones,
    title: "Managed IT Support",
    description: "Maintenance berkelanjutan, helpdesk responsif, dan server management",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80",
  },
]

const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    alt: "Instalasi server rack",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
    alt: "Network cabling",
  },
  {
    src: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=800&q=80",
    alt: "Sistem keamanan CCTV",
  },
  {
    src: "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=800&q=80",
    alt: "SOC monitoring center",
    className: "md:col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80",
    alt: "Tim IT support",
  },
  {
    src: "https://images.unsplash.com/photo-1562408590-e32931084e23?w=800&q=80",
    alt: "Infrastruktur data center",
  },
]

export default function TeknologiInformasiPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroHeader />
      <main className="flex-1">
        <DivisionHero
          badge="Divisi Teknologi Informasi"
          headline="Solusi IT & Digital Infrastructure"
          description="Infrastruktur IT yang andal untuk mendukung operasional bisnis modern—dari hardware hingga cybersecurity dengan dukungan teknis berkelanjutan."
          imageSrc="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80"
          imageAlt="Divisi Teknologi Informasi Lumbung Energi Indonesia"
        />

        <ServicesCards 
          title="Layanan Teknologi Informasi"
          description="Infrastruktur IT yang andal untuk operasional bisnis modern"
          services={services} 
        />

        <GalleryBento
          title="Dokumentasi Proyek"
          description="Portfolio implementasi IT infrastructure dan security solutions"
          items={galleryItems}
        />

        <Section className="bg-gradient-to-b from-background via-muted/30 to-background">
          <Container>
            <div className="text-center mb-12">
              <h2 className="mb-6">
                Dipercaya oleh 500+ Perusahaan
              </h2>
              <p className="max-w-3xl mx-auto">
                Mitra terpercaya untuk solusi IT dan digital infrastructure di berbagai industri
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
          title="Modernisasi Infrastruktur IT Perusahaan Anda"
          description="Tingkatkan keamanan dan efisiensi operasional bisnis dengan solusi IT terpadu kami. Dari hardware hingga cybersecurity—kami siap mendukung transformasi digital Anda."
        />
      </main>
      <Footer />
    </div>
  )
}
