"use client"

import { useState } from "react"
import { Plus, Search, Edit, Trash2, MoreHorizontal, Upload, Download, ArrowUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample category data
const categories = [
  {
    id: 1,
    name: "Wedding Collection",
    slug: "wedding-collection",
    description: "Exclusive sarees for wedding occasions",
    image: "/placeholder.svg?height=50&width=50",
    products: 24,
    featured: true,
    active: true,
  },
  {
    id: 2,
    name: "Silk Sarees",
    slug: "silk-sarees",
    description: "Premium silk sarees collection",
    image: "/placeholder.svg?height=50&width=50",
    products: 36,
    featured: true,
    active: true,
  },
  {
    id: 3,
    name: "Cotton Sarees",
    slug: "cotton-sarees",
    description: "Comfortable cotton sarees for daily wear",
    image: "/placeholder.svg?height=50&width=50",
    products: 42,
    featured: false,
    active: true,
  },
  {
    id: 4,
    name: "Designer Sarees",
    slug: "designer-sarees",
    description: "Exclusive designer sarees collection",
    image: "/placeholder.svg?height=50&width=50",
    products: 18,
    featured: true,
    active: true,
  },
  {
    id: 5,
    name: "Festival Collection",
    slug: "festival-collection",
    description: "Special sarees for festival occasions",
    image: "/placeholder.svg?height=50&width=50",
    products: 29,
    featured: true,
    active: true,
  },
  {
    id: 6,
    name: "Summer Collection",
    slug: "summer-collection",
    description: "Light and comfortable sarees for summer",
    image: "/placeholder.svg?height=50&width=50",
    products: 15,
    featured: false,
    active: false,
  },
]

export default function CategoriesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<any>(null)
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: "asc" | "desc" } | null>(null)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)

  // Handle sorting
  const requestSort = (key: string) => {
    let direction: "asc" | "desc" = "asc"
    if (sortConfig && sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc"
    }
    setSortConfig({ key, direction })
  }

  // Filter categories based on search term
  const filteredCategories = categories.filter((category) => {
    return (
      category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })

  // Sort categories
  const sortedCategories = [...filteredCategories].sort((a, b) => {
    if (!sortConfig) return 0

    if (a[sortConfig.key as keyof typeof a] < b[sortConfig.key as keyof typeof b]) {
      return sortConfig.direction === "asc" ? -1 : 1
    }
    if (a[sortConfig.key as keyof typeof a] > b[sortConfig.key as keyof typeof b]) {
      return sortConfig.direction === "asc" ? 1 : -1
    }
    return 0
  })

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Categories</h2>
          <p className="text-gray-500 dark:text-gray-400">Manage product categories for your store.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Category
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Add New Category</DialogTitle>
                <DialogDescription>
                  Create a new product category for your store. Fill in the details below.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <Label htmlFor="name">Category Name</Label>
                    <Input id="name" placeholder="Enter category name" />
                  </div>
                  <div>
                    <Label htmlFor="slug">Slug</Label>
                    <Input id="slug" placeholder="category-slug" />
                    <p className="text-xs text-gray-500 mt-1">
                      The "slug" is the URL-friendly version of the name. It is usually all lowercase and contains only
                      letters, numbers, and hyphens.
                    </p>
                  </div>
                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Input id="description" placeholder="Enter category description" />
                  </div>
                  <div>
                    <Label htmlFor="image">Category Image</Label>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="h-20 w-20 rounded-md border flex items-center justify-center">
                        <Upload className="h-8 w-8 text-gray-400" />
                      </div>
                      <Button variant="outline" size="sm">
                        <Upload className="mr-2 h-4 w-4" />
                        Upload Image
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="featured" />
                    <Label htmlFor="featured">Featured Category</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="active" defaultChecked />
                    <Label htmlFor="active">Active</Label>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setIsAddDialogOpen(false)}>Save Category</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Button variant="outline">
            <Upload className="mr-2 h-4 w-4" />
            Import
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="all">All Categories</TabsTrigger>
          <TabsTrigger value="featured">Featured</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="inactive">Inactive</TabsTrigger>
        </TabsList>

        <div className="flex flex-col gap-4 md:flex-row mb-4">
          <div className="flex flex-1 items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
              <Input
                type="search"
                placeholder="Search categories..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[80px]">Image</TableHead>
                  <TableHead className="cursor-pointer" onClick={() => requestSort("name")}>
                    Name
                    <ArrowUpDown className="ml-2 h-4 w-4 inline" />
                  </TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead className="cursor-pointer" onClick={() => requestSort("products")}>
                    Products
                    <ArrowUpDown className="ml-2 h-4 w-4 inline" />
                  </TableHead>
                  <TableHead>Featured</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedCategories.map((category) => (
                  <TableRow key={category.id}>
                    <TableCell>
                      <img
                        src={category.image || "/placeholder.svg"}
                        alt={category.name}
                        className="h-10 w-10 rounded-md object-cover"
                      />
                    </TableCell>
                    <TableCell className="font-medium">{category.name}</TableCell>
                    <TableCell className="max-w-[300px] truncate">{category.description}</TableCell>
                    <TableCell>{category.products}</TableCell>
                    <TableCell>
                      {category.featured ? (
                        <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                          Featured
                        </span>
                      ) : (
                        <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-300">
                          Regular
                        </span>
                      )}
                    </TableCell>
                    <TableCell>
                      {category.active ? (
                        <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                          Active
                        </span>
                      ) : (
                        <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300">
                          Inactive
                        </span>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      <Dialog>
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
                            <DialogTrigger asChild onClick={() => setSelectedCategory(category)}>
                              <DropdownMenuItem>
                                <Edit className="mr-2 h-4 w-4" />
                                Edit Category
                              </DropdownMenuItem>
                            </DialogTrigger>
                            <DropdownMenuItem>
                              <Trash2 className="mr-2 h-4 w-4" />
                              Delete Category
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>

                        <DialogContent className="sm:max-w-[600px]">
                          <DialogHeader>
                            <DialogTitle>Edit Category</DialogTitle>
                            <DialogDescription>
                              Update the category details. Click save when you're done.
                            </DialogDescription>
                          </DialogHeader>
                          {selectedCategory && (
                            <div className="grid gap-4 py-4">
                              <div className="grid grid-cols-1 gap-4">
                                <div>
                                  <Label htmlFor="edit-name">Category Name</Label>
                                  <Input id="edit-name" defaultValue={selectedCategory.name} />
                                </div>
                                <div>
                                  <Label htmlFor="edit-slug">Slug</Label>
                                  <Input id="edit-slug" defaultValue={selectedCategory.slug} />
                                  <p className="text-xs text-gray-500 mt-1">
                                    The "slug" is the URL-friendly version of the name. It is usually all lowercase and
                                    contains only letters, numbers, and hyphens.
                                  </p>
                                </div>
                                <div>
                                  <Label htmlFor="edit-description">Description</Label>
                                  <Input id="edit-description" defaultValue={selectedCategory.description} />
                                </div>
                                <div>
                                  <Label htmlFor="edit-image">Category Image</Label>
                                  <div className="flex items-center gap-4 mt-2">
                                    <div className="h-20 w-20 rounded-md border overflow-hidden">
                                      <img
                                        src={selectedCategory.image || "/placeholder.svg"}
                                        alt={selectedCategory.name}
                                        className="h-full w-full object-cover"
                                      />
                                    </div>
                                    <Button variant="outline" size="sm">
                                      <Upload className="mr-2 h-4 w-4" />
                                      Change Image
                                    </Button>
                                  </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Switch id="edit-featured" defaultChecked={selectedCategory.featured} />
                                  <Label htmlFor="edit-featured">Featured Category</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Switch id="edit-active" defaultChecked={selectedCategory.active} />
                                  <Label htmlFor="edit-active">Active</Label>
                                </div>
                              </div>
                            </div>
                          )}
                          <DialogFooter>
                            <Button variant="outline">Cancel</Button>
                            <Button>Save Changes</Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter className="flex items-center justify-between border-t p-4">
            <div className="text-sm text-gray-500">
              Showing <strong>1-{sortedCategories.length}</strong> of <strong>{categories.length}</strong> categories
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </CardFooter>
        </Card>
      </Tabs>
    </div>
  )
}
