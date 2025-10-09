import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lumbung Energi Indonesia — Selalu Bersinergi untuk Bisnis Anda",
  description: "Lumbung Energi Indonesia membantu proyek Anda berjalan aman, tepat waktu, dan sesuai regulasi. Hubungi sales atau unduh Company Profile kami.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  keywords: ["energi industri", "solusi energi", "pengadaan", "instalasi", "commissioning", "perawatan", "konsultasi teknis", "batubara", "biomassa", "PLTS", "mekanikal elektrikal", "IT infrastructure", "logistik"],
  openGraph: {
    title: "Lumbung Energi Indonesia — Selalu Bersinergi untuk Bisnis Anda",
    description: "Aman • Tepat Waktu • Sesuai Regulasi. Solusi energi, engineering, IT, dan logistik terintegrasi untuk kebutuhan industri Anda.",
    type: "website",
    locale: "id_ID",
    siteName: "PT Lumbung Energi Indonesia",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    images: [
      {
        url: "https://31erzxwc41uobyzd.public.blob.vercel-storage.com/lumbungenergiindonesia.webp",
        width: 1200,
        height: 630,
        alt: "Lumbung Energi Indonesia - Solusi Terintegrasi untuk Industri",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumbung Energi Indonesia — Selalu Bersinergi untuk Bisnis Anda",
    description: "Aman • Tepat Waktu • Sesuai Regulasi. Solusi energi, engineering, IT, dan logistik terintegrasi untuk kebutuhan industri Anda.",
    images: ["https://31erzxwc41uobyzd.public.blob.vercel-storage.com/lumbungenergiindonesia.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${geist.variable} font-sans antialiased`}>
        {children}
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
