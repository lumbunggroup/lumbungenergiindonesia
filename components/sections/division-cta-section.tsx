"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileText } from "lucide-react"
import Link from "next/link"

interface DivisionCTASectionProps {
  title?: string
  description?: string
}

export function DivisionCTASection({ 
  title = "Siap Memulai Proyek Bersama Kami?",
  description = "Diskusikan kebutuhan Anda dengan tim ahli kami atau unduh company profile untuk informasi lengkap tentang layanan kami."
}: DivisionCTASectionProps) {
  const scrollToContact = () => {
    // Scroll to contact section or navigate to home
    const contactSection = document.getElementById("kontak")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    } else {
      // If not on home page, navigate to home with contact hash
      window.location.href = "/#kontak"
    }
  }

  return (
    <Section className="relative overflow-hidden bg-primary">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary -z-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-10" />
      
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6 text-primary-foreground">
            {title}
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-primary-foreground/90 mb-12">
            {description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="group bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all h-14 px-8 text-base"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="group bg-white text-primary border-white hover:bg-white/90 hover:scale-105 transition-all h-14 px-8 text-base"
            >
              <Link
                href="https://31erzxwc41uobyzd.public.blob.vercel-storage.com/LEI%20-%20Company%20Profile%202025.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="mr-2 h-5 w-5" />
                Company Profile
              </Link>
            </Button>
          </div>

          {/* Trust Elements */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-8 mt-8 border-t border-white/20 text-primary-foreground/80 text-sm">
            <span>✓ Konsultasi Gratis</span>
            <span>✓ Respons Cepat</span>
            <span>✓ Solusi Terpercaya</span>
          </div>
        </div>
      </Container>
    </Section>
  )
}
