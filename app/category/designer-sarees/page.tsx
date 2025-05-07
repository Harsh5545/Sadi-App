import type { Metadata } from "next"
import CategoryTemplate from "@/components/category-template"

export const metadata: Metadata = {
  title: "Designer Sarees Collection | Pavitra Sarees",
  description:
    "Unique designer sarees with contemporary patterns and styles. Stand out with our exclusive designer collection.",
  keywords: "designer sarees, exclusive sarees, contemporary sarees, modern sarees, fashion sarees, luxury sarees",
  openGraph: {
    title: "Designer Sarees Collection | Pavitra Sarees",
    description:
      "Unique designer sarees with contemporary patterns and styles. Stand out with our exclusive designer collection.",
    images: [
      {
        url: "/og-designer-sarees.jpg",
        width: 1200,
        height: 630,
        alt: "Designer Sarees Collection",
      },
    ],
  },
}

export default function DesignerSareesPage() {
  const category = {
    name: "Designer Sarees",
    slug: "designer-sarees",
    description: "Unique designer sarees with contemporary patterns and styles.",
    longDescription:
      "Our designer sarees collection brings together traditional craftsmanship and contemporary fashion. Created by talented designers, these sarees feature unique patterns, innovative draping styles, and modern aesthetics while honoring traditional techniques. Perfect for those who want to make a fashion statement while embracing cultural heritage.",
    image: "/placeholder.svg?height=400&width=600",
    bannerImage: "/placeholder.svg?height=400&width=1200",
    count: 78,
  }

  return <CategoryTemplate category={category} />
}
