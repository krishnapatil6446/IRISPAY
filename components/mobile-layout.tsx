"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface MobileLayoutProps {
  children: React.ReactNode
  className?: string
}

export function MobileLayout({ children, className }: MobileLayoutProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-4">
      <div
        className={cn(
          "relative w-full max-w-[375px] h-[812px] bg-black rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-gray-800",
          className,
        )}
      >
        {/* iPhone Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-36 h-6 bg-black rounded-b-2xl z-50"></div>

        {/* Status Bar */}
        <div className="absolute top-0 left-0 right-0 h-12 bg-black z-40 flex items-center justify-between px-6 pt-2">
          <span className="text-white text-sm font-medium">9:41</span>
          <div className="flex items-center space-x-1">
            <div className="w-4 h-2 border border-white rounded-sm">
              <div className="w-3 h-1 bg-white rounded-sm m-0.5"></div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="h-full pt-12">{children}</div>

        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white rounded-full opacity-60"></div>
      </div>
    </div>
  )
}
