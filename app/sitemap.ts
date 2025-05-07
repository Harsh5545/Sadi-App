import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pavitrasarees.com"

  // Main pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/categories`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/collections`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
  ]

  // Category pages
  const categoryPages = [
    "silk-sarees",
    "cotton-sarees",
    "designer-sarees",
    "wedding-collection",
    "casual-wear",
    "accessories",
  ].map((category) => ({
    url: `${baseUrl}/category/${category}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }))

  // Collection pages
  const collectionPages = ["wedding-season", "festival-special", "summer-essentials"].map((collection) => ({
    url: `${baseUrl}/collections/${collection}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }))

  // In a real application, you would fetch products from your database
  // and generate URLs for each product
  const productPages = [
    "banarasi-silk-saree",
    "kanjivaram-silk-saree",
    "chanderi-cotton-saree",
    "mysore-silk-saree",
    "pochampally-ikat-saree",
  ].map((slug) => ({
    url: `${baseUrl}/product/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }))

  return [...staticPages, ...categoryPages, ...collectionPages, ...productPages]
}
