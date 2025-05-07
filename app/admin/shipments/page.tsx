"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Filter, Plus, Truck, Clock, CheckCircle2, AlertCircle, Eye, Edit, Printer } from "lucide-react"

// Mock shipment data - replace with actual data fetching
const shipments = [
  {
    id: "SHP-001",
    orderId: "ORD-001",
    customer: "Rajesh Sharma",
    date: "12 Apr 2023",
    status: "Delivered",
    carrier: "DTDC",
    trackingId: "DTDC12345678",
    deliveryDate: "15 Apr 2023",
  },
  {
    id: "SHP-002",
    orderId: "ORD-002",
    customer: "Priya Patel",
    date: "28 Mar 2023",
    status: "In Transit",
    carrier: "Delhivery",
    trackingId: "DL98765432",
    deliveryDate: "Expected 30 Mar 2023",
  },
  {
    id: "SHP-003",
    orderId: "ORD-003",
    customer: "Amit Singh",
    date: "15 Feb 2023",
    status: "Processing",
    carrier: "BlueDart",
    trackingId: "BD45678901",
    deliveryDate: "Expected 18 Feb 2023",
  },
  {
    id: "SHP-004",
    orderId: "ORD-004",
    customer: "Neha Gupta",
    date: "30 Jan 2023",
    status: "Delivered",
    carrier: "FedEx",
    trackingId: "FDX87654321",
    deliveryDate: "2 Feb 2023",
  },
  {
    id: "SHP-005",
    orderId: "ORD-005",
    customer: "Vikram Malhotra",
    date: "15 Jan 2023",
    status: "Delivered",
    carrier: "Ekart",
    trackingId: "EK12345678",
    deliveryDate: "18 Jan 2023",
  },
  {
    id: "SHP-006",
    orderId: "ORD-006",
    customer: "Sunita Reddy",
    date: "10 Apr 2023",
    status: "Delayed",
    carrier: "India Post",
    trackingId: "IP87654321",
    deliveryDate: "Expected 20 Apr 2023",
  },
]

// Shipment status counts for dashboard
const statusCounts = {
  processing: 12,
  inTransit: 8,
  delivered: 45,
  delayed: 3,
}

export default function ShipmentsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  // Filter shipments based on search term and status filter
  const filteredShipments = shipments.filter((shipment) => {
    const matchesSearch =
      shipment.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      shipment.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      shipment.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      shipment.trackingId.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || shipment.status.toLowerCase() === statusFilter.toLowerCase()

    return matchesSearch && matchesStatus
  })

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Shipment Management</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Create Shipment
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Create New Shipment</DialogTitle>
              <DialogDescription>Fill in the details to create a new shipment for an order.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <label htmlFor="order-id">Order ID</label>
                  <Select>
                    <SelectTrigger id="order-id">
                      <SelectValue placeholder="Select order" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ORD-007">ORD-007</SelectItem>
                      <SelectItem value="ORD-008">ORD-008</SelectItem>
                      <SelectItem value="ORD-009">ORD-009</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <label htmlFor="carrier">Shipping Carrier</label>
                  <Select>
                    <SelectTrigger id="carrier">
                      <SelectValue placeholder="Select carrier" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dtdc">DTDC</SelectItem>
                      <SelectItem value="delhivery">Delhivery</SelectItem>
                      <SelectItem value="bluedart">BlueDart</SelectItem>
                      <SelectItem value="fedex">FedEx</SelectItem>
                      <SelectItem value="ekart">Ekart</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid gap-2">
                <label htmlFor="tracking">Tracking Number</label>
                <Input id="tracking" placeholder="Enter tracking number" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <label htmlFor="ship-date">Shipping Date</label>
                  <Input id="ship-date" type="date" />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="expected-delivery">Expected Delivery</label>
                  <Input id="expected-delivery" type="date" />
                </div>
              </div>
              <div className="grid gap-2">
                <label htmlFor="notes">Shipping Notes (Optional)</label>
                <Input id="notes" placeholder="Add any special instructions or notes" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Create Shipment</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Processing</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-yellow-500 mr-2" />
              <span className="text-2xl font-bold">{statusCounts.processing}</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">In Transit</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Truck className="h-5 w-5 text-blue-500 mr-2" />
              <span className="text-2xl font-bold">{statusCounts.inTransit}</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Delivered</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
              <span className="text-2xl font-bold">{statusCounts.delivered}</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Delayed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
              <span className="text-2xl font-bold">{statusCounts.delayed}</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
          <TabsList>
            <TabsTrigger value="all">All Shipments</TabsTrigger>
            <TabsTrigger value="recent">Recent</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
          </TabsList>

          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <div className="relative w-full sm:w-[250px]">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search shipments..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <div className="flex items-center">
                  <Filter className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Filter by status" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="processing">Processing</SelectItem>
                <SelectItem value="in transit">In Transit</SelectItem>
                <SelectItem value="delivered">Delivered</SelectItem>
                <SelectItem value="delayed">Delayed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <TabsContent value="all" className="m-0">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Shipment ID</TableHead>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Carrier</TableHead>
                    <TableHead>Tracking</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredShipments.map((shipment) => (
                    <TableRow key={shipment.id}>
                      <TableCell className="font-medium">{shipment.id}</TableCell>
                      <TableCell>
                        <Link href={`/admin/orders/${shipment.orderId}`} className="text-pink-600 hover:underline">
                          {shipment.orderId}
                        </Link>
                      </TableCell>
                      <TableCell>{shipment.customer}</TableCell>
                      <TableCell>{shipment.date}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            shipment.status === "Delivered"
                              ? "default"
                              : shipment.status === "In Transit"
                                ? "secondary"
                                : shipment.status === "Processing"
                                  ? "outline"
                                  : "destructive"
                          }
                        >
                          {shipment.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{shipment.carrier}</TableCell>
                      <TableCell>
                        <span className="text-xs font-mono">{shipment.trackingId}</span>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="icon">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Printer className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recent" className="m-0">
          <Card>
            <CardContent className="p-6">
              <p className="text-center text-muted-foreground">Showing shipments from the last 7 days</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pending" className="m-0">
          <Card>
            <CardContent className="p-6">
              <p className="text-center text-muted-foreground">Showing all pending shipments</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
