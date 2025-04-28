import { Star, CheckCircle } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface TestimonialCardProps {
  testimonial: {
    name: string
    avatar: string
    rating: number
    comment: string
    date?: string
    location?: string
    verified?: boolean
  }
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <div className="flex items-center">
              <h3 className="font-medium">{testimonial.name}</h3>
              {testimonial.verified && (
                <div className="ml-2 flex items-center text-green-600" title="Verified Purchase">
                  <CheckCircle className="h-4 w-4" />
                </div>
              )}
            </div>
            <div className="flex">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < testimonial.rating ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"
                    }`}
                  />
                ))}
            </div>
            {(testimonial.date || testimonial.location) && (
              <div className="mt-1 text-xs text-gray-500">
                {testimonial.date && <span>{testimonial.date}</span>}
                {testimonial.date && testimonial.location && <span> • </span>}
                {testimonial.location && <span>{testimonial.location}</span>}
              </div>
            )}
          </div>
        </div>
        <p className="mt-4 text-gray-600 dark:text-gray-300">{testimonial.comment}</p>
      </CardContent>
    </Card>
  )
}
