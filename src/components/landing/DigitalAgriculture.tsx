"use client";

import * as React from "react";
import { useState } from "react";
import { DIGITAL_AG_FEATURES } from "@/data/landingData";
import { Badge } from "@/components/ui/badge";
import {
  Mic,
  Activity,
  FileSpreadsheet,
  PackageCheck,
  Smartphone,
  Sparkles,
  CloudSun,
  ShieldCheck,
  Check,
  Play,
  Volume2,
} from "lucide-react";

export function DigitalAgriculture() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const iconMap: Record<string, React.ReactNode> = {
    Mic: <Mic className="w-5 h-5 text-emerald-700" />,
    Activity: <Activity className="w-5 h-5 text-emerald-700" />,
    FileSpreadsheet: <FileSpreadsheet className="w-5 h-5 text-emerald-700" />,
    PackageCheck: <PackageCheck className="w-5 h-5 text-emerald-700" />,
  };

  return (
    <section id="digital-tools" className="py-16 sm:py-20 lg:py-24 bg-[#F4F2EB] border-b border-stone-200/80" aria-label="Digital Agriculture Section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-semibold uppercase tracking-wider">
            <Smartphone className="w-3.5 h-3.5 text-emerald-700" />
            <span>Digital Agriculture in Action</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 font-heading tracking-tight text-balance">
            Technology that works for farmers.
          </h2>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto">
            Practical digital tools built specifically for local terrain and language, simplifying diagnostics, field monitoring, and financial planning.
          </p>
        </div>

        {/* Interactive Dual-Column Layout with Equal Height Stretch */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Feature Selection Cards (5 cols on lg) */}
          <div className="lg:col-span-5 h-full flex flex-col justify-between gap-2.5 sm:gap-3">
            {DIGITAL_AG_FEATURES.map((feature, idx) => (
              <button
                key={feature.title}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex items-start gap-3.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 ${
                  activeTab === idx
                    ? "bg-white border-emerald-600 shadow-md ring-1 ring-emerald-600 flex-1 min-h-0"
                    : "bg-white/70 border-stone-200 hover:bg-white hover:border-stone-300 flex-1 min-h-0"
                }`}
              >
                <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                  activeTab === idx ? "bg-emerald-100 text-emerald-800" : "bg-stone-100 text-stone-600"
                }`}>
                  {iconMap[feature.iconName]}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center justify-between gap-1.5 mb-1">
                    <h3 className="text-sm sm:text-[15px] font-bold text-stone-900 leading-snug break-words">
                      {feature.title}
                    </h3>
                    <Badge variant={activeTab === idx ? "verified" : "secondary"} className="text-[10px] shrink-0 font-medium px-2 py-0.5">
                      {feature.badge}
                    </Badge>
                  </div>
                  
                  {/* Nepali subtitle */}
                  <p className="text-[11px] sm:text-xs text-stone-500 font-medium mb-1">
                    {feature.nepaliTitle}
                  </p>
                  
                  {/* Description: full on desktop, expanded on active in mobile */}
                  <p className={`text-xs text-stone-600 leading-relaxed ${
                    activeTab === idx ? "block" : "hidden sm:line-clamp-2"
                  }`}>
                    {feature.description}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Right Column: Realistic Application UI Preview (7 cols on lg) - Stable Equal Height Console */}
          <div className="lg:col-span-7 h-full flex flex-col">
            <div className="h-full flex flex-col justify-between bg-white rounded-3xl p-5 sm:p-7 lg:p-8 border border-stone-200/90 shadow-xl relative overflow-hidden min-h-[460px] sm:min-h-[500px]">
              
              {/* Top Navigation Bar of the Mockup */}
              <div className="flex items-center justify-between pb-3.5 border-b border-stone-100 mb-4 sm:mb-6">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-2xs">
                    CK
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-bold text-stone-900 truncate">Farmer Advisory Console</h4>
                    <p className="text-xs text-stone-500 truncate">Live Field Diagnostics • Nuwakot Farm Cluster</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Online
                  </span>
                </div>
              </div>

              {/* Dynamic Mockup Content Area with Smooth Transitions */}
              <div className="flex-1 flex flex-col justify-center space-y-4 min-h-0 py-1">
                {activeTab === 0 && (
                  <div className="space-y-3.5 animate-in fade-in duration-200">
                    <div className="bg-stone-50 rounded-2xl p-3.5 sm:p-4 border border-stone-200/80 space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs font-semibold text-stone-700">
                          <Volume2 className="w-4 h-4 text-emerald-700 shrink-0" />
                          <span>Voice Query Recording (नेपाली बोली)</span>
                        </div>
                        <span className="text-[10px] text-stone-500 font-mono shrink-0">00:06 / Audio</span>
                      </div>

                      <div className="bg-white rounded-xl p-2.5 sm:p-3 border border-stone-200 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                          <Play className="w-4 h-4 fill-white ml-0.5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="h-2 bg-emerald-100 rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-600 w-2/3 rounded-full" />
                          </div>
                        </div>
                        <span className="text-xs font-mono text-stone-500 shrink-0">0:04</span>
                      </div>
                      <p className="text-xs text-stone-600 italic mt-1 leading-relaxed">
                        “टमाटरको बोटमा पात पहेँलो भई ओइलाएको छ, के उपचार गर्ने?”
                      </p>
                    </div>

                    <div className="bg-emerald-950 text-white rounded-2xl p-4 sm:p-5 border border-emerald-900 space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          Agronomist AI Diagnosis
                        </span>
                        <span className="text-[10px] bg-emerald-800 text-emerald-200 px-2 py-0.5 rounded font-mono shrink-0">98% Match</span>
                      </div>

                      <div className="text-sm font-semibold text-white">
                        Bacterial Wilt / जीवाणुजन्य ओइलाउने रोग
                      </div>

                      <div className="space-y-1.5 text-xs text-emerald-100/90 leading-relaxed">
                        <div className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>Isolate infected stems immediately to prevent irrigation transmission.</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>Apply biological Trichoderma viride powder to root zones during evening watering.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 1 && (
                  <div className="space-y-3.5 animate-in fade-in duration-200">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="bg-stone-50 p-3.5 sm:p-4 rounded-xl border border-stone-200">
                        <div className="text-xs text-stone-500 font-medium">Soil Moisture (माटो चिसोपन)</div>
                        <div className="text-xl font-bold text-stone-900 mt-1">42% <span className="text-xs font-normal text-emerald-600">(Optimal)</span></div>
                        <div className="w-full bg-stone-200 h-1.5 rounded-full mt-2">
                          <div className="bg-emerald-600 h-1.5 rounded-full w-[42%]" />
                        </div>
                      </div>
                      <div className="bg-stone-50 p-3.5 sm:p-4 rounded-xl border border-stone-200">
                        <div className="text-xs text-stone-500 font-medium">Field NDVI Vegetation Index</div>
                        <div className="text-xl font-bold text-stone-900 mt-1">0.78 <span className="text-xs font-normal text-emerald-600">(Vigorous)</span></div>
                        <div className="w-full bg-stone-200 h-1.5 rounded-full mt-2">
                          <div className="bg-emerald-600 h-1.5 rounded-full w-[78%]" />
                        </div>
                      </div>
                    </div>

                    <div className="bg-emerald-50 rounded-xl p-3.5 sm:p-4 border border-emerald-200 flex items-start sm:items-center gap-3 text-xs text-emerald-900">
                      <CloudSun className="w-6 h-6 text-emerald-700 shrink-0 mt-0.5 sm:mt-0" />
                      <div className="leading-relaxed">
                        <strong>Weather Advisory:</strong> Moderate rainfall expected in next 36 hours. Delay foliar nitrogen spray until skies clear.
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 2 && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-1 text-xs">
                        <span className="font-bold text-stone-900">Seasonal Farm Plan (2026 Season)</span>
                        <span className="text-emerald-700 font-semibold bg-emerald-100 px-2 py-0.5 rounded">Ready for Bank Loan</span>
                      </div>
                      <div className="text-xs text-stone-600 leading-relaxed">
                        <strong>Crop:</strong> Orthodox Tea + Organic Ginger intercropping (8 Ropani)
                      </div>
                      <div className="text-xs text-stone-600 leading-relaxed">
                        <strong>Projected Yield:</strong> 3,200 kg • <strong>Est. Revenue:</strong> रु ४,८०,०००
                      </div>
                    </div>
                    <div className="p-3 bg-white border border-stone-200 rounded-xl flex flex-wrap items-center justify-between gap-2 text-xs">
                      <span className="text-stone-700 font-medium">Export Formatted PDF Proposal</span>
                      <button type="button" className="text-emerald-700 font-bold hover:underline cursor-pointer">
                        Download Proposal
                      </button>
                    </div>
                  </div>
                )}

                {activeTab === 3 && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div className="p-3.5 sm:p-4 bg-stone-50 rounded-xl border border-stone-200 flex items-center justify-between gap-3">
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-stone-900 truncate">Certified Organic Seedlings</div>
                        <div className="text-[11px] text-stone-500 truncate">Ilam Orthodox Nursery • Batch Verified</div>
                      </div>
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-md shrink-0">
                        In Stock
                      </span>
                    </div>
                    <div className="p-3.5 sm:p-4 bg-stone-50 rounded-xl border border-stone-200 flex items-center justify-between gap-3">
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-stone-900 truncate">Bio-Fertilizer &amp; Organic Potash</div>
                        <div className="text-[11px] text-stone-500 truncate">Government Lab Tested • 50kg bags</div>
                      </div>
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-md shrink-0">
                        Verified Supplier
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Trust Tag */}
              <div className="mt-4 sm:mt-6 pt-3.5 border-t border-stone-100 flex flex-wrap items-center justify-between gap-2 text-xs text-stone-500">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Available on iOS, Android, and Web</span>
                </div>
                <span className="font-semibold text-emerald-700">Free Farmer Access</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
