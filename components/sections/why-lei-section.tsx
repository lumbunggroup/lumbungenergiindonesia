"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Shield, Clock, Zap, Users, Award, TrendingUp, Target, Sparkles } from "lucide-react"

const stats = [
  {
    value: "500+",
    label: "Proyek Terselesaikan",
    icon: Target,
  },
  {
    value: "15+",
    label: "Tahun Pengalaman",
    icon: TrendingUp,
  },
  {
    value: "98%",
    label: "Tingkat Kepuasan",
    icon: Award,
  },
  {
    value: "24/7",
    label: "Support Tersedia",
    icon: Clock,
  },
]

const benefits = [
  {
    icon: CheckCircle2,
    title: "Terbukti di Lapangan",
    description: "Ratusan proyek industri sukses dengan track record yang solid dan testimoni klien terpercaya.",
  },
  {
    icon: Shield,
    title: "Standar HSE Terjamin",
    description: "Sertifikasi ISO 9001 & prosedur K3L yang ketat untuk memastikan keselamatan di setiap tahap proyek.",
  },
  {
    icon: Zap,
    title: "Respons Ultra Cepat",
    description: "Tim sales & engineer siap merespons inquiry dalam <4 jam kerja untuk kebutuhan mendesak.",
  },
  {
    icon: Users,
    title: "One-Stop Solution",
    description: "Dari konsultasi, pengadaan, instalasi hingga maintenance—semua dalam satu koordinasi tim.",
  },
  {
    icon: Award,
    title: "Dokumentasi Lengkap",
    description: "Laporan, sertifikat, dan dokumentasi proyek yang rapi untuk kemudahan audit dan compliance.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Project management yang solid dengan komitmen deadline dan milestone yang terjaga.",
  },
]

export function WhyLEISection() {
  return (
    <Section id="tentang" className="relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -z-10" />
      
      <Container>
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <Badge variant="outline" className="mb-4">
            <Sparkles className="h-3 w-3 mr-1" />
            Keunggulan Kompetitif
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Mengapa Memilih <span className="text-primary">Lumbung Energi Indonesia</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Lebih dari sekadar vendor—kami adalah mitra strategis yang berkomitmen pada kesuksesan proyek Anda
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div 
                key={index} 
                className="relative group bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg hover:shadow-primary/5 transition-all hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold mb-2 text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div key={index} className="group flex flex-col items-start space-y-4 p-6 rounded-xl hover:bg-card/50 transition-colors">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Section */}
        <div className="mt-20 pt-12 border-t border-border">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-bold text-lg mb-2">Sertifikasi Resmi</h4>
              <p className="text-sm text-muted-foreground">ISO 9001, K3L, dan compliance penuh dengan regulasi industri</p>
            </div>
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-bold text-lg mb-2">Tim Profesional</h4>
              <p className="text-sm text-muted-foreground">Engineer bersertifikat dan teknisi berpengalaman di lapangan</p>
            </div>
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-bold text-lg mb-2">Garansi & Support</h4>
              <p className="text-sm text-muted-foreground">Jaminan kualitas dengan layanan after-sales yang responsif</p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
