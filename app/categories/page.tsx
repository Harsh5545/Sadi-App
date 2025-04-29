import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MobileNav from "@/components/mobile-nav"

export const metadata = {
  title: "Categories - Pavitra Sarees",
  description: "Browse our wide range of saree categories. Find the perfect saree for every occasion.",
}

export default function CategoriesPage() {
  // This would be fetched from an API in a real application
  const categories = [
    {
      name: "Silk Sarees",
      slug: "silk-sarees",
      image: "/placeholder.svg?height=300&width=300",
      count: 120,
      description: "Luxurious silk sarees for special occasions and celebrations.",
    },
    {
      name: "Cotton Sarees",
      slug: "cotton-sarees",
      image: "/placeholder.svg?height=300&width=300",
      count: 85,
      description: "Comfortable and breathable cotton sarees for everyday wear.",
    },
    {
      name: "Wedding Collection",
      slug: "wedding-collection",
      image: "/placeholder.svg?height=300&width=300",
      count: 64,
      description: "Exquisite sarees for brides and wedding ceremonies.",
    },
    {
      name: "Designer Sarees",
      slug: "designer-sarees",
      image: "/placeholder.svg?height=300&width=300",
      count: 78,
      description: "Unique designer sarees with contemporary patterns and styles.",
    },
    {
      name: "Casual Wear",
      slug: "casual-wear",
      image: "/placeholder.svg?height=300&width=300",
      count: 92,
      description: "Comfortable and stylish sarees for everyday occasions.",
    },
    {
      name: "Accessories",
      slug: "accessories",
      image: "/placeholder.svg?height=300&width=300",
      count: 45,
      description: "Beautiful accessories to complement your saree collection.",
    },
    {
      name: "Banarasi Sarees",
      slug: "banarasi-sarees",
      image: "/placeholder.svg?height=300&width=300",
      count: 56,
      description: "Traditional Banarasi sarees with intricate designs and patterns.",
    },
    {
      name: "Kanjivaram Sarees",
      slug: "kanjivaram-sarees",
      image: "/placeholder.svg?height=300&width=300",
      count: 48,
      description: "Classic Kanjivaram silk sarees known for their durability and luster.",
    },
    {
      name: "Chanderi Sarees",
      slug: "chanderi-sarees",
      image: "/placeholder.svg?height=300&width=300",
      count: 35,
      description: "Lightweight Chanderi sarees with a shimmering texture.",
    },
    {
      name: "Georgette Sarees",
      slug: "georgette-sarees",
      image: "/placeholder.svg?height=300&width=300",
      count: 62,
      description: "Flowy and elegant georgette sarees for various occasions.",
    },
    {
      name: "Chiffon Sarees",
      slug: "chiffon-sarees",
      image: "/placeholder.svg?height=300&width=300",
      count: 54,
      description: "Light and airy chiffon sarees perfect for parties and events.",
    },
    {
      name: "Linen Sarees",
      slug: "linen-sarees",
      image: "/placeholder.svg?height=300&width=300",
      count: 28,
      description: "Eco-friendly linen sarees for a comfortable and stylish look.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gray-50 py-12 dark:bg-gray-900">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-bold md:text-4xl">Categories</h1>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Browse our wide range of saree categories. Find the perfect saree for every occasion.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {categories.map((category) => (
                <div
                  key={category.slug}
                  className="overflow-hidden rounded-lg border bg-white shadow-sm dark:bg-gray-800"
                >
                  <Link href={`/category/${category.slug}`} className="group block">
                    <div className="aspect-square w-full overflow-hidden">
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={category.name}
                        width={300}
                        height={300}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-medium">{category.name}</h3>
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{category.count} products</p>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{category.description}</p>
                      <Button className="mt-4 w-full bg-rose-600 hover:bg-rose-700">View Collection</Button>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Category */}
        <section className="bg-rose-50 py-16 dark:bg-rose-950">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex flex-col justify-center">
                <h2 className="text-2xl font-bold md:text-3xl">Wedding Season Collection</h2>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  Discover our exclusive collection of wedding sarees, perfect for brides, bridesmaids, and wedding
                  guests. Crafted with the finest materials and intricate designs to make your special day even more
                  memorable.
                </p>
                <div className="mt-6">
                  <Button className="bg-rose-600 hover:bg-rose-700">Explore Collection</Button>
                </div>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Wedding Collection"
                  width={500}
                  height={500}
                  className="h-full w-full object-cover"
                />
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
