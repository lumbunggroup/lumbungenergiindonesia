import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
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
  keywords: ["energi industri", "solusi energi", "pengadaan", "instalasi", "commissioning", "perawatan", "konsultasi teknis"],
  openGraph: {
    title: "Selalu Bersinergi untuk Bisnis Anda",
    description: "Aman • Tepat Waktu • Sesuai Regulasi. Kenali kami dan unduh Company Profile.",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Selalu Bersinergi untuk Bisnis Anda",
    description: "Aman • Tepat Waktu • Sesuai Regulasi. Kenali kami dan unduh Company Profile.",
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
      </body>
    </html>
  );
}
