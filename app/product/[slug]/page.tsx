"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight, Heart, Minus, Plus, Share2, ShoppingCart, Star, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MobileNav from "@/components/mobile-nav"
import WhatsAppButton from "@/components/whatsapp-button"
import ProductImageGallery from "@/components/product-image-gallery"
import RelatedProducts from "@/components/related-products"
import ProductReviews from "@/components/product-reviews"

export default function ProductPage({ params }: { params: { slug: string } }) {
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState("Red")
  const [selectedSize, setSelectedSize] = useState("Free Size")

  // In a real app, you would fetch product data based on the slug
  const product = {
    id: 1,
    name: "Banarasi Silk Saree",
    slug: "banarasi-silk-saree",
    description:
      "Exquisite Banarasi Silk Saree with intricate zari work and rich pallu. This traditional saree is perfect for weddings and special occasions. The saree comes with a matching blouse piece.",
    price: 12999,
    discountPrice: 9999,
    rating: 4.8,
    reviewCount: 24,
    colors: ["Red", "Blue", "Green", "Gold"],
    sizes: ["Free Size"],
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    features: [
      "Pure Banarasi Silk",
      "Intricate zari work",
      "Rich pallu design",
      "Comes with matching blouse piece",
      "Length: 6.3 meters (with blouse piece)",
      "Dry clean only",
    ],
    specifications: {
      Material: "Pure Silk",
      Weave: "Banarasi",
      Length: "6.3 meters (with blouse piece)",
      Width: "45 inches",
      Weight: "800-900 grams",
      Care: "Dry clean only",
      Occasion: "Wedding, Festival, Ceremony",
      "Blouse Piece": "Included (0.8 meters)",
      "Zari Type": "Gold",
      "Border Type": "Medium",
    },
    deliveryInfo: {
      freeShipping: true,
      estimatedDelivery: "5-7 business days",
      returnPolicy: "30-day easy returns",
      codAvailable: true,
    },
    inStock: true,
    stockQuantity: 15,
  }

  const incrementQuantity = () => {
    setQuantity((prev) => (prev < product.stockQuantity ? prev + 1 : prev))
  }

  const decrementQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
  }

  const addToCart = () => {
    // In a real app, this would add the product to the cart
    console.log("Adding to cart:", {
      product,
      quantity,
      color: selectedColor,
      size: selectedSize,
    })
  }

  const addToWishlist = () => {
    // In a real app, this would add the product to the wishlist
    console.log("Adding to wishlist:", product)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container py-6">
          {/* Breadcrumb */}
          <nav className="mb-4 flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/products" className="hover:text-foreground">
              Products
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="font-medium text-foreground">{product.name}</span>
          </nav>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Product Images */}
            <ProductImageGallery images={product.images} productName={product.name} />

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold md:text-3xl">{product.name}</h1>
                <div className="mt-2 flex items-center">
                  <div className="flex items-center">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(product.rating)
                              ? "fill-amber-400 text-amber-400"
                              : "fill-gray-200 text-gray-200"
                          }`}
                        />
                      ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-500">
                    {product.rating} ({product.reviewCount} reviews)
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center">
                  <p className="text-3xl font-bold text-rose-600">₹{product.discountPrice.toLocaleString()}</p>
                  {product.discountPrice < product.price && (
                    <p className="ml-3 text-lg text-gray-500 line-through">₹{product.price.toLocaleString()}</p>
                  )}
                </div>
                {product.discountPrice < product.price && (
                  <p className="text-sm text-green-600">
                    You save ₹{(product.price - product.discountPrice).toLocaleString()} (
                    {Math.round(((product.price - product.discountPrice) / product.price) * 100)}%)
                  </p>
                )}
                <p className="text-sm text-gray-500">Inclusive of all taxes</p>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 text-sm font-medium">Color</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`rounded-md border px-3 py-1 text-sm ${
                          selectedColor === color
                            ? "border-rose-600 bg-rose-50 text-rose-600 dark:bg-rose-950"
                            : "border-gray-300 hover:border-gray-400 dark:border-gray-700"
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-2 text-sm font-medium">Size</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`rounded-md border px-3 py-1 text-sm ${
                          selectedSize === size
                            ? "border-rose-600 bg-rose-50 text-rose-600 dark:bg-rose-950"
                            : "border-gray-300 hover:border-gray-400 dark:border-gray-700"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-2 text-sm font-medium">Quantity</h3>
                  <div className="flex items-center">
                    <Button variant="outline" size="icon" onClick={decrementQuantity} disabled={quantity <= 1}>
                      <Minus className="h-4 w-4" />
                      <span className="sr-only">Decrease quantity</span>
                    </Button>
                    <span className="w-12 text-center">{quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={incrementQuantity}
                      disabled={quantity >= product.stockQuantity}
                    >
                      <Plus className="h-4 w-4" />
                      <span className="sr-only">Increase quantity</span>
                    </Button>
                    <span className="ml-4 text-sm text-gray-500">
                      {product.inStock ? (
                        <span className="text-green-600">{product.stockQuantity} available</span>
                      ) : (
                        <span className="text-red-600">Out of stock</span>
                      )}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  className="flex-1 bg-rose-600 hover:bg-rose-700"
                  onClick={addToCart}
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                <Button variant="outline" className="flex-1" onClick={addToWishlist}>
                  <Heart className="mr-2 h-5 w-5" />
                  Add to Wishlist
                </Button>
              </div>

              <div className="rounded-lg border bg-gray-50 p-4 dark:bg-gray-900">
                <div className="flex items-center gap-3">
                  <Truck className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  <div>
                    <p className="font-medium">
                      {product.deliveryInfo.freeShipping ? "Free Delivery" : "Standard Delivery"}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Estimated delivery within {product.deliveryInfo.estimatedDelivery}
                    </p>
                  </div>
                </div>
                <div className="mt-2 flex items-center gap-3 pt-2">
                  <div className="h-5 w-5 text-gray-600 dark:text-gray-400">↩️</div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{product.deliveryInfo.returnPolicy}</p>
                </div>
                {product.deliveryInfo.codAvailable && (
                  <div className="mt-2 flex items-center gap-3 pt-2">
                    <div className="h-5 w-5 text-gray-600 dark:text-gray-400">💰</div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Cash on Delivery available</p>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm" className="h-8 gap-1 text-gray-600 dark:text-gray-400">
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
                <WhatsAppButton
                  text={`Check out this amazing ${product.name} on Pavitra Sarees! Price: ₹${product.discountPrice}`}
                  productUrl={`https://pavitrasarees.com/product/${product.slug}`}
                />
              </div>
            </div>
          </div>

          {/* Product Tabs */}
          <div className="mt-12">
            <Tabs defaultValue="description">
              <TabsList className="w-full justify-start overflow-auto">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="mt-6">
                <div className="prose max-w-none dark:prose-invert">
                  <p>{product.description}</p>
                </div>
              </TabsContent>
              <TabsContent value="features" className="mt-6">
                <ul className="list-inside list-disc space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="specifications" className="mt-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between border-b pb-2">
                      <span className="font-medium">{key}</span>
                      <span className="text-gray-600 dark:text-gray-400">{value}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="reviews" className="mt-6">
                <ProductReviews productId={product.id} rating={product.rating} reviewCount={product.reviewCount} />
              </TabsContent>
            </Tabs>
          </div>

          {/* Related Products */}
          <RelatedProducts />
        </div>
      </main>
      <Footer />
      <MobileNav />
    </div>
  )
}
