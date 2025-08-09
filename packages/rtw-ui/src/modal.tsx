"use client"

import * as React from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { X } from 'lucide-react'
import { RtwButton } from "./button"
import { cn } from "./utils/cn"

export interface RtwModalProps {
  title: string
  description?: string
  open?: boolean
  onOpenChange?: (open: boolean) => void
  triggerLabel?: string
  children?: React.ReactNode
  footer?: React.ReactNode
}

export function RtwModal({
  title,
  description,
  open,
  onOpenChange,
  triggerLabel = "Abrir modal",
  children,
  footer,
}: RtwModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>
        <RtwButton variant="outline">{triggerLabel}</RtwButton>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out" />
        <Dialog.Content
          className={cn(
            "fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-lg",
            "dark:bg-gray-900"
          )}
          aria-describedby={description ? "rtw-modal-desc" : undefined}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <Dialog.Title className="text-lg font-semibold">{title}</Dialog.Title>
              {description ? (
                <Dialog.Description id="rtw-modal-desc" className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  {description}
                </Dialog.Description>
              ) : null}
            </div>
            <Dialog.Close
              className="rounded-md p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 dark:hover:bg-gray-800 dark:hover:text-gray-100"
              aria-label="Cerrar"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </Dialog.Close>
          </div>

          <div className="mt-4">{children}</div>

          <div className="mt-6 flex items-center justify-end gap-2">
            {footer ? (
              footer
            ) : (
              <>
                <Dialog.Close asChild>
                  <RtwButton variant="ghost">Cancelar</RtwButton>
                </Dialog.Close>
                <RtwButton>Confirmar</RtwButton>
              </>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
