"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Shield, EyeOff } from "lucide-react";
import { SITE_CONFIG } from "@/config/site-data";

export function GallerySection() {
  return (
    <section
      id="clinica"
      className="relative py-14 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Editorial Header */}
        <div className="reveal-section flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-12 mb-10 sm:mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#A88B63] font-medium mb-3">
              <span className="w-6 h-[1px] bg-[#C5A880]" />
              <span>{SITE_CONFIG.gallery.eyebrow}</span>
            </div>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl text-[#2A2624] font-medium leading-[1.12] tracking-tight text-balance">
              {SITE_CONFIG.gallery.titlePart1}
              <em className="italic font-normal text-[#8C6D46]">
                {SITE_CONFIG.gallery.titleItalic}
              </em>
              {SITE_CONFIG.gallery.titlePart2}
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#68625D] max-w-md leading-relaxed text-pretty">
            {SITE_CONFIG.gallery.description}
          </p>
        </div>

        {/* Architectural Magazine Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Primary Wide Showcase Card (7 Cols) */}
          <figure className="reveal-section group relative lg:col-span-7 rounded-3xl overflow-hidden border border-[#C5A880]/[0.22] bg-white/80 shadow-[0_10px_35px_rgba(42,38,36,0.04)] flex flex-col justify-between">
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-[#EFECE6]">
              <Image
                src="/hero-desktop.jpg"
                alt="Recepção em mármore travertino curvo, marcenaria ripada em carvalho e letreiro em metal nobre da Conceito Oral Odontologia — Dra. Lislânie Thaelis"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-left group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A2624]/65 via-transparent to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full backdrop-blur-md bg-[#FAF8F5]/90 border border-[#C5A880]/30 text-[10px] uppercase tracking-[0.18em] text-[#2A2624] font-medium">
                  <Sparkles className="w-3 h-3 text-[#A88B63]" />
                  Arquitetura Sensorial
                </span>
              </div>
              <figcaption className="absolute bottom-0 inset-x-0 p-6 sm:p-8 text-white">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#E5CFA8] font-medium mb-1">
                  01 • Recepção & Acolhimento
                </p>
                <h3 className="font-serif-editorial text-2xl sm:text-3xl font-medium tracking-tight text-balance">
                  Mármore Travertino Curvo & Marcenaria em Carvalho
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-white/85 max-w-xl text-pretty">
                  Design contemporâneo pensado para desacelerar sua rotina antes mesmo do início da consulta.
                </p>
              </figcaption>
            </div>
          </figure>

          {/* Secondary Vertical/Editorial Stack (5 Cols) */}
          <div className="reveal-section lg:col-span-5 flex flex-col gap-6">
            {/* Vertical Architectural Detail */}
            <figure className="group relative rounded-3xl overflow-hidden border border-[#C5A880]/[0.22] bg-white/80 shadow-[0_10px_35px_rgba(42,38,36,0.04)] flex-1 min-h-[260px]">
              <div className="relative w-full h-full min-h-[260px] overflow-hidden bg-[#EFECE6]">
                <Image
                  src="/hero-mobile.jpg"
                  alt="Detalhe vertical do letreiro institucional Dra. Lislânie Thaelis e lounge de espera privativo"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A2624]/70 via-[#2A2624]/15 to-transparent" />
                <figcaption className="absolute bottom-0 inset-x-0 p-6 text-white">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#E5CFA8] font-medium mb-1">
                    02 • Exclusividade
                  </p>
                  <h3 className="font-serif-editorial text-xl sm:text-2xl font-medium text-balance">
                    Lounge Boutique & Iluminação Difusa
                  </h3>
                  <p className="mt-1 text-xs text-white/85 text-pretty">
                    Intervalo estendido entre pacientes para preservar seu conforto e total discrição.
                  </p>
                </figcaption>
              </div>
            </figure>

            {/* Biosafety & Privacy Highlights Card */}
            <div className="rounded-3xl backdrop-blur-sm bg-white/80 border border-[#C5A880]/[0.22] p-6 sm:p-7 shadow-[0_6px_25px_rgba(42,38,36,0.03)]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <div className="w-9 h-9 rounded-2xl bg-[#FAF8F5] border border-[#C5A880]/25 flex items-center justify-center text-[#A88B63]">
                    <EyeOff className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif-editorial text-lg font-medium text-[#2A2624]">
                    Sigilo & Discrição
                  </h4>
                  <p className="text-xs text-[#68625D] leading-relaxed text-pretty">
                    Agendamento individualizado sem sala de espera lotada, garantindo privacidade absoluta.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="w-9 h-9 rounded-2xl bg-[#FAF8F5] border border-[#C5A880]/25 flex items-center justify-center text-[#A88B63]">
                    <Shield className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif-editorial text-lg font-medium text-[#2A2624]">
                    Rigor em Biossegurança
                  </h4>
                  <p className="text-xs text-[#68625D] leading-relaxed text-pretty">
                    Esterilização hospitalar rastreável e insumos selados abertos na presença do paciente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

