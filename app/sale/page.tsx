import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MobileNav from "@/components/mobile-nav"
import ProductCard from "@/components/product-card"
import ProductFilters from "@/components/product-filters"
import ProductSort from "@/components/product-sort"

export const metadata = {
  title: "Sale - Pavitra Sarees",
  description:
    "Shop our sale collection with discounts up to 50% off. Limited time offers on premium sarees and ethnic wear.",
}

export default function SalePage() {
  // This would be fetched from an API in a real application
  const saleProducts = [
    {
      id: 16,
      name: "Printed Georgette Saree",
      slug: "printed-georgette-saree",
      price: 4999,
      discountPrice: 2999,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4,
      reviewCount: 18,
      isNew: false,
      isFeatured: true,
      badge: "40% Off",
    },
    {
      id: 17,
      name: "Chiffon Designer Saree",
      slug: "chiffon-designer-saree",
      price: 6999,
      discountPrice: 4199,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4,
      reviewCount: 12,
      isNew: false,
      isFeatured: true,
      badge: "40% Off",
    },
    {
      id: 18,
      name: "Art Silk Saree",
      slug: "art-silk-saree",
      price: 3999,
      discountPrice: 2599,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4,
      reviewCount: 24,
      isNew: false,
      isFeatured: true,
      badge: "35% Off",
    },
    {
      id: 19,
      name: "Printed Linen Saree",
      slug: "printed-linen-saree",
      price: 5999,
      discountPrice: 3599,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4,
      reviewCount: 16,
      isNew: false,
      isFeatured: true,
      badge: "40% Off",
    },
    {
      id: 20,
      name: "Casual Cotton Saree",
      slug: "casual-cotton-saree",
      price: 2999,
      discountPrice: 1799,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4,
      reviewCount: 29,
      isNew: false,
      isFeatured: true,
      badge: "40% Off",
    },
    {
      id: 21,
      name: "Banarasi Silk Saree - Special",
      slug: "banarasi-silk-saree-special",
      price: 15999,
      discountPrice: 11999,
      image: "/placeholder.svg?height=300&width=300",
      rating: 5,
      reviewCount: 14,
      isNew: false,
      isFeatured: true,
      badge: "25% Off",
    },
    {
      id: 22,
      name: "Kanjivaram Silk Saree - Festive",
      slug: "kanjivaram-silk-saree-festive",
      price: 19999,
      discountPrice: 14999,
      image: "/placeholder.svg?height=300&width=300",
      rating: 5,
      reviewCount: 8,
      isNew: false,
      isFeatured: true,
      badge: "25% Off",
    },
    {
      id: 23,
      name: "Chanderi Cotton Saree - Limited",
      slug: "chanderi-cotton-saree-limited",
      price: 7999,
      discountPrice: 5599,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4,
      reviewCount: 19,
      isNew: false,
      isFeatured: true,
      badge: "30% Off",
    },
    {
      id: 24,
      name: "Mysore Silk Saree - Classic",
      slug: "mysore-silk-saree-classic",
      price: 9999,
      discountPrice: 6999,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4,
      reviewCount: 22,
      isNew: false,
      isFeatured: true,
      badge: "30% Off",
    },
    {
      id: 25,
      name: "Pochampally Ikat Saree - Handloom",
      slug: "pochampally-ikat-saree-handloom",
      price: 8999,
      discountPrice: 6299,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4,
      reviewCount: 17,
      isNew: false,
      isFeatured: true,
      badge: "30% Off",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-rose-50 py-12 dark:bg-rose-950">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-bold md:text-4xl">Sale</h1>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Shop our sale collection with discounts up to 50% off. Limited time offers on premium sarees and ethnic
                wear.
              </p>
              <div className="mt-6">
                <Button className="bg-rose-600 hover:bg-rose-700">Shop Now</Button>
              </div>
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
                  <p className="text-gray-600 dark:text-gray-300">Showing {saleProducts.length} products</p>
                  <ProductSort />
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                  {saleProducts.map((product) => (
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

        {/* Sale Banner */}
        <section className="py-8">
          <div className="container">
            <div className="relative overflow-hidden rounded-lg bg-rose-600 p-8 text-white">
              <div className="relative z-10 mx-auto max-w-3xl text-center">
                <h2 className="text-2xl font-bold md:text-3xl">End of Season Sale</h2>
                <p className="mt-4">
                  Hurry! Limited time offer. Get additional 10% off on all sale items with code EXTRA10.
                </p>
                <div className="mt-6">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-rose-600">
                    Shop Now
                  </Button>
                </div>
              </div>
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-rose-500 opacity-50"></div>
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-rose-500 opacity-50"></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileNav />
    </div>
  )
}
