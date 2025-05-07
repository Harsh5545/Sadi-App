"use client"

import { useState } from "react"
import { Search, Filter, MoreHorizontal, Star, StarHalf, Plus, Edit, Trash2, Eye, Upload } from "lucide-react"

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
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"

// Sample review data
const reviews = [
  {
    id: 1,
    customer: "Priya Sharma",
    email: "priya.sharma@example.com",
    rating: 5,
    title: "Excellent quality saree",
    comment:
      "The Banarasi silk saree I purchased is absolutely stunning. The quality is exceptional and the design is beautiful. I received many compliments when I wore it to a wedding.",
    product: "Banarasi Silk Saree",
    date: "2023-04-15",
    status: "approved",
    images: ["/placeholder.svg?height=80&width=80"],
    verified: true,
  },
  {
    id: 2,
    customer: "Rahul Patel",
    email: "rahul.patel@example.com",
    rating: 4,
    title: "Beautiful saree, slight color difference",
    comment:
      "The Kanjivaram silk saree is beautiful and well-crafted. The only reason I'm giving 4 stars instead of 5 is because the color is slightly different from what was shown in the pictures. Still very happy with my purchase.",
    product: "Kanjivaram Silk Saree",
    date: "2023-04-12",
    status: "approved",
    images: ["/placeholder.svg?height=80&width=80", "/placeholder.svg?height=80&width=80"],
    verified: true,
  },
  {
    id: 3,
    customer: "Anita Desai",
    email: "anita.desai@example.com",
    rating: 5,
    title: "Perfect for daily wear",
    comment:
      "The cotton saree is so comfortable for daily wear. The fabric is soft and breathable. Will definitely buy more in different colors.",
    product: "Chanderi Cotton Saree",
    date: "2023-04-10",
    status: "approved",
    images: [],
    verified: true,
  },
  {
    id: 4,
    customer: "Vikram Singh",
    email: "vikram.singh@example.com",
    rating: 3,
    title: "Good but not great",
    comment:
      "The saree is good quality but the blouse piece that came with it was not as expected. The stitching service was also delayed.",
    product: "Mysore Silk Saree",
    date: "2023-04-08",
    status: "approved",
    images: [],
    verified: false,
  },
  {
    id: 5,
    customer: "Meera Reddy",
    email: "meera.reddy@example.com",
    rating: 5,
    title: "Stunning design and colors",
    comment:
      "The Pochampally Ikat saree has such a unique design and vibrant colors. It's a statement piece in my collection now. The craftsmanship is excellent.",
    product: "Pochampally Ikat Saree",
    date: "2023-04-05",
    status: "pending",
    images: ["/placeholder.svg?height=80&width=80"],
    verified: true,
  },
  {
    id: 6,
    customer: "Arjun Nair",
    email: "arjun.nair@example.com",
    rating: 2,
    title: "Disappointed with quality",
    comment:
      "The saree I received had some defects in the weaving. The customer service was helpful in addressing the issue, but I expected better quality for the price.",
    product: "Bhagalpuri Silk Saree",
    date: "2023-04-03",
    status: "rejected",
    images: ["/placeholder.svg?height=80&width=80", "/placeholder.svg?height=80&width=80"],
    verified: true,
  },
  {
    id: 7,
    customer: "Sunita Joshi",
    email: "sunita.joshi@example.com",
    rating: 4,
    title: "Beautiful but arrived late",
    comment:
      "The Gadwal silk saree is beautiful and well-made. The only issue was the shipping took longer than expected. Otherwise, very satisfied with my purchase.",
    product: "Gadwal Silk Saree",
    date: "2023-04-01",
    status: "pending",
    images: [],
    verified: false,
  },
]

