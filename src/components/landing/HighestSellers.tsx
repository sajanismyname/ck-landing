"use client";

import * as React from "react";
import { useRef } from "react";
import Image from "next/image";
import { HIGHEST_SELLERS_PRODUCTS } from "@/data/landingData";
import {
  TrendingUp,
  Award,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export function HighestSellers() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -280 : 280;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section
      id="highest-sellers"
      className="py-12 sm:py-16 lg:py-20 bg-[#FAF9F5] border-b border-stone-200/80"
      aria-label="Highest Selling Agricultural Products"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-stone-200/80">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/90 border border-emerald-200 text-emerald-950 text-xs font-bold uppercase tracking-wider">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-700" />
              <span>HIGHEST SELLERS &amp; POPULAR DEMAND / लोकप्रिय उत्पादनहरू</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 font-heading tracking-tight">
              Highest Sellers
            </h2>

            <p className="text-xs sm:text-sm text-stone-600 max-w-xl leading-relaxed">
              Proven farming machinery, biological plant nutrition, and verified nursery saplings with the highest adoption across Nepal&apos;s farming clusters.
            </p>
          </div>

          {/* View Best Sellers CTA + Slider Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://connectkisan.com/bazar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-800 hover:text-emerald-950 transition-colors group"
            >
              <span>Explore All Best Sellers</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            {/* Slider Navigation Buttons */}
            <div className="flex items-center gap-1.5 pl-2 border-l border-stone-300">
              <button
                type="button"
                onClick={() => scroll("left")}
                className="w-8 h-8 rounded-full border border-stone-300 bg-white hover:bg-stone-100 text-stone-700 flex items-center justify-center transition-colors cursor-pointer shadow-2xs hover:border-emerald-600 focus-visible:ring-2 focus-visible:ring-emerald-600"
                aria-label="Previous best seller"
                title="Slide left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                className="w-8 h-8 rounded-full border border-stone-300 bg-white hover:bg-stone-100 text-stone-700 flex items-center justify-center transition-colors cursor-pointer shadow-2xs hover:border-emerald-600 focus-visible:ring-2 focus-visible:ring-emerald-600"
                aria-label="Next best seller"
                title="Slide right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 5 Highest Seller Cards Slider / Grid */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scroll-smooth gap-3 sm:gap-3.5 lg:gap-4 pb-2 no-scrollbar lg:grid lg:grid-cols-5"
        >
          {HIGHEST_SELLERS_PRODUCTS.map((item, idx) => (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 w-[155px] sm:w-[195px] lg:w-auto bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-stone-200/90 shadow-2xs hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Product Image Container (aspect-[4/3] for sleek proportion) */}
                <div className="relative aspect-[4/3] w-full bg-stone-100 overflow-hidden">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Rank Badge */}
                  <div className="absolute top-2 left-2">
                    <span className="bg-emerald-900 text-white text-[9px] sm:text-[10px] font-extrabold px-1.5 py-0.5 rounded shadow-xs flex items-center gap-0.5">
                      <Award className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-400" />
                      #{idx + 1}
                    </span>
                  </div>

                  {/* Demand Tag */}
                  <div className="absolute bottom-1.5 left-1.5 right-1.5">
                    <div className="bg-stone-900/80 backdrop-blur-xs text-white text-[9px] font-semibold px-1.5 py-0.5 rounded text-center truncate">
                      {item.demandIndicator}
                    </div>
                  </div>
                </div>

                {/* Content Details (compact vertical length) */}
                <div className="p-2.5 sm:p-3 space-y-1">
                  <div className="text-[9px] sm:text-[10px] font-bold text-emerald-700 uppercase tracking-wider truncate">
                    {item.category}
                  </div>

                  <h3 className="text-xs sm:text-[13px] font-bold text-stone-900 font-heading leading-tight group-hover:text-emerald-800 transition-colors line-clamp-1">
                    {item.name}
                  </h3>

                  {/* Sales Volume Indicator */}
                  <div className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-900 text-[10px] font-bold border border-emerald-200/80">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>{item.salesVolume}</span>
                  </div>

                  {/* Price */}
                  <div className="pt-1 flex items-baseline justify-between">
                    <div>
                      <span className="text-xs sm:text-sm font-extrabold text-stone-900 font-heading">
                        NPR {item.priceNpr.toLocaleString()}
                      </span>
                    </div>
                    <span className="text-[9px] sm:text-[10px] text-stone-500 font-medium truncate max-w-[80px]">
                      {item.seller}
                    </span>
                  </div>
                </div>
              </div>

              {/* View in Bazar Footer Link (No cart button) */}
              <div className="px-2.5 sm:px-3 py-1.5 border-t border-stone-100 flex items-center justify-between text-[10px] sm:text-[11px] font-bold text-emerald-700 group-hover:text-emerald-900 transition-colors">
                <span>View Details</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
