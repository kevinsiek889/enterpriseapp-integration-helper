"use client"

import { ThemeToggle } from "./theme-toggle"

export function FloatingThemeToggle() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <ThemeToggle />
    </div>
  )
} 