export default function ReviewsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [ratingFilter, setRatingFilter] = useState("all")
  const [selectedReview, setSelectedReview] = useState<any>(null)
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: "asc" | "desc" } | null>(null)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)

  // Filter reviews based on search term, status, and rating
  const filteredReviews = reviews.filter((review) => {
    const matchesSearch =
      review.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.comment.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || review.status === statusFilter
    const matchesRating = ratingFilter === "all" || review.rating.toString() === ratingFilter

    return matchesSearch && matchesStatus && matchesRating
  })

  // Get unique statuses and ratings for filters
  const statuses = ["all", ...new Set(reviews.map((review) => review.status))]
  const ratings = ["all", "5", "4", "3", "2", "1"]

  // Handle view review
  const handleViewReview = (review: any) => {
    setSelectedReview(review)
    setIsViewDialogOpen(true)
  }

  // Handle edit review
  const handleEditReview = (review: any) => {
    setSelectedReview(review)
    setIsEditDialogOpen(true)
  }

  // Handle delete review
  const handleDeleteReview = (review: any) => {
    setSelectedReview(review)
    setIsDeleteDialogOpen(true)
  }

  // Render stars based on rating
  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="h-4 w-4 fill-yellow-400 text-yellow-400" />)
    }

    const emptyStars = 5 - stars.length
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />)
    }

    return stars
  }

  // Get status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
      case "pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
      case "rejected":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Reviews</h2>
          <p className="text-gray-500 dark:text-gray-400">Manage customer reviews and testimonials.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button className="bg-rose-600 hover:bg-rose-700" onClick={() => setIsAddDialogOpen(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Add Review
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="all">All Reviews</TabsTrigger>
          <TabsTrigger value="approved">Approved</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="rejected">Rejected</TabsTrigger>
        </TabsList>

        <div className="flex flex-col gap-4 md:flex-row mb-4">
          <div className="flex flex-1 items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
              <Input
                type="search"
                placeholder="Search reviews..."
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
                    {status === "all" ? "All Statuses" : status.charAt(0).toUpperCase() + status.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={ratingFilter} onValueChange={setRatingFilter}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Rating" />
              </SelectTrigger>
              <SelectContent>
                {ratings.map((rating) => (
                  <SelectItem key={rating} value={rating}>
                    {rating === "all" ? "All Ratings" : `${rating} Star${rating !== "1" ? "s" : ""}`}
                  </SelectItem>
                ))}
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
                  <TableHead>Customer</TableHead>
                  <TableHead>Product</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Images</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredReviews.map((review) => (
                  <TableRow key={review.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{review.customer}</p>
                        <p className="text-sm text-gray-500">{review.email}</p>
                        {review.verified && (
                          <Badge variant="outline" className="mt-1 border-green-500 text-green-700">
                            Verified Purchase
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>{review.product}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        {renderStars(review.rating)}
                        <span className="ml-2">{review.rating}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="max-w-[200px] truncate" title={review.title}>
                        {review.title}
                      </div>
                    </TableCell>
                    <TableCell>{new Date(review.date).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(review.status)}>
                        {review.status.charAt(0).toUpperCase() + review.status.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {review.images.length > 0 ? (
                        <div className="flex items-center gap-1">
                          {review.images.slice(0, 2).map((image, index) => (
                            <div key={index} className="h-8 w-8 overflow-hidden rounded-md">
                              <img
                                src={image || "/placeholder.svg"}
                                alt={`Review ${index + 1}`}
                                className="h-full w-full object-cover"
                              />
                            </div>
                          ))}
                          {review.images.length > 2 && (
                            <Badge variant="outline" className="ml-1">
                              +{review.images.length - 2}
                            </Badge>
                          )}
                        </div>
                      ) : (
                        <span className="text-gray-500">No images</span>
                      )}
                    </TableCell>
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
                          <DropdownMenuItem onClick={() => handleViewReview(review)}>
                            <Eye className="mr-2 h-4 w-4" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleEditReview(review)}>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit Review
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem
                            onClick={() => handleDeleteReview(review)}
                            className="text-red-600 focus:bg-red-50 focus:text-red-700 dark:focus:bg-red-950"
                          >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete Review
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
              Showing <strong>{filteredReviews.length}</strong> of <strong>{reviews.length}</strong> reviews
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" disabled={filteredReviews.length === 0}>
                Previous
              </Button>
              <Button variant="outline" size="sm" disabled={filteredReviews.length === 0}>
                Next
              </Button>
            </div>
          </CardFooter>
        </Card>
      </Tabs>

      {/* Add Review Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-hidden flex flex-col">
          <DialogHeader>
            <DialogTitle>Add New Review</DialogTitle>
            <DialogDescription>Add a new customer review or testimonial. Fill in the details below.</DialogDescription>
          </DialogHeader>

          <ScrollArea className="flex-1 pr-4">
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="customer-name">Customer Name</Label>
                    <Input id="customer-name" placeholder="Enter customer name" />
                  </div>
                  <div>
                    <Label htmlFor="customer-email">Customer Email</Label>
                    <Input id="customer-email" type="email" placeholder="Enter customer email" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="product">Product</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select product" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="banarasi-silk-saree">Banarasi Silk Saree</SelectItem>
                      <SelectItem value="kanjivaram-silk-saree">Kanjivaram Silk Saree</SelectItem>
                      <SelectItem value="chanderi-cotton-saree">Chanderi Cotton Saree</SelectItem>
                      <SelectItem value="mysore-silk-saree">Mysore Silk Saree</SelectItem>
                      <SelectItem value="pochampally-ikat-saree">Pochampally Ikat Saree</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="rating">Rating</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select rating" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">5 Stars</SelectItem>
                      <SelectItem value="4">4 Stars</SelectItem>
                      <SelectItem value="3">3 Stars</SelectItem>
                      <SelectItem value="2">2 Stars</SelectItem>
                      <SelectItem value="1">1 Star</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="title">Review Title</Label>
                  <Input id="title" placeholder="Enter review title" />
                </div>
                <div>
                  <Label htmlFor="comment">Review Comment</Label>
                  <Textarea id="comment" placeholder="Enter review comment" className="min-h-[100px]" />
                </div>
                <div>
                  <Label htmlFor="status">Status</Label>
                  <Select defaultValue="approved">
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="approved">Approved</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="images">Review Images</Label>
                  <div className="mt-2 grid grid-cols-3 gap-4">
                    <div className="flex h-24 w-full flex-col items-center justify-center rounded-md border border-dashed">
                      <Upload className="h-8 w-8 text-gray-400" />
                      <Button variant="ghost" size="sm" className="mt-2">
                        Upload
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollArea>

          <DialogFooter className="border-t pt-4 mt-4">
            <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
              Cancel
            </Button>
            <Button className="bg-rose-600 hover:bg-rose-700" onClick={() => setIsAddDialogOpen(false)}>
              Add Review
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* View Review Dialog */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Review Details</DialogTitle>
            <DialogDescription>
              {selectedReview &&
                `Review from ${selectedReview.customer} on ${new Date(selectedReview.date).toLocaleDateString()}`}
            </DialogDescription>
          </DialogHeader>

          {selectedReview && (
            <div className="grid gap-4 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {renderStars(selectedReview.rating)}
                  <span className="ml-2 font-medium">{selectedReview.rating} out of 5</span>
                </div>
                <Badge className={getStatusColor(selectedReview.status)}>
                  {selectedReview.status.charAt(0).toUpperCase() + selectedReview.status.slice(1)}
                </Badge>
              </div>

              <div>
                <h3 className="font-medium">{selectedReview.title}</h3>
                <p className="text-sm text-gray-500 mt-1">For {selectedReview.product}</p>
              </div>

              <div className="rounded-md border p-4">
                <p>{selectedReview.comment}</p>
              </div>

              {selectedReview.images.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium mb-2">Review Images</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedReview.images.map((image: string, index: number) => (
                      <div key={index} className="h-24 w-24 overflow-hidden rounded-md border">
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`Review ${index + 1}`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium mb-2">Customer Information</h4>
                  <div className="rounded-md border p-4">
                    <p className="font-medium">{selectedReview.customer}</p>
                    <p className="text-sm text-gray-500">{selectedReview.email}</p>
                    {selectedReview.verified && (
                      <Badge variant="outline" className="mt-2 border-green-500 text-green-700">
                        Verified Purchase
                      </Badge>
                    )}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">Review Status</h4>
                  <Select defaultValue={selectedReview.status}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="approved">Approved</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsViewDialogOpen(false)}>
              Close
            </Button>
            <Button className="bg-rose-600 hover:bg-rose-700" onClick={() => setIsViewDialogOpen(false)}>
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Review Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-hidden flex flex-col">
          <DialogHeader>
            <DialogTitle>Edit Review</DialogTitle>
            <DialogDescription>Make changes to the review. Click save when you're done.</DialogDescription>
          </DialogHeader>

          <ScrollArea className="flex-1 pr-4">
            {selectedReview && (
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-1 gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="edit-customer-name">Customer Name</Label>
                      <Input id="edit-customer-name" defaultValue={selectedReview.customer} />
                    </div>
                    <div>
                      <Label htmlFor="edit-customer-email">Customer Email</Label>
                      <Input id="edit-customer-email" type="email" defaultValue={selectedReview.email} />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="edit-product">Product</Label>
                    <Select defaultValue={selectedReview.product.toLowerCase().replace(/\s+/g, "-")}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select product" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="banarasi-silk-saree">Banarasi Silk Saree</SelectItem>
                        <SelectItem value="kanjivaram-silk-saree">Kanjivaram Silk Saree</SelectItem>
                        <SelectItem value="chanderi-cotton-saree">Chanderi Cotton Saree</SelectItem>
                        <SelectItem value="mysore-silk-saree">Mysore Silk Saree</SelectItem>
                        <SelectItem value="pochampally-ikat-saree">Pochampally Ikat Saree</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="edit-rating">Rating</Label>
                    <Select defaultValue={selectedReview.rating.toString()}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select rating" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5">5 Stars</SelectItem>
                        <SelectItem value="4">4 Stars</SelectItem>
                        <SelectItem value="3">3 Stars</SelectItem>
                        <SelectItem value="2">2 Stars</SelectItem>
                        <SelectItem value="1">1 Star</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="edit-title">Review Title</Label>
                    <Input id="edit-title" defaultValue={selectedReview.title} />
                  </div>
                  <div>
                    <Label htmlFor="edit-comment">Review Comment</Label>
                    <Textarea id="edit-comment" defaultValue={selectedReview.comment} className="min-h-[100px]" />
                  </div>
                  <div>
                    <Label htmlFor="edit-status">Status</Label>
                    <Select defaultValue={selectedReview.status}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="approved">Approved</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="rejected">Rejected</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="edit-images">Review Images</Label>
                    <div className="mt-2 grid grid-cols-4 gap-4">
                      {selectedReview.images.map((image: string, index: number) => (
                        <div key={index} className="relative h-24 w-full overflow-hidden rounded-md border">
                          <img
                            src={image || "/placeholder.svg"}
                            alt={`Review ${index + 1}`}
                            className="h-full w-full object-cover"
                          />
                          <Button
                            variant="destructive"
                            size="icon"
                            className="absolute right-1 top-1 h-6 w-6 rounded-full"
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      ))}
                      <div className="flex h-24 w-full flex-col items-center justify-center rounded-md border border-dashed">
                        <Upload className="h-8 w-8 text-gray-400" />
                        <Button variant="ghost" size="sm" className="mt-2">
                          Upload
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </ScrollArea>

          <DialogFooter className="border-t pt-4 mt-4">
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Cancel
            </Button>
            <Button className="bg-rose-600 hover:bg-rose-700" onClick={() => setIsEditDialogOpen(false)}>
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Delete Review</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this review? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            {selectedReview && (
              <div>
                <p className="font-medium">{selectedReview.title}</p>
                <p className="text-sm text-gray-500">By {selectedReview.customer}</p>
              </div>
            )}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={() => setIsDeleteDialogOpen(false)}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
