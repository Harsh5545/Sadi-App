"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, Box, Home, LayoutDashboard, LogOut, Package, Settings, ShoppingCart, Users } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

interface AdminLayoutProps {
  children: React.ReactNode
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const pathname = usePathname()

  const routes = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/admin",
      active: pathname === "/admin",
    },
    {
      label: "Products",
      icon: Package,
      href: "/admin/products",
      active: pathname === "/admin/products",
    },
    {
      label: "Orders",
      icon: ShoppingCart,
      href: "/admin/orders",
      active: pathname === "/admin/orders",
    },
    {
      label: "Customers",
      icon: Users,
      href: "/admin/customers",
      active: pathname === "/admin/customers",
    },

    {
      label: "Categories",
      icon: Box,
      href: "/admin/categories",
      active: pathname === "/admin/categories",
    },
     {
      label: "Blog",
      icon: BarChart3,
      href: "/admin/blog",
      active: pathname === "/admin/blog",
    },
     {
      label: "Notifications",
      icon: BarChart3,
      href: "/admin/notifications",
      active: pathname === "/admin/notifications",
    },
    {
      label: "Marketing",
      icon: BarChart3,
      href: "/admin/marketing",
      active: pathname === "/admin/marketing",
    },
     {
      label: "Reviews",
      icon: BarChart3,
      href: "/admin/reviews",
      active: pathname === "/admin/reviews",
    },
    {
      label: "Shipments",
      icon: BarChart3,
      href: "/admin/shipments",
      active: pathname === "/admin/shipments",
    },
     {
      label: "Analytics",
      icon: BarChart3,
      href: "/admin/analytics",
      active: pathname === "/admin/analytics",
    },
    {
      label: "Settings",
      icon: Settings,
      href: "/admin/settings",
      active: pathname === "/admin/settings",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-gray-100 dark:bg-gray-900">
      <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-white px-4 dark:bg-gray-950 sm:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="shrink-0 md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72">
            <nav className="grid gap-2 text-lg font-medium">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800",
                    route.active ? "bg-gray-100 text-rose-600 dark:bg-gray-800" : "text-gray-500 dark:text-gray-400",
                  )}
                >
                  <route.icon className="h-5 w-5" />
                  {route.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:gap-2 lg:gap-4">
          <Link href="/admin" className="flex items-center gap-2 font-semibold">
            <Home className="h-6 w-6" />
            <span className="hidden md:inline-block">Alberow Admin</span>
          </Link>
          <div className="relative ml-auto flex-1 md:grow-0">
            <Input type="search" placeholder="Search..." className="w-full md:w-[200px] lg:w-[300px]" />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <img src="/placeholder.svg?height=32&width=32" alt="Admin" className="h-8 w-8 rounded-full" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <div className="flex flex-1">
        <aside
          className={cn(
            "hidden w-72 flex-col border-r bg-white dark:bg-gray-950 md:flex",
            isSidebarOpen ? "md:w-72" : "md:w-16",
          )}
        >
          <nav className="grid gap-2 p-4 text-sm font-medium">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800",
                  route.active ? "bg-gray-100 text-rose-600 dark:bg-gray-800" : "text-gray-500 dark:text-gray-400",
                )}
              >
                <route.icon className="h-5 w-5" />
                {isSidebarOpen && <span>{route.label}</span>}
              </Link>
            ))}
          </nav>
          <div className="mt-auto p-4">
            <Button variant="outline" size="icon" className="ml-auto" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
              {isSidebarOpen ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              <span className="sr-only">Toggle sidebar</span>
            </Button>
          </div>
        </aside>
        <main className="flex-1 overflow-auto p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}

function Menu(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

function ChevronLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}

function ChevronRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}
