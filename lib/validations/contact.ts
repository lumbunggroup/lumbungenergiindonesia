import { z } from "zod"

export const contactFormSchema = z.object({
  name: z.string().min(2, "Nama minimal 2 karakter").max(100, "Nama terlalu panjang"),
  email: z.string().email("Email tidak valid"),
  company: z.string().min(2, "Nama perusahaan minimal 2 karakter").max(100, "Nama perusahaan terlalu panjang"),
  phone: z.string().optional(),
  topic: z.string().optional(),
  message: z.string().min(10, "Pesan minimal 10 karakter").max(1000, "Pesan terlalu panjang"),
  consent: z.boolean().refine((val) => val === true, {
    message: "Anda harus menyetujui untuk dihubungi",
  }),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
