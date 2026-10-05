"use client";

import { Quote, User } from "lucide-react";
import { mockDashboardData } from "../data/mockFinancialData";

export default function Testimonials() {
  const testimonials = mockDashboardData.testimonials;

  return (
    <section id="about" className="py-14 sm:py-24 lg:py-36 bg-[#FAF9F5] border-t border-[#E6E4DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-10 sm:mb-16">
          <p className="text-xs uppercase tracking-widest font-semibold text-[#0D5C46]">
            Example User Scenarios
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0F172A] font-sans">
            Clarity for real financial situations.
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl mx-auto">
            Representative scenarios illustrating how individuals use Fermor to replace spreadsheet
            fatigue with calm, confident decision-making.
          </p>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#E6E4DD] p-5 sm:p-8 flex flex-col justify-between hover:border-[#D1CFCE] transition-all duration-200 shadow-[0_2px_8px_rgba(15,23,42,0.02)]"
            >
              <div>
                {/* Scenario Tag & Metric */}
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <span className="text-[10px] sm:text-[11px] font-mono text-[#0D5C46] bg-[#ECFDF5] px-2.5 py-1 rounded-md border border-[#A7F3D0] font-semibold truncate max-w-[200px] sm:max-w-none">
                    {t.persona}
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-[#FAF9F5] border border-[#E6E4DD] flex items-center justify-center text-[#0D5C46] flex-shrink-0">
                    <Quote className="w-3.5 h-3.5 fill-[#0D5C46]/20" />
                  </div>
                </div>

                {/* Quote text */}
                <p className="text-xs sm:text-base text-[#334155] leading-relaxed font-normal mb-5 sm:mb-8">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author / Persona Info */}
              <div className="pt-3.5 sm:pt-4 border-t border-[#E6E4DD] flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#0F172A]">{t.author}</h4>
                  <p className="text-xs text-[#64748B]">
                    {t.role}
                  </p>
                </div>
                <span className="text-[10px] sm:text-[11px] font-mono text-[#475569] bg-[#FAF9F5] px-2 py-0.5 rounded border border-[#E6E4DD] truncate">
                  {t.metric}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
