"use client";

import * as React from "react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { APP_SCREENSHOT_SLIDES } from "@/data/landingData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Layers,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Sparkles,
  Smartphone,
  ShieldCheck,
  ArrowRight,
  Play,
  Pause,
  Maximize2,
} from "lucide-react";

export function ValueProposition() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const totalSlides = APP_SCREENSHOT_SLIDES.length;
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, totalSlides]);

  const goToSlide = (idx: number) => {
    setCurrentSlide(idx);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const activeSlide = APP_SCREENSHOT_SLIDES[currentSlide];

  const painPoints = [
    {
      title: "Fragmented Market Rates",
      desc: "Selling without knowing true daily Kalimati rates loses profit to middlemen.",
    },
    {
      title: "Delayed Disease Diagnosis",
      desc: "Lack of immediate agronomic advisory turns preventable pests into severe harvest loss.",
    },
    {
      title: "Uncertain Input Quality",
      desc: "Unverified seeds and fertilizers lead to low germination and depleted soils.",
    },
  ];

  return (
    <section
      id="about"
      className="py-16 sm:py-20 lg:py-24 bg-[#F4F2EB] border-b border-stone-200/80 relative overflow-hidden"
      aria-label="About Connect Kisan & App Showcase"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100/90 text-emerald-900 text-xs font-semibold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5 text-emerald-700" />
            <span>About Connect Kisan</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 font-heading tracking-tight text-balance">
            Agriculture shouldn&apos;t be harder than it needs to be.
          </h2>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto">
            Nepali farmers often face disjointed information, opaque market pricing, and delayed agronomy guidance. Connect Kisan brings these experiences together inside a powerful, simple mobile app.
          </p>

          <div className="pt-2">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-emerald-800 text-white font-semibold text-sm sm:text-base shadow-xs">
              <Sparkles className="w-4 h-4 text-emerald-300" />
              <span>Explore Connect Kisan App Features Below</span>
            </span>
          </div>
        </div>

        {/* -------------------------------------------------------------
            APP PHOTOS & SCREENSHOTS SLIDER
        ------------------------------------------------------------- */}
        <div
          className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-stone-200/90 shadow-xl mb-14 relative"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
        >
          {/* Slider Sub-header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-100 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-bold text-sm shadow-md">
                <Smartphone className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-stone-900 font-heading">
                  Connect Kisan Mobile Application
                </h3>
                <p className="text-xs text-stone-500">
                  Real interface screenshots from our active farmer platform
                </p>
              </div>
            </div>

            {/* Carousel Autoplay & Navigation Controls */}
            <div className="flex items-center gap-2 self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="px-3 py-1.5 rounded-lg border border-stone-200 text-stone-600 hover:bg-stone-50 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                title={isPlaying ? "Pause automatic slide transition" : "Resume autoplay"}
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Autoplay On</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 text-stone-500" />
                    <span>Paused</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={prevSlide}
                className="w-9 h-9 rounded-lg border border-stone-200 hover:bg-stone-100 flex items-center justify-center text-stone-700 transition-colors cursor-pointer"
                aria-label="Previous app screenshot"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                className="w-9 h-9 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white flex items-center justify-center transition-colors cursor-pointer shadow-xs"
                aria-label="Next app screenshot"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Slider Content Grid */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Slide Description & Highlights (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Category & Badge */}
              <div className="flex flex-wrap items-center gap-2.5">
                <Badge variant="verified" className="text-xs font-bold py-1 px-3">
                  {activeSlide.badge}
                </Badge>
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                  {activeSlide.category}
                </span>
                <span className="text-xs font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 ml-auto">
                  {currentSlide + 1} / {totalSlides}
                </span>
              </div>

              {/* Title & Nepali Title */}
              <div>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-heading tracking-tight mb-1">
                  {activeSlide.title}
                </h4>
                <p className="text-sm font-semibold text-emerald-800">
                  {activeSlide.nepaliTitle}
                </p>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                {activeSlide.description}
              </p>

              {/* Highlights List */}
              <div className="space-y-3 pt-2">
                {activeSlide.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-stone-800">
                      {h}
                    </span>
                  </div>
                ))}
              </div>

              {/* Thumbnail Selector Pills */}
              <div className="pt-4 border-t border-stone-100">
                <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-3">
                  Quick Jump to App Feature:
                </div>
                <div className="flex flex-wrap gap-2">
                  {APP_SCREENSHOT_SLIDES.map((slide, idx) => (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => goToSlide(idx)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        currentSlide === idx
                          ? "bg-emerald-800 text-white shadow-xs"
                          : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                      }`}
                    >
                      {slide.title.split(" ")[0]} {slide.title.split(" ")[1] || ""}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Mobile App Photo Container (5 cols) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[9/18] rounded-[2.5rem] bg-stone-900 p-3 shadow-2xl ring-8 ring-stone-900/10 border-4 border-stone-800">
                
                {/* Phone Speaker & Camera Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-4 bg-stone-900 rounded-full z-20 flex items-center justify-center">
                  <div className="w-10 h-1 bg-stone-700 rounded-full" />
                </div>

                {/* Screenshot Frame */}
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-emerald-950">
                  <Image
                    src={activeSlide.imageUrl}
                    alt={`${activeSlide.title} - Connect Kisan App Screenshot`}
                    fill
                    sizes="(max-width: 640px) 280px, 320px"
                    className="object-cover object-top transition-opacity duration-300"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Floating Tag over Image */}
                  <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-2.5 rounded-xl border border-stone-200/80 shadow-md">
                    <div className="flex items-center justify-between text-[11px] font-bold text-stone-900">
                      <span>{activeSlide.badge}</span>
                      <span className="text-emerald-700 font-mono">Connect Kisan</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-8 pt-6 border-t border-stone-100">
            {APP_SCREENSHOT_SLIDES.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => goToSlide(idx)}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  currentSlide === idx ? "w-8 bg-emerald-700" : "w-2.5 bg-stone-300 hover:bg-stone-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

        {/* -------------------------------------------------------------
            TRADITIONAL PAIN POINTS VS UNIFIED ECOSYSTEM SUMMARY
        ------------------------------------------------------------- */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          
          {/* Traditional Way */}
          <div className="rounded-2xl bg-white/70 p-6 sm:p-8 border border-stone-300/80 space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-stone-200">
              <div className="w-9 h-9 rounded-lg bg-stone-100 flex items-center justify-center text-stone-600 font-bold text-sm">
                ✕
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-base">The Old Disconnected Way</h4>
                <p className="text-xs text-stone-500">Uncertain prices, delayed advisory, unfair broker cuts</p>
              </div>
            </div>

            <div className="space-y-3">
              {painPoints.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                  <span className="text-stone-400 font-bold mt-0.5">•</span>
                  <div>
                    <span className="font-semibold text-stone-800">{item.title}: </span>
                    <span className="text-stone-600">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Connect Kisan Unified Solution */}
          <div className="rounded-2xl bg-white p-6 sm:p-8 border-2 border-emerald-600 shadow-md space-y-4 relative overflow-hidden">
            <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
              <div className="w-9 h-9 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-800 font-bold text-sm">
                ✓
              </div>
              <div>
                <h4 className="font-bold text-emerald-950 text-base">The Connect Kisan Advantage</h4>
                <p className="text-xs text-emerald-700">All tools integrated into one single application</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-2.5 text-xs sm:text-sm">
                <span className="text-emerald-600 font-bold mt-0.5">•</span>
                <div>
                  <span className="font-semibold text-stone-900">Direct Market Access: </span>
                  <span className="text-stone-600">Daily Kalimati wholesale rates &amp; transparent bidding.</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm">
                <span className="text-emerald-600 font-bold mt-0.5">•</span>
                <div>
                  <span className="font-semibold text-stone-900">Spoken Nepali Advisory: </span>
                  <span className="text-stone-600">Instant AI diagnostics via voice audio and photo recognition.</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm">
                <span className="text-emerald-600 font-bold mt-0.5">•</span>
                <div>
                  <span className="font-semibold text-stone-900">Traceable Provenance: </span>
                  <span className="text-stone-600">Verified farmer profiles and soil certification.</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
