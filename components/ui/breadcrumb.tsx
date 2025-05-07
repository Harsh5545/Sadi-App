"use client"

import * as React from "react"
import { ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {}

export interface BreadcrumbItemProps extends React.HTMLAttributes<HTMLLIElement> {
  isCurrentPage?: boolean
}

export interface BreadcrumbLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  isCurrentPage?: boolean
}

export interface BreadcrumbListProps extends React.HTMLAttributes<HTMLOListElement> {}

const Breadcrumb = React.forwardRef<HTMLOListElement, BreadcrumbProps>(({ className, ...props }, ref) => {
  return (
    <nav aria-label="breadcrumb" className={cn("flex", className)}>
      <ol ref={ref} className="flex items-center space-x-2" {...props} />
    </nav>
  )
})
Breadcrumb.displayName = "Breadcrumb"

const BreadcrumbItem = React.forwardRef<HTMLLIElement, BreadcrumbItemProps>(
  ({ className, isCurrentPage, ...props }, ref) => {
    return (
      <li
        ref={ref}
        className={cn("inline-flex items-center", isCurrentPage && "text-gray-800 dark:text-gray-200", className)}
        aria-current={isCurrentPage ? "page" : undefined}
        {...props}
      />
    )
  },
)
BreadcrumbItem.displayName = "BreadcrumbItem"

const BreadcrumbLink = React.forwardRef<HTMLAnchorElement, BreadcrumbLinkProps>(
  ({ className, href, isCurrentPage, ...props }, ref) => {
    return (
      <a
        ref={ref}
        href={href}
        className={cn(
          "text-sm font-medium underline-offset-4",
          isCurrentPage
            ? "text-gray-900 dark:text-gray-50 font-semibold"
            : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50 hover:underline",
          className,
        )}
        {...props}
      />
    )
  },
)
BreadcrumbLink.displayName = "BreadcrumbLink"

const BreadcrumbSeparator = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => {
    return (
      <span ref={ref} className={cn("mx-2 text-gray-400", className)} {...props}>
        <ChevronRight className="h-4 w-4" />
      </span>
    )
  },
)
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"

const BreadcrumbList = React.forwardRef<HTMLOListElement, BreadcrumbListProps>(({ className, ...props }, ref) => {
  return <ol ref={ref} className={cn("flex items-center space-x-2", className)} {...props} />
})

BreadcrumbList.displayName = "BreadcrumbList"

export { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbList }
