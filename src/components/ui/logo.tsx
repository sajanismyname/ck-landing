import * as React from "react";
import Image from "next/image";

interface LogoProps {
  variant?: "default" | "light" | "white";
  className?: string;
  width?: number;
  height?: number;
}

export function Logo({
  variant = "default",
  className = "",
  width = 180,
  height = 40,
}: LogoProps) {
  return (
    <div
      className={`relative inline-flex items-center transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_4px_14px_rgba(22,163,74,0.45)] group cursor-pointer ${className}`}
    >
      {variant === "white" ? (
        // High-contrast logo for dark backgrounds (Footer)
        <div className="flex items-center gap-2.5">
          <Image
            src="/logo.svg"
            alt="Connect Kisan Official Logo"
            width={width}
            height={height}
            className="h-10 w-auto object-contain brightness-0 invert filter transition-all duration-300 group-hover:brightness-100 group-hover:invert-0 group-hover:drop-shadow-[0_0_12px_rgba(246,139,32,0.6)]"
            priority
          />
        </div>
      ) : (
        // Standard full-color logo (Navbar & Light Sections)
        <Image
          src="/logo.svg"
          alt="Connect Kisan Official Logo"
          width={width}
          height={height}
          className="h-10 w-auto object-contain transition-all duration-300 group-hover:brightness-110 group-hover:drop-shadow-[0_2px_10px_rgba(17,110,56,0.35)]"
          priority
        />
      )}
    </div>
  );
}
