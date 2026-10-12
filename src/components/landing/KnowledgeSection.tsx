"use client";

import * as React from "react";
import Image from "next/image";
import { KNOWLEDGE_ARTICLES } from "@/data/landingData";
import { useCarousel } from "@/hooks/useCarousel";
import { CarouselOverlayArrows } from "@/components/ui/carousel-controls";
import {
  BookOpen,
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

  return (
    <section id="knowledge" className="py-12 sm:py-16 lg:py-20 bg-[#FAF9F5] border-y border-stone-200/80" aria-label="Knowledge Hub">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        
        {/* Section Header matching Mockup */}
        <div className="flex flex-col gap-3.5 pb-4 border-b border-stone-200/80">
          {/* Row 1: Label, Title & Description */}
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-semibold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5 text-emerald-700" />
              <span>KRISHI GYAN &amp; ADVISORY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 font-heading tracking-tight">
              Latest Agricultural Guides &amp; Insights
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Practical agronomic guides, climate-smart farming tutorials, and government subsidy procedures tailored for Nepal&apos;s farming community.
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
              <span>View all articles</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* 3 Photo-Rich Knowledge Cards Grid / Carousel */}
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
            className="flex overflow-x-auto scroll-smooth gap-5 sm:gap-6 pb-2 no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden [scroll-snap-type:x_mandatory] lg:grid lg:grid-cols-3"
          >
            {KNOWLEDGE_ARTICLES.map((article) => (
              <a
                key={article.id}
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 [scroll-snap-align:start] w-[80vw] max-w-[340px] sm:w-[320px] lg:w-auto bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-2xs hover:shadow-md hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  {/* Photo Thumbnail with Badge */}
                  <div className="relative aspect-[16/10] w-full bg-stone-100 overflow-hidden">
                    {article.imageUrl && (
                      <Image
                        src={article.imageUrl}
                        alt={article.title}
                        fill
                        sizes="(max-width: 1024px) 80vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                    {/* Tag badge over image */}
                    {article.tag && (
                      <div className="absolute top-2.5 left-2.5">
                        <span className="bg-white/95 backdrop-blur-xs text-emerald-900 font-extrabold text-[9px] sm:text-[10px] px-2 py-0.5 rounded shadow-xs uppercase tracking-wider">
                          {article.tag}
                        </span>
                      </div>
                    )}

                    {/* Read Time tag */}
                    <div className="absolute bottom-2 right-2 flex items-center gap-1 text-[10px] text-white/95 font-medium bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded">
                      <Clock className="w-3 h-3 text-stone-300" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5 space-y-2">
                    {/* Category */}
                    <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
                      {article.category}
                    </div>

                    {/* Title */}
                    <h3 className="text-sm sm:text-base font-bold text-stone-900 font-heading group-hover:text-emerald-800 transition-colors leading-snug line-clamp-2">
                      {article.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-stone-600 leading-relaxed line-clamp-2">
                      {article.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="px-4 sm:px-5 py-3 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-emerald-700 group-hover:text-emerald-900 transition-colors">
                  <span>Read Full Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
