"use client"

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, FileText } from 'lucide-react'
import Link from 'next/link'

interface DivisionCTAProps {
  title?: string
  description?: string
}

export function DivisionCTA({ 
  title = "Siap Memulai Proyek Bersama Kami?",
  description = "Diskusikan kebutuhan Anda dengan tim ahli kami atau unduh company profile untuk informasi lengkap tentang layanan kami."
}: DivisionCTAProps) {
  const scrollToContact = () => {
    const contactSection = document.getElementById("kontak")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    } else {
      window.location.href = "/#kontak"
    }
  }

  return (
    <section className='bg-background pb-8 sm:pb-16 lg:pb-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <Card className='rounded-3xl border-none bg-primary shadow-lg py-8 sm:py-16 lg:py-24'>
          <CardContent className='flex flex-wrap items-center justify-between gap-8 px-8 sm:flex-nowrap sm:px-16 lg:px-24'>
            <div className='max-w-xs lg:max-w-lg'>
              <h2 className='mb-4 text-primary-foreground'>
                {title}
              </h2>
              <p className='text-primary-foreground/90 text-lg'>
                {description}
              </p>
            </div>
            <div className='flex flex-wrap items-center gap-4 max-md:w-full max-md:flex-col md:justify-end'>
              <Button
                onClick={scrollToContact}
                size="lg"
                className='bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all h-12 px-8'
              >
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className='bg-white text-primary border-white hover:bg-white/90 hover:scale-105 transition-all h-12 px-8'
              >
                <Link
                  href="https://31erzxwc41uobyzd.public.blob.vercel-storage.com/LEI%20-%20Company%20Profile%202025.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText className="mr-2 h-5 w-5" />
                  Company Profile
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
