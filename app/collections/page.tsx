import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
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
import { generateSeoMetadata } from "@/lib/seo-utils"

export const metadata: Metadata = generateSeoMetadata({
  title: "Collections | Pavitra Sarees",
  description: "Explore our curated collections of premium sarees and ethnic wear for every occasion.",
  keywords: "saree collections, ethnic wear collections, wedding collection, festival collection, summer collection",
  canonical: "/collections",
})

export default function CollectionsPage() {
  // Sample collections data - in a real app, this would come from an API or database
  const collections = [
    {
      id: 1,
      name: "Wedding Season Collection",
      slug: "wedding-season",
      description:
        "Exquisite sarees for the wedding season featuring rich fabrics, intricate embroidery, and traditional designs perfect for brides and wedding guests.",
      image: "/placeholder.svg?height=400&width=600",
      productCount: 45,
    },
    {
      id: 2,
      name: "Festival Special",
      slug: "festival-special",
      description:
        "Celebrate festivals with our special collection of vibrant sarees featuring festive colors, traditional motifs, and comfortable fabrics for all-day wear.",
      image: "/placeholder.svg?height=400&width=600",
      productCount: 38,
    },
    {
      id: 3,
      name: "Summer Essentials",
      slug: "summer-essentials",
      description:
        "Beat the heat with our collection of light and breathable sarees in cotton, linen, and other summer-friendly fabrics with contemporary designs.",
      image: "/placeholder.svg?height=400&width=600",
      productCount: 32,
    },
    {
      id: 4,
      name: "Office Wear",
      slug: "office-wear",
      description:
        "Professional and elegant sarees perfect for the workplace, featuring subtle designs, comfortable fabrics, and easy-to-drape styles.",
      image: "/placeholder.svg?height=400&width=600",
      productCount: 28,
    },
    {
      id: 5,
      name: "Designer Collection",
      slug: "designer-collection",
      description:
        "Exclusive designer sarees featuring unique patterns, premium fabrics, and contemporary designs for those who appreciate haute couture.",
      image: "/placeholder.svg?height=400&width=600",
      productCount: 24,
    },
    {
      id: 6,
      name: "Bridal Collection",
      slug: "bridal-collection",
      description:
        "Stunning bridal sarees crafted with the finest silks, intricate zari work, and traditional designs to make your special day even more memorable.",
      image: "/placeholder.svg?height=400&width=600",
      productCount: 20,
    },
  ]

  return (
    <>
      <Navbar />
      <main className="flex-1 py-8">
        <div className="container">
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
                <BreadcrumbLink href="/collections" isCurrentPage>
                  Collections
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Our Collections</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Explore our curated collections of premium sarees and ethnic wear for every occasion.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {collections.map((collection) => (
              <Link
                key={collection.id}
                href={`/collections/${collection.slug}`}
                className="group overflow-hidden rounded-lg border shadow-sm transition-all hover:shadow-md"
              >
                <div className="aspect-[3/2] relative overflow-hidden">
                  <Image
                    src={collection.image || "/placeholder.svg"}
                    alt={collection.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h2 className="text-xl font-bold text-white mb-1">{collection.name}</h2>
                    <p className="text-white/80 text-sm">{collection.productCount} Products</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{collection.description}</p>
                  <Button className="w-full bg-rose-600 hover:bg-rose-700">View Collection</Button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <MobileNav />
    </>
  )
}
