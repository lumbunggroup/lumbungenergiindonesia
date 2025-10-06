"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "sonner"
import { MessageSquare, Send, Phone as PhoneIcon } from "lucide-react"
import { contactFormSchema, type ContactFormData } from "@/lib/validations/contact"

export function ContactFormSection() {
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
        const error = await response.json()
        toast.error(error.message || "Maaf, terjadi kendala. Silakan coba lagi atau hubungi via WhatsApp.")
      }
    } catch (error) {
      toast.error("Maaf, terjadi kendala. Silakan coba lagi atau hubungi via WhatsApp.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "628XXXXXXXXXX"
  const whatsappMessage = encodeURIComponent(
    "Halo LEI, saya tertarik untuk mendiskusikan layanan Anda."
  )
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <Section id="kontak" className="bg-muted/30">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="h-6 w-6 text-primary" />
                <h2 className="text-3xl lg:text-4xl font-bold">Hubungi Tim Kami</h2>
              </div>
              <p className="text-lg text-muted-foreground">
                Isi formulir di bawah ini atau chat WhatsApp untuk respons lebih cepat.
              </p>
            </div>

            <Card className="bg-primary/10 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <PhoneIcon className="h-5 w-5" />
                  Kontak Cepat via WhatsApp
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Dapatkan respons langsung dari tim sales kami
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="default"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={() => window.open(whatsappUrl, "_blank")}
                >
                  Chat WhatsApp
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-2 text-sm text-muted-foreground pt-4">
              <p>
                <strong className="text-card-foreground">Data Anda hanya digunakan</strong> untuk menindaklanjuti permintaan ini.
              </p>
              <p>
                Kami berkomitmen menjaga privasi dan keamanan informasi Anda.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <Card className="bg-card border-border">
            <CardContent className="pt-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nama Lengkap *</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Kerja *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john@perusahaan.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Perusahaan *</FormLabel>
                        <FormControl>
                          <Input placeholder="PT Contoh Perusahaan" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nomor Telepon</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="+62 812 3456 7890" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="topic"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Topik</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Pilih topik" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="pengadaan">Pengadaan</SelectItem>
                            <SelectItem value="instalasi">Instalasi/Commissioning</SelectItem>
                            <SelectItem value="perawatan">Perawatan</SelectItem>
                            <SelectItem value="konsultasi">Konsultasi</SelectItem>
                            <SelectItem value="lainnya">Lainnya</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Pesan *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Ceritakan kebutuhan proyek Anda..."
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

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
                            className="mt-1"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            Saya setuju dihubungi oleh tim LEI
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Mengirim..."
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Kirim Permintaan
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </Container>
    </Section>
  )
}
