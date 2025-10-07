"use client"

import Link from "next/link"
import Image from "next/image"
import { Container } from "./container"
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from "lucide-react"

const footerLinks = {
  product: [
    { name: "Pengadaan Energi", href: "#layanan" },
    { name: "Instalasi & Engineering", href: "#layanan" },
    { name: "Energi Terbarukan", href: "#layanan" },
    { name: "Maintenance & Support", href: "#layanan" },
  ],
  company: [
    { name: "Tentang Kami", href: "#tentang" },
    { name: "Proyek", href: "#proyek" },
    { name: "Hubungi Kami", href: "#kontak" },
  ],
  legal: [
    { name: "Kebijakan Privasi", href: "/kebijakan-privasi" },
    { name: "Syarat & Ketentuan", href: "/syarat-ketentuan" },
  ],
}

const socialLinks = [
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "Facebook", href: "#", icon: Facebook },
]

export function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <footer className="border-t bg-background">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-4">
                <Image
                  src="https://31erzxwc41uobyzd.public.blob.vercel-storage.com/lei.svg"
                  alt="Lumbung Energi Indonesia"
                  width={160}
                  height={48}
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-sm text-muted-foreground mb-6 max-w-sm leading-relaxed">
                Solusi energi industri yang terpercaya. Dari pengadaan hingga maintenance, kami siap mendukung kebutuhan energi Anda.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Mail className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                  <a 
                    href="mailto:admin.lei@lumbunggroup.co.id" 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    admin.lei@lumbunggroup.co.id
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                  <a 
                    href="tel:+628112005777" 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    +62 811-2005-7777
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Ruko Pariwarna Niaga Kulon No. 7, Kota Baru Parahyangan, Padalarang, Bandung Barat 40553
                  </span>
                </div>
              </div>
            </div>

            {/* Layanan */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Layanan</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Perusahaan */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Perusahaan</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} PT Lumbung Energi Indonesia. Hak Cipta Dilindungi.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
