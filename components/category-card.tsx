import Link from "next/link"
import Image from "next/image"

interface CategoryCardProps {
  category: {
    name: string
    slug: string
    image: string
    count?: number
  }
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/category/${category.slug}`} className="group relative overflow-hidden rounded-lg">
      <div className="aspect-square w-full overflow-hidden rounded-lg">
        <Image
          src={category.image || "/placeholder.svg"}
          alt={category.name}
          width={300}
          height={300}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-4">
        <div>
          <h3 className="text-lg font-medium text-white">{category.name}</h3>
          {category.count !== undefined && <p className="mt-1 text-sm text-white/80">{category.count} products</p>}
        </div>
      </div>
    </Link>
  )
}
