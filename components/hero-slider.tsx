"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"

interface SlideProps {
  image: string
  title: string
  subtitle: string
  buttonText: string
  buttonLink: string
}

const slides: SlideProps[] = [
  {
    image: "/placeholder.svg?height=1080&width=1920",
    title: "Exquisite Sadi Collection",
    subtitle: "Discover the finest traditional Indian sarees crafted with premium fabrics and intricate designs",
    buttonText: "Shop Collection",
    buttonLink: "/products",
  },
  {
    image: "/placeholder.svg?height=1080&width=1920",
    title: "Wedding Season Special",
    subtitle: "Elegant sarees for the wedding season. Perfect for brides, bridesmaids and guests",
    buttonText: "Explore Wedding Collection",
    buttonLink: "/collections/wedding-season",
  },
  {
    image: "/placeholder.svg?height=1080&width=1920",
    title: "New Arrivals",
    subtitle: "Check out our latest collection of designer sarees with contemporary patterns",
    buttonText: "View New Arrivals",
    buttonLink: "/new-arrivals",
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-[70vh] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <Image src={slide.image || "/placeholder.svg"} alt={slide.title} fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">{slide.title}</h1>
            <p className="mb-6 max-w-2xl text-lg md:text-xl">{slide.subtitle}</p>
            <Button size="lg" asChild className="bg-rose-600 hover:bg-rose-700">
              <Link href={slide.buttonLink}>{slide.buttonText}</Link>
            </Button>
          </div>
        </div>
      ))}

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 z-10 h-12 w-12 -translate-y-1/2 rounded-full bg-black/30 text-white hover:bg-black/50"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-8 w-8" />
        <span className="sr-only">Previous slide</span>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 z-10 h-12 w-12 -translate-y-1/2 rounded-full bg-black/30 text-white hover:bg-black/50"
        onClick={nextSlide}
      >
        <ChevronRight className="h-8 w-8" />
        <span className="sr-only">Next slide</span>
      </Button>

      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-8 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            onClick={() => setCurrentSlide(index)}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
