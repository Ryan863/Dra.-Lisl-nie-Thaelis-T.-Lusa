"use client";

import React from "react";
import { Award, ShieldCheck, Sparkles, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "@/config/site-data";
import { BrandLogo } from "./BrandLogo";

export function AuthoritySection() {
  return (
    <section
      id="metodo"
      className="relative py-14 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-y border-[#C5A880]/15 bg-gradient-to-b from-white/50 via-[#FAF8F5] to-white/40"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Column 1 (7 Cols): Philosophy & Dental Anatomy Mastery */}
          <div className="reveal-section lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#A88B63] font-medium">
              <span className="w-6 h-[1px] bg-[#C5A880]" />
              <span>{SITE_CONFIG.authority.eyebrow}</span>
            </div>

            <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl text-[#2A2624] font-medium leading-[1.12] tracking-tight text-balance">
              {SITE_CONFIG.authority.titlePart1}
              <em className="italic font-normal text-[#8C6D46]">
                {SITE_CONFIG.authority.titleItalic}
              </em>
              {SITE_CONFIG.authority.titlePart2}
            </h2>

            <p className="font-serif-editorial text-xl sm:text-2xl text-[#2A2624]/90 leading-relaxed text-pretty font-normal">
              {SITE_CONFIG.authority.lead}
            </p>

            <div className="space-y-4 text-sm sm:text-base text-[#68625D] leading-relaxed text-pretty">
              <p>{SITE_CONFIG.authority.bodyParagraph1}</p>
              <p>{SITE_CONFIG.authority.bodyParagraph2}</p>
            </div>

            {/* Editorial Quote Box with Brand Signature */}
            <blockquote className="relative rounded-3xl backdrop-blur-sm bg-white/80 border border-[#C5A880]/[0.22] p-6 sm:p-8 shadow-[0_8px_30px_rgba(42,38,36,0.03)]">
              <p className="font-serif-editorial italic text-lg sm:text-xl text-[#2A2624] leading-relaxed text-pretty">
                {SITE_CONFIG.authority.quote}
              </p>

              <footer className="mt-6 pt-5 border-t border-stone-900/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <BrandLogo size="sm" showCro />
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F5] border border-[#C5A880]/25 text-[11px] uppercase tracking-[0.15em] text-[#8C6D46] font-medium tabular-nums self-start sm:self-auto">
                  <Award className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>{SITE_CONFIG.brand.cro}</span>
                </div>
              </footer>
            </blockquote>

            {/* Direct Action Link */}
            <div className="pt-2 flex flex-wrap items-center gap-6">
              <a
                href={SITE_CONFIG.contact.whatsappDefaultUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-[#2A2624] hover:bg-[#3E3835] text-[#FAF8F5] px-7 py-4 min-h-[50px] text-xs uppercase tracking-[0.16em] font-medium transition-all duration-300 shadow-sm"
              >
                <span>Agendar Avaliação com a Dra. Lislânie</span>
                <ArrowUpRight className="w-4 h-4 text-[#C5A880]" />
              </a>

              <div className="flex items-center gap-2 text-xs text-[#68625D]">
                <ShieldCheck className="w-4 h-4 text-[#A88B63] shrink-0" />
                <span>Protocolos estritamente individualizados</span>
              </div>
            </div>
          </div>

          {/* Column 2 (5 Cols): Three Editorial Metric Cards */}
          <div className="reveal-section lg:col-span-5 space-y-4 sm:space-y-5">
            {SITE_CONFIG.authority.pillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className="group relative rounded-3xl backdrop-blur-sm bg-white/80 hover:bg-white border border-[#C5A880]/[0.18] hover:border-[#C5A880]/40 p-6 sm:p-7 transition-all duration-500 shadow-[0_6px_24px_rgba(42,38,36,0.025)]"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <span className="font-serif-editorial text-3xl sm:text-4xl font-medium text-[#8C6D46] tabular-nums tracking-tight">
                    {pillar.number}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#FAF8F5] border border-stone-900/[0.06] text-[10px] uppercase tracking-[0.18em] text-[#68625D] tabular-nums">
                    <Sparkles className="w-2.5 h-2.5 text-[#C5A880]" />
                    Pilar 0{index + 1}
                  </span>
                </div>

                <p className="text-[11px] uppercase tracking-[0.16em] text-[#A88B63] font-medium mb-1">
                  {pillar.subtitle}
                </p>
                <h3 className="font-serif-editorial text-xl sm:text-2xl text-[#2A2624] font-medium leading-[1.18] text-balance">
                  {pillar.title}
                </h3>
                <p className="mt-2.5 text-sm text-[#68625D] leading-relaxed text-pretty">
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

