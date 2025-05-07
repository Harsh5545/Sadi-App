import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MobileNav from "@/components/mobile-nav"
import ProductCard from "@/components/product-card"
import ProductFilters from "@/components/product-filters"
import ProductSort from "@/components/product-sort"

export const metadata = {
  title: "Cotton Sarees Collection | Pavitra Sarees",
  description:
    "Explore our comfortable and elegant collection of cotton sarees for everyday wear and special occasions.",
}

export default function CottonSareesPage() {
  // This would be fetched from an API in a real application
  const products = [
    {
      id: 1,
      name: "Chanderi Cotton Saree",
      slug: "chanderi-cotton-saree-green",
      price: 5999,
      discountPrice: 4999,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.7,
      reviewCount: 86,
      isNew: false,
      isFeatured: true,
      badge: "Bestseller",
    },
    {
      id: 2,
      name: "Mangalgiri Cotton Saree",
      slug: "mangalgiri-cotton-saree-blue",
      price: 4999,
      discountPrice: 3999,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.6,
      reviewCount: 64,
      isNew: true,
      isFeatured: false,
      badge: "New",
    },
    {
      id: 3,
      name: "Bengal Cotton Saree",
      slug: "bengal-cotton-saree-white",
      price: 3999,
      discountPrice: 3499,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.5,
      reviewCount: 52,
      isNew: false,
      isFeatured: false,
      badge: null,
    },
    {
      id: 4,
      name: "Sambalpuri Cotton Saree",
      slug: "sambalpuri-cotton-saree-maroon",
      price: 4599,
      discountPrice: 3999,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.7,
      reviewCount: 48,
      isNew: false,
      isFeatured: false,
      badge: null,
    },
    {
      id: 5,
      name: "Chettinad Cotton Saree",
      slug: "chettinad-cotton-saree-yellow",
      price: 3799,
      discountPrice: 3299,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.4,
      reviewCount: 37,
      isNew: false,
      isFeatured: true,
      badge: "Handloom",
    },
    {
      id: 6,
      name: "Pochampally Cotton Saree",
      slug: "pochampally-cotton-saree-pink",
      price: 4299,
      discountPrice: 3799,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.6,
      reviewCount: 42,
      isNew: false,
      isFeatured: false,
      badge: null,
    },
    {
      id: 7,
      name: "Kalamkari Cotton Saree",
      slug: "kalamkari-cotton-saree-beige",
      price: 4999,
      discountPrice: 4299,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.8,
      reviewCount: 56,
      isNew: true,
      isFeatured: false,
      badge: "New",
    },
    {
      id: 8,
      name: "Madurai Cotton Saree",
      slug: "madurai-cotton-saree-orange",
      price: 3599,
      discountPrice: 2999,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.3,
      reviewCount: 31,
      isNew: false,
      isFeatured: false,
      badge: "Sale",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[300px] overflow-hidden">
          <Image
            src="/placeholder.svg?height=300&width=1200"
            alt="Cotton Sarees Collection"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold mb-4">Cotton Sarees Collection</h1>
              <p className="text-lg max-w-2xl mx-auto">
                Comfortable, breathable, and elegant cotton sarees for everyday wear and special occasions
              </p>
            </div>
          </div>
        </section>

        <div className="container py-8">
          {/* Breadcrumb */}
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
              <BreadcrumbLink href="/category/cotton-sarees" isCurrentPage>
                Cotton Sarees
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          {/* Category Description */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">About Cotton Sarees</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Cotton sarees are a perfect blend of comfort and elegance. Known for their breathability and versatility,
              these sarees are ideal for everyday wear, office settings, and casual gatherings. Our collection features
              handloom cotton sarees from different regions of India, each with unique weaving techniques, patterns, and
              cultural significance. From the intricate Kalamkari prints to the geometric patterns of Pochampally,
              discover the rich diversity of Indian cotton sarees.
            </p>
          </div>

          {/* Subcategories */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Explore Cotton Varieties</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/category/cotton-sarees/handloom" className="group relative overflow-hidden rounded-lg">
                <div className="aspect-square w-full overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Handloom Cotton"
                    width={200}
                    height={200}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h4 className="text-lg font-medium text-white">Handloom Cotton</h4>
                </div>
              </Link>
              <Link href="/category/cotton-sarees/printed" className="group relative overflow-hidden rounded-lg">
                <div className="aspect-square w-full overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Printed Cotton"
                    width={200}
                    height={200}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h4 className="text-lg font-medium text-white">Printed Cotton</h4>
                </div>
              </Link>
              <Link href="/category/cotton-sarees/embroidered" className="group relative overflow-hidden rounded-lg">
                <div className="aspect-square w-full overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Embroidered Cotton"
                    width={200}
                    height={200}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h4 className="text-lg font-medium text-white">Embroidered Cotton</h4>
                </div>
              </Link>
              <Link href="/category/cotton-sarees/block-print" className="group relative overflow-hidden rounded-lg">
                <div className="aspect-square w-full overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Block Print Cotton"
                    width={200}
                    height={200}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h4 className="text-lg font-medium text-white">Block Print Cotton</h4>
                </div>
              </Link>
            </div>
          </div>

          {/* Products Section */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters - Desktop */}
            <div className="hidden md:block w-64 flex-shrink-0">
              <ProductFilters />
            </div>

            {/* Products */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-2xl font-bold">Cotton Sarees</h2>
                  <p className="text-gray-500 dark:text-gray-400">{products.length} products</p>
                </div>
                <ProductSort />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-8 flex justify-center">
                <div className="flex items-center gap-2">
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

        {/* Featured Section */}
        <section className="bg-gray-50 py-12 dark:bg-gray-900">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8 text-center">Why Choose Our Cotton Sarees?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-rose-100 dark:bg-rose-900/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-8 w-8 text-rose-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Breathable Comfort</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our cotton sarees are perfect for everyday wear, especially in warm weather, offering unmatched
                  comfort and breathability.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-rose-100 dark:bg-rose-900/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-8 w-8 text-rose-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Artisanal Craftsmanship</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Each cotton saree is crafted by skilled artisans using traditional techniques, ensuring authentic
                  quality and design.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-rose-100 dark:bg-rose-900/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-8 w-8 text-rose-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Eco-Friendly Choice</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Cotton is a natural, biodegradable fiber, making these sarees an environmentally conscious choice for
                  sustainable fashion.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Care Instructions */}
        <section className="py-12">
          <div className="container">
            <h2 className="text-2xl font-bold mb-6">Cotton Saree Care Instructions</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm dark:bg-gray-950">
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 mr-2 text-rose-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Washing:</strong> Hand wash in cold water with mild detergent. Avoid harsh chemicals that
                    can damage the fabric.
                  </span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 mr-2 text-rose-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Drying:</strong> Air dry in shade. Direct sunlight can fade colors and weaken the fabric.
                  </span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 mr-2 text-rose-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Ironing:</strong> Iron when slightly damp on medium heat to remove wrinkles effectively.
                  </span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 mr-2 text-rose-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Storage:</strong> Store folded in a cool, dry place. Avoid hanging for long periods to
                    prevent stretching.
                  </span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 mr-2 text-rose-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Starch:</strong> Light starch can be used to maintain crispness, especially for handloom
                    cotton sarees.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileNav />
    </div>
  )
}
