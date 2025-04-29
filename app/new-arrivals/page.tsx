import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MobileNav from "@/components/mobile-nav"
import ProductCard from "@/components/product-card"
import ProductFilters from "@/components/product-filters"
import ProductSort from "@/components/product-sort"

export const metadata = {
  title: "New Arrivals - Pavitra Sarees",
  description: "Discover our latest collection of sarees and ethnic wear. Fresh designs added weekly.",
}

export default function NewArrivalsPage() {
  // This would be fetched from an API in a real application
  const newArrivals = [
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
    {
      id: 13,
      name: "Jamdani Cotton Saree",
      slug: "jamdani-cotton-saree",
      price: 6499,
      discountPrice: 5999,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4,
      reviewCount: 5,
      isNew: true,
      isFeatured: true,
      badge: "New",
    },
    {
      id: 14,
      name: "Bandhani Silk Saree",
      slug: "bandhani-silk-saree",
      price: 8999,
      discountPrice: 7999,
      image: "/placeholder.svg?height=300&width=300",
      rating: 5,
      reviewCount: 2,
      isNew: true,
      isFeatured: true,
      badge: "New",
    },
    {
      id: 15,
      name: "Kalamkari Cotton Saree",
      slug: "kalamkari-cotton-saree",
      price: 5499,
      discountPrice: 4999,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4,
      reviewCount: 4,
      isNew: true,
      isFeatured: true,
      badge: "New",
    },
    {
      id: 16,
      name: "Banarasi Silk Saree - New Design",
      slug: "banarasi-silk-saree-new",
      price: 14999,
      discountPrice: 12999,
      image: "/placeholder.svg?height=300&width=300",
      rating: 5,
      reviewCount: 1,
      isNew: true,
      isFeatured: true,
      badge: "New",
    },
    {
      id: 17,
      name: "Kanjivaram Silk Saree - Limited Edition",
      slug: "kanjivaram-silk-saree-limited",
      price: 18999,
      discountPrice: 16999,
      image: "/placeholder.svg?height=300&width=300",
      rating: 5,
      reviewCount: 2,
      isNew: true,
      isFeatured: true,
      badge: "New",
    },
    {
      id: 18,
      name: "Chanderi Silk Cotton Saree",
      slug: "chanderi-silk-cotton-saree",
      price: 7499,
      discountPrice: 6499,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4,
      reviewCount: 3,
      isNew: true,
      isFeatured: true,
      badge: "New",
    },
    {
      id: 19,
      name: "Pochampally Ikat Saree - New Collection",
      slug: "pochampally-ikat-saree-new",
      price: 9499,
      discountPrice: 8499,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4,
      reviewCount: 2,
      isNew: true,
      isFeatured: true,
      badge: "New",
    },
    {
      id: 20,
      name: "Bhagalpuri Silk Saree - New Design",
      slug: "bhagalpuri-silk-saree-new",
      price: 8499,
      discountPrice: 7499,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4,
      reviewCount: 1,
      isNew: true,
      isFeatured: true,
      badge: "New",
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
              <h1 className="text-3xl font-bold md:text-4xl">New Arrivals</h1>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Discover our latest collection of sarees and ethnic wear. Fresh designs added weekly.
              </p>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              {/* Filters */}
              <div className="md:col-span-1">
                <ProductFilters />
              </div>

              {/* Products */}
              <div className="md:col-span-3">
                <div className="mb-6 flex items-center justify-between">
                  <p className="text-gray-600 dark:text-gray-300">Showing {newArrivals.length} products</p>
                  <ProductSort />
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                  {newArrivals.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                <div className="mt-8 flex justify-center">
                  <Button variant="outline">Load More</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-rose-50 py-16 dark:bg-rose-950">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold md:text-3xl">Stay Updated</h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Subscribe to our newsletter to be the first to know about new arrivals and exclusive offers.
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-md border border-gray-300 px-4 py-2 sm:w-64"
                />
                <Button className="w-full bg-rose-600 hover:bg-rose-700 sm:w-auto">Subscribe</Button>
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
