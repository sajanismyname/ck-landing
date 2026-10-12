"use client";

import * as React from "react";
import Image from "next/image";
import { APP_BANNER_DATA } from "@/data/landingData";
import { Smartphone, CheckCircle2, Sparkles, ShieldCheck } from "lucide-react";

export function AppDownloadBanner() {
  return (
    <section
      className="py-12 sm:py-16 lg:py-20 bg-[#FAF9F5]"
      aria-label="Connect Kisan Mobile App"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Themed Agricultural Card: Deep Emerald Gradient with Organic Glows */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0B2417] via-[#123824] to-[#081B11] border border-emerald-800/80 shadow-2xl p-8 sm:p-12 lg:p-16 text-center text-white">
          
          {/* Subtle Organic Background Ambient Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-400/15 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

          {/* Background Image Texture with controlled opacity and mix-blend (stacked behind content) */}
          <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay overflow-hidden">
            <Image
              src={APP_BANNER_DATA.backgroundImageUrl}
              alt="Farming machinery background texture"
              fill
              sizes="100vw"
              className="object-cover"
              priority={false}
            />
          </div>

          {/* Banner Content Container */}
          <div className="relative z-10 max-w-2xl mx-auto space-y-4 sm:space-y-5">
            
            {/* Themed Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-800/90 border border-emerald-600/70 text-emerald-300 text-xs font-bold uppercase tracking-wider shadow-xs">
              <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
              <span>CONNECT KISAN MOBILE APP / मोबाइल एप</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-white tracking-tight drop-shadow-xs">
              {APP_BANNER_DATA.title}
            </h2>

            {/* Subheadline */}
            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed max-w-xl mx-auto">
              {APP_BANNER_DATA.subtitle}
            </p>

            {/* Store Download Buttons Row */}
            <div className="pt-2 sm:pt-4 space-y-4">
              <div className="text-[11px] uppercase tracking-wider font-bold text-emerald-300/90">
                DOWNLOAD ON
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
                {/* Apple App Store */}
                <a
                  href={APP_BANNER_DATA.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white hover:bg-emerald-50 text-stone-900 px-5 py-2.5 sm:py-3 rounded-2xl font-bold shadow-lg shadow-black/25 hover:scale-105 active:scale-95 transition-all group border border-white/80 cursor-pointer"
                  aria-label="Download Connect Kisan on the Apple App Store"
                >
                  <div className="w-7 h-7 rounded-lg overflow-hidden shrink-0 flex items-center justify-center">
                    <Image
                      src="/app-store-icon.png"
                      alt="Apple App Store Icon"
                      width={28}
                      height={28}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <div className="text-left leading-tight">
                    <span className="block text-[9px] text-stone-500 font-semibold uppercase tracking-wider">
                      Download on
                    </span>
                    <span className="block text-sm font-extrabold text-stone-900">
                      App Store
                    </span>
                  </div>
                </a>

                {/* Google Play Store */}
                <a
                  href={APP_BANNER_DATA.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white hover:bg-emerald-50 text-stone-900 px-5 py-2.5 sm:py-3 rounded-2xl font-bold shadow-lg shadow-black/25 hover:scale-105 active:scale-95 transition-all group border border-white/80 cursor-pointer"
                  aria-label="Get Connect Kisan on Google Play"
                >
                  <div className="w-7 h-7 shrink-0 flex items-center justify-center">
                    <Image
                      src="/google-play-2022.svg"
                      alt="Google Play Icon"
                      width={26}
                      height={26}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="text-left leading-tight">
                    <span className="block text-[9px] text-stone-500 font-semibold uppercase tracking-wider">
                      GET IT ON
                    </span>
                    <span className="block text-sm font-extrabold text-stone-900">
                      Google Play
                    </span>
                  </div>
                </a>
              </div>

              {/* Themed Trust Strip */}
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-[11px] sm:text-xs text-emerald-200/90 font-medium pt-2">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Free to download
                </span>
                <span className="hidden sm:inline text-emerald-400/50">•</span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Works in Nepali &amp; English
                </span>
                <span className="hidden sm:inline text-emerald-400/50">•</span>
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  24/7 Krishi Voice AI
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
