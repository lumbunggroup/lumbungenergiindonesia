"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { galleryFormSchema, type GalleryFormData } from "@/lib/validations/gallery"

interface GalleryFormProps {
  onSuccess?: () => void
  initialData?: {
    id: string
    image_url: string
    description: string
    category: string
    order: number
  }
}

export function GalleryForm({ onSuccess, initialData }: GalleryFormProps) {
  const [isUploading, setIsUploading] = useState(false)
  const [previewUrl, setPreviewUrl] = useState<string>(initialData?.image_url || "")

  const form = useForm<GalleryFormData>({
    resolver: zodResolver(galleryFormSchema),
    defaultValues: {
      description: initialData?.description || "",
      category: (initialData?.category as "energi" | "logistik" | "mekanikal-elektrikal" | "teknologi-informasi") || "energi",
      order: initialData?.order || 0,
    },
  })

  const onSubmit = async (data: GalleryFormData) => {
    setIsUploading(true)
    try {
      let imageUrl = initialData?.image_url

      // If new file is uploaded, upload to Vercel Blob
      if (data.file) {
        const formData = new FormData()
        formData.append("file", data.file)

        const uploadResponse = await fetch("/api/admin/gallery/upload", {
          method: "POST",
          body: formData,
        })

        if (!uploadResponse.ok) {
          const error = await uploadResponse.json()
          throw new Error(error.error || "Gagal mengupload gambar")
        }

        const { url } = await uploadResponse.json()
        imageUrl = url
      }

      // Create or update gallery item
      const galleryData = {
        image_url: imageUrl,
        description: data.description,
        category: data.category,
        order: data.order,
      }

      const endpoint = initialData
        ? `/api/admin/gallery/${initialData.id}`
        : "/api/admin/gallery"
      const method = initialData ? "PATCH" : "POST"

      const response = await fetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(galleryData),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || "Gagal menyimpan data")
      }

      toast.success(
        initialData
          ? "Gallery berhasil diupdate!"
          : "Gallery berhasil ditambahkan!"
      )
      form.reset()
      setPreviewUrl("")
      onSuccess?.()
    } catch (error) {
      console.error("Form error:", error)
      toast.error(error instanceof Error ? error.message : "Terjadi kesalahan")
    } finally {
      setIsUploading(false)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      form.setValue("file", file)
      setPreviewUrl(URL.createObjectURL(file))
    }
  }

  return (
    <DialogContent className="max-w-2xl">
      <DialogHeader>
        <DialogTitle>
          {initialData ? "Edit Gallery" : "Tambah Gallery Baru"}
        </DialogTitle>
        <DialogDescription>
          {initialData
            ? "Ubah informasi gallery di bawah ini"
            : "Upload foto dokumentasi proyek untuk ditampilkan di halaman divisi"}
        </DialogDescription>
      </DialogHeader>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* File Upload */}
          <FormField
            control={form.control}
            name="file"
            render={() => (
              <FormItem>
                <FormLabel>
                  {initialData ? "Gambar Baru (Opsional)" : "Gambar *"}
                </FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    disabled={isUploading}
                    required={!initialData}
                  />
                </FormControl>
                <FormDescription>
                  Format: JPG, PNG, WebP. Maksimal 5MB.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Image Preview */}
          {previewUrl && (
            <div className="relative h-48 w-full overflow-hidden rounded-lg border border-border">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={previewUrl}
                alt="Preview"
                className="h-full w-full object-cover"
              />
            </div>
          )}

          {/* Description */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Deskripsi *</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Contoh: Instalasi panel surya di pabrik industri"
                    disabled={isUploading}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Deskripsi singkat tentang foto (10-200 karakter)
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Category */}
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Kategori Divisi *</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  disabled={isUploading}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih kategori divisi" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="energi">Energi</SelectItem>
                    <SelectItem value="logistik">Logistik</SelectItem>
                    <SelectItem value="mekanikal-elektrikal">
                      Mekanikal & Elektrikal
                    </SelectItem>
                    <SelectItem value="teknologi-informasi">
                      Teknologi Informasi
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  Pilih divisi di mana foto ini akan ditampilkan
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Order */}
          <FormField
            control={form.control}
            name="order"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Urutan</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min="0"
                    placeholder="0"
                    disabled={isUploading}
                    {...field}
                    onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                  />
                </FormControl>
                <FormDescription>
                  Urutan tampilan (semakin kecil semakin awal)
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <DialogFooter>
            <Button type="submit" disabled={isUploading}>
              {isUploading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isUploading
                ? "Menyimpan..."
                : initialData
                ? "Update Gallery"
                : "Tambah Gallery"}
            </Button>
          </DialogFooter>
        </form>
      </Form>
    </DialogContent>
  )
}
