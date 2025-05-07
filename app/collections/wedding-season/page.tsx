import type { Metadata } from "next"
import Image from "next/image"
import { ChevronRight, Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MobileNav from "@/components/mobile-nav"
import ProductCard from "@/components/product-card"
import ProductFilters from "@/components/product-filters"
import ProductSort from "@/components/product-sort"
import { generateSeoMetadata, generateBreadcrumbJsonLd } from "@/lib/seo-utils"

export const metadata: Metadata = generateSeoMetadata({
  title: "Wedding Season Collection | Pavitra Sarees",
  description:
    "Explore our exquisite wedding season collection featuring premium silk sarees, designer lehengas, and traditional ethnic wear for all wedding occasions.",
  keywords: "wedding sarees, bridal collection, wedding lehengas, wedding ethnic wear, bridal sarees, wedding season",
  canonical: "/collections/wedding-season",
  ogImage: "/images/collections/wedding-season-banner.jpg",
})

export default function WeddingSeasonCollectionPage() {
  // Sample products data - in a real app, this would come from an API or database
  const products = [
    {
      id: 1,
      name: "Banarasi Silk Bridal Saree",
      slug: "banarasi-silk-bridal-saree",
      price: 25999,
      discountPrice: 21999,
      image: "/placeholder.svg?height=300&width=300",
      rating: 5,
      reviewCount: 18,
      isNew: false,
      isFeatured: true,
      badge: "Bestseller",
    },
    {
      id: 2,
      name: "Kanjivaram Wedding Saree",
      slug: "kanjivaram-wedding-saree",
      price: 32999,
      discountPrice: 28999,
      image: "/placeholder.svg?height=300&width=300",
      rating: 5,
      reviewCount: 24,
      isNew: true,
      isFeatured: true,
      badge: "New",
    },
    {
      id: 3,
      name: "Designer Wedding Lehenga",
      slug: "designer-wedding-lehenga",
      price: 45999,
      discountPrice: 39999,
      image: "/placeholder.svg?height=300&width=300",
      rating: 5,
      reviewCount: 12,
      isNew: false,
      isFeatured: true,
    },
    {
      id: 4,
      name: "Embroidered Bridal Saree",
      slug: "embroidered-bridal-saree",
      price: 28999,
      discountPrice: 24999,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.5,
      reviewCount: 16,
      isNew: false,
      isFeatured: true,
    },
    {
      id: 5,
      name: "Wedding Guest Silk Saree",
      slug: "wedding-guest-silk-saree",
      price: 18999,
      discountPrice: 15999,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.5,
      reviewCount: 22,
      isNew: false,
      isFeatured: true,
    },
    {
      id: 6,
      name: "Reception Gown Saree",
      slug: "reception-gown-saree",
      price: 22999,
      discountPrice: 19999,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.5,
      reviewCount: 14,
      isNew: true,
      isFeatured: true,
      badge: "New",
    },
    {
      id: 7,
      name: "Sangeet Ceremony Saree",
      slug: "sangeet-ceremony-saree",
      price: 16999,
      discountPrice: 14999,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4,
      reviewCount: 18,
      isNew: false,
      isFeatured: true,
    },
    {
      id: 8,
      name: "Mehendi Function Saree",
      slug: "mehendi-function-saree",
      price: 12999,
      discountPrice: 10999,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4,
      reviewCount: 20,
      isNew: false,
      isFeatured: true,
    },
  ]

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Collections", url: "/collections" },
    { name: "Wedding Season", url: "/collections/wedding-season" },
  ]

  const breadcrumbJsonLd = generateBreadcrumbJsonLd(breadcrumbs)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Navbar />
      <main className="flex-1">
        {/* Banner */}
        <div className="relative h-[300px] md:h-[400px]">
          <Image
            src="/placeholder.svg?height=400&width=1200"
            alt="Wedding Season Collection"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 p-6 flex flex-col justify-center items-center text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Wedding Season Collection</h1>
            <p className="text-white/90 max-w-2xl">
              Exquisite sarees for the wedding season featuring rich fabrics, intricate embroidery, and traditional
              designs perfect for brides and wedding guests.
            </p>
          </div>
        </div>

        <div className="container py-8">
          {/* Breadcrumbs */}
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="/collections">Collections</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="/collections/wedding-season" isCurrentPage>
                  Wedding Season
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Collection Info */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Wedding Season Collection</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Discover our exquisite collection of wedding sarees and ethnic wear designed to make your special day
              unforgettable. From traditional bridal sarees to elegant outfits for wedding guests, our wedding season
              collection features premium fabrics, intricate craftsmanship, and timeless designs.
            </p>
          </div>

          {/* Filters and Products */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Mobile Filter Button */}
            <div className="lg:hidden flex justify-between mb-4">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="w-full">
                    <Filter className="mr-2 h-4 w-4" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                    <SheetDescription>Narrow down your product search</SheetDescription>
                  </SheetHeader>
                  <div className="py-4">
                    <ProductFilters />
                  </div>
                </SheetContent>
              </Sheet>
              <ProductSort className="ml-4" />
            </div>

            {/* Desktop Filters */}
            <div className="hidden lg:block w-[250px] flex-shrink-0">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium">Filters</h3>
                    <Button variant="ghost" size="sm" className="h-8 text-xs">
                      Reset
                    </Button>
                  </div>
                  <ProductFilters />
                </CardContent>
              </Card>
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="hidden lg:flex justify-between items-center mb-6">
                <p className="text-sm text-gray-500">Showing {products.length} products</p>
                <ProductSort />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-8 flex justify-center">
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" size="sm" className="bg-rose-600 text-white hover:bg-rose-700">
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <MobileNav />
    </>
  )
}
