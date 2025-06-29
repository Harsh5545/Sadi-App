"use client"

import { useState } from "react"
import {
  PlusCircle,
  Users,
  Calendar,
  Tag,
  CheckCircle2,
  Clock,
  Search,
  Filter,
  ChevronDown,
  ArrowUpDown,
  MoreVertical,
  Edit,
  Trash2,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function NotificationsPage() {
  const [sortColumn, setSortColumn] = useState<string | null>(null)
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')
  const [tab, setTab] = useState("all")
  const [search, setSearch] = useState("")

  // This would be fetched from an API in a real application
  const notifications = [
    {
      id: 1,
      title: "New Summer Collection Launch",
      message: "Explore our new summer collection with exclusive discounts for the first week!",
      type: "product",
      status: "sent",
      sentDate: "2025-04-15",
      recipients: 1245,
      clicks: 328,
    },
    {
      id: 2,
      title: "Wedding Season Sale",
      message: "Get ready for the wedding season with our special collection and offers!",
      type: "sale",
      status: "sent",
      sentDate: "2025-04-05",
      recipients: 1182,
      clicks: 276,
    },
    {
      id: 3,
      title: "New Blog: Styling Tips for Summer",
      message: "Check out our latest blog post on styling sarees for summer events!",
      type: "blog",
      status: "sent",
      sentDate: "2025-03-25",
      recipients: 1140,
      clicks: 195,
    },
    {
      id: 4,
      title: "Festive Collection Preview",
      message: "Be the first to see our upcoming festive collection!",
      type: "product",
      status: "scheduled",
      sentDate: "2025-05-10",
      recipients: 1250,
      clicks: null,
    },
    {
      id: 5,
      title: "Special Discount for Loyal Customers",
      message: "As a valued customer, enjoy an exclusive 15% discount on your next purchase!",
      type: "sale",
      status: "draft",
      sentDate: null,
      recipients: 850,
      clicks: null,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "sent":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
      case "scheduled":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
      case "draft":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "product":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
      case "sale":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
      case "blog":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "product":
        return <Tag className="mr-2 h-4 w-4" />
      case "sale":
        return <Tag className="mr-2 h-4 w-4" />
      case "blog":
        return <Tag className="mr-2 h-4 w-4" />
      default:
        return null
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "sent":
        return <CheckCircle2 className="mr-2 h-4 w-4 text-green-600" />
      case "scheduled":
        return <Calendar className="mr-2 h-4 w-4 text-blue-600" />
      case "draft":
        return <Clock className="mr-2 h-4 w-4 text-yellow-600" />
      default:
        return null
    }
  }

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortColumn(column)
      setSortDirection('asc')
    }
  }

  // Filtering and sorting logic
  let filtered = notifications.filter((n) => {
    if (tab === "all") return true
    if (tab === "sent") return n.status === "sent"
    if (tab === "scheduled") return n.status === "scheduled"
    if (tab === "drafts") return n.status === "draft"
    return true
  })
  if (search) {
    filtered = filtered.filter(
      (n) =>
        n.title.toLowerCase().includes(search.toLowerCase()) ||
        n.message.toLowerCase().includes(search.toLowerCase())
    )
  }
  if (sortColumn) {
    filtered = [...filtered].sort((a, b) => {
      let aVal = a[sortColumn as keyof typeof a]
      let bVal = b[sortColumn as keyof typeof b]
      if (aVal === null) return 1
      if (bVal === null) return -1
      if (typeof aVal === "string" && typeof bVal === "string") {
        return sortDirection === "asc"
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal)
      }
      if (typeof aVal === "number" && typeof bVal === "number") {
        return sortDirection === "asc" ? aVal - bVal : bVal - aVal
      }
      return 0
    })
  }

  return (
    <div className="flex flex-col space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Notifications</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Users className="mr-2 h-4 w-4" />
            Manage Subscribers
          </Button>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Create Notification
          </Button>
        </div>
      </div>

      <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input
              type="search"
              placeholder="Search notifications..."
              className="w-full rounded-md pl-8 md:w-[300px]"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-9">
                <Filter className="mr-2 h-4 w-4" />
                Filter
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              <DropdownMenuLabel>Filter by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Status</DropdownMenuItem>
              <DropdownMenuItem>Type</DropdownMenuItem>
              <DropdownMenuItem>Date Range</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <Tabs defaultValue="all" value={tab} onValueChange={setTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Notifications</TabsTrigger>
          <TabsTrigger value="sent">Sent</TabsTrigger>
          <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
          <TabsTrigger value="drafts">Drafts</TabsTrigger>
        </TabsList>

        <TabsContent value={tab} className="space-y-4">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[300px]" onClick={() => handleSort('title')}>
                      <div className="flex items-center cursor-pointer">
                        Title
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead onClick={() => handleSort('type')}>
                      <div className="flex items-center cursor-pointer">
                        Type
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead onClick={() => handleSort('status')}>
                      <div className="flex items-center cursor-pointer">
                        Status
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead onClick={() => handleSort('sentDate')}>
                      <div className="flex items-center cursor-pointer">
                        Date
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead onClick={() => handleSort('recipients')}>
                      <div className="flex items-center cursor-pointer">
                        Recipients
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead onClick={() => handleSort('clicks')}>
                      <div className="flex items-center cursor-pointer">
                        Clicks
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filtered.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-8">
                        No notifications found.
                      </TableCell>
                    </TableRow>
                  ) : (
                    filtered.map((notification) => (
                      <TableRow key={notification.id}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{notification.title}</div>
                            <div className="text-xs text-gray-500">{notification.message}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${getTypeColor(notification.type)}`}>
                            {getTypeIcon(notification.type)}
                            {notification.type.charAt(0).toUpperCase() + notification.type.slice(1)}
                          </span>
                        </TableCell>
                        <TableCell>
                          <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${getStatusColor(notification.status)}`}>
                            {getStatusIcon(notification.status)}
                            {notification.status.charAt(0).toUpperCase() + notification.status.slice(1)}
                          </span>
                        </TableCell>
                        <TableCell>
                          {notification.sentDate ? (
                            <span>{notification.sentDate}</span>
                          ) : (
                            <span className="text-gray-400">—</span>
                          )}
                        </TableCell>
                        <TableCell>
                          {notification.recipients}
                        </TableCell>
                        <TableCell>
                          {notification.clicks !== null ? notification.clicks : <span className="text-gray-400">—</span>}
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreVertical className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <Edit className="mr-2 h-4 w-4" />
                                Edit
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Trash2 className="mr-2 h-4 w-4" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}