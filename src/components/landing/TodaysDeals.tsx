"use client";

import * as React from "react";
import { useRef } from "react";
import Image from "next/image";
import { TODAYS_DEALS_PRODUCTS } from "@/data/landingData";
import { Badge } from "@/components/ui/badge";
import {
  Tag,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Store,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export function TodaysDeals() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -280 : 280;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section
      id="todays-deals"
      className="py-12 sm:py-16 lg:py-20 bg-[#FAF9F5] border-b border-stone-200/80 relative"
      aria-label="Today's Agricultural Deals"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-stone-200/80">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/90 border border-amber-200 text-amber-950 text-xs font-bold uppercase tracking-wider">
              <Tag className="w-3.5 h-3.5 text-amber-700" />
              <span>TODAY&apos;S AGRICULTURAL DEALS / विशेष अफरहरू</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 font-heading tracking-tight">
              Today&apos;s Deals
            </h2>

            <p className="text-xs sm:text-sm text-stone-600 max-w-xl leading-relaxed">
              Verified farming supplies, fertilizers, equipment, and certified seeds with real wholesale savings for Nepali farmers.
            </p>
          </div>

          {/* View All Deals CTA + Slider Arrows */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://connectkisan.com/bazar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-800 hover:text-emerald-950 transition-colors group"
            >
              <span>View All Deals in Bazar</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            {/* Slider Navigation Buttons */}
            <div className="flex items-center gap-1.5 pl-2 border-l border-stone-300">
              <button
                type="button"
                onClick={() => scroll("left")}
                className="w-8 h-8 rounded-full border border-stone-300 bg-white hover:bg-stone-100 text-stone-700 flex items-center justify-center transition-colors cursor-pointer shadow-2xs hover:border-emerald-600 focus-visible:ring-2 focus-visible:ring-emerald-600"
                aria-label="Previous deal"
                title="Slide left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                className="w-8 h-8 rounded-full border border-stone-300 bg-white hover:bg-stone-100 text-stone-700 flex items-center justify-center transition-colors cursor-pointer shadow-2xs hover:border-emerald-600 focus-visible:ring-2 focus-visible:ring-emerald-600"
                aria-label="Next deal"
                title="Slide right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Product Cards Slider Container (Horizontal smooth sliding across devices + responsive grid) */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scroll-smooth gap-3 sm:gap-3.5 lg:gap-4 pb-2 no-scrollbar lg:grid lg:grid-cols-5"
        >
          {TODAYS_DEALS_PRODUCTS.map((deal) => (
            <a
              key={deal.id}
              href={deal.href}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 w-[155px] sm:w-[195px] lg:w-auto bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-stone-200/90 shadow-2xs hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Product Image Box (aspect-[4/3] for balanced proportion) */}
                <div className="relative aspect-[4/3] w-full bg-stone-100 overflow-hidden">
                  <Image
                    src={deal.imageUrl}
                    alt={deal.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Discount Badge */}
                  <div className="absolute top-2 left-2 flex flex-col gap-1">
                    <span className="bg-red-600 text-white text-[9px] sm:text-[10px] font-extrabold px-1.5 py-0.5 rounded shadow-xs">
                      {deal.badge}
                    </span>
                  </div>

                  {/* Stock tag */}
                  <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-xs px-1.5 py-0.5 rounded text-[8px] sm:text-[9px] font-bold text-emerald-800 border border-emerald-200">
                    In Stock
                  </div>
                </div>

                {/* Product Content Details (compact vertical length) */}
                <div className="p-2.5 sm:p-3 space-y-1">
                  <div className="text-[9px] sm:text-[10px] font-semibold text-emerald-700 uppercase tracking-wider truncate">
                    {deal.category}
                  </div>

                  <h3 className="text-xs sm:text-[13px] font-bold text-stone-900 font-heading leading-tight group-hover:text-emerald-800 transition-colors line-clamp-1">
                    {deal.name}
                  </h3>

                  <div className="text-[9px] sm:text-[10px] text-stone-500 truncate">
                    {deal.unit} • {deal.seller}
                  </div>

                  {/* Price Block */}
                  <div className="pt-1 flex flex-wrap items-baseline gap-1.5">
                    <span className="text-xs sm:text-sm font-extrabold text-stone-900 font-heading">
                      NPR {deal.currentPriceNpr.toLocaleString()}
                    </span>
                    <span className="text-[9px] sm:text-[10px] text-stone-400 line-through">
                      NPR {deal.originalPriceNpr.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* View in Bazar Footer Link (No cart buttons) */}
              <div className="px-2.5 sm:px-3 py-1.5 border-t border-stone-100 flex items-center justify-between text-[10px] sm:text-[11px] font-bold text-emerald-700 group-hover:text-emerald-900 transition-colors">
                <span>View in Bazar</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
