"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Lock } from "lucide-react";

export default function CTA({ onOpenAuth }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-14 sm:py-24 lg:py-32 bg-[#FAF9F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Distinctive Dark / Spruce Container */}
        <div className="relative rounded-2xl sm:rounded-3xl bg-[#0F172A] text-white p-6 sm:p-12 lg:p-16 overflow-hidden shadow-2xl border border-slate-800">
          {/* Subtle Accent Glows (Refined, Not Blobs) */}
          <div
            className="absolute top-0 right-0 w-96 h-96 bg-[#0D5C46]/30 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-950/40 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-5 sm:space-y-8">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-xs font-medium text-emerald-400 max-w-full">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
              <span className="truncate">Begin Your Financial Clarity Journey</span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight font-sans">
              Make your money easier to understand.
            </h2>

            {/* Supporting Text */}
            <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Start with clarity. Make better decisions. Build toward what matters.
            </p>

            {/* Interactive Email / Onboarding Action */}
            <div className="max-w-md mx-auto pt-1 sm:pt-2 w-full">
              {submitted ? (
                <div className="p-4 rounded-xl bg-[#0D5C46]/40 border border-[#A7F3D0]/40 text-emerald-200 text-xs sm:text-sm flex items-center justify-center gap-2 animate-fade-in-up">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span>Welcome aboard! Check your inbox for instant demo sandbox access.</span>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row items-center gap-2 bg-slate-900/90 p-1.5 rounded-2xl border border-slate-700 shadow-inner w-full"
                >
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent px-4 py-3 text-base sm:text-sm text-white placeholder-slate-400 focus:outline-none min-h-[48px]"
                    aria-label="Email address for demo access"
                  />
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-[#0D5C46] hover:bg-[#10B981] text-white px-6 py-3 min-h-[48px] rounded-xl text-base sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  >
                    <span>Get started</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Secondary Text & Guarantees */}
            <div className="pt-2 space-y-2">
              <p className="text-xs text-slate-400">
                No complicated setup. Just a clearer view of your finances.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Privacy-First Architecture</span>
                </span>
                <span className="hidden sm:inline">·</span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Zero Credit Card Required</span>
                </span>
                <span className="hidden sm:inline">·</span>
                <span>Designed for Clarity</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
