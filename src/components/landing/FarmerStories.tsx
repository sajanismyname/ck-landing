"use client";

import * as React from "react";
import { useState } from "react";
import { FARMER_STORIES } from "@/data/landingData";
import {
  Quote,
  ChevronLeft,
  ChevronRight,
  MapPin,
  TrendingUp,
  Award,
  CheckCircle2,
} from "lucide-react";

export function FarmerStories() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevStory = () => {
    setCurrentIndex((prev) => (prev === 0 ? FARMER_STORIES.length - 1 : prev - 1));
  };

  const nextStory = () => {
    setCurrentIndex((prev) => (prev === FARMER_STORIES.length - 1 ? 0 : prev + 1));
  };

  const story = FARMER_STORIES[currentIndex];

  return (
    <section id="stories" className="py-16 sm:py-20 lg:py-24 bg-[#FAF9F5]" aria-label="Farmer Success Stories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-emerald-700" />
            <span>Community Impact</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 font-heading tracking-tight">
            Real farmers. Real experiences.
          </h2>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto">
            See how growers and agricultural cooperatives across Nepal are transforming their harvest yields and market income.
          </p>
        </div>

        {/* Featured Testimonial Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-stone-200/90 shadow-lg relative overflow-hidden">
          
          {/* Subtle Quote Icon Backdrop */}
          <Quote className="absolute top-6 right-8 w-24 h-24 text-emerald-100/60 -z-0 pointer-events-none" />

          <div className="relative z-10 flex flex-col justify-between min-h-[300px]">
            
            {/* Top Row: Farmer Profile & Location */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-100">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-700 text-white flex items-center justify-center font-bold text-lg font-heading shadow-md">
                  {story.initials}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 font-heading">
                    {story.name}
                  </h3>
                  <div className="text-xs sm:text-sm text-emerald-800 font-medium">
                    {story.role}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-stone-500 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-stone-400" />
                    <span>{story.location}</span>
                  </div>
                </div>
              </div>

              {/* Impact Metric Pill */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-3 px-4 text-left sm:text-right shrink-0">
                <div className="text-lg sm:text-xl font-extrabold text-emerald-800 font-heading flex items-center sm:justify-end gap-1">
                  <TrendingUp className="w-4 h-4 text-emerald-600" />
                  <span>{story.impactMetric}</span>
                </div>
                <div className="text-[11px] text-emerald-700 font-medium">
                  {story.impactLabel}
                </div>
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="py-6 sm:py-8">
              <p className="text-base sm:text-xl text-stone-700 font-medium leading-relaxed italic">
                “{story.quote}”
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs text-stone-500">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Verified Cooperative Member • {story.farmType}</span>
              </div>
            </div>

            {/* Bottom Controls: Carousel Navigation & Pagination */}
            <div className="pt-6 border-t border-stone-100 flex items-center justify-between">
              
              {/* Story Counter */}
              <span className="text-xs font-semibold text-stone-500 font-mono">
                Story {currentIndex + 1} of {FARMER_STORIES.length}
              </span>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prevStory}
                  className="w-10 h-10 rounded-full border border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-700 flex items-center justify-center transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-600"
                  aria-label="Previous farmer story"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={nextStory}
                  className="w-10 h-10 rounded-full border border-stone-200 bg-emerald-700 hover:bg-emerald-800 text-white flex items-center justify-center transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-600 shadow-xs"
                  aria-label="Next farmer story"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
