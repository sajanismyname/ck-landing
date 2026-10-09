"use client";

import * as React from "react";
import { Sprout, ShoppingCart, ShieldCheck, ArrowRight } from "lucide-react";

export function FeaturePillars() {
  return (
    <section id="farmers" className="py-16 sm:py-20 lg:py-24 bg-[#FAF9F5]" aria-label="Core Capabilities">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header matching mockup */}
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 font-heading tracking-tight">
            What can you do on Connect Kisan?
          </h2>
        </div>

        {/* 3 Clean Pillars Grid matching mockup */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          
          {/* Card 1: Grow */}
          <div className="rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-6 border border-stone-200 shadow-2xs hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                <Sprout className="w-5 h-5 text-emerald-700" />
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold text-stone-900 font-heading">
                  Grow
                </h3>
                <p className="text-xs sm:text-sm text-stone-500 mt-0.5 leading-relaxed">
                  Get expert advice, knowledge and digital farming tools.
                </p>
              </div>

              <ul className="space-y-2 pt-2.5 border-t border-stone-100 text-xs sm:text-sm text-stone-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  <span>AI / Expert Advisory</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  <span>Knowledge Hub</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  <span>Farm Planning</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  <span>Precision Farming</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 mt-4 border-t border-stone-100">
              <a
                href="#digital-tools"
                className="inline-flex items-center text-xs sm:text-sm font-bold text-stone-900 hover:text-emerald-700 transition-colors group-hover:translate-x-1"
              >
                <span>Explore Farming Tools</span>
                <ArrowRight className="w-4 h-4 ml-1.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Card 2: Buy & Sell */}
          <div className="rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-6 border border-stone-200 shadow-2xs hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center">
                <ShoppingCart className="w-5 h-5 text-amber-700" />
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold text-stone-900 font-heading">
                  Buy &amp; Sell
                </h3>
                <p className="text-xs sm:text-sm text-stone-500 mt-0.5 leading-relaxed">
                  Find farming supplies, equipment and market opportunities.
                </p>
              </div>

              <ul className="space-y-2 pt-2.5 border-t border-stone-100 text-xs sm:text-sm text-stone-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                  <span>Marketplace</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                  <span>Digital Bidding</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                  <span>Agricultural Inputs</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                  <span>Market Access</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 mt-4 border-t border-stone-100">
              <a
                href="https://connectkisan.com/bazar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs sm:text-sm font-bold text-stone-900 hover:text-emerald-700 transition-colors group-hover:translate-x-1"
              >
                <span>Explore Bazar</span>
                <ArrowRight className="w-4 h-4 ml-1.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Card 3: Build Trust */}
          <div className="rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-6 border border-stone-200 shadow-2xs hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-teal-700" />
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold text-stone-900 font-heading">
                  Build Trust
                </h3>
                <p className="text-xs sm:text-sm text-stone-500 mt-0.5 leading-relaxed">
                  Ensure transparency and product authenticity.
                </p>
              </div>

              <ul className="space-y-2 pt-2.5 border-t border-stone-100 text-xs sm:text-sm text-stone-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                  <span>Farm Traceability</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                  <span>Farmer Information</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                  <span>Product Verification</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 mt-4 border-t border-stone-100">
              <a
                href="#about"
                className="inline-flex items-center text-xs sm:text-sm font-bold text-stone-900 hover:text-emerald-700 transition-colors group-hover:translate-x-1"
              >
                <span>Explore More</span>
                <ArrowRight className="w-4 h-4 ml-1.5 transition-transform" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
