"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  TrendingUp,
  Mic,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  MapPin,
  Sprout,
  Store,
  Send,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-12 md:pb-20 lg:pt-14 lg:pb-24 bg-[#FAF9F5]">
      {/* Subtle organic background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-emerald-100/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-amber-100/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Value Messaging & CTAs (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/90 border border-emerald-200 text-emerald-950 text-xs sm:text-sm font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>BUILT FOR NEPALI FARMERS</span>
            </div>

            {/* Primary Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-stone-900 font-heading leading-[1.12]">
              Farm Smarter. <br />
              <span className="text-stone-900">Sell Better.</span> <br />
              <span className="text-stone-900">Grow More.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl">
              Access agricultural knowledge, market opportunities, expert guidance and digital tools—all in one unified platform designed for Nepal.
            </p>

            {/* CTA Buttons matching mockup */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <Button
                asChild
                size="lg"
                className="bg-stone-800 hover:bg-stone-900 text-white font-bold text-base px-8 py-4 rounded-xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all group cursor-pointer"
              >
                <a href="#get-started" className="flex items-center justify-center gap-2">
                  <span>Get Started Free</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-stone-300 text-stone-800 hover:bg-stone-100 hover:border-stone-400 font-semibold text-base px-7 py-4 rounded-xl transition-all cursor-pointer"
              >
                <a href="https://connectkisan.com/bazar" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <span>Explore Bazar</span>
                </a>
              </Button>
            </div>

            {/* Trust Indicator Bar underneath CTA */}
            <div className="pt-4 border-t border-stone-200/80 w-full max-w-xl">
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm font-medium text-stone-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong className="text-stone-900 font-semibold">20,000+</strong> Farmers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong className="text-stone-900 font-semibold">5,000+</strong> Farms</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-stone-700 font-medium">Across Nepal</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Connect Kisan Live Card Mockup (5 cols on lg) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Card Container */}
              <div className="rounded-3xl bg-white p-5 sm:p-6 shadow-xl border border-stone-200/90 space-y-4">
                
                {/* Header */}
                <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-emerald-700 flex items-center justify-center text-white font-bold text-xs shadow-2xs">
                      CK
                    </div>
                    <div>
                      <div className="text-xs font-bold text-stone-900 leading-none">Connect Kisan</div>
                      <div className="text-[10px] text-stone-500 mt-0.5">Your agriculture companion</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-[10px] font-bold text-emerald-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                    <span>Live</span>
                  </div>
                </div>

                {/* Today's Market Rates Snapshot */}
                <div className="bg-stone-50 rounded-2xl p-4 border border-stone-100 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-stone-800">Today&apos;s Market Rates</span>
                    <a href="https://connectkisan.com/kalimati-market-price" target="_blank" rel="noopener noreferrer" className="text-[11px] font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-0.5">
                      <span>View All</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-stone-100">
                      <div className="flex items-center gap-2">
                        <span className="text-stone-700 font-medium">Tomato (गोलभेडा)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-stone-900">Rs. 65/kg</span>
                        <span className="text-[10px] font-semibold text-emerald-600">↑ 8.2%</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-stone-100">
                      <div className="flex items-center gap-2">
                        <span className="text-stone-700 font-medium">Ginger (अदुवा)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-stone-900">Rs. 230/kg</span>
                        <span className="text-[10px] font-semibold text-stone-500">→ Stable</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-stone-100">
                      <div className="flex items-center gap-2">
                        <span className="text-stone-700 font-medium">Cardamom (अलैंची)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-stone-900">Rs. 92,000/kg</span>
                        <span className="text-[10px] font-semibold text-emerald-600">↑ 4.5%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ask Connect Kisan Voice Prompt Input */}
                <div className="bg-stone-50 rounded-2xl p-3.5 border border-stone-100 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-stone-800">
                    <Mic className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Ask Connect Kisan</span>
                  </div>
                  <div className="flex items-center justify-between bg-white px-3 py-2 rounded-xl border border-stone-200 text-xs">
                    <span className="text-stone-500 italic text-[11px] truncate">
                      मेरो आलुको पातमा किन सेतो लागेको छ?
                    </span>
                    <button type="button" className="w-6 h-6 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white flex items-center justify-center shrink-0 ml-2">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* AI Agronomist Diagnosis Pill */}
                <div className="bg-emerald-50 rounded-2xl p-3.5 border border-emerald-100 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900">
                    <Sprout className="w-3.5 h-3.5 text-emerald-700" />
                    <span>AI Agronomist Diagnosis</span>
                  </div>
                  <p className="text-[11px] text-emerald-950 leading-relaxed">
                    Early blight detected. Consider copper-based fungicide and improve drainage.
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
