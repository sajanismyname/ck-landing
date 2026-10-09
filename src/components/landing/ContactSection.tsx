"use client";

import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  CheckCircle2,
  Clock,
  HelpCircle,
  Sparkles,
} from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    userType: "Farmer",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate clean form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      userType: "Farmer",
      subject: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 lg:py-24 bg-[#FAF9F5] border-b border-stone-200/80 relative overflow-hidden"
      aria-label="Connect With Us"
    >
      {/* Organic background blur accents */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-emerald-100/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-80 h-80 rounded-full bg-amber-100/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-semibold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5 text-emerald-700" />
            <span>Connect With Us / सम्पर्क गर्नुहोस्</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 font-heading tracking-tight">
            Send us a Message
          </h2>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto">
            Fill out the form below and we&apos;ll get back to you as soon as possible.
          </p>
        </div>

        {/* 2-Column Grid: Contact Information & Interactive Form */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Contact Cards & Office Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-emerald-900 text-white rounded-3xl p-7 sm:p-8 shadow-xl relative overflow-hidden space-y-6">
              <div className="space-y-2">
                <Badge variant="amber" className="text-xs font-bold py-0.5 px-2.5">
                  Direct Farmer Support
                </Badge>
                <h3 className="text-2xl font-bold font-heading text-white">
                  We&apos;re Here to Help
                </h3>
                <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                  Have questions about crop advisory, marketplace listing, soil testing, or partnership opportunities? Reach out directly to our team in Nepal.
                </p>
              </div>

              <div className="space-y-4 pt-2 border-t border-emerald-800/80 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-800/90 flex items-center justify-center text-emerald-300 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Head Office &amp; Operations</h4>
                    <p className="text-emerald-200/80 text-xs mt-0.5">
                      Kathmandu &amp; Ilam Agri-Hub, Nepal
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-800/90 flex items-center justify-center text-emerald-300 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email Inquiries</h4>
                    <p className="text-emerald-200/80 text-xs mt-0.5">
                      info@connectkisan.com / support@connectkisan.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-800/90 flex items-center justify-center text-emerald-300 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Helpline &amp; WhatsApp</h4>
                    <p className="text-emerald-200/80 text-xs mt-0.5">
                      +977 (01) 5970000 / +977 981-123-4567
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-800/90 flex items-center justify-center text-emerald-300 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Support Hours</h4>
                    <p className="text-emerald-200/80 text-xs mt-0.5">
                      Sunday – Friday: 9:00 AM – 6:00 PM (NPT)
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-emerald-800/80 flex items-center justify-between text-xs text-emerald-200">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
                  Fast 24-Hour Response
                </span>
                <span className="font-bold text-white">Connect Kisan Care</span>
              </div>
            </div>

            {/* Quick Assistance Box */}
            <div className="bg-white rounded-2xl p-5 border border-stone-200/90 shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-stone-900">
                  Are you a Farmer seeking immediate advisory?
                </h4>
                <p className="text-xs text-stone-500 mt-0.5">
                  Use our 24/7 Voice AI Krishi Bot directly in the app.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-xl relative">
              
              {submitted ? (
                <div className="py-12 px-4 text-center space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center shadow-inner">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-stone-900 font-heading">
                    Thank You, {formData.fullName || "Friend"}!
                  </h3>
                  <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                    Your message regarding <strong>&ldquo;{formData.subject || "Inquiry"}&rdquo;</strong> has been successfully received. Our representative will contact you at <strong>{formData.email}</strong> shortly.
                  </p>
                  <div className="pt-4">
                    <Button
                      type="button"
                      onClick={handleReset}
                      className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold rounded-xl px-6 py-2.5 text-sm"
                    >
                      Send Another Message
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="fullName" className="block text-xs sm:text-sm font-bold text-stone-800">
                      Full Name <span className="text-emerald-700">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 text-sm text-stone-900 placeholder:text-stone-400 transition-all outline-none bg-stone-50/50 hover:bg-white focus:bg-white"
                    />
                  </div>

                  {/* Email & Phone Grid */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Email Address */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block text-xs sm:text-sm font-bold text-stone-800">
                        Email Address <span className="text-emerald-700">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 text-sm text-stone-900 placeholder:text-stone-400 transition-all outline-none bg-stone-50/50 hover:bg-white focus:bg-white"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="block text-xs sm:text-sm font-bold text-stone-800">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+977 981-123-4567"
                        className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 text-sm text-stone-900 placeholder:text-stone-400 transition-all outline-none bg-stone-50/50 hover:bg-white focus:bg-white"
                      />
                    </div>
                  </div>

                  {/* I am a (User Type Select) */}
                  <div className="space-y-1.5">
                    <label htmlFor="userType" className="block text-xs sm:text-sm font-bold text-stone-800">
                      I am a <span className="text-emerald-700">*</span>
                    </label>
                    <select
                      id="userType"
                      required
                      value={formData.userType}
                      onChange={(e) => setFormData({ ...formData, userType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 text-sm text-stone-900 transition-all outline-none bg-stone-50/50 hover:bg-white focus:bg-white cursor-pointer"
                    >
                      <option value="Farmer">Farmer (किसान)</option>
                      <option value="Cooperative / Producer Group">Agricultural Cooperative / Producer Group (कृषि सहकारी)</option>
                      <option value="Agricultural Buyer / Trader">Agricultural Buyer / Trader (व्यापारी / खरिदकर्ता)</option>
                      <option value="Agri-Input Supplier">Agri-Input Supplier / Agrovet (कृषि सामग्री बिक्रेता)</option>
                      <option value="Agronomist / Researcher">Agronomist / Researcher (कृषि प्राविधिक)</option>
                      <option value="Other">Other Inquiry (अन्य)</option>
                    </select>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="block text-xs sm:text-sm font-bold text-stone-800">
                      Subject <span className="text-emerald-700">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="What is this regarding?"
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 text-sm text-stone-900 placeholder:text-stone-400 transition-all outline-none bg-stone-50/50 hover:bg-white focus:bg-white"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-xs sm:text-sm font-bold text-stone-800">
                      Message <span className="text-emerald-700">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please provide details about your inquiry..."
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 text-sm text-stone-900 placeholder:text-stone-400 transition-all outline-none bg-stone-50/50 hover:bg-white focus:bg-white resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      disabled={loading}
                      size="lg"
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base py-4 rounded-xl shadow-lg shadow-emerald-700/20 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                    >
                      {loading ? (
                        <div className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Sending Message...</span>
                        </div>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </Button>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-xs text-stone-500 pt-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Your contact information is strictly protected and private.</span>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
