"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Quote, Star } from "lucide-react"
import { Marquee } from "@/components/ui/marquee"
import {
  Logo01,
  Logo02,
  Logo03,
  Logo04,
  Logo05,
  Logo06,
  Logo07,
  Logo08,
} from "@/components/logos-07/logos"

const testimonials = [
  {
    quote: "LEI memberikan solusi yang tepat untuk kebutuhan energi pabrik kami. Tim mereka sangat responsif dan profesional dalam menangani instalasi PLTS kami.",
    name: "Budi Santoso",
    role: "Procurement Manager",
    company: "PT Manufaktur Jaya",
    rating: 5,
  },
  {
    quote: "Dokumentasi lengkap dan standar HSE yang ketat membuat kami yakin memilih LEI sebagai partner. Proyek selesai tepat waktu dan sesuai spesifikasi.",
    name: "Siti Rahman",
    role: "Project Engineer",
    company: "PT Energi Nusantara",
    rating: 5,
  },
  {
    quote: "Dari pengadaan batubara hingga logistik, semuanya terkoordinasi dengan baik. Sangat membantu efisiensi operasional kami.",
    name: "Ahmad Wijaya",
    role: "Operations Director",
    company: "PT Industri Cemerlang",
    rating: 5,
  },
]

export function CredibilitySection() {
  return (
    <Section id="testimoni" className="relative overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background">
      {/* Decorative Background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
      
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="mb-6">
            Dipercaya oleh 500+ Perusahaan
          </h2>
          <p className="max-w-3xl mx-auto">
            Bergabung dengan perusahaan-perusahaan terkemuka yang mempercayai kami untuk solusi energi mereka
          </p>
        </div>

        {/* Client Logos - Marquee */}
        <div className="mb-20 overflow-hidden">
          <div className="space-y-8">
            <Marquee
              pauseOnHover
              className="[--duration:40s] [&_svg]:mr-10 mask-x-from-70% mask-x-to-90%"
            >
              <Logo01 />
              <Logo02 />
              <Logo03 />
              <Logo04 />
              <Logo05 />
              <Logo06 />
              <Logo07 />
              <Logo08 />
            </Marquee>
            <Marquee
              pauseOnHover
              reverse
              className="[--duration:40s] [&_svg]:mr-10 mask-x-from-70% mask-x-to-90%"
            >
              <Logo01 />
              <Logo02 />
              <Logo03 />
              <Logo04 />
              <Logo05 />
              <Logo06 />
              <Logo07 />
              <Logo08 />
            </Marquee>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="h-full">
                <div className="group relative h-full flex flex-col bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:shadow-primary/5 transition-all hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                
                <div className="relative z-10 flex flex-col h-full">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  
                  {/* Quote Icon */}
                  <Quote className="h-10 w-10 text-primary/20 mb-4" />
                  
                  {/* Testimonial */}
                  <p className="text-muted-foreground mb-6 leading-relaxed flex-1 min-h-[8rem]">
                    {`"${testimonial.quote}"`}
                  </p>
                  
                  {/* Author */}
                  <div className="pt-4 border-t border-border mt-auto">
                    <p className="font-bold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-muted-foreground mt-1">{testimonial.company}</p>
                  </div>
                </div>
              </div>
              </div>
            ))}
          </div>
        </div>


      </Container>
    </Section>
  )
}
