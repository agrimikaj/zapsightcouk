import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 transition-all duration-200 ease-out motion-reduce:transition-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground rounded-xl shadow-soft hover:shadow-elevated hover:-translate-y-0.5 motion-reduce:hover:translate-y-0",
        destructive: "bg-destructive text-destructive-foreground rounded-xl hover:bg-destructive/90",
        outline: "bg-card/50 backdrop-blur-sm text-foreground rounded-xl shadow-soft hover:shadow-elevated hover:bg-card/80 motion-reduce:hover:translate-y-0",
        secondary: "bg-secondary/60 backdrop-blur-sm text-secondary-foreground rounded-xl hover:bg-secondary/80",
        ghost: "rounded-xl hover:bg-secondary/50 text-foreground/70 hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-gradient-to-r from-primary via-primary to-primary-dark text-primary-foreground font-semibold rounded-2xl shadow-glow hover:shadow-glow-lg hover:-translate-y-0.5 motion-reduce:hover:translate-y-0",
        heroOutline: "bg-primary/5 backdrop-blur-sm text-primary rounded-2xl hover:bg-primary/10 font-medium",
        nav: "text-foreground/70 hover:text-foreground hover:bg-secondary/40 font-medium rounded-xl",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-base font-semibold",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
