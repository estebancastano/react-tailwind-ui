"use client"

import * as React from "react"
import { AlertCircle, CheckCircle2, AlertTriangle, OctagonAlert } from 'lucide-react'
import { cn } from "./utils/cn"

type AlertTone = "info" | "success" | "warning" | "destructive"

export interface RtwAlertProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: AlertTone
  title?: string
  description?: string | React.ReactNode
}

const toneStyles: Record<AlertTone, string> = {
  info: "border-teal-300 bg-teal-50 text-teal-900 dark:border-teal-900/40 dark:bg-teal-950/30 dark:text-teal-200",
  success: "border-emerald-300 bg-emerald-50 text-emerald-900 dark:border-emerald-900/40 dark:bg-emerald-950/30 dark:text-emerald-200",
  warning: "border-amber-300 bg-amber-50 text-amber-900 dark:border-amber-900/40 dark:bg-amber-950/30 dark:text-amber-200",
  destructive: "border-red-400 bg-red-50 text-red-900 dark:border-red-900/40 dark:bg-red-950/30 dark:text-red-200"
}

const toneIcon: Record<AlertTone, React.ReactNode> = {
  info: <AlertCircle className="h-4 w-4" aria-hidden="true" />,
  success: <CheckCircle2 className="h-4 w-4" aria-hidden="true" />,
  warning: <AlertTriangle className="h-4 w-4" aria-hidden="true" />,
  destructive: <OctagonAlert className="h-4 w-4" aria-hidden="true" />
}

export function RtwAlert({ tone = "info", title, description, className, ...props }: RtwAlertProps) {
  return (
    <div
      role="alert"
      className={cn("flex w-full items-start gap-2 rounded-md border p-3", toneStyles[tone], className)}
      {...props}
    >
      <div className="mt-0.5">{toneIcon[tone]}</div>
      <div className="space-y-1">
        {title ? <div className="text-sm font-semibold">{title}</div> : null}
        {description ? <div className="text-sm opacity-90">{description}</div> : null}
      </div>
    </div>
  )
}
