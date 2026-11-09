"use client";

import React from "react";
import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, Sparkles, ShieldCheck, HeartHandshake } from "lucide-react";
import { SITE_CONFIG } from "@/config/site-data";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative w-full min-h-[88dvh] sm:min-h-[95dvh] flex flex-col justify-end md:justify-center pt-24 pb-12 sm:pt-28 sm:pb-16 lg:py-24 overflow-hidden"
    >
      {/* Background Reception Photography: Desktop vs Mobile */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        {/* Desktop Image */}
        <div className="hidden md:block relative w-full h-full">
          <Image
            src="/hero-desktop.jpg"
            alt="Recepção contemporânea em mármore travertino curvo e ripado em carvalho da clínica Conceito Oral Odontologia — Dra. Lislânie Thaelis em Videira, SC"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-[1.01]"
          />
        </div>

        {/* Mobile Image */}
        <div className="block md:hidden relative w-full h-full">
          <Image
            src="/hero-mobile.jpg"
            alt="Consultório boutique Dra. Lislânie Thaelis — Odontologia e Harmonização Facial em Videira, SC"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_22%]"
          />
        </div>

        {/* Strategic Dual Reading Protection Gradients */}
        {/* Mobile vertical protection gradient: keeps upper signage visible while protecting lower editorial copy */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/85 to-transparent md:bg-gradient-to-r md:from-[#FAF8F5] md:via-[#FAF8F5]/88 md:to-transparent"
          aria-hidden="true"
        />
        {/* Top subtle vignette for navbar legibility */}
        <div
          className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#FAF8F5]/80 via-[#FAF8F5]/35 to-transparent"
          aria-hidden="true"
        />
        {/* Bottom seamless transition into page background */}
        <div
          className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#FAF8F5] to-transparent"
          aria-hidden="true"
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 md:pt-8">
        <div className="max-w-2xl lg:max-w-[640px]">
          {/* 1. Eyebrow */}
          <div className="hero-animate inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/75 backdrop-blur-md border border-[#C5A880]/25 mb-5 shadow-[0_2px_12px_rgba(42,38,36,0.04)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
            <span className="text-[10px] sm:text-xs tracking-[0.2em] text-[#A88B63] font-medium uppercase">
              {SITE_CONFIG.hero.eyebrow}
            </span>
          </div>

          {/* 2. Magnetic Editorial H1 */}
          <h1 className="hero-animate font-serif-editorial text-3xl sm:text-5xl lg:text-6xl text-[#2A2624] font-medium tracking-tight leading-[1.12] text-balance">
            {SITE_CONFIG.hero.headlinePart1}
            <em className="italic font-normal text-[#8C6D46]">
              {SITE_CONFIG.hero.headlineItalic1}
            </em>
            {SITE_CONFIG.hero.headlinePart2}
          </h1>

          {/* 3. Subheadline */}
          <p className="hero-animate mt-4 sm:mt-6 text-sm sm:text-base lg:text-[17px] text-[#68625D] leading-relaxed text-pretty max-w-xl font-normal">
            {SITE_CONFIG.hero.subheadline}
          </p>

          {/* 4. Dual Action CTAs */}
          <div className="hero-animate mt-7 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
            <a
              href={SITE_CONFIG.contact.whatsappDefaultUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#C5A880] hover:bg-[#A88B63] text-white px-7 py-4 min-h-[52px] text-xs sm:text-[13px] uppercase tracking-[0.16em] font-medium shadow-sm hover:shadow-md transition-all duration-300 active:scale-[0.99]"
            >
              <span>{SITE_CONFIG.hero.primaryCta}</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="#procedimentos"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-white/75 hover:bg-white/95 backdrop-blur-sm border border-[#C5A880]/25 hover:border-[#C5A880]/50 text-[#2A2624] px-6 py-4 min-h-[52px] text-xs sm:text-[13px] uppercase tracking-[0.14em] font-medium transition-all duration-300"
            >
              <span>{SITE_CONFIG.hero.secondaryCta}</span>
              <ArrowDownRight className="w-4 h-4 text-[#A88B63] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
          </div>

          {/* 5. Credibility Pills Bar */}
          <div className="hero-animate mt-8 sm:mt-10 pt-6 border-t border-[#C5A880]/20">
            <ul
              aria-label="Diferenciais de credibilidade clínica"
              className="flex flex-wrap items-center gap-2 sm:gap-2.5"
            >
              <li className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full backdrop-blur-sm bg-white/75 border border-[#C5A880]/[0.18] text-xs text-[#2A2624] font-medium shadow-[0_2px_10px_rgba(42,38,36,0.02)]">
                <Sparkles className="w-3.5 h-3.5 text-[#A88B63] shrink-0" aria-hidden="true" />
                <span>✨ Planejamento Anatômico 1 a 1</span>
              </li>
              <li className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full backdrop-blur-sm bg-white/75 border border-[#C5A880]/[0.18] text-xs text-[#2A2624] font-medium shadow-[0_2px_10px_rgba(42,38,36,0.02)]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#A88B63] shrink-0" aria-hidden="true" />
                <span>🛡️ Produtos Biocompatíveis Anvisa</span>
              </li>
              <li className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full backdrop-blur-sm bg-white/75 border border-[#C5A880]/[0.18] text-xs text-[#2A2624] font-medium shadow-[0_2px_10px_rgba(42,38,36,0.02)]">
                <HeartHandshake className="w-3.5 h-3.5 text-[#B98579] shrink-0" aria-hidden="true" />
                <span>🤍 Consultório Boutique Privativo</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

