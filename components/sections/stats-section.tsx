"use client"

import { Container } from "@/components/layout/container"
import { CheckCircle2, Clock, Shield, TrendingUp, Users } from "lucide-react"

const stats = [
  {
    icon: CheckCircle2,
    value: "500+",
    label: "Proyek Selesai",
    description: "Beragam proyek industri dengan standar mutu konsisten",
  },
  {
    icon: Users,
    value: "200+",
    label: "Klien Aktif",
    description: "Kepercayaan dari perusahaan manufaktur dan infrastruktur",
  },
  {
    icon: Clock,
    value: "<4 Jam",
    label: "Respons Cepat",
    description: "Tim sales & teknis siap merespons kebutuhan Anda",
  },
  {
    icon: Shield,
    value: "100%",
    label: "Kepatuhan HSE",
    description: "Prosedur HSE dan dokumentasi sesuai regulasi",
  },
  {
    icon: TrendingUp,
    value: "15+ Tahun",
    label: "Pengalaman",
    description: "Track record terbukti di industri energi Indonesia",
  },
]

const features = [
  {
    title: "Terbukti di Lapangan",
    description: "Beragam proyek industri dengan standar mutu konsisten.",
  },
  {
    title: "Kepatuhan & Keselamatan",
    description: "Prosedur HSE dan dokumentasi sesuai regulasi.",
  },
  {
    title: "Tepat Waktu",
    description: "Perencanaan & eksekusi yang disiplin untuk memenuhi tenggat.",
  },
  {
    title: "Respons Cepat",
    description: "Tim sales & teknis siap merespons kebutuhan Anda.",
  },
  {
    title: "Satu Pintu",
    description: "Koordinasi pengadaan hingga commissioning dalam satu tim.",
  },
]

export function StatsSection() {
  return (
    <section id="tentang" className="py-20 md:py-28 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] -z-10" />
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl -z-10" />
      
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4">
            Mengapa Memilih{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Lumbung Energi Indonesia
            </span>
          </h2>
          <p className="max-w-3xl mx-auto">
            Komitmen kami untuk memberikan solusi energi industri yang aman, efisien, dan sesuai regulasi.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="group relative bg-card border border-border rounded-2xl p-6 text-center hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  
                  <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  
                  <div className="font-semibold mb-2">{stat.label}</div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Features List */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex gap-4 p-5 rounded-xl bg-card/50 border border-border/50 hover:bg-card hover:border-border transition-all"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
