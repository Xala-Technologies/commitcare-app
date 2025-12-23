import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  linkTo?: string;
}

export function Logo({ 
  className, 
  showText = true, 
  size = "md",
  linkTo = "/" 
}: LogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  const iconSizeClasses = {
    sm: "w-5 h-5",
    md: "w-6 h-6",
    lg: "w-7 h-7",
  };

  const textSizeClasses = {
    sm: "text-lg md:text-xl",
    md: "text-xl md:text-2xl",
    lg: "text-2xl md:text-3xl",
  };

  const logoContent = (
    <div className={cn("flex items-center gap-3 group", className)}>
      <div className={cn(
        "relative rounded-xl bg-primary flex items-center justify-center transition-transform group-hover:scale-105 shadow-md group-hover:shadow-lg",
        sizeClasses[size]
      )}>
        {/* Hands protecting heart - symbolizing care, love and support */}
        <svg
          className={cn("text-primary-foreground", iconSizeClasses[size])}
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Heart in center */}
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            fill="white"
            opacity="0.95"
          />
          {/* Left hand protecting */}
          <path
            d="M6 10c-1.5 1-2 2.5-1.5 3.5.5 1 1.5 1.5 2.5 1"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            opacity="0.85"
          />
          <path
            d="M5 8.5c-.5.5-1 1.5-.5 2.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            opacity="0.85"
          />
          {/* Right hand protecting */}
          <path
            d="M18 10c1.5 1 2 2.5 1.5 3.5-.5 1-1.5 1.5-2.5 1"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            opacity="0.85"
          />
          <path
            d="M19 8.5c.5.5 1 1.5.5 2.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            opacity="0.85"
          />
        </svg>
      </div>
      {showText && (
        <span className={cn(
          "font-serif font-semibold tracking-tight",
          textSizeClasses[size],
          // Use text-foreground by default, but allow override via className
          className?.includes("text-") ? "" : "text-foreground"
        )}>
          Commit Care
        </span>
      )}
    </div>
  );

  if (linkTo) {
    return (
      <Link 
        to={linkTo} 
        className="inline-block"
        aria-label="Commit Care hjem"
      >
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}

