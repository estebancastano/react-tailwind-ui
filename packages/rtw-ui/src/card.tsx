import * as React from "react"
import { cn } from "./utils/cn"

export interface RtwCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title?: React.ReactNode
  description?: React.ReactNode
  footer?: React.ReactNode
}

export function RtwCard({ className, title, description, footer, children, ...props }: RtwCardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-gray-200 bg-white text-gray-900 shadow-sm dark:border-gray-800 dark:bg-gray-900 dark:text-gray-100",
        className
      )}
      {...props}
    >
      {(title || description) && (
        <div className="border-b border-gray-200 p-6 dark:border-gray-800">
          {title ? <h3 className="text-base font-semibold">{title}</h3> : null}
          {description ? <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{description}</p> : null}
        </div>
      )}
      <div className="p-6">{children}</div>
      {footer ? <div className="border-t border-gray-200 p-4 dark:border-gray-800">{footer}</div> : null}
    </div>
  )
}
