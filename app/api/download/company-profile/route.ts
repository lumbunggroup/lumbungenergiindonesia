import { NextRequest, NextResponse } from "next/server"
import path from "path"
import { readFile } from "fs/promises"

export async function GET(request: NextRequest) {
  try {
    // Track download (optional) - skip during build
    if (process.env.NODE_ENV === "production" && process.env.NEXT_SUPABASE_URL) {
      try {
        const { createClient } = await import("@supabase/supabase-js")
        const supabase = createClient(
          process.env.NEXT_SUPABASE_URL!,
          process.env.NEXT_SUPABASE_ANON_KEY!
        )
        
        const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip")
        const userAgent = request.headers.get("user-agent")

        await supabase.from("downloads").insert({
          ip_address: ip,
          user_agent: userAgent,
        })
      } catch {
        // Ignore tracking errors
      }
    }

    // For MVP, return a placeholder response
    // In production, replace with actual PDF file path
    const pdfPath = path.join(process.cwd(), "public", "documents", "company-profile.pdf")
    
    try {
      const pdfBuffer = await readFile(pdfPath)
      
      return new NextResponse(pdfBuffer as unknown as BodyInit, {
        status: 200,
        headers: {
          "Content-Type": "application/pdf",
          "Content-Disposition": "attachment; filename=Lumbung-Energi-Indonesia-Company-Profile.pdf",
          "Cache-Control": "public, max-age=3600",
        },
      })
    } catch {
      // If file doesn't exist, return a message
      // For MVP, you need to add the actual PDF file to public/documents/company-profile.pdf
      return NextResponse.json(
        { 
          message: "PDF belum tersedia. Silakan hubungi sales@lumbungenergi.id untuk mendapatkan Company Profile.",
          note: "Untuk developer: Tambahkan file PDF ke public/documents/company-profile.pdf"
        },
        { status: 404 }
      )
    }
  } catch (error) {
    console.error("Download error:", error)
    return NextResponse.json(
      { message: "Terjadi kesalahan saat mengunduh file." },
      { status: 500 }
    )
  }
}
