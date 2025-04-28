"use client"
import { ArrowDown, ArrowUp } from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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
  {
    id: 5,
    name: "Pochampally Ikat Saree",
    category: "Ikat Sarees",
    sales: 58,
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
  {
    id: 5,
    name: "Bhagalpuri Silk Saree - Purple",
    category: "Silk Sarees",
    stock: 4,
  },
]

export function InventoryTable() {
  return (
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
  )
}
