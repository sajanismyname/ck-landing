"use client";

import * as React from "react";
import { AlertCircle, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

export function TheChallenge() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F7F6F0] border-b border-stone-200/80 relative overflow-hidden" aria-label="The Agricultural Challenge in Nepal">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-emerald-100/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-amber-100/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-stretch">
          
          {/* Left Narrative Column (7 cols on lg) - Flex column with justify-between to match right card */}
          <div className="lg:col-span-7 h-full flex flex-col justify-between space-y-6 lg:space-y-0">
            <div className="space-y-4 sm:space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-stone-200/80 border border-stone-300/80 text-stone-800 text-xs font-bold uppercase tracking-wider">
                <AlertCircle className="w-3.5 h-3.5 text-stone-600" />
                <span>THE CHALLENGE</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-extrabold text-stone-900 font-heading tracking-tight leading-[1.16]">
                Agriculture shouldn&apos;t be harder than it needs to be.
              </h2>

              <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl">
                Farmers often face fragmented information, limited market access, uncertain decisions, input sourcing hurdles, and a lack of reliable expert guidance.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-stone-200 shadow-xs max-w-xl mt-6 lg:mt-8">
              <p className="text-base sm:text-lg font-bold text-emerald-900 flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Connect Kisan brings these experiences together.</span>
              </p>
            </div>
          </div>

          {/* Right Visual Graphic Column (5 cols on lg) - Equal height card matching left column */}
          <div className="lg:col-span-5 relative flex flex-col">
            <div className="h-full flex flex-col justify-between rounded-3xl bg-gradient-to-br from-emerald-900 to-emerald-950 p-6 sm:p-8 lg:p-8 text-white overflow-hidden shadow-xl border border-emerald-800/80 relative">
              {/* Subtle background circles */}
              <div className="absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 rounded-full bg-emerald-700/30 blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 -ml-12 -mb-12 w-48 h-48 rounded-full bg-emerald-600/20 blur-xl pointer-events-none" />

              <div className="relative z-10 h-full flex flex-col justify-between space-y-6">
                {/* Top header row */}
                <div className="flex items-center justify-between pb-3.5 border-b border-emerald-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-200">The Connected Solution</span>
                  </div>
                  <span className="text-xs text-emerald-400 font-mono">Nepal-wide</span>
                </div>

                {/* Solution Rows */}
                <div className="space-y-3 sm:space-y-3.5 my-auto">
                  <div className="p-3.5 rounded-xl bg-emerald-900/90 border border-emerald-700/80 flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                    <div>
                      <strong className="text-white block font-semibold text-xs sm:text-sm">Fragmented Market Information</strong>
                      <span className="text-emerald-200/90 text-xs">Replaced by live Kalimati wholesale rates &amp; digital bidding.</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-emerald-900/90 border border-emerald-700/80 flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                    <div>
                      <strong className="text-white block font-semibold text-xs sm:text-sm">Uncertain Crop Diagnosis</strong>
                      <span className="text-emerald-200/90 text-xs">Replaced by 24/7 spoken Nepali AI &amp; expert agronomists.</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-emerald-900/90 border border-emerald-700/80 flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                    <div>
                      <strong className="text-white block font-semibold text-xs sm:text-sm">Counterfeit Inputs &amp; Middlemen</strong>
                      <span className="text-emerald-200/90 text-xs">Replaced by verified Bazar supplies &amp; direct farm traceability.</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Baseline Aligned Footer Row */}
                <div className="pt-3 border-t border-emerald-800/80 flex items-center justify-between text-xs text-emerald-300">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    Farmer-First Ecosystem
                  </span>
                  <span className="font-semibold text-white">Unified Platform</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
