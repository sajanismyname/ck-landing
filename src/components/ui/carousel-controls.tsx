"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselOverlayArrowsProps {
  onPrev: () => void;
  onNext: () => void;
  canPrev: boolean;
  canNext: boolean;
  prevLabel?: string;
  nextLabel?: string;
  topOffsetClass?: string;
  className?: string;
}

export function CarouselOverlayArrows({
  onPrev,
  onNext,
  canPrev,
  canNext,
  prevLabel = "Previous products",
  nextLabel = "Next products",
  topOffsetClass = "top-[72px] sm:top-[82px]",
  className = "",
}: CarouselOverlayArrowsProps) {
  return (
    <>
      {/* Previous Arrow (<) - Left Edge, Overlaid on Image Area */}
      <button
        type="button"
        onClick={onPrev}
        disabled={!canPrev}
        className={`absolute left-2 ${topOffsetClass} -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/90 hover:bg-white border border-emerald-600/40 hover:border-emerald-700 text-emerald-800 hover:text-emerald-950 shadow-md hover:shadow-lg flex items-center justify-center transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 ${
          canPrev
            ? "opacity-100 cursor-pointer hover:scale-105 active:scale-95"
            : "opacity-20 pointer-events-none"
        } ${className}`}
        aria-label={prevLabel}
        aria-disabled={!canPrev}
        title={prevLabel}
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      {/* Next Arrow (>) - Right Edge, Overlaid on Image Area */}
      <button
        type="button"
        onClick={onNext}
        disabled={!canNext}
        className={`absolute right-2 ${topOffsetClass} -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/90 hover:bg-white border border-emerald-600/40 hover:border-emerald-700 text-emerald-800 hover:text-emerald-950 shadow-md hover:shadow-lg flex items-center justify-center transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 ${
          canNext
            ? "opacity-100 cursor-pointer hover:scale-105 active:scale-95"
            : "opacity-20 pointer-events-none"
        } ${className}`}
        aria-label={nextLabel}
        aria-disabled={!canNext}
        title={nextLabel}
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    </>
  );
}
