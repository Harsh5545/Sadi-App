import type React from "react"
import { Suspense } from "react"
import Link from "next/link"
import { Filter, SlidersHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MobileNav from "@/components/mobile-nav"
import ProductCard from "@/components/product-card"
import ProductFilters from "@/components/product-filters"
import ProductSort from "@/components/product-sort"
import { generateStructuredData } from "@/lib/seo"

export const metadata = {
  title: "Products | Pavitra Sarees",
  description: "Browse our collection of premium sarees, lehengas, and ethnic wear for all occasions.",
}

export default function ProductsPage() {
  // This would be fetched from an API in a real application
  const structuredData = generateStructuredData({
    type: "BreadcrumbList",
    name: "Products",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Products", url: "/products" },
    ],
  })

  return (
    <div className="flex min-h-screen flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navbar />
      <main className="flex-1">
        <div className="mx-auto px-12 py-8">
          {/* Breadcrumb */}
          <nav className="mb-4 flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <span>/</span>
            <span className="font-medium text-foreground">Products</span>
          </nav>

          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold md:text-3xl">All Products</h1>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="md:hidden">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
              <ProductSort />
            </div>
          </div>

          {/* Mobile Category Tabs */}
          <div className="mt-4 md:hidden">
            <Tabs defaultValue="all">
              <TabsList className="w-full justify-start overflow-auto">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="silk">Silk</TabsTrigger>
                <TabsTrigger value="cotton">Cotton</TabsTrigger>
                <TabsTrigger value="wedding">Wedding</TabsTrigger>
                <TabsTrigger value="casual">Casual</TabsTrigger>
                <TabsTrigger value="designer">Designer</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-[240px_1fr]">
            {/* Filters - Desktop */}
            <Card className="hidden h-fit md:block">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-medium">Filters</h2>
                  <Button variant="ghost" size="sm" className="h-8 text-xs">
                    Reset All
                  </Button>
                </div>
                <Separator className="my-4" />
                <ProductFilters />
              </CardContent>
            </Card>

            {/* Products Grid */}
            <div>
              <div className="mb-4 hidden items-center justify-between md:flex">
                <p className="text-sm text-muted-foreground">Showing 1-24 of 248 products</p>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <SlidersHorizontal className="mr-2 h-4 w-4" />
                    View: Grid
                  </Button>
                </div>
              </div>

              <Suspense fallback={<ProductSkeleton />}>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </Suspense>

              {/* Pagination */}
              <div className="mt-8 flex justify-center">
                <nav className="flex items-center space-x-1">
                  <Button variant="outline" size="icon" disabled>
                    <ChevronLeft className="h-4 w-4" />
                    <span className="sr-only">Previous page</span>
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 w-8">
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
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <MobileNav />
    </div>
  )
}

function ProductSkeleton() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
      {Array(12)
        .fill(0)
        .map((_, i) => (
          <div key={i} className="space-y-2">
            <Skeleton className="aspect-[3/4] w-full rounded-lg" />
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-4 w-1/2" />
            <div className="flex items-center justify-between">
              <Skeleton className="h-5 w-1/3" />
              <Skeleton className="h-8 w-8 rounded-full" />
            </div>
          </div>
        ))}
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

function ChevronRight(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m9 18 6-6-6-6" />
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
  },
]
