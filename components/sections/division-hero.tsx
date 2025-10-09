import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Container } from "@/components/layout/container"

interface DivisionHeroProps {
  badge: string
  headline: string
  description: string
  imageSrc: string
  imageAlt: string
}

export function DivisionHero({
  badge,
  headline,
  description,
  imageSrc,
  imageAlt,
}: DivisionHeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background" />
      </div>
      
      <Container>
        <div className="py-24 lg:py-32 text-center max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-4">
            {badge}
          </Badge>
          <h1 className="mb-6">
            {headline}
          </h1>
          <p className="text-lg max-w-3xl mx-auto">
            {description}
          </p>
        </div>
      </Container>
    </section>
  )
}
