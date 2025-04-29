"use client"

import { useState } from "react"
import Image from "next/image"
import { Calendar, Download, Edit, Eye, Filter, MoreHorizontal, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function OrdersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [dateFilter, setDateFilter] = useState("all")

  // Sample order data
  const orders = [
    {
      id: "ORD-9876",
      customer: {
        name: "Priya Sharma",
        email: "priya.sharma@example.com",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      date: "2023-04-15",
      amount: 12999,
      status: "Delivered",
      items: 2,
      paymentMethod: "Credit Card",
    },
    {
      id: "ORD-9875",
      customer: {
        name: "Rahul Patel",
        email: "rahul.patel@example.com",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      date: "2023-04-14",
      amount: 8499,
      status: "Processing",
      items: 1,
      paymentMethod: "UPI",
    },
    {
      id: "ORD-9874",
      customer: {
        name: "Anita Desai",
        email: "anita.desai@example.com",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      date: "2023-04-13",
      amount: 15999,
      status: "Shipped",
      items: 3,
      paymentMethod: "Net Banking",
    },
    {
      id: "ORD-9873",
      customer: {
        name: "Vikram Singh",
        email: "vikram.singh@example.com",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      date: "2023-04-12",
      amount: 5999,
      status: "Delivered",
      items: 1,
      paymentMethod: "Cash on Delivery",
    },
    {
      id: "ORD-9872",
      customer: {
        name: "Meera Reddy",
        email: "meera.reddy@example.com",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      date: "2023-04-11",
      amount: 9999,
      status: "Cancelled",
      items: 2,
      paymentMethod: "Credit Card",
    },
    {
      id: "ORD-9871",
      customer: {
        name: "Arjun Kumar",
        email: "arjun.kumar@example.com",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      date: "2023-04-10",
      amount: 7499,
      status: "Delivered",
      items: 1,
      paymentMethod: "UPI",
    },
    {
      id: "ORD-9870",
      customer: {
        name: "Neha Gupta",
        email: "neha.gupta@example.com",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      date: "2023-04-09",
      amount: 11999,
      status: "Returned",
      items: 2,
      paymentMethod: "Debit Card",
    },
  ]

  // Filter orders based on search term, status, and date
  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.email.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || order.status === statusFilter

    // Simple date filtering for demo purposes
    const matchesDate = dateFilter === "all" || true // Implement proper date filtering as needed

    return matchesSearch && matchesStatus && matchesDate
  })

  // Get unique statuses for filter
  const statuses = ["all", ...new Set(orders.map((order) => order.status))]

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Orders</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Manage customer orders, track shipments, and process returns.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Orders</TabsTrigger>
          <TabsTrigger value="processing">Processing</TabsTrigger>
          <TabsTrigger value="shipped">Shipped</TabsTrigger>
          <TabsTrigger value="delivered">Delivered</TabsTrigger>
          <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Order Management</CardTitle>
              <CardDescription>Manage all customer orders from one place.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4 md:flex-row">
                <div className="flex flex-1 items-center gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                    <Input
                      type="search"
                      placeholder="Search orders..."
                      className="pl-8"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-full sm:w-[180px]">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      {statuses.map((status) => (
                        <SelectItem key={status} value={status}>
                          {status === "all" ? "All Statuses" : status}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select value={dateFilter} onValueChange={setDateFilter}>
                    <SelectTrigger className="w-full sm:w-[180px]">
                      <SelectValue placeholder="Date" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Time</SelectItem>
                      <SelectItem value="today">Today</SelectItem>
                      <SelectItem value="yesterday">Yesterday</SelectItem>
                      <SelectItem value="week">This Week</SelectItem>
                      <SelectItem value="month">This Month</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mt-6 rounded-lg border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Items</TableHead>
                      <TableHead>Payment</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredOrders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">{order.id}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Image
                              src={order.customer.avatar || "/placeholder.svg"}
                              alt={order.customer.name}
                              width={32}
                              height={32}
                              className="rounded-full"
                            />
                            <div>
                              <div className="font-medium">{order.customer.name}</div>
                              <div className="text-xs text-gray-500">{order.customer.email}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-gray-500" />
                            {new Date(order.date).toLocaleDateString()}
                          </div>
                        </TableCell>
                        <TableCell>₹{order.amount.toLocaleString()}</TableCell>
                        <TableCell>
                          <div
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              order.status === "Delivered"
                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                                : order.status === "Processing"
                                  ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                                  : order.status === "Shipped"
                                    ? "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300"
                                    : order.status === "Cancelled"
                                      ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                                      : "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
                            }`}
                          >
                            {order.status}
                          </div>
                        </TableCell>
                        <TableCell>{order.items}</TableCell>
                        <TableCell>{order.paymentMethod}</TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Actions</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>
                                <Eye className="mr-2 h-4 w-4" />
                                View Details
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Edit className="mr-2 h-4 w-4" />
                                Edit Order
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Download className="mr-2 h-4 w-4" />
                                Download Invoice
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="processing" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Processing Orders</CardTitle>
              <CardDescription>Orders that are currently being processed.</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Processing orders content */}
              <p>Processing orders will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="shipped" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Shipped Orders</CardTitle>
              <CardDescription>Orders that have been shipped to customers.</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Shipped orders content */}
              <p>Shipped orders will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="delivered" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Delivered Orders</CardTitle>
              <CardDescription>Orders that have been successfully delivered.</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Delivered orders content */}
              <p>Delivered orders will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="cancelled" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Cancelled Orders</CardTitle>
              <CardDescription>Orders that have been cancelled.</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Cancelled orders content */}
              <p>Cancelled orders will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
