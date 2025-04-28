import Link from "next/link"
import { ArrowDown, ArrowUp, BarChart3, DollarSign, Package, ShoppingCart, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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
          <Button>Download Report</Button>
        </div>
      </div>
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
            <ShoppingCart className="h-4 w-4 text-gray-500 dark:text-gray-400" />
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
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Sales Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="h-[300px] w-full">
              <BarChart3 className="h-full w-full text-gray-300" />
            </div>
          </CardContent>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
            <CardDescription>You made 265 sales this month.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {recentSales.map((sale) => (
                <div key={sale.id} className="flex items-center">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">{sale.customer}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{sale.email}</p>
                  </div>
                  <div className="ml-auto font-medium">+₹{sale.amount.toLocaleString()}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>You have {recentOrders.length} orders this month.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">#{order.id}</TableCell>
                    <TableCell>{order.customer}</TableCell>
                    <TableCell>
                      <div
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          order.status === "Delivered"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                            : order.status === "Processing"
                              ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                              : "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300"
                        }`}
                      >
                        {order.status}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">₹{order.amount.toLocaleString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
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
            <Tabs defaultValue="top-selling">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="top-selling">Top Selling</TabsTrigger>
                <TabsTrigger value="low-stock">Low Stock</TabsTrigger>
              </TabsList>
              <TabsContent value="top-selling" className="space-y-4 pt-4">
                {topSellingProducts.map((product) => (
                  <div key={product.id} className="flex items-center">
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">{product.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{product.category}</p>
                    </div>
                    <div className="ml-auto font-medium text-green-600 dark:text-green-400">
                      <ArrowUp className="mr-1 inline-block h-4 w-4" />
                      {product.sales}
                    </div>
                  </div>
                ))}
              </TabsContent>
              <TabsContent value="low-stock" className="space-y-4 pt-4">
                {lowStockProducts.map((product) => (
                  <div key={product.id} className="flex items-center">
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">{product.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{product.category}</p>
                    </div>
                    <div className="ml-auto font-medium text-red-600 dark:text-red-400">
                      <ArrowDown className="mr-1 inline-block h-4 w-4" />
                      {product.stock}
                    </div>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
              <Link href="/admin/products">Manage inventory</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

const recentSales = [
  {
    id: 1,
    customer: "Olivia Martin",
    email: "olivia.martin@email.com",
    amount: 1999,
  },
  {
    id: 2,
    customer: "Jackson Lee",
    email: "jackson.lee@email.com",
    amount: 3999,
  },
  {
    id: 3,
    customer: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    amount: 2499,
  },
  {
    id: 4,
    customer: "William Kim",
    email: "will.kim@email.com",
    amount: 9999,
  },
  {
    id: 5,
    customer: "Sofia Davis",
    email: "sofia.davis@email.com",
    amount: 5999,
  },
]

const recentOrders = [
  {
    id: "ORD-001",
    customer: "Olivia Martin",
    status: "Delivered",
    amount: 1999,
  },
  {
    id: "ORD-002",
    customer: "Jackson Lee",
    status: "Processing",
    amount: 3999,
  },
  {
    id: "ORD-003",
    customer: "Isabella Nguyen",
    status: "Processing",
    amount: 2499,
  },
  {
    id: "ORD-004",
    customer: "William Kim",
    status: "Shipped",
    amount: 9999,
  },
  {
    id: "ORD-005",
    customer: "Sofia Davis",
    status: "Delivered",
    amount: 5999,
  },
]

const topSellingProducts = [
  {
    id: 1,
    name: "Banarasi Silk Saree",
    category: "Silk Sarees",
    sales: 124,
  },
  {
    id: 2,
    name: "Kanjivaram Silk Saree",
    category: "Silk Sarees",
    sales: 98,
  },
  {
    id: 3,
    name: "Chanderi Cotton Saree",
    category: "Cotton Sarees",
    sales: 87,
  },
  {
    id: 4,
    name: "Mysore Silk Saree",
    category: "Silk Sarees",
    sales: 65,
  },
]

const lowStockProducts = [
  {
    id: 1,
    name: "Banarasi Silk Saree - Red",
    category: "Silk Sarees",
    stock: 3,
  },
  {
    id: 2,
    name: "Kanjivaram Silk Saree - Blue",
    category: "Silk Sarees",
    stock: 5,
  },
  {
    id: 3,
    name: "Chanderi Cotton Saree - Green",
    category: "Cotton Sarees",
    stock: 7,
  },
  {
    id: 4,
    name: "Mysore Silk Saree - Gold",
    category: "Silk Sarees",
    stock: 8,
  },
]
