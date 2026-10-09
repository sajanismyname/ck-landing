import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Store,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import Image from "next/image";

export function FinalCTA() {
  return (
    <section id="get-started" className="py-16 sm:py-20 lg:py-24 bg-emerald-900 text-white relative overflow-hidden" aria-label="Call to Action">
      {/* Organic Background Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-800/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-950/60 rounded-full blur-2xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-800/80 border border-emerald-700 text-emerald-200 text-xs font-semibold uppercase tracking-wider mb-6">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
          <span>Start Empowering Your Farm Today</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading text-white mb-6 text-balance">
          Your farm. Your market. Your future.
        </h2>

        {/* Supporting text */}
        <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed max-w-2xl mx-auto mb-10">
          Discover a simpler way to access agricultural tools, verified market buyers, agronomic knowledge, and digital farm records—built for Nepal.
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto bg-white hover:bg-emerald-50 text-emerald-950 font-bold text-base sm:text-lg px-9 py-4 rounded-2xl shadow-xl hover:scale-[1.03] active:scale-[0.98] transition-all ring-4 ring-white/20 group cursor-pointer"
          >
            <a href="https://play.google.com/store/apps/details?id=com.cliffbyte.krishi_hub" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 text-emerald-700" />
              <span>Get Started Free</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full sm:w-auto bg-transparent border-emerald-600 text-white hover:bg-emerald-800/60 hover:text-white font-semibold text-base px-7 py-4 rounded-2xl transition-all"
          >
            <a href="https://connectkisan.com/bazar" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
              <Store className="w-4 h-4 text-emerald-300" />
              <span>Explore Bazar</span>
            </a>
          </Button>
        </div>

        {/* App Store & Google Play Download Links with Hover Highlighting */}
        <div className="pt-8 border-t border-emerald-800/80 max-w-xl mx-auto">
          <p className="text-xs uppercase font-bold tracking-wider text-emerald-300/80 mb-4">
            Also Available on Mobile App
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Apple App Store */}
            <a
              href="https://apps.apple.com/us/app/connect-kisan/id6479684975"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3.5 bg-black/90 hover:bg-black text-white px-5 py-3 rounded-2xl border border-white/20 hover:border-[#0071E3] hover:ring-2 hover:ring-[#0071E3]/50 transition-all duration-300 hover:scale-105 shadow-md group cursor-pointer"
              aria-label="Download Connect Kisan on the Apple App Store"
            >
              <div className="w-8 h-8 rounded-lg overflow-hidden shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_12px_rgba(0,113,227,0.8)] flex items-center justify-center">
                <Image
                  src="/app-store-icon.png"
                  alt="Apple App Store Icon"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="text-left">
                <div className="text-[10px] text-stone-300 font-semibold uppercase tracking-wider leading-none">
                  Download on the
                </div>
                <div className="text-base font-extrabold leading-tight text-white tracking-tight">
                  App Store
                </div>
              </div>
            </a>

            {/* Google Play */}
            <a
              href="https://play.google.com/store/apps/details?id=com.cliffbyte.krishi_hub"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3.5 bg-black/90 hover:bg-black text-white px-5 py-3 rounded-2xl border border-white/20 hover:border-emerald-400 hover:ring-2 hover:ring-emerald-400/50 transition-all duration-300 hover:scale-105 shadow-md group cursor-pointer"
              aria-label="Get Connect Kisan on Google Play"
            >
              <div className="w-8 h-8 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_rgba(66,133,244,0.8)]">
                <svg className="w-7 h-7 shrink-0" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M.12 2.66a3.46 3.46 0 0 0-.12.92v24.84a3.66 3.66 0 0 0 .12.92L14 15.64Z" fill="#4285F4"/>
                  <path d="m13.64 16 6.94-6.85L5.5.51A3.72 3.72 0 0 0 3.63 0 3.64 3.64 0 0 0 .12 2.65Z" fill="#34A853"/>
                  <path d="M13.54 15.28.12 29.34a3.64 3.64 0 0 0 5.33 2.16l15.1-8.6z" fill="#EA4335"/>
                  <path d="m27.11 12.89-6.53-3.74-7.35 6.45 7.38 7.28 6.48-3.7a3.55 3.55 0 0 0 0-6.29z" fill="#FBBC04"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="text-[10px] text-stone-300 font-semibold uppercase tracking-wider leading-none">
                  GET IT ON
                </div>
                <div className="text-base font-extrabold leading-tight text-white tracking-tight">
                  Google Play
                </div>
              </div>
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-y-2 gap-x-5 text-xs text-emerald-200">
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              iOS 12.0+ &amp; Android 6.0+
            </span>
            <span className="text-emerald-500">•</span>
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Web Browser Supported
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
