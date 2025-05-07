"use client"

import { useState } from "react"
import {
  Search,
  Download,
  MoreHorizontal,
  Eye,
  FileText,
  Printer,
  Mail,
  Calendar,
  ChevronDown,
  ArrowUpDown,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"

// Sample order data
const orders = [
  {
    id: "ORD-001",
    customer: "Priya Sharma",
    email: "priya.sharma@example.com",
    date: "2023-04-23",
    status: "Delivered",
    paymentStatus: "Paid",
    amount: 9999,
    items: 2,
  },
  {
    id: "ORD-002",
    customer: "Rahul Patel",
    email: "rahul.patel@example.com",
    date: "2023-04-22",
    status: "Processing",
    paymentStatus: "Paid",
    amount: 15999,
    items: 3,
  },
  {
    id: "ORD-003",
    customer: "Anita Desai",
    email: "anita.desai@example.com",
    date: "2023-04-22",
    status: "Processing",
    paymentStatus: "Pending",
    amount: 5999,
    items: 1,
  },
  {
    id: "ORD-004",
    customer: "Vikram Singh",
    email: "vikram.singh@example.com",
    date: "2023-04-21",
    status: "Shipped",
    paymentStatus: "Paid",
    amount: 8999,
    items: 2,
  },
  {
    id: "ORD-005",
    customer: "Meera Reddy",
    email: "meera.reddy@example.com",
    date: "2023-04-20",
    status: "Delivered",
    paymentStatus: "Paid",
    amount: 7999,
    items: 1,
  },
  {
    id: "ORD-006",
    customer: "Arjun Nair",
    email: "arjun.nair@example.com",
    date: "2023-04-20",
    status: "Cancelled",
    paymentStatus: "Refunded",
    amount: 6999,
    items: 1,
  },
  {
    id: "ORD-007",
    customer: "Sunita Joshi",
    email: "sunita.joshi@example.com",
    date: "2023-04-19",
    status: "Delivered",
    paymentStatus: "Paid",
    amount: 11999,
    items: 3,
  },
]

// Sample order items for the selected order
const orderItems = [
  {
    id: 1,
    name: "Banarasi Silk Saree",
    image: "/placeholder.svg?height=40&width=40",
    price: 5999,
    quantity: 1,
    total: 5999,
  },
  {
    id: 2,
    name: "Kanjivaram Silk Saree",
    image: "/placeholder.svg?height=40&width=40",
    price: 4000,
    quantity: 1,
    total: 4000,
  },
]

export default function OrdersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [paymentFilter, setPaymentFilter] = useState("all")
  const [dateFilter, setDateFilter] = useState("all")
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null)
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: "asc" | "desc" } | null>(null)
  const [orderDetailsOpen, setOrderDetailsOpen] = useState(false)

  // Handle sorting
  const requestSort = (key: string) => {
    let direction: "asc" | "desc" = "asc"
    if (sortConfig && sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc"
    }
    setSortConfig({ key, direction })
  }

  // Filter orders based on search term, status, and payment status
  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || order.status === statusFilter
    const matchesPayment = paymentFilter === "all" || order.paymentStatus === paymentFilter
    return matchesSearch && matchesStatus && matchesPayment
  })

  // Sort orders
  const sortedOrders = [...filteredOrders].sort((a, b) => {
    if (!sortConfig) return 0

    if (a[sortConfig.key as keyof typeof a] < b[sortConfig.key as keyof typeof b]) {
      return sortConfig.direction === "asc" ? -1 : 1
    }
    if (a[sortConfig.key as keyof typeof a] > b[sortConfig.key as keyof typeof b]) {
      return sortConfig.direction === "asc" ? 1 : -1
    }
    return 0
  })

  // Get unique statuses and payment statuses for filters
  const statuses = ["all", ...new Set(orders.map((order) => order.status))]
  const paymentStatuses = ["all", ...new Set(orders.map((order) => order.paymentStatus))]

  // Find the selected order details
  const orderDetails = orders.find((order) => order.id === selectedOrder)

  // Handle view order details
  const handleViewOrderDetails = (orderId: string) => {
    setSelectedOrder(orderId)
    setOrderDetailsOpen(true)
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Orders</h2>
          <p className="text-gray-500 dark:text-gray-400">Manage and process customer orders.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Orders
          </Button>
          <Button variant="outline">
            <Printer className="mr-2 h-4 w-4" />
            Print List
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="all">All Orders</TabsTrigger>
          <TabsTrigger value="processing">Processing</TabsTrigger>
          <TabsTrigger value="shipped">Shipped</TabsTrigger>
          <TabsTrigger value="delivered">Delivered</TabsTrigger>
          <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
        </TabsList>

        <div className="flex flex-col gap-4 md:flex-row mb-4">
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
            <Select value={paymentFilter} onValueChange={setPaymentFilter}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Payment" />
              </SelectTrigger>
              <SelectContent>
                {paymentStatuses.map((status) => (
                  <SelectItem key={status} value={status}>
                    {status === "all" ? "All Payments" : status}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full sm:w-auto">
                  <Calendar className="mr-2 h-4 w-4" />
                  Date Range
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[200px]">
                <DropdownMenuLabel>Filter by date</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => setDateFilter("today")}>Today</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setDateFilter("yesterday")}>Yesterday</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setDateFilter("week")}>This Week</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setDateFilter("month")}>This Month</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setDateFilter("year")}>This Year</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => setDateFilter("custom")}>Custom Range</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="cursor-pointer" onClick={() => requestSort("id")}>
                      Order ID
                      <ArrowUpDown className="ml-2 h-4 w-4 inline" />
                    </TableHead>
                    <TableHead className="cursor-pointer" onClick={() => requestSort("customer")}>
                      Customer
                      <ArrowUpDown className="ml-2 h-4 w-4 inline" />
                    </TableHead>
                    <TableHead className="cursor-pointer" onClick={() => requestSort("date")}>
                      Date
                      <ArrowUpDown className="ml-2 h-4 w-4 inline" />
                    </TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Payment</TableHead>
                    <TableHead className="cursor-pointer" onClick={() => requestSort("amount")}>
                      Amount
                      <ArrowUpDown className="ml-2 h-4 w-4 inline" />
                    </TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sortedOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>
                        <div>
                          <p>{order.customer}</p>
                          <p className="text-sm text-gray-500">{order.email}</p>
                        </div>
                      </TableCell>
                      <TableCell>{new Date(order.date).toLocaleDateString()}</TableCell>
                      <TableCell>
                        <Badge
                          className={`${
                            order.status === "Delivered"
                              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                              : order.status === "Processing"
                                ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                                : order.status === "Shipped"
                                  ? "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300"
                                  : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                          }`}
                        >
                          {order.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={`${
                            order.paymentStatus === "Paid"
                              ? "border-green-500 text-green-700 dark:text-green-400"
                              : order.paymentStatus === "Pending"
                                ? "border-amber-500 text-amber-700 dark:text-amber-400"
                                : "border-red-500 text-red-700 dark:text-red-400"
                          }`}
                        >
                          {order.paymentStatus}
                        </Badge>
                      </TableCell>
                      <TableCell>₹{order.amount.toLocaleString()}</TableCell>
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
                            <DropdownMenuItem onClick={() => handleViewOrderDetails(order.id)}>
                              <Eye className="mr-2 h-4 w-4" />
                              View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <FileText className="mr-2 h-4 w-4" />
                              Download Invoice
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Mail className="mr-2 h-4 w-4" />
                              Email Customer
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600 focus:bg-red-50 focus:text-red-700 dark:focus:bg-red-950">
                              Cancel Order
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="flex items-center justify-between border-t p-4">
              <div className="text-sm text-gray-500">
                Showing <strong>1-{sortedOrders.length}</strong> of <strong>{orders.length}</strong> orders
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="processing" className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <p className="text-center text-gray-500">Showing processing orders only. Filter applied.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="shipped" className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <p className="text-center text-gray-500">Showing shipped orders only. Filter applied.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="delivered" className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <p className="text-center text-gray-500">Showing delivered orders only. Filter applied.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cancelled" className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <p className="text-center text-gray-500">Showing cancelled orders only. Filter applied.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Order Details Dialog */}
      <Dialog open={orderDetailsOpen} onOpenChange={setOrderDetailsOpen}>
        <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-hidden flex flex-col">
          <DialogHeader>
            <DialogTitle>Order Details</DialogTitle>
            <DialogDescription>
              {orderDetails
                ? `Order ${orderDetails.id} placed on ${new Date(orderDetails.date).toLocaleDateString()}`
                : "Loading..."}
            </DialogDescription>
          </DialogHeader>

          <ScrollArea className="flex-1 pr-4">
            {orderDetails && (
              <div className="grid gap-6 py-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-medium mb-2">Customer Information</h3>
                    <div className="rounded-md border p-4">
                      <p className="font-medium">{orderDetails.customer}</p>
                      <p className="text-sm text-gray-500">{orderDetails.email}</p>
                      <p className="text-sm text-gray-500 mt-2">+91 98765 43210</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium mb-2">Shipping Address</h3>
                    <div className="rounded-md border p-4">
                      <p className="text-sm">123 Main Street</p>
                      <p className="text-sm">Apartment 4B</p>
                      <p className="text-sm">Mumbai, Maharashtra 400001</p>
                      <p className="text-sm">India</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2">Order Items</h3>
                  <div className="rounded-md border overflow-hidden">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Product</TableHead>
                          <TableHead>Price</TableHead>
                          <TableHead>Quantity</TableHead>
                          <TableHead className="text-right">Total</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {orderItems.map((item) => (
                          <TableRow key={item.id}>
                            <TableCell>
                              <div className="flex items-center gap-3">
                                <img
                                  src={item.image || "/placeholder.svg"}
                                  alt={item.name}
                                  className="h-10 w-10 rounded-md object-cover"
                                />
                                <span>{item.name}</span>
                              </div>
                            </TableCell>
                            <TableCell>₹{item.price.toLocaleString()}</TableCell>
                            <TableCell>{item.quantity}</TableCell>
                            <TableCell className="text-right">₹{item.total.toLocaleString()}</TableCell>
                          </TableRow>
                        ))}
                        <TableRow>
                          <TableCell colSpan={3} className="text-right font-medium">
                            Subtotal
                          </TableCell>
                          <TableCell className="text-right">
                            ₹{orderItems.reduce((sum, item) => sum + item.total, 0).toLocaleString()}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell colSpan={3} className="text-right font-medium">
                            Shipping
                          </TableCell>
                          <TableCell className="text-right">₹99</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell colSpan={3} className="text-right font-medium">
                            Tax
                          </TableCell>
                          <TableCell className="text-right">₹900</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell colSpan={3} className="text-right font-bold">
                            Total
                          </TableCell>
                          <TableCell className="text-right font-bold">
                            ₹{(orderItems.reduce((sum, item) => sum + item.total, 0) + 99 + 900).toLocaleString()}
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-medium mb-2">Payment Information</h3>
                    <div className="rounded-md border p-4">
                      <p>
                        <span className="font-medium">Status:</span> {orderDetails.paymentStatus}
                      </p>
                      <p>
                        <span className="font-medium">Method:</span> Credit Card
                      </p>
                      <p>
                        <span className="font-medium">Transaction ID:</span> TXN123456789
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium mb-2">Order Status</h3>
                    <div className="rounded-md border p-4">
                      <Select defaultValue={orderDetails.status.toLowerCase()}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="processing">Processing</SelectItem>
                          <SelectItem value="shipped">Shipped</SelectItem>
                          <SelectItem value="delivered">Delivered</SelectItem>
                          <SelectItem value="cancelled">Cancelled</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2">Order Notes</h3>
                  <Textarea placeholder="Add notes about this order" />
                </div>
              </div>
            )}
          </ScrollArea>

          <DialogFooter className="flex flex-col sm:flex-row gap-2 border-t pt-4 mt-4">
            <Button variant="outline" className="sm:order-1">
              <FileText className="mr-2 h-4 w-4" />
              Download Invoice
            </Button>
            <Button variant="outline" className="sm:order-2">
              <Mail className="mr-2 h-4 w-4" />
              Email Customer
            </Button>
            <Button className="bg-rose-600 hover:bg-rose-700 sm:order-3">Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
