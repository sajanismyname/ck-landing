"use client";

import * as React from "react";
import { KNOWLEDGE_ARTICLES } from "@/data/landingData";
import { useCarousel } from "@/hooks/useCarousel";
import { CarouselOverlayArrows } from "@/components/ui/carousel-controls";
import {
  BookOpen,
  Wheat,
  Beef,
  Mountain,
  ArrowRight,
  Clock,
} from "lucide-react";

export function KnowledgeSection() {
  const {
    containerRef,
    canScrollLeft,
    canScrollRight,
    scrollLeft,
    scrollRight,
  } = useCarousel();

  const iconMap: Record<string, React.ReactNode> = {
    Wheat: <Wheat className="w-5 h-5 text-emerald-700" />,
    Beef: <Beef className="w-5 h-5 text-emerald-700" />,
    Mountain: <Mountain className="w-5 h-5 text-emerald-700" />,
  };

  return (
    <section id="knowledge" className="py-12 sm:py-16 lg:py-20 bg-[#F4F2EB] border-y border-stone-200/80" aria-label="Knowledge Hub">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        
        {/* Section Header (2-Row Responsive Wrapping on Mobile) */}
        <div className="flex flex-col gap-3.5 pb-4 border-b border-stone-200/80">
          {/* Row 1: Label, Title & Description */}
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-semibold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5 text-emerald-700" />
              <span>Krishi Gyan & Advisory</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 font-heading tracking-tight">
              Learn. Plan. Grow.
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Practical agronomic guides, climate-smart farming tutorials, and livestock management resources tailored for Nepal&apos;s agro-climatic zones.
            </p>
          </div>

          {/* Row 2: Top CTA Link */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <a
              href="https://connectkisan.com/knowledge-bank"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-800 hover:text-emerald-950 transition-colors group"
            >
              <span>Explore Knowledge Hub</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* 3 Knowledge Cards Slider / Equal Height Grid */}
        <div className="relative group">
          <CarouselOverlayArrows
            onPrev={scrollLeft}
            onNext={scrollRight}
            canPrev={canScrollLeft}
            canNext={canScrollRight}
            prevLabel="Previous articles"
            nextLabel="Next articles"
            topOffsetClass="top-1/2"
            className="lg:hidden"
          />

          <div
            ref={containerRef}
            role="region"
            aria-roledescription="carousel"
            aria-label="Agricultural Knowledge Guides Carousel"
            className="flex overflow-x-auto scroll-smooth gap-4 sm:gap-6 pb-2 no-scrollbar [scroll-snap-type:x_mandatory] lg:grid lg:grid-cols-3"
          >
          {KNOWLEDGE_ARTICLES.map((article) => (
            <div
              key={article.id}
              className="shrink-0 [scroll-snap-align:start] w-[80vw] max-w-[320px] sm:w-[320px] lg:w-auto bg-white rounded-2xl p-5 sm:p-6 border border-stone-200/90 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:border-emerald-300"
            >
              <div className="space-y-3">
                {/* Header: Icon & Category */}
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                    {iconMap[article.iconName]}
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-stone-500 font-medium">
                    <Clock className="w-3 h-3 text-stone-400" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Category Pill */}
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
                    {article.category} • {article.nepaliCategory}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-stone-900 font-heading group-hover:text-emerald-800 transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-xs text-stone-500 font-medium mt-0.5">
                    {article.nepaliTitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed line-clamp-3">
                  {article.description}
                </p>
              </div>

              {/* Bottom Action (Always Aligned at Card Base) */}
              <div className="pt-4 mt-5 border-t border-stone-100">
                <a
                  href={article.href}
                  className="inline-flex items-center text-xs sm:text-sm font-bold text-emerald-700 hover:text-emerald-900 group-hover:translate-x-1 transition-all"
                >
                  <span>Read Full Guide</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </a>
              </div>
            </div>
          ))}
          </div>
        </div>

      </div>
    </section>
  );
}
