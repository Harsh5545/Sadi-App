import React from "react"

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Pavitra Sarees",
          url: "https://example.com",
        }),
      }}
    />
  )
}