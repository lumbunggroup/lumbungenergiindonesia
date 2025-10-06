"use client"

import { Container } from "@/components/layout/container"

const clients = [
  { name: "PT Pertamina", logo: "🛢️" },
  { name: "PLN", logo: "⚡" },
  { name: "PT Semen Indonesia", logo: "🏭" },
  { name: "PT Pupuk Indonesia", logo: "🌾" },
  { name: "PT Unilever Indonesia", logo: "🧴" },
  { name: "PT Indofood", logo: "🍜" },
  { name: "PT Astra International", logo: "🚗" },
  { name: "PT Telkom Indonesia", logo: "📡" },
]

export function ClientsSection() {
  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Dipercaya oleh Mitra Industri
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Terima kasih atas kepercayaan berbagai perusahaan manufaktur dan infrastruktur di Indonesia.
          </p>
        </div>

        {/* Infinite Scroll Container */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-left">
            {/* First Set */}
            {clients.map((client, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
              >
                <div className="w-40 h-24 flex flex-col items-center justify-center gap-2 bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <span className="text-4xl">{client.logo}</span>
                  <span className="text-xs text-muted-foreground text-center font-medium">
                    {client.name}
                  </span>
                </div>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {clients.map((client, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
              >
                <div className="w-40 h-24 flex flex-col items-center justify-center gap-2 bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <span className="text-4xl">{client.logo}</span>
                  <span className="text-xs text-muted-foreground text-center font-medium">
                    {client.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient Overlays */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-muted/30 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-muted/30 to-transparent pointer-events-none" />
        </div>

        {/* Trust Stats */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary">500+</div>
            <div className="text-sm text-muted-foreground">Proyek Selesai</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">200+</div>
            <div className="text-sm text-muted-foreground">Klien Aktif</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">15+</div>
            <div className="text-sm text-muted-foreground">Tahun Pengalaman</div>
          </div>
        </div>
      </Container>

    </section>
  )
}
