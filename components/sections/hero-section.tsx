"use client"

import { Container } from "@/components/layout/container"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Download, Shield } from "lucide-react"

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleDownload = async () => {
    try {
      const response = await fetch("/api/download/company-profile")
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = "LEI-Company-Profile.pdf"
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
    } catch (error) {
      console.error("Download failed:", error)
    }
  }

  return (
    <section id="hero" className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden pt-8 pb-16 md:pb-24">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 -z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] -z-10" />
      
      <Container className="relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium">
            <Badge variant="secondary" className="px-2 py-0.5 text-xs">Baru Diluncurkan</Badge>
            <span className="text-foreground">Dipercaya oleh 500+ Klien Industri</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-6">
            <h1>
              Solusi Energi Industri{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                yang Terbukti
              </span>
            </h1>
            
            <p className="max-w-3xl mx-auto">
              Kami membantu proyek Anda berjalan aman, tepat waktu, dan sesuai regulasi—dengan tim berpengalaman dan standar mutu yang konsisten.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("kontak")}
              className="group text-base h-12 px-8 shadow-lg hover:shadow-xl transition-all"
            >
              Hubungi Sales
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleDownload}
              className="text-base h-12 px-8"
            >
              <Download className="mr-2 h-4 w-4" />
              Unduh Company Profile
            </Button>
          </div>

          {/* Trust Teaser */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" />
              <span>Respon cepat &lt;4 jam kerja</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" />
              <span>Sertifikasi HSE & Quality</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
