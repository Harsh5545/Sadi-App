"use client"

import type React from "react"

import { Button } from "@/components/ui/button"

interface WhatsAppButtonProps {
  text: string
  productUrl?: string
}

export default function WhatsAppButton({ text, productUrl }: WhatsAppButtonProps) {
  const handleWhatsAppShare = () => {
    const message = productUrl ? `${text} ${productUrl}` : text
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <Button
      variant="outline"
      size="sm"
      className="h-8 gap-1 border-green-600 text-green-600 hover:bg-green-50 hover:text-green-700 dark:border-green-500 dark:text-green-500 dark:hover:bg-green-950"
      onClick={handleWhatsAppShare}
    >
      <WhatsAppIcon className="h-4 w-4" />
      Share on WhatsApp
    </Button>
  )
}

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
      <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
      <path d="M9.5 13.5c.5 1.5 2.5 2 4 1" />
    </svg>
  )
}
