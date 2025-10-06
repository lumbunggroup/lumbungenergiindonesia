"use client"

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { TextAnimate } from "@/components/ui/text-animate";
import { motion } from "motion/react";

const Hero05 = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleDownload = async () => {
    try {
      const response = await fetch("/api/download/company-profile")
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = "LEI-Company-Profile.pdf"
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
    } catch (error) {
      console.error("Download failed:", error)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden">
      <div className="max-w-(--breakpoint-xl) w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12 lg:py-0">
        <div className="my-auto">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Badge
              variant="secondary"
              className="rounded-full py-1 border-border"
              asChild
            >
              <Link href="#kontak">
                Dipercaya oleh 500+ Klien Industri <ArrowRight className="ml-1 size-4" />
              </Link>
            </Badge>
          </motion.div>
          
          <TextAnimate
            animation="blurInUp"
            by="word"
            delay={0.3}
            duration={0.8}
            className="mt-6 text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-semibold leading-tight tracking-tight"
            as="h1"
          >
            Solusi Energi Industri yang Terbukti
          </TextAnimate>
          
          <TextAnimate
            animation="blurInUp"
            by="word"
            delay={0.6}
            duration={1.0}
            className="mt-6 max-w-[60ch] text-lg"
            as="p"
          >
            Kami membantu proyek Anda berjalan aman, tepat waktu, dan sesuai regulasi—dengan tim berpengalaman dan standar mutu yang konsisten.
          </TextAnimate>
          
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="mt-12 flex items-center gap-4"
          >
            <Button size="lg" onClick={() => scrollToSection("kontak")}>
              Hubungi Sales <ArrowRight />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleDownload}
            >
              <Download /> Unduh Company Profile
            </Button>
          </motion.div>
        </div>
        <motion.div 
          className="w-full aspect-video lg:aspect-auto lg:w-[1000px] lg:h-screen rounded-xl lg:rounded-none overflow-hidden relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80"
            alt="Industrial energy facility"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero05;
