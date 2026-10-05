"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Menu, X, ShieldCheck } from "lucide-react";

export default function Navbar({ onOpenAuth }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 24) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Product", href: "#product" },
    { name: "How it works", href: "#how-it-works" },
    { name: "Insights", href: "#insights" },
    { name: "About", href: "#about" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navOffset = 76;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAF9F5]/95 backdrop-blur-md border-b border-[#E6E4DD] shadow-[0_2px_12px_rgba(15,23,42,0.04)] py-3 sm:py-3.5"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark & Emblem */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D5C46] rounded-lg p-1 -ml-1 min-h-[44px]"
            aria-label="Fermor Home"
          >
            <div className="w-8 h-8 rounded-lg bg-[#0D5C46] flex items-center justify-center text-white font-semibold text-lg shadow-sm transition-transform duration-200 group-hover:scale-105 flex-shrink-0">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
                aria-hidden="true"
              >
                <path
                  d="M4 5H20M4 12H16M4 19H12"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight text-[#0F172A] font-sans">
              Fermor
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-[#475569] hover:text-[#0F172A] transition-colors relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D5C46] rounded"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button
              type="button"
              onClick={() => onOpenAuth && onOpenAuth("login")}
              className="text-sm font-medium text-[#0F172A] hover:text-[#0D5C46] px-3.5 py-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D5C46] rounded-lg min-h-[44px]"
            >
              Log in
            </button>
            <button
              type="button"
              onClick={() => onOpenAuth && onOpenAuth("signup")}
              className="inline-flex items-center gap-1.5 text-sm font-medium bg-[#0D5C46] hover:bg-[#083E2F] text-white px-4 py-2.5 rounded-lg transition-all duration-200 shadow-sm hover:shadow active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0D5C46] min-h-[44px]"
            >
              <span>Get started</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle (Strict min 44x44px touch target) */}
          <div className="flex md:hidden items-center gap-1">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-11 h-11 flex items-center justify-center text-[#334155] hover:text-[#0F172A] hover:bg-[#F4F3EE] active:bg-[#EAE8E0] rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D5C46] transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <>
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 top-[60px] bg-slate-900/20 backdrop-blur-[2px] z-40 md:hidden animate-fade-in"
            aria-hidden="true"
          />
          <div className="relative z-50 md:hidden border-b border-[#E6E4DD] bg-[#FAF9F5]/98 backdrop-blur-xl px-4 pt-3 pb-6 animate-fade-in-up shadow-xl">
            <nav className="flex flex-col space-y-1.5" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-base font-medium text-[#1E293B] hover:text-[#0D5C46] active:bg-[#ECEBE4] px-3.5 py-3 rounded-xl transition-colors flex items-center justify-between min-h-[44px]"
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-[#94A3B8]">→</span>
                </a>
              ))}
              <div className="pt-3 border-t border-[#E6E4DD] flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAuth && onOpenAuth("login");
                  }}
                  className="w-full text-center text-sm font-semibold text-[#0F172A] py-3 min-h-[44px] rounded-xl border border-[#E6E4DD] bg-white hover:bg-[#F4F3EE] active:bg-[#ECEBE4] transition-colors"
                >
                  Log in
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAuth && onOpenAuth("signup");
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 text-sm font-semibold bg-[#0D5C46] hover:bg-[#083E2F] active:bg-[#062E23] text-white py-3 min-h-[44px] rounded-xl transition-colors shadow-sm"
                >
                  <span>Get started</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="pt-2 flex items-center justify-center gap-1.5 text-xs text-[#64748B]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0D5C46]" />
                <span>Privacy-first by design · Interactive prototype</span>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
