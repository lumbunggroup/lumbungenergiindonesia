"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { TextAnimate } from "@/components/ui/text-animate"
import { motion } from "motion/react"

const divisions = [
  {
    category: "Divisi Energi",
    title: "Solusi Energi Terpercaya & Berkelanjutan",
    details:
      "Menyediakan batubara berkualitas tinggi dan biomassa berkelanjutan untuk kebutuhan energi industri Anda. Dengan dokumentasi lengkap, sertifikasi produk, dan jaminan kualitas, kami memastikan pasokan energi yang konsisten, efisien, dan on-time delivery.",
    ctaLink: "#kontak",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
  },
  {
    category: "Divisi ME & IT Support",
    title: "Engineering Design & Technical Excellence",
    details:
      "Layanan engineering design, instalasi sistem ME, piping, commissioning, dan IT support dengan standar internasional. Tim bersertifikat kami siap menangani proyek dari perencanaan hingga implementasi dengan HSE compliance dan technical support berkelanjutan.",
    ctaLink: "#kontak",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
  },
  {
    category: "Divisi Logistik",
    title: "Distribusi & Fleet Management Terintegrasi",
    details:
      "Solusi logistik dan distribusi yang handal untuk batubara, biomassa, dan material industri. Dilengkapi fleet management modern, real-time tracking, dan kepatuhan pada standar keselamatan untuk memastikan pengiriman tepat waktu dan aman.",
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="outline" className="mb-4">
              🏢 Divisi Kami
            </Badge>
          </motion.div>
          <TextAnimate
            animation="blurInUp"
            by="word"
            delay={0.1}
            duration={0.6}
            startOnView
            once
            as="h2"
          >
            Perkuat Strategi Bisnis Anda
          </TextAnimate>
          <TextAnimate
            animation="blurInUp"
            by="word"
            delay={0.3}
            duration={0.8}
            startOnView
            once
            className="mt-4 max-w-3xl mx-auto"
            as="p"
          >
            Tingkatkan strategi Anda dengan solusi terintegrasi yang dirancang untuk kesuksesan industri.
          </TextAnimate>
        </div>

        <div className="mt-8 md:mt-16 w-full mx-auto space-y-20">
          {divisions.map((division) => (
            <div
              key={division.category}
              className="flex flex-col md:flex-row items-center gap-x-12 gap-y-6 md:even:flex-row-reverse"
            >
              <motion.div 
                className="w-full aspect-[4/3] rounded-xl border border-border/50 basis-1/2 overflow-hidden relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Image
                  src={division.image}
                  alt={division.title}
                  fill
                  className="object-cover"
                />
              </motion.div>
              <div className="basis-1/2 shrink-0">
                <TextAnimate
                  animation="blurInUp"
                  by="word"
                  delay={0.1}
                  duration={0.4}
                  startOnView
                  once
                  className="uppercase font-medium text-sm text-muted-foreground"
                  as="span"
                >
                  {division.category}
                </TextAnimate>
                <TextAnimate
                  animation="blurInUp"
                  by="word"
                  delay={0.3}
                  duration={0.6}
                  startOnView
                  once
                  className="my-3"
                  as="h3"
                >
                  {division.title}
                </TextAnimate>
                <TextAnimate
                  animation="blurInUp"
                  by="word"
                  delay={0.5}
                  duration={0.8}
                  startOnView
                  once
                  className="text-base"
                  as="p"
                >
                  {division.details}
                </TextAnimate>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
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
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
