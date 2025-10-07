"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const divisions = [
  {
    category: "Divisi Energi",
    title: "Solusi Energi Andal & Berkelanjutan",
    details:
      "Pasokan batubara dan biomassa (cangkang sawit) yang konsisten, plus solusi PLTS skala industri. Fokus pada kualitas pasokan, kepatuhan, dan ketepatan pengiriman.",
    ctaLink: "#kontak",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
  },
  {
    category: "Divisi Mekanikal & Elektrikal (ME)",
    title: "Engineering Design & Technical Excellence",
    details:
      "Layanan engineering design, instalasi sistem ME & piping, fabrikasi mesin, commissioning, dan proyek konstruksi sipil dengan standar HSE dan implementasi di lapangan.",
    ctaLink: "#kontak",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
  },
  {
    category: "Divisi Teknologi Informasi (TI)",
    title: "Solusi IT & Digital Infrastructure",
    details:
      "Layanan pengadaan perangkat keras, pengembangan jaringan, instalasi sistem keamanan, SOC, server management, dan IT support berkelanjutan untuk operasional bisnis modern.",
    ctaLink: "#kontak",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
  },
  {
    category: "Divisi Logistik",
    title: "Distribusi & Fleet Management Terintegrasi",
    details:
      "Manajemen distribusi untuk energi dan material industri dengan pemantauan proses, koordinasi armada, dan alur dokumentasi yang jelas.",
    ctaLink: "#kontak",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  },
]

export function DivisionsSection() {
  return (
    <Section id="divisi" className="relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background -z-10" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
      
      <Container>
        <div className="text-center mb-16">
          <h2>
            Perkuat Strategi Bisnis Anda
          </h2>
          <p className="mt-4 max-w-3xl mx-auto">
            LEI menyediakan rantai layanan end-to-end: pasokan energi (batubara & biomassa), desain/instalasi PLTS (Pembangkit Listrik Tenaga Surya), ME (Mekanikal & Elektrikal), TI (Teknologi Informasi), serta logistik multi-komoditas.
          </p>
        </div>

        <div className="mt-8 md:mt-16 w-full mx-auto space-y-20">
          {divisions.map((division) => (
            <div
              key={division.category}
              className="flex flex-col md:flex-row items-center gap-x-12 gap-y-6 md:even:flex-row-reverse"
            >
              <div className="w-full aspect-[4/3] rounded-xl border border-border/50 basis-1/2 overflow-hidden relative">
                <Image
                  src={division.image}
                  alt={division.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="basis-1/2 shrink-0">
                <span className="uppercase font-medium text-sm text-muted-foreground">
                  {division.category}
                </span>
                <h3 className="my-3">
                  {division.title}
                </h3>
                <p className="text-base">
                  {division.details}
                </p>
                <div>
                  <Button asChild size="lg" className="mt-6">
                  <Link 
                    href={division.ctaLink}
                    onClick={(e) => {
                      e.preventDefault()
                      const element = document.querySelector(division.ctaLink)
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" })
                      }
                    }}
                  >
                    Pelajari Lebih Lanjut <ArrowRight />
                  </Link>
                </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
