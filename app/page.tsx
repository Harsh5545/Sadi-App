import type React from "react"
import { Suspense } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Instagram } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MobileNav from "@/components/mobile-nav"
import HeroSlider from "@/components/hero-slider"
import NewsletterPopup from "@/components/newsletter-popup"
import ChatbotWidget from "@/components/chatbot-widget"
import ProductCard from "@/components/product-card"
import CategoryCard from "@/components/category-card"
import TestimonialCard from "@/components/testimonial-card"
import { generateStructuredData } from "@/lib/seo"

export const metadata = {
  title: "Alberow Sadi Collection - Premium Indian Ethnic Wear & Sarees",
  description:
    "Discover exquisite sarees, lehengas, and ethnic wear for all occasions. Shop the finest collection of traditional Indian clothing with nationwide delivery.",
  keywords:
    "sadi, saree, ethnic wear, indian clothing, traditional wear, wedding sarees, silk sarees, designer sarees, banarasi saree, kanjivaram saree",
  openGraph: {
    title: "Alberow Sadi Collection - Premium Indian Ethnic Wear & Sarees",
    description:
      "Discover exquisite sarees, lehengas, and ethnic wear for all occasions. Shop the finest collection of traditional Indian clothing with nationwide delivery.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alberow Sadi Collection",
      },
    ],
  },
}

