"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Search, ShoppingBag, User } from "lucide-react"

import { cn } from "@/lib/utils"

export default function MobileNav() {
  const pathname = usePathname()

  const navItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Search, label: "Search", href: "/search" },
    { icon: ShoppingBag, label: "Cart", href: "/cart" },
    { icon: User, label: "Account", href: "/account" },
  ]

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full border-t bg-white dark:bg-gray-950 lg:hidden">
      <div className="mx-auto flex h-16 max-w-md items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex h-full w-full flex-col items-center justify-center space-y-1",
                pathname === item.href
                  ? "text-rose-600"
                  : "text-gray-600 hover:text-rose-600 dark:text-gray-400 dark:hover:text-rose-500",
              )}
            >
              <Icon className="h-6 w-6" />
              <span className="text-xs">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
