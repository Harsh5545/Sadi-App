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
  title: "Silk Sarees Collection | Pavitra Sarees",
  description: "Explore our exquisite collection of silk sarees, including Banarasi, Kanjivaram, and more.",
}

export default function SilkSareesPage() {
  // This would be fetched from an API in a real application
  const products = [
    {
      id: 1,
      name: "Banarasi Silk Saree",
      slug: "banarasi-silk-saree-pink",
      price: 12999,
      discountPrice: 9999,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.8,
      reviewCount: 124,
      isNew: false,
      isFeatured: true,
      badge: "Bestseller",
    },
    {
      id: 2,
      name: "Kanjivaram Silk Saree",
      slug: "kanjivaram-silk-saree-blue",
      price: 15999,
      discountPrice: 13999,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.9,
      reviewCount: 86,
      isNew: true,
      isFeatured: false,
      badge: "New",
    },
    {
      id: 3,
      name: "Mysore Silk Saree",
      slug: "mysore-silk-saree-green",
      price: 8999,
      discountPrice: 7499,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.7,
      reviewCount: 52,
      isNew: false,
      isFeatured: false,
      badge: null,
    },
    {
      id: 4,
      name: "Bhagalpuri Silk Saree",
      slug: "bhagalpuri-silk-saree-yellow",
      price: 6999,
      discountPrice: 5999,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.5,
      reviewCount: 38,
      isNew: false,
      isFeatured: false,
      badge: null,
    },
    {
      id: 5,
      name: "Patola Silk Saree",
      slug: "patola-silk-saree-red",
      price: 18999,
      discountPrice: 16999,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.9,
      reviewCount: 45,
      isNew: false,
      isFeatured: true,
      badge: "Premium",
    },
    {
      id: 6,
      name: "Tussar Silk Saree",
      slug: "tussar-silk-saree-beige",
      price: 7999,
      discountPrice: 6999,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.6,
      reviewCount: 29,
      isNew: false,
      isFeatured: false,
      badge: null,
    },
    {
      id: 7,
      name: "Organza Silk Saree",
      slug: "organza-silk-saree-purple",
      price: 9999,
      discountPrice: 8499,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.7,
      reviewCount: 34,
      isNew: true,
      isFeatured: false,
      badge: "New",
    },
    {
      id: 8,
      name: "Gadwal Silk Saree",
      slug: "gadwal-silk-saree-maroon",
      price: 11999,
      discountPrice: 10499,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.8,
      reviewCount: 41,
      isNew: false,
      isFeatured: false,
      badge: null,
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
            alt="Silk Sarees Collection"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold mb-4">Silk Sarees Collection</h1>
              <p className="text-lg max-w-2xl mx-auto">
                Explore our exquisite collection of handcrafted silk sarees from across India
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
              <BreadcrumbLink href="/category/silk-sarees" isCurrentPage>
                Silk Sarees
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          {/* Category Description */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">About Silk Sarees</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Silk sarees are the epitome of Indian craftsmanship and tradition. Each silk saree is meticulously
              handcrafted by skilled artisans using techniques passed down through generations. Our collection features
              various types of silk sarees including Banarasi, Kanjivaram, Mysore, Patola, and more. These luxurious
              sarees are perfect for weddings, festivals, and special occasions.
            </p>
          </div>

          {/* Subcategories */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Explore Silk Varieties</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/category/silk-sarees/banarasi" className="group relative overflow-hidden rounded-lg">
                <div className="aspect-square w-full overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Banarasi Silk"
                    width={200}
                    height={200}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h4 className="text-lg font-medium text-white">Banarasi Silk</h4>
                </div>
              </Link>
              <Link href="/category/silk-sarees/kanjivaram" className="group relative overflow-hidden rounded-lg">
                <div className="aspect-square w-full overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Kanjivaram Silk"
                    width={200}
                    height={200}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h4 className="text-lg font-medium text-white">Kanjivaram Silk</h4>
                </div>
              </Link>
              <Link href="/category/silk-sarees/patola" className="group relative overflow-hidden rounded-lg">
                <div className="aspect-square w-full overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Patola Silk"
                    width={200}
                    height={200}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h4 className="text-lg font-medium text-white">Patola Silk</h4>
                </div>
              </Link>
              <Link href="/category/silk-sarees/tussar" className="group relative overflow-hidden rounded-lg">
                <div className="aspect-square w-full overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Tussar Silk"
                    width={200}
                    height={200}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h4 className="text-lg font-medium text-white">Tussar Silk</h4>
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
                  <h2 className="text-2xl font-bold">Silk Sarees</h2>
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
            <h2 className="text-2xl font-bold mb-8 text-center">Why Choose Our Silk Sarees?</h2>
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
                      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Authentic Craftsmanship</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Each saree is handcrafted by skilled artisans using traditional techniques passed down through
                  generations.
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
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Premium Quality</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We source the finest quality silk to ensure durability, luxurious feel, and vibrant colors that last.
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
                      d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Heritage & Tradition</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our sarees represent India's rich cultural heritage, with designs that tell stories of ancient
                  traditions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Care Instructions */}
        <section className="py-12">
          <div className="container">
            <h2 className="text-2xl font-bold mb-6">Silk Saree Care Instructions</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm dark:bg-gray-950">
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 mr-2 text-rose-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Dry Clean Only:</strong> We recommend dry cleaning your silk sarees to maintain their color,
                    texture, and finish.
                  </span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 mr-2 text-rose-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Storage:</strong> Store in a cool, dry place wrapped in a cotton cloth. Avoid plastic covers
                    as they can trap moisture.
                  </span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 mr-2 text-rose-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Avoid Direct Sunlight:</strong> Prolonged exposure to sunlight can fade the vibrant colors
                    of your silk saree.
                  </span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 mr-2 text-rose-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Handling:</strong> Be careful with jewelry and rough surfaces that might snag the delicate
                    silk threads.
                  </span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 mr-2 text-rose-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Ironing:</strong> If needed, iron on low heat with a cloth placed between the iron and the
                    saree.
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
