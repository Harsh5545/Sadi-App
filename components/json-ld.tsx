"use client"

import type React from "react"
import { generateStructuredData } from "@/lib/seo"

interface JsonLdProps {
  structuredData?: any
}

export const JsonLd: React.FC<JsonLdProps> = ({ structuredData }) => {
  const data =
    structuredData ||
    generateStructuredData({
      type: "Organization",
      name: "Pavitra Sarees",
      description: "Premium Indian Ethnic Wear & Sarees",
      url: "https://alberow.com",
      image: "/logo.png",
    })

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
