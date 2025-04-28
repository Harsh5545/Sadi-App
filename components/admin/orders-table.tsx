"use client"
import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const recentOrders = [
  {
    id: "ORD-001",
    customer: "Olivia Martin",
    status: "Delivered",
    amount: 1999,
    date: "2023-04-23",
  },
  {
    id: "ORD-002",
    customer: "Jackson Lee",
    status: "Processing",
    amount: 3999,
    date: "2023-04-22",
  },
  {
    id: "ORD-003",
    customer: "Isabella Nguyen",
    status: "Processing",
    amount: 2499,
    date: "2023-04-22",
  },
  {
    id: "ORD-004",
    customer: "William Kim",
    status: "Shipped",
    amount: 9999,
    date: "2023-04-21",
  },
  {
    id: "ORD-005",
    customer: "Sofia Davis",
    status: "Delivered",
    amount: 5999,
    date: "2023-04-20",
  },
  {
    id: "ORD-006",
    customer: "Raj Patel",
    status: "Processing",
    amount: 7499,
    date: "2023-04-20",
  },
  {
    id: "ORD-007",
    customer: "Ananya Sharma",
    status: "Shipped",
    amount: 12999,
    date: "2023-04-19",
  },
]

export function OrdersTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Order ID</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Amount</TableHead>
          <TableHead className="w-[50px]"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {recentOrders.map((order) => (
          <TableRow key={order.id}>
            <TableCell className="font-medium">{order.id}</TableCell>
            <TableCell>{order.customer}</TableCell>
            <TableCell>{order.date}</TableCell>
            <TableCell>
              <div
                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                  order.status === "Delivered"
                    ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                    : order.status === "Processing"
                      ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                      : "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300"
                }`}
              >
                {order.status}
              </div>
            </TableCell>
            <TableCell className="text-right">₹{order.amount.toLocaleString()}</TableCell>
            <TableCell>
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
                  <DropdownMenuItem>View order details</DropdownMenuItem>
                  <DropdownMenuItem>Update status</DropdownMenuItem>
                  <DropdownMenuItem>Contact customer</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
