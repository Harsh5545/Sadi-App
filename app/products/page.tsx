"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronRight, Filter, Search, SlidersHorizontal, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MobileNav from "@/components/mobile-nav"
import ProductCard from "@/components/product-card"
import ProductFilters from "@/components/product-filters"
import ProductSort from "@/components/product-sort"

export default function ProductsPage() {
  const [isClient, setIsClient] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedSort, setSelectedSort] = useState("featured")
  const [priceRange, setPriceRange] = useState([0, 20000])
  const [filteredProducts, setFilteredProducts] = useState(products)

  // Handle client-side rendering
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Filter products based on search, category, price range, etc.
  useEffect(() => {
    let filtered = [...products]

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    }

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((product) => product.category === selectedCategory)
    }

    // Filter by price range
    filtered = filtered.filter((product) => {
      const price = product.discountPrice || product.price
      return price >= priceRange[0] && price <= priceRange[1]
    })

    // Sort products
    switch (selectedSort) {
      case "price-low-high":
        filtered.sort((a, b) => (a.discountPrice || a.price) - (b.discountPrice || b.price))
        break
      case "price-high-low":
        filtered.sort((a, b) => (b.discountPrice || b.price) - (a.discountPrice || a.price))
        break
      case "newest":
        filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        break
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating)
        break
      default:
        // Featured or default sorting
        filtered.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0))
    }

    setFilteredProducts(filtered)
  }, [searchTerm, selectedCategory, selectedSort, priceRange])

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
  }

  const handleSortChange = (sort: string) => {
    setSelectedSort(sort)
  }

  const handlePriceChange = (range: [number, number]) => {
    setPriceRange(range)
  }

  const handleClearFilters = () => {
    setSearchTerm("")
    setSelectedCategory("all")
    setSelectedSort("featured")
    setPriceRange([0, 20000])
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container py-6">
          {/* Breadcrumb */}
          <nav className="mb-4 flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="font-medium text-foreground">Products</span>
          </nav>

          {/* Search and Filter Bar */}
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h1 className="text-2xl font-bold md:text-3xl">All Products</h1>
            <div className="flex items-center gap-2">
              <div className="relative flex-1 sm:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="md:hidden">
                    <Filter className="h-4 w-4" />
                    <span className="sr-only">Filter</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                  </SheetHeader>
                  <div className="py-4">
                    <ProductFilters
                      onCategoryChange={handleCategoryChange}
                      onPriceChange={handlePriceChange}
                      selectedCategory={selectedCategory}
                      priceRange={priceRange}
                    />
                    <Button variant="outline" size="sm" className="mt-4 w-full" onClick={handleClearFilters}>
                      <X className="mr-2 h-4 w-4" />
                      Clear Filters
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
              <ProductSort onSortChange={handleSortChange} />
            </div>
          </div>

          {/* Mobile Category Tabs */}
          <div className="mb-6 overflow-auto md:hidden">
            <Tabs defaultValue="all" value={selectedCategory} onValueChange={handleCategoryChange}>
              <TabsList className="w-max">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="silk">Silk</TabsTrigger>
                <TabsTrigger value="cotton">Cotton</TabsTrigger>
                <TabsTrigger value="wedding">Wedding</TabsTrigger>
                <TabsTrigger value="casual">Casual</TabsTrigger>
                <TabsTrigger value="designer">Designer</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-[240px_1fr]">
            {/* Filters - Desktop */}
            <Card className="hidden h-fit md:block">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-medium">Filters</h2>
                  <Button variant="ghost" size="sm" className="h-8 text-xs" onClick={handleClearFilters}>
                    Reset All
                  </Button>
                </div>
                {isClient && (
                  <ProductFilters
                    onCategoryChange={handleCategoryChange}
                    onPriceChange={handlePriceChange}
                    selectedCategory={selectedCategory}
                    priceRange={priceRange}
                  />
                )}
              </CardContent>
            </Card>

            {/* Products Grid */}
            <div>
              <div className="mb-4 hidden items-center justify-between md:flex">
                <p className="text-sm text-muted-foreground">
                  Showing {filteredProducts.length} of {products.length} products
                </p>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <SlidersHorizontal className="mr-2 h-4 w-4" />
                    View: Grid
                  </Button>
                </div>
              </div>

              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="flex h-60 flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
                  <div className="text-3xl">😔</div>
                  <h3 className="mt-4 text-lg font-medium">No products found</h3>
                  <p className="mt-2 text-sm text-gray-500">Try adjusting your search or filter criteria</p>
                  <Button variant="outline" className="mt-4" onClick={handleClearFilters}>
                    Clear Filters
                  </Button>
                </div>
              )}

              {/* Pagination */}
              {filteredProducts.length > 0 && (
                <div className="mt-8 flex justify-center">
                  <nav className="flex items-center space-x-1">
                    <Button variant="outline" size="icon" disabled>
                      <ChevronLeft className="h-4 w-4" />
                      <span className="sr-only">Previous page</span>
                    </Button>
                    <Button variant="outline" size="sm" className="h-8 w-8 bg-primary text-primary-foreground">
                      1
                    </Button>
                    <Button variant="outline" size="sm" className="h-8 w-8">
                      2
                    </Button>
                    <Button variant="outline" size="sm" className="h-8 w-8">
                      3
                    </Button>
                    <Button variant="outline" size="sm" className="h-8 w-8">
                      4
                    </Button>
                    <Button variant="outline" size="sm" className="h-8 w-8">
                      5
                    </Button>
                    <Button variant="outline" size="icon">
                      <ChevronRight className="h-4 w-4" />
                      <span className="sr-only">Next page</span>
                    </Button>
                  </nav>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <MobileNav />
    </div>
  )
}

function ChevronLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}

// Sample product data
const products = [
  {
    id: 1,
    name: "Banarasi Silk Saree",
    slug: "banarasi-silk-saree",
    price: 12999,
    discountPrice: 9999,
    image: "/placeholder.svg?height=300&width=300",
    rating: 5,
    reviewCount: 24,
    isNew: false,
    isFeatured: true,
    badge: "Bestseller",
    category: "silk",
    createdAt: "2023-01-15",
  },
  {
    id: 2,
    name: "Kanjivaram Silk Saree",
    slug: "kanjivaram-silk-saree",
    price: 15999,
    discountPrice: 13999,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4,
    reviewCount: 18,
    isNew: true,
    isFeatured: true,
    category: "silk",
    createdAt: "2023-02-20",
  },
  {
    id: 3,
    name: "Chanderi Cotton Saree",
    slug: "chanderi-cotton-saree",
    price: 5999,
    discountPrice: 4999,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4,
    reviewCount: 32,
    isNew: false,
    isFeatured: true,
    badge: "Sale",
    category: "cotton",
    createdAt: "2023-03-05",
  },
  {
    id: 4,
    name: "Mysore Silk Saree",
    slug: "mysore-silk-saree",
    price: 8999,
    discountPrice: 7499,
    image: "/placeholder.svg?height=300&width=300",
    rating: 5,
    reviewCount: 15,
    isNew: false,
    isFeatured: true,
    category: "silk",
    createdAt: "2023-03-15",
  },
  {
    id: 5,
    name: "Pochampally Ikat Saree",
    slug: "pochampally-ikat-saree",
    price: 7999,
    discountPrice: 6499,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4,
    reviewCount: 27,
    isNew: true,
    isFeatured: true,
    category: "cotton",
    createdAt: "2023-04-01",
  },
  {
    id: 6,
    name: "Patola Silk Saree",
    slug: "patola-silk-saree",
    price: 18999,
    discountPrice: 16999,
    image: "/placeholder.svg?height=300&width=300",
    rating: 5,
    reviewCount: 19,
    isNew: false,
    isFeatured: true,
    badge: "Bestseller",
    category: "silk",
    createdAt: "2023-04-10",
  },
  {
    id: 7,
    name: "Bhagalpuri Silk Saree",
    slug: "bhagalpuri-silk-saree",
    price: 6999,
    discountPrice: 5999,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4,
    reviewCount: 23,
    isNew: false,
    isFeatured: true,
    category: "silk",
    createdAt: "2023-04-20",
  },
  {
    id: 8,
    name: "Gadwal Silk Saree",
    slug: "gadwal-silk-saree",
    price: 11999,
    discountPrice: 9999,
    image: "/placeholder.svg?height=300&width=300",
    rating: 5,
    reviewCount: 14,
    isNew: false,
    isFeatured: true,
    category: "silk",
    createdAt: "2023-05-05",
  },
  {
    id: 9,
    name: "Sambalpuri Saree",
    slug: "sambalpuri-saree",
    price: 4999,
    discountPrice: 3999,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4,
    reviewCount: 31,
    isNew: false,
    isFeatured: true,
    badge: "Sale",
    category: "cotton",
    createdAt: "2023-05-15",
  },
  {
    id: 10,
    name: "Tussar Silk Saree",
    slug: "tussar-silk-saree",
    price: 8499,
    discountPrice: 7499,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4,
    reviewCount: 22,
    isNew: false,
    isFeatured: true,
    category: "silk",
    createdAt: "2023-06-01",
  },
  {
    id: 11,
    name: "Designer Linen Saree",
    slug: "designer-linen-saree",
    price: 7999,
    discountPrice: 6999,
    image: "/placeholder.svg?height=300&width=300",
    rating: 0,
    reviewCount: 0,
    isNew: true,
    isFeatured: true,
    badge: "New",
    category: "designer",
    createdAt: "2023-06-15",
  },
  {
    id: 12,
    name: "Organza Silk Saree",
    slug: "organza-silk-saree",
    price: 9999,
    discountPrice: 8999,
    image: "/placeholder.svg?height=300&width=300",
    rating: 5,
    reviewCount: 3,
    isNew: true,
    isFeatured: true,
    badge: "New",
    category: "designer",
    createdAt: "2023-07-01",
  },
]
