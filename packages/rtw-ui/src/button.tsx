"use client"

import type * as React from "react"
import { Loader2 } from "lucide-react"
import { cn } from "./utils/cn"

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

type BaseButtonProps = {
  variant?: LibVariant
  size?: LibSize
  loading?: boolean
  disabled?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  className?: string
  children?: React.ReactNode
}

export type AnchorButtonProps = BaseButtonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children" | "href"> & {
    href: string
  }

export type NativeButtonProps = BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">

export type RtwButtonProps = AnchorButtonProps | (NativeButtonProps & { href?: undefined })

export function RtwButton(props: RtwButtonProps) {
  const variant: LibVariant = props.variant ?? "primary"
  const size: LibSize = props.size ?? "md"
  const loading = props.loading ?? false
  const classes = cn(baseBtn, variantStyles[variant], sizeStyles[size], "gap-2", props.className)

  if ("href" in props && props.href) {
    const {
      href,
      // quita props custom para no pasarlas al DOM
      variant: _v,
      size: _s,
      loading: _l,
      leftIcon,
      rightIcon,
      className: _cn,
      children,
      disabled,
      ...anchorProps
    } = props as AnchorButtonProps

    const isDisabled = !!disabled || loading
    return (
      <a
        href={isDisabled ? undefined : href}
        aria-disabled={isDisabled ? true : undefined}
        className={cn(classes, isDisabled && "pointer-events-none")}
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

  const {
    // quita props custom para no pasarlas al DOM
    variant: _v,
    size: _s,
    loading: _l,
    leftIcon,
    rightIcon,
    className: _cn,
    children,
    disabled,
    type,
    ...buttonProps
  } = props as NativeButtonProps

  const isDisabled = !!disabled || loading
  return (
    <button className={classes} disabled={isDisabled} type={type ?? "button"} {...buttonProps}>
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
