import Link from "next/link"
import { ArrowRight } from "lucide-react"
import ProductCard from "@/components/product-card"

export default function RelatedProducts() {
  // In a real app, you would fetch related products from an API
  const relatedProducts = [
    {
      id: 2,
      name: "Kanjivaram Silk Saree",
      slug: "kanjivaram-silk-saree",
      price: 15999,
      discountPrice: 13999,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4,
      reviewCount: 18,
      isNew: true,
      isFeatured: true,
    },
    {
      id: 3,
      name: "Chanderi Cotton Saree",
      slug: "chanderi-cotton-saree",
      price: 5999,
      discountPrice: 4999,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4,
      reviewCount: 32,
      isNew: false,
      isFeatured: true,
      badge: "Sale",
    },
    {
      id: 4,
      name: "Mysore Silk Saree",
      slug: "mysore-silk-saree",
      price: 8999,
      discountPrice: 7499,
      image: "/placeholder.svg?height=300&width=300",
      rating: 5,
      reviewCount: 15,
      isNew: false,
      isFeatured: true,
    },
    {
      id: 5,
      name: "Pochampally Ikat Saree",
      slug: "pochampally-ikat-saree",
      price: 7999,
      discountPrice: 6499,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4,
      reviewCount: 27,
      isNew: true,
      isFeatured: true,
    },
  ]

  return (
    <div className="mt-16">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">You May Also Like</h2>
        <Link href="/products" className="flex items-center text-rose-600 hover:underline">
          View All <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
