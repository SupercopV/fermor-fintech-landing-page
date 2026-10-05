"use client";

import { useState, useEffect } from "react";
import { X, CheckCircle2, ShieldCheck, ArrowRight, Lock, Sparkles, UserCheck } from "lucide-react";

export default function AuthModal({ isOpen, onClose, onExploreDashboard, initialMode = "signup" }) {
  const [mode, setMode] = useState(initialMode); // "signup" | "login"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSuccess(true);
    }, 600);
  };

  const handleInstantDemoLogin = () => {
    setLoading(true);
    setEmail("demo.investor@fermor.com");
    setTimeout(() => {
      setLoading(false);
      setIsSuccess(true);
    }, 500);
  };

  const handleExploreDashboard = () => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = "auto";
    }

    if (onExploreDashboard) {
      onExploreDashboard();
    } else {
      onClose();
      setTimeout(() => {
        const el = document.getElementById("dashboard");
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-modal-title"
        className="relative bg-white rounded-3xl border border-[#E6E4DD] shadow-2xl max-w-md w-full p-5 sm:p-8 z-10 animate-fade-in-up max-h-[92vh] overflow-y-auto my-auto"
      >
        {/* Close Button - 44x44px touch target */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 w-11 h-11 flex items-center justify-center rounded-xl text-[#64748B] hover:text-[#0F172A] hover:bg-[#FAF9F5] transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-[#ECFDF5] border border-[#A7F3D0] flex items-center justify-center text-[#0D5C46] mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#0F172A]">
              {mode === "login" ? "Welcome back!" : "Account created successfully!"}
            </h3>
            <p className="text-sm text-[#475569] max-w-xs mx-auto">
              You are now connected to the Fermor Demo Sandbox with sample accounts.
            </p>
            <div className="p-3 bg-[#FAF9F5] rounded-xl border border-[#E6E4DD] text-xs font-mono text-[#334155]">
              Session: <span className="text-[#0D5C46] font-bold">Authenticated (Demo Mode)</span>
            </div>
            <button
              type="button"
              onClick={handleExploreDashboard}
              className="w-full min-h-[48px] inline-flex items-center justify-center gap-2 bg-[#0D5C46] hover:bg-[#083E2F] text-white py-3 rounded-xl text-sm font-semibold transition-colors shadow-sm cursor-pointer"
            >
              <span>Explore Dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
              <div className="w-8 h-8 rounded-lg bg-[#0D5C46] flex items-center justify-center text-white font-bold text-sm shadow-sm">
                F
              </div>
              <span className="font-bold text-lg text-[#0F172A]">Fermor</span>
            </div>

            <h3 id="auth-modal-title" className="text-xl sm:text-2xl font-bold text-[#0F172A] font-sans pr-8">
              {mode === "login" ? "Sign in to Fermor" : "Get started with Fermor"}
            </h3>
            <p className="text-xs text-[#64748B] mt-1 mb-5">
              {mode === "login"
                ? "Access your unified financial health overview."
                : "Interactive prototype · No credit card required · Instant demo access."}
            </p>

            {/* Quick 1-Click Sandbox Demo Button */}
            <button
              type="button"
              onClick={handleInstantDemoLogin}
              disabled={loading}
              className="w-full min-h-[44px] mb-4 inline-flex items-center justify-center gap-2 bg-[#FAF9F5] hover:bg-[#F4F3EE] text-[#0F172A] border border-[#E6E4DD] hover:border-[#D1CFCE] py-2.5 px-4 rounded-xl text-xs font-semibold transition-colors"
            >
              <UserCheck className="w-4 h-4 text-[#0D5C46] shrink-0" />
              <span>Explore with Demo Sandbox Profile</span>
            </button>

            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#E6E4DD]" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-white px-2 text-[#94A3B8]">or continue with email</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-medium text-[#334155] mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl border border-[#E6E4DD] text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0D5C46] focus:border-transparent text-[#0F172A]"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-medium text-[#334155]">
                    Password
                  </label>
                  {mode === "login" && (
                    <a href="#" className="text-xs text-[#0D5C46] hover:underline py-0.5">
                      Forgot?
                    </a>
                  )}
                </div>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl border border-[#E6E4DD] text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0D5C46] focus:border-transparent text-[#0F172A]"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full min-h-[48px] inline-flex items-center justify-center gap-2 bg-[#0D5C46] hover:bg-[#083E2F] text-white py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-200 shadow-sm mt-2 disabled:opacity-50"
              >
                {loading ? (
                  <span>Authenticating...</span>
                ) : (
                  <>
                    <span>{mode === "login" ? "Sign In" : "Create Account"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {/* Switch Mode Footer */}
            <div className="mt-5 pt-4 border-t border-[#E6E4DD] text-center text-xs text-[#64748B]">
              {mode === "login" ? (
                <p>
                  Don’t have an account yet?{" "}
                  <button
                    type="button"
                    onClick={() => setMode("signup")}
                    className="text-[#0D5C46] font-semibold hover:underline inline-block py-1 px-1"
                  >
                    Get started
                  </button>
                </p>
              ) : (
                <p>
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setMode("login")}
                    className="text-[#0D5C46] font-semibold hover:underline inline-block py-1 px-1"
                  >
                    Log in
                  </button>
                </p>
              )}
            </div>

            <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-[#94A3B8]">
              <Lock className="w-3 h-3 text-[#0D5C46] shrink-0" />
              <span>Designed with privacy and security in mind · Interactive prototype</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
