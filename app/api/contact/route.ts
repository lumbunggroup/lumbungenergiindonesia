import { NextRequest, NextResponse } from "next/server"
import { contactFormSchema } from "@/lib/validations/contact"

// Simple in-memory rate limiting (for production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT = 3 // max requests
const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 hour in ms

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const record = rateLimitMap.get(ip)

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return true
  }

  if (record.count >= RATE_LIMIT) {
    return false
  }

  record.count++
  return true
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown"

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { message: "Terlalu banyak permintaan. Silakan coba lagi nanti." },
        { status: 429 }
      )
    }

    // Parse and validate request body
    const body = await request.json()
    const validatedData = contactFormSchema.parse(body)

    // Extract UTM parameters from headers or query (if available)
    const utmSource = request.nextUrl.searchParams.get("utm_source") || undefined
    const utmMedium = request.nextUrl.searchParams.get("utm_medium") || undefined
    const utmCampaign = request.nextUrl.searchParams.get("utm_campaign") || undefined

    // Save to Supabase (optional during build)
    if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      try {
        const { createClient } = await import("@supabase/supabase-js")
        const supabase = createClient(
          process.env.NEXT_PUBLIC_SUPABASE_URL!,
          process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
        )
        
        const { error } = await supabase.from("leads").insert({
          name: validatedData.name,
          email: validatedData.email,
          company: validatedData.company,
          phone: validatedData.phone || null,
          topic: validatedData.topic || null,
          message: validatedData.message,
          utm_source: utmSource,
          utm_medium: utmMedium,
          utm_campaign: utmCampaign,
          status: "new",
        })

        if (error) {
          console.error("Supabase error:", error)
        }
      } catch (error) {
        console.error("Database error:", error)
        // Continue even if database save fails
      }
    }

    // Send email notifications via Resend (if configured)
    if (process.env.RESEND_API_KEY && process.env.SALES_EMAIL) {
      try {
        const { Resend } = await import("resend")
        const resend = new Resend(process.env.RESEND_API_KEY)
        const { generateContactNotificationEmail, generateAutoReplyEmail } = await import("@/lib/email/templates")

        // Send notification to sales team
        await resend.emails.send({
          from: "LEI Website <noreply@lumbungenergi.id>",
          to: process.env.SALES_EMAIL,
          subject: `🔔 Lead Baru: ${validatedData.name} dari ${validatedData.company}`,
          html: generateContactNotificationEmail({
            name: validatedData.name,
            email: validatedData.email,
            company: validatedData.company,
            phone: validatedData.phone,
            topic: validatedData.topic,
            message: validatedData.message,
          }),
        })

        // Send auto-reply to user
        await resend.emails.send({
          from: "LEI <noreply@lumbungenergi.id>",
          to: validatedData.email,
          subject: "Terima kasih telah menghubungi PT Lumbung Energi Indonesia",
          html: generateAutoReplyEmail({
            name: validatedData.name,
          }),
        })
      } catch (emailError) {
        console.error("Email send error:", emailError)
        // Don't fail the request if email fails
      }
    }

    return NextResponse.json(
      { message: "Terima kasih! Permintaan Anda telah diterima." },
      { status: 200 }
    )
  } catch (error) {
    console.error("Contact form error:", error)
    
    if (error instanceof Error && error.message.includes("validation")) {
      return NextResponse.json(
        { message: "Data tidak valid. Silakan periksa kembali formulir Anda." },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { message: "Terjadi kesalahan. Silakan coba lagi atau hubungi kami via WhatsApp." },
      { status: 500 }
    )
  }
}
