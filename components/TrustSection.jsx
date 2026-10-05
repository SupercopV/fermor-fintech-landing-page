"use client";

import { ShieldCheck, FileSpreadsheet, Sparkles, LockKeyhole } from "lucide-react";

export default function TrustSection() {
  const points = [
    {
      icon: LockKeyhole,
      title: "Privacy-First By Design",
      desc: "Architected with user privacy at the core. Built strictly to interpret and synthesize financial flows.",
    },
    {
      icon: ShieldCheck,
      title: "Interpretation, Not Custody",
      desc: "Fermor is an analytical layer for your money. It never executes transfers, stores credentials, or holds funds.",
    },
    {
      icon: FileSpreadsheet,
      title: "No Spreadsheet Fatigue",
      desc: "Replaces fragile formulas and tedious CSV reconciliations with clear, continuous understanding.",
    },
    {
      icon: Sparkles,
      title: "Signal Over Noise",
      desc: "Filters out transaction noise to highlight the three or four decisions that genuinely impact your runway.",
    },
  ];

  return (
    <section className="py-12 sm:py-20 lg:py-24 border-y border-[#E6E4DD] bg-[#FAF9F5]/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4">
          <p className="text-xs uppercase tracking-widest font-semibold text-[#0D5C46]">
            The Fermor Philosophy
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#0F172A] font-sans">
            Money shouldn’t require a spreadsheet to understand.
          </h2>
          <p className="text-sm sm:text-lg text-[#475569] leading-relaxed max-w-2xl mx-auto">
            Most financial tools give you more numbers. Fermor helps you understand what those
            numbers actually mean.
          </p>
        </div>

        {/* Minimal Editorial Trust Matrix */}
        <div className="mt-8 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="bg-white p-4 sm:p-6 rounded-xl border border-[#E6E4DD] hover:border-[#D1CFCE] transition-all duration-200 group"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#FAF9F5] border border-[#E6E4DD] flex items-center justify-center text-[#0D5C46] mb-3 sm:mb-4 group-hover:bg-[#ECFDF5] group-hover:border-[#A7F3D0] transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold text-[#0F172A] mb-1 font-sans">
                  {pt.title}
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">{pt.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
