"use client";

import * as React from "react";
import Image from "next/image";
import { HIGHEST_SELLERS_PRODUCTS } from "@/data/landingData";
import {
  TrendingUp,
  Award,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export function HighestSellers() {
  return (
    <section
      id="highest-sellers"
      className="py-12 sm:py-16 lg:py-20 bg-[#FAF9F5] border-b border-stone-200/80"
      aria-label="Highest Selling Agricultural Products"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        
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

          {/* View Best Sellers CTA */}
          <div className="shrink-0">
            <a
              href="https://connectkisan.com/bazar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-800 hover:text-emerald-950 transition-colors group"
            >
              <span>Explore All Best Sellers</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* 5 Highest Seller Cards Grid (NO Add to Cart buttons per design contract) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 lg:gap-5">
          {HIGHEST_SELLERS_PRODUCTS.map((item, idx) => (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-2xs hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Product Image Container */}
                <div className="relative h-48 w-full bg-stone-100 overflow-hidden">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Rank Badge */}
                  <div className="absolute top-2.5 left-2.5">
                    <span className="bg-emerald-900 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-md shadow-xs flex items-center gap-1">
                      <Award className="w-3 h-3 text-amber-400" />
                      #{idx + 1} Best Seller
                    </span>
                  </div>

                  {/* Demand Tag */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5">
                    <div className="bg-stone-900/80 backdrop-blur-xs text-white text-[10px] font-semibold px-2 py-1 rounded-md text-center truncate">
                      {item.demandIndicator}
                    </div>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-4 sm:p-5 space-y-2">
                  <div className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">
                    {item.category}
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-stone-900 font-heading leading-snug group-hover:text-emerald-800 transition-colors line-clamp-2">
                    {item.name}
                  </h3>

                  {/* Sales Volume Indicator */}
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-900 text-[11px] font-bold border border-emerald-200/80">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{item.salesVolume}</span>
                  </div>

                  {/* Price */}
                  <div className="pt-2 flex items-baseline justify-between">
                    <div>
                      <span className="text-xs text-stone-400 font-medium block">Wholesale Rate</span>
                      <span className="text-base sm:text-lg font-extrabold text-stone-900 font-heading">
                        NPR {item.priceNpr.toLocaleString()}
                      </span>
                    </div>
                    <span className="text-[11px] text-stone-500 font-medium truncate max-w-[120px]">
                      By {item.seller}
                    </span>
                  </div>
                </div>
              </div>

              {/* View in Bazar Footer Link (No cart button) */}
              <div className="p-4 sm:p-5 pt-0 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-emerald-700 group-hover:text-emerald-900 transition-colors mt-2">
                <span>View Product Details</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
