"use client"

import * as React from "react"
import { Loader2 } from 'lucide-react'
import { cn } from "./utils/cn"

type LibVariant = "primary" | "secondary" | "outline" | "ghost" | "link" | "destructive"
type LibSize = "sm" | "md" | "lg" | "icon"

const baseBtn =
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"

const variantStyles: Record<LibVariant, string> = {
  primary: "bg-emerald-600 text-white hover:bg-emerald-700",
  secondary:
    "bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700",
  outline:
    "border border-gray-300 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-800",
  ghost: "text-gray-900 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-800",
  link: "text-emerald-700 underline-offset-4 hover:underline dark:text-emerald-400",
  destructive: "bg-red-600 text-white hover:bg-red-700",
}

const sizeStyles: Record<LibSize, string> = {
  sm: "h-8 px-3",
  md: "h-9 px-4",
  lg: "h-10 px-6",
  icon: "h-9 w-9",
}

export interface RtwButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: LibVariant
  size?: LibSize
  loading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export function RtwButton({
  className,
  children,
  variant = "primary",
  size = "md",
  loading = false,
  leftIcon,
  rightIcon,
  disabled,
  ...props
}: RtwButtonProps) {
  return (
    <button
      className={cn(baseBtn, variantStyles[variant], sizeStyles[size], "gap-2", className)}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
          <span className="sr-only">Cargando</span>
        </>
      ) : (
        <>
          {leftIcon ? <span className="-ml-0.5">{leftIcon}</span> : null}
          {size !== "icon" ? <span>{children}</span> : children}
          {rightIcon ? <span className="-mr-0.5">{rightIcon}</span> : null}
        </>
      )}
    </button>
  )
}

RtwButton.displayName = "RtwButton"
