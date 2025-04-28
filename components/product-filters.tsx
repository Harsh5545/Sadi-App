"use client"

import { useState } from "react"
import { Check, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Slider } from "@/components/ui/slider"

export default function ProductFilters() {
  const [priceRange, setPriceRange] = useState([1000, 20000])
  const [openCategories, setOpenCategories] = useState(true)
  const [openPrice, setOpenPrice] = useState(true)
  const [openColors, setOpenColors] = useState(true)
  const [openFabrics, setOpenFabrics] = useState(true)
  const [openOccasions, setOpenOccasions] = useState(true)

  return (
    <div className="space-y-6">
      {/* Categories */}
      <Collapsible open={openCategories} onOpenChange={setOpenCategories}>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" className="flex w-full items-center justify-between p-0 font-medium">
            Categories
            <ChevronDown className={`h-4 w-4 transition-transform ${openCategories ? "rotate-180" : ""}`} />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-4 space-y-4">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox id={`category-${category.id}`} />
              <label
                htmlFor={`category-${category.id}`}
                className="flex-1 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {category.name}
              </label>
              <span className="text-xs text-gray-500">({category.count})</span>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>

      {/* Price Range */}
      <Collapsible open={openPrice} onOpenChange={setOpenPrice}>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" className="flex w-full items-center justify-between p-0 font-medium">
            Price Range
            <ChevronDown className={`h-4 w-4 transition-transform ${openPrice ? "rotate-180" : ""}`} />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-4 space-y-4">
          <Slider
            defaultValue={[1000, 20000]}
            min={1000}
            max={20000}
            step={500}
            value={priceRange}
            onValueChange={setPriceRange}
          />
          <div className="flex items-center justify-between">
            <div className="rounded-md border px-2 py-1 text-xs">₹{priceRange[0].toLocaleString()}</div>
            <div className="rounded-md border px-2 py-1 text-xs">₹{priceRange[1].toLocaleString()}</div>
          </div>
        </CollapsibleContent>
      </Collapsible>

      {/* Colors */}
      <Collapsible open={openColors} onOpenChange={setOpenColors}>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" className="flex w-full items-center justify-between p-0 font-medium">
            Colors
            <ChevronDown className={`h-4 w-4 transition-transform ${openColors ? "rotate-180" : ""}`} />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-4">
          <div className="flex flex-wrap gap-2">
            {colors.map((color) => (
              <button
                key={color.name}
                className="relative h-8 w-8 rounded-full border"
                style={{ backgroundColor: color.hex }}
                title={color.name}
              >
                {color.selected && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <Check className="h-4 w-4 text-white drop-shadow-md" />
                  </span>
                )}
                <span className="sr-only">{color.name}</span>
              </button>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>

      {/* Fabrics */}
      <Collapsible open={openFabrics} onOpenChange={setOpenFabrics}>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" className="flex w-full items-center justify-between p-0 font-medium">
            Fabrics
            <ChevronDown className={`h-4 w-4 transition-transform ${openFabrics ? "rotate-180" : ""}`} />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-4 space-y-4">
          {fabrics.map((fabric) => (
            <div key={fabric.id} className="flex items-center space-x-2">
              <Checkbox id={`fabric-${fabric.id}`} />
              <label
                htmlFor={`fabric-${fabric.id}`}
                className="flex-1 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {fabric.name}
              </label>
              <span className="text-xs text-gray-500">({fabric.count})</span>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>

      {/* Occasions */}
      <Collapsible open={openOccasions} onOpenChange={setOpenOccasions}>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" className="flex w-full items-center justify-between p-0 font-medium">
            Occasions
            <ChevronDown className={`h-4 w-4 transition-transform ${openOccasions ? "rotate-180" : ""}`} />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-4 space-y-4">
          {occasions.map((occasion) => (
            <div key={occasion.id} className="flex items-center space-x-2">
              <Checkbox id={`occasion-${occasion.id}`} />
              <label
                htmlFor={`occasion-${occasion.id}`}
                className="flex-1 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {occasion.name}
              </label>
              <span className="text-xs text-gray-500">({occasion.count})</span>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}

const categories = [
  { id: 1, name: "Silk Sarees", count: 120 },
  { id: 2, name: "Cotton Sarees", count: 85 },
  { id: 3, name: "Designer Sarees", count: 64 },
  { id: 4, name: "Wedding Collection", count: 42 },
  { id: 5, name: "Casual Wear", count: 78 },
  { id: 6, name: "Festive Collection", count: 56 },
]

const colors = [
  { name: "Red", hex: "#e11d48", selected: true },
  { name: "Blue", hex: "#2563eb", selected: false },
  { name: "Green", hex: "#16a34a", selected: false },
  { name: "Yellow", hex: "#eab308", selected: false },
  { name: "Purple", hex: "#9333ea", selected: false },
  { name: "Pink", hex: "#ec4899", selected: false },
  { name: "Orange", hex: "#f97316", selected: false },
  { name: "Black", hex: "#171717", selected: false },
  { name: "Gold", hex: "#d4af37", selected: false },
]

const fabrics = [
  { id: 1, name: "Silk", count: 145 },
  { id: 2, name: "Cotton", count: 98 },
  { id: 3, name: "Georgette", count: 56 },
  { id: 4, name: "Chiffon", count: 42 },
  { id: 5, name: "Linen", count: 38 },
  { id: 6, name: "Crepe", count: 24 },
]

const occasions = [
  { id: 1, name: "Wedding", count: 86 },
  { id: 2, name: "Festival", count: 124 },
  { id: 3, name: "Casual", count: 98 },
  { id: 4, name: "Party", count: 64 },
  { id: 5, name: "Office Wear", count: 42 },
]
