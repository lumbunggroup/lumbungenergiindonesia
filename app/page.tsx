import { Footer } from "@/components/layout/footer"
import HeroSection from "@/components/hero-section"
import { DivisionsSection } from "@/components/sections/divisions-section"
import Features05 from "@/components/features-05/features-05"
import { CredibilitySection } from "@/components/sections/credibility-section"
import { ContactFormLEI } from "@/components/contact-form-lei"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <HeroSection />
        <DivisionsSection />
        <Features05 />
        <CredibilitySection />
        <ContactFormLEI />
      </main>
      <Footer />
    </div>
  )
}