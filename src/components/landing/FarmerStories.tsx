"use client";

import * as React from "react";
import Image from "next/image";
import { FARMER_STORIES } from "@/data/landingData";
import { useCarousel } from "@/hooks/useCarousel";
import {
  Star,
  MapPin,
  Sparkles,
} from "lucide-react";
import { CarouselOverlayArrows } from "@/components/ui/carousel-controls";

export function FarmerStories() {
  const {
    containerRef,
    canScrollLeft,
    canScrollRight,
    scrollLeft,
    scrollRight,
  } = useCarousel();

  return (
    <section id="stories" className="py-14 sm:py-20 lg:py-24 bg-[#FAF9F5] border-b border-stone-200/80" aria-label="Real Farmers Testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14">
        
        {/* Section Header matching Mockup */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 font-heading tracking-tight">
            Real Farmers. <span className="text-emerald-700">Real Results.</span>
          </h2>

          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-xl mx-auto">
            See how growers and agricultural cooperatives across Nepal are transforming their lives.
          </p>
        </div>

        {/* 3 Testimonials Row / Carousel Track with Inset Overlaid Controls */}
        <div className="relative group">
          {/* Overlaid Navigation Arrows matching other product card carousels */}
          <CarouselOverlayArrows
            onPrev={scrollLeft}
            onNext={scrollRight}
            canPrev={canScrollLeft}
            canNext={canScrollRight}
            prevLabel="Previous farmer story"
            nextLabel="Next farmer story"
            topOffsetClass="top-1/2"
            className="lg:hidden"
          />

          <div
            ref={containerRef}
            role="region"
            aria-roledescription="carousel"
            aria-label="Farmer Testimonials Carousel"
            className="flex overflow-x-auto scroll-smooth gap-5 sm:gap-6 pb-2 no-scrollbar [scroll-snap-type:x_mandatory] lg:grid lg:grid-cols-3"
          >
            {FARMER_STORIES.map((story) => (
              <div
                key={story.id}
                className={`shrink-0 [scroll-snap-align:start] w-[85vw] max-w-[340px] sm:w-[320px] lg:w-auto bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between relative ${
                  story.isFeatured ? "ring-1.5 ring-emerald-600/40 border-emerald-300" : ""
                }`}
              >
                {/* Featured Pill for Center Card */}
                {story.isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-emerald-900 text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      FEATURED STORY
                    </span>
                  </div>
                )}

                <div className="space-y-4">
                  {/* Top Profile Strip */}
                  <div className="flex items-center gap-3.5 pt-1">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-stone-100 border border-emerald-100 shrink-0">
                      {story.avatarUrl ? (
                        <Image
                          src={story.avatarUrl}
                          alt={story.name}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-emerald-700 text-white font-bold flex items-center justify-center text-sm">
                          {story.initials}
                        </div>
                      )}
                    </div>

                    <div className="space-y-0.5 min-w-0">
                      <h3 className="text-sm sm:text-base font-bold text-stone-900 font-heading truncate">
                        {story.name}
                      </h3>
                      <div className="flex items-center gap-1 text-[11px] text-stone-500 truncate">
                        <MapPin className="w-3 h-3 text-stone-400 shrink-0" />
                        <span>{story.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* 5 Gold Star Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Testimonial Quote */}
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-medium italic line-clamp-4">
                    &ldquo;{story.quote}&rdquo;
                  </p>
                </div>

                {/* Bottom Tag */}
                <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 text-[11px] font-bold border border-emerald-100">
                    {story.role}
                  </span>
                  <span className="text-[10px] text-stone-400 font-medium">
                    Verified Farmer
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
