import * as React from "react";
import { FOOTER_SECTIONS } from "@/data/landingData";
import { Logo } from "@/components/ui/logo";
import { Mail, Phone, MapPin, Share2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#142a14] text-stone-300 border-t border-emerald-950" aria-label="Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-emerald-900/70">
          
          {/* Brand & Bio (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-5">
            <a href="#" className="inline-block group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg" aria-label="Connect Kisan Home">
              <Logo variant="white" width={180} height={40} />
            </a>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-sm">
              Empowering Nepali farmers with modern agricultural technology, voice advisory, transparent market prices, and farm-to-consumer traceability.
            </p>

            <div className="space-y-2.5 text-xs text-stone-300">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Kathmandu &amp; Ilam, Nepal</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>info@connectkisan.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>+977 (01) 5970000 / Support</span>
              </div>
            </div>
          </div>

          {/* Dynamic Link Columns (3 cols on lg) */}
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                {section.title}
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-stone-300 hover:text-emerald-300 transition-colors inline-block focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400 rounded"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-5 text-xs text-stone-400">
          <div>
            &copy; 2026 Connect Kisan Pvt. Ltd. All rights reserved.
          </div>

          {/* "Connect with Us / Follow Us" Social Media Section */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <span className="text-xs font-bold text-emerald-300/90 flex items-center gap-1.5 uppercase tracking-wider">
              <Share2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Connect with us:</span>
            </span>

            <div className="flex items-center gap-2.5">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-emerald-950/80 border border-emerald-800/80 text-stone-300 flex items-center justify-center transition-all duration-300 hover:scale-115 hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] hover:shadow-[0_0_12px_rgba(24,119,242,0.6)] cursor-pointer"
                aria-label="Connect Kisan Facebook"
                title="Follow us on Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-emerald-950/80 border border-emerald-800/80 text-stone-300 flex items-center justify-center transition-all duration-300 hover:scale-115 hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] hover:shadow-[0_0_12px_rgba(10,102,194,0.6)] cursor-pointer"
                aria-label="Connect Kisan LinkedIn"
                title="Connect on LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-emerald-950/80 border border-emerald-800/80 text-stone-300 flex items-center justify-center transition-all duration-300 hover:scale-115 hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000] hover:shadow-[0_0_12px_rgba(255,0,0,0.6)] cursor-pointer"
                aria-label="Connect Kisan YouTube"
                title="Watch on YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-emerald-950/80 border border-emerald-800/80 text-stone-300 flex items-center justify-center transition-all duration-300 hover:scale-115 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white hover:border-transparent hover:shadow-[0_0_12px_rgba(225,48,108,0.6)] cursor-pointer"
                aria-label="Connect Kisan Instagram"
                title="Follow on Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://tiktok.com/@connectkisan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-emerald-950/80 border border-emerald-800/80 text-stone-300 flex items-center justify-center transition-all duration-300 hover:scale-115 hover:bg-black hover:text-white hover:border-black hover:shadow-[0_0_12px_rgba(254,44,85,0.6)] cursor-pointer"
                aria-label="Connect Kisan TikTok"
                title="Follow on TikTok"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
