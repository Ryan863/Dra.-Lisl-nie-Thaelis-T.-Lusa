"use client";

import React from "react";
import { Star, Quote, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/config/site-data";

export function ReviewsSection() {
  return (
    <section
      id="avaliacoes"
      className="relative py-14 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-t border-[#C5A880]/15 bg-white/40"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header with 5.0 Verified Badge */}
        <div className="reveal-section flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#A88B63] font-medium mb-3">
              <span className="w-6 h-[1px] bg-[#C5A880]" />
              <span>{SITE_CONFIG.reviews.eyebrow}</span>
            </div>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl text-[#2A2624] font-medium leading-[1.12] tracking-tight text-balance">
              {SITE_CONFIG.reviews.titlePart1}
              <em className="italic font-normal text-[#8C6D46]">
                {SITE_CONFIG.reviews.titleItalic}
              </em>
              {SITE_CONFIG.reviews.titlePart2}
            </h2>
          </div>

          {/* 5.0 Rating Seal */}
          <div className="inline-flex items-center gap-4 px-5 py-3.5 rounded-2xl backdrop-blur-sm bg-white/85 border border-[#C5A880]/25 shadow-[0_4px_20px_rgba(42,38,36,0.03)] self-start lg:self-auto">
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-serif-editorial text-2xl sm:text-3xl font-medium text-[#2A2624] tabular-nums leading-none">
                  {SITE_CONFIG.reviews.averageRating}
                </span>
                <div className="flex items-center gap-0.5 text-[#C5A880]" aria-label="Nota 5 de 5 estrelas">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C5A880] text-[#C5A880]" />
                  ))}
                </div>
              </div>
              <span className="text-[11px] text-[#68625D] mt-1">
                {SITE_CONFIG.reviews.totalLabel}
              </span>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SITE_CONFIG.reviews.items.map((review) => (
            <article
              key={review.id}
              className="reveal-section rounded-3xl backdrop-blur-sm bg-white/80 hover:bg-white border border-[#C5A880]/[0.18] p-6 sm:p-8 flex flex-col justify-between shadow-[0_8px_30px_rgba(42,38,36,0.025)] transition-all duration-300"
            >
              <div>
                {/* Stars & Quote Icon */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <div className="flex items-center gap-1 text-[#C5A880]" aria-label="5 estrelas">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#C5A880] text-[#C5A880]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#C5A880]/35" aria-hidden="true" />
                </div>

                {/* Highlight Tag */}
                <p className="inline-block px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#C5A880]/20 text-[11px] uppercase tracking-[0.12em] text-[#8C6D46] font-medium mb-4">
                  {review.highlight}
                </p>

                {/* Review Text */}
                <blockquote className="text-sm sm:text-[15px] text-[#2A2624]/90 leading-relaxed text-pretty">
                  “{review.quote}”
                </blockquote>
              </div>

              {/* Author Footer */}
              <footer className="mt-6 pt-5 border-t border-stone-900/[0.06] flex items-center justify-between gap-3">
                <div>
                  <p className="font-serif-editorial text-lg font-medium text-[#2A2624]">
                    {review.author}
                  </p>
                  <p className="text-xs text-[#68625D]">{review.procedure}</p>
                </div>

                <span className="inline-flex items-center gap-1 text-[11px] text-[#8C6D46] font-medium shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Verificada</span>
                </span>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

