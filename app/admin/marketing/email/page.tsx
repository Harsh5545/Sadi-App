import { useState } from "react"
import { Send, Users, Mail, FileText, PlusCircle, Calendar, Clock, CheckCircle2, MoreHorizontal, Search, Filter, ChevronDown, ArrowUpDown } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Table, TableBody, TableCell, TableHead, 
  TableHeader, TableRow 
} from "@/components/ui/table"
import {
  DropdownMenu,
  Drop  TableHead, 
  TableHeader, TableRow 
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function EmailMarketingPage() {
  const [sortColumn, setSortColumn] = useState<string | null>(null)
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')

  // This would be fetched from an API in a real application
  const emailCampaigns = [
    {
      id: 1,
      name: "Summer Collection Launch",
      subject: "Introducing Our New Summer Collection - 20% Off for Limited Time!",
      status: "sent",
      sentDate: "2025-04-15",
      recipients: 12245,
      openRate: 32.5,
      clickRate: 5.8,
    },
    {
      id: 2,
      name: "Wedding Season Sale",
      subject: "Exclusive Wedding Season Offers - Shop Now!",
      status: "sent",
      sentDate: "2025-04-05",
      recipients: 11982,
      openRate: 29.8,
      clickRate: 4.2,
    },
    {
      id: 3,
      name: "New Arrivals Announcement",
      subject: "Just In: Discover Our Latest Saree Collection",
      status: "sent",
      sentDate: "2025-03-25",
      recipients: 11540,
      openRate: 27.2,
      clickRate: 3.9,
    },
    {
      id: 4,
      name: "Festive Season Preview",
      subject: "Get Ready for the Festive Season with Our Exclusive Collection",
      status: "scheduled",
      sentDate: "2025-05-10",
      recipients: 12500,
      openRate: null,
      clickRate: null,
    },
    {
      id: 5,
      name: "Customer Appreciation Sale",
      subject: "A Special Thank You to Our Valued Customers - Exclusive Discounts Inside",
      status: "draft",
      sentDate: null,
      recipients: 12500,
      openRate: null,
      clickRate: null,
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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "sent":
        return <CheckCircle2 className="mr-2 h-4 w-4 text-green-600" />
      case "scheduled":
        return <Calendar className="mr-2 h-4 w-4 text-blue-600" />
      case "draft":
        return <FileText className="mr-2 h-4 w-4 text-yellow-600" />
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

  return (
    <div className="flex flex-col space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Email Marketing</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Users className="mr-2 h-4 w-4" />
            Manage Subscribers
          </Button>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Create Campaign
          </Button>
        </div>
      </div>

      <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input type="search" placeholder="Search campaigns..." className="w-full rounded-md pl-8 md:w-[300px]" />
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
              <DropdownMenuItem>Date Range</DropdownMenuItem>
              <DropdownMenuItem>Performance</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Campaigns</TabsTrigger>
          <TabsTrigger value="sent">Sent</TabsTrigger>
          <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
          <TabsTrigger value="drafts">Drafts</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[300px]" onClick={() => handleSort('name')}>
                      <div className="flex items-center">
                        Campaign Name
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead onClick={() => handleSort('status')}>
                      <div className="flex items-center">
                        Status
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead onClick={() => handleSort('sentDate')}>
                      <div className="flex items-center">
                        Date
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead onClick={() => handleSort('recipients')}>
                      <div className="flex items-center">
                        Recipients
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead onClick={() => handleSort('openRate')}>
                      <div className="flex items-center">
                        Open Rate
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead onClick={() => handleSort('clickRate')}>
                      <div className="flex items-center">
                        Click Rate
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {emailCampaigns.map((campaign) => (
                    <TableRow key={campaign.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{campaign.name}</div>
                          <div className="text-xs text-gray-500">{campaign.subject}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(campaign.status)}>
                          <div className="flex items-center">
                            {getStatusIcon(campaign.status)}
                            {campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1)}
                          </div>
                        </Badge>
                      </TableCell>
                      <TableCell>{campaign.sentDate || "—"}</TableCell>
                      <TableCell>{campaign.recipients.toLocaleString()}</TableCell>
                      <TableCell>{campaign.openRate ? `${campaign.openRate}%` : "—"}</TableCell>
                      <TableCell>{campaign.clickRate ? `${campaign.clickRate}%` : "—"}</TableCell>
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
                            <DropdownMenuItem>View Report</DropdownMenuItem>
                            <DropdownMenuItem>Edit Campaign</DropdownMenuItem>
                            <DropdownMenuItem>Duplicate</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600 dark:text-red-400">
                              Delete Campaign
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
                Showing <strong>1-5</strong> of <strong>5</strong> campaigns
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm" disabled>
                  Next
                </Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="sent" className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <p className="text-center text-gray-500">Showing sent campaigns only. Filter applied.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="scheduled" className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <p className="text-center text-gray-500">Showing scheduled campaigns only. Filter applied.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="drafts" className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <p className="text-center text-gray-500">Showing draft campaigns only. Filter applied.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Subscribers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,543</div>
            <p className="text-xs text-muted-foreground">+856 this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Avg. Open Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28.4%</div>
            <p className="text-xs text-muted-foreground">+2.1% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Avg. Click Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.8%</div>
            <p className="text-xs text-muted-foreground">+0.6% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Campaigns Sent</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">+3 this month</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Create New Campaign</CardTitle>
          <CardDescription>Send a new email campaign to your subscribers</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="campaign-name">Campaign Name</Label>
              <Input id="campaign-name" placeholder="Enter campaign name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email-subject">Email Subject</Label>
              <Input id="email-subject" placeholder="Enter email subject" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email-content">Email Content</Label>
              <Textarea id="email-content" placeholder="Compose your email..." className="min-h-[200px]" />
            </div>
            <div className="space-y-2">
              <Label>Recipients</Label>
              <div className="flex items-center space-x-2">
                <Input placeholder="Select recipient group" readOnly />
                <Button variant="outline">
                  <Users className="mr-2 h-4 w-4" />
                  Select
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Schedule</Label>
              <div className="flex items-center space-x-2">
                <Input type="date" className="w-full" />
                <Input type="time" className="w-full" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Save as Draft</Button>
          <Button>
            <Send className="mr-2 h-4 w-4" />
            Send Campaign
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
