import { z } from "zod"

export const gallerySchema = z.object({
  image_url: z.string().url("URL gambar tidak valid"),
  description: z.string().min(10, "Deskripsi minimal 10 karakter").max(200, "Deskripsi maksimal 200 karakter"),
  category: z.enum(["energi", "logistik", "mekanikal-elektrikal", "teknologi-informasi"]),
  order: z.number().int().min(0, "Urutan harus positif").default(0),
})

export const galleryFormSchema = z.object({
  description: z.string().min(10, "Deskripsi minimal 10 karakter").max(200, "Deskripsi maksimal 200 karakter"),
  category: z.enum(["energi", "logistik", "mekanikal-elektrikal", "teknologi-informasi"]),
  order: z.number().int().min(0, "Urutan harus positif"),
  file: z.instanceof(File).optional(),
})

export type GalleryFormData = z.infer<typeof galleryFormSchema>
export type GalleryData = z.infer<typeof gallerySchema>
