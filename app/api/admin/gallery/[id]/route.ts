import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { gallery } from "@/lib/db/schema"
import { eq } from "drizzle-orm"

// GET: Get single gallery item
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params

    const [data] = await db
      .select()
      .from(gallery)
      .where(eq(gallery.id, id))
      .limit(1)

    if (!data) {
      return NextResponse.json(
        { error: "Gallery tidak ditemukan" },
        { status: 404 }
      )
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

// PATCH: Update gallery item
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await request.json()

    const [updated] = await db
      .update(gallery)
      .set({
        image_url: body.image_url,
        description: body.description,
        category: body.category,
        order: body.order,
        updated_at: new Date(),
      })
      .where(eq(gallery.id, id))
      .returning()

    if (!updated) {
      return NextResponse.json(
        { error: "Gallery tidak ditemukan" },
        { status: 404 }
      )
    }

    return NextResponse.json({ data: updated }, { status: 200 })
  } catch (error) {
    console.error("Database error:", error)
    return NextResponse.json(
      { error: "Terjadi kesalahan server" },
      { status: 500 }
    )
  }
}

// DELETE: Delete gallery item
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params

    await db
      .delete(gallery)
      .where(eq(gallery.id, id))

    return NextResponse.json(
      { message: "Gallery berhasil dihapus" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Database error:", error)
    return NextResponse.json(
      { error: "Terjadi kesalahan server" },
      { status: 500 }
    )
  }
}
