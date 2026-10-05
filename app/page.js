"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import ProblemSolution from "@/components/ProblemSolution";
import Features from "@/components/Features";
import FinancialDashboard from "@/components/FinancialDashboard";
import FinancialHealth from "@/components/FinancialHealth";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import AuthModal from "@/components/AuthModal";

export default function Home() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState("signup");

  const handleOpenAuth = (mode = "signup") => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  const handleCloseAuth = () => {
    setAuthModalOpen(false);
  };

  const handleExploreDashboard = () => {
    setAuthModalOpen(false);
    setTimeout(() => {
      const el = document.getElementById("dashboard");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  const handleSeeHowItWorks = () => {
    const el = document.querySelector("#how-it-works");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#0F172A] selection:bg-[#0D5C46]/20 selection:text-[#0D5C46]">
      {/* SECTION 1 — Sticky / Floating Navbar */}
      <Navbar onOpenAuth={handleOpenAuth} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* SECTION 2 — Hero & Interactive Dashboard Preview */}
        <Hero
          onOpenAuth={handleOpenAuth}
          onSeeHowItWorks={handleSeeHowItWorks}
        />

        {/* SECTION 3 — Trust / Intro Philosophy */}
        <TrustSection />

        {/* SECTION 4 — Problem → Solution Storytelling */}
        <ProblemSolution />

        {/* SECTION 5 — Features (4 distinct visual compositions) */}
        <Features />

        {/* SECTION 6 — Interactive Financial Dashboard (Recharts + Controls) */}
        <FinancialDashboard />

        {/* SECTION 7 — Financial Health Score & 4-Pillar Deep Dive */}
        <FinancialHealth />

        {/* SECTION 8 — How It Works (01 Connect, 02 Understand, 03 Act) */}
        <HowItWorks />

        {/* SECTION 9 — Authentic Social Proof & Testimonials */}
        <Testimonials />

        {/* SECTION 10 — Distinctive Final CTA */}
        <CTA onOpenAuth={handleOpenAuth} />
      </main>

      {/* SECTION 11 — Polished Footer */}
      <Footer />

      {/* Interactive Authentication & Demo Sandbox Modal */}
      <AuthModal
        key={`${authMode}-${authModalOpen}`}
        isOpen={authModalOpen}
        onClose={handleCloseAuth}
        onExploreDashboard={handleExploreDashboard}
        initialMode={authMode}
      />
    </div>
  );
}
