import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold">About Alberow</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Alberow is a premium sadi e-commerce platform offering the finest collection of traditional Indian ethnic
              wear.
            </p>
            <div className="mt-4 flex space-x-4">
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Youtube className="h-4 w-4" />
                <span className="sr-only">YouTube</span>
              </Button>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-rose-600 dark:text-gray-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-rose-600 dark:text-gray-400">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-rose-600 dark:text-gray-400">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-rose-600 dark:text-gray-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-600 hover:text-rose-600 dark:text-gray-400">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-600 hover:text-rose-600 dark:text-gray-400">
                  Return & Refund Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-rose-600 dark:text-gray-400">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/track-order" className="text-gray-600 hover:text-rose-600 dark:text-gray-400">
                  Track Your Order
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="text-gray-600 hover:text-rose-600 dark:text-gray-400">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="/care-instructions" className="text-gray-600 hover:text-rose-600 dark:text-gray-400">
                  Care Instructions
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-rose-600 dark:text-gray-400">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Newsletter</h3>
            <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
              Subscribe to our newsletter for the latest updates and exclusive offers.
            </p>
            <div className="flex space-x-2">
              <Input type="email" placeholder="Your email" className="max-w-[220px]" />
              <Button>Subscribe</Button>
            </div>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              <strong>Contact Info:</strong>
              <br />
              Email: info@alberow.com
              <br />
              Phone: +91 98765 43210
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-600 dark:border-gray-800 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Alberow. All rights reserved.</p>
          <p className="mt-2">
            Designed and developed by{" "}
            <a href="#" className="font-medium text-rose-600 hover:underline">
              Alberow
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
