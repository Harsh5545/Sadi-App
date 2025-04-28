"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, Search, ShoppingCart, User } from "lucide-react"

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
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Categories", href: "/categories" },
  { name: "New Arrivals", href: "/new-arrivals" },
  { name: "Sale", href: "/sale" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm dark:bg-gray-950">
      <div className="mx-auto px-12  flex h-16 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="mr-2 lg:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <nav className="mt-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <SheetClose asChild key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-rose-600",
                      pathname === link.href ? "text-rose-600" : "text-gray-600 dark:text-gray-300",
                    )}
                  >
                    {link.name}
                  </Link>
                </SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image src="/placeholder.svg?height=32&width=32" alt="Alberow Logo" width={32} height={32} />
          <span className="hidden text-xl font-bold sm:inline-block">Alberow</span>
        </Link>

        <nav className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center lg:space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-rose-600",
                pathname === link.href ? "text-rose-600" : "text-gray-600 dark:text-gray-300",
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end space-x-4">
          {isSearchOpen ? (
            <div className="relative flex w-full max-w-sm items-center lg:w-auto">
              <Input
                type="search"
                placeholder="Search products..."
                className="pr-8"
                autoFocus
                onBlur={() => setIsSearchOpen(false)}
              />
              <Search className="absolute right-2 h-4 w-4 text-gray-500" />
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}

          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-rose-600 text-xs font-medium text-white">
                3
              </span>
            </Button>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
                <span className="sr-only">User menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/account/profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/account/orders">Orders</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/account/wishlist">Wishlist</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/account/addresses">Addresses</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/auth/login">Login</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/auth/register">Register</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
