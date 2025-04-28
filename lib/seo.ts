interface StructuredDataProps {
  type: "WebSite" | "Organization" | "Product" | "BreadcrumbList" | "FAQPage" | "Article"
  name: string
  description?: string
  url?: string
  image?: string
  price?: number
  currency?: string
  availability?: string
  sku?: string
  brand?: string
  ratingValue?: number
  reviewCount?: number
  breadcrumbs?: Array<{ name: string; url: string }>
  faqs?: Array<{ question: string; answer: string }>
  datePublished?: string
  dateModified?: string
  author?: string
}

export function generateStructuredData(props: StructuredDataProps) {
  const { type } = props

  switch (type) {
    case "WebSite":
      return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: props.name,
        description: props.description,
        url: props.url,
      }

    case "Organization":
      return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: props.name,
        description: props.description,
        url: props.url,
        logo: props.image,
      }

    case "Product":
      return {
        "@context": "https://schema.org",
        "@type": "Product",
        name: props.name,
        description: props.description,
        image: props.image,
        sku: props.sku,
        brand: {
          "@type": "Brand",
          name: props.brand,
        },
        offers: {
          "@type": "Offer",
          price: props.price,
          priceCurrency: props.currency || "INR",
          availability: `https://schema.org/${props.availability || "InStock"}`,
          url: props.url,
        },
        ...(props.ratingValue && {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: props.ratingValue,
            reviewCount: props.reviewCount,
          },
        }),
      }

    case "BreadcrumbList":
      return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: props.breadcrumbs?.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: item.url,
        })),
      }

    case "FAQPage":
      return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: props.faqs?.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }

    case "Article":
      return {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: props.name,
        description: props.description,
        image: props.image,
        datePublished: props.datePublished,
        dateModified: props.dateModified || props.datePublished,
        author: {
          "@type": "Person",
          name: props.author,
        },
      }

    default:
      return {}
  }
}

export function generateSiteMapXml(pages: Array<{ url: string; lastModified?: string }>) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://alberow.com"

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map((page) => {
          return `
            <url>
              <loc>${baseUrl}${page.url}</loc>
              ${page.lastModified ? `<lastmod>${page.lastModified}</lastmod>` : ""}
              <changefreq>weekly</changefreq>
              <priority>0.7</priority>
            </url>
          `
        })
        .join("")}
    </urlset>
  `

  return sitemap
}

export function generateRobotsTxt() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://alberow.com"

  return `
    User-agent: *
    Allow: /
    
    Sitemap: ${baseUrl}/sitemap.xml
  `
}
