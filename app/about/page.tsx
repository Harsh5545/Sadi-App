import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle2, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MobileNav from "@/components/mobile-nav"

export const metadata = {
  title: "About Us | Pavitra Sarees",
  description: "Learn about Pavitra Sarees, our mission, values, and the story behind our premium saree collection.",
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="relative h-[300px] w-full overflow-hidden md:h-[400px]">
            <Image
              src="/placeholder.svg?height=400&width=1200"
              alt="About Pavitra Sarees"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
              <h1 className="text-3xl font-bold md:text-5xl">About Pavitra Sarees</h1>
              <p className="mt-4 max-w-2xl px-4 text-lg">
                Celebrating the rich heritage of Indian craftsmanship since 1995
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-3xl font-bold">Our Story</h2>
                <div className="mt-6 space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    Pavitra Sarees began as a small family business in the heart of Gujarat in 1995. What started as a
                    modest shop with a handful of handpicked sarees has now grown into one of India's most trusted
                    destinations for premium ethnic wear.
                  </p>
                  <p>
                    Our founder, Mrs. Savitri Patel, had a vision to preserve the rich textile heritage of India while
                    making it accessible to women across the country. Her passion for traditional craftsmanship and eye
                    for quality laid the foundation for what Pavitra Sarees represents today.
                  </p>
                  <p>
                    Over the years, we have built strong relationships with skilled artisans and weavers from various
                    parts of India. These partnerships have allowed us to offer authentic, high-quality sarees that
                    showcase the diverse textile traditions of our country.
                  </p>
                </div>
                <div className="mt-8">
                  <Button asChild className="bg-rose-600 hover:bg-rose-700">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Pavitra Sarees Founder"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="bg-gray-50 py-16 dark:bg-gray-900">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
                At Pavitra Sarees, our mission is to preserve and promote the rich textile heritage of India while
                empowering the artisans and weavers who create these masterpieces. We strive to provide our customers
                with authentic, high-quality sarees that celebrate the diverse craftsmanship of our country.
              </p>
              <div className="mt-10 grid gap-8 md:grid-cols-3">
                <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 text-rose-600 dark:bg-rose-900">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-medium">Quality</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We are committed to offering only the finest quality sarees, carefully selected for their
                    craftsmanship and materials.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 text-rose-600 dark:bg-rose-900">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-medium">Artisan Support</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We work directly with weavers and artisans, ensuring fair compensation and preserving traditional
                    techniques.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 text-rose-600 dark:bg-rose-900">
                    <HeartIcon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-medium">Customer Satisfaction</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We are dedicated to providing exceptional service and ensuring every customer finds their perfect
                    saree.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16">
          <div className="container">
            <h2 className="mb-12 text-center text-3xl font-bold">Meet Our Team</h2>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {team.map((member) => (
                <div key={member.name} className="text-center">
                  <div className="mx-auto mb-4 aspect-square w-40 overflow-hidden rounded-full">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={160}
                      height={160}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-medium">{member.name}</h3>
                  <p className="text-rose-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-gray-50 py-16 dark:bg-gray-900">
          <div className="container">
            <h2 className="mb-12 text-center text-3xl font-bold">What Our Customers Say</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
                  <div className="mb-4 flex">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < testimonial.rating ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"
                          }`}
                        />
                      ))}
                  </div>
                  <p className="mb-4 text-gray-600 dark:text-gray-300">"{testimonial.comment}"</p>
                  <div className="flex items-center">
                    <div className="mr-4 h-10 w-10 overflow-hidden rounded-full">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={40}
                        height={40}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container">
            <div className="rounded-lg bg-rose-600 p-8 text-center text-white md:p-12">
              <h2 className="text-3xl font-bold">Experience the Pavitra Difference</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg">
                Discover our exquisite collection of sarees and ethnic wear, crafted with love and tradition.
              </p>
              <div className="mt-8">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/products">Shop Now</Link>
                </Button>
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

function HeartIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}

function Star(props: React.SVGProps<SVGSVGElement>) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

const team = [
  {
    name: "Savitri Patel",
    role: "Founder & CEO",
    image: "/placeholder.svg?height=160&width=160",
  },
  {
    name: "Rajesh Patel",
    role: "Managing Director",
    image: "/placeholder.svg?height=160&width=160",
  },
  {
    name: "Priya Sharma",
    role: "Head of Design",
    image: "/placeholder.svg?height=160&width=160",
  },
  {
    name: "Amit Singh",
    role: "Marketing Manager",
    image: "/placeholder.svg?height=160&width=160",
  },
]

const testimonials = [
  {
    name: "Meera Reddy",
    location: "Bangalore",
    rating: 5,
    comment:
      "I've been a loyal customer of Pavitra Sarees for over 5 years now. Their collection is unmatched in quality and design. Every saree I've purchased has received countless compliments.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Ananya Sharma",
    location: "Delhi",
    rating: 5,
    comment:
      "The customer service at Pavitra Sarees is exceptional. They helped me find the perfect saree for my sister's wedding and even rushed the delivery when I needed it urgently.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Priya Patel",
    location: "Mumbai",
    rating: 4,
    comment:
      "The craftsmanship of their sarees is outstanding. You can really see the attention to detail and the quality of materials used. I always recommend Pavitra Sarees to my friends and family.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]
