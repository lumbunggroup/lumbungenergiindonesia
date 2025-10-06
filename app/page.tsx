import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Hero05 from "@/components/hero-05/hero-05"
import { DivisionsSection } from "@/components/sections/divisions-section"
import Features05 from "@/components/features-05/features-05"
import { CredibilitySection } from "@/components/sections/credibility-section"
import { ContactFormLEI } from "@/components/contact-form-lei"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero05 />
        <DivisionsSection />
        <Features05 />
        <CredibilitySection />
        <ContactFormLEI />
      </main>
      <Footer />
    </div>
  )
}