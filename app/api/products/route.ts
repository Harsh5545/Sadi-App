import { NextResponse } from "next/server"

// Define product type
interface Product {
  id: number
  name: string
  slug: string
  description: string
  price: number
  discountPrice?: number
  category: string
  image: string
  images: string[]
  colors: string[]
  sizes: string[]
  stock: number
  rating: number
  reviewCount: number
  features: string[]
  specifications: Record<string, string>
}

// Sample products data
const products: Product[] = [
  {
    id: 1,
    name: "Banarasi Silk Saree",
    slug: "banarasi-silk-saree",
    description:
      "Exquisite Banarasi Silk Saree with intricate zari work and rich pallu. This traditional saree is perfect for weddings and special occasions.",
    price: 12999,
    discountPrice: 9999,
    category: "Silk Sarees",
    image: "/placeholder.svg?height=300&width=300",
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    colors: ["Red", "Blue", "Green", "Gold"],
    sizes: ["Free Size"],
    stock: 25,
    rating: 4.8,
    reviewCount: 24,
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
  },
  {
    id: 2,
    name: "Kanjivaram Silk Saree",
    slug: "kanjivaram-silk-saree",
    description:
      "Luxurious Kanjivaram Silk Saree with traditional temple border and rich pallu. Perfect for weddings and festive occasions.",
    price: 15999,
    discountPrice: 13999,
    category: "Silk Sarees",
    image: "/placeholder.svg?height=300&width=300",
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    colors: ["Red", "Blue", "Green", "Purple"],
    sizes: ["Free Size"],
    stock: 12,
    rating: 4.9,
    reviewCount: 18,
    features: [
      "Pure Kanjivaram Silk",
      "Traditional temple border",
      "Rich pallu with intricate designs",
      "Comes with matching blouse piece",
      "Length: 6.3 meters (with blouse piece)",
      "Dry clean only",
    ],
    specifications: {
      Material: "Pure Silk",
      Weave: "Kanjivaram",
      Length: "6.3 meters (with blouse piece)",
      Width: "45 inches",
      Weight: "900-1000 grams",
      Care: "Dry clean only",
      Occasion: "Wedding, Festival, Ceremony",
      "Blouse Piece": "Included (0.8 meters)",
      "Zari Type": "Gold",
      "Border Type": "Temple",
    },
  },
  {
    id: 3,
    name: "Chanderi Cotton Saree",
    slug: "chanderi-cotton-saree",
    description:
      "Elegant Chanderi Cotton Saree with subtle zari border. Lightweight and comfortable for everyday wear and casual occasions.",
    price: 5999,
    discountPrice: 4999,
    category: "Cotton Sarees",
    image: "/placeholder.svg?height=300&width=300",
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    colors: ["Beige", "Light Blue", "Mint Green", "Peach"],
    sizes: ["Free Size"],
    stock: 30,
    rating: 4.6,
    reviewCount: 32,
    features: [
      "Chanderi Cotton blend",
      "Subtle zari border",
      "Lightweight and comfortable",
      "Comes with matching blouse piece",
      "Length: 6.3 meters (with blouse piece)",
      "Gentle wash",
    ],
    specifications: {
      Material: "Chanderi Cotton",
      Weave: "Chanderi",
      Length: "6.3 meters (with blouse piece)",
      Width: "45 inches",
      Weight: "400-500 grams",
      Care: "Gentle wash",
      Occasion: "Casual, Office, Daily Wear",
      "Blouse Piece": "Included (0.8 meters)",
      "Zari Type": "Silver",
      "Border Type": "Thin",
    },
  },
]

export async function GET() {
  try {
    // Simulate a delay to mimic a real API call
    await new Promise((resolve) => setTimeout(resolve, 500))

    return NextResponse.json(products)
  } catch (error) {
    console.error("Error fetching products:", error)
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate required fields
    if (!body.name || !body.price || !body.category) {
      return NextResponse.json(
        { error: "Missing required fields: name, price, and category are required" },
        { status: 400 },
      )
    }

    // In a real app, you would save to a database
    // For this example, we'll just return the created product with an ID
    const newProduct = {
      id: products.length + 1,
      slug: body.name.toLowerCase().replace(/\s+/g, "-"),
      ...body,
    }

    return NextResponse.json(newProduct, { status: 201 })
  } catch (error) {
    console.error("Error creating product:", error)
    return NextResponse.json({ error: "Failed to create product" }, { status: 500 })
  }
}
