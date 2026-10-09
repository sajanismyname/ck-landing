"use client";

import * as React from "react";
import Image from "next/image";
import { TOP_MERCHANTS } from "@/data/landingData";
import {
  Building2,
  Star,
  MapPin,
  ShieldCheck,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export function TopMerchants() {
  return (
    <section
      id="top-merchants"
      className="py-12 sm:py-16 lg:py-20 bg-[#F4F2EB] border-b border-stone-200/80"
      aria-label="Top Agricultural Merchants"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        
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

          {/* View All Merchants CTA */}
          <div className="shrink-0">
            <a
              href="https://connectkisan.com/bazar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-800 hover:text-emerald-950 transition-colors group"
            >
              <span>View All Merchants in Bazar</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* 4 Merchant Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {TOP_MERCHANTS.map((merchant) => (
            <a
              key={merchant.id}
              href={merchant.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-5 sm:p-6 border border-stone-200/90 shadow-2xs hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between group cursor-pointer"
            >
              <div className="space-y-4">
                
                {/* Top Row: Merchant Avatar & Rating */}
                <div className="flex items-start justify-between gap-3">
                  <div className="relative w-14 h-14 rounded-2xl overflow-hidden bg-emerald-50 border border-emerald-100 shrink-0">
                    <Image
                      src={merchant.imageUrl}
                      alt={merchant.name}
                      fill
                      sizes="56px"
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>

                  <div className="flex flex-col items-end">
                    <div className="flex items-center gap-1 bg-amber-50 border border-amber-200/80 px-2 py-0.5 rounded-md text-xs font-bold text-amber-900">
                      <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      <span>{merchant.rating}</span>
                    </div>
                    <span className="text-[10px] text-stone-500 mt-0.5">
                      ({merchant.reviewCount} reviews)
                    </span>
                  </div>
                </div>

                {/* Merchant Name & Verification */}
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-base font-bold text-stone-900 font-heading leading-tight group-hover:text-emerald-800 transition-colors">
                      {merchant.name}
                    </h3>
                  </div>
                  <div className="text-[11px] font-semibold text-emerald-700">
                    {merchant.category}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-stone-500">
                    <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                    <span>{merchant.location}</span>
                  </div>
                </div>

                {/* Specialty Description */}
                <p className="text-xs text-stone-600 leading-relaxed line-clamp-2">
                  {merchant.speciality}
                </p>

              </div>

              {/* Bottom Verification Strip */}
              <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between text-[11px]">
                <span className="inline-flex items-center gap-1 text-emerald-800 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Verified Merchant
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
