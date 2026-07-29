import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PhotoWindowProps {
  src: string;
  label: string;
  className?: string;
  objectPosition?: string;
  children: ReactNode;
}

/**
 * Shows the image band first, then lets following sections slide over it while scrolling.
 */
export function PhotoWindow({
  src,
  label,
  className,
  objectPosition = "center",
  children,
}: PhotoWindowProps) {
  return (
    <section aria-label={label} className={cn("relative z-0", className)}>
      <div className="sticky top-16 md:top-20 z-0 relative h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] w-full overflow-hidden">
        <img
          src={src}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition }}
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="relative z-10 -mt-20 md:-mt-28 lg:-mt-32">
        {children}
      </div>
    </section>
  );
}
