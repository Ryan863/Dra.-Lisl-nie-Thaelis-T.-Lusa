"use client";

import React, { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Sparkles,
  Clock,
  Flame,
  Feather,
  Heart,
  Droplets,
  Layers,
  Smile,
  ShieldCheck,
} from "lucide-react";
import { SITE_CONFIG, buildWhatsAppLink } from "@/config/site-data";

type CategoryFilter = "Todos" | "Harmonização Orofacial" | "Odontologia Estética";

export function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("Todos");

  const filteredServices =
    activeCategory === "Todos"
      ? SITE_CONFIG.services
      : SITE_CONFIG.services.filter((s) => s.category === activeCategory);

  const getServiceVisuals = (index: number) => {
    switch (index) {
      case 0:
        return {
          icon: Feather,
          badge: "Mais Procurado",
          badgeBg: "bg-[#7D5C43] text-[#FAF8F5]",
          borderAccent: "border-[#C5A880]/50 hover:border-[#C5A880]",
          cardBg: "bg-gradient-to-br from-white via-[#FCFAF7] to-[#F7F2EC]",
          glow: "from-[#C5A880]/15 via-transparent to-transparent",
          numberColor: "text-[#8C6D46]",
        };
      case 1:
        return {
          icon: Heart,
          badge: "Protocolo Assinatura",
          badgeBg: "bg-[#9A6559] text-white",
          borderAccent: "border-[#B98579]/40 hover:border-[#B98579]/80",
          cardBg: "bg-gradient-to-br from-white via-[#FAF5F3] to-[#F5ECE8]",
          glow: "from-[#B98579]/15 via-transparent to-transparent",
          numberColor: "text-[#9A6559]",
        };
      case 2:
        return {
          icon: Layers,
          badge: "Banco de Colágeno",
          badgeBg: "bg-[#2A2624] text-[#E5CFA8]",
          borderAccent: "border-[#C5A880]/35 hover:border-[#C5A880]/70",
          cardBg: "bg-gradient-to-br from-white via-[#F9F7F4] to-[#F1ECE4]",
          glow: "from-[#C5A880]/10 via-transparent to-transparent",
          numberColor: "text-[#8C6D46]",
        };
      case 3:
        return {
          icon: Droplets,
          badge: "Efeito Lifting 3D",
          badgeBg: "bg-[#5A4A3D] text-[#FAF8F5]",
          borderAccent: "border-[#C5A880]/35 hover:border-[#C5A880]/70",
          cardBg: "bg-gradient-to-br from-white via-[#F8F5F0] to-[#EFEAE2]",
          glow: "from-[#8C6D46]/10 via-transparent to-transparent",
          numberColor: "text-[#7D5C43]",
        };
      case 4:
        return {
          icon: Smile,
          badge: "Estética Óptica",
          badgeBg: "bg-[#3D4744] text-[#FAF8F5]",
          borderAccent: "border-[#859B94]/40 hover:border-[#859B94]/80",
          cardBg: "bg-gradient-to-br from-white via-[#F4F7F6] to-[#EAF0EE]",
          glow: "from-[#859B94]/12 via-transparent to-transparent",
          numberColor: "text-[#556F67]",
        };
      case 5:
      default:
        return {
          icon: Sparkles,
          badge: "Luminosidade Segura",
          badgeBg: "bg-[#A88B63] text-white",
          borderAccent: "border-[#C5A880]/35 hover:border-[#C5A880]/70",
          cardBg: "bg-gradient-to-br from-white via-[#FAF7F2] to-[#F4EEE3]",
          glow: "from-[#C5A880]/15 via-transparent to-transparent",
          numberColor: "text-[#8C6D46]",
        };
    }
  };

  return (
    <section
      id="procedimentos"
      className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FAF8F5] via-[#F4EFE9] to-[#FAF8F5] overflow-hidden"
    >
      {/* Visual background ambient lighting */}
      <div
        className="pointer-events-none absolute -top-40 right-10 w-[550px] h-[550px] rounded-full bg-[#C5A880]/12 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full bg-[#B98579]/10 blur-[130px]"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header with warm color badge */}
        <div className="reveal-section flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-12 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7D5C43]/10 border border-[#7D5C43]/20 text-xs tracking-[0.2em] uppercase text-[#7D5C43] font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>PROTOCOLOS CLÍNICOS PERSONALIZADOS</span>
            </div>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl text-[#201C1A] font-medium leading-[1.12] tracking-tight text-balance">
              Procedimentos com rigor anatômico e{" "}
              <span className="italic font-normal gold-text-gradient font-serif-editorial">
                naturalidade autêntica
              </span>
              .
            </h2>
          </div>

          <div className="flex flex-col sm:items-start lg:items-end gap-4">
            <p className="text-sm sm:text-base text-[#57514D] max-w-md text-pretty leading-relaxed">
              Diferente de padrões massificados, cada protocolo respeita a mímica, proporção áurea e a saúde do seu sorriso em ambiente privativo.
            </p>

            {/* Category Filter Pills with high contrast */}
            <div
              role="tablist"
              aria-label="Filtrar especialidades"
              className="inline-flex flex-wrap items-center gap-1.5 p-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#C5A880]/30 shadow-sm"
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
                      className={`px-4 py-2 rounded-full text-xs tracking-[0.1em] uppercase font-semibold transition-all duration-300 cursor-pointer min-h-[38px] ${
                        isActive
                          ? "bg-[#201C1A] text-[#FAF8F5] shadow-md"
                          : "text-[#68625D] hover:text-[#201C1A] hover:bg-[#FAF8F5]"
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

        {/* Bento Grid with rich card colors, icons and accents */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-7">
          {filteredServices.map((service, idx) => {
            const visual = getServiceVisuals(idx);
            const IconComponent = visual.icon;
            const waLink = buildWhatsAppLink(service.whatsappText);

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

            return (
              <article
                key={service.id}
                className={`service-card group relative rounded-3xl overflow-hidden backdrop-blur-md ${visual.cardBg} border ${visual.borderAccent} shadow-[0_10px_35px_rgba(42,38,36,0.06)] hover:shadow-[0_22px_50px_rgba(125,92,67,0.16)] p-6 sm:p-8 lg:p-9 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1 ${colSpanClass}`}
              >
                {/* Radial ambient glow on hover */}
                <div
                  className={`pointer-events-none absolute -top-12 -right-12 w-48 h-48 rounded-full bg-gradient-to-br ${visual.glow} blur-2xl group-hover:scale-125 transition-transform duration-700`}
                  aria-hidden="true"
                />

                {/* Top Meta Row: Number + Icon + High-End Tag */}
                <div>
                  <div className="flex items-center justify-between gap-3 pb-5 mb-5 border-b border-[#2A2624]/[0.08]">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-2xl bg-white/95 border border-[#C5A880]/30 shadow-xs flex items-center justify-center text-[#8C6D46] group-hover:bg-[#7D5C43] group-hover:text-white transition-colors duration-300">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <span className={`font-serif-editorial text-2xl sm:text-3xl font-medium ${visual.numberColor} tabular-nums leading-none`}>
                          {service.number}
                        </span>
                        <span className="block text-[10px] uppercase tracking-[0.18em] text-[#78716C] font-medium">
                          Protocolo
                        </span>
                      </div>
                    </div>

                    {/* Tag badge with real color */}
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-[11px] tracking-[0.14em] uppercase font-semibold shadow-xs ${visual.badgeBg}`}
                    >
                      <Sparkles className="w-3 h-3 shrink-0" />
                      <span>{visual.badge}</span>
                    </span>
                  </div>

                  {/* Category & Title */}
                  <div className="mb-2">
                    <span className="inline-block text-[11px] uppercase tracking-[0.16em] text-[#8C6D46] font-semibold">
                      {service.subtitle}
                    </span>
                  </div>
                  <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#201C1A] font-medium leading-[1.18] tracking-tight text-balance group-hover:text-[#7D5C43] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description - streamlined with better readability */}
                  <p className="mt-3 text-sm sm:text-[15px] text-[#57514D] leading-relaxed text-pretty">
                    {service.description}
                  </p>

                  {/* Highlights list with champagne golden check pills */}
                  <div className="mt-6 pt-4 border-t border-[#2A2624]/[0.06]">
                    <ul className="space-y-2.5">
                      {service.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#2A2624] font-medium"
                        >
                          <span className="mt-0.5 w-4 h-4 rounded-full bg-[#C5A880]/30 text-[#6D5335] flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </span>
                          <span className="leading-snug text-pretty">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer: Duration Pill + Colored CTA Button */}
                <div className="mt-8 pt-5 border-t border-[#2A2624]/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="inline-flex items-center gap-2 text-xs text-[#68625D] tabular-nums font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#8C6D46] shrink-0" />
                    <span>{service.durationInfo}</span>
                  </div>

                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Solicitar avaliação sobre ${service.title} via WhatsApp`}
                    className="inline-flex items-center justify-center sm:justify-end gap-2 rounded-full bg-[#201C1A] group-hover:bg-[#7D5C43] text-white px-5 py-2.5 min-h-[44px] text-xs uppercase tracking-[0.14em] font-semibold transition-all duration-300 shadow-sm hover:shadow-md active:scale-95"
                  >
                    <span>Solicitar Avaliação</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#DFCDAF] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
