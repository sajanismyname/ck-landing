import * as React from "react";
import { WORKFLOW_STEPS } from "@/data/landingData";
import { LineChart, Compass, Sprout, BadgeCheck } from "lucide-react";

export function HowItWorks() {
  const iconMap: Record<string, React.ReactNode> = {
    LineChart: <LineChart className="w-5 h-5 text-emerald-700" />,
    Compass: <Compass className="w-5 h-5 text-emerald-700" />,
    Sprout: <Sprout className="w-5 h-5 text-emerald-700" />,
    BadgeCheck: <BadgeCheck className="w-5 h-5 text-emerald-700" />,
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F4F2EB] border-y border-stone-200/80" aria-label="How It Works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 sm:mb-20">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-emerald-800">
            A Clear 4-Step Process
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 font-heading tracking-tight">
            From farm to market, made simpler.
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto">
            A cohesive digital pathway supporting you at every stage of the agricultural season.
          </p>
        </div>

        {/* Steps Container: Desktop Horizontal with connecting line, Mobile Vertical Timeline */}
        <div className="relative">
          
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-emerald-200/90 -translate-y-12 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {WORKFLOW_STEPS.map((step, idx) => (
              <div
                key={step.stepNumber}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/90 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
              >
                <div>
                  {/* Top indicator & Step number */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                      {iconMap[step.iconName]}
                    </div>
                    <span className="text-xl font-extrabold text-emerald-700/40 font-heading">
                      {step.stepNumber}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="mb-3">
                    <h3 className="text-lg font-bold text-stone-900 font-heading">
                      {step.stepNumber} — {step.title}
                    </h3>
                    <p className="text-xs font-semibold text-emerald-700">
                      {step.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom step tag */}
                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-600 font-medium">
                  <span>Phase {idx + 1} of 4</span>
                  <span className="text-emerald-700 font-semibold">Active Support</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
