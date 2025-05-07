import type { Metadata } from "next"
import Image from "next/image"
import {
  BarChart3,
  TrendingUp,
  Users,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Calendar,
  PlusCircle,
  FileText,
  MessageSquare,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

export const metadata: Metadata = {
  title: "Marketing Dashboard | Admin",
  description: "Marketing dashboard for Pavitra Sarees admin panel",
}

export default function MarketingPage() {
  return (
    <div className="flex flex-col space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Marketing Dashboard</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline">Export</Button>
          <Button>Create Campaign</Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
          <TabsTrigger value="social">Social Media</TabsTrigger>
          <TabsTrigger value="email">Email Marketing</TabsTrigger>
          <TabsTrigger value="trends">2025 Trends</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Reach</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">45,231</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4.6%</div>
                <p className="text-xs text-muted-foreground">+0.8% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3.2%</div>
                <p className="text-xs text-muted-foreground">+0.5% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">ROI</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">320%</div>
                <p className="text-xs text-muted-foreground">+14% from last month</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Marketing Performance</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <Image
                  src="/placeholder.svg?height=350&width=600"
                  alt="Marketing Performance Chart"
                  width={600}
                  height={350}
                  className="rounded-md"
                />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Channel Performance</CardTitle>
                <CardDescription>Conversion rates by marketing channel</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <Instagram className="mr-2 h-4 w-4 text-pink-500" />
                        <span>Instagram</span>
                      </div>
                      <span className="font-medium">4.2%</span>
                    </div>
                    <Progress value={42} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <Facebook className="mr-2 h-4 w-4 text-blue-600" />
                        <span>Facebook</span>
                      </div>
                      <span className="font-medium">3.8%</span>
                    </div>
                    <Progress value={38} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <Mail className="mr-2 h-4 w-4 text-yellow-500" />
                        <span>Email</span>
                      </div>
                      <span className="font-medium">5.7%</span>
                    </div>
                    <Progress value={57} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="mr-2 h-4 w-4 text-green-500"
                        >
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                        </svg>
                        <span>Google Ads</span>
                      </div>
                      <span className="font-medium">2.5%</span>
                    </div>
                    <Progress value={25} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <MessageSquare className="mr-2 h-4 w-4 text-green-600" />
                        <span>WhatsApp</span>
                      </div>
                      <span className="font-medium">6.1%</span>
                    </div>
                    <Progress value={61} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="trends" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Marketing Trends for 2025</CardTitle>
              <CardDescription>Stay ahead of the competition with these emerging marketing trends</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-lg font-medium">1. AI-Powered Personalization</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  In 2025, AI will enable hyper-personalized shopping experiences. Implement AI-driven product
                  recommendations based on individual browsing patterns, purchase history, and even contextual factors
                  like weather and local events. Consider adding a "Personal Stylist" AI feature that suggests saree
                  pairings with accessories.
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                    AI Integration
                  </span>
                  <span className="rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                    Personalization
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium">2. Immersive Shopping Experiences</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Virtual try-on and augmented reality will become mainstream in 2025. Develop an AR feature that allows
                  customers to visualize how different sarees would look on them. Consider creating virtual showroom
                  experiences where customers can "walk through" themed collections and interact with products in 3D
                  space.
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-300">
                    AR/VR
                  </span>
                  <span className="rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
                    Interactive
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium">3. Voice Commerce</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Voice-activated shopping will grow significantly by 2025. Optimize your product listings for voice
                  search with natural language descriptions. Consider developing a voice assistant specifically for your
                  store that can help customers find products, answer questions about fabrics and care instructions, and
                  even place orders.
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900/30 dark:text-red-300">
                    Voice Technology
                  </span>
                  <span className="rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-medium text-orange-800 dark:bg-orange-900/30 dark:text-orange-300">
                    Conversational Commerce
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium">4. Sustainability Marketing</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Environmental consciousness will be a major purchasing factor in 2025. Highlight sustainable practices
                  in your saree production, such as natural dyes, ethical labor practices, and eco-friendly packaging.
                  Consider creating a dedicated "Sustainable Collection" featuring sarees made from organic fabrics and
                  traditional techniques that have minimal environmental impact.
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">
                    Sustainability
                  </span>
                  <span className="rounded-full bg-teal-100 px-2.5 py-0.5 text-xs font-medium text-teal-800 dark:bg-teal-900/30 dark:text-teal-300">
                    Ethical Marketing
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium">5. Social Commerce Integration</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  By 2025, social media platforms will become fully integrated shopping channels. Invest in seamless
                  shopping experiences directly within Instagram, Facebook, and emerging platforms. Leverage
                  user-generated content by encouraging customers to share photos wearing your sarees, which can be
                  directly shoppable. Consider implementing live shopping events where influencers showcase your
                  collections in real-time.
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="rounded-full bg-pink-100 px-2.5 py-0.5 text-xs font-medium text-pink-800 dark:bg-pink-900/30 dark:text-pink-300">
                    Social Commerce
                  </span>
                  <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300">
                    Live Shopping
                  </span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Download Full 2025 Marketing Trend Report</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="campaigns" className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Active Campaigns</h2>
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              New Campaign
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">Wedding Season Sale</CardTitle>
                  <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-300">
                    Active
                  </span>
                </div>
                <CardDescription>Started on Apr 15, 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Budget spent</span>
                    <span className="font-medium">₹45,000 / ₹60,000</span>
                  </div>
                  <Progress value={75} className="h-2" />
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Conversions</span>
                    <span className="font-medium">128</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">ROI</span>
                    <span className="font-medium text-green-600">285%</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  Edit
                </Button>
                <Button variant="outline" size="sm">
                  View Report
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">Summer Collection Launch</CardTitle>
                  <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-300">
                    Active
                  </span>
                </div>
                <CardDescription>Started on Mar 20, 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Budget spent</span>
                    <span className="font-medium">₹32,000 / ₹50,000</span>
                  </div>
                  <Progress value={64} className="h-2" />
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Conversions</span>
                    <span className="font-medium">96</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">ROI</span>
                    <span className="font-medium text-green-600">210%</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  Edit
                </Button>
                <Button variant="outline" size="sm">
                  View Report
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">Festive Season Preview</CardTitle>
                  <span className="rounded-full bg-yellow-100 px-2 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
                    Scheduled
                  </span>
                </div>
                <CardDescription>Starts on May 10, 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Budget allocated</span>
                    <span className="font-medium">₹75,000</span>
                  </div>
                  <Progress value={0} className="h-2" />
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Target conversions</span>
                    <span className="font-medium">200</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Channels</span>
                    <span className="font-medium">Instagram, Facebook, Email</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  Edit
                </Button>
                <Button variant="outline" size="sm">
                  Cancel
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="mt-6">
            <h2 className="mb-4 text-xl font-bold">Campaign Calendar</h2>
            <Card>
              <CardContent className="p-0">
                <div className="p-6">
                  <Image
                    src="/placeholder.svg?height=400&width=800"
                    alt="Marketing Calendar"
                    width={800}
                    height={400}
                    className="rounded-md"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">
                  <Calendar className="mr-2 h-4 w-4" />
                  View Full Calendar
                </Button>
                <Button>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Add Event
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="social" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Instagram</CardTitle>
                <Instagram className="h-4 w-4 text-pink-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24.5K</div>
                <p className="text-xs text-muted-foreground">Followers (+1.2K this month)</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Facebook</CardTitle>
                <Facebook className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">18.2K</div>
                <p className="text-xs text-muted-foreground">Followers (+450 this month)</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Twitter</CardTitle>
                <Twitter className="h-4 w-4 text-blue-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8.7K</div>
                <p className="text-xs text-muted-foreground">Followers (+320 this month)</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">YouTube</CardTitle>
                <Youtube className="h-4 w-4 text-red-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5.4K</div>
                <p className="text-xs text-muted-foreground">Subscribers (+280 this month)</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Social Media Content Calendar</CardTitle>
              <CardDescription>Upcoming posts and content schedule</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Instagram className="h-5 w-5 text-pink-500" />
                      <span className="font-medium">Instagram Post</span>
                    </div>
                    <span className="text-sm text-gray-500">Tomorrow, 10:00 AM</span>
                  </div>
                  <p className="mt-2 text-sm">
                    "Introducing our new Summer Collection! Light, breathable sarees perfect for the season.
                    #SummerFashion #PavitraSarees"
                  </p>
                  <div className="mt-2 flex items-center space-x-2">
                    <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                      Product Launch
                    </span>
                    <span className="rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                      Summer Collection
                    </span>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Facebook className="h-5 w-5 text-blue-600" />
                      <span className="font-medium">Facebook Post</span>
                    </div>
                    <span className="text-sm text-gray-500">May 2, 2025</span>
                  </div>
                  <p className="mt-2 text-sm">
                    "The story behind our handcrafted Banarasi silk sarees. Watch this video to see the intricate
                    process and craftsmanship."
                  </p>
                  <div className="mt-2 flex items-center space-x-2">
                    <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-300">
                      Behind the Scenes
                    </span>
                    <span className="rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
                      Video Content
                    </span>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Instagram className="h-5 w-5 text-pink-500" />
                      <span className="font-medium">Instagram Reel</span>
                    </div>
                    <span className="text-sm text-gray-500">May 5, 2025</span>
                  </div>
                  <p className="mt-2 text-sm">
                    "5 ways to style your cotton saree for summer. Perfect for office, casual outings, and evening
                    events! #SareeStyles"
                  </p>
                  <div className="mt-2 flex items-center space-x-2">
                    <span className="rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900/30 dark:text-red-300">
                      Styling Tips
                    </span>
                    <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300">
                      Reel
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <PlusCircle className="mr-2 h-4 w-4" />
                Schedule New Post
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Top Performing Content</CardTitle>
              <CardDescription>Posts with highest engagement in the last 30 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-md">
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      alt="Post thumbnail"
                      width={64}
                      height={64}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <Instagram className="h-4 w-4 text-pink-500" />
                      <span className="text-sm font-medium">Wedding Collection Showcase</span>
                    </div>
                    <p className="mt-1 text-xs text-gray-500">Posted on Apr 12, 2025</p>
                    <div className="mt-2 flex items-center space-x-4 text-xs">
                      <span>5.2K likes</span>
                      <span>320 comments</span>
                      <span>128 shares</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-md">
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      alt="Post thumbnail"
                      width={64}
                      height={64}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <Facebook className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium">Customer Testimonial Video</span>
                    </div>
                    <p className="mt-1 text-xs text-gray-500">Posted on Apr 5, 2025</p>
                    <div className="mt-2 flex items-center space-x-4 text-xs">
                      <span>3.8K likes</span>
                      <span>245 comments</span>
                      <span>92 shares</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-md">
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      alt="Post thumbnail"
                      width={64}
                      height={64}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <Instagram className="h-4 w-4 text-pink-500" />
                      <span className="text-sm font-medium">Styling Tips Reel</span>
                    </div>
                    <p className="mt-1 text-xs text-gray-500">Posted on Apr 18, 2025</p>
                    <div className="mt-2 flex items-center space-x-4 text-xs">
                      <span>4.5K likes</span>
                      <span>180 comments</span>
                      <span>210 shares</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="email" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Subscribers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12,543</div>
                <p className="text-xs text-muted-foreground">+856 this month</p>
                <div className="mt-4">
                  <Progress value={85} className="h-2" />
                  <p className="mt-1 text-xs text-gray-500">85% active subscribers</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Open Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">28.4%</div>
                <p className="text-xs text-muted-foreground">+2.1% from last month</p>
                <div className="mt-4">
                  <Progress value={28.4} className="h-2" />
                  <p className="mt-1 text-xs text-gray-500">Industry avg: 21.5%</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Click Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4.8%</div>
                <p className="text-xs text-muted-foreground">+0.6% from last month</p>
                <div className="mt-4">
                  <Progress value={4.8} className="h-2" />
                  <p className="mt-1 text-xs text-gray-500">Industry avg: 2.7%</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recent Campaigns</CardTitle>
              <CardDescription>Performance of your recent email campaigns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Summer Collection Launch</h3>
                    <span className="text-sm text-gray-500">Sent on Apr 15, 2025</span>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-4 text-center text-sm">
                    <div>
                      <p className="text-gray-500">Recipients</p>
                      <p className="font-medium">12,245</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Open Rate</p>
                      <p className="font-medium">32.5%</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Click Rate</p>
                      <p className="font-medium">5.8%</p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <Button variant="outline" size="sm">
                      View Report
                    </Button>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Wedding Season Sale</h3>
                    <span className="text-sm text-gray-500">Sent on Apr 5, 2025</span>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-4 text-center text-sm">
                    <div>
                      <p className="text-gray-500">Recipients</p>
                      <p className="font-medium">11,982</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Open Rate</p>
                      <p className="font-medium">29.8%</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Click Rate</p>
                      <p className="font-medium">4.2%</p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <Button variant="outline" size="sm">
                      View Report
                    </Button>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">New Arrivals Announcement</h3>
                    <span className="text-sm text-gray-500">Sent on Mar 25, 2025</span>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-4 text-center text-sm">
                    <div>
                      <p className="text-gray-500">Recipients</p>
                      <p className="font-medium">11,540</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Open Rate</p>
                      <p className="font-medium">27.2%</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Click Rate</p>
                      <p className="font-medium">3.9%</p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <Button variant="outline" size="sm">
                      View Report
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <FileText className="mr-2 h-4 w-4" />
                Create New Campaign
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Subscriber Growth</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="/placeholder.svg?height=300&width=800"
                alt="Subscriber Growth Chart"
                width={800}
                height={300}
                className="rounded-md"
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
