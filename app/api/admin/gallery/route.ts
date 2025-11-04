import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { gallery } from "@/lib/db/schema"
import { eq, asc } from "drizzle-orm"

type GalleryCategory = 'energi' | 'logistik' | 'mekanikal-elektrikal' | 'teknologi-informasi'

// GET: List all gallery items or filter by category
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category")

    let data
    if (category) {
      data = await db
        .select()
        .from(gallery)
        .where(eq(gallery.category, category as GalleryCategory))
        .orderBy(asc(gallery.order))
    } else {
      data = await db
        .select()
        .from(gallery)
        .orderBy(asc(gallery.order))
    }

    return NextResponse.json({ data }, { status: 200 })
  } catch (error) {
    console.error("Database error:", error)
    return NextResponse.json(
      { error: "Terjadi kesalahan server" },
      { status: 500 }
    )
  }
}

// POST: Create new gallery item
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    if (!body.image_url || !body.description || !body.category) {
      return NextResponse.json(
        { error: "Data tidak lengkap" },
        { status: 400 }
      )
    }

    const [newItem] = await db
      .insert(gallery)
      .values({
        image_url: body.image_url,
        description: body.description,
        category: body.category,
        order: body.order || 0,
      })
      .returning()

    return NextResponse.json({ data: newItem }, { status: 201 })
  } catch (error) {
    console.error("Database error:", error)
    return NextResponse.json(
      { error: "Terjadi kesalahan server" },
      { status: 500 }
    )
  }
}
