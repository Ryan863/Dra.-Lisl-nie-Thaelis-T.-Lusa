"use client";

import React from "react";
import Image from "next/image";
import { Award, ShieldCheck, Sparkles, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/config/site-data";
import { BrandLogo } from "./BrandLogo";

export function AuthoritySection() {
  return (
    <section
      id="metodo"
      className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#1D1917] text-[#FAF8F5] overflow-hidden"
    >
      {/* Background Architectural Subtle Glow & Warm Timber Reflection */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#C5A880]/10 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#8C6D46]/15 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Column 1 (7 Cols): Philosophy & Dental Anatomy Mastery with Luxury Dark Background */}
          <div className="reveal-section lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C5A880]/15 border border-[#C5A880]/30 text-xs tracking-[0.2em] uppercase text-[#E5CFA8] font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>{SITE_CONFIG.authority.eyebrow}</span>
            </div>

            <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl text-[#FAF8F5] font-medium leading-[1.12] tracking-tight text-balance">
              {SITE_CONFIG.authority.titlePart1}
              <span className="italic font-normal gold-text-gradient font-serif-editorial">
                {SITE_CONFIG.authority.titleItalic}
              </span>
              {SITE_CONFIG.authority.titlePart2}
            </h2>

            <p className="font-serif-editorial text-xl sm:text-2xl text-[#E5DCD3] leading-relaxed text-pretty font-normal">
              {SITE_CONFIG.authority.lead}
            </p>

            {/* Split description with warm contrast */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[#A89F95] leading-relaxed">
              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
                <p className="text-white font-medium mb-1 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A880]" />
                  Domínio Anatômico Craniofacial
                </p>
                <p>{SITE_CONFIG.authority.bodyParagraph1}</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
                <p className="text-white font-medium mb-1 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A880]" />
                  Dosimetria Leve & Segura
                </p>
                <p>{SITE_CONFIG.authority.bodyParagraph2}</p>
              </div>
            </div>

            {/* Editorial Quote Box in Warm Gold Rim */}
            <blockquote className="relative rounded-3xl bg-gradient-to-r from-[#292320] to-[#201C1A] border border-[#C5A880]/30 p-6 sm:p-8 shadow-xl">
              <p className="font-serif-editorial italic text-lg sm:text-xl text-[#FAF8F5] leading-relaxed text-pretty">
                {SITE_CONFIG.authority.quote}
              </p>

              <footer className="mt-5 pt-4 border-t border-white/[0.1] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-xs uppercase tracking-[0.16em] text-[#E5CFA8] font-medium">
                  Dra. Lislânie Thaelis • Cirurgiã-Dentista
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A880]/20 border border-[#C5A880]/40 text-[11px] uppercase tracking-[0.15em] text-[#DFCDAF] font-semibold tabular-nums">
                  <Award className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>{SITE_CONFIG.brand.cro}</span>
                </div>
              </footer>
            </blockquote>

            {/* Direct Action Link */}
            <div className="pt-2 flex flex-wrap items-center gap-5">
              <a
                href={SITE_CONFIG.contact.whatsappDefaultUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-[#C5A880] hover:bg-[#A88B63] text-[#1D1917] px-7 py-4 min-h-[52px] text-xs uppercase tracking-[0.16em] font-bold transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
              >
                <span>Agendar Consulta de Avaliação</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              <div className="flex items-center gap-2 text-xs text-[#A89F95]">
                <ShieldCheck className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span>Atendimento estritamente sob hora marcada</span>
              </div>
            </div>
          </div>

          {/* Column 2 (5 Cols): Three Warm Wooden/Gold Accented Pillars */}
          <div className="reveal-section lg:col-span-5 space-y-4 sm:space-y-5">
            {SITE_CONFIG.authority.pillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className="group relative rounded-3xl bg-gradient-to-br from-[#27221F] via-[#201C1A] to-[#1A1614] border border-[#C5A880]/25 hover:border-[#C5A880]/60 p-6 sm:p-7 transition-all duration-500 shadow-lg hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <span className="font-serif-editorial text-3xl sm:text-4xl font-medium gold-text-gradient tabular-nums tracking-tight">
                    {pillar.number}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A880]/15 border border-[#C5A880]/30 text-[10px] uppercase tracking-[0.18em] text-[#E5CFA8] font-semibold tabular-nums">
                    <Sparkles className="w-3 h-3 text-[#C5A880]" />
                    Pilar 0{index + 1}
                  </span>
                </div>

                <p className="text-[11px] uppercase tracking-[0.16em] text-[#C5A880] font-semibold mb-1">
                  {pillar.subtitle}
                </p>
                <h3 className="font-serif-editorial text-xl sm:text-2xl text-[#FAF8F5] font-medium leading-[1.18] text-balance">
                  {pillar.title}
                </h3>
                <p className="mt-2.5 text-sm text-[#A89F95] leading-relaxed text-pretty">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
