"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft, ImagePlus, Loader2, Save, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"

export default function AddProductPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [images, setImages] = useState<string[]>([
    "/placeholder.svg?height=300&width=300",
    "/placeholder.svg?height=300&width=300",
  ])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Product Added",
      description: "The product has been added successfully.",
    })

    setIsSubmitting(false)
  }

  const handleAddImage = () => {
    setImages([...images, "/placeholder.svg?height=300&width=300"])
  }

  const handleRemoveImage = (index: number) => {
    const newImages = [...images]
    newImages.splice(index, 1)
    setImages(newImages)
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" asChild>
            <a href="/admin/products">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </a>
          </Button>
          <h2 className="text-3xl font-bold tracking-tight">Add New Product</h2>
        </div>
        <Button onClick={handleSubmit} disabled={isSubmitting} className="bg-rose-600 hover:bg-rose-700">
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Saving...
            </>
          ) : (
            <>
              <Save className="mr-2 h-4 w-4" />
              Save Product
            </>
          )}
        </Button>
      </div>

      <Tabs defaultValue="basic" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="basic">Basic Information</TabsTrigger>
          <TabsTrigger value="images">Images</TabsTrigger>
          <TabsTrigger value="pricing">Pricing & Inventory</TabsTrigger>
          <TabsTrigger value="seo">SEO & Visibility</TabsTrigger>
        </TabsList>

        <TabsContent value="basic" className="mt-6">
          <Card>
            <CardContent className="pt-6">
              <form className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Product Name</Label>
                    <Input id="name" placeholder="Enter product name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sku">SKU</Label>
                    <Input id="sku" placeholder="Enter SKU" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" placeholder="Enter product description" rows={5} />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select>
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="silk-sarees">Silk Sarees</SelectItem>
                        <SelectItem value="cotton-sarees">Cotton Sarees</SelectItem>
                        <SelectItem value="designer-sarees">Designer Sarees</SelectItem>
                        <SelectItem value="wedding-collection">Wedding Collection</SelectItem>
                        <SelectItem value="casual-wear">Casual Wear</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tags">Tags</Label>
                    <Input id="tags" placeholder="Enter tags separated by commas" />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <div className="space-y-2">
                    <Label htmlFor="fabric">Fabric</Label>
                    <Input id="fabric" placeholder="e.g., Silk, Cotton" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="color">Color</Label>
                    <Input id="color" placeholder="e.g., Red, Blue" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="weight">Weight (in grams)</Label>
                    <Input id="weight" type="number" placeholder="Enter weight" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="features">Key Features</Label>
                  <Textarea id="features" placeholder="Enter key features" rows={3} />
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="images" className="mt-6">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium">Product Images</h3>
                  <p className="text-sm text-gray-500">
                    Upload high-quality images of your product. First image will be used as the featured image.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                  {images.map((image, index) => (
                    <div key={index} className="relative aspect-square rounded-md border bg-gray-50">
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`Product image ${index + 1}`}
                        className="h-full w-full rounded-md object-cover"
                      />
                      <Button
                        variant="destructive"
                        size="icon"
                        className="absolute right-2 top-2"
                        onClick={() => handleRemoveImage(index)}
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Remove image</span>
                      </Button>
                      {index === 0 && (
                        <div className="absolute left-2 top-2 rounded-md bg-black/70 px-2 py-1 text-xs text-white">
                          Featured
                        </div>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={handleAddImage}
                    className="flex aspect-square items-center justify-center rounded-md border border-dashed bg-gray-50 hover:bg-gray-100"
                  >
                    <div className="flex flex-col items-center gap-1 text-gray-500">
                      <ImagePlus className="h-8 w-8" />
                      <span className="text-xs">Add Image</span>
                    </div>
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pricing" className="mt-6">
          <Card>
            <CardContent className="pt-6">
              <form className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="price">Regular Price (₹)</Label>
                    <Input id="price" type="number" placeholder="Enter regular price" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sale-price">Sale Price (₹)</Label>
                    <Input id="sale-price" type="number" placeholder="Enter sale price" />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="cost">Cost Price (₹)</Label>
                    <Input id="cost" type="number" placeholder="Enter cost price" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tax">Tax Rate (%)</Label>
                    <Input id="tax" type="number" placeholder="Enter tax rate" />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <div className="space-y-2">
                    <Label htmlFor="stock">Stock Quantity</Label>
                    <Input id="stock" type="number" placeholder="Enter stock quantity" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="low-stock">Low Stock Threshold</Label>
                    <Input id="low-stock" type="number" placeholder="Enter low stock threshold" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sku">SKU</Label>
                    <Input id="sku" placeholder="Enter SKU" />
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch id="manage-stock" />
                  <Label htmlFor="manage-stock">Track inventory for this product</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch id="backorders" />
                  <Label htmlFor="backorders">Allow backorders when out of stock</Label>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="seo" className="mt-6">
          <Card>
            <CardContent className="pt-6">
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="meta-title">Meta Title</Label>
                  <Input id="meta-title" placeholder="Enter meta title" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="meta-description">Meta Description</Label>
                  <Textarea id="meta-description" placeholder="Enter meta description" rows={3} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="meta-keywords">Meta Keywords</Label>
                  <Input id="meta-keywords" placeholder="Enter meta keywords separated by commas" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="slug">URL Slug</Label>
                  <Input id="slug" placeholder="Enter URL slug" />
                </div>

                <div className="flex items-center space-x-2">
                  <Switch id="visibility" />
                  <Label htmlFor="visibility">Make product visible on site</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch id="featured" />
                  <Label htmlFor="featured">Mark as featured product</Label>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
