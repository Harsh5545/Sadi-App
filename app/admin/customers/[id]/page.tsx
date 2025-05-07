"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Mail, Edit, Save, ArrowLeft, User, ShoppingBag, Package, Eye, Send, Phone, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"

// Mock customer data - replace with actual data fetching
const customer = {
  id: "cust123",
  name: "Rajesh Sharma",
  email: "rajesh.sharma@example.com",
  phone: "+91 98765 43210",
  address: "123 Main Street, Mumbai, Maharashtra 400001",
  dateJoined: "15 Jan 2023",
  totalOrders: 8,
  totalSpent: "₹24,500",
  lastPurchase: "2 days ago",
  avatar: "/placeholder.svg?height=80&width=80",
  notes: "Prefers silk sarees and traditional designs. Regular customer who often shops for family events.",
}

// Mock orders data - replace with actual data fetching
const orders = [
  {
    id: "ORD-001",
    date: "12 Apr 2023",
    status: "Delivered",
    total: "₹3,200",
    items: 2,
  },
  {
    id: "ORD-002",
    date: "28 Mar 2023",
    status: "Processing",
    total: "₹5,800",
    items: 3,
  },
  {
    id: "ORD-003",
    date: "15 Feb 2023",
    status: "Delivered",
    total: "₹2,500",
    items: 1,
  },
  {
    id: "ORD-004",
    date: "30 Jan 2023",
    status: "Delivered",
    total: "₹4,200",
    items: 2,
  },
  {
    id: "ORD-005",
    date: "15 Jan 2023",
    status: "Delivered",
    total: "₹8,800",
    items: 4,
  },
]

// Mock shipments data
const shipments = [
  {
    id: "SHP-001",
    orderId: "ORD-001",
    date: "13 Apr 2023",
    status: "Delivered",
    carrier: "DTDC",
    trackingId: "DTDC12345678",
  },
  {
    id: "SHP-002",
    orderId: "ORD-002",
    date: "29 Mar 2023",
    status: "In Transit",
    carrier: "Delhivery",
    trackingId: "DL98765432",
  },
  {
    id: "SHP-003",
    orderId: "ORD-003",
    date: "16 Feb 2023",
    status: "Delivered",
    carrier: "BlueDart",
    trackingId: "BD45678901",
  },
]

