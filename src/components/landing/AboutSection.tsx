"use client";

import * as React from "react";
import Image from "next/image";
import { ABOUT_COMPANY_DATA } from "@/data/landingData";
import {
  Smartphone,
  Handshake,
  MapPin,
  Users,
  PackageCheck,
  Building2,
  Sparkles,
} from "lucide-react";

export function AboutSection() {
  const iconMap: Record<string, React.ReactNode> = {
    Smartphone: <Smartphone className="w-5 h-5 text-emerald-700" />,
    Handshake: <Handshake className="w-5 h-5 text-emerald-700" />,
    MapPin: <MapPin className="w-5 h-5 text-emerald-700" />,
    Users: <Users className="w-5 h-5 text-emerald-700" />,
    PackageCheck: <PackageCheck className="w-5 h-5 text-emerald-700" />,
  };

  return (
    <section
      id="about"
      className="py-12 sm:py-16 lg:py-20 bg-[#FAF9F5] border-b border-stone-200/80"
      aria-label="About Connect Kisan"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        
        {/* Top Eyebrow */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-stone-500">
            {ABOUT_COMPANY_DATA.tag}
          </span>
        </div>

        {/* 2-Column Split: Image on Left, Company Narrative on Right */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Photo */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] sm:aspect-[5/4] lg:aspect-square w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 bg-stone-100 group">
              <Image
                src={ABOUT_COMPANY_DATA.imageUrl}
                alt="Connect Kisan empowering Nepali farmers"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Company Story & Features */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-heading tracking-tight">
                {ABOUT_COMPANY_DATA.title}
              </h2>
              <div className="text-base sm:text-lg font-bold text-emerald-700">
                {ABOUT_COMPANY_DATA.subtitle}
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pt-1">
                {ABOUT_COMPANY_DATA.description}
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-stone-200/80 pt-6 space-y-5">
              {ABOUT_COMPANY_DATA.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3.5 sm:gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                    {iconMap[feature.iconName] || <Sparkles className="w-5 h-5 text-emerald-700" />}
                  </div>
                  <div className="space-y-0.5">
                    <h3 className="text-sm sm:text-base font-bold text-stone-900 font-heading">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* 3-Metric Sage-Green Trust Card directly under About Us */}
        <div className="bg-[#EBF3ED] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-emerald-200/60 shadow-2xs">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-emerald-200/60">
            {ABOUT_COMPANY_DATA.metrics.map((metric, idx) => (
              <div
                key={idx}
                className={`flex flex-col items-center sm:items-start text-center sm:text-left ${
                  idx > 0 ? "pt-5 sm:pt-0 sm:pl-8" : ""
                }`}
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-emerald-950 font-heading tracking-tight">
                  {metric.value}
                </div>
                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-stone-700 mt-1">
                  {iconMap[metric.iconName]}
                  <span>{metric.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
