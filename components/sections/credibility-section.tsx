"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Badge } from "@/components/ui/badge"
import { Quote, Users, Star } from "lucide-react"
import { Marquee } from "@/components/ui/marquee"
import { TextAnimate } from "@/components/ui/text-animate"
import { motion } from "motion/react"
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
    <Section className="relative overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background">
      {/* Decorative Background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
      
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="outline" className="mb-4">
              <Users className="h-3 w-3 mr-1" />
              Testimoni & Kredibilitas
            </Badge>
          </motion.div>
          <TextAnimate
            animation="blurInUp"
            by="word"
            delay={0.1}
            duration={0.6}
            startOnView
            once
            className="mb-6"
            as="h2"
          >
            Dipercaya oleh 500+ Perusahaan
          </TextAnimate>
          <TextAnimate
            animation="blurInUp"
            by="word"
            delay={0.3}
            duration={0.8}
            startOnView
            once
            className="max-w-3xl mx-auto"
            as="p"
          >
            Bergabung dengan perusahaan-perusahaan terkemuka yang mempercayai kami untuk solusi energi mereka
          </TextAnimate>
        </div>

        {/* Client Logos - Marquee */}
        <motion.div 
          className="mb-20 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
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
        </motion.div>

        {/* Testimonials Grid */}
        <div className="mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="h-full"
              >
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
                  <TextAnimate
                    animation="blurInUp"
                    by="word"
                    delay={0.1}
                    duration={0.7}
                    startOnView
                    once
                    className="text-muted-foreground mb-6 leading-relaxed flex-1 min-h-[8rem]"
                    as="p"
                  >
                    {`"${testimonial.quote}"`}
                  </TextAnimate>
                  
                  {/* Author */}
                  <div className="pt-4 border-t border-border mt-auto">
                    <TextAnimate
                      animation="blurInUp"
                      by="word"
                      delay={0.3}
                      duration={0.5}
                      startOnView
                      once
                      className="font-bold text-foreground"
                      as="p"
                    >
                      {testimonial.name}
                    </TextAnimate>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-muted-foreground mt-1">{testimonial.company}</p>
                  </div>
                </div>
              </div>
              </motion.div>
            ))}
          </div>
        </div>


      </Container>
    </Section>
  )
}
