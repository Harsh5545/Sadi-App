"use client"

import Link from "next/link"
import Image from "next/image"
import { Heart, ShoppingBag, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ProductCardProps {
  product: {
    id: number
    name: string
    slug: string
    price: number
    discountPrice?: number
    image: string
    rating: number
    reviewCount: number
    isNew?: boolean
    isFeatured?: boolean
    badge?: string
  }
  className?: string
}

export default function ProductCard({ product, className }: ProductCardProps) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800",
        className,
      )}
    >
      {/* Badge */}
      {product.badge && (
        <div className="absolute left-4 top-4 z-10 rounded-full bg-rose-600 px-2 py-1 text-xs font-medium text-white">
          {product.badge}
        </div>
      )}

      {/* Wishlist button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-2 z-10 h-8 w-8 rounded-full bg-white/80 opacity-0 transition-opacity hover:bg-white group-hover:opacity-100 dark:bg-gray-800/80 dark:hover:bg-gray-800"
        onClick={(e) => {
          e.preventDefault()
          // Add to wishlist logic here
        }}
      >
        <Heart className="h-4 w-4" />
        <span className="sr-only">Add to wishlist</span>
      </Button>

      {/* Product image */}
      <div className="aspect-square w-full overflow-hidden rounded-md">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={300}
          height={300}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Product details */}
      <div className="mt-4 flex flex-1 flex-col">
        <h3 className="text-sm font-medium">{product.name}</h3>

        {/* Ratings */}
        {product.rating > 0 && (
          <div className="mt-1 flex items-center">
            <div className="flex items-center">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < product.rating ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"
                    }`}
                  />
                ))}
            </div>
            <span className="ml-2 text-xs text-gray-500">({product.reviewCount})</span>
          </div>
        )}

        {/* Price */}
        <div className="mt-2 flex items-center justify-between">
          <div>
            <p className="text-lg font-bold">
              ₹{product.discountPrice?.toLocaleString() || product.price.toLocaleString()}
            </p>
            {product.discountPrice && product.discountPrice < product.price && (
              <p className="text-sm text-gray-500 line-through">₹{product.price.toLocaleString()}</p>
            )}
          </div>

          {/* Add to cart button */}
          <Button
            size="sm"
            variant="outline"
            className="h-8 w-8 rounded-full p-0"
            onClick={(e) => {
              e.preventDefault()
              // Add to cart logic here
            }}
          >
            <ShoppingBag className="h-4 w-4" />
            <span className="sr-only">Add to cart</span>
          </Button>
        </div>
      </div>
    </Link>
  )
}
