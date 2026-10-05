"use client";

import { useState } from "react";
import {
  Link2,
  BrainCircuit,
  Zap,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { mockDashboardData } from "../data/mockFinancialData";

export default function HowItWorks() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const steps = mockDashboardData.steps;
  const currentStep = steps[activeStepIndex];

  const stepIcons = [Link2, BrainCircuit, Zap];

  return (
    <section id="how-it-works" className="py-14 sm:py-24 lg:py-36 bg-[#FAF9F5] border-t border-[#E6E4DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-10 sm:mb-16">
          <p className="text-xs uppercase tracking-widest font-semibold text-[#0D5C46]">
            The Journey to Clarity
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0F172A] font-sans">
            How Fermor works.
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl mx-auto">
            A three-step progression designed to eliminate manual spreadsheet drudgery and provide
            immediate peace of mind.
          </p>
        </div>

        {/* 3 Step Progression Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 sm:gap-4 mb-6 sm:mb-10 max-w-4xl mx-auto">
          {steps.map((st, idx) => {
            const Icon = stepIcons[idx];
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={st.step}
                type="button"
                onClick={() => setActiveStepIndex(idx)}
                className={`p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border text-left transition-all duration-200 relative min-h-[52px] ${
                  isActive
                    ? "bg-white border-[#0D5C46] shadow-sm ring-1 ring-[#0D5C46]"
                    : "bg-white/60 border-[#E6E4DD] hover:bg-white hover:border-[#D1CFCE]"
                }`}
                aria-pressed={isActive}
              >
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <span
                    className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                      isActive ? "bg-[#0D5C46] text-white" : "bg-[#FAF9F5] text-[#64748B]"
                    }`}
                  >
                    {st.step}
                  </span>
                  <Icon
                    className={`w-4 h-4 ${
                      isActive ? "text-[#0D5C46]" : "text-[#94A3B8]"
                    }`}
                  />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#0F172A] mb-0.5 sm:mb-1 font-sans">
                  {st.name}
                </h3>
                <p className="text-xs text-[#64748B] line-clamp-1">{st.tagline}</p>

                {/* Bottom line progress indicator */}
                <div className="mt-2.5 sm:mt-3 w-full bg-[#E6E4DD] h-1 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-300 ${
                      isActive ? "bg-[#0D5C46] w-full" : "w-0"
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Showcase Panel */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-[#E6E4DD] shadow-[0_12px_40px_-10px_rgba(15,23,42,0.05)] p-4 sm:p-8 lg:p-10 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            {/* Left: Explanation and Bullets (7 cols) */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 text-xs font-mono font-bold text-[#0D5C46] bg-[#ECFDF5] px-2.5 sm:px-3 py-1 rounded-full border border-[#A7F3D0]">
                <span>Step {currentStep.step}</span>
                <span>·</span>
                <span className="truncate">{currentStep.tagline}</span>
              </div>

              <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0F172A] font-sans">
                {currentStep.title}
              </h4>

              <p className="text-xs sm:text-base text-[#475569] leading-relaxed">
                {currentStep.description}
              </p>

              <div className="space-y-2 pt-1 sm:pt-2">
                {currentStep.bullets.map((bullet, i) => (
                  <div key={i} className="flex items-center gap-2 sm:gap-2.5 text-xs sm:text-sm text-[#334155]">
                    <CheckCircle2 className="w-4 h-4 text-[#0D5C46] flex-shrink-0" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 sm:pt-4 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setActiveStepIndex((activeStepIndex + 1) % steps.length)}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#0D5C46] hover:text-[#083E2F] px-3.5 py-2.5 rounded-lg border border-[#E6E4DD] bg-[#FAF9F5] hover:bg-[#F4F3EE] transition-colors min-h-[44px] group"
                >
                  <span>
                    {activeStepIndex === 2 ? "Return to Step 01" : `Proceed to Step 0${activeStepIndex + 2}`}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>

            {/* Right: UI Snippet Simulation (5 cols) */}
            <div className="lg:col-span-5 bg-[#FAF9F5] p-3.5 sm:p-5 rounded-xl border border-[#E6E4DD] space-y-2.5 sm:space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-[#E6E4DD]">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#64748B]">
                  {currentStep.previewSnippet.badge}
                </span>
                <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
              </div>

              <h5 className="text-xs font-bold text-[#0F172A]">
                {currentStep.previewSnippet.title}
              </h5>

              <div className="space-y-2">
                {currentStep.previewSnippet.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 bg-white rounded-lg border border-[#E6E4DD] flex items-center justify-between text-xs"
                  >
                    <div>
                      <div className="font-medium text-[#334155]">{item.name}</div>
                      <div className="text-[10px] text-[#0D5C46] font-semibold">{item.status}</div>
                    </div>
                    <div className="font-mono font-bold text-[#0F172A]">{item.balance}</div>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-center">
                <span className="text-[10px] text-[#94A3B8] font-mono">
                  Autonomous Intelligence Engine Active
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
