import { cn } from "@/lib/utils";

interface PhotoWindowProps {
  /** Imported image URL */
  src: string;
  /** Accessible label for the visual band */
  label: string;
  className?: string;
  /** Object-position for framing the subject */
  objectPosition?: string;
}

/**
 * Rødbysætra-style pinned photo band: image stays still under the header
 * while the next opaque same-color section slides up and covers it.
 */
export function PhotoWindow({
  src,
  label,
  className,
  objectPosition = "center",
}: PhotoWindowProps) {
  return (
    <section
      aria-label={label}
      className={cn(
        "relative z-0 h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)]",
        className
      )}
    >
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
    </section>
  );
}
