"use client"

import * as React from "react"
import * as Select from "@radix-ui/react-select"
import { ChevronDown, Check } from 'lucide-react'
import { cn } from "@/lib/utils"

export interface RtwSelectItem {
  label: string
  value: string
  disabled?: boolean
}

export interface RtwSelectProps {
  items: RtwSelectItem[]
  placeholder?: string
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  className?: string
  label?: string
  disabled?: boolean
}

export function RtwSelect({
  items,
  placeholder = "Seleccionar...",
  value,
  defaultValue,
  onValueChange,
  className,
  label,
  disabled,
}: RtwSelectProps) {
  const autoId = React.useId()

  return (
    <div className={className}>
      {label ? (
        <label htmlFor={autoId} className="mb-1.5 block text-sm font-medium text-gray-900 dark:text-gray-100">
          {label}
        </label>
      ) : null}

      <Select.Root value={value} defaultValue={defaultValue} onValueChange={onValueChange} disabled={disabled}>
        <Select.Trigger
          id={autoId}
          className={cn(
            "inline-flex w-full items-center justify-between gap-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900",
            "focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700"
          )}
          aria-label={label}
        >
          <Select.Value placeholder={placeholder} />
          <Select.Icon>
            <ChevronDown className="h-4 w-4 opacity-70" aria-hidden="true" />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content
            className={cn(
              "z-50 overflow-hidden rounded-md border border-gray-200 bg-white shadow-lg",
              "dark:border-gray-800 dark:bg-gray-900"
            )}
          >
            <Select.Viewport className="p-1">
              {items.map((it) => (
                <Select.Item
                  key={it.value}
                  value={it.value}
                  disabled={it.disabled}
                  className={cn(
                    "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",
                    "text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                    "hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-800"
                  )}
                >
                  <Select.ItemText>{it.label}</Select.ItemText>
                  <Select.ItemIndicator className="absolute right-2 inline-flex items-center">
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  )
}
