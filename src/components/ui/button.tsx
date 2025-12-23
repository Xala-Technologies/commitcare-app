import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground rounded-lg shadow-sm hover:shadow-lg hover:scale-105 hover:-translate-y-0.5 active:scale-100 active:translate-y-0",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:text-destructive-foreground rounded-lg shadow-sm hover:shadow-md hover:scale-105 active:scale-100",
        outline: "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground rounded-lg shadow-sm hover:shadow-md hover:scale-105 hover:-translate-y-0.5 active:scale-100 active:translate-y-0",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:text-secondary-foreground rounded-lg shadow-sm hover:shadow-md hover:scale-105 active:scale-100",
        ghost: "text-foreground hover:bg-accent hover:text-accent-foreground rounded-lg hover:scale-105 active:scale-100",
        link: "text-primary underline-offset-4 hover:underline hover:text-primary/80",
        hero: "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-1 hover:scale-105 active:scale-100 active:translate-y-0",
        heroOutline: "border-2 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/20 hover:border-primary-foreground/50 hover:text-primary-foreground rounded-lg backdrop-blur-sm shadow-sm hover:shadow-lg hover:scale-105 hover:-translate-y-0.5 active:scale-100 active:translate-y-0",
        white: "bg-card text-card-foreground hover:bg-card/90 hover:text-card-foreground rounded-lg shadow-md hover:shadow-xl hover:scale-105 hover:-translate-y-0.5 active:scale-100 active:translate-y-0",
        teal: "bg-primary text-primary-foreground hover:bg-accent hover:text-primary-foreground rounded-lg shadow-sm hover:shadow-lg hover:scale-105 hover:-translate-y-0.5 active:scale-100 active:translate-y-0",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 rounded-lg px-4 text-xs",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-lg",
        icon: "h-10 w-10 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