export default function Home() {
  // This would be fetched from an API in a real application
  const structuredData = generateStructuredData({
    type: "WebSite",
    name: "Alberow Sadi Collection",
    description: "Premium Indian Ethnic Wear & Sarees",
    url: "https://alberow.com",
  })

  return (
    <div className="flex min-h-screen flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navbar />
      <main className="flex-1">
        {/* Hero Slider Section */}
        <section className="relative">
          <HeroSlider />
        </section>

        {/* Featured Categories Section */}
        <section className="py-16">
          <div className="mx-auto px-12 py-8">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-3xl font-bold">Shop by Category</h2>
              <Link href="/categories" className="flex items-center text-rose-600 hover:underline">
                View All Categories <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
              {categories.map((category) => (
                <CategoryCard key={category.name} category={category} />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Collections */}
        <section className="bg-gray-50 py-16 dark:bg-gray-900">
          <div className="mx-auto px-12 py-8">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-3xl font-bold">Featured Collections</h2>
              <Link href="/collections" className="flex items-center text-rose-600 hover:underline">
                View All Collections <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {collections.map((collection) => (
                <Link
                  key={collection.name}
                  href={`/collections/${collection.slug}`}
                  className="group relative overflow-hidden rounded-lg"
                >
                  <div className="aspect-[16/9] w-full overflow-hidden rounded-lg">
                    <Image
                      src={collection.image || "/placeholder.svg"}
                      alt={collection.name}
                      width={600}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-6">
                    <div>
                      <h3 className="text-xl font-medium text-white">{collection.name}</h3>
                      <p className="mt-2 text-sm text-white/80">{collection.description}</p>
                      <Button className="mt-4 bg-rose-600 hover:bg-rose-700">Shop Now</Button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16">
          <div className="mx-auto px-12 py-8">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-3xl font-bold">Featured Products</h2>
              <Link href="/products" className="flex items-center text-rose-600 hover:underline">
                View All Products <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <Tabs defaultValue="trending">
              <TabsList className="mb-8">
                <TabsTrigger value="trending">Trending</TabsTrigger>
                <TabsTrigger value="bestsellers">Bestsellers</TabsTrigger>
                <TabsTrigger value="new-arrivals">New Arrivals</TabsTrigger>
                <TabsTrigger value="sale">Sale</TabsTrigger>
              </TabsList>
              <TabsContent value="trending">
                <Suspense fallback={<ProductSkeleton />}>
                  <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {featuredProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </Suspense>
              </TabsContent>
              <TabsContent value="bestsellers">
                <Suspense fallback={<ProductSkeleton />}>
                  <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {bestsellers.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </Suspense>
              </TabsContent>
              <TabsContent value="new-arrivals">
                <Suspense fallback={<ProductSkeleton />}>
                  <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {newArrivals.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </Suspense>
              </TabsContent>
              <TabsContent value="sale">
                <Suspense fallback={<ProductSkeleton />}>
                  <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {saleProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </Suspense>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Banner Section */}
        <section className="py-8">
          <div className="mx-auto px-12 py-8">
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=400&width=1200"
                alt="Special Offer"
                width={1200}
                height={400}
                className="h-auto w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center bg-black/30 p-8">
                <div className="max-w-lg">
                  <h2 className="text-3xl font-bold text-white md:text-4xl">Wedding Season Sale</h2>
                  <p className="mt-4 text-lg text-white">
                    Get up to 30% off on our exclusive wedding collection. Limited time offer.
                  </p>
                  <Button size="lg" className="mt-6 bg-rose-600 hover:bg-rose-700">
                    Shop Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="mx-auto px-12 py-8">
            <h2 className="mb-8 text-center text-3xl font-bold">What Our Customers Say</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </section>

        {/* Instagram Feed */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="mx-auto px-12 py-8">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-3xl font-bold">Follow Us on Instagram</h2>
              <Link href="https://instagram.com/alberow" className="flex items-center text-rose-600 hover:underline">
                @alberow <Instagram className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {instagramPosts.map((post, index) => (
                <Link key={index} href={post.url} target="_blank" rel="noopener noreferrer" className="group">
                  <div className="relative aspect-square overflow-hidden rounded-lg">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={`Instagram post ${index + 1}`}
                      width={300}
                      height={300}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all group-hover:bg-black/50 group-hover:opacity-100">
                      <Instagram className="h-8 w-8 text-white" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="mx-auto px-12 py-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <Card key={index} className="border-none shadow-none">
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <feature.icon className="mb-4 h-12 w-12 text-rose-600" />
                    <h3 className="mb-2 text-lg font-medium">{feature.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileNav />
      <NewsletterPopup />
      <ChatbotWidget />
    </div>
  )
}

function ProductSkeleton() {
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {Array(10)
        .fill(0)
        .map((_, i) => (
          <div key={i} className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800">
            <Skeleton className="aspect-square w-full rounded-md" />
            <Skeleton className="mt-4 h-4 w-2/3" />
            <Skeleton className="mt-2 h-4 w-1/2" />
            <div className="mt-2 flex items-center justify-between">
              <Skeleton className="h-6 w-1/3" />
              <Skeleton className="h-8 w-8 rounded-full" />
            </div>
          </div>
        ))}
    </div>
  )
}

const categories = [
  {
    name: "Silk Sarees",
    slug: "silk-sarees",
    image: "/placeholder.svg?height=300&width=300",
    count: 120,
  },
  {
    name: "Cotton Sarees",
    slug: "cotton-sarees",
    image: "/placeholder.svg?height=300&width=300",
    count: 85,
  },
  {
    name: "Wedding Collection",
    slug: "wedding-collection",
    image: "/placeholder.svg?height=300&width=300",
    count: 64,
  },
  {
    name: "Designer Sarees",
    slug: "designer-sarees",
    image: "/placeholder.svg?height=300&width=300",
    count: 78,
  },
  {
    name: "Casual Wear",
    slug: "casual-wear",
    image: "/placeholder.svg?height=300&width=300",
    count: 92,
  },
  {
    name: "Accessories",
    slug: "accessories",
    image: "/placeholder.svg?height=300&width=300",
    count: 45,
  },
]

const collections = [
  {
    name: "Wedding Season Collection",
    slug: "wedding-season",
    description: "Exquisite sarees for the wedding season",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Festival Special",
    slug: "festival-special",
    description: "Celebrate festivals with our special collection",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Summer Essentials",
    slug: "summer-essentials",
    description: "Light and breathable sarees for summer",
    image: "/placeholder.svg?height=400&width=600",
  },
]

const featuredProducts = [
  {
    id: 1,
    name: "Banarasi Silk Saree",
    slug: "banarasi-silk-saree",
    price: 12999,
    discountPrice: 9999,
    image: "/placeholder.svg?height=300&width=300",
    rating: 5,
    reviewCount: 24,
    isNew: false,
    isFeatured: true,
    badge: "Bestseller",
  },
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

const bestsellers = [
  {
    id: 6,
    name: "Patola Silk Saree",
    slug: "patola-silk-saree",
    price: 18999,
    discountPrice: 16999,
    image: "/placeholder.svg?height=300&width=300",
    rating: 5,
    reviewCount: 19,
    isNew: false,
    isFeatured: true,
    badge: "Bestseller",
  },
  {
    id: 7,
    name: "Bhagalpuri Silk Saree",
    slug: "bhagalpuri-silk-saree",
    price: 6999,
    discountPrice: 5999,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4,
    reviewCount: 23,
    isNew: false,
    isFeatured: true,
  },
  {
    id: 8,
    name: "Gadwal Silk Saree",
    slug: "gadwal-silk-saree",
    price: 11999,
    discountPrice: 9999,
    image: "/placeholder.svg?height=300&width=300",
    rating: 5,
    reviewCount: 14,
    isNew: false,
    isFeatured: true,
  },
  {
    id: 9,
    name: "Sambalpuri Saree",
    slug: "sambalpuri-saree",
    price: 4999,
    discountPrice: 3999,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4,
    reviewCount: 31,
    isNew: false,
    isFeatured: true,
    badge: "Sale",
  },
  {
    id: 10,
    name: "Tussar Silk Saree",
    slug: "tussar-silk-saree",
    price: 8499,
    discountPrice: 7499,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4,
    reviewCount: 22,
    isNew: false,
    isFeatured: true,
  },
]

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
]

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
]

const testimonials = [
  {
    name: "Priya Sharma",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 5,
    comment:
      "The quality of the silk saree I purchased exceeded my expectations. The colors are vibrant and the fabric is luxurious. Will definitely shop again!",
    date: "2 weeks ago",
    location: "Mumbai",
    verified: true,
  },
  {
    name: "Anita Patel",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 5,
    comment:
      "I ordered a saree for my daughter's wedding and it arrived beautifully packaged. The craftsmanship is exceptional and the delivery was prompt.",
    date: "1 month ago",
    location: "Delhi",
    verified: true,
  },
  {
    name: "Meera Reddy",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 4,
    comment:
      "Great collection of traditional sarees with modern designs. The customer service was very helpful when I needed to exchange for a different color.",
    date: "3 weeks ago",
    location: "Bangalore",
    verified: true,
  },
]

const instagramPosts = [
  {
    image: "/placeholder.svg?height=300&width=300",
    url: "https://instagram.com/p/1",
  },
  {
    image: "/placeholder.svg?height=300&width=300",
    url: "https://instagram.com/p/2",
  },
  {
    image: "/placeholder.svg?height=300&width=300",
    url: "https://instagram.com/p/3",
  },
  {
    image: "/placeholder.svg?height=300&width=300",
    url: "https://instagram.com/p/4",
  },
  {
    image: "/placeholder.svg?height=300&width=300",
    url: "https://instagram.com/p/5",
  },
  {
    image: "/placeholder.svg?height=300&width=300",
    url: "https://instagram.com/p/6",
  },
]

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Free shipping on all orders above ₹999",
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description: "100% secure payment methods",
  },
  {
    icon: RefreshCcw,
    title: "Easy Returns",
    description: "30-day return policy for eligible items",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Dedicated customer support team",
  },
]

function Truck(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 17h4V5H2v12h3" />
      <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5" />
      <path d="M14 17h1" />
      <circle cx="7.5" cy="17.5" r="2.5" />
      <circle cx="17.5" cy="17.5" r="2.5" />
    </svg>
  )
}

function Shield(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    </svg>
  )
}

function RefreshCcw(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 2v6h6" />
      <path d="M21 12A9 9 0 0 0 6 5.3L3 8" />
      <path d="M21 22v-6h-6" />
      <path d="M3 12a9 9 0 0 0 15 6.7l3-2.7" />
    </svg>
  )
}

function HeadphonesIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3v-7z" />
      <path d="M21 14h-3a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3v-7z" />
      <path d="M12 1a9 9 0 0 1 9 9v1h-6v-1a3 3 0 0 0-6 0v1H3v-1a9 9 0 0 1 9-9z" />
    </svg>
  )
}
