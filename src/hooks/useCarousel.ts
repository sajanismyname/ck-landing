import { useState, useEffect, useRef, useCallback } from "react";

export interface UseCarouselOptions {
  /**
   * Custom scroll step in pixels. If not provided, it dynamically calculates
   * (first card width + gap) or a proportional step.
   */
  customStep?: number;
}

export function useCarousel<T extends HTMLElement = HTMLDivElement>(
  options: UseCarouselOptions = {}
) {
  const containerRef = useRef<T | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    // Use an epsilon of 2px to account for fractional pixel rendering
    const isAtStart = scrollLeft <= 2;
    const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 2;
    const isScrollable = scrollWidth > clientWidth + 2;

    setCanScrollLeft(!isAtStart && isScrollable);
    setCanScrollRight(!isAtEnd && isScrollable);
  }, []);

  const scroll = useCallback(
    (direction: "left" | "right") => {
      const el = containerRef.current;
      if (!el) return;

      let step = options.customStep;

      if (!step) {
        const firstCard = el.children[0] as HTMLElement | undefined;
        if (firstCard) {
          const cardRect = firstCard.getBoundingClientRect();
          // Extract CSS gap or default to 16px
          const computedGap =
            parseFloat(window.getComputedStyle(el).gap || "16") || 16;
          step = cardRect.width + computedGap;
        } else {
          step = el.clientWidth * 0.75;
        }
      }

      const scrollAmount = direction === "left" ? -step : step;
      el.scrollBy({ left: scrollAmount, behavior: "smooth" });
    },
    [options.customStep]
  );

  const scrollToStart = useCallback(() => {
    const el = containerRef.current;
    if (el) {
      el.scrollTo({ left: 0, behavior: "smooth" });
      // Verify scroll state after animation triggers
      setTimeout(updateScrollState, 150);
    }
  }, [updateScrollState]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Initial check
    updateScrollState();

    const handleScroll = () => {
      updateScrollState();
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateScrollState);

    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(() => {
        updateScrollState();
      });
      ro.observe(el);
    }

    return () => {
      el.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateScrollState);
      if (ro) ro.disconnect();
    };
  }, [updateScrollState]);

  return {
    containerRef,
    canScrollLeft,
    canScrollRight,
    scrollLeft: () => scroll("left"),
    scrollRight: () => scroll("right"),
    scrollToStart,
    updateScrollState,
  };
}
