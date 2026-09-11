import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  // Island button: pill shape, rounded display face, and the pressed-down bottom
  // edge the game's UI buttons have (see .acnh-btn in app/globals.css).
  "acnh-btn inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-display text-sm font-bold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-leaf-500 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "acnh-btn-leaf",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 dark:bg-destructive/70",
        outline:
          "border-2 border-slate-300 bg-cream text-slate-800 hover:bg-slate-100 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-100 dark:hover:bg-slate-700",
        secondary:
          "bg-slate-100 text-slate-800 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-100",
        // Icon-only nav buttons stay flat -- no raised edge.
        ghost:
          "shadow-none hover:shadow-none hover:translate-y-0 active:translate-y-0 hover:bg-leaf-100 hover:text-leaf-700 dark:hover:bg-slate-800 dark:hover:text-leaf-300",
        link: "shadow-none hover:shadow-none hover:translate-y-0 text-leaf-700 dark:text-leaf-300 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-5 py-2 has-[>svg]:px-4",
        sm: "h-9 gap-1.5 px-4 has-[>svg]:px-3",
        lg: "h-11 px-7 has-[>svg]:px-5",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
