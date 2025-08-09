"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface RtwInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  helperText?: string
  error?: string
}

export const RtwInput = React.forwardRef<HTMLInputElement, RtwInputProps>(
  ({ id, label, helperText, error, className, required, ...props }, ref) => {
    const autoId = React.useId()
    const inputId = id ?? autoId
    const describedBy = error ? `${inputId}-error` : helperText ? `${inputId}-help` : undefined

    return (
      <div className="w-full">
        {label ? (
          <label
            htmlFor={inputId}
            className="mb-1.5 block text-sm font-medium text-gray-900 dark:text-gray-100"
          >
            {label} {required ? <span className="text-red-600">*</span> : null}
          </label>
        ) : null}

        <input
          id={inputId}
          ref={ref}
          aria-invalid={!!error}
          aria-describedby={describedBy}
          className={cn(
            "block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-500",
            "focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500",
            "dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700 dark:placeholder:text-gray-400",
            error && "border-red-500 focus:ring-red-500/40 focus:border-red-500",
            className
          )}
          required={required}
          {...props}
        />

        {error ? (
          <p id={`${inputId}-error`} className="mt-1 text-sm text-red-600 dark:text-red-400">
            {error}
          </p>
        ) : helperText ? (
          <p id={`${inputId}-help`} className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            {helperText}
          </p>
        ) : null}
      </div>
    )
  }
)

RtwInput.displayName = "RtwInput"
