"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { cn } from "@/lib/utils"
import { ImageZoom } from "@/components/ui/shadcn-io/image-zoom"

interface GalleryItem {
  id: string
  image_url: string
  description: string
  category: string
  order: number
}

interface GalleryBentoProps {
  title?: string
  description?: string
  category: string
}

export function GalleryBento({ 
  title = "Dokumentasi Proyek", 
  description = "Portofolio proyek dan layanan yang telah kami kerjakan",
  category
}: GalleryBentoProps) {
  const [items, setItems] = useState<GalleryItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchGallery() {
      try {
        const response = await fetch(`/api/admin/gallery?category=${category}`)
        const result = await response.json()

        if (response.ok && result.data) {
          setItems(result.data)
        }
      } catch (error) {
        console.error("Failed to fetch gallery:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchGallery()
  }, [category])

  if (loading) {
    return (
      <Section className="relative overflow-hidden bg-muted/30">
        <Container>
          <div className="text-center py-16">
            <p className="text-muted-foreground">Memuat dokumentasi...</p>
          </div>
        </Container>
      </Section>
    )
  }

  if (!items.length) {
    return (
      <Section className="relative overflow-hidden bg-muted/30">
        <Container>
          <div className="text-center py-16">
            <h2 className="mb-4">{title}</h2>
            <p className="text-muted-foreground">
              Dokumentasi proyek akan segera ditampilkan
            </p>
          </div>
        </Container>
      </Section>
    )
  }

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
          {items.map((item, index) => {
            // Apply special layouts to first and fourth items for bento style
            const className = index === 0 ? "md:col-span-2 md:row-span-2" : index === 3 ? "md:col-span-2" : ""
            // Calculate sizes based on grid position
            const sizes = index === 0 || index === 3 
              ? "(max-width: 768px) 100vw, 66vw"  // Large items (2 columns)
              : "(max-width: 768px) 100vw, 33vw"  // Normal items (1 column)
            
            return (
              <div
                key={item.id}
                className={cn(
                  "group relative overflow-hidden rounded-xl border border-border bg-card hover:shadow-xl transition-all",
                  className
                )}
              >
                <ImageZoom className="!absolute !inset-0 !flex !items-center !justify-center">
                  <div className="!absolute !inset-0">
                    <Image
                      src={item.image_url}
                      alt={item.description}
                      fill
                      sizes={sizes}
                      className="!object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </ImageZoom>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-full group-hover:translate-y-0 transition-transform pointer-events-none">
                  <p className="text-white text-sm font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
