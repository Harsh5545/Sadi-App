"use client"

import { useState } from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

interface ProductSortProps {
  onSortChange?: (value: string) => void
}

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-low-high", label: "Price: Low to High" },
  { value: "price-high-low", label: "Price: High to Low" },
  { value: "newest", label: "Newest First" },
  { value: "rating", label: "Customer Rating" },
  { value: "popularity", label: "Popularity" },
]

export default function ProductSort({ onSortChange }: ProductSortProps) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("featured")

  const handleValueChange = (newValue: string) => {
    setValue(newValue)
    setOpen(false)
    if (onSortChange) {
      onSortChange(newValue)
    }
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-[180px] justify-between">
          {sortOptions.find((option) => option.value === value)?.label || "Sort By"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[180px] p-0">
        <Command>
          <CommandInput placeholder="Search sort options..." />
          <CommandEmpty>No sort option found.</CommandEmpty>
          <CommandGroup>
            <CommandList>
              {sortOptions.map((option) => (
                <CommandItem key={option.value} value={option.value} onSelect={handleValueChange}>
                  <Check className={cn("mr-2 h-4 w-4", value === option.value ? "opacity-100" : "opacity-0")} />
                  {option.label}
                </CommandItem>
              ))}
            </CommandList>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
