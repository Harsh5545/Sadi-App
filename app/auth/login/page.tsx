"use client"

import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff, Facebook, Github } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MobileNav from "@/components/mobile-nav"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto flex flex-col items-center justify-center px-4 py-12 md:py-16">
          <div className="w-full max-w-md space-y-6">
            <div className="text-center">
              <h1 className="text-3xl font-bold">Welcome back</h1>
              <p className="mt-2 text-gray-600 dark:text-gray-400">Sign in to your account</p>
            </div>
            <div className="space-y-4 rounded-lg border bg-white p-6 shadow-sm dark:bg-gray-950">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link href="/auth/forgot-password" className="text-xs text-rose-600 hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Input id="password" type={showPassword ? "text" : "password"} placeholder="Enter your password" />
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
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-sm font-normal">
                  Remember me
                </Label>
              </div>
              <Button className="w-full bg-rose-600 hover:bg-rose-700">Sign in</Button>
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300 dark:border-gray-700" />
                </div>
                <div className="relative px-4 text-xs uppercase text-gray-500 dark:text-gray-400">
                  <span className="bg-white px-2 dark:bg-gray-950">Or continue with</span>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <Button variant="outline" className="w-full">
                  <Facebook className="mr-2 h-4 w-4" />
                  Facebook
                </Button>
                <Button variant="outline" className="w-full">
                  <Github className="mr-2 h-4 w-4" />
                  Google
                </Button>
              </div>
            </div>
            <div className="text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/auth/register" className="font-medium text-rose-600 hover:underline">
                Sign up
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
