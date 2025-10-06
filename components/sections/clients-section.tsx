import {
  PLNLogo,
  SemenIndonesiaLogo,
  PupukIndonesiaLogo,
  UnileverLogo,
  IndofoodLogo,
  PertaminaLogo,
  AstraLogo,
  TelkomLogo
} from "./client-logos"
import { Marquee } from "@/components/ui/marquee"

export function ClientsSection() {
  return (
    <section className="py-16 md:py-20 bg-muted/30 flex items-center justify-center px-6">
      <div className="overflow-hidden w-full">
        <p className="text-center text-xl font-medium mb-2">
          Dipercaya oleh Mitra Industri
        </p>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
          Terima kasih atas kepercayaan berbagai perusahaan manufaktur dan infrastruktur di Indonesia.
        </p>

        <div className="mt-14 max-w-7xl mx-auto space-y-8">
          <Marquee
            pauseOnHover
            className="[--duration:40s] [&_>div]:mr-10 mask-x-from-70% mask-x-to-90%"
          >
            <PLNLogo />
            <SemenIndonesiaLogo />
            <PupukIndonesiaLogo />
            <UnileverLogo />
            <IndofoodLogo />
            <PertaminaLogo />
            <AstraLogo />
            <TelkomLogo />
          </Marquee>
          <Marquee
            pauseOnHover
            reverse
            className="[--duration:40s] [&_>div]:mr-10 mask-x-from-70% mask-x-to-90%"
          >
            <PLNLogo />
            <SemenIndonesiaLogo />
            <PupukIndonesiaLogo />
            <UnileverLogo />
            <IndofoodLogo />
            <PertaminaLogo />
            <AstraLogo />
            <TelkomLogo />
          </Marquee>
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
      </div>
    </section>
  )
}
