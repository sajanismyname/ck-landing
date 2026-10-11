"use client";

import * as React from "react";
import Image from "next/image";
import { TODAYS_DEALS_PRODUCTS } from "@/data/landingData";
import { useCarousel } from "@/hooks/useCarousel";
import { CarouselOverlayArrows } from "@/components/ui/carousel-controls";
import { Tag, ArrowRight } from "lucide-react";

export function TodaysDeals() {
  const {
    containerRef,
    canScrollLeft,
    canScrollRight,
    scrollLeft,
    scrollRight,
  } = useCarousel();

  return (
    <section
      id="todays-deals"
      className="py-12 sm:py-16 lg:py-20 bg-[#FAF9F5] border-b border-stone-200/80 relative"
      aria-label="Today's Agricultural Deals"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-stone-200/80">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/90 border border-amber-200 text-amber-950 text-xs font-bold uppercase tracking-wider">
              <Tag className="w-3.5 h-3.5 text-amber-700" />
              <span>TODAY&apos;S AGRICULTURAL DEALS / विशेष अफरहरू</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 font-heading tracking-tight">
              Today&apos;s Deals
            </h2>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Verified farming supplies, fertilizers, equipment, and certified seeds with real wholesale savings for Nepali farmers.
            </p>
          </div>

          {/* View All Deals CTA Link */}
          <div className="shrink-0">
            <a
              href="https://connectkisan.com/bazar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-800 hover:text-emerald-950 transition-colors group"
            >
              <span>View All Deals in Bazar</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Product Cards Carousel Container with Inset Overlaid Controls */}
        <div className="relative group">
          {/* Overlay Arrows in mid section inside product cards */}
          <CarouselOverlayArrows
            onPrev={scrollLeft}
            onNext={scrollRight}
            canPrev={canScrollLeft}
            canNext={canScrollRight}
            prevLabel="Previous products"
            nextLabel="Next products"
            topOffsetClass="top-1/2"
          />

          {/* Scrolling Track without visible bottom scrollbar */}
          <div
            ref={containerRef}
            role="region"
            aria-roledescription="carousel"
            aria-label="Today's Deals Carousel"
            className="flex overflow-x-auto scroll-smooth gap-3 sm:gap-4 py-1 no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden [scroll-snap-type:x_mandatory]"
          >
            {TODAYS_DEALS_PRODUCTS.map((deal) => (
              <a
                key={deal.id}
                href={deal.href}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 [scroll-snap-align:start] w-[210px] h-[210px] sm:w-[230px] sm:h-[230px] lg:w-[250px] lg:h-[250px] bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-stone-200/90 shadow-2xs hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between group cursor-pointer"
              >
                {/* Product Image Box (250 x 250 desktop proportion) */}
                <div className="relative h-[115px] sm:h-[125px] lg:h-[135px] w-full bg-stone-100 overflow-hidden shrink-0">
                  <Image
                    src={deal.imageUrl}
                    alt={deal.name}
                    fill
                    sizes="(max-width: 640px) 210px, (max-width: 1024px) 230px, 250px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Discount Badge */}
                  <div className="absolute top-2 left-2 flex flex-col gap-1">
                    <span className="bg-red-600 text-white text-[9px] sm:text-[10px] font-extrabold px-1.5 py-0.5 rounded shadow-xs">
                      {deal.badge}
                    </span>
                  </div>

                  {/* Stock tag */}
                  <div className="absolute bottom-1.5 right-1.5 bg-white/90 backdrop-blur-xs px-1.5 py-0.5 rounded text-[8px] sm:text-[9px] font-bold text-emerald-800 border border-emerald-200">
                    In Stock
                  </div>
                </div>

                {/* Product Content Details (250 x 250 desktop proportion) */}
                <div className="flex-1 min-h-0 p-2 sm:p-2.5 lg:p-3 flex flex-col justify-between">
                  <div className="space-y-0.5 min-w-0">
                    <div className="text-[9px] sm:text-[10px] font-semibold text-emerald-700 uppercase tracking-wider truncate">
                      {deal.category}
                    </div>

                    <h3 className="text-xs sm:text-[13px] lg:text-[14px] font-bold text-stone-900 font-heading leading-tight group-hover:text-emerald-800 transition-colors truncate">
                      {deal.name}
                    </h3>

                    <div className="text-[9px] sm:text-[10px] text-stone-500 truncate">
                      {deal.unit} • {deal.seller}
                    </div>
                  </div>

                  {/* Price & Action Row */}
                  <div className="pt-1 flex items-center justify-between border-t border-stone-100/80">
                    <div className="flex items-baseline gap-1 truncate">
                      <span className="text-xs sm:text-sm lg:text-[15px] font-extrabold text-stone-900 font-heading">
                        NPR {deal.currentPriceNpr.toLocaleString()}
                      </span>
                      <span className="text-[9px] sm:text-[10px] text-stone-400 line-through">
                        NPR {deal.originalPriceNpr.toLocaleString()}
                      </span>
                    </div>

                    <div className="flex items-center text-[10px] sm:text-[11px] font-bold text-emerald-700 group-hover:text-emerald-900 transition-colors shrink-0 ml-1">
                      <span>View</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform ml-0.5" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
