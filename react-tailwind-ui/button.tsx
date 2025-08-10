"use client"

import type * as React from "react"
import { Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

type LibVariant = "primary" | "secondary" | "outline" | "ghost" | "link" | "destructive"
type LibSize = "sm" | "md" | "lg" | "icon"

const baseBtn =
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"

const variantStyles: Record<LibVariant, string> = {
  primary: "bg-emerald-600 text-white hover:bg-emerald-700",
  secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700",
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

export type AnchorButtonProps = {
  href: string
  variant?: LibVariant
  size?: LibSize
  loading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  className?: string
  children?: React.ReactNode
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children" | "href">

export type NativeButtonProps = {
  href?: undefined
  variant?: LibVariant
  size?: LibSize
  loading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  className?: string
  children?: React.ReactNode
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">

export type RtwButtonProps = AnchorButtonProps | NativeButtonProps

export function RtwButton(props: RtwButtonProps) {
  const {
    variant = "primary",
    size = "md",
    loading = false,
    className,
    leftIcon,
    rightIcon,
    children,
    href,
    ...rest
  } = props as any

  const classes = cn(baseBtn, variantStyles[variant], sizeStyles[size], "gap-2", className)

  if (href) {
    const { disabled, ...anchorProps } = rest as React.AnchorHTMLAttributes<HTMLAnchorElement> & {
      disabled?: boolean
    }

    return (
      <a
        href={disabled || loading ? undefined : href}
        aria-disabled={disabled || loading ? true : undefined}
        className={cn(classes, (disabled || loading) && "pointer-events-none")}
        {...anchorProps}
      >
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            <span className="sr-only">{"Cargando"}</span>
          </>
        ) : (
          <>
            {leftIcon ? <span className="-ml-0.5">{leftIcon}</span> : null}
            {size !== "icon" ? <span>{children}</span> : children}
            {rightIcon ? <span className="-mr-0.5">{rightIcon}</span> : null}
          </>
        )}
      </a>
    )
  }

  const { disabled, type, ...buttonProps } = rest as React.ButtonHTMLAttributes<HTMLButtonElement>
  return (
    <button className={classes} disabled={disabled || loading} type={type ?? "button"} {...buttonProps}>
      {loading ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
          <span className="sr-only">{"Cargando"}</span>
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