export default function CustomerDetails({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [emailSubject, setEmailSubject] = useState("")
  const [emailBody, setEmailBody] = useState("")
  const [isEditing, setIsEditing] = useState(false)
  const [customerData, setCustomerData] = useState({
    name: customer.name,
    email: customer.email,
    phone: customer.phone,
    address: customer.address,
    notes: customer.notes,
  })

  const handleSendEmail = () => {
    // Implement email sending functionality
    console.log("Sending email to:", customer.email)
    console.log("Subject:", emailSubject)
    console.log("Body:", emailBody)
    // Reset form
    setEmailSubject("")
    setEmailBody("")
  }

  const handleSaveCustomer = () => {
    // Implement save functionality
    console.log("Saving customer data:", customerData)
    setIsEditing(false)
  }

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={() => router.back()}>
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back</span>
          </Button>
          <h1 className="text-3xl font-bold">Customer Details</h1>
        </div>
        <div className="flex gap-2">
          {isEditing ? (
            <>
              <Button variant="outline" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
              <Button className="bg-rose-600 hover:bg-rose-700" onClick={handleSaveCustomer}>
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </>
          ) : (
            <>
              <Button variant="outline" onClick={() => setIsEditing(true)}>
                <Edit className="mr-2 h-4 w-4" />
                Edit Customer
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="default">
                    <Mail className="mr-2 h-4 w-4" />
                    Email Customer
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[525px]">
                  <DialogHeader>
                    <DialogTitle>Send Email to {customer.name}</DialogTitle>
                    <DialogDescription>Compose an email to send directly to this customer.</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="email">To</Label>
                      <Input id="email" value={customer.email} disabled />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        value={emailSubject}
                        onChange={(e) => setEmailSubject(e.target.value)}
                        placeholder="Enter email subject"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        value={emailBody}
                        onChange={(e) => setEmailBody(e.target.value)}
                        placeholder="Enter your message here"
                        rows={8}
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit" onClick={handleSendEmail}>
                      <Send className="mr-2 h-4 w-4" />
                      Send Email
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Customer Information</CardTitle>
            <CardDescription>Joined on {customer.dateJoined}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="relative h-16 w-16 rounded-full overflow-hidden">
                <Image src={customer.avatar || "/placeholder.svg"} alt={customer.name} fill className="object-cover" />
              </div>
              <div>
                <p className="text-lg font-medium">{customer.name}</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Mail className="mr-1 h-4 w-4" />
                  {customer.email}
                </div>
              </div>
            </div>

            {isEditing ? (
              <div className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={customerData.name}
                    onChange={(e) => setCustomerData({ ...customerData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    value={customerData.email}
                    onChange={(e) => setCustomerData({ ...customerData, email: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    value={customerData.phone}
                    onChange={(e) => setCustomerData({ ...customerData, phone: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Textarea
                    id="address"
                    value={customerData.address}
                    onChange={(e) => setCustomerData({ ...customerData, address: e.target.value })}
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="notes">Notes</Label>
                  <Textarea
                    id="notes"
                    value={customerData.notes}
                    onChange={(e) => setCustomerData({ ...customerData, notes: e.target.value })}
                    rows={3}
                  />
                </div>
              </div>
            ) : (
              <div className="pt-4 space-y-3">
                <div className="flex items-start space-x-2">
                  <Phone className="h-4 w-4 mt-0.5 text-gray-500" />
                  <div>
                    <p className="text-sm font-medium">Phone</p>
                    <p>{customer.phone}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 mt-0.5 text-gray-500" />
                  <div>
                    <p className="text-sm font-medium">Address</p>
                    <p>{customer.address}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <User className="h-4 w-4 mt-0.5 text-gray-500" />
                  <div>
                    <p className="text-sm font-medium">Notes</p>
                    <p>{customer.notes}</p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Customer Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-pink-50 p-4 rounded-lg">
                <p className="text-sm text-pink-600 font-medium">Total Orders</p>
                <p className="text-2xl font-bold">{customer.totalOrders}</p>
              </div>
              <div className="bg-pink-50 p-4 rounded-lg">
                <p className="text-sm text-pink-600 font-medium">Total Spent</p>
                <p className="text-2xl font-bold">{customer.totalSpent}</p>
              </div>
              <div className="bg-pink-50 p-4 rounded-lg">
                <p className="text-sm text-pink-600 font-medium">Last Purchase</p>
                <p className="text-2xl font-bold">{customer.lastPurchase}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="orders">
        <TabsList className="grid w-full grid-cols-2 md:w-auto md:inline-flex">
          <TabsTrigger value="orders">
            <ShoppingBag className="mr-2 h-4 w-4" />
            Orders
          </TabsTrigger>
          <TabsTrigger value="shipments">
            <Package className="mr-2 h-4 w-4" />
            Shipments
          </TabsTrigger>
        </TabsList>

        <TabsContent value="orders" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Order History</CardTitle>
              <CardDescription>View all orders placed by this customer</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Items</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>{order.date}</TableCell>
                      <TableCell>
                        <Badge
                          className={`${
                            order.status === "Delivered"
                              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                              : order.status === "Processing"
                                ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                                : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                          }`}
                        >
                          {order.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{order.items}</TableCell>
                      <TableCell>{order.total}</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          <Eye className="mr-2 h-4 w-4" />
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="shipments">
          <Card>
            <CardHeader>
              <CardTitle>Shipment History</CardTitle>
              <CardDescription>Track all shipments for this customer</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Shipment ID</TableHead>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Carrier</TableHead>
                    <TableHead>Tracking ID</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {shipments.map((shipment) => (
                    <TableRow key={shipment.id}>
                      <TableCell className="font-medium">{shipment.id}</TableCell>
                      <TableCell>{shipment.orderId}</TableCell>
                      <TableCell>{shipment.date}</TableCell>
                      <TableCell>
                        <Badge
                          className={`${
                            shipment.status === "Delivered"
                              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                              : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                          }`}
                        >
                          {shipment.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{shipment.carrier}</TableCell>
                      <TableCell>
                        <span className="font-mono text-xs">{shipment.trackingId}</span>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          <Eye className="mr-2 h-4 w-4" />
                          Track
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
