import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { JsonLd } from "@/components/json-ld"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pavitra Sarees - Premium Indian Ethnic Wear & Sarees",
  description:
    "Discover exquisite sarees, lehengas, and ethnic wear for all occasions. Shop the finest collection of traditional Indian clothing with nationwide delivery.",
  keywords:
    "saree, sadi, ethnic wear, indian clothing, traditional wear, wedding sarees, silk sarees, designer sarees, banarasi saree, kanjivaram saree",
  openGraph: {
    title: "Pavitra Sarees - Premium Indian Ethnic Wear & Sarees",
    description:
      "Discover exquisite sarees, lehengas, and ethnic wear for all occasions. Shop the finest collection of traditional Indian clothing with nationwide delivery.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pavitra Sarees",
      },
    ],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <JsonLd />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
