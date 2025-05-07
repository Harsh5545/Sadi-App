import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Heart, ShoppingBag, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MobileNav from "@/components/mobile-nav"
import { generateSeoMetadata } from "@/lib/seo-utils"

export const metadata: Metadata = generateSeoMetadata({
  title: "My Wishlist | Pavitra Sarees",
  description: "View and manage your saved items in your wishlist.",
  keywords: "wishlist, saved items, favorites, sarees collection",
  canonical: "/wishlist",
})

// Mock wishlist items - in a real app, this would come from a user's saved items
const wishlistItems = [
  {
    id: 1,
    name: "Banarasi Silk Saree",
    slug: "banarasi-silk-saree",
    price: 12999,
    discountPrice: 9999,
    image: "/placeholder.svg?height=200&width=200",
    inStock: true,
  },
  {
    id: 2,
    name: "Kanjivaram Silk Saree",
    slug: "kanjivaram-silk-saree",
    price: 15999,
    discountPrice: 13999,
    image: "/placeholder.svg?height=200&width=200",
    inStock: true,
  },
  {
    id: 3,
    name: "Chanderi Cotton Saree",
    slug: "chanderi-cotton-saree",
    price: 5999,
    discountPrice: 4999,
    image: "/placeholder.svg?height=200&width=200",
    inStock: false,
  },
  {
    id: 4,
    name: "Mysore Silk Saree",
    slug: "mysore-silk-saree",
    price: 8999,
    discountPrice: 7499,
    image: "/placeholder.svg?height=200&width=200",
    inStock: true,
  },
]

export default function WishlistPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 py-8">
        <div className="container">
          {/* Breadcrumbs */}
          <Breadcrumb className="mb-6">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/account">My Account</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/wishlist" isCurrentPage>
                Wishlist
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold">My Wishlist</h1>
            <p className="text-gray-500">{wishlistItems.length} items</p>
          </div>

          {wishlistItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {wishlistItems.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <div className="relative aspect-square">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                    <Button
                      size="icon"
                      variant="ghost"
                      className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full"
                    >
                      <Trash2 className="h-5 w-5 text-rose-600" />
                      <span className="sr-only">Remove from wishlist</span>
                    </Button>
                  </div>
                  <CardContent className="p-4">
                    <Link href={`/product/${item.slug}`} className="hover:underline">
                      <h3 className="font-medium mb-2">{item.name}</h3>
                    </Link>
                    <div className="flex items-center mb-3">
                      <span className="font-bold text-lg">₹{item.discountPrice.toLocaleString()}</span>
                      {item.price !== item.discountPrice && (
                        <span className="ml-2 text-gray-500 line-through">₹{item.price.toLocaleString()}</span>
                      )}
                    </div>
                    <Button className="w-full bg-rose-600 hover:bg-rose-700" disabled={!item.inStock}>
                      <ShoppingBag className="mr-2 h-4 w-4" />
                      {item.inStock ? "Add to Cart" : "Out of Stock"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-rose-100 mb-4">
                <Heart className="h-8 w-8 text-rose-600" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Your wishlist is empty</h2>
              <p className="text-gray-500 mb-6">
                Items added to your wishlist will appear here. Start exploring our collections!
              </p>
              <Button asChild className="bg-rose-600 hover:bg-rose-700">
                <Link href="/products">Browse Products</Link>
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <MobileNav />
    </>
  )
}
