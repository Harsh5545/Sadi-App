"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Edit, MoreHorizontal, Plus, Search, Trash2, Heart, Filter, Download, Eye, Copy } from "lucide-react"

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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedProducts, setSelectedProducts] = useState<number[]>([])
  const [viewMode, setViewMode] = useState<"all" | "wishlist">("all")
  const [editDialogOpen, setEditDialogOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<any>(null)

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
      inWishlist: true,
    },
    {
      id: 2,
      name: "Kanjivaram Silk Saree",
      image: "/placeholder.svg?height=40&width=40",
      category: "Silk Sarees",
      price: 15999,
      stock: 12,
      status: "In Stock",
      inWishlist: false,
    },
    {
      id: 3,
      name: "Chanderi Cotton Saree",
      image: "/placeholder.svg?height=40&width=40",
      category: "Cotton Sarees",
      price: 5999,
      stock: 30,
      status: "In Stock",
      inWishlist: true,
    },
    {
      id: 4,
      name: "Mysore Silk Saree",
      image: "/placeholder.svg?height=40&width=40",
      category: "Silk Sarees",
      price: 8999,
      stock: 8,
      status: "Low Stock",
      inWishlist: false,
    },
    {
      id: 5,
      name: "Pochampally Ikat Saree",
      image: "/placeholder.svg?height=40&width=40",
      category: "Ikat Sarees",
      price: 7999,
      stock: 15,
      status: "In Stock",
      inWishlist: true,
    },
    {
      id: 6,
      name: "Bhagalpuri Silk Saree",
      image: "/placeholder.svg?height=40&width=40",
      category: "Silk Sarees",
      price: 6999,
      stock: 0,
      status: "Out of Stock",
      inWishlist: false,
    },
    {
      id: 7,
      name: "Gadwal Silk Saree",
      image: "/placeholder.svg?height=40&width=40",
      category: "Silk Sarees",
      price: 11999,
      stock: 5,
      status: "Low Stock",
      inWishlist: true,
    },
    {
      id: 8,
      name: "Sambalpuri Saree",
      image: "/placeholder.svg?height=40&width=40",
      category: "Cotton Sarees",
      price: 4999,
      stock: 20,
      status: "In Stock",
      inWishlist: false,
    },
  ]

  // Toggle wishlist status
  const toggleWishlist = (productId: number) => {
    // In a real app, this would update the database
    console.log(`Toggled wishlist for product ${productId}`)
  }

  // Toggle product selection
  const toggleProductSelection = (productId: number) => {
    if (selectedProducts.includes(productId)) {
      setSelectedProducts(selectedProducts.filter((id) => id !== productId))
    } else {
      setSelectedProducts([...selectedProducts, productId])
    }
  }

  // Handle edit product
  const handleEditProduct = (product: any) => {
    setSelectedProduct(product)
    setEditDialogOpen(true)
  }

  // Filter products based on search term, category, status, and view mode
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === "all" || product.category === categoryFilter
    const matchesStatus = statusFilter === "all" || product.status === statusFilter
    const matchesViewMode = viewMode === "all" || (viewMode === "wishlist" && product.inWishlist)
    return matchesSearch && matchesCategory && matchesStatus && matchesViewMode
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
        <div className="flex flex-wrap gap-2">
          <Button className="bg-rose-600 hover:bg-rose-700" asChild>
            <Link href="/admin/add-product">
              <Plus className="mr-2 h-4 w-4" />
              Add Product
            </Link>
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full" onValueChange={(value) => setViewMode(value as "all" | "wishlist")}>
        <TabsList className="mb-4">
          <TabsTrigger value="all">All Products</TabsTrigger>
          <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
        </TabsList>
      </Tabs>

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
          <Button variant="outline" size="icon" className="hidden sm:flex">
            <Filter className="h-4 w-4" />
            <span className="sr-only">More filters</span>
          </Button>
        </div>
      </div>

      <div className="rounded-lg border bg-white shadow-sm dark:bg-gray-950">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[40px]">
                <Checkbox
                  checked={selectedProducts.length === filteredProducts.length && filteredProducts.length > 0}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setSelectedProducts(filteredProducts.map((p) => p.id))
                    } else {
                      setSelectedProducts([])
                    }
                  }}
                />
              </TableHead>
              <TableHead className="w-[80px]">Image</TableHead>
              <TableHead>Product Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[100px]">Wishlist</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProducts.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedProducts.includes(product.id)}
                    onCheckedChange={() => toggleProductSelection(product.id)}
                  />
                </TableCell>
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
                  <Badge
                    className={`${
                      product.status === "In Stock"
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                        : product.status === "Low Stock"
                          ? "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300"
                          : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                    }`}
                  >
                    {product.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => toggleWishlist(product.id)}
                    className={product.inWishlist ? "text-rose-600" : "text-gray-400"}
                  >
                    <Heart className="h-4 w-4" fill={product.inWishlist ? "currentColor" : "none"} />
                    <span className="sr-only">{product.inWishlist ? "Remove from wishlist" : "Add to wishlist"}</span>
                  </Button>
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
                      <DropdownMenuItem onClick={() => handleEditProduct(product)}>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Eye className="mr-2 h-4 w-4" />
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Copy className="mr-2 h-4 w-4" />
                        Duplicate
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
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

      {/* Edit Product Dialog */}
      <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Edit Product</DialogTitle>
            <DialogDescription>Make changes to the product details. Click save when you're done.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="product-name" className="text-right">
                Name
              </Label>
              <Input id="product-name" defaultValue={selectedProduct?.name || ""} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="product-category" className="text-right">
                Category
              </Label>
              <Select defaultValue={selectedProduct?.category?.toLowerCase().replace(/\s+/g, "-") || "silk-sarees"}>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="silk-sarees">Silk Sarees</SelectItem>
                  <SelectItem value="cotton-sarees">Cotton Sarees</SelectItem>
                  <SelectItem value="designer-sarees">Designer Sarees</SelectItem>
                  <SelectItem value="ikat-sarees">Ikat Sarees</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="product-price" className="text-right">
                Price (₹)
              </Label>
              <Input
                id="product-price"
                type="number"
                defaultValue={selectedProduct?.price || ""}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="product-stock" className="text-right">
                Stock
              </Label>
              <Input
                id="product-stock"
                type="number"
                defaultValue={selectedProduct?.stock || ""}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="product-status" className="text-right">
                Status
              </Label>
              <Select defaultValue={selectedProduct?.status?.toLowerCase().replace(/\s+/g, "-") || "in-stock"}>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="in-stock">In Stock</SelectItem>
                  <SelectItem value="low-stock">Low Stock</SelectItem>
                  <SelectItem value="out-of-stock">Out of Stock</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setEditDialogOpen(false)}>
              Cancel
            </Button>
            <Button className="bg-rose-600 hover:bg-rose-700" onClick={() => setEditDialogOpen(false)}>
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
