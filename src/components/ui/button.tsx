import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-bold ring-offset-background transition-all duration-300 cyber-focus disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 uppercase tracking-wider",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-primary to-accent text-primary-foreground hover:from-primary-glow hover:to-accent rounded-sm border border-primary/50 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] hover:-translate-y-0.5",
        destructive:
          "bg-gradient-to-r from-destructive to-red-600 text-destructive-foreground hover:from-red-600 hover:to-red-700 rounded-sm border border-destructive/50 hover:shadow-[0_0_20px_hsl(var(--destructive)/0.5)]",
        outline:
          "border border-primary/50 bg-card/50 backdrop-blur-sm hover:bg-primary/10 hover:text-primary rounded-sm hover:shadow-[0_0_15px_hsl(var(--primary)/0.3)] hover:border-primary",
        secondary:
          "bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground hover:from-secondary/90 hover:to-secondary rounded-sm border border-secondary/30",
        ghost: "hover:bg-primary/10 hover:text-primary rounded-sm",
        link: "text-primary underline-offset-4 hover:underline hover:text-primary-glow",
        cyber: "btn-cyber",
        neural: "bg-gradient-to-r from-accent to-primary text-primary-foreground hover:from-accent/90 hover:to-primary/90 rounded-sm border border-accent/50 animate-pulse-cyber",
      },
      size: {
        default: "h-11 px-6 py-3",
        sm: "h-9 rounded-sm px-4 text-xs",
        lg: "h-14 rounded-sm px-10 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
