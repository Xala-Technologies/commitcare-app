import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "light" | "dark";
}

export function Section({ children, className, variant = "default" }: SectionProps) {
  const variantClasses = {
    default: "bg-background",
    light: "bg-section-light",
    dark: "bg-section-dark",
  };

  return (
    <section className={cn("py-10 md:py-14 lg:py-20", variantClasses[variant], className)}>
      {children}
    </section>
  );
}


