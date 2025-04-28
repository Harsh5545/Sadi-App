"use client"

import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MobileNav from "@/components/mobile-nav"

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto flex flex-col items-center justify-center px-4 py-12 md:py-16">
          <div className="w-full max-w-md space-y-6">
            <div className="text-center">
              <h1 className="text-3xl font-bold">Create an account</h1>
              <p className="mt-2 text-gray-600 dark:text-gray-400">Sign up to get started</p>
            </div>
            <div className="space-y-4 rounded-lg border bg-white p-6 shadow-sm dark:bg-gray-950">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input id="first-name" placeholder="Enter your first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input id="last-name" placeholder="Enter your last name" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone number</Label>
                <Input id="phone" type="tel" placeholder="Enter your phone number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input id="password" type={showPassword ? "text" : "password"} placeholder="Create a password" />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-500" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-500" />
                    )}
                    <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                  </Button>
                </div>
                <p className="text-xs text-gray-500">
                  Password must be at least 8 characters long with 1 uppercase, 1 lowercase, and 1 number
                </p>
              </div>
              <div className="flex items-start space-x-2">
                <Checkbox id="terms" className="mt-1" />
                <Label htmlFor="terms" className="text-sm font-normal">
                  I agree to the{" "}
                  <Link href="/terms" className="text-rose-600 hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-rose-600 hover:underline">
                    Privacy Policy
                  </Link>
                </Label>
              </div>
              <Button className="w-full bg-rose-600 hover:bg-rose-700">Create account</Button>
            </div>
            <div className="text-center text-sm">
              Already have an account?{" "}
              <Link href="/auth/login" className="font-medium text-rose-600 hover:underline">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <MobileNav />
    </div>
  )
}
