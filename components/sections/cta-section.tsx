"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { FileText, Phone, ArrowRight, CheckCircle2, Clock, MessageSquare } from "lucide-react"

export function CTASection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <Section id="unduh" className="relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent -z-10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 -z-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl -z-10" />
      
      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 text-primary-foreground">
            <h2 className="mb-6 text-primary-foreground">
              Mulai Proyek Energi Anda Bersama Kami
            </h2>
            <p className="max-w-3xl mx-auto text-primary-foreground/90">
              Konsultasi gratis, penawaran kompetitif, dan solusi yang disesuaikan dengan kebutuhan spesifik Anda
            </p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="text-center text-primary-foreground">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 mb-3">
                <Clock className="h-6 w-6" />
              </div>
              <div className="text-2xl font-bold mb-1">&lt;4 Jam</div>
              <div className="text-sm text-primary-foreground/80">Respons Tim</div>
            </div>
            <div className="text-center text-primary-foreground">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 mb-3">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <div className="text-2xl font-bold mb-1">100%</div>
              <div className="text-sm text-primary-foreground/80">Gratis</div>
            </div>
            <div className="text-center text-primary-foreground">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 mb-3">
                <MessageSquare className="h-6 w-6" />
              </div>
              <div className="text-2xl font-bold mb-1">24/7</div>
              <div className="text-sm text-primary-foreground/80">Via WhatsApp</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={() => scrollToSection("kontak")}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-primary rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-black/20 transition-all hover:scale-105"
            >
              <Phone className="h-5 w-5" />
              Konsultasi Gratis Sekarang
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => {
                window.open("/api/download/company-profile", "_blank")
              }}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-white/30 text-primary-foreground rounded-xl font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all"
            >
              <FileText className="h-5 w-5" />
              Unduh Company Profile
            </button>
          </div>

          {/* Trust Elements */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-6 border-t border-white/20 text-primary-foreground/80 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4" />
              <span>Tanpa Komitmen</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4" />
              <span>Respons Cepat</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4" />
              <span>Penawaran Kompetitif</span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
