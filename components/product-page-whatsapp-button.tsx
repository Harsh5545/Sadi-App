"use client"

import type React from "react"

import { useState } from "react"
import { MessageSquare } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface ProductWhatsAppButtonProps {
  productName: string
  productPrice: number | string
  productUrl: string
  productImage?: string
}

export default function ProductWhatsAppButton({
  productName,
  productPrice,
  productUrl,
  productImage,
}: ProductWhatsAppButtonProps) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Format the WhatsApp message
    const whatsappMessage = `Hello, I'm interested in the ${productName} (₹${productPrice}) that I saw on your website. ${message}. Product link: ${productUrl}`

    // Format the phone number (remove spaces, dashes, etc.)
    const formattedPhone = "+919876543210" // Replace with your business phone number

    // Create the WhatsApp URL
    const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(whatsappMessage)}`

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank")

    // Close the dialog
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2 bg-green-500 text-white hover:bg-green-600">
          <MessageSquare className="h-4 w-4" />
          Buy on WhatsApp
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Contact via WhatsApp</DialogTitle>
          <DialogDescription>
            Fill in your details and we'll connect with you on WhatsApp about this product.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} className="col-span-3" required />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="phone" className="text-right">
                Phone
              </Label>
              <Input
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-start gap-4">
              <Label htmlFor="message" className="text-right">
                Message
              </Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="col-span-3"
                placeholder="I'm interested in this product and would like more information."
              />
            </div>
            <div className="col-span-4">
              <div className="rounded-lg border p-3">
                <div className="flex items-center gap-3">
                  {productImage && (
                    <div className="h-16 w-16 overflow-hidden rounded-md">
                      <img
                        src={productImage || "/placeholder.svg"}
                        alt={productName}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <h4 className="font-medium">{productName}</h4>
                    <p className="text-sm text-gray-500">₹{productPrice}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="bg-green-500 hover:bg-green-600">
              <MessageSquare className="mr-2 h-4 w-4" />
              Connect on WhatsApp
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
