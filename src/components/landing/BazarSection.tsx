"use client";

import * as React from "react";
import { useState } from "react";
import Image from "next/image";
import { BAZAR_CATEGORIES, BAZAR_CURATED_PRODUCTS } from "@/data/landingData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ShoppingBag,
  ShoppingCart,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sprout,
  Tractor,
  Wrench,
  Layers,
  Coffee,
  Store,
  Tag,
  Sparkles,
  TrendingUp,
} from "lucide-react";

export function BazarSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [cartCount, setCartCount] = useState<number>(0);
  const [addedItem, setAddedItem] = useState<string | null>(null);

  const iconMap: Record<string, React.ReactNode> = {
    Sprout: <Sprout className="w-4 h-4 text-emerald-700" />,
    Tractor: <Tractor className="w-4 h-4 text-emerald-700" />,
    Wrench: <Wrench className="w-4 h-4 text-emerald-700" />,
    Layers: <Layers className="w-4 h-4 text-emerald-700" />,
    Coffee: <Coffee className="w-4 h-4 text-emerald-700" />,
  };

  const handleAddToCart = (productName: string) => {
    setCartCount((prev) => prev + 1);
    setAddedItem(productName);
    setTimeout(() => {
      setAddedItem(null);
    }, 2500);
  };

  return (
    <section
      id="bazar"
      className="py-16 sm:py-20 lg:py-24 bg-[#FBFBEE] border-b border-stone-200/80 relative overflow-hidden"
      aria-label="Connect Kisan Bazar"
    >
      {/* Organic background accent */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-amber-100/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-80 h-80 rounded-full bg-emerald-100/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14 sm:space-y-16">
        
        {/* -------------------------------------------------------------
            1. SECTION HEADER: EVERYTHING YOU NEED FOR YOUR FARM
        ------------------------------------------------------------- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200/80">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100/90 border border-amber-200 text-amber-950 text-xs font-semibold uppercase tracking-wider">
              <ShoppingBag className="w-3.5 h-3.5 text-amber-700" />
              <span>SHOP CONNECT KISAN BAZAR</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 font-heading tracking-tight">
              Everything you need for your farm.
            </h2>

            <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
              Find agricultural inputs, equipment, tools and farming essentials in one place—delivered across Nepal with verified quality.
            </p>
          </div>

          {/* Primary & Secondary Bazar Header CTAs */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {/* Live Cart Indicator if items added */}
            {cartCount > 0 && (
              <div className="flex items-center gap-2 bg-emerald-100 text-emerald-900 px-3.5 py-2 rounded-xl text-xs font-bold border border-emerald-300 animate-fade-in shadow-xs">
                <ShoppingCart className="w-4 h-4 text-emerald-700" />
                <span>{cartCount} in Cart</span>
              </div>
            )}

            <Button
              asChild
              size="lg"
              className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold shadow-md shadow-emerald-700/20 px-6 py-3.5 rounded-xl transition-all hover:scale-[1.02] group"
            >
              <a href="https://connectkisan.com/bazar" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Store className="w-4 h-4 text-emerald-200" />
                <span>Explore Bazar</span>
                <ArrowRight className="w-4 h-4 ml-0.5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>

        {/* -------------------------------------------------------------
            2. BROWSE CATEGORIES (FIRST DISCOVERY LAYER)
        ------------------------------------------------------------- */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-widest text-stone-500">
              Browse by Category / मुख्य विधाहरू
            </h3>
            <a
              href="https://connectkisan.com/bazar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-1 transition-colors"
            >
              <span>View all categories in Bazar</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {BAZAR_CATEGORIES.map((cat) => (
              <a
                key={cat.id}
                href={cat.href || "https://connectkisan.com/bazar"}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl p-4 border border-stone-200/90 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-3 group-hover:bg-emerald-100 transition-colors">
                    {iconMap[cat.iconName]}
                  </div>
                  <h4 className="text-sm font-bold text-stone-900 group-hover:text-emerald-800 transition-colors">
                    {cat.name}
                  </h4>
                  <p className="text-[11px] font-medium text-stone-500 mt-0.5">
                    {cat.nepaliName}
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-stone-100 flex items-center text-[11px] font-bold text-emerald-700 group-hover:translate-x-0.5 transition-transform">
                  <span>Explore →</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* -------------------------------------------------------------
            3. CURATED FEATURED PRODUCTS (4 Desktop / 2 Mobile)
        ------------------------------------------------------------- */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 font-heading">
                Featured from Bazar
              </h3>
              <p className="text-xs sm:text-sm text-stone-500">
                Curated farming equipment, bio-nutrients, and supplies from verified vendors
              </p>
            </div>

            <a
              href="https://connectkisan.com/bazar"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center text-xs sm:text-sm font-bold text-emerald-700 hover:text-emerald-900 transition-colors"
            >
              <span>View all products in Bazar</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          {/* Toast Notification when adding to cart */}
          {addedItem && (
            <div className="bg-emerald-900 text-white px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-between shadow-lg animate-fade-in">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                <span>Added &ldquo;{addedItem}&rdquo; to your shopping cart!</span>
              </div>
              <a href="https://connectkisan.com/bazar" target="_blank" rel="noopener noreferrer" className="underline text-emerald-200 hover:text-white font-bold ml-4">
                Go to Bazar Cart →
              </a>
            </div>
          )}

          {/* Product Grid: 4 items (last 2 hidden on mobile per guidelines, visible on sm/lg) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BAZAR_CURATED_PRODUCTS.map((product, idx) => (
              <div
                key={product.id}
                className={`bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between group ${
                  idx >= 2 ? "hidden sm:flex" : "flex"
                }`}
              >
                <div>
                  {/* Product Image */}
                  <div className="relative h-48 w-full bg-stone-100 overflow-hidden">
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Top Badges */}
                    <div className="absolute top-2.5 left-2.5 flex flex-col gap-1">
                      {product.badge && (
                        <Badge variant="amber" className="text-[10px] font-bold shadow-xs">
                          {product.badge}
                        </Badge>
                      )}
                      {product.discountPercentage && (
                        <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-xs">
                          -{product.discountPercentage}% OFF
                        </span>
                      )}
                    </div>

                    {/* Stock indicator badge */}
                    <div className="absolute bottom-2.5 right-2.5 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded-md text-[10px] font-bold text-emerald-800 border border-emerald-200">
                      ✓ In Stock
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-4 sm:p-5 space-y-2">
                    <div className="text-[11px] font-semibold text-emerald-700 uppercase tracking-wider">
                      {product.category}
                    </div>

                    <h4 className="text-sm sm:text-base font-bold text-stone-900 font-heading leading-snug group-hover:text-emerald-800 transition-colors line-clamp-2">
                      {product.name}
                    </h4>

                    <p className="text-[11px] text-stone-500">
                      Seller: <strong className="text-stone-700 font-medium">{product.seller}</strong>
                    </p>

                    {/* Price Block */}
                    <div className="pt-2 flex items-baseline gap-2">
                      <span className="text-lg font-extrabold text-stone-900 font-heading">
                        NPR {product.currentPriceNpr.toLocaleString()}
                      </span>
                      {product.originalPriceNpr && (
                        <span className="text-xs text-stone-400 line-through">
                          NPR {product.originalPriceNpr.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Actions: Add to Cart & View in Bazar */}
                <div className="p-4 sm:p-5 pt-0 border-t border-stone-100 flex flex-col gap-2 mt-auto">
                  <button
                    type="button"
                    onClick={() => handleAddToCart(product.name)}
                    className="w-full bg-emerald-50 hover:bg-emerald-100 text-emerald-900 hover:text-emerald-950 font-bold text-xs py-2.5 px-3 rounded-xl border border-emerald-200 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <ShoppingCart className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Add to Cart</span>
                  </button>

                  <a
                    href={product.href || "https://connectkisan.com/bazar"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center text-[11px] font-bold text-stone-600 hover:text-emerald-700 py-1 transition-colors"
                  >
                    View in Bazar →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile view all link */}
          <div className="text-center pt-2 sm:hidden">
            <Button
              asChild
              variant="outline"
              className="w-full border-stone-300 font-semibold text-xs py-3"
            >
              <a href="https://connectkisan.com/bazar" target="_blank" rel="noopener noreferrer">View all products in Bazar →</a>
            </Button>
          </div>
        </div>

        {/* -------------------------------------------------------------
            4. "WHY SHOP ON BAZAR?" TRUST STRIP
        ------------------------------------------------------------- */}
        <div className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/90 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-stone-100">
            <div className="flex flex-col items-center px-2 pt-2 sm:pt-0">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 mb-1.5" />
              <span className="text-xs sm:text-sm font-bold text-stone-900">Agriculture-Focused</span>
              <span className="text-[11px] text-stone-500 mt-0.5">Tested for Nepal&apos;s terrain</span>
            </div>

            <div className="flex flex-col items-center px-2 pt-4 sm:pt-0">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 mb-1.5" />
              <span className="text-xs sm:text-sm font-bold text-stone-900">Trusted Suppliers</span>
              <span className="text-[11px] text-stone-500 mt-0.5">Verified distributors &amp; co-ops</span>
            </div>

            <div className="flex flex-col items-center px-2 pt-4 sm:pt-0">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 mb-1.5" />
              <span className="text-xs sm:text-sm font-bold text-stone-900">Transparent Pricing</span>
              <span className="text-[11px] text-stone-500 mt-0.5">Clear wholesale &amp; retail rates</span>
            </div>

            <div className="flex flex-col items-center px-2 pt-4 sm:pt-0">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 mb-1.5" />
              <span className="text-xs sm:text-sm font-bold text-stone-900">Convenient Delivery</span>
              <span className="text-[11px] text-stone-500 mt-0.5">Direct to hub / farm depot</span>
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------------
            5. SEPARATE "BUY" VS "SELL" PRODUCE PATH (FARMER-SIDE MARKET CTA)
        ------------------------------------------------------------- */}
        <div
          id="market-sell"
          className="rounded-3xl bg-emerald-950 text-white p-7 sm:p-10 border border-emerald-900 shadow-xl relative overflow-hidden"
        >
          {/* Subtle decoration */}
          <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-emerald-800/30 rounded-full blur-2xl pointer-events-none" />

          <div className="grid md:grid-cols-12 gap-6 items-center relative z-10">
            <div className="md:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/80 border border-emerald-700 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-300" />
                <span>FOR FARMERS &amp; PRODUCERS WITH HARVEST TO SELL</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight">
                Have produce to sell?
              </h3>

              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed max-w-2xl">
                Connect with bulk buyers, participate in transparent digital bidding, and explore high-margin market opportunities to bring your farm harvests directly to market.
              </p>
            </div>

            <div className="md:col-span-4 flex md:justify-end">
              <Button
                asChild
                size="lg"
                className="w-full md:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-lg ring-2 ring-emerald-500/30 group"
              >
                <a href="#marketplace-full" className="flex items-center justify-center gap-2">
                  <span>Explore Selling Opportunities</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
