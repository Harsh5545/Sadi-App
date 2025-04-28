"use client"

import { useState } from "react"
import Image from "next/image"
import { Edit, MoreHorizontal, Plus, Search, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")

  // Sample product data
  const products = [
    {
      id: 1,
      name: "Banarasi Silk Saree",
      image: "/placeholder.svg?height=40&width=40",
      category: "Silk Sarees",
      price: 9999,
      stock: 25,
      status: "In Stock",
    },
    {
      id: 2,
      name: "Kanjivaram Silk Saree",
      image: "/placeholder.svg?height=40&width=40",
      category: "Silk Sarees",
      price: 15999,
      stock: 12,
      status: "In Stock",
    },
    {
      id: 3,
      name: "Chanderi Cotton Saree",
      image: "/placeholder.svg?height=40&width=40",
      category: "Cotton Sarees",
      price: 5999,
      stock: 30,
      status: "In Stock",
    },
    {
      id: 4,
      name: "Mysore Silk Saree",
      image: "/placeholder.svg?height=40&width=40",
      category: "Silk Sarees",
      price: 8999,
      stock: 8,
      status: "Low Stock",
    },
    {
      id: 5,
      name: "Pochampally Ikat Saree",
      image: "/placeholder.svg?height=40&width=40",
      category: "Ikat Sarees",
      price: 7999,
      stock: 15,
      status: "In Stock",
    },
    {
      id: 6,
      name: "Bhagalpuri Silk Saree",
      image: "/placeholder.svg?height=40&width=40",
      category: "Silk Sarees",
      price: 6999,
      stock: 0,
      status: "Out of Stock",
    },
    {
      id: 7,
      name: "Gadwal Silk Saree",
      image: "/placeholder.svg?height=40&width=40",
      category: "Silk Sarees",
      price: 11999,
      stock: 5,
      status: "Low Stock",
    },
    {
      id: 8,
      name: "Sambalpuri Saree",
      image: "/placeholder.svg?height=40&width=40",
      category: "Cotton Sarees",
      price: 4999,
      stock: 20,
      status: "In Stock",
    },
  ]

  // Filter products based on search term, category, and status
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === "all" || product.category === categoryFilter
    const matchesStatus = statusFilter === "all" || product.status === statusFilter
    return matchesSearch && matchesCategory && matchesStatus
  })

  // Get unique categories for filter
  const categories = ["all", ...new Set(products.map((product) => product.category))]
  const statuses = ["all", ...new Set(products.map((product) => product.status))]

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Products</h2>
          <p className="text-gray-500 dark:text-gray-400">Manage your product inventory, prices, and details.</p>
        </div>
        <Button className="bg-rose-600 hover:bg-rose-700">
          <Plus className="mr-2 h-4 w-4" />
          Add Product
        </Button>
      </div>

      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex flex-1 items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category === "all" ? "All Categories" : category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              {statuses.map((status) => (
                <SelectItem key={status} value={status}>
                  {status === "all" ? "All Statuses" : status}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="rounded-lg border bg-white shadow-sm dark:bg-gray-950">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px]">Image</TableHead>
              <TableHead>Product Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProducts.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={40}
                    height={40}
                    className="rounded-md object-cover"
                  />
                </TableCell>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>₹{product.price.toLocaleString()}</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell>
                  <div
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      product.status === "In Stock"
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                        : product.status === "Low Stock"
                          ? "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300"
                          : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                    }`}
                  >
                    {product.status}
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Actions</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600 focus:bg-red-50 focus:text-red-700 dark:focus:bg-red-950">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
