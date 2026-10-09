import * as React from "react";
import { TRUST_STATS } from "@/data/landingData";
import { Users, Tractor, Award, MapPin, PackageCheck, Store, Star } from "lucide-react";

export function TrustStats() {
  const iconMap: Record<string, React.ReactNode> = {
    Users: <Users className="w-5 h-5 text-emerald-700" />,
    PackageCheck: <PackageCheck className="w-5 h-5 text-emerald-700" />,
    Store: <Store className="w-5 h-5 text-emerald-700" />,
    Star: <Star className="w-5 h-5 text-emerald-700" />,
    Tractor: <Tractor className="w-5 h-5 text-emerald-700" />,
    Award: <Award className="w-5 h-5 text-emerald-700" />,
    MapPin: <MapPin className="w-5 h-5 text-emerald-700" />,
  };

  return (
    <section className="bg-white border-y border-stone-200/80 py-10 sm:py-12" aria-label="Trust Statistics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-8">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-emerald-800">
            Trusted by Nepal&apos;s Farming Community
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-stone-100">
          {TRUST_STATS.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center text-center px-4 ${idx > 0 ? "pt-6 sm:pt-0" : ""}`}
            >
              <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center mb-3 border border-emerald-100">
                {iconMap[stat.iconName]}
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight font-heading">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-stone-800 mt-1">
                {stat.label}
              </div>
              {stat.subtext && (
                <div className="text-xs text-stone-500 mt-0.5 max-w-[180px]">
                  {stat.subtext}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
