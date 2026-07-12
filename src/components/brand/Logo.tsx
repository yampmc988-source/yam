import { Link } from "@tanstack/react-router";
import logo from "@/assets/yam-logo.png";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

export function Logo({ variant = "dark", className }: LogoProps) {
  return (
    <Link
      to="/"
      className={cn("group relative flex items-center perspective-midrange", className)}
      aria-label="Yam Group of Companies — home"
    >
      {/* Hover glow */}
      <span
        className={cn(
          "pointer-events-none absolute inset-0 -z-10 scale-90 rounded-full opacity-0 blur-xl transition-all duration-500 group-hover:scale-110 group-hover:opacity-100",
          variant === "light" ? "bg-gold/30" : "bg-gold/25",
        )}
      />
      <span
        className={cn(
          "flex items-center rounded-2xl transition-transform duration-500 ease-out will-change-transform group-hover:-translate-y-0.5 group-hover:transform-[rotateY(8deg)_scale(1.08)]",
          variant === "light" && "bg-linear-to-br from-white to-white/80 p-2 shadow-soft",
        )}
      >
        <img
          src={logo}
          alt="Yam Group of Companies"
          width={64}
          height={60}
          className={cn(
            "w-auto",
            variant === "light" ? "h-12" : "h-14 drop-shadow-[0_6px_16px_rgba(0,0,0,0.18)]",
          )}
        />
      </span>
    </Link>
  );
}
