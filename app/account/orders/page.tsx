"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Package, Search, Filter, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MobileNav from "@/components/mobile-nav"

// Mock order data - replace with actual data fetching
const orders = [
  {
    id: "ORD-9876",
    date: "15 Apr 2025",
    total: 12999,
    status: "Delivered",
    items: [
      {
        id: 1,
        name: "Banarasi Silk Saree",
        color: "Pink",
        price: 9999,
        quantity: 1,
        image: "/placeholder.svg?height=80&width=80",
      },
      {
        id: 2,
        name: "Designer Blouse",
        color: "Gold",
        price: 3000,
        quantity: 1,
        image: "/placeholder.svg?height=80&width=80",
      },
    ],
    address: "123 Main Street, Mumbai, Maharashtra, 400001",
    payment: "Credit Card",
    tracking: "DTDC12345678",
  },
  {
    id: "ORD-9875",
    date: "28 Mar 2025",
    total: 8499,
    status: "Processing",
    items: [
      {
        id: 3,
        name: "Cotton Saree",
        color: "Green",
        price: 4999,
        quantity: 1,
        image: "/placeholder.svg?height=80&width=80",
      },
      {
        id: 4,
        name: "Designer Blouse",
        color: "Green",
        price: 1750,
        quantity: 2,
        image: "/placeholder.svg?height=80&width=80",
      },
    ],
    address: "123 Main Street, Mumbai, Maharashtra, 400001",
    payment: "UPI",
    tracking: null,
  },
  {
    id: "ORD-9874",
    date: "15 Feb 2025",
    total: 15999,
    status: "Delivered",
    items: [
      {
        id: 5,
        name: "Wedding Silk Saree",
        color: "Red",
        price: 15999,
        quantity: 1,
        image: "/placeholder.svg?height=80&width=80",
      },
    ],
    address: "123 Main Street, Mumbai, Maharashtra, 400001",
    payment: "Net Banking",
    tracking: "BD45678901",
  },
  {
    id: "ORD-9873",
    date: "10 Jan 2025",
    total: 7499,
    status: "Cancelled",
    items: [
      {
        id: 6,
        name: "Chanderi Saree",
        color: "Yellow",
        price: 7499,
        quantity: 1,
        image: "/placeholder.svg?height=80&width=80",
      },
    ],
    address: "123 Main Street, Mumbai, Maharashtra, 400001",
    payment: "Credit Card",
    tracking: null,
  },
]

export default function AccountOrdersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("all")

  // Filter orders based on search term and status
  const filteredOrders = orders.filter((order) => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = selectedStatus === "all" || order.status.toLowerCase() === selectedStatus.toLowerCase()
    return matchesSearch && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "delivered":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
      case "processing":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
      case "shipped":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
      case "cancelled":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container py-8">
          {/* Breadcrumb */}
          <Breadcrumb className="mb-6">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/account">My Account</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/account/orders" isCurrentPage>
                Orders
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <div className="grid gap-8 md:grid-cols-[240px_1fr]">
            {/* Sidebar Navigation */}
            <div className="hidden md:block">
              <nav className="grid gap-2">
                <Link
                  href="/account"
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-rose-600 dark:text-gray-400"
                >
                  Profile
                </Link>
                <Link
                  href="/account/orders"
                  className="flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-rose-600 dark:bg-gray-800 dark:text-white"
                >
                  <Package className="h-4 w-4" />
                  Orders
                </Link>
                <Link
                  href="/account/addresses"
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-rose-600 dark:text-gray-400"
                >
                  Addresses
                </Link>
                <Link
                  href="/account/wishlist"
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-rose-600 dark:text-gray-400"
                >
                  Wishlist
                </Link>
                <Link
                  href="/account/settings"
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-rose-600 dark:text-gray-400"
                >
                  Settings
                </Link>
              </nav>
            </div>

            {/* Main Content */}
            <div>
              <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <h1 className="text-3xl font-bold">My Orders</h1>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                    <Input
                      type="search"
                      placeholder="Search orders..."
                      className="pl-8 w-full sm:w-[200px]"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="h-9">
                        <Filter className="mr-2 h-4 w-4" />
                        Filter
                        <ChevronDown className="ml-2 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => setSelectedStatus("all")}>All Orders</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setSelectedStatus("delivered")}>Delivered</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setSelectedStatus("processing")}>Processing</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setSelectedStatus("shipped")}>Shipped</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setSelectedStatus("cancelled")}>Cancelled</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              <Tabs defaultValue="all" className="md:hidden mb-6">
                <TabsList className="w-full justify-start overflow-auto">
                  <TabsTrigger value="all">All Orders</TabsTrigger>
                  <TabsTrigger value="delivered">Delivered</TabsTrigger>
                  <TabsTrigger value="processing">Processing</TabsTrigger>
                  <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
                </TabsList>
              </Tabs>

              {filteredOrders.length === 0 ? (
                <div className="rounded-lg border bg-white p-8 text-center dark:bg-gray-950">
                  <Package className="mx-auto h-12 w-12 text-gray-400" />
                  <h2 className="mt-4 text-xl font-semibold">No orders found</h2>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    {searchTerm ? "No orders match your search criteria." : "You haven't placed any orders yet."}
                  </p>
                  <Button asChild className="mt-6 bg-rose-600 hover:bg-rose-700">
                    <Link href="/products">Continue Shopping</Link>
                  </Button>
                </div>
              ) : (
                <div className="space-y-6">
                  {filteredOrders.map((order) => (
                    <div key={order.id} className="rounded-lg border bg-white overflow-hidden dark:bg-gray-950">
                      {/* Order Header */}
                      <div className="flex flex-col gap-2 border-b p-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium">{order.id}</h3>
                            <span
                              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusColor(
                                order.status,
                              )}`}
                            >
                              {order.status}
                            </span>
                          </div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Placed on {order.date}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm" asChild>
                            <Link href={`/account/orders/${order.id}`}>View Details</Link>
                          </Button>
                          {order.tracking && (
                            <Button variant="outline" size="sm" asChild>
                              <Link href={`/account/shipments?tracking=${order.tracking}`}>Track Order</Link>
                            </Button>
                          )}
                        </div>
                      </div>

                      {/* Order Items */}
                      <div className="p-4">
                        <div className="space-y-4">
                          {order.items.map((item) => (
                            <div key={item.id} className="flex gap-4">
                              <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border">
                                <Image
                                  src={item.image || "/placeholder.svg"}
                                  alt={item.name}
                                  width={80}
                                  height={80}
                                  className="h-full w-full object-cover"
                                />
                              </div>
                              <div className="flex flex-1 flex-col justify-between">
                                <div>
                                  <h4 className="font-medium">{item.name}</h4>
                                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                    Color: {item.color} • Quantity: {item.quantity}
                                  </p>
                                </div>
                                <div className="text-sm font-medium">₹{item.price.toLocaleString()}</div>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="mt-4 flex flex-col justify-between border-t pt-4 sm:flex-row sm:items-center">
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            <p>Payment: {order.payment}</p>
                            <p className="mt-1">Shipping Address: {order.address}</p>
                          </div>
                          <div className="mt-4 sm:mt-0">
                            <p className="text-sm text-gray-500 dark:text-gray-400">Total</p>
                            <p className="text-xl font-bold">₹{order.total.toLocaleString()}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <MobileNav />
    </div>
  )
}
