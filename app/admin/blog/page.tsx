"use client"

import { useState } from "react"
import Image from "next/image"
import {
  PlusCircle,
  Search,
  Filter,
  ChevronDown,
  MoreHorizontal,
  Calendar,
  FileText,
  Edit,
  Trash2,
  Eye,
  ArrowUpDown,
  Upload,
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
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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

export default function BlogPage() {
  const [sortColumn, setSortColumn] = useState<string | null>(null)
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedPost, setSelectedPost] = useState<any>(null)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("all")

  // This would be fetched from an API in a real application
  const blogPosts = [
    {
      id: 1,
      title: "10 Traditional Sarees Every Woman Should Own",
      slug: "10-traditional-sarees-every-woman-should-own",
      excerpt:
        "Explore the rich heritage of Indian sarees and discover the must-have traditional pieces for your wardrobe.",
      author: "Priya Sharma",
      category: "Style Guide",
      status: "published",
      publishDate: "2025-04-15",
      readTime: "5 min read",
      featured: true,
      image: "/placeholder.svg?height=100&width=200",
      views: 1245,
      comments: 32,
    },
    {
      id: 2,
      title: "How to Drape a Saree in 5 Different Styles",
      slug: "how-to-drape-saree-5-different-styles",
      excerpt: "Learn the art of draping sarees in multiple styles to suit different occasions and body types.",
      author: "Anita Desai",
      category: "Tutorial",
      status: "published",
      publishDate: "2025-04-10",
      readTime: "8 min read",
      featured: false,
      image: "/placeholder.svg?height=100&width=200",
      views: 2356,
      comments: 45,
    },
    {
      id: 3,
      title: "The History of Banarasi Silk Sarees",
      slug: "history-banarasi-silk-sarees",
      excerpt: "Dive into the rich history and cultural significance of Banarasi silk sarees from Varanasi.",
      author: "Rajesh Kumar",
      category: "History",
      status: "published",
      publishDate: "2025-04-05",
      readTime: "6 min read",
      featured: true,
      image: "/placeholder.svg?height=100&width=200",
      views: 987,
      comments: 18,
    },
    {
      id: 4,
      title: "Summer Wedding Saree Trends for 2025",
      slug: "summer-wedding-saree-trends-2025",
      excerpt: "Stay ahead of the fashion curve with these trending saree styles for the upcoming wedding season.",
      author: "Priya Sharma",
      category: "Trends",
      status: "draft",
      publishDate: null,
      readTime: "4 min read",
      featured: false,
      image: "/placeholder.svg?height=100&width=200",
      views: 0,
      comments: 0,
    },
    {
      id: 5,
      title: "Caring for Your Silk Sarees: Expert Tips",
      slug: "caring-silk-sarees-expert-tips",
      excerpt:
        "Learn how to properly store, clean, and maintain your precious silk sarees to ensure they last for generations.",
      author: "Meera Reddy",
      category: "Care Guide",
      status: "published",
      publishDate: "2025-03-28",
      readTime: "7 min read",
      featured: false,
      image: "/placeholder.svg?height=100&width=200",
      views: 1567,
      comments: 27,
    },
    {
      id: 6,
      title: "Celebrity Saree Looks to Inspire Your Next Outfit",
      slug: "celebrity-saree-looks-inspiration",
      excerpt:
        "Get inspired by these stunning saree looks worn by Bollywood celebrities for your next special occasion.",
      author: "Anita Desai",
      category: "Celebrity Style",
      status: "scheduled",
      publishDate: "2025-04-20",
      readTime: "5 min read",
      featured: false,
      image: "/placeholder.svg?height=100&width=200",
      views: 0,
      comments: 0,
    },
    {
      id: 7,
      title: "Sustainable Sarees: Eco-Friendly Fabrics and Dyes",
      slug: "sustainable-sarees-eco-friendly-fabrics",
      excerpt: "Discover how traditional saree making is embracing sustainable practices and eco-friendly materials.",
      author: "Rajesh Kumar",
      category: "Sustainability",
      status: "draft",
      publishDate: null,
      readTime: "6 min read",
      featured: false,
      image: "/placeholder.svg?height=100&width=200",
      views: 0,
      comments: 0,
    },
  ]

  // Filter posts based on search term and active tab
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesTab =
      activeTab === "all" ||
      (activeTab === "published" && post.status === "published") ||
      (activeTab === "drafts" && post.status === "draft") ||
      (activeTab === "scheduled" && post.status === "scheduled")

    return matchesSearch && matchesTab
  })

  // Sort posts
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (!sortColumn) return 0

    const aValue = a[sortColumn as keyof typeof a]
    const bValue = b[sortColumn as keyof typeof b]

    if (aValue < bValue) {
      return sortDirection === "asc" ? -1 : 1
    }
    if (aValue > bValue) {
      return sortDirection === "asc" ? 1 : -1
    }
    return 0
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "published":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
      case "draft":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
      case "scheduled":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    }
  }

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("asc")
    }
  }

  const handleAddPost = () => {
    setIsAddDialogOpen(true)
  }

  const handleEditPost = (post: any) => {
    setSelectedPost(post)
    setIsEditDialogOpen(true)
  }

  const handleDeletePost = (post: any) => {
    setSelectedPost(post)
    setIsDeleteDialogOpen(true)
  }

  return (
    <div className="flex flex-col space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Blog</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <FileText className="mr-2 h-4 w-4" />
            Import
          </Button>
          <Button className="bg-rose-600 hover:bg-rose-700" onClick={handleAddPost}>
            <PlusCircle className="mr-2 h-4 w-4" />
            New Post
          </Button>
        </div>
      </div>

      <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input
              type="search"
              placeholder="Search posts..."
              className="w-full rounded-md pl-8 md:w-[300px]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
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
              <DropdownMenuItem>Category</DropdownMenuItem>
              <DropdownMenuItem>Author</DropdownMenuItem>
              <DropdownMenuItem>Date Range</DropdownMenuItem>
              <DropdownMenuItem>Featured</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4" onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="all">All Posts</TabsTrigger>
          <TabsTrigger value="published">Published</TabsTrigger>
          <TabsTrigger value="drafts">Drafts</TabsTrigger>
          <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[300px]" onClick={() => handleSort("title")}>
                      <div className="flex items-center cursor-pointer">
                        Title
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead onClick={() => handleSort("author")}>
                      <div className="flex items-center cursor-pointer">
                        Author
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead onClick={() => handleSort("category")}>
                      <div className="flex items-center cursor-pointer">
                        Category
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead onClick={() => handleSort("status")}>
                      <div className="flex items-center cursor-pointer">
                        Status
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead onClick={() => handleSort("publishDate")}>
                      <div className="flex items-center cursor-pointer">
                        Date
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead onClick={() => handleSort("views")}>
                      <div className="flex items-center cursor-pointer">
                        Views
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sortedPosts.map((post) => (
                    <TableRow key={post.id}>
                      <TableCell>
                        <div className="flex items-center space-x-3">
                          <div className="h-12 w-12 overflow-hidden rounded-md">
                            <Image
                              src={post.image || "/placeholder.svg"}
                              alt={post.title}
                              width={48}
                              height={48}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div>
                            <div className="font-medium">{post.title}</div>
                            <div className="text-xs text-gray-500">{post.readTime}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{post.author}</TableCell>
                      <TableCell>{post.category}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(post.status)}>
                          {post.status.charAt(0).toUpperCase() + post.status.slice(1)}
                        </Badge>
                      </TableCell>
                      <TableCell>{post.publishDate || "—"}</TableCell>
                      <TableCell>{post.views.toLocaleString()}</TableCell>
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
                            <DropdownMenuItem>
                              <Eye className="mr-2 h-4 w-4" />
                              View
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleEditPost(post)}>
                              <Edit className="mr-2 h-4 w-4" />
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => handleDeletePost(post)} className="text-red-600">
                              <Trash2 className="mr-2 h-4 w-4" />
                              Delete
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
                Showing <strong>{sortedPosts.length}</strong> of <strong>{blogPosts.length}</strong> posts
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" disabled={sortedPosts.length === 0}>
                  Previous
                </Button>
                <Button variant="outline" size="sm" disabled={sortedPosts.length === 0}>
                  Next
                </Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="published" className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <p className="text-center text-gray-500">Showing published posts only. Filter applied.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="drafts" className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <p className="text-center text-gray-500">Showing draft posts only. Filter applied.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="scheduled" className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <p className="text-center text-gray-500">Showing scheduled posts only. Filter applied.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Posts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-muted-foreground">+8 this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Views</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24.5K</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Avg. Read Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.2 min</div>
            <p className="text-xs text-muted-foreground">+0.3 min from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Comments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">342</div>
            <p className="text-xs text-muted-foreground">+24 this month</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Content Calendar</CardTitle>
          <CardDescription>Upcoming and scheduled blog posts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="rounded-lg border p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  <span className="font-medium">April 20, 2025</span>
                </div>
                <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">Scheduled</Badge>
              </div>
              <p className="mt-2 font-medium">Celebrity Saree Looks to Inspire Your Next Outfit</p>
              <p className="mt-1 text-sm text-gray-500">By Anita Desai • Celebrity Style</p>
            </div>

            <div className="rounded-lg border p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-yellow-600" />
                  <span className="font-medium">Draft</span>
                </div>
                <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
                  Draft
                </Badge>
              </div>
              <p className="mt-2 font-medium">Summer Wedding Saree Trends for 2025</p>
              <p className="mt-1 text-sm text-gray-500">By Priya Sharma • Trends</p>
            </div>

            <div className="rounded-lg border p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-yellow-600" />
                  <span className="font-medium">Draft</span>
                </div>
                <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
                  Draft
                </Badge>
              </div>
              <p className="mt-2 font-medium">Sustainable Sarees: Eco-Friendly Fabrics and Dyes</p>
              <p className="mt-1 text-sm text-gray-500">By Rajesh Kumar • Sustainability</p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            <Calendar className="mr-2 h-4 w-4" />
            View Full Calendar
          </Button>
        </CardFooter>
      </Card>

      {/* Add New Blog Post Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-hidden flex flex-col">
          <DialogHeader>
            <DialogTitle>Create New Blog Post</DialogTitle>
            <DialogDescription>Create a new blog post for your store. Fill in the details below.</DialogDescription>
          </DialogHeader>

          <ScrollArea className="flex-1 pr-4">
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <Label htmlFor="title">Post Title</Label>
                  <Input id="title" placeholder="Enter post title" />
                </div>
                <div>
                  <Label htmlFor="slug">Slug</Label>
                  <Input id="slug" placeholder="post-slug" />
                  <p className="text-xs text-gray-500 mt-1">
                    The "slug" is the URL-friendly version of the title. It is usually all lowercase and contains only
                    letters, numbers, and hyphens.
                  </p>
                </div>
                <div>
                  <Label htmlFor="excerpt">Excerpt</Label>
                  <Textarea id="excerpt" placeholder="Enter a short description of your post" />
                </div>
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="style-guide">Style Guide</SelectItem>
                      <SelectItem value="tutorial">Tutorial</SelectItem>
                      <SelectItem value="history">History</SelectItem>
                      <SelectItem value="trends">Trends</SelectItem>
                      <SelectItem value="care-guide">Care Guide</SelectItem>
                      <SelectItem value="celebrity-style">Celebrity Style</SelectItem>
                      <SelectItem value="sustainability">Sustainability</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="author">Author</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select author" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="priya-sharma">Priya Sharma</SelectItem>
                      <SelectItem value="anita-desai">Anita Desai</SelectItem>
                      <SelectItem value="rajesh-kumar">Rajesh Kumar</SelectItem>
                      <SelectItem value="meera-reddy">Meera Reddy</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="status">Status</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="published">Published</SelectItem>
                      <SelectItem value="scheduled">Scheduled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="publishDate">Publish Date</Label>
                  <Input id="publishDate" type="date" />
                </div>
                <div>
                  <Label htmlFor="featured">Featured Image</Label>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="h-20 w-20 rounded-md border flex items-center justify-center">
                      <Upload className="h-8 w-8 text-gray-400" />
                    </div>
                    <Button variant="outline" size="sm">
                      <Upload className="mr-2 h-4 w-4" />
                      Upload Image
                    </Button>
                  </div>
                </div>
                <div>
                  <Label htmlFor="content">Content</Label>
                  <div className="border rounded-md p-4 min-h-[300px] mt-2">
                    <div className="flex items-center gap-2 border-b pb-2 mb-4">
                      <Button variant="ghost" size="sm">
                        Bold
                      </Button>
                      <Button variant="ghost" size="sm">
                        Italic
                      </Button>
                      <Button variant="ghost" size="sm">
                        Link
                      </Button>
                      <Button variant="ghost" size="sm">
                        Image
                      </Button>
                      <Button variant="ghost" size="sm">
                        List
                      </Button>
                      <Button variant="ghost" size="sm">
                        Quote
                      </Button>
                      <Button variant="ghost" size="sm">
                        Code
                      </Button>
                    </div>
                    <Textarea
                      id="content"
                      placeholder="Write your blog post content here..."
                      className="min-h-[250px] border-none focus-visible:ring-0 p-0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </ScrollArea>

          <DialogFooter className="border-t pt-4 mt-4">
            <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
              Save as Draft
            </Button>
            <Button className="bg-rose-600 hover:bg-rose-700" onClick={() => setIsAddDialogOpen(false)}>
              Publish Post
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Blog Post Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-hidden flex flex-col">
          <DialogHeader>
            <DialogTitle>Edit Blog Post</DialogTitle>
            <DialogDescription>Make changes to the blog post. Click save when you're done.</DialogDescription>
          </DialogHeader>

          <ScrollArea className="flex-1 pr-4">
            {selectedPost && (
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <Label htmlFor="edit-title">Post Title</Label>
                    <Input id="edit-title" defaultValue={selectedPost.title} />
                  </div>
                  <div>
                    <Label htmlFor="edit-slug">Slug</Label>
                    <Input id="edit-slug" defaultValue={selectedPost.slug} />
                    <p className="text-xs text-gray-500 mt-1">
                      The "slug" is the URL-friendly version of the title. It is usually all lowercase and contains only
                      letters, numbers, and hyphens.
                    </p>
                  </div>
                  <div>
                    <Label htmlFor="edit-excerpt">Excerpt</Label>
                    <Textarea id="edit-excerpt" defaultValue={selectedPost.excerpt} />
                  </div>
                  <div>
                    <Label htmlFor="edit-category">Category</Label>
                    <Select defaultValue={selectedPost.category.toLowerCase().replace(/\s+/g, "-")}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="style-guide">Style Guide</SelectItem>
                        <SelectItem value="tutorial">Tutorial</SelectItem>
                        <SelectItem value="history">History</SelectItem>
                        <SelectItem value="trends">Trends</SelectItem>
                        <SelectItem value="care-guide">Care Guide</SelectItem>
                        <SelectItem value="celebrity-style">Celebrity Style</SelectItem>
                        <SelectItem value="sustainability">Sustainability</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="edit-author">Author</Label>
                    <Select defaultValue={selectedPost.author.toLowerCase().replace(/\s+/g, "-")}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select author" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="priya-sharma">Priya Sharma</SelectItem>
                        <SelectItem value="anita-desai">Anita Desai</SelectItem>
                        <SelectItem value="rajesh-kumar">Rajesh Kumar</SelectItem>
                        <SelectItem value="meera-reddy">Meera Reddy</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="edit-status">Status</Label>
                    <Select defaultValue={selectedPost.status}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="draft">Draft</SelectItem>
                        <SelectItem value="published">Published</SelectItem>
                        <SelectItem value="scheduled">Scheduled</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="edit-publishDate">Publish Date</Label>
                    <Input id="edit-publishDate" type="date" defaultValue={selectedPost.publishDate} />
                  </div>
                  <div>
                    <Label htmlFor="edit-featured">Featured Image</Label>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="h-20 w-20 rounded-md border overflow-hidden">
                        <img
                          src={selectedPost.image || "/placeholder.svg"}
                          alt={selectedPost.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <Button variant="outline" size="sm">
                        <Upload className="mr-2 h-4 w-4" />
                        Change Image
                      </Button>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="edit-content">Content</Label>
                    <div className="border rounded-md p-4 min-h-[300px] mt-2">
                      <div className="flex items-center gap-2 border-b pb-2 mb-4">
                        <Button variant="ghost" size="sm">
                          Bold
                        </Button>
                        <Button variant="ghost" size="sm">
                          Italic
                        </Button>
                        <Button variant="ghost" size="sm">
                          Link
                        </Button>
                        <Button variant="ghost" size="sm">
                          Image
                        </Button>
                        <Button variant="ghost" size="sm">
                          List
                        </Button>
                        <Button variant="ghost" size="sm">
                          Quote
                        </Button>
                        <Button variant="ghost" size="sm">
                          Code
                        </Button>
                      </div>
                      <Textarea
                        id="edit-content"
                        placeholder="Write your blog post content here..."
                        className="min-h-[250px] border-none focus-visible:ring-0 p-0"
                        defaultValue="This is the content of the blog post. It would be loaded from the database in a real application."
                      />
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
            <DialogTitle>Delete Blog Post</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this blog post? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">{selectedPost && <p className="font-medium">{selectedPost.title}</p>}</div>
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
