import Image from "next/image"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { cn } from "@/lib/utils"

interface GalleryItem {
  src: string
  alt: string
  className?: string
}

interface GalleryBentoProps {
  title?: string
  description?: string
  items: GalleryItem[]
}

export function GalleryBento({ 
  title = "Dokumentasi Proyek", 
  description = "Portofolio proyek dan layanan yang telah kami kerjakan",
  items 
}: GalleryBentoProps) {
  return (
    <Section className="relative overflow-hidden bg-muted/30">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      
      <Container>
        <div className="text-center mb-16">
          <h2 className="mb-6">
            {title}
          </h2>
          <p className="max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[240px]">
          {items.map((item, index) => (
            <div
              key={index}
              className={cn(
                "group relative overflow-hidden rounded-xl border border-border bg-card hover:shadow-xl transition-all",
                item.className
              )}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-full group-hover:translate-y-0 transition-transform">
                <p className="text-white text-sm font-medium">
                  {item.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
