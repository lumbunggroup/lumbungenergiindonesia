"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { GalleryTable } from "@/components/admin/gallery-table"
import { GalleryForm } from "@/components/admin/gallery-form"

export default function AdminPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleSuccess = () => {
    setIsDialogOpen(false)
    // Refresh table by triggering re-render
    window.location.reload()
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold">Gallery Management</h1>
          <p className="text-muted-foreground mt-2">
            Kelola foto dokumentasi proyek untuk ditampilkan di halaman divisi
          </p>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button size="lg">
              <Plus className="mr-2 h-5 w-5" />
              Tambah Foto
            </Button>
          </DialogTrigger>
          <GalleryForm onSuccess={handleSuccess} />
        </Dialog>
      </div>

      {/* Gallery Table */}
      <GalleryTable />
    </div>
  )
}
