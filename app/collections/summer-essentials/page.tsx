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
  title: "Summer Essentials Collection | Pavitra Sarees",
  description: "Light and breathable sarees for summer. Stay cool and stylish with our summer essentials collection.",
  keywords: "summer sarees, cotton sarees, linen sarees, lightweight sarees, breathable sarees, summer fashion",
  openGraph: {
    title: "Summer Essentials Collection | Pavitra Sarees",
    description: "Light and breathable sarees for summer. Stay cool and stylish with our summer essentials collection.",
    images: [
      {
        url: "/og-summer-essentials.jpg",
        width: 1200,
        height: 630,
        alt: "Summer Essentials Collection",
      },
    ],
  },
}

export default function SummerEssentialsPage() {
  // Mock products data - in a real app, this would be fetched from an API
  const products = Array(8)
    .fill(0)
    .map((_, i) => ({
      id: i + 1,
      name: `Summer Essential Saree ${i + 1}`,
      slug: `summer-essential-saree-${i + 1}`,
      price: Math.floor(Math.random() * 6000) + 2000,
      discountPrice: Math.floor(Math.random() * 5000) + 1500,
      image: "/placeholder.svg?height=300&width=300",
      rating: Math.floor(Math.random() * 5) + 1,
      reviewCount: Math.floor(Math.random() * 50) + 5,
      isNew: Math.random() > 0.8,
      isFeatured: Math.random() > 0.7,
      badge: Math.random() > 0.7 ? "Summer" : null,
    }))

  // Generate structured data for SEO
  const structuredData = generateStructuredData({
    type: "BreadcrumbList",
    name: "Summer Essentials Collection",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Collections", url: "/collections" },
      { name: "Summer Essentials", url: "/collections/summer-essentials" },
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
              alt="Summer Essentials Collection"
              width={1200}
              height={500}
              className="h-full w-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40 flex items-center">
              <div className="container">
                <div className="max-w-2xl">
                  <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                    Summer Essentials Collection
                  </h1>
                  <p className="mt-4 text-white/90 text-lg">
                    Light and breathable sarees for summer. Stay cool and stylish with our summer essentials collection.
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
                <BreadcrumbLink href="/collections/summer-essentials">Summer Essentials</BreadcrumbLink>
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
                    Our Summer Essentials Collection features lightweight, breathable sarees perfect for the hot summer
                    months. Made from natural fabrics like cotton, linen, and lightweight silk blends, these sarees keep
                    you cool and comfortable.
                  </p>
                  <p>
                    The collection includes a variety of prints, pastel colors, and minimalist designs that are perfect
                    for both casual wear and summer events. Each piece is carefully selected for its comfort, style, and
                    versatility.
                  </p>
                  <p>
                    Whether you're looking for office wear, casual outings, or summer parties, our Summer Essentials
                    Collection offers the perfect blend of tradition and seasonal practicality.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Summer Collection Image 1"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Summer Collection Image 2"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Summer Collection Image 3"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Summer Collection Image 4"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fabric Categories */}
        <section className="bg-gray-50 py-12 dark:bg-gray-900">
          <div className="container">
            <h2 className="mb-8 text-2xl font-bold">Shop By Fabric</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              <Link href="/fabric/cotton" className="group relative overflow-hidden rounded-lg">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Cotton Sarees"
                    width={400}
                    height={300}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-6">
                  <div>
                    <h3 className="text-xl font-medium text-white">Cotton Sarees</h3>
                    <p className="mt-2 text-sm text-white/80">Breathable and comfortable</p>
                    <Button className="mt-4 bg-rose-600 hover:bg-rose-700">Shop Now</Button>
                  </div>
                </div>
              </Link>
              <Link href="/fabric/linen" className="group relative overflow-hidden rounded-lg">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Linen Sarees"
                    width={400}
                    height={300}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-6">
                  <div>
                    <h3 className="text-xl font-medium text-white">Linen Sarees</h3>
                    <p className="mt-2 text-sm text-white/80">Light and eco-friendly</p>
                    <Button className="mt-4 bg-rose-600 hover:bg-rose-700">Shop Now</Button>
                  </div>
                </div>
              </Link>
              <Link href="/fabric/chiffon" className="group relative overflow-hidden rounded-lg">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Chiffon Sarees"
                    width={400}
                    height={300}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-6">
                  <div>
                    <h3 className="text-xl font-medium text-white">Chiffon Sarees</h3>
                    <p className="mt-2 text-sm text-white/80">Flowy and elegant</p>
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

        {/* Summer Style Guide */}
        <section className="bg-rose-50 py-12 dark:bg-rose-950/30">
          <div className="container">
            <h2 className="mb-8 text-2xl font-bold text-center">Summer Style Guide</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
                <h3 className="text-xl font-medium">Staying Cool</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Tips for staying cool and comfortable in sarees during the summer months.
                </p>
                <Button variant="link" className="mt-4 p-0 text-rose-600">
                  Read More
                </Button>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
                <h3 className="text-xl font-medium">Summer Colors</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Guide to choosing the right colors for summer sarees that reflect heat and keep you cool.
                </p>
                <Button variant="link" className="mt-4 p-0 text-rose-600">
                  Read More
                </Button>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
                <h3 className="text-xl font-medium">Light Accessories</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Recommendations for lightweight accessories that complement summer sarees without adding heat.
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
