import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { ClientsSection } from "@/components/sections/clients-section"
import { ServicesSection } from "@/components/sections/services-section"
import { StatsSection } from "@/components/sections/stats-section"
import { CredibilitySection } from "@/components/sections/credibility-section"
import { CTASection } from "@/components/sections/cta-section"
import { ContactFormSection } from "@/components/sections/contact-form-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ClientsSection />
        <ServicesSection />
        <StatsSection />
        <CredibilitySection />
        <CTASection />
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  )
}