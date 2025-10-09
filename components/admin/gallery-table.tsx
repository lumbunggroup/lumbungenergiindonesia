"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  SortingState,
} from "@tanstack/react-table"
import { MoreHorizontal, Pencil, Trash2 } from "lucide-react"
import { toast } from "sonner"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog } from "@/components/ui/dialog"
import { GalleryForm } from "./gallery-form"

type GalleryItem = {
  id: string
  image_url: string
  description: string
  category: string
  order: number
  created_at: string
}

const categoryLabels: Record<string, string> = {
  energi: "Energi",
  logistik: "Logistik",
  "mekanikal-elektrikal": "Mekanikal & Elektrikal",
  "teknologi-informasi": "Teknologi Informasi",
}

const categoryColors: Record<string, string> = {
  energi: "bg-blue-500/10 text-blue-700 border-blue-300",
  logistik: "bg-green-500/10 text-green-700 border-green-300",
  "mekanikal-elektrikal": "bg-orange-500/10 text-orange-700 border-orange-300",
  "teknologi-informasi": "bg-purple-500/10 text-purple-700 border-purple-300",
}

export function GalleryTable() {
  const [data, setData] = useState<GalleryItem[]>([])
  const [loading, setLoading] = useState(true)
  const [sorting, setSorting] = useState<SortingState>([])
  const [categoryFilter, setCategoryFilter] = useState<string>("all")
  const [editingItem, setEditingItem] = useState<GalleryItem | null>(null)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)

  const fetchGallery = async () => {
    try {
      const url =
        categoryFilter === "all"
          ? "/api/admin/gallery"
          : `/api/admin/gallery?category=${categoryFilter}`

      const response = await fetch(url)
      const result = await response.json()

      if (response.ok && result.data) {
        setData(result.data)
      } else {
        toast.error("Gagal mengambil data gallery")
      }
    } catch (error) {
      console.error("Fetch error:", error)
      toast.error("Terjadi kesalahan saat mengambil data")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchGallery()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryFilter])

  const handleDelete = async (id: string) => {
    if (!confirm("Yakin ingin menghapus foto ini?")) return

    try {
      const response = await fetch(`/api/admin/gallery/${id}`, {
        method: "DELETE",
      })

      if (response.ok) {
        toast.success("Gallery berhasil dihapus")
        fetchGallery()
      } else {
        const error = await response.json()
        toast.error(error.error || "Gagal menghapus gallery")
      }
    } catch (error) {
      console.error("Delete error:", error)
      toast.error("Terjadi kesalahan saat menghapus")
    }
  }

  const handleEdit = (item: GalleryItem) => {
    setEditingItem(item)
    setIsEditDialogOpen(true)
  }

  const handleEditSuccess = () => {
    setIsEditDialogOpen(false)
    setEditingItem(null)
    fetchGallery()
  }

  const columns: ColumnDef<GalleryItem>[] = [
    {
      accessorKey: "image_url",
      header: "Preview",
      cell: ({ row }) => (
        <div className="relative h-16 w-24 overflow-hidden rounded-md border border-border">
          <Image
            src={row.getValue("image_url")}
            alt={row.getValue("description")}
            fill
            className="object-cover"
          />
        </div>
      ),
    },
    {
      accessorKey: "description",
      header: "Deskripsi",
      cell: ({ row }) => (
        <div className="max-w-md">
          <p className="truncate">{row.getValue("description")}</p>
        </div>
      ),
    },
    {
      accessorKey: "category",
      header: "Kategori",
      cell: ({ row }) => {
        const category = row.getValue("category") as string
        return (
          <Badge variant="outline" className={categoryColors[category]}>
            {categoryLabels[category]}
          </Badge>
        )
      },
    },
    {
      accessorKey: "order",
      header: "Urutan",
      cell: ({ row }) => (
        <div className="text-center">{row.getValue("order")}</div>
      ),
    },
    {
      id: "actions",
      header: "Aksi",
      cell: ({ row }) => {
        const item = row.original

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Aksi</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => handleEdit(item)}>
                <Pencil className="mr-2 h-4 w-4" />
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleDelete(item.id)}
                className="text-destructive focus:text-destructive"
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Hapus
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
  ]

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: {
      sorting,
    },
  })

  if (loading) {
    return <div className="text-center py-8">Memuat data...</div>
  }

  return (
    <div className="space-y-4">
      {/* Filter */}
      <div className="flex items-center gap-4">
        <label className="text-sm font-medium">Filter Kategori:</label>
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="w-[250px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Semua Kategori</SelectItem>
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
      </div>

      {/* Table */}
      <div className="rounded-md border border-border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  Belum ada data gallery
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        {editingItem && (
          <GalleryForm
            initialData={editingItem}
            onSuccess={handleEditSuccess}
          />
        )}
      </Dialog>
    </div>
  )
}
