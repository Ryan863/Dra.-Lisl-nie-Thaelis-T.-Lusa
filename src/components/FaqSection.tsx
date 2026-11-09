"use client";

import React, { useState } from "react";
import { Plus, Minus, Sparkles, MessageCircle } from "lucide-react";
import { SITE_CONFIG, buildWhatsAppLink } from "@/config/site-data";

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(SITE_CONFIG.faq.items[0].id);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="relative py-14 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-t border-[#C5A880]/15"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Sticky Header Column (5 Cols) */}
          <div className="reveal-section lg:col-span-5 lg:sticky lg:top-28 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#A88B63] font-medium">
              <span className="w-6 h-[1px] bg-[#C5A880]" />
              <span>{SITE_CONFIG.faq.eyebrow}</span>
            </div>

            <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl text-[#2A2624] font-medium leading-[1.12] tracking-tight text-balance">
              {SITE_CONFIG.faq.titlePart1}
              <em className="italic font-normal text-[#8C6D46]">
                {SITE_CONFIG.faq.titleItalic}
              </em>
              {SITE_CONFIG.faq.titlePart2}
            </h2>

            <p className="text-sm sm:text-base text-[#68625D] leading-relaxed text-pretty">
              {SITE_CONFIG.faq.subtitle}
            </p>

            {/* Direct Question Card */}
            <div className="pt-2">
              <div className="rounded-3xl backdrop-blur-sm bg-white/80 border border-[#C5A880]/[0.22] p-6 space-y-4 shadow-[0_6px_24px_rgba(42,38,36,0.025)]">
                <p className="font-serif-editorial text-xl text-[#2A2624] font-medium">
                  Deseja uma orientação específica para o seu caso?
                </p>
                <p className="text-xs sm:text-sm text-[#68625D] leading-relaxed text-pretty">
                  Nossa equipe está disponível para esclarecer dúvidas sobre preparo, valores de consulta e disponibilidade de agenda em Videira.
                </p>
                <a
                  href={buildWhatsAppLink(
                    "Olá, Dra. Lislânie! Visitei o site, li as dúvidas frequentes e gostaria de tirar uma dúvida sobre avaliação."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#8C6D46] hover:text-[#2A2624] font-semibold transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#C5A880]" />
                  <span>Conversar pelo WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Accordion List (7 Cols) */}
          <div className="reveal-section lg:col-span-7 space-y-3.5">
            {SITE_CONFIG.faq.items.map((item, index) => {
              const isOpen = openId === item.id;
              const contentId = `faq-panel-${item.id}`;
              const triggerId = `faq-trigger-${item.id}`;

              return (
                <div
                  key={item.id}
                  className={`rounded-3xl backdrop-blur-sm transition-all duration-300 border ${
                    isOpen
                      ? "bg-white/95 border-[#C5A880]/45 shadow-[0_10px_30px_rgba(197,168,128,0.08)]"
                      : "bg-white/70 hover:bg-white/85 border-[#C5A880]/[0.18]"
                  }`}
                >
                  <h3>
                    <button
                      id={triggerId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={contentId}
                      onClick={() => toggleItem(item.id)}
                      className="w-full text-left px-6 py-5 sm:px-7 sm:py-6 flex items-start justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880] rounded-3xl"
                    >
                      <div className="flex items-baseline gap-3.5">
                        <span className="font-sans-clinical text-xs text-[#C5A880] font-medium tabular-nums">
                          0{index + 1}
                        </span>
                        <span className="font-serif-editorial text-xl sm:text-2xl text-[#2A2624] font-medium leading-snug text-balance">
                          {item.question}
                        </span>
                      </div>

                      <span
                        className={`mt-1 w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                          isOpen
                            ? "bg-[#C5A880] border-[#C5A880] text-white rotate-180"
                            : "bg-[#FAF8F5] border-[#C5A880]/30 text-[#2A2624]"
                        }`}
                        aria-hidden="true"
                      >
                        {isOpen ? (
                          <Minus className="w-4 h-4 stroke-[2]" />
                        ) : (
                          <Plus className="w-4 h-4 stroke-[2]" />
                        )}
                      </span>
                    </button>
                  </h3>

                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={triggerId}
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-1 border-t border-stone-900/[0.05] space-y-4">
                        <p className="text-sm sm:text-[15px] text-[#68625D] leading-relaxed text-pretty">
                          {item.answer}
                        </p>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#C5A880]/20 text-[11px] text-[#8C6D46] font-medium">
                          <Sparkles className="w-3 h-3 text-[#C5A880]" />
                          <span>{item.technicalNote}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

