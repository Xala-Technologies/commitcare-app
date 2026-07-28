import { cn } from "@/lib/utils";

interface PhotoWindowProps {
  /** Imported image URL */
  src: string;
  /** Accessible label for the visual band */
  label: string;
  className?: string;
}

/**
 * Sticky photo band: full image stays pinned while you scroll,
 * then the next opaque section slides over it (Rødbysætra-style).
 */
export function PhotoWindow({ src, label, className }: PhotoWindowProps) {
  return (
    <section
      aria-label={label}
      className={cn(
        // Extra height = scroll runway so the image can stick while the next section covers it
        "relative z-0 h-[165vh] md:h-[155vh]",
        className
      )}
    >
      <div className="sticky top-16 md:top-20 z-0 w-full bg-background">
        <img
          src={src}
          alt=""
          className="block w-full h-auto"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
}
