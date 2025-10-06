"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageSquare, Phone, Mail } from "lucide-react"
import Link from "next/link"
import { TextAnimate } from "@/components/ui/text-animate"
import { motion } from "motion/react"

export function ContactFormLEI() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    topic: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section id="kontak" className="bg-muted/50 py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-7xl mx-auto">
          {/* Left Side - Contact Info */}
          <div className="space-y-12">
            <div>
              <TextAnimate
                animation="blurInUp"
                by="word"
                delay={0.1}
                duration={0.4}
                startOnView
                once
                className="text-sm mb-2"
                as="p"
              >
                Hubungi Tim Kami
              </TextAnimate>
              <TextAnimate
                animation="blurInUp"
                by="word"
                delay={0.3}
                duration={0.6}
                startOnView
                once
                as="h2"
              >
                Siap Membawa Proyek Anda ke Tahap Berikutnya?
              </TextAnimate>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-8">
              {/* Address */}
              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-card flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <TextAnimate
                    animation="blurInUp"
                    by="word"
                    delay={0.1}
                    duration={0.5}
                    startOnView
                    once
                    className="mb-2"
                    as="h4"
                  >
                    Kunjungi Kantor Kami
                  </TextAnimate>
                  <p className="text-base">
                    PT Lumbung Energi Indonesia
                  </p>
                  <p className="text-base">Jakarta, Indonesia</p>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-card flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <TextAnimate
                    animation="blurInUp"
                    by="word"
                    delay={0.1}
                    duration={0.5}
                    startOnView
                    once
                    className="mb-2"
                    as="h4"
                  >
                    Hubungi Kami Langsung
                  </TextAnimate>
                  <p className="text-base">Telepon: +62-XXX-XXXX-XXXX</p>
                  <p className="text-base">Fax: +62-XXX-XXXX-XXXX</p>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-card flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <TextAnimate
                    animation="blurInUp"
                    by="word"
                    delay={0.1}
                    duration={0.5}
                    startOnView
                    once
                    className="mb-2"
                    as="h4"
                  >
                    Email Kami
                  </TextAnimate>
                  <p className="text-base">sales@lumbungenergi.id</p>
                  <p className="text-base">info@lumbungenergi.id</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Side - Form */}
          <motion.div 
            className="bg-card rounded-2xl shadow-lg p-8 lg:p-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TextAnimate
              animation="blurInUp"
              by="word"
              delay={0.1}
              duration={0.6}
              startOnView
              once
              className="mb-8"
              as="h2"
            >
              Kirim Permintaan Anda
            </TextAnimate>
            <p className="text-muted-foreground mb-6">
              Isi formulir di bawah ini atau chat WhatsApp untuk respons lebih cepat.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label
                  htmlFor="fullName"
                  className="text-sm font-medium text-foreground block"
                >
                  Nama Lengkap *
                </label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Masukkan nama lengkap Anda"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="h-12 text-base"
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-foreground block"
                >
                  Email Kerja *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="nama@perusahaan.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="h-12 text-base"
                  required
                />
              </div>

              {/* Company */}
              <div className="space-y-2">
                <label
                  htmlFor="company"
                  className="text-sm font-medium text-foreground block"
                >
                  Perusahaan *
                </label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Nama perusahaan Anda"
                  value={formData.company}
                  onChange={handleChange}
                  className="h-12 text-base"
                  required
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-foreground block"
                >
                  Nomor Telepon
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+62 xxx-xxxx-xxxx"
                  value={formData.phone}
                  onChange={handleChange}
                  className="h-12 text-base"
                />
              </div>

              {/* Topic */}
              <div className="space-y-2">
                <label
                  htmlFor="topic"
                  className="text-sm font-medium text-foreground block"
                >
                  Topik
                </label>
                <select
                  id="topic"
                  name="topic"
                  value={formData.topic}
                  onChange={handleChange as any}
                  className="h-12 text-base w-full rounded-md border border-input bg-background px-3 py-2"
                >
                  <option value="">Pilih topik</option>
                  <option value="pengadaan">Pengadaan</option>
                  <option value="instalasi">Instalasi/Commissioning</option>
                  <option value="perawatan">Perawatan</option>
                  <option value="konsultasi">Konsultasi</option>
                  <option value="lainnya">Lainnya</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground block"
                >
                  Pesan *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Jelaskan kebutuhan proyek Anda"
                  value={formData.message}
                  onChange={handleChange}
                  className="min-h-32 text-base resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full"
              >
                Kirim Permintaan
              </Button>

              {/* Privacy Policy */}
              <p className="text-sm text-muted-foreground text-center">
                Data Anda hanya digunakan untuk menindaklanjuti permintaan ini. Lihat{" "}
                <Link
                  href="/kebijakan-privasi"
                  className="text-primary underline font-medium hover:text-primary/80"
                >
                  kebijakan privasi
                </Link>{" "}
                kami.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
