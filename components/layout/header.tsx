"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Container } from "./container"
import { Button } from "@/components/ui/button"
import { Menu, X, FileText, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Beranda", href: "#hero" },
    { label: "Layanan", href: "#layanan" },
    { label: "Proyek", href: "#proyek" },
    { label: "Tentang", href: "#tentang" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
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
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-background/80 backdrop-blur-sm"
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base leading-tight text-foreground">
                  Lumbung Energi
                </span>
                <span className="text-xs text-muted-foreground leading-tight">
                  Indonesia
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-all"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection("#kontak")}
              className="text-sm font-medium"
            >
              <Phone className="h-4 w-4 mr-2" />
              Hubungi Sales
            </Button>
            <Button
              size="sm"
              onClick={handleDownload}
              className="text-sm font-medium shadow-sm"
            >
              <FileText className="h-4 w-4 mr-2" />
              Unduh Profil
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-accent rounded-md transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border mt-2 py-4 space-y-1 bg-background/95 backdrop-blur-md">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-all"
              >
                {item.label}
              </button>
            ))}
            <div className="flex flex-col gap-2 pt-4 px-2">
              <Button
                variant="outline"
                onClick={() => scrollToSection("#kontak")}
                className="w-full justify-center"
              >
                <Phone className="h-4 w-4 mr-2" />
                Hubungi Sales
              </Button>
              <Button
                onClick={handleDownload}
                className="w-full justify-center"
              >
                <FileText className="h-4 w-4 mr-2" />
                Unduh Profil
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  )
}
