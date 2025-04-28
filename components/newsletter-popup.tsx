"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"

export default function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState("")
  const { toast } = useToast()

  useEffect(() => {
    // Check if the user has already closed the popup
    const hasClosedPopup = localStorage.getItem("newsletter_popup_closed")

    if (!hasClosedPopup) {
      // Show popup after 5 seconds
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    // Remember that the user closed the popup for 7 days
    localStorage.setItem("newsletter_popup_closed", "true")

    // Clear the storage after 7 days
    setTimeout(
      () => {
        localStorage.removeItem("newsletter_popup_closed")
      },
      7 * 24 * 60 * 60 * 1000,
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // In a real app, you would send this to your API
    console.log("Subscribing email:", email)

    toast({
      title: "Thank you for subscribing!",
      description: "You'll receive our latest updates and offers.",
    })

    setIsOpen(false)
    setEmail("")

    // Remember that the user subscribed
    localStorage.setItem("newsletter_subscribed", "true")
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="relative w-full max-w-md rounded-lg bg-white p-8 shadow-lg dark:bg-gray-900">
        <Button variant="ghost" size="icon" className="absolute right-2 top-2" onClick={handleClose}>
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>

        <div className="text-center">
          <h2 className="mb-2 text-2xl font-bold">Join Our Newsletter</h2>
          <p className="mb-6 text-gray-600 dark:text-gray-400">
            Subscribe to get exclusive offers, new arrival updates, and style inspiration.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" className="w-full bg-rose-600 hover:bg-rose-700">
              Subscribe
            </Button>
          </form>

          <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>
      </div>
    </div>
  )
}
