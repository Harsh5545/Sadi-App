"use client"

import Link from "next/link"
import { CreditCard, LogOut, Package, Settings, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MobileNav from "@/components/mobile-nav"

export default function AccountPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container py-8">
          <h1 className="mb-8 text-3xl font-bold">My Account</h1>

          <div className="grid gap-8 md:grid-cols-[240px_1fr]">
            <div className="hidden md:block">
              <nav className="grid gap-2">
                <Link
                  href="/account"
                  className="flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-rose-600 dark:bg-gray-800 dark:text-white"
                >
                  <User className="h-4 w-4" />
                  Profile
                </Link>
                <Link
                  href="/account/orders"
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-rose-600 dark:text-gray-400"
                >
                  <Package className="h-4 w-4" />
                  Orders
                </Link>
                <Link
                  href="/account/addresses"
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-rose-600 dark:text-gray-400"
                >
                  <CreditCard className="h-4 w-4" />
                  Addresses
                </Link>
                <Link
                  href="/account/settings"
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-rose-600 dark:text-gray-400"
                >
                  <Settings className="h-4 w-4" />
                  Settings
                </Link>
                <Button
                  variant="ghost"
                  className="flex items-center justify-start gap-2 px-3 py-2 text-gray-500 transition-all hover:text-rose-600 dark:text-gray-400"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </Button>
              </nav>
            </div>
            <div>
              <Tabs defaultValue="profile" className="md:hidden">
                <TabsList className="w-full justify-start overflow-auto">
                  <TabsTrigger value="profile">Profile</TabsTrigger>
                  <TabsTrigger value="orders">Orders</TabsTrigger>
                  <TabsTrigger value="addresses">Addresses</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>
                <TabsContent value="profile">
                  <ProfileContent />
                </TabsContent>
                <TabsContent value="orders">
                  <div className="text-center py-12">
                    <h2 className="text-xl font-semibold mb-2">Your Orders</h2>
                    <p className="text-gray-500 dark:text-gray-400">View your order history here</p>
                    <Button asChild className="mt-4">
                      <Link href="/account/orders">View Orders</Link>
                    </Button>
                  </div>
                </TabsContent>
                <TabsContent value="addresses">
                  <div className="text-center py-12">
                    <h2 className="text-xl font-semibold mb-2">Your Addresses</h2>
                    <p className="text-gray-500 dark:text-gray-400">Manage your shipping addresses</p>
                    <Button asChild className="mt-4">
                      <Link href="/account/addresses">Manage Addresses</Link>
                    </Button>
                  </div>
                </TabsContent>
                <TabsContent value="settings">
                  <div className="text-center py-12">
                    <h2 className="text-xl font-semibold mb-2">Account Settings</h2>
                    <p className="text-gray-500 dark:text-gray-400">Update your account preferences</p>
                    <Button asChild className="mt-4">
                      <Link href="/account/settings">Manage Settings</Link>
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="hidden md:block">
                <ProfileContent />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <MobileNav />
    </div>
  )
}

function ProfileContent() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>Update your personal details here.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                First name
              </label>
              <input
                type="text"
                id="first-name"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-rose-500 focus:outline-none focus:ring-rose-500 dark:border-gray-700 dark:bg-gray-800"
                defaultValue="Harshad"
              />
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Last name
              </label>
              <input
                type="text"
                id="last-name"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-rose-500 focus:outline-none focus:ring-rose-500 dark:border-gray-700 dark:bg-gray-800"
                defaultValue="Patel"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-rose-500 focus:outline-none focus:ring-rose-500 dark:border-gray-700 dark:bg-gray-800"
              defaultValue="harshad@alberow.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-rose-500 focus:outline-none focus:ring-rose-500 dark:border-gray-700 dark:bg-gray-800"
              defaultValue="+91 98765 43210"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="bg-rose-600 hover:bg-rose-700">Save Changes</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Password</CardTitle>
          <CardDescription>Update your password here.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label htmlFor="current-password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Current password
            </label>
            <input
              type="password"
              id="current-password"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-rose-500 focus:outline-none focus:ring-rose-500 dark:border-gray-700 dark:bg-gray-800"
            />
          </div>
          <div>
            <label htmlFor="new-password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              New password
            </label>
            <input
              type="password"
              id="new-password"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-rose-500 focus:outline-none focus:ring-rose-500 dark:border-gray-700 dark:bg-gray-800"
            />
          </div>
          <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Confirm password
            </label>
            <input
              type="password"
              id="confirm-password"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-rose-500 focus:outline-none focus:ring-rose-500 dark:border-gray-700 dark:bg-gray-800"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="bg-rose-600 hover:bg-rose-700">Update Password</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
