import type { Metadata } from "next"
import Image from "next/image"
import { Check, CreditCard, MapPin, ShoppingBag, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MobileNav from "@/components/mobile-nav"
import { generateSeoMetadata } from "@/lib/seo-utils"

export const metadata: Metadata = generateSeoMetadata({
  title: "Checkout | Pavitra Sarees",
  description: "Complete your purchase securely with our easy checkout process.",
  keywords: "checkout, payment, secure payment, order, shipping, delivery",
  canonical: "/checkout",
})

// Mock cart items - in a real app, this would come from a cart state or API
const cartItems = [
  {
    id: 1,
    name: "Banarasi Silk Saree",
    price: 12999,
    discountPrice: 9999,
    image: "/placeholder.svg?height=80&width=80",
    quantity: 1,
    color: "Maroon",
    size: "Free Size",
  },
  {
    id: 2,
    name: "Kanjivaram Silk Saree",
    price: 15999,
    discountPrice: 13999,
    image: "/placeholder.svg?height=80&width=80",
    quantity: 1,
    color: "Gold",
    size: "Free Size",
  },
]

export default function CheckoutPage() {
  // Calculate order summary
  const subtotal = cartItems.reduce((total, item) => total + item.discountPrice * item.quantity, 0)
  const shipping = 0 // Free shipping
  const tax = Math.round(subtotal * 0.18) // 18% GST
  const total = subtotal + shipping + tax

  return (
    <>
      <Navbar />
      <main className="flex-1 py-8">
        <div className="container">
          {/* Breadcrumbs */}
          <Breadcrumb className="mb-6">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/cart">Cart</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/checkout" isCurrentPage>
                Checkout
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <h1 className="text-3xl font-bold mb-8">Checkout</h1>

          {/* Checkout Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-between max-w-3xl">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-rose-600 flex items-center justify-center text-white">
                  <ShoppingBag className="h-5 w-5" />
                </div>
                <span className="text-sm mt-2">Cart</span>
              </div>
              <div className="flex-1 h-1 bg-rose-200 mx-2"></div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-rose-600 flex items-center justify-center text-white">
                  <MapPin className="h-5 w-5" />
                </div>
                <span className="text-sm mt-2">Shipping</span>
              </div>
              <div className="flex-1 h-1 bg-rose-200 mx-2"></div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600">
                  <CreditCard className="h-5 w-5" />
                </div>
                <span className="text-sm mt-2">Payment</span>
              </div>
              <div className="flex-1 h-1 bg-gray-200 mx-2"></div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600">
                  <Check className="h-5 w-5" />
                </div>
                <span className="text-sm mt-2">Confirmation</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Shipping Information */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="mr-2 h-5 w-5" /> Shipping Address
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" placeholder="First Name" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" placeholder="Last Name" className="mt-1" />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="address">Address</Label>
                      <Input id="address" placeholder="Street Address" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input id="city" placeholder="City" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="state">State</Label>
                      <Input id="state" placeholder="State" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="pincode">Pincode</Label>
                      <Input id="pincode" placeholder="Pincode" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="Phone Number" className="mt-1" />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Email" className="mt-1" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Truck className="mr-2 h-5 w-5" /> Shipping Method
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup defaultValue="standard">
                    <div className="flex items-center justify-between border rounded-md p-4 mb-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="standard" id="standard" />
                        <Label htmlFor="standard" className="font-medium">
                          Standard Delivery
                        </Label>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">Free</p>
                        <p className="text-sm text-gray-500">3-5 business days</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between border rounded-md p-4 mb-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="express" id="express" />
                        <Label htmlFor="express" className="font-medium">
                          Express Delivery
                        </Label>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">₹199</p>
                        <p className="text-sm text-gray-500">1-2 business days</p>
                      </div>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CreditCard className="mr-2 h-5 w-5" /> Payment Method
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup defaultValue="card">
                    <div className="flex items-center justify-between border rounded-md p-4 mb-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="card" id="card" />
                        <Label htmlFor="card" className="font-medium">
                          Credit/Debit Card
                        </Label>
                      </div>
                      <div className="flex space-x-2">
                        <Image src="/placeholder.svg?height=24&width=36" alt="Visa" width={36} height={24} />
                        <Image src="/placeholder.svg?height=24&width=36" alt="Mastercard" width={36} height={24} />
                        <Image src="/placeholder.svg?height=24&width=36" alt="Amex" width={36} height={24} />
                      </div>
                    </div>
                    <div className="flex items-center justify-between border rounded-md p-4 mb-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="upi" id="upi" />
                        <Label htmlFor="upi" className="font-medium">
                          UPI
                        </Label>
                      </div>
                      <div className="flex space-x-2">
                        <Image src="/placeholder.svg?height=24&width=36" alt="GPay" width={36} height={24} />
                        <Image src="/placeholder.svg?height=24&width=36" alt="PhonePe" width={36} height={24} />
                        <Image src="/placeholder.svg?height=24&width=36" alt="Paytm" width={36} height={24} />
                      </div>
                    </div>
                    <div className="flex items-center justify-between border rounded-md p-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="cod" id="cod" />
                        <Label htmlFor="cod" className="font-medium">
                          Cash on Delivery
                        </Label>
                      </div>
                      <p className="text-sm text-gray-500">Additional ₹49 fee</p>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div>
              <Card className="sticky top-6">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                  <CardDescription>
                    {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in your cart
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex space-x-4">
                        <div className="relative h-20 w-20 rounded-md overflow-hidden flex-shrink-0">
                          <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <h4 className="font-medium">{item.name}</h4>
                          <p className="text-sm text-gray-500">
                            {item.color}, {item.size}
                          </p>
                          <div className="flex justify-between">
                            <p className="text-sm">Qty: {item.quantity}</p>
                            <p className="font-medium">₹{item.discountPrice.toLocaleString()}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Separator className="my-4" />

                  <div className="space-y-1.5">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Subtotal</span>
                      <span>₹{subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Shipping</span>
                      <span>{shipping === 0 ? "Free" : `₹${shipping.toLocaleString()}`}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Tax (18% GST)</span>
                      <span>₹{tax.toLocaleString()}</span>
                    </div>
                    <Separator className="my-2" />
                    <div className="flex justify-between font-medium text-lg">
                      <span>Total</span>
                      <span>₹{total.toLocaleString()}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-rose-600 hover:bg-rose-700">Place Order</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <MobileNav />
    </>
  )
}
