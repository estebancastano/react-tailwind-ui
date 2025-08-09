"use client"

import * as React from "react"
import * as Tabs from "@radix-ui/react-tabs"
import { cn } from "./utils/cn"

export interface RtwTabItem {
  value: string
  label: string
  content: React.ReactNode
  disabled?: boolean
}

export interface RtwTabsProps {
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
  items: RtwTabItem[]
  className?: string
}

export function RtwTabs({ defaultValue, value, onValueChange, items, className }: RtwTabsProps) {
  const first = items[0]?.value

  return (
    <Tabs.Root
      className={cn("w-full", className)}
      defaultValue={defaultValue ?? first}
      value={value}
      onValueChange={onValueChange}
    >
      <Tabs.List className="flex flex-wrap gap-2 rounded-md border border-gray-200 p-1 dark:border-gray-800">
        {items.map((it) => (
          <Tabs.Trigger
            key={it.value}
            value={it.value}
            disabled={it.disabled}
            className={cn(
              "inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm font-medium",
              "text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/50",
              "data-[state=active]:bg-white data-[state=active]:text-gray-900",
              "dark:text-gray-300 dark:hover:bg-gray-800 dark:data-[state=active]:bg-gray-900 dark:data-[state=active]:text-white",
              "disabled:opacity-50"
            )}
          >
            {it.label}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {items.map((it) => (
        <Tabs.Content key={it.value} value={it.value} className="mt-3">
          {it.content}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  )
}
