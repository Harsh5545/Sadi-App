"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, Filter, Plus, Mail, Edit, Eye, MoreHorizontal, Download, ArrowUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"

// Sample customer data
const customers = [
  {
    id: "CUST-001",
    name: "Priya Sharma",
    email: "priya.sharma@example.com",
    avatar: "/placeholder.svg?height=40&width=40",
    orders: 8,
    spent: "₹24,500",
    lastOrder: "2 days ago",
    status: "Active",
  },
  {
    id: "CUST-002",
    name: "Rahul Patel",
    email: "rahul.patel@example.com",
    avatar: "/placeholder.svg?height=40&width=40",
    orders: 5,
    spent: "₹18,200",
    lastOrder: "1 week ago",
    status: "Active",
  },
  {
    id: "CUST-003",
    name: "Anita Desai",
    email: "anita.desai@example.com",
    avatar: "/placeholder.svg?height=40&width=40",
    orders: 12,
    spent: "₹35,800",
    lastOrder: "3 days ago",
    status: "Active",
  },
  {
    id: "CUST-004",
    name: "Vikram Singh",
    email: "vikram.singh@example.com",
    avatar: "/placeholder.svg?height=40&width=40",
    orders: 3,
    spent: "₹9,600",
    lastOrder: "2 weeks ago",
    status: "Inactive",
  },
  {
    id: "CUST-005",
    name: "Meera Reddy",
    email: "meera.reddy@example.com",
    avatar: "/placeholder.svg?height=40&width=40",
    orders: 7,
    spent: "₹21,300",
    lastOrder: "5 days ago",
    status: "Active",
  },
  {
    id: "CUST-006",
    name: "Arjun Kumar",
    email: "arjun.kumar@example.com",
    avatar: "/placeholder.svg?height=40&width=40",
    orders: 0,
    spent: "₹0",
    lastOrder: "Never",
    status: "Inactive",
  },
  {
    id: "CUST-007",
    name: "Sunita Joshi",
    email: "sunita.joshi@example.com",
    avatar: "/placeholder.svg?height=40&width=40",
    orders: 4,
    spent: "₹15,700",
    lastOrder: "1 month ago",
    status: "Active",
  },
]

export default function CustomersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: "asc" | "desc" } | null>(null)

  // Handle sorting
  const requestSort = (key: string) => {
    let direction: "asc" | "desc" = "asc"
    if (sortConfig && sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc"
    }
    setSortConfig({ key, direction })
  }

  // Filter customers based on search term and status
  const filteredCustomers = customers.filter((customer) => {
    const matchesSearch =
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || customer.status.toLowerCase() === statusFilter.toLowerCase()
    return matchesSearch && matchesStatus
  })

  // Sort customers
  const sortedCustomers = [...filteredCustomers].sort((a, b) => {
    if (!sortConfig) return 0

    if (a[sortConfig.key as keyof typeof a] < b[sortConfig.key as keyof typeof b]) {
      return sortConfig.direction === "asc" ? -1 : 1
    }
    if (a[sortConfig.key as keyof typeof a] > b[sortConfig.key as keyof typeof b]) {
      return sortConfig.direction === "asc" ? 1 : -1
    }
    return 0
  })

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Customers</h2>
          <p className="text-gray-500 dark:text-gray-400">Manage your customer accounts and view purchase history.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button className="bg-rose-600 hover:bg-rose-700">
            <Plus className="mr-2 h-4 w-4" />
            Add Customer
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex flex-1 items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input
              type="search"
              placeholder="Search customers..."
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
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon" className="hidden sm:flex">
            <Filter className="h-4 w-4" />
            <span className="sr-only">More filters</span>
          </Button>
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="cursor-pointer" onClick={() => requestSort("name")}>
                  Customer
                  <ArrowUpDown className="ml-2 h-4 w-4 inline" />
                </TableHead>
                <TableHead className="cursor-pointer" onClick={() => requestSort("orders")}>
                  Orders
                  <ArrowUpDown className="ml-2 h-4 w-4 inline" />
                </TableHead>
                <TableHead className="cursor-pointer" onClick={() => requestSort("spent")}>
                  Total Spent
                  <ArrowUpDown className="ml-2 h-4 w-4 inline" />
                </TableHead>
                <TableHead>Last Order</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedCustomers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Image
                        src={customer.avatar || "/placeholder.svg"}
                        alt={customer.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div>
                        <p className="font-medium">{customer.name}</p>
                        <p className="text-sm text-gray-500">{customer.email}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{customer.orders}</TableCell>
                  <TableCell>{customer.spent}</TableCell>
                  <TableCell>{customer.lastOrder}</TableCell>
                  <TableCell>
                    <Badge
                      className={`${
                        customer.status === "Active"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                          : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
                      }`}
                    >
                      {customer.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Dialog>
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
                          <DropdownMenuItem asChild>
                            <Link href={`/admin/customers/${customer.id}`}>
                              <Eye className="mr-2 h-4 w-4" />
                              View Details
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit Customer
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Mail className="mr-2 h-4 w-4" />
                            Send Email
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                      <DialogTrigger className="hidden">Open Dialog</DialogTrigger>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="flex items-center justify-between border-t p-4">
          <div className="text-sm text-gray-500">
            Showing <strong>1-{sortedCustomers.length}</strong> of <strong>{customers.length}</strong> customers
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
    </div>
  )
}
