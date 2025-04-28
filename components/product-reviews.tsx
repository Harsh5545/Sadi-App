"use client"

import { useState } from "react"
import { Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"

interface ProductReviewsProps {
  productId: number
  rating: number
  reviewCount: number
}

export default function ProductReviews({ productId, rating, reviewCount }: ProductReviewsProps) {
  const [showReviewForm, setShowReviewForm] = useState(false)

  // In a real app, you would fetch reviews from an API
  const reviews = [
    {
      id: 1,
      user: {
        name: "Priya Sharma",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      rating: 5,
      date: "2023-05-15",
      title: "Absolutely stunning!",
      comment:
        "The quality of this saree exceeded my expectations. The colors are vibrant and the fabric is luxurious. I received so many compliments when I wore it to a wedding. Highly recommend!",
      helpful: 12,
      verified: true,
    },
    {
      id: 2,
      user: {
        name: "Anita Patel",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      rating: 4,
      date: "2023-04-22",
      title: "Beautiful craftsmanship",
      comment:
        "The saree is beautiful and the craftsmanship is excellent. The only reason I'm giving 4 stars instead of 5 is because the color was slightly different from what was shown in the pictures. Still very happy with my purchase though.",
      helpful: 8,
      verified: true,
    },
    {
      id: 3,
      user: {
        name: "Rajesh Kumar",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      rating: 5,
      date: "2023-03-10",
      title: "Perfect gift",
      comment:
        "I bought this for my wife's birthday and she absolutely loved it! The packaging was elegant and the saree itself is of excellent quality. Will definitely shop here again.",
      helpful: 5,
      verified: true,
    },
  ]

  // Calculate rating distribution
  const ratingDistribution = [
    { stars: 5, count: 18, percentage: 75 },
    { stars: 4, count: 4, percentage: 17 },
    { stars: 3, count: 1, percentage: 4 },
    { stars: 2, count: 1, percentage: 4 },
    { stars: 1, count: 0, percentage: 0 },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Customer Reviews</h3>
        <Button onClick={() => setShowReviewForm(!showReviewForm)}>
          {showReviewForm ? "Cancel" : "Write a Review"}
        </Button>
      </div>

      {showReviewForm && (
        <div className="rounded-lg border p-4">
          <h4 className="mb-4 text-lg font-medium">Write Your Review</h4>
          <div className="mb-4">
            <p className="mb-2 text-sm font-medium">Rating</p>
            <div className="flex items-center">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <button key={i} className="p-1">
                    <Star className="h-6 w-6 text-gray-300 hover:fill-amber-400 hover:text-amber-400" />
                  </button>
                ))}
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="review-title" className="mb-2 block text-sm font-medium">
              Title
            </label>
            <input
              id="review-title"
              className="w-full rounded-md border border-gray-300 p-2 dark:border-gray-700 dark:bg-gray-800"
              placeholder="Give your review a title"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="review-comment" className="mb-2 block text-sm font-medium">
              Review
            </label>
            <Textarea id="review-comment" placeholder="Write your review here..." className="min-h-[100px]" />
          </div>
          <Button className="bg-rose-600 hover:bg-rose-700">Submit Review</Button>
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-[300px_1fr]">
        <div className="space-y-4 rounded-lg border p-4">
          <div className="text-center">
            <div className="text-5xl font-bold">{rating}</div>
            <div className="flex items-center justify-center">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(rating) ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"
                    }`}
                  />
                ))}
            </div>
            <div className="mt-1 text-sm text-gray-500">Based on {reviewCount} reviews</div>
          </div>

          <div className="space-y-2">
            {ratingDistribution.map((item) => (
              <div key={item.stars} className="flex items-center">
                <div className="w-12 text-sm">{item.stars} stars</div>
                <div className="mx-2 flex-1">
                  <Progress value={item.percentage} className="h-2" />
                </div>
                <div className="w-8 text-right text-sm text-gray-500">{item.count}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="rounded-lg border p-4">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <Avatar>
                    <AvatarImage src={review.user.avatar || "/placeholder.svg"} alt={review.user.name} />
                    <AvatarFallback>{review.user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center">
                      <p className="font-medium">{review.user.name}</p>
                      {review.verified && (
                        <span className="ml-2 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                          Verified Purchase
                        </span>
                      )}
                    </div>
                    <div className="flex items-center">
                      <div className="flex">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"
                              }`}
                            />
                          ))}
                      </div>
                      <span className="ml-2 text-xs text-gray-500">
                        {new Date(review.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <h4 className="mt-3 font-medium">{review.title}</h4>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{review.comment}</p>
              <div className="mt-4 flex items-center">
                <Button variant="ghost" size="sm" className="h-8 text-xs">
                  Helpful ({review.helpful})
                </Button>
                <Button variant="ghost" size="sm" className="h-8 text-xs">
                  Report
                </Button>
              </div>
            </div>
          ))}
          <Button variant="outline" className="w-full">
            Load More Reviews
          </Button>
        </div>
      </div>
    </div>
  )
}
