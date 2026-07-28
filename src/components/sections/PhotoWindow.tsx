import { cn } from "@/lib/utils";

interface PhotoWindowProps {
  /** Imported image URL */
  src: string;
  /** Accessible label for the visual band */
  label: string;
  className?: string;
}

/**
 * Full-bleed photo band between solid content sections.
 * Shows the entire image (no crop) at its natural aspect ratio.
 */
export function PhotoWindow({ src, label, className }: PhotoWindowProps) {
  return (
    <section aria-label={label} className={cn("relative w-full bg-background", className)}>
      <img
        src={src}
        alt=""
        className="block w-full h-auto"
        loading="lazy"
        decoding="async"
      />
    </section>
  );
}
