"use client";

import React, { useState } from "react";
import { ArrowUpRight, Check, Sparkles, Clock } from "lucide-react";
import { SITE_CONFIG, buildWhatsAppLink } from "@/config/site-data";

type CategoryFilter = "Todos" | "Harmonização Orofacial" | "Odontologia Estética";

export function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("Todos");

  const filteredServices =
    activeCategory === "Todos"
      ? SITE_CONFIG.services
      : SITE_CONFIG.services.filter((s) => s.category === activeCategory);

  return (
    <section
      id="procedimentos"
      className="relative py-14 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Editorial Header */}
        <div className="reveal-section flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-12 mb-10 sm:mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#A88B63] font-medium mb-3">
              <span className="w-6 h-[1px] bg-[#C5A880]" />
              <span>PROTOCOLOS CLÍNICOS PERSONALIZADOS</span>
            </div>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl text-[#2A2624] font-medium leading-[1.12] tracking-tight text-balance">
              Procedimentos desenhados com rigor anatômico e{" "}
              <em className="italic font-normal text-[#8C6D46]">naturalidade</em>.
            </h2>
          </div>

          <div className="flex flex-col sm:items-start lg:items-end gap-4">
            <p className="text-sm sm:text-base text-[#68625D] max-w-md text-pretty leading-relaxed">
              Integramos o gerenciamento do envelhecimento facial à reabilitação estética do sorriso em protocolos exclusivos 1 a 1.
            </p>

            {/* Category Filter Pills */}
            <div
              role="tablist"
              aria-label="Filtrar especialidades"
              className="inline-flex flex-wrap items-center gap-1.5 p-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-[#C5A880]/20"
            >
              {(["Todos", "Harmonização Orofacial", "Odontologia Estética"] as CategoryFilter[]).map(
                (cat) => {
                  const isActive = activeCategory === cat;
                  return (
                    <button
                      key={cat}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-4 py-2 rounded-full text-xs tracking-[0.1em] uppercase font-medium transition-all duration-300 cursor-pointer min-h-[38px] ${
                        isActive
                          ? "bg-[#2A2624] text-[#FAF8F5] shadow-xs"
                          : "text-[#68625D] hover:text-[#2A2624]"
                      }`}
                    >
                      {cat}
                    </button>
                  );
                }
              )}
            </div>
          </div>
        </div>

        {/* Asymmetric Editorial Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6">
          {filteredServices.map((service, idx) => {
            // Asymmetric span logic when showing all 6 items:
            // Items 01 and 02 span 6 cols each (featured top row)
            // Items 03, 04, 05, 06 span 6 cols on lg or asymmetric 7/5 rhythm
            const colSpanClass =
              activeCategory === "Todos"
                ? idx === 0
                  ? "lg:col-span-7"
                  : idx === 1
                  ? "lg:col-span-5"
                  : idx === 2
                  ? "lg:col-span-5"
                  : idx === 3
                  ? "lg:col-span-7"
                  : "lg:col-span-6"
                : "lg:col-span-6";

            const waLink = buildWhatsAppLink(service.whatsappText);

            return (
              <article
                key={service.id}
                className={`service-card group relative rounded-3xl backdrop-blur-sm bg-white/75 hover:bg-white/95 border border-[#C5A880]/[0.18] hover:border-[#C5A880]/45 shadow-[0_8px_30px_rgb(42,38,36,0.03)] hover:shadow-[0_16px_40px_rgb(197,168,128,0.10)] p-6 sm:p-8 lg:p-9 flex flex-col justify-between transition-all duration-500 ${colSpanClass}`}
              >
                {/* Top Meta Row: Number + Category Tag */}
                <div>
                  <div className="flex items-center justify-between gap-3 pb-6 mb-6 border-b border-stone-900/[0.06]">
                    <div className="flex items-baseline gap-2.5">
                      <span className="font-serif-editorial text-3xl sm:text-4xl font-medium text-[#C5A880] tabular-nums leading-none">
                        {service.number}
                      </span>
                      <span className="text-[11px] uppercase tracking-[0.18em] text-[#68625D] font-medium">
                        / Protocolo
                      </span>
                    </div>

                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-[11px] tracking-[0.14em] uppercase font-medium border ${
                        service.category === "Harmonização Orofacial"
                          ? "bg-[#C5A880]/10 text-[#8C6D46] border-[#C5A880]/25"
                          : "bg-[#B98579]/10 text-[#9A6559] border-[#B98579]/25"
                      }`}
                    >
                      <Sparkles className="w-3 h-3 shrink-0" />
                      <span>{service.category}</span>
                    </span>
                  </div>

                  {/* Subtitle & Main Title */}
                  <p className="text-xs uppercase tracking-[0.16em] text-[#A88B63] font-medium mb-2">
                    {service.subtitle}
                  </p>
                  <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#2A2624] font-medium leading-[1.16] tracking-tight text-balance">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3.5 text-sm sm:text-[15px] text-[#68625D] leading-relaxed text-pretty">
                    {service.description}
                  </p>

                  {/* Technical Highlights List */}
                  <ul className="mt-6 space-y-2.5">
                    {service.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#2A2624]/90"
                      >
                        <span className="mt-0.5 w-4 h-4 rounded-full bg-[#C5A880]/15 text-[#8C6D46] flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                        </span>
                        <span className="leading-snug text-pretty">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer: Clinical Timing + Individual WhatsApp CTA */}
                <div className="mt-8 pt-5 border-t border-stone-900/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="inline-flex items-center gap-2 text-xs text-[#68625D] tabular-nums">
                    <Clock className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                    <span>{service.durationInfo}</span>
                  </div>

                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Consultar sobre ${service.title} via WhatsApp`}
                    className="inline-flex items-center justify-center sm:justify-end gap-2 rounded-full bg-[#FAF8F5] group-hover:bg-[#C5A880] text-[#2A2624] group-hover:text-white border border-[#C5A880]/30 group-hover:border-[#C5A880] px-5 py-2.5 min-h-[44px] text-xs uppercase tracking-[0.14em] font-medium transition-all duration-300"
                  >
                    <span>Solicitar Avaliação</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

