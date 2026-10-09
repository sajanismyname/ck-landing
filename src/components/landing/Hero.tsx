"use client";

import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Mic,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  MapPin,
  Sprout,
  Droplets,
  CloudRain,
  Store,
  Bot,
  Layers,
  ThermometerSun,
} from "lucide-react";

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const totalSlides = 3;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [isHovered, currentSlide]);

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

          {/* Right Column: Connect Kisan Live Interactive Card Slider (5 cols on lg) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Card Container with Inset Navigation Controls */}
              <div
                className="relative rounded-3xl bg-white p-5 sm:p-6 shadow-xl border border-stone-200/90 overflow-hidden transition-all"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                
                {/* Previous Slide Arrow (<) - Inset on Left Edge */}
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous slide"
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/95 hover:bg-white text-stone-700 hover:text-stone-950 shadow-md border border-stone-200/90 flex items-center justify-center transition-all hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 cursor-pointer"
                  title="Previous slide"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                {/* Next Slide Arrow (>) - Inset on Right Edge */}
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next slide"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/95 hover:bg-white text-stone-700 hover:text-stone-950 shadow-md border border-stone-200/90 flex items-center justify-center transition-all hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 cursor-pointer"
                  title="Next slide"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                {/* Card Content with Slide Views */}
                <div className="px-3 sm:px-4 space-y-4">
                  
                  {/* Slide 0: Today's Market Rates Snapshot */}
                  {currentSlide === 0 && (
                    <div className="space-y-4 animate-in fade-in duration-300">
                      {/* Header */}
                      <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-xl bg-emerald-700 flex items-center justify-center text-white font-bold text-xs shadow-2xs">
                            CK
                          </div>
                          <div>
                            <div className="text-xs font-bold text-stone-900 leading-none">Connect Kisan</div>
                            <div className="text-[10px] text-stone-500 mt-0.5">Live Kalimati mandi prices</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-[10px] font-bold text-emerald-800">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                          <span>Live Index</span>
                        </div>
                      </div>

                      {/* Market Rates List */}
                      <div className="bg-stone-50 rounded-2xl p-3.5 sm:p-4 border border-stone-100 space-y-2.5">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-stone-800">Today&apos;s Market Rates</span>
                          <a
                            href="https://connectkisan.com/kalimati-market-price"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-0.5"
                          >
                            <span>View All</span>
                            <ArrowRight className="w-3 h-3" />
                          </a>
                        </div>

                        <div className="space-y-2 text-xs">
                          <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-stone-100 shadow-2xs">
                            <span className="text-stone-700 font-medium">Tomato (गोलभेडा)</span>
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-stone-900">Rs. 65/kg</span>
                              <span className="text-[10px] font-semibold text-emerald-600">↑ 8.2%</span>
                            </div>
                          </div>

                          <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-stone-100 shadow-2xs">
                            <span className="text-stone-700 font-medium">Ginger (अदुवा)</span>
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-stone-900">Rs. 230/kg</span>
                              <span className="text-[10px] font-semibold text-stone-500">→ Stable</span>
                            </div>
                          </div>

                          <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-stone-100 shadow-2xs">
                            <span className="text-stone-700 font-medium">Cardamom (अलैंची)</span>
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-stone-900">Rs. 92,000/kg</span>
                              <span className="text-[10px] font-semibold text-emerald-600">↑ 4.5%</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Ask Connect Kisan Voice Prompt */}
                      <div className="bg-stone-50 rounded-2xl p-3 border border-stone-100 space-y-1.5">
                        <div className="flex items-center gap-2 text-xs font-bold text-stone-800">
                          <Mic className="w-3.5 h-3.5 text-emerald-700" />
                          <span>Ask Connect Kisan (Nepali AI)</span>
                        </div>
                        <div className="flex items-center justify-between bg-white px-3 py-1.5 rounded-xl border border-stone-200 text-xs">
                          <span className="text-stone-500 italic text-[11px] truncate">
                            मेरो आलुको पातमा किन सेतो लागेको छ?
                          </span>
                          <span className="w-6 h-6 rounded-lg bg-emerald-700 text-white flex items-center justify-center shrink-0 ml-1.5">
                            <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>

                      {/* AI Diagnosis */}
                      <div className="bg-emerald-50 rounded-2xl p-3 border border-emerald-100 space-y-0.5">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900">
                          <Sprout className="w-3.5 h-3.5 text-emerald-700" />
                          <span>AI Agronomist Diagnosis</span>
                        </div>
                        <p className="text-[11px] text-emerald-950 leading-relaxed">
                          Early blight detected. Spray copper oxychloride and maintain soil drainage.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Slide 1: Smart Precision Soil & Weather Advisory */}
                  {currentSlide === 1 && (
                    <div className="space-y-4 animate-in fade-in duration-300">
                      {/* Header */}
                      <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-xl bg-amber-600 flex items-center justify-center text-white font-bold text-xs shadow-2xs">
                            <Droplets className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-stone-900 leading-none">Soil & Climate Intel</div>
                            <div className="text-[10px] text-stone-500 mt-0.5">Real-time farm telemetry</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-[10px] font-bold text-amber-800">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-600 animate-pulse" />
                          <span>Telemetry</span>
                        </div>
                      </div>

                      {/* Soil Metrics */}
                      <div className="grid grid-cols-3 gap-2">
                        <div className="bg-stone-50 p-2.5 rounded-xl border border-stone-100 text-center">
                          <div className="text-[10px] font-semibold text-stone-500">Moisture</div>
                          <div className="text-sm font-extrabold text-emerald-700 mt-0.5">68%</div>
                          <div className="text-[9px] text-emerald-600 font-medium">Optimal</div>
                        </div>
                        <div className="bg-stone-50 p-2.5 rounded-xl border border-stone-100 text-center">
                          <div className="text-[10px] font-semibold text-stone-500">Soil Temp</div>
                          <div className="text-sm font-extrabold text-stone-900 mt-0.5">22.4°C</div>
                          <div className="text-[9px] text-stone-500 font-medium">Normal</div>
                        </div>
                        <div className="bg-stone-50 p-2.5 rounded-xl border border-stone-100 text-center">
                          <div className="text-[10px] font-semibold text-stone-500">NPK Index</div>
                          <div className="text-sm font-extrabold text-blue-700 mt-0.5">Healthy</div>
                          <div className="text-[9px] text-blue-600 font-medium">7.2 pH</div>
                        </div>
                      </div>

                      {/* Weather Advisory Card */}
                      <div className="bg-blue-50/80 rounded-2xl p-3.5 border border-blue-100 space-y-1.5">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-blue-900">
                            <CloudRain className="w-3.5 h-3.5 text-blue-700" />
                            <span>Localized Micro-Weather Alert</span>
                          </div>
                          <span className="text-[10px] font-semibold text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full">Rain: 80%</span>
                        </div>
                        <p className="text-[11px] text-blue-950 leading-relaxed">
                          Moderate rainfall expected in 18 hours. Defer foliar sprays and clear field runoff furrows.
                        </p>
                      </div>

                      {/* Precision Advisory Output */}
                      <div className="bg-emerald-50 rounded-2xl p-3 border border-emerald-100 space-y-1">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900">
                          <Bot className="w-3.5 h-3.5 text-emerald-700" />
                          <span>Fertilizer Dosage Recommendation</span>
                        </div>
                        <p className="text-[11px] text-emerald-950 leading-relaxed">
                          For Paddy (2 Ropani): 10kg DAP, 5kg MOP during land prep. Top-dress with Urea at 25 days.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Slide 2: Direct Kisan Bazar Deals */}
                  {currentSlide === 2 && (
                    <div className="space-y-4 animate-in fade-in duration-300">
                      {/* Header */}
                      <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-xl bg-emerald-800 flex items-center justify-center text-white font-bold text-xs shadow-2xs">
                            <Store className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-stone-900 leading-none">Direct Kisan Bazar</div>
                            <div className="text-[10px] text-stone-500 mt-0.5">Zero middleman margins</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-[10px] font-bold text-emerald-800">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                          <span>Verified</span>
                        </div>
                      </div>

                      {/* Featured Deal Box */}
                      <div className="bg-stone-50 rounded-2xl p-3.5 border border-stone-100 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-stone-800">Direct Batch Listing</span>
                          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">Active Lot</span>
                        </div>

                        <div className="p-2.5 rounded-xl bg-white border border-stone-200 shadow-2xs space-y-1.5">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-stone-900">Organic Sweet Orange (Junar)</span>
                            <span className="text-xs font-extrabold text-emerald-700">Rs. 110/kg</span>
                          </div>
                          <div className="flex items-center justify-between text-[11px] text-stone-600">
                            <span>Origin: Sindhuli</span>
                            <span className="font-semibold text-stone-800">500 kg Lot Available</span>
                          </div>
                        </div>
                      </div>

                      {/* Buyer Connect & Escrow Protection */}
                      <div className="bg-emerald-50 rounded-2xl p-3 border border-emerald-100 space-y-1.5">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                          <span>Secure Payment & Fast Transport</span>
                        </div>
                        <p className="text-[11px] text-emerald-950 leading-relaxed">
                          Connected directly with verified wholesalers in Kathmandu & Pokhara. Guaranteed payment on delivery.
                        </p>
                      </div>

                      {/* Quick Explore Link */}
                      <a
                        href="https://connectkisan.com/bazar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-2 bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold rounded-xl transition-all shadow-2xs"
                      >
                        <span>Browse 1,200+ Live Listings</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}

                </div>

                {/* Pagination Dots Indicator */}
                <div className="flex items-center justify-center gap-1.5 pt-4">
                  {[0, 1, 2].map((idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrentSlide(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        currentSlide === idx
                          ? "w-6 bg-emerald-700"
                          : "w-2 bg-stone-300 hover:bg-stone-400"
                      }`}
                    />
                  ))}
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
