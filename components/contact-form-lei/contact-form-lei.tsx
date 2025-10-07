"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { toast } from "sonner"
import { MessageSquare, Phone, Mail } from "lucide-react"
import Link from "next/link"
import { contactFormSchema, type ContactFormData } from "@/lib/validations/contact"

export function ContactFormLEI() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      topic: "",
      message: "",
      consent: false,
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        toast.success("Terima kasih! Tim kami akan menghubungi Anda segera.")
        form.reset()
      } else {
        const errorData = await response.json()
        toast.error(errorData.message || "Maaf, terjadi kendala. Silakan coba lagi atau hubungi via WhatsApp.")
      }
    } catch {
      toast.error("Maaf, terjadi kendala. Silakan coba lagi atau hubungi via WhatsApp.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="kontak" className="bg-muted/50 py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-7xl mx-auto">
          {/* Left Side - Contact Info */}
          <div className="space-y-12">
            <div>
              <p className="text-sm mb-2">
                Hubungi Tim Kami
              </p>
              <h2>
                Siap Membawa Proyek Anda ke Tahap Berikutnya?
              </h2>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-8">
              {/* Address */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-card flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="mb-2">
                    Kunjungi Kantor Kami
                  </h4>
                  <p className="text-base">
                    Ruko Pariwarna Niaga Kulon No. 7, Kota Baru Parahyangan, Padalarang, Bandung Barat 40553
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-card flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="mb-2">
                    Hubungi Kami Langsung
                  </h4>
                  <p className="text-base">+62 811-2005-7777</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-card flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="mb-2">
                    Email Kami
                  </h4>
                  <p className="text-base">admin.lei@lumbunggroup.co.id</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-card rounded-2xl shadow-lg p-8 lg:p-10">
            <h2 className="mb-8">
              Kirim Permintaan
            </h2>
            <p className="text-muted-foreground mb-6">
              Isi formulir di bawah ini atau chat WhatsApp untuk respons lebih cepat.
            </p>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Full Name */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nama Lengkap *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Masukkan nama lengkap Anda"
                          className="h-12 text-base"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Kerja *</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="nama@perusahaan.com"
                          className="h-12 text-base"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Company */}
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Perusahaan *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Nama perusahaan Anda"
                          className="h-12 text-base"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Phone */}
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nomor Telepon</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="+62 xxx-xxxx-xxxx"
                          className="h-12 text-base"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Topic */}
                <FormField
                  control={form.control}
                  name="topic"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Topik</FormLabel>
                      <FormControl>
                        <select
                          {...field}
                          className="h-12 text-base w-full rounded-md border border-input bg-background px-3 py-2"
                        >
                          <option value="">Pilih topik</option>
                          <option value="pengadaan">Pengadaan</option>
                          <option value="instalasi">Instalasi/Commissioning</option>
                          <option value="perawatan">Perawatan</option>
                          <option value="konsultasi">Konsultasi</option>
                          <option value="lainnya">Lainnya</option>
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Message */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Pesan *</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Jelaskan kebutuhan proyek Anda"
                          className="min-h-32 text-base resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Consent Checkbox */}
                <FormField
                  control={form.control}
                  name="consent"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <input
                          type="checkbox"
                          checked={field.value}
                          onChange={field.onChange}
                          className="mt-1 h-4 w-4 rounded border-input"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm font-normal">
                          Saya setuju dihubungi oleh tim LEI *
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Mengirim..." : "Kirim Permintaan"}
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
            </Form>
          </div>
        </div>
      </div>
    </section>
  )
}
