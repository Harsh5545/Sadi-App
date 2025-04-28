import { Calendar, DollarSign, Package, ShoppingBag, TrendingUp, Users } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RevenueChart } from "@/components/admin/revenue-chart"
import { SalesChart } from "@/components/admin/sales-chart"
import { OrdersTable } from "@/components/admin/orders-table"
import { InventoryTable } from "@/components/admin/inventory-table"

export default function AdminDashboard() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Welcome back, Admin! Here&apos;s an overview of your store.
          </p>
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
          <Button>
            <Calendar className="mr-2 h-4 w-4" />
            Download Report
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹45,231.89</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              <span className="text-green-500 dark:text-green-400">+20.1%</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Orders</CardTitle>
            <ShoppingBag className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              <span className="text-green-500 dark:text-green-400">+12.2%</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Products</CardTitle>
            <Package className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,324</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              <span className="text-green-500 dark:text-green-400">+8.4%</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Customers</CardTitle>
            <Users className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+2,350</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              <span className="text-green-500 dark:text-green-400">+18.1%</span> from last month
            </p>
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
          <CardContent className="pl-2">
            <RevenueChart />
          </CardContent>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Sales Analytics</CardTitle>
            <CardDescription>Daily sales for the last 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <SalesChart />
          </CardContent>
        </Card>
      </div>

      {/* Orders and Inventory */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Orders</CardTitle>
              <CardDescription>You have 265 orders this month.</CardDescription>
            </div>
            <Button variant="outline" size="sm">
              <TrendingUp className="mr-2 h-4 w-4" />
              View Analytics
            </Button>
          </CardHeader>
          <CardContent>
            <OrdersTable />
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
              <Link href="/admin/orders">View all orders</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Inventory Status</CardTitle>
            <CardDescription>Top selling and low stock products.</CardDescription>
          </CardHeader>
          <CardContent>
            <InventoryTable />
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
              <Link href="/admin/products">Manage inventory</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Marketing and Customer Insights */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Marketing Performance</CardTitle>
            <CardDescription>Campaign performance and conversion rates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="rounded-lg border bg-card p-3 text-center">
                  <p className="text-xs font-medium text-muted-foreground">Email</p>
                  <p className="text-xl font-bold">24.8%</p>
                  <p className="text-xs text-green-500">+2.3%</p>
                </div>
                <div className="rounded-lg border bg-card p-3 text-center">
                  <p className="text-xs font-medium text-muted-foreground">Social</p>
                  <p className="text-xl font-bold">12.5%</p>
                  <p className="text-xs text-red-500">-0.5%</p>
                </div>
                <div className="rounded-lg border bg-card p-3 text-center">
                  <p className="text-xs font-medium text-muted-foreground">Organic</p>
                  <p className="text-xl font-bold">42.3%</p>
                  <p className="text-xs text-green-500">+4.1%</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm">Email Campaign - Diwali Sale</p>
                  <p className="text-sm font-medium">₹12,450</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm">Instagram Ads - Wedding Collection</p>
                  <p className="text-sm font-medium">₹8,320</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm">Google Search - Brand Keywords</p>
                  <p className="text-sm font-medium">₹6,210</p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
              <Link href="/admin/marketing">View marketing dashboard</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Customer Insights</CardTitle>
            <CardDescription>Demographics and purchasing behavior</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium">Age Distribution</p>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="text-xs">18-24</p>
                      <p className="text-xs">15%</p>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100 dark:bg-gray-800">
                      <div className="h-2 w-[15%] rounded-full bg-rose-600"></div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="text-xs">25-34</p>
                      <p className="text-xs">42%</p>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100 dark:bg-gray-800">
                      <div className="h-2 w-[42%] rounded-full bg-rose-600"></div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="text-xs">35-44</p>
                      <p className="text-xs">28%</p>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100 dark:bg-gray-800">
                      <div className="h-2 w-[28%] rounded-full bg-rose-600"></div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="text-xs">45+</p>
                      <p className="text-xs">15%</p>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100 dark:bg-gray-800">
                      <div className="h-2 w-[15%] rounded-full bg-rose-600"></div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Top Locations</p>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="text-xs">Mumbai</p>
                      <p className="text-xs">24%</p>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100 dark:bg-gray-800">
                      <div className="h-2 w-[24%] rounded-full bg-rose-600"></div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="text-xs">Delhi</p>
                      <p className="text-xs">22%</p>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100 dark:bg-gray-800">
                      <div className="h-2 w-[22%] rounded-full bg-rose-600"></div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="text-xs">Bangalore</p>
                      <p className="text-xs">18%</p>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100 dark:bg-gray-800">
                      <div className="h-2 w-[18%] rounded-full bg-rose-600"></div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="text-xs">Other</p>
                      <p className="text-xs">36%</p>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100 dark:bg-gray-800">
                      <div className="h-2 w-[36%] rounded-full bg-rose-600"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
              <Link href="/admin/customers">View customer analytics</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
