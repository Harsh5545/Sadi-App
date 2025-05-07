import type { Metadata } from "next"

type SeoProps = {
  title: string
  description: string
  keywords?: string
  ogImage?: string
  canonical?: string
  noIndex?: boolean
}

export function generateSeoMetadata({
  title,
  description,
  keywords,
  ogImage = "/og-image.jpg",
  canonical,
  noIndex = false,
}: SeoProps): Metadata {
  return {
    title,
    description,
    keywords: keywords || "saree, sadi, ethnic wear, indian clothing, traditional wear, wedding sarees, silk sarees",
    metadataBase: new URL("https://pavitrasarees.com"),
    alternates: {
      canonical: canonical,
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: canonical,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_IN",
      siteName: "Pavitra Sarees",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: noIndex ? "noindex, nofollow" : "index, follow",
  }
}

export function generateProductJsonLd(product: {
  name: string
  description: string
  image: string
  price: number
  discountPrice?: number
  sku: string
  brand: string
  availability: "InStock" | "OutOfStock" | "PreOrder"
  url: string
  rating?: number
  reviewCount?: number
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image,
    sku: product.sku,
    mpn: product.sku,
    brand: {
      "@type": "Brand",
      name: product.brand,
    },
    offers: {
      "@type": "Offer",
      price: product.discountPrice || product.price,
      priceCurrency: "INR",
      priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split("T")[0],
      url: product.url,
      availability: `https://schema.org/${product.availability}`,
      seller: {
        "@type": "Organization",
        name: "Pavitra Sarees",
      },
    },
    ...(product.rating && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: product.rating,
        reviewCount: product.reviewCount || 0,
        bestRating: "5",
        worstRating: "1",
      },
    }),
  }
}

export function generateBreadcrumbJsonLd(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://pavitrasarees.com${item.url}`,
    })),
  }
}

export function generateOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Pavitra Sarees",
    url: "https://pavitrasarees.com",
    logo: "https://pavitrasarees.com/logo.png",
    sameAs: [
      "https://facebook.com/pavitrasarees",
      "https://instagram.com/pavitrasarees",
      "https://twitter.com/pavitrasarees",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-98765-43210",
        contactType: "customer service",
        availableLanguage: ["English", "Hindi"],
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Fashion Street, Textile Market",
      addressLocality: "Surat",
      addressRegion: "Gujarat",
      postalCode: "395003",
      addressCountry: "IN",
    },
  }
}
