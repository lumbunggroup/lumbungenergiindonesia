import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"
import Image from "next/image"

interface Service {
  icon: LucideIcon
  title: string
  description: string
  image: string
}

interface ServicesCardsProps {
  title?: string
  description?: string
  services: Service[]
}

export function ServicesCards({ 
  title = "Layanan Kami",
  description = "Solusi komprehensif yang dirancang untuk memenuhi kebutuhan industri Anda",
  services 
}: ServicesCardsProps) {
  return (
    <Section className="relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background -z-10" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
      
      <Container>
        <div className="text-center mb-12">
          <h2>
            {title}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="mt-10 w-full mx-auto grid md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-8">
          {services.map((service) => (
            <div key={service.title} className="h-full">
              <Card className="flex flex-col h-full border rounded-xl overflow-hidden shadow-none pb-0 hover:shadow-lg hover:shadow-primary/5 transition-all hover:-translate-y-1">
                <CardHeader className="flex-1">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4>
                    {service.title}
                  </h4>
                  <p className="mt-2 text-base min-h-[4.5rem]">
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent className="mt-auto px-0 pb-0">
                  <div className="relative h-40 ml-6 rounded-tl-xl overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
