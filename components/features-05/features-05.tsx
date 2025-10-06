"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Flame, Sun, Truck, Cog, Shield, Headphones } from "lucide-react"
import { TextAnimate } from "@/components/ui/text-animate"
import { motion } from "motion/react"
import Image from "next/image"

const features = [
  {
    icon: Flame,
    title: "Perdagangan Energi (Batubara & Biomassa)",
    description:
      "Kami menyediakan pasokan energi batubara dan biomassa (cangkang sawit) berkualitas tinggi dengan jaminan legalitas dan rantai pasok yang andal.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80",
  },
  {
    icon: Sun,
    title: "Solusi Energi Terbarukan (PLTS)",
    description:
      "Wujudkan transisi energi bersih Anda melalui solusi Pembangkit Listrik Tenaga Surya (PLTS) yang kami desain dan instal untuk skala industri maupun komersial.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80",
  },
  {
    icon: Truck,
    title: "Logistik Multi-Komoditas",
    description:
      "Jasa angkutan terintegrasi untuk berbagai jenis komoditas, mulai dari batubara, mineral, pangan, hingga material konstruksi, didukung armada modern dan izin resmi.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
  },
  {
    icon: Cog,
    title: "Jasa Mechanical Engineering",
    description:
      "Solusi teknik lengkap mulai dari fabrikasi mesin, instalasi sistem perpipaan, hingga proyek konstruksi sipil untuk meningkatkan efisiensi fasilitas industri Anda.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80",
  },
  {
    icon: Shield,
    title: "Solusi Infrastruktur & Keamanan IT",
    description:
      "Modernisasi operasional bisnis Anda dengan layanan pengadaan perangkat keras, pengembangan jaringan, serta instalasi sistem keamanan terintegrasi.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80",
  },
  {
    icon: Headphones,
    title: "Managed Services & Dukungan Teknis",
    description:
      "Pastikan operasional Anda berjalan lancar dengan layanan dukungan teknis dan pengelolaan sistem IT (SOC, server management) dan ME secara berkelanjutan.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80",
  },
]

const Features05 = () => {
  return (
    <Section id="layanan" className="relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background -z-10" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
      
      <Container>
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="outline" className="mb-4">
              ⚡ Layanan Terintegrasi
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
            Solusi One-Stop untuk Industri Anda
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
            Dari pengadaan hingga maintenance, kami menyediakan layanan komprehensif yang disesuaikan dengan kebutuhan spesifik proyek Anda.
          </TextAnimate>
        </div>

        <div className="mt-10 w-full mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="flex flex-col h-full border rounded-xl overflow-hidden shadow-none pb-0 hover:shadow-lg hover:shadow-primary/5 transition-all hover:-translate-y-1">
              <CardHeader className="flex-1">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <TextAnimate
                  animation="blurInUp"
                  by="word"
                  delay={0.1}
                  duration={0.5}
                  startOnView
                  once
                  as="h4"
                >
                  {feature.title}
                </TextAnimate>
                <TextAnimate
                  animation="blurInUp"
                  by="word"
                  delay={0.3}
                  duration={0.7}
                  startOnView
                  once
                  className="mt-2 text-base min-h-[4.5rem]"
                  as="p"
                >
                  {feature.description}
                </TextAnimate>
              </CardHeader>
              <CardContent className="mt-auto px-0 pb-0">
                <div className="relative h-40 ml-6 rounded-tl-xl overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </CardContent>
            </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default Features05;
