"use client"

import Link from "next/link"
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
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">L</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-base leading-tight">
                    Lumbung Energi
                  </span>
                  <span className="text-xs text-muted-foreground leading-tight">
                    Indonesia
                  </span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-6 max-w-sm">
                Solusi energi industri yang terpercaya. Dari pengadaan hingga maintenance, kami siap mendukung kebutuhan energi Anda.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <Mail className="h-4 w-4 mt-0.5 text-muted-foreground" />
                  <a 
                    href="mailto:sales@lumbungenergi.id" 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    sales@lumbungenergi.id
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <Phone className="h-4 w-4 mt-0.5 text-muted-foreground" />
                  <a 
                    href="tel:+62XXXXXXXXXX" 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    +62-XXX-XXXX-XXXX
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground" />
                  <p className="text-muted-foreground">
                    Jakarta, Indonesia
                  </p>
                </div>
              </div>
            </div>

            {/* Layanan */}
            <div>
              <h3 className="font-semibold mb-4">Layanan</h3>
              <ul className="space-y-3 text-sm">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-foreground transition-colors text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Perusahaan */}
            <div>
              <h3 className="font-semibold mb-4">Perusahaan</h3>
              <ul className="space-y-3 text-sm">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-foreground transition-colors text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-3 text-sm">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
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
                    className="text-muted-foreground hover:text-foreground transition-colors"
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
