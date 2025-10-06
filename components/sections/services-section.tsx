"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Badge } from "@/components/ui/badge"
import { Package, Wrench, Lightbulb, ArrowRight, Zap, Settings, Users } from "lucide-react"

const services = [
  {
    icon: Package,
    title: "Pengadaan Energi & Material",
    description: "Supply batubara, biomassa, solar panel, dan peralatan industri dengan dokumentasi lengkap dan jaminan kualitas.",
    features: ["Sertifikasi Produk", "On-Time Delivery", "Quality Assurance"],
    color: "from-blue-500/10 to-cyan-500/10",
    iconColor: "text-blue-600"
  },
  {
    icon: Wrench,
    title: "Instalasi & Engineering",
    description: "Engineering design, instalasi sistem energi, piping, dan commissioning oleh tim bersertifikat dengan standar internasional.",
    features: ["HSE Compliance", "Technical Support", "Project Management"],
    color: "from-purple-500/10 to-pink-500/10",
    iconColor: "text-purple-600"
  },
  {
    icon: Zap,
    title: "Sistem Energi Terbarukan",
    description: "Solusi PLTS (Solar PV) dan sistem energi terbarukan lainnya untuk efisiensi dan keberlanjutan operasional industri.",
    features: ["ROI Analysis", "Installation & Monitoring", "Maintenance"],
    color: "from-amber-500/10 to-orange-500/10",
    iconColor: "text-amber-600"
  },
  {
    icon: Settings,
    title: "Maintenance & Support",
    description: "Layanan perawatan preventif, inspeksi berkala, dan dukungan teknis untuk memaksimalkan uptime dan lifetime aset.",
    features: ["Scheduled Maintenance", "24/7 Support", "Spare Parts"],
    color: "from-emerald-500/10 to-green-500/10",
    iconColor: "text-emerald-600"
  },
  {
    icon: Users,
    title: "Logistik & Distribusi",
    description: "Manajemen logistik terintegrasi untuk distribusi batubara, biomassa, dan material industri dengan armada yang handal.",
    features: ["Fleet Management", "Real-time Tracking", "Safety Standards"],
    color: "from-rose-500/10 to-red-500/10",
    iconColor: "text-rose-600"
  },
  {
    icon: Lightbulb,
    title: "Konsultasi Teknis",
    description: "Analisis kebutuhan, feasibility study, dan rekomendasi solusi optimal untuk proyek energi dan engineering Anda.",
    features: ["Technical Assessment", "Cost Analysis", "Solution Design"],
    color: "from-indigo-500/10 to-violet-500/10",
    iconColor: "text-indigo-600"
  },
]

export function ServicesSection() {
  const scrollToContact = () => {
    const element = document.getElementById("kontak")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <Section id="layanan" className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background -z-10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
      
      <Container>
        <div className="text-center mb-16 lg:mb-20">
          <Badge variant="outline" className="mb-4">
            <Zap className="h-3 w-3 mr-1" />
            Layanan Terintegrasi
          </Badge>
          <h2 className="mb-6">
            Solusi <span className="text-primary">One-Stop</span> untuk Industri Anda
          </h2>
          <p className="max-w-3xl mx-auto">
            Dari pengadaan hingga maintenance, kami menyediakan layanan komprehensif yang disesuaikan dengan kebutuhan spesifik proyek Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div 
                key={index} 
                className="group relative bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6 w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className={`h-7 w-7 ${service.iconColor}`} />
                  </div>
                  
                  {/* Title & Description */}
                  <h4 className="mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h4>
                  <p className="mb-6 text-base">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA */}
                  <button 
                    onClick={scrollToContact}
                    className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all"
                  >
                    Konsultasi Gratis
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-8 border-t border-border">
          <p className="text-muted-foreground mb-6">
            Butuh solusi custom untuk proyek Anda?
          </p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium hover:shadow-lg hover:shadow-primary/20 transition-all"
          >
            Hubungi Tim Kami
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </Container>
    </Section>
  )
}
