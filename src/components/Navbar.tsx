"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Sparkles, MapPin, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/config/site-data";
import { BrandLogo } from "./BrandLogo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-md bg-[#FAF8F5]/85 border-b border-[#C5A880]/15 py-3 shadow-[0_4px_30px_rgba(42,38,36,0.03)]"
            : "bg-transparent py-4 sm:py-5 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a
            href="#inicio"
            aria-label="Dra. Lislânie Thaelis - Início"
            className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880] rounded-lg"
          >
            <BrandLogo />
          </a>

          {/* Desktop Navigation */}
          <nav
            aria-label="Navegação Principal"
            className="hidden lg:flex items-center gap-7 xl:gap-8"
          >
            {SITE_CONFIG.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative py-1 text-xs uppercase tracking-[0.16em] text-[#2A2624]/80 hover:text-[#2A2624] font-medium transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#C5A880] after:origin-right after:scale-x-0 hover:after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <span className="hidden xl:inline-flex items-center gap-1.5 text-[11px] tracking-[0.12em] uppercase text-[#68625D] tabular-nums">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
              {SITE_CONFIG.brand.cro}
            </span>
            <a
              href={SITE_CONFIG.contact.whatsappDefaultUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#C5A880] hover:bg-[#A88B63] text-white px-5 py-2.5 text-xs uppercase tracking-[0.15em] font-medium shadow-sm transition-all duration-300 hover:shadow-md active:scale-[0.98]"
            >
              <span>Agendar Avaliação</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2]" />
            </a>
          </div>

          {/* Mobile Hamburger Trigger (min 44x44px touch target) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
            className="lg:hidden inline-flex items-center justify-center min-w-[44px] min-h-[44px] rounded-full border border-[#C5A880]/30 bg-white/80 backdrop-blur-sm text-[#2A2624] hover:border-[#C5A880] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880]"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 stroke-[1.75]" />
            ) : (
              <Menu className="w-5 h-5 stroke-[1.75]" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Editorial Drawer */}
      <div
        id="mobile-navigation-drawer"
        aria-hidden={!mobileMenuOpen}
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto visible"
            : "opacity-0 pointer-events-none invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[#FAF8F5]/98 backdrop-blur-xl"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Drawer Content */}
        <div className="relative h-full flex flex-col justify-between px-6 pt-24 pb-8 overflow-y-auto">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A880]/12 border border-[#C5A880]/25 text-[#A88B63] text-[10px] tracking-[0.2em] uppercase font-medium">
              <Sparkles className="w-3 h-3" />
              <span>Consultório Boutique • {SITE_CONFIG.brand.locationLabel}</span>
            </div>

            <nav aria-label="Menu Mobile" className="flex flex-col divide-y divide-[#C5A880]/15">
              {SITE_CONFIG.navigation.map((item, idx) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="group flex items-center justify-between py-4 min-h-[52px] text-[#2A2624] hover:text-[#A88B63] transition-colors"
                >
                  <div className="flex items-baseline gap-3.5">
                    <span className="font-sans-clinical text-xs text-[#A88B63] tabular-nums tracking-widest">
                      0{idx + 1}
                    </span>
                    <span className="font-serif-editorial text-2xl sm:text-3xl font-medium tracking-tight">
                      {item.label}
                    </span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-[#C5A880] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              ))}
            </nav>
          </div>

          {/* Mobile Drawer Footer CTA & Credentials */}
          <div className="pt-6 border-t border-[#C5A880]/20 space-y-4">
            <div className="flex flex-col gap-1.5 text-xs text-[#68625D]">
              <p className="flex items-center gap-2 font-medium text-[#2A2624]">
                <MapPin className="w-3.5 h-3.5 text-[#A88B63] shrink-0" />
                <span>Conceito Oral Odontologia • {SITE_CONFIG.brand.locationLabel}</span>
              </p>
              <p className="flex items-center gap-2 tabular-nums">
                <Phone className="w-3.5 h-3.5 text-[#A88B63] shrink-0" />
                <span>{SITE_CONFIG.contact.phoneDisplay} ({SITE_CONFIG.brand.cro})</span>
              </p>
            </div>

            <a
              href={SITE_CONFIG.contact.whatsappDefaultUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full min-h-[52px] inline-flex items-center justify-center gap-2.5 rounded-full bg-[#C5A880] hover:bg-[#A88B63] text-white px-6 py-3.5 text-xs uppercase tracking-[0.16em] font-semibold shadow-md transition-all active:scale-[0.99]"
            >
              <span>Agendar Avaliação no WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

