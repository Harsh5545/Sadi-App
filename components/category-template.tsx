import Image from "next/image"
import { Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MobileNav from "@/components/mobile-nav"
import ProductCard from "@/components/product-card"
import ProductFilters from "@/components/product-filters"
import ProductSort from "@/components/product-sort"
import { generateBreadcrumbJsonLd } from "@/lib/seo-utils"

export interface CategoryTemplateProps {
  title: string
  description: string
  slug: string
  bannerImage: string
  products: any[]
  breadcrumbs: Array<{ name: string; url: string }>
}

export default function CategoryTemplate({
  title,
  description,
  slug,
  bannerImage,
  products,
  breadcrumbs,
}: CategoryTemplateProps) {
  const breadcrumbJsonLd = generateBreadcrumbJsonLd(breadcrumbs)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Navbar />
      <main className="flex-1">
        {/* Banner */}
        <div className="relative h-[200px] md:h-[300px]">
          <Image
            src={bannerImage || "/placeholder.svg?height=300&width=1200"}
            alt={title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 p-6 flex flex-col justify-center items-center text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">{title}</h1>
            <p className="text-white/90 max-w-2xl">{description}</p>
          </div>
        </div>

        <div className="container py-8">
          {/* Breadcrumbs */}
          <Breadcrumb className="mb-6">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/categories">Categories</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/category/${slug}`} isCurrentPage>
                {title}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          {/* Category Info */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Explore Our {title}</h2>
            <p className="text-gray-600 dark:text-gray-400">{description}</p>
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
                  <Separator className="mb-4" />
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
                    3
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
