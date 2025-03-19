import * as React from "react"
import { cn } from "@/lib/utils"

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
}

function Heading({ 
  level = 1, 
  children, 
  className, 
  ...props 
}: HeadingProps) {
  const Component = `h${level}` as keyof JSX.IntrinsicElements;
  
  const styles = {
    h1: "text-4xl font-bold",
    h2: "text-3xl font-bold",
    h3: "text-2xl font-bold",
    h4: "text-xl font-bold",
    h5: "text-lg font-bold",
    h6: "text-base font-bold"
  };
  
  return (
    <Component
      className={cn(styles[`h${level}`], className)}
      {...props}
    >
      {children}
    </Component>
  );
}

export { Heading } 