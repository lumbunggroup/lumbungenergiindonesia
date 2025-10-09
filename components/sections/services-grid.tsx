import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"

interface Service {
  icon: LucideIcon
  title: string
  description: string
}

interface ServicesGridProps {
  services: Service[]
}

export function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <Section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-muted/20 -z-10" />
      
      <Container>
        <div className="text-center mb-16">
          <h2 className="mb-6">
            Layanan Kami
          </h2>
          <p className="max-w-3xl mx-auto">
            Solusi komprehensif yang dirancang untuk memenuhi kebutuhan industri Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="h-full">
                <Card className="h-full flex flex-col hover:shadow-xl hover:shadow-primary/5 transition-all hover:-translate-y-1 group">
                  <CardHeader className="flex-1">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="mb-3">
                      {service.title}
                    </h4>
                    <p className="text-base min-h-[4.5rem]">
                      {service.description}
                    </p>
                  </CardHeader>
                </Card>
              </div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
