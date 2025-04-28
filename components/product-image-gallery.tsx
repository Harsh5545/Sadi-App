"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface ProductImageGalleryProps {
  images: string[]
  productName: string
}

export default function ProductImageGallery({ images, productName }: ProductImageGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  return (
    <div className="space-y-4">
      <div className="relative aspect-square overflow-hidden rounded-lg border bg-white dark:bg-gray-950">
        <Image
          src={images[currentImage] || "/placeholder.svg"}
          alt={`${productName} - View ${currentImage + 1}`}
          fill
          className="object-contain"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-2 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-white/80 text-gray-800 hover:bg-white dark:bg-gray-800/80 dark:text-gray-200 dark:hover:bg-gray-800"
          onClick={prevImage}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous image</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-white/80 text-gray-800 hover:bg-white dark:bg-gray-800/80 dark:text-gray-200 dark:hover:bg-gray-800"
          onClick={nextImage}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next image</span>
        </Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2 h-8 w-8 rounded-full bg-white/80 text-gray-800 hover:bg-white dark:bg-gray-800/80 dark:text-gray-200 dark:hover:bg-gray-800"
            >
              <ZoomIn className="h-4 w-4" />
              <span className="sr-only">Zoom image</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>{productName}</DialogTitle>
              <DialogDescription>View larger image</DialogDescription>
            </DialogHeader>
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={images[currentImage] || "/placeholder.svg"}
                alt={`${productName} - View ${currentImage + 1}`}
                fill
                className="object-contain"
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            className={`overflow-hidden rounded-md border bg-white dark:bg-gray-950 ${
              currentImage === index ? "ring-2 ring-rose-600" : ""
            }`}
            onClick={() => setCurrentImage(index)}
          >
            <div className="relative aspect-square">
              <Image
                src={image || "/placeholder.svg"}
                alt={`${productName} - Thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
