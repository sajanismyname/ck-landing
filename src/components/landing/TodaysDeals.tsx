"use client";

import * as React from "react";
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
} from "lucide-react";

export function TodaysDeals() {
  return (
    <section
      id="todays-deals"
      className="py-12 sm:py-16 lg:py-20 bg-[#FAF9F5] border-b border-stone-200/80 relative"
      aria-label="Today's Agricultural Deals"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        
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

          {/* View All Deals CTA */}
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

        {/* Product Cards Grid: 6 curated deal items (NO Add to Cart button per design contract) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-5">
          {TODAYS_DEALS_PRODUCTS.map((deal) => (
            <a
              key={deal.id}
              href={deal.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-2xs hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Product Image Box */}
                <div className="relative aspect-square w-full bg-stone-100 overflow-hidden">
                  <Image
                    src={deal.imageUrl}
                    alt={deal.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Discount Badge */}
                  <div className="absolute top-2 left-2 flex flex-col gap-1">
                    <span className="bg-red-600 text-white text-[10px] font-extrabold px-1.5 py-0.5 rounded shadow-xs">
                      {deal.badge}
                    </span>
                  </div>

                  {/* Stock tag */}
                  <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-xs px-1.5 py-0.5 rounded text-[9px] font-bold text-emerald-800 border border-emerald-200">
                    In Stock
                  </div>
                </div>

                {/* Product Content Details */}
                <div className="p-3 sm:p-4 space-y-1.5">
                  <div className="text-[10px] font-semibold text-emerald-700 uppercase tracking-wider truncate">
                    {deal.category}
                  </div>

                  <h3 className="text-xs sm:text-sm font-bold text-stone-900 font-heading leading-snug group-hover:text-emerald-800 transition-colors line-clamp-2">
                    {deal.name}
                  </h3>

                  <div className="text-[10px] text-stone-500 truncate">
                    {deal.unit} • {deal.seller}
                  </div>

                  {/* Price Block */}
                  <div className="pt-1.5 flex flex-wrap items-baseline gap-1.5">
                    <span className="text-sm sm:text-base font-extrabold text-stone-900 font-heading">
                      NPR {deal.currentPriceNpr.toLocaleString()}
                    </span>
                    <span className="text-[10px] text-stone-400 line-through">
                      NPR {deal.originalPriceNpr.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* View in Bazar Footer Link (No cart buttons) */}
              <div className="p-3 sm:p-4 pt-0 border-t border-stone-100 flex items-center justify-between text-[11px] font-bold text-emerald-700 group-hover:text-emerald-900 transition-colors mt-2">
                <span>View in Bazar</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
