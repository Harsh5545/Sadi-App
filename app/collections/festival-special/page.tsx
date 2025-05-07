import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MobileNav from "@/components/mobile-nav"
import ProductCard from "@/components/product-card"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb"
import { generateStructuredData } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Festival Special Collection | Pavitra Sarees",
  description:
    "Celebrate festivals with our special collection of sarees. Vibrant colors and designs for every festive occasion.",
  keywords: "festival sarees, festive collection, diwali sarees, navratri sarees, durga puja sarees, festive wear",
  openGraph: {
    title: "Festival Special Collection | Pavitra Sarees",
    description:
      "Celebrate festivals with our special collection of sarees. Vibrant colors and designs for every festive occasion.",
    images: [
      {
        url: "/og-festival-special.jpg",
        width: 1200,
        height: 630,
        alt: "Festival Special Collection",
      },
    ],
  },
}

export default function FestivalSpecialPage() {
  // Mock products data - in a real app, this would be fetched from an API
  const products = Array(8)
    .fill(0)
    .map((_, i) => ({
      id: i + 1,
      name: `Festival Special Saree ${i + 1}`,
      slug: `festival-special-saree-${i + 1}`,
      price: Math.floor(Math.random() * 10000) + 3000,
      discountPrice: Math.floor(Math.random() * 8000) + 2500,
      image: "/placeholder.svg?height=300&width=300",
      rating: Math.floor(Math.random() * 5) + 1,
      reviewCount: Math.floor(Math.random() * 50) + 5,
      isNew: Math.random() > 0.8,
      isFeatured: Math.random() > 0.7,
      badge: Math.random() > 0.7 ? "Festive" : null,
    }))

  // Generate structured data for SEO
  const structuredData = generateStructuredData({
    type: "BreadcrumbList",
    name: "Festival Special Collection",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Collections", url: "/collections" },
      { name: "Festival Special", url: "/collections/festival-special" },
    ],
  })

  return (
    <div className="flex min-h-screen flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="relative h-80 w-full overflow-hidden md:h-96 lg:h-[500px]">
            <Image
              src="/placeholder.svg?height=500&width=1200"
              alt="Festival Special Collection"
              width={1200}
              height={500}
              className="h-full w-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50 flex items-center">
              <div className="container">
                <div className="max-w-2xl">
                  <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">Festival Special Collection</h1>
                  <p className="mt-4 text-white/90 text-lg">
                    Celebrate festivals with our special collection of sarees. Vibrant colors and designs for every
                    festive occasion.
                  </p>
                  <Button size="lg" className="mt-6 bg-rose-600 hover:bg-rose-700">
                    Shop Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <section className="border-b py-4">
          <div className="container">
            <Breadcrumb>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink href="/collections">Collections</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="/collections/festival-special">Festival Special</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
        </section>

        {/* Collection Description */}
        <section className="py-12">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold">About This Collection</h2>
                <div className="mt-4 prose max-w-none dark:prose-invert">
                  <p>
                    Our Festival Special Collection is designed to help you celebrate India's rich cultural festivals in
                    style. From Diwali to Navratri, Durga Puja to Onam, we offer sarees that capture the essence and
                    spirit of each festival.
                  </p>
                  <p>
                    These sarees feature vibrant colors, festive motifs, and traditional designs that are perfect for
                    religious ceremonies, family gatherings, and festive celebrations.
                  </p>
                  <p>
                    Each piece in this collection is crafted to combine traditional aesthetics with contemporary style,
                    ensuring you look your best during the festive season.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Festival Collection Image 1"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Festival Collection Image 2"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Festival Collection Image 3"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Festival Collection Image 4"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Festival Categories */}
        <section className="bg-gray-50 py-12 dark:bg-gray-900">
          <div className="container">
            <h2 className="mb-8 text-2xl font-bold">Shop By Festival</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
              <Link href="/festival/diwali" className="group relative overflow-hidden rounded-lg">
                <div className="aspect-square w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Diwali Collection"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-6">
                  <div>
                    <h3 className="text-xl font-medium text-white">Diwali Collection</h3>
                    <Button className="mt-4 bg-rose-600 hover:bg-rose-700">Shop Now</Button>
                  </div>
                </div>
              </Link>
              <Link href="/festival/navratri" className="group relative overflow-hidden rounded-lg">
                <div className="aspect-square w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Navratri Collection"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-6">
                  <div>
                    <h3 className="text-xl font-medium text-white">Navratri Collection</h3>
                    <Button className="mt-4 bg-rose-600 hover:bg-rose-700">Shop Now</Button>
                  </div>
                </div>
              </Link>
              <Link href="/festival/durga-puja" className="group relative overflow-hidden rounded-lg">
                <div className="aspect-square w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Durga Puja Collection"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-6">
                  <div>
                    <h3 className="text-xl font-medium text-white">Durga Puja Collection</h3>
                    <Button className="mt-4 bg-rose-600 hover:bg-rose-700">Shop Now</Button>
                  </div>
                </div>
              </Link>
              <Link href="/festival/onam" className="group relative overflow-hidden rounded-lg">
                <div className="aspect-square w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Onam Collection"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-6">
                  <div>
                    <h3 className="text-xl font-medium text-white">Onam Collection</h3>
                    <Button className="mt-4 bg-rose-600 hover:bg-rose-700">Shop Now</Button>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-12">
          <div className="container">
            <h2 className="mb-8 text-2xl font-bold">Featured Products</h2>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {products.slice(0, 4).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* All Products */}
        <section className="py-12">
          <div className="container">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-2xl font-bold">All Products</h2>
              <div className="flex items-center space-x-4">
                <select className="rounded-md border border-gray-300 px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-800">
                  <option>Sort by: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                  <option>Best Selling</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button size="lg" className="bg-rose-600 hover:bg-rose-700">
                Load More
              </Button>
            </div>
          </div>
        </section>

        {/* Styling Tips */}
        <section className="bg-rose-50 py-12 dark:bg-rose-950/30">
          <div className="container">
            <h2 className="mb-8 text-2xl font-bold text-center">Festival Styling Tips</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
                <h3 className="text-xl font-medium">Color Significance</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Learn about the significance of different colors for various festivals and how to choose the right
                  saree.
                </p>
                <Button variant="link" className="mt-4 p-0 text-rose-600">
                  Read More
                </Button>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
                <h3 className="text-xl font-medium">Accessorizing</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Tips on how to accessorize your festive sarees with the right jewelry, bindis, and other accessories.
                </p>
                <Button variant="link" className="mt-4 p-0 text-rose-600">
                  Read More
                </Button>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
                <h3 className="text-xl font-medium">Regional Styles</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Explore different regional styles of draping sarees for various festivals across India.
                </p>
                <Button variant="link" className="mt-4 p-0 text-rose-600">
                  Read More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileNav />
    </div>
  )
}
