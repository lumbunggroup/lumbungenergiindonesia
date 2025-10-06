"use client"

import Image from "next/image"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Badge } from "@/components/ui/badge"
import { Quote, Award, Users, Star, Shield, CheckCircle2 } from "lucide-react"

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

const certifications = [
  {
    icon: Shield,
    title: "ISO 9001:2015",
    description: "Quality Management System",
  },
  {
    icon: CheckCircle2,
    title: "SMK3",
    description: "Sistem Manajemen K3",
  },
  {
    icon: Award,
    title: "IUP-OPK",
    description: "Izin Usaha Pertambangan",
  },
]

export function CredibilitySection() {
  const partnerLogos = [
    "Pertamina",
    "PLN",
    "Pupuk Indonesia",
    "Semen Indonesia",
    "Krakatau Steel",
    "Freeport",
  ]

  return (
    <Section className="relative overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background">
      {/* Decorative Background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
      
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Users className="h-3 w-3 mr-1" />
            Testimoni & Kredibilitas
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Dipercaya oleh <span className="text-primary">500+ Perusahaan</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bergabung dengan perusahaan-perusahaan terkemuka yang mempercayai kami untuk solusi energi mereka
          </p>
        </div>

        {/* Client Logos - Simplified */}
        <div className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partnerLogos.map((partner, i) => (
              <div
                key={i}
                className="flex items-center justify-center h-16 px-6 rounded-xl bg-card border border-border hover:shadow-md transition-all group"
              >
                <span className="text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="group relative bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:shadow-primary/5 transition-all hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                
                <div className="relative z-10">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  
                  {/* Quote Icon */}
                  <Quote className="h-10 w-10 text-primary/20 mb-4" />
                  
                  {/* Testimonial */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  
                  {/* Author */}
                  <div className="pt-4 border-t border-border">
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-muted-foreground mt-1">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <Award className="h-3 w-3 mr-1" />
              Sertifikasi & Legalitas
            </Badge>
            <h3 className="text-3xl font-bold mb-4">
              Beroperasi dengan Standar Internasional
            </h3>
            <p className="text-muted-foreground">
              Sertifikasi dan izin resmi yang menjamin kualitas dan kepatuhan regulasi
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon
              return (
                <div 
                  key={index} 
                  className="flex flex-col items-center text-center p-8 rounded-2xl bg-card border border-border hover:shadow-lg hover:border-primary/50 transition-all"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">{cert.title}</h4>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </Section>
  )
}
