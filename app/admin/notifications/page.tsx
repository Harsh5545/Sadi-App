// "use client"

// import { useState } from "react"
// import {
//   PlusCircle,
//   Users,
//   Calendar,
//   Tag,
//   CheckCircle2,
//   Clock,
//   Search,
//   Filter,
//   ChevronDown,
//   ArrowUpDown,
// } from "lucide-react"

// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { Card, CardContent } from "@/components/ui/card"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// export default function NotificationsPage() {
//   const [sortColumn, setSortColumn] = useState<string | null>(null)
//   const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')

//   // This would be fetched from an API in a real application
//   const notifications = [
//     {
//       id: 1,
//       title: "New Summer Collection Launch",
//       message: "Explore our new summer collection with exclusive discounts for the first week!",
//       type: "product",
//       status: "sent",
//       sentDate: "2025-04-15",
//       recipients: 1245,
//       clicks: 328,
//     },
//     {
//       id: 2,
//       title: "Wedding Season Sale",
//       message: "Get ready for the wedding season with our special collection and offers!",
//       type: "sale",
//       status: "sent",
//       sentDate: "2025-04-05",
//       recipients: 1182,
//       clicks: 276,
//     },
//     {
//       id: 3,
//       title: "New Blog: Styling Tips for Summer",
//       message: "Check out our latest blog post on styling sarees for summer events!",
//       type: "blog",
//       status: "sent",
//       sentDate: "2025-03-25",
//       recipients: 1140,
//       clicks: 195,
//     },
//     {
//       id: 4,
//       title: "Festive Collection Preview",
//       message: "Be the first to see our upcoming festive collection!",
//       type: "product",
//       status: "scheduled",
//       sentDate: "2025-05-10",
//       recipients: 1250,
//       clicks: null,
//     },
//     {
//       id: 5,
//       title: "Special Discount for Loyal Customers",
//       message: "As a valued customer, enjoy an exclusive 15% discount on your next purchase!",
//       type: "sale",
//       status: "draft",
//       sentDate: null,
//       recipients: 850,
//       clicks: null,
//     },
//   ]

//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case "sent":
//         return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
//       case "scheduled":
//         return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
//       case "draft":
//         return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
//       default:
//         return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
//     }
//   }

//   const getTypeColor = (type: string) => {
//     switch (type) {
//       case "product":
//         return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
//       case "sale":
//         return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
//       case "blog":
//         return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
//       default:
//         return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
//     }
//   }

//   const getTypeIcon = (type: string) => {
//     switch (type) {
//       case "product":
//         return <Tag className="mr-2 h-4 w-4" />
//       case "sale":
//         return <Tag className="mr-2 h-4 w-4" />
//       case "blog":
//         return <Tag className="mr-2 h-4 w-4" />
//       default:
//         return null
//     }
//   }

//   const getStatusIcon = (status: string) => {
//     switch (status) {
//       case "sent":
//         return <CheckCircle2 className="mr-2 h-4 w-4 text-green-600" />
//       case "scheduled":
//         return <Calendar className="mr-2 h-4 w-4 text-blue-600" />
//       case "draft":
//         return <Clock className="mr-2 h-4 w-4 text-yellow-600" />
//       default:
//         return null
//     }
//   }

//   const handleSort = (column: string) => {
//     if (sortColumn === column) {
//       setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
//     } else {
//       setSortColumn(column)
//       setSortDirection('asc')
//     }
//   }

//   return (
//     <div className="flex flex-col space-y-6">
//       <div className="flex items-center justify-between">
//         <h1 className="text-2xl font-bold tracking-tight">Notifications</h1>
//         <div className="flex items-center gap-2">
//           <Button variant="outline">
//             <Users className="mr-2 h-4 w-4" />
//             Manage Subscribers
//           </Button>
//           <Button>
//             <PlusCircle className="mr-2 h-4 w-4" />
//             Create Notification
//           </Button>
//         </div>
//       </div>

//       <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
//         <div className="flex items-center space-x-2">
//           <div className="relative">
//             <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
//             <Input type="search" placeholder="Search notifications..." className="w-full rounded-md pl-8 md:w-[300px]" />
//           </div>
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button variant="outline" size="sm" className="h-9">
//                 <Filter className="mr-2 h-4 w-4" />
//                 Filter
//                 <ChevronDown className="ml-2 h-4 w-4" />
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end" className="w-[200px]">
//               <DropdownMenuLabel>Filter by</DropdownMenuLabel>
//               <DropdownMenuSeparator />
//               <DropdownMenuItem>Status</DropdownMenuItem>
//               <DropdownMenuItem>Type</DropdownMenuItem>
//               <DropdownMenuItem>Date Range</DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         </div>
//       </div>

//       <Tabs defaultValue="all" className="space-y-4">
//         <TabsList>
//           <TabsTrigger value="all">All Notifications</TabsTrigger>
//           <TabsTrigger value="sent">Sent</TabsTrigger>
//           <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
//           <TabsTrigger value="drafts">Drafts</TabsTrigger>
//         </TabsList>

//         <TabsContent value="all" className="space-y-4">
//           <Card>
//             <CardContent className="p-0">
//               <Table>
//                 <TableHeader>
//                   <TableRow>
//                     <TableHead className="w-[300px]" onClick={() => handleSort('title')}>
//                       <div className="flex items-center">
//                         Title
//                         <ArrowUpDown className="ml-2 h-4 w-4" />
//                       </div>
//                     </TableHead>
//                     <TableHead onClick={() => handleSort('type')}>
//                       <div className="flex items-center">
//                         Type
//                         <ArrowUpDown className="ml-2 h-4 w-4" />
//                       </div>
//                     </TableHead>
//                     <TableHead onClick={() => handleSort('status')}>
//                       <div className="flex items-center">
//                         Status
//                         <ArrowUpDown className="ml-2 h-4 w-4" />
//                       </div>
//                     </TableHead>
//                     <TableHead onClick={() => handleSort('sentDate')}>
//                       <div className="flex items-center">
//                         Date
//                         <ArrowUpDown className="ml-2 h-4 w-4" />
//                       </div>
//                     </TableHead>
//                     <TableHead onClick={() => handleSort('recipients')}>
//                       <div className="flex items-center">
//                         Recipients
//                         <ArrowUpDown className="ml-2 h-4 w-4" />
//                       </div>
//                     </TableHead>
//                     <TableHead onClick={() => handleSort('clicks')}>
//                       <div className="flex items-center">
//                         Clicks
//                         <ArrowUpDown className="ml-2 h-4 w-4" />
//                       </div>
//                     </TableHead>
//                     <TableHead className="text-right">Actions</TableHead>
//                   </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                   {notifications.map((notification) => (
//                     <TableRow key={notification.id}>
//                       <TableCell>
//                         <div>
//                           <div className="font-medium">{notification.title}</div>
//                           <div className="text-xs text-gray-500">{notification.message}</div>
//                         </div>

// \
