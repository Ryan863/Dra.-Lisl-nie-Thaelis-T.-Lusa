"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, AtSign, Mail, MapPin, MessageCircle, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/config/site-data";
import { BrandLogo } from "./BrandLogo";

export function FooterAndFloatingCta() {
  const [showFloatingBtn, setShowFloatingBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Appears only after scrolling past the Hero section (~620px)
      const threshold = Math.min(window.innerHeight * 0.75, 680);
      setShowFloatingBtn(window.scrollY > threshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="relative pt-14 sm:pt-20 pb-12 px-4 sm:px-6 lg:px-8 border-t border-[#C5A880]/20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto">
          {/* Closing High-Conversion Editorial Banner */}
          <div className="reveal-section relative rounded-3xl overflow-hidden bg-[#2A2624] text-[#FAF8F5] p-8 sm:p-12 lg:p-16 mb-14 sm:mb-20 shadow-[0_20px_50px_rgba(42,38,36,0.14)] border border-[#C5A880]/25">
            {/* Subtle radial gold glow inside dark charcoal card */}
            <div
              className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#C5A880]/15 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#C5A880]/30 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#E5CFA8] font-medium">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>ATENDIMENTO INDIVIDUALIZADO • VIDEIRA - SC</span>
              </div>

              <h2 className="font-serif-editorial text-3xl sm:text-5xl lg:text-[54px] text-[#FAF8F5] font-medium leading-[1.12] tracking-tight text-balance">
                {SITE_CONFIG.footer.closingHeadlinePart1}
                <em className="italic font-normal text-[#E5CFA8]">
                  {SITE_CONFIG.footer.closingHeadlineItalic}
                </em>
                {SITE_CONFIG.footer.closingHeadlinePart2}
              </h2>

              <p className="text-sm sm:text-base text-[#FAF8F5]/80 max-w-xl mx-auto leading-relaxed text-pretty">
                {SITE_CONFIG.footer.closingSubheadline}
              </p>

              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={SITE_CONFIG.contact.whatsappDefaultUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-[#C5A880] hover:bg-[#A88B63] text-white px-8 py-4 min-h-[54px] text-xs sm:text-[13px] uppercase tracking-[0.16em] font-semibold shadow-md transition-all duration-300 active:scale-[0.99]"
                >
                  <span>Agendar Consulta pelo WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Institutional Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-[#C5A880]/20">
            {/* Brand Column (5 Cols) */}
            <div className="md:col-span-5 space-y-4">
              <BrandLogo showCro />
              <p className="text-xs sm:text-sm text-[#68625D] max-w-sm leading-relaxed text-pretty pt-1">
                Odontologia Estética, Harmonização Orofacial de Alto Padrão e Gerenciamento do Envelhecimento com rigor anatômico e discrição.
              </p>
            </div>

            {/* Quick Navigation (3 Cols) */}
            <div className="md:col-span-3 space-y-3">
              <p className="text-xs uppercase tracking-[0.18em] text-[#2A2624] font-semibold">
                Navegação
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-[#68625D]">
                {SITE_CONFIG.navigation.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="hover:text-[#2A2624] transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical & Contact Info (4 Cols) */}
            <div className="md:col-span-4 space-y-3">
              <p className="text-xs uppercase tracking-[0.18em] text-[#2A2624] font-semibold">
                Responsável Técnica & Contato
              </p>
              <div className="space-y-2 text-xs sm:text-sm text-[#68625D]">
                <p className="font-medium text-[#2A2624] tabular-nums">
                  {SITE_CONFIG.brand.name} • {SITE_CONFIG.brand.cro}
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                  <span>{SITE_CONFIG.brand.clinicName} — Videira, SC</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                  <a
                    href={`mailto:${SITE_CONFIG.contact.email}`}
                    className="hover:text-[#2A2624] transition-colors truncate"
                  >
                    {SITE_CONFIG.contact.email}
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <AtSign className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                  <a
                    href={SITE_CONFIG.contact.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#2A2624] transition-colors"
                  >
                    {SITE_CONFIG.contact.instagramHandle}
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* CFO Ethics Disclaimer & Copyright */}
          <div className="pt-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 text-[11px] text-[#68625D] leading-relaxed">
            <p className="max-w-3xl text-pretty">
              {SITE_CONFIG.footer.ethicsDisclaimer}
            </p>
            <p className="shrink-0 tabular-nums">
              © {currentYear} {SITE_CONFIG.brand.fullName}. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Discreet High-End Floating WhatsApp CTA (Only visible after scrolling past Hero) */}
      <aside
        aria-label="Atendimento rápido via WhatsApp"
        className={`fixed bottom-5 right-5 z-40 transition-all duration-500 ${
          showFloatingBtn
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <a
          href={SITE_CONFIG.contact.whatsappDefaultUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Agendar consulta pelo WhatsApp com a Dra. Lislânie Thaelis"
          className="group relative flex items-center gap-2.5 rounded-full backdrop-blur-md bg-[#2A2624]/95 hover:bg-[#2A2624] text-[#FAF8F5] border border-[#C5A880]/40 px-4 py-3 sm:px-5 sm:py-3.5 shadow-[0_10px_30px_rgba(42,38,36,0.22)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A880] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#C5A880]" />
          </span>
          <MessageCircle className="w-4 h-4 text-[#C5A880] shrink-0" />
          <span className="text-xs uppercase tracking-[0.14em] font-medium">
            Agendar Avaliação
          </span>
        </a>
      </aside>
    </>
  );
}
