"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MobileNav from "@/components/mobile-nav"

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Banarasi Silk Saree",
      color: "Red",
      size: "Free Size",
      price: 9999,
      quantity: 1,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 2,
      name: "Kanjivaram Silk Saree",
      color: "Blue",
      size: "Free Size",
      price: 15999,
      quantity: 1,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 3,
      name: "Chanderi Cotton Saree",
      color: "Green",
      size: "Free Size",
      price: 5999,
      quantity: 1,
      image: "/placeholder.svg?height=200&width=200",
    },
  ])

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const shipping = 0 // Free shipping
  const tax = Math.round(subtotal * 0.18) // 18% GST
  const total = subtotal + shipping + tax

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container py-8">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center text-sm text-gray-500 dark:text-gray-400">
            <Link href="/" className="hover:text-rose-600">
              Home
            </Link>
            <ChevronRight className="mx-2 h-4 w-4" />
            <span className="text-gray-900 dark:text-white">Shopping Cart</span>
          </nav>

          <h1 className="mb-8 text-3xl font-bold">Shopping Cart</h1>

          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-lg border bg-white p-12 text-center dark:bg-gray-950">
              <ShoppingBag className="mb-4 h-16 w-16 text-gray-400" />
              <h2 className="mb-2 text-xl font-semibold">Your cart is empty</h2>
              <p className="mb-6 text-gray-500 dark:text-gray-400">
                Looks like you haven&apos;t added any items to your cart yet.
              </p>
              <Button asChild className="bg-rose-600 hover:bg-rose-700">
                <Link href="/products">Continue Shopping</Link>
              </Button>
            </div>
          ) : (
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <div className="rounded-lg border bg-white dark:bg-gray-950">
                  <div className="p-6">
                    <h2 className="mb-4 text-lg font-semibold">Cart Items ({cartItems.length})</h2>
                    <div className="space-y-6">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex flex-col gap-4 sm:flex-row">
                          <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              width={96}
                              height={96}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="flex flex-1 flex-col justify-between">
                            <div className="flex justify-between">
                              <div>
                                <h3 className="text-base font-medium">{item.name}</h3>
                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Color: {item.color}</p>
                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Size: {item.size}</p>
                              </div>
                              <p className="text-base font-medium">₹{item.price.toLocaleString()}</p>
                            </div>
                            <div className="mt-4 flex items-center justify-between">
                              <div className="flex items-center border rounded-md">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8 rounded-none rounded-l-md"
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                >
                                  <Minus className="h-3 w-3" />
                                  <span className="sr-only">Decrease quantity</span>
                                </Button>
                                <span className="w-8 text-center text-sm">{item.quantity}</span>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8 rounded-none rounded-r-md"
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                >
                                  <Plus className="h-3 w-3" />
                                  <span className="sr-only">Increase quantity</span>
                                </Button>
                              </div>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 px-2 text-red-600 hover:bg-red-50 hover:text-red-700 dark:hover:bg-red-950"
                                onClick={() => removeItem(item.id)}
                              >
                                <Trash2 className="mr-1 h-4 w-4" />
                                Remove
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="rounded-lg border bg-white p-6 dark:bg-gray-950">
                  <h2 className="mb-4 text-lg font-semibold">Order Summary</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
                      <span>₹{subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Shipping</span>
                      <span className="text-green-600">Free</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Tax (18% GST)</span>
                      <span>₹{tax.toLocaleString()}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-medium">
                      <span>Total</span>
                      <span>₹{total.toLocaleString()}</span>
                    </div>
                    <div className="pt-4">
                      <Button className="w-full bg-rose-600 hover:bg-rose-700" asChild>
                        <Link href="/checkout">Proceed to Checkout</Link>
                      </Button>
                    </div>
                    <div className="pt-4">
                      <div className="mb-4">
                        <h3 className="mb-2 text-sm font-medium">Apply Coupon Code</h3>
                        <div className="flex">
                          <Input placeholder="Enter coupon code" className="rounded-r-none" />
                          <Button variant="outline" className="rounded-l-none">
                            Apply
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <MobileNav />
    </div>
  )
}
