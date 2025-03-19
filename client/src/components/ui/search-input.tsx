import * as React from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

interface SearchInputProps extends React.ComponentProps<typeof Input> {
  label?: string;
  className?: string;
  containerClassName?: string;
  labelClassName?: string;
}

function SearchInput({ 
  label, 
  className, 
  containerClassName,
  labelClassName,
  id = "search",
  placeholder = "Search...",
  ...props 
}: SearchInputProps) {
  return (
    <div className={cn("flex flex-col gap-2", containerClassName)}>
      {label && (
        <Label 
          htmlFor={id} 
          className={cn("text-sm font-medium", labelClassName)}
        >
          {label}
        </Label>
      )}
      <Input
        type="text"
        id={id}
        className={cn(
          "px-4 py-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500",
          className
        )}
        placeholder={placeholder}
        {...props}
      />
    </div>
  )
}

export { SearchInput } 