import { cn } from "@/utils"
import { ReactNode } from "react"

interface MaxWidthWrapperProps {
  className?: string
  children?: ReactNode
}

export function MaxWidthWrapper({ className, children }: MaxWidthWrapperProps) {
  return (
    <div className={cn("h-full mx-auto w-full max-w-screen-xl", className)}>
      {children}
    </div>
  )
}
