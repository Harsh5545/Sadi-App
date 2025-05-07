import type { Metadata } from "next"
import CategoryTemplate from "@/components/category-template"

export const metadata: Metadata = {
  title: "Wedding Collection | Pavitra Sarees",
  description:
    "Exquisite sarees for brides and wedding ceremonies. Make your special day memorable with our premium wedding collection.",
  keywords:
    "wedding sarees, bridal sarees, wedding collection, bridal wear, indian wedding, traditional wedding attire",
  openGraph: {
    title: "Wedding Collection | Pavitra Sarees",
    description:
      "Exquisite sarees for brides and wedding ceremonies. Make your special day memorable with our premium wedding collection.",
    images: [
      {
        url: "/og-wedding-collection.jpg",
        width: 1200,
        height: 630,
        alt: "Wedding Sarees Collection",
      },
    ],
  },
}

export default function WeddingCollectionPage() {
  const category = {
    name: "Wedding Collection",
    slug: "wedding-collection",
    description: "Exquisite sarees for brides and wedding ceremonies.",
    longDescription:
      "Our wedding collection features opulent sarees designed to make your special day truly memorable. From traditional red bridal sarees to contemporary designs in various colors, our collection caters to brides, bridesmaids, and wedding guests. Each piece is crafted with meticulous attention to detail, featuring intricate embroidery, zari work, and embellishments.",
    image: "/placeholder.svg?height=400&width=600",
    bannerImage: "/placeholder.svg?height=400&width=1200",
    count: 64,
  }

  return <CategoryTemplate category={category} />
}
