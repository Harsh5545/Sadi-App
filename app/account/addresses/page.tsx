"use client"

import { useState } from "react"
import Link from "next/link"
import { CreditCard, Edit, MapPin, Plus, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MobileNav from "@/components/mobile-nav"

// Mock address data - replace with actual data fetching
const addresses = [
  {
    id: 1,
    name: "Harshad Patel",
    line1: "123 Main Street",
    line2: "Apartment 4B",
    city: "Mumbai",
    state: "Maharashtra",
    postalCode: "400001",
    country: "India",
    phone: "+91 98765 43210",
    isDefault: true,
    type: "home",
  },
  {
    id: 2,
    name: "Harshad Patel",
    line1: "456 Office Park",
    line2: "Building C, Floor 3",
    city: "Mumbai",
    state: "Maharashtra",
    postalCode: "400051",
    country: "India",
    phone: "+91 98765 43210",
    isDefault: false,
    type: "work",
  },
]

export default function AccountAddressesPage() {
  const [userAddresses, setUserAddresses] = useState(addresses)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [currentAddress, setCurrentAddress] = useState<any>(null)

  const handleSetDefault = (id: number) => {
    setUserAddresses(
      userAddresses.map((address) => ({
        ...address,
        isDefault: address.id === id,
      })),
    )
  }

  const handleDeleteAddress = (id: number) => {
    setUserAddresses(userAddresses.filter((address) => address.id !== id))
  }

  const handleEditAddress = (address: any) => {
    setCurrentAddress(address)
    setIsEditDialogOpen(true)
  }

  const handleAddAddress = () => {
    // This would be replaced with actual API call
    const newAddress = {
      id: userAddresses.length + 1,
      name: "New Address",
      line1: "789 New Street",
      line2: "",
      city: "Delhi",
      state: "Delhi",
      postalCode: "110001",
      country: "India",
      phone: "+91 98765 43210",
      isDefault: false,
      type: "home",
    }
    setUserAddresses([...userAddresses, newAddress])
    setIsAddDialogOpen(false)
  }

  const handleUpdateAddress = () => {
    // This would be replaced with actual API call
    setUserAddresses(userAddresses.map((address) => (address.id === currentAddress.id ? currentAddress : address)))
    setIsEditDialogOpen(false)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container py-8">
          {/* Breadcrumb */}
          <Breadcrumb className="mb-6">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/account">My Account</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/account/addresses" isCurrentPage>
                Addresses
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <div className="grid gap-8 md:grid-cols-[240px_1fr]">
            {/* Sidebar Navigation */}
            <div className="hidden md:block">
              <nav className="grid gap-2">
                <Link
                  href="/account"
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-rose-600 dark:text-gray-400"
                >
                  Profile
                </Link>
                <Link
                  href="/account/orders"
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-rose-600 dark:text-gray-400"
                >
                  Orders
                </Link>
                <Link
                  href="/account/addresses"
                  className="flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-rose-600 dark:bg-gray-800 dark:text-white"
                >
                  <CreditCard className="h-4 w-4" />
                  Addresses
                </Link>
                <Link
                  href="/account/wishlist"
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-rose-600 dark:text-gray-400"
                >
                  Wishlist
                </Link>
                <Link
                  href="/account/settings"
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-rose-600 dark:text-gray-400"
                >
                  Settings
                </Link>
              </nav>
            </div>

            {/* Main Content */}
            <div>
              <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <h1 className="text-3xl font-bold">My Addresses</h1>
                <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-rose-600 hover:bg-rose-700">
                      <Plus className="mr-2 h-4 w-4" />
                      Add New Address
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[550px]">
                    <DialogHeader>
                      <DialogTitle>Add New Address</DialogTitle>
                      <DialogDescription>
                        Enter your address details below. Click save when you're done.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input id="name" placeholder="Enter your full name" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" placeholder="Enter your phone number" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="line1">Address Line 1</Label>
                        <Input id="line1" placeholder="Street address, P.O. box" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="line2">Address Line 2 (Optional)</Label>
                        <Input id="line2" placeholder="Apartment, suite, unit, building, floor, etc." />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="city">City</Label>
                          <Input id="city" placeholder="Enter city" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="state">State</Label>
                          <Select>
                            <SelectTrigger id="state">
                              <SelectValue placeholder="Select state" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="maharashtra">Maharashtra</SelectItem>
                              <SelectItem value="delhi">Delhi</SelectItem>
                              <SelectItem value="karnataka">Karnataka</SelectItem>
                              <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                              <SelectItem value="gujarat">Gujarat</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="postalCode">Postal Code</Label>
                          <Input id="postalCode" placeholder="Enter postal code" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="country">Country</Label>
                          <Select defaultValue="india">
                            <SelectTrigger id="country">
                              <SelectValue placeholder="Select country" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="india">India</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Address Type</Label>
                        <RadioGroup defaultValue="home" className="flex gap-4">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="home" id="home" />
                            <Label htmlFor="home">Home</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="work" id="work" />
                            <Label htmlFor="work">Work</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="other" id="other" />
                            <Label htmlFor="other">Other</Label>
                          </div>
                        </RadioGroup>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="default-address" className="rounded border-gray-300" />
                        <Label htmlFor="default-address">Set as default address</Label>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                        Cancel
                      </Button>
                      <Button onClick={handleAddAddress} className="bg-rose-600 hover:bg-rose-700">
                        Save Address
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>

              {userAddresses.length === 0 ? (
                <div className="rounded-lg border bg-white p-8 text-center dark:bg-gray-950">
                  <MapPin className="mx-auto h-12 w-12 text-gray-400" />
                  <h2 className="mt-4 text-xl font-semibold">No addresses found</h2>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">You haven't added any addresses yet.</p>
                  <Button onClick={() => setIsAddDialogOpen(true)} className="mt-6 bg-rose-600 hover:bg-rose-700">
                    <Plus className="mr-2 h-4 w-4" />
                    Add New Address
                  </Button>
                </div>
              ) : (
                <div className="grid gap-6 md:grid-cols-2">
                  {userAddresses.map((address) => (
                    <div
                      key={address.id}
                      className={`relative rounded-lg border p-6 ${
                        address.isDefault
                          ? "border-rose-600 bg-rose-50 dark:bg-rose-950/20"
                          : "bg-white dark:bg-gray-950"
                      }`}
                    >
                      {address.isDefault && (
                        <span className="absolute right-4 top-4 rounded-full bg-rose-100 px-2 py-1 text-xs font-medium text-rose-800 dark:bg-rose-900/30 dark:text-rose-300">
                          Default
                        </span>
                      )}
                      <div className="mb-4 flex items-center">
                        <span
                          className={`mr-2 flex h-8 w-8 items-center justify-center rounded-full ${
                            address.type === "home"
                              ? "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300"
                              : "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-300"
                          }`}
                        >
                          <MapPin className="h-4 w-4" />
                        </span>
                        <h3 className="text-lg font-medium capitalize">{address.type} Address</h3>
                      </div>
                      <div className="space-y-1 text-gray-700 dark:text-gray-300">
                        <p className="font-medium">{address.name}</p>
                        <p>{address.line1}</p>
                        {address.line2 && <p>{address.line2}</p>}
                        <p>
                          {address.city}, {address.state} {address.postalCode}
                        </p>
                        <p>{address.country}</p>
                        <p className="pt-2">{address.phone}</p>
                      </div>
                      <div className="mt-6 flex flex-wrap gap-2">
                        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm" onClick={() => handleEditAddress(address)}>
                              <Edit className="mr-2 h-4 w-4" />
                              Edit
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[550px]">
                            <DialogHeader>
                              <DialogTitle>Edit Address</DialogTitle>
                              <DialogDescription>
                                Update your address details below. Click save when you're done.
                              </DialogDescription>
                            </DialogHeader>
                            {currentAddress && (
                              <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-2 gap-4">
                                  <div className="space-y-2">
                                    <Label htmlFor="edit-name">Full Name</Label>
                                    <Input
                                      id="edit-name"
                                      value={currentAddress.name}
                                      onChange={(e) => setCurrentAddress({ ...currentAddress, name: e.target.value })}
                                    />
                                  </div>
                                  <div className="space-y-2">
                                    <Label htmlFor="edit-phone">Phone Number</Label>
                                    <Input
                                      id="edit-phone"
                                      value={currentAddress.phone}
                                      onChange={(e) => setCurrentAddress({ ...currentAddress, phone: e.target.value })}
                                    />
                                  </div>
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="edit-line1">Address Line 1</Label>
                                  <Input
                                    id="edit-line1"
                                    value={currentAddress.line1}
                                    onChange={(e) => setCurrentAddress({ ...currentAddress, line1: e.target.value })}
                                  />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="edit-line2">Address Line 2 (Optional)</Label>
                                  <Input
                                    id="edit-line2"
                                    value={currentAddress.line2}
                                    onChange={(e) => setCurrentAddress({ ...currentAddress, line2: e.target.value })}
                                  />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                  <div className="space-y-2">
                                    <Label htmlFor="edit-city">City</Label>
                                    <Input
                                      id="edit-city"
                                      value={currentAddress.city}
                                      onChange={(e) => setCurrentAddress({ ...currentAddress, city: e.target.value })}
                                    />
                                  </div>
                                  <div className="space-y-2">
                                    <Label htmlFor="edit-state">State</Label>
                                    <Select
                                      value={currentAddress.state}
                                      onValueChange={(value) => setCurrentAddress({ ...currentAddress, state: value })}
                                    >
                                      <SelectTrigger id="edit-state">
                                        <SelectValue placeholder="Select state" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="Maharashtra">Maharashtra</SelectItem>
                                        <SelectItem value="Delhi">Delhi</SelectItem>
                                        <SelectItem value="Karnataka">Karnataka</SelectItem>
                                        <SelectItem value="Tamil Nadu">Tamil Nadu</SelectItem>
                                        <SelectItem value="Gujarat">Gujarat</SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                  <div className="space-y-2">
                                    <Label htmlFor="edit-postalCode">Postal Code</Label>
                                    <Input
                                      id="edit-postalCode"
                                      value={currentAddress.postalCode}
                                      onChange={(e) =>
                                        setCurrentAddress({ ...currentAddress, postalCode: e.target.value })
                                      }
                                    />
                                  </div>
                                  <div className="space-y-2">
                                    <Label htmlFor="edit-country">Country</Label>
                                    <Select
                                      value={currentAddress.country}
                                      onValueChange={(value) =>
                                        setCurrentAddress({ ...currentAddress, country: value })
                                      }
                                    >
                                      <SelectTrigger id="edit-country">
                                        <SelectValue placeholder="Select country" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="India">India</SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </div>
                                </div>
                                <div className="space-y-2">
                                  <Label>Address Type</Label>
                                  <RadioGroup
                                    value={currentAddress.type}
                                    onValueChange={(value) => setCurrentAddress({ ...currentAddress, type: value })}
                                    className="flex gap-4"
                                  >
                                    <div className="flex items-center space-x-2">
                                      <RadioGroupItem value="home" id="edit-home" />
                                      <Label htmlFor="edit-home">Home</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <RadioGroupItem value="work" id="edit-work" />
                                      <Label htmlFor="edit-work">Work</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <RadioGroupItem value="other" id="edit-other" />
                                      <Label htmlFor="edit-other">Other</Label>
                                    </div>
                                  </RadioGroup>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <input
                                    type="checkbox"
                                    id="edit-default-address"
                                    className="rounded border-gray-300"
                                    checked={currentAddress.isDefault}
                                    onChange={(e) =>
                                      setCurrentAddress({ ...currentAddress, isDefault: e.target.checked })
                                    }
                                  />
                                  <Label htmlFor="edit-default-address">Set as default address</Label>
                                </div>
                              </div>
                            )}
                            <DialogFooter>
                              <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                                Cancel
                              </Button>
                              <Button onClick={handleUpdateAddress} className="bg-rose-600 hover:bg-rose-700">
                                Save Changes
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                        <Button variant="outline" size="sm" onClick={() => handleDeleteAddress(address.id)}>
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
                        </Button>
                        {!address.isDefault && (
                          <Button variant="outline" size="sm" onClick={() => handleSetDefault(address.id)}>
                            Set as Default
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <MobileNav />
    </div>
  )
}
