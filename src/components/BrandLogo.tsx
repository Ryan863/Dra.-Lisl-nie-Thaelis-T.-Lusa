import React from "react";
import { SITE_CONFIG } from "@/config/site-data";

interface BrandLogoProps {
  className?: string;
  showCro?: boolean;
  size?: "sm" | "md" | "lg";
}

export function BrandLogo({
  className = "",
  showCro = false,
  size = "md",
}: BrandLogoProps) {
  const monogramSize =
    size === "sm"
      ? "w-8 h-7"
      : size === "lg"
      ? "w-12 h-10"
      : "w-10 h-8";

  const titleSize =
    size === "sm"
      ? "text-sm sm:text-base"
      : size === "lg"
      ? "text-lg sm:text-xl"
      : "text-base sm:text-[17px]";

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Monograma Caligráfico LT + Flor de Lótus em Ouro Champanhe */}
      <div className="relative flex items-center justify-center shrink-0">
        <svg
          viewBox="0 0 120 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${monogramSize} text-[#A88B63] transition-transform duration-500 group-hover:scale-105`}
          aria-hidden="true"
        >
          {/* Traço caligráfico fluido inspirado no letreiro em metal escovado da recepção */}
          <path
            d="M16 42C14 26 36 18 62 25C84 31 102 35 112 24"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <path
            d="M57 14C46 28 32 62 35 78C37 86 45 82 54 68C64 52 72 30 76 18C70 36 56 68 58 80C60 87 68 80 78 60"
            stroke="#2A2624"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Pequena Flor de Lótus / Lírio estilizado no topo direito */}
          <path
            d="M101 18C101 13 105 10 105 10C105 10 109 13 109 18C109 21 105 23 105 23C105 23 101 21 101 18Z"
            stroke="#A88B63"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M105 23C101 23 97 20 96 16C99 15 102 17 104 20"
            stroke="#A88B63"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <path
            d="M105 23C109 23 113 20 114 16C111 15 108 17 106 20"
            stroke="#A88B63"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <circle cx="105" cy="6.5" r="1.5" fill="#A88B63" />
        </svg>
      </div>

      {/* Tipografia Editorial */}
      <div className="flex flex-col">
        <span
          className={`font-serif-editorial font-medium tracking-[0.14em] text-[#2A2624] uppercase leading-none ${titleSize}`}
        >
          DRA. LISLÂNIE THAELIS
        </span>
        <span className="font-sans-clinical tracking-[0.2em] text-[9px] sm:text-[10px] text-stone-700 uppercase mt-1.5 font-medium leading-none">
          {SITE_CONFIG.brand.subtitle}
        </span>
        {showCro && (
          <span className="font-sans-clinical tracking-[0.18em] text-[9px] text-[#A88B63] uppercase mt-1 tabular-nums">
            {SITE_CONFIG.brand.cro} • {SITE_CONFIG.brand.locationLabel}
          </span>
        )}
      </div>
    </div>
  );
}

