"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Box, Wrench, Zap } from "lucide-react"

const features = [
  {
    icon: Box,
    title: "Pengadaan Energi & Material",
    description:
      "Supply batubara, biomassa, solar panel, dan peralatan industri dengan dokumentasi lengkap dan jaminan kualitas.",
    highlights: [
      "Sertifikasi Produk",
      "On-Time Delivery",
      "Quality Assurance",
    ],
  },
  {
    icon: Wrench,
    title: "Instalasi & Engineering",
    description:
      "Engineering design, instalasi sistem energi, piping, dan commissioning oleh tim bersertifikat dengan standar internasional.",
    highlights: [
      "HSE Compliance",
      "Technical Support",
      "Project Management",
    ],
  },
  {
    icon: Zap,
    title: "Sistem Energi Terbarukan",
    description:
      "Solusi PLTS (Solar PV) dan sistem energi terbarukan lainnya untuk efisiensi dan keberlanjutan operasional industri.",
    highlights: [
      "ROI Analysis",
      "Installation & Monitoring",
      "Maintenance",
    ],
  },
]

export function FeaturesSection() {
  return (
    <Section id="layanan" className="relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background -z-10" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
      
      <Container>
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            ⚡ Layanan Terintegrasi
          </Badge>
          <h2>
            Solusi <span className="text-primary">One-Stop</span> untuk Industri Anda
          </h2>
          <p className="mt-4 max-w-3xl mx-auto">
            Dari pengadaan hingga maintenance, kami menyediakan layanan komprehensif yang disesuaikan dengan kebutuhan spesifik proyek Anda.
          </p>
        </div>

        <div className="mt-10 w-full mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="flex flex-col border rounded-xl overflow-hidden shadow-none pb-0 hover:shadow-lg hover:shadow-primary/5 transition-all hover:-translate-y-1"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h4>
                  {feature.title}
                </h4>
                <p className="mt-2 text-base">
                  {feature.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {feature.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </CardHeader>
              <CardContent className="mt-auto px-0 pb-0">
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 h-32 ml-6 rounded-tl-xl" />
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
