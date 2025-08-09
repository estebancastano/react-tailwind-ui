"use client"

import * as React from "react"
import { cn } from "./utils/cn"

type BadgeTone = "primary" | "secondary" | "outline" | "destructive" | "success" | "warning" | "info" | "muted"

export interface RtwBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone
}

const toneClasses: Record<BadgeTone, string> = {
  primary: "border-transparent bg-emerald-100 text-emerald-900 dark:bg-emerald-900/30 dark:text-emerald-300",
  secondary: "border-transparent bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100",
  outline: "border-gray-300 text-gray-900 dark:border-gray-700 dark:text-gray-100",
  destructive: "border-transparent bg-red-100 text-red-900 dark:bg-red-900/30 dark:text-red-300",
  success: "border-transparent bg-emerald-100 text-emerald-900 dark:bg-emerald-900/30 dark:text-emerald-300",
  warning: "border-transparent bg-amber-100 text-amber-900 dark:bg-amber-900/30 dark:text-amber-200",
  info: "border-transparent bg-teal-100 text-teal-900 dark:bg-teal-900/30 dark:text-teal-200",
  muted: "border-transparent bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
}

export function RtwBadge({ tone = "primary", className, children, ...props }: RtwBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
        toneClasses[tone],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
