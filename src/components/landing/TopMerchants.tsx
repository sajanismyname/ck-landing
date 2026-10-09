"use client";

import * as React from "react";
import { useRef } from "react";
import Image from "next/image";
import { TOP_MERCHANTS } from "@/data/landingData";
import {
  Building2,
  Star,
  MapPin,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export function TopMerchants() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -280 : 280;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section
      id="top-merchants"
      className="py-12 sm:py-16 lg:py-20 bg-[#F4F2EB] border-b border-stone-200/80"
      aria-label="Top Agricultural Merchants"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-stone-200/80">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-950 text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5 text-emerald-700" />
              <span>TRUSTED NEPALI PRODUCERS &amp; MERCHANTS / प्रमुख बिक्रेताहरू</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 font-heading tracking-tight">
              Top Merchants
            </h2>

            <p className="text-xs sm:text-sm text-stone-600 max-w-xl leading-relaxed">
              Connect directly with verified agricultural cooperatives, government-certified seed nurseries, and authentic equipment suppliers across Nepal.
            </p>
          </div>

          {/* View All Merchants CTA + Slider Navigation */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://connectkisan.com/bazar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-800 hover:text-emerald-950 transition-colors group"
            >
              <span>View All Merchants in Bazar</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            {/* Slider Navigation Buttons */}
            <div className="flex items-center gap-1.5 pl-2 border-l border-stone-300">
              <button
                type="button"
                onClick={() => scroll("left")}
                className="w-8 h-8 rounded-full border border-stone-300 bg-white hover:bg-stone-100 text-stone-700 flex items-center justify-center transition-colors cursor-pointer shadow-2xs hover:border-emerald-600 focus-visible:ring-2 focus-visible:ring-emerald-600"
                aria-label="Previous merchant"
                title="Slide left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                className="w-8 h-8 rounded-full border border-stone-300 bg-white hover:bg-stone-100 text-stone-700 flex items-center justify-center transition-colors cursor-pointer shadow-2xs hover:border-emerald-600 focus-visible:ring-2 focus-visible:ring-emerald-600"
                aria-label="Next merchant"
                title="Slide right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 4 Merchant Cards Slider / Grid */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scroll-smooth gap-3.5 sm:gap-4 lg:gap-5 pb-2 no-scrollbar lg:grid lg:grid-cols-4"
        >
          {TOP_MERCHANTS.map((merchant) => (
            <a
              key={merchant.id}
              href={merchant.href}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 w-[240px] sm:w-[260px] lg:w-auto bg-white rounded-xl sm:rounded-2xl p-4 sm:p-4.5 border border-stone-200/90 shadow-2xs hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between group cursor-pointer"
            >
              <div className="space-y-3">
                
                {/* Top Row: Merchant Avatar & Rating */}
                <div className="flex items-start justify-between gap-2.5">
                  <div className="relative w-11 h-11 rounded-xl overflow-hidden bg-emerald-50 border border-emerald-100 shrink-0">
                    <Image
                      src={merchant.imageUrl}
                      alt={merchant.name}
                      fill
                      sizes="44px"
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>

                  <div className="flex flex-col items-end">
                    <div className="flex items-center gap-1 bg-amber-50 border border-amber-200/80 px-1.5 py-0.5 rounded text-[11px] font-bold text-amber-900">
                      <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                      <span>{merchant.rating}</span>
                    </div>
                    <span className="text-[9px] text-stone-500 mt-0.5">
                      ({merchant.reviewCount} reviews)
                    </span>
                  </div>
                </div>

                {/* Merchant Name & Verification */}
                <div className="space-y-0.5">
                  <h3 className="text-sm sm:text-[15px] font-bold text-stone-900 font-heading leading-tight group-hover:text-emerald-800 transition-colors line-clamp-1">
                    {merchant.name}
                  </h3>
                  <div className="text-[10px] font-semibold text-emerald-700">
                    {merchant.category}
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-stone-500">
                    <MapPin className="w-3 h-3 text-stone-400 shrink-0" />
                    <span>{merchant.location}</span>
                  </div>
                </div>

                {/* Specialty Description */}
                <p className="text-[11px] text-stone-600 leading-relaxed line-clamp-2">
                  {merchant.speciality}
                </p>

              </div>

              {/* Bottom Verification Strip */}
              <div className="pt-2.5 mt-2.5 border-t border-stone-100 flex items-center justify-between text-[10px] sm:text-[11px]">
                <span className="inline-flex items-center gap-1 text-emerald-800 font-semibold">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  Verified
                </span>
                <span className="font-bold text-emerald-700 group-hover:translate-x-0.5 transition-transform">
                  View Catalog →
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
