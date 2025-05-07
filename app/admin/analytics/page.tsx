import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Calendar, Download, Users, ShoppingBag, DollarSign, TrendingUp, ArrowUpRight } from "lucide-react"

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
          <p className="text-gray-500 dark:text-gray-400">Detailed insights and performance metrics for your store.</p>
        </div>
        <div className="flex items-center gap-2">
          <Tabs defaultValue="today" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="today">Today</TabsTrigger>
              <TabsTrigger value="week">This Week</TabsTrigger>
              <TabsTrigger value="month">This Month</TabsTrigger>
              <TabsTrigger value="year">This Year</TabsTrigger>
            </TabsList>
          </Tabs>
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Date Range
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹1,45,231.89</div>
            <div className="flex items-center text-xs text-green-500 dark:text-green-400">
              <ArrowUpRight className="mr-1 h-3 w-3" />
              <span>+20.1%</span>
              <span className="ml-1 text-gray-500 dark:text-gray-400">from last month</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Orders</CardTitle>
            <ShoppingBag className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+573</div>
            <div className="flex items-center text-xs text-green-500 dark:text-green-400">
              <ArrowUpRight className="mr-1 h-3 w-3" />
              <span>+12.2%</span>
              <span className="ml-1 text-gray-500 dark:text-gray-400">from last month</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Customers</CardTitle>
            <Users className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+2,350</div>
            <div className="flex items-center text-xs text-green-500 dark:text-green-400">
              <ArrowUpRight className="mr-1 h-3 w-3" />
              <span>+18.1%</span>
              <span className="ml-1 text-gray-500 dark:text-gray-400">from last month</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.24%</div>
            <div className="flex items-center text-xs text-green-500 dark:text-green-400">
              <ArrowUpRight className="mr-1 h-3 w-3" />
              <span>+5.2%</span>
              <span className="ml-1 text-gray-500 dark:text-gray-400">from last month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
            <CardDescription>Monthly revenue for the current year</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <img
              src="/placeholder.svg?height=300&width=600"
              alt="Revenue Chart"
              className="h-full w-full object-cover rounded-md"
            />
          </CardContent>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Sales Analytics</CardTitle>
            <CardDescription>Daily sales for the last 30 days</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <img
              src="/placeholder.svg?height=300&width=400"
              alt="Sales Chart"
              className="h-full w-full object-cover rounded-md"
            />
          </CardContent>
        </Card>
      </div>

      {/* Customer Analytics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Customer Demographics</CardTitle>
            <CardDescription>Age and gender distribution</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <img
              src="/placeholder.svg?height=300&width=300"
              alt="Demographics Chart"
              className="h-full w-full object-cover rounded-md"
            />
          </CardContent>
        </Card>
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Top Locations</CardTitle>
            <CardDescription>Where your customers are from</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <img
              src="/placeholder.svg?height=300&width=300"
              alt="Locations Chart"
              className="h-full w-full object-cover rounded-md"
            />
          </CardContent>
        </Card>
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Acquisition Channels</CardTitle>
            <CardDescription>How customers find your store</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <img
              src="/placeholder.svg?height=300&width=300"
              alt="Acquisition Chart"
              className="h-full w-full object-cover rounded-md"
            />
          </CardContent>
        </Card>
      </div>

      {/* Product Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Product Performance</CardTitle>
          <CardDescription>Top selling and trending products</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-medium mb-4">Top Selling Products</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-md bg-gray-100 overflow-hidden">
                      <img
                        src="/placeholder.svg?height=40&width=40"
                        alt="Product"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Banarasi Silk Saree</p>
                      <p className="text-sm text-gray-500">124 units sold</p>
                    </div>
                  </div>
                  <p className="font-medium">₹12,40,000</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-md bg-gray-100 overflow-hidden">
                      <img
                        src="/placeholder.svg?height=40&width=40"
                        alt="Product"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Kanjivaram Silk Saree</p>
                      <p className="text-sm text-gray-500">98 units sold</p>
                    </div>
                  </div>
                  <p className="font-medium">₹9,80,000</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-md bg-gray-100 overflow-hidden">
                      <img
                        src="/placeholder.svg?height=40&width=40"
                        alt="Product"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Chanderi Cotton Saree</p>
                      <p className="text-sm text-gray-500">87 units sold</p>
                    </div>
                  </div>
                  <p className="font-medium">₹4,35,000</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-md bg-gray-100 overflow-hidden">
                      <img
                        src="/placeholder.svg?height=40&width=40"
                        alt="Product"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Mysore Silk Saree</p>
                      <p className="text-sm text-gray-500">76 units sold</p>
                    </div>
                  </div>
                  <p className="font-medium">₹6,84,000</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Trending Products</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-md bg-gray-100 overflow-hidden">
                      <img
                        src="/placeholder.svg?height=40&width=40"
                        alt="Product"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Designer Wedding Saree</p>
                      <p className="text-sm text-gray-500">+245% views</p>
                    </div>
                  </div>
                  <div className="text-green-500">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-md bg-gray-100 overflow-hidden">
                      <img
                        src="/placeholder.svg?height=40&width=40"
                        alt="Product"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Patola Silk Saree</p>
                      <p className="text-sm text-gray-500">+178% views</p>
                    </div>
                  </div>
                  <div className="text-green-500">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-md bg-gray-100 overflow-hidden">
                      <img
                        src="/placeholder.svg?height=40&width=40"
                        alt="Product"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Linen Saree</p>
                      <p className="text-sm text-gray-500">+156% views</p>
                    </div>
                  </div>
                  <div className="text-green-500">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-md bg-gray-100 overflow-hidden">
                      <img
                        src="/placeholder.svg?height=40&width=40"
                        alt="Product"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Organza Saree</p>
                      <p className="text-sm text-gray-500">+132% views</p>
                    </div>
                  </div>
                  <div className="text-green-500">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
