"use client";

import React from "react";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  AtSign,
  Navigation,
  ArrowUpRight,
  CalendarCheck,
} from "lucide-react";
import { SITE_CONFIG } from "@/config/site-data";

export function LocationSection() {
  return (
    <section
      id="contato"
      className="relative py-14 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-t border-[#C5A880]/15 bg-gradient-to-b from-white/30 to-[#FAF8F5]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="reveal-section max-w-2xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#A88B63] font-medium mb-3">
            <span className="w-6 h-[1px] bg-[#C5A880]" />
            <span>LOCALIZAÇÃO, HORÁRIOS & CANAIS DIRETOS</span>
          </div>
          <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl text-[#2A2624] font-medium leading-[1.12] tracking-tight text-balance">
            Planeje sua visita ao nosso consultório em{" "}
            <em className="italic font-normal text-[#8C6D46]">Videira</em>.
          </h2>
        </div>

        {/* High-End Split Card */}
        <div className="reveal-section rounded-3xl backdrop-blur-sm bg-white/85 border border-[#C5A880]/[0.24] shadow-[0_14px_45px_rgba(42,38,36,0.04)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#C5A880]/18">
            {/* Left Column (7 Cols): Address, GPS Route & Direct Channels */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F5] border border-[#C5A880]/25 text-[11px] uppercase tracking-[0.16em] text-[#8C6D46] font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>{SITE_CONFIG.brand.clinicName}</span>
                </div>

                <div>
                  <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#2A2624] font-medium leading-tight text-balance">
                    {SITE_CONFIG.brand.fullName}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-[#68625D] leading-relaxed text-pretty">
                    {SITE_CONFIG.brand.addressFull}
                  </p>
                </div>

                {/* Direct Contact Channels Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {/* WhatsApp / Phone */}
                  <a
                    href={SITE_CONFIG.contact.whatsappDefaultUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-2xl bg-[#FAF8F5]/80 hover:bg-[#FAF8F5] border border-stone-900/[0.06] hover:border-[#C5A880]/40 p-4 transition-all duration-300 flex items-start gap-3.5"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#C5A880]/25 flex items-center justify-center text-[#A88B63] shrink-0 group-hover:bg-[#C5A880] group-hover:text-white transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[10px] uppercase tracking-[0.16em] text-[#68625D]">
                        WhatsApp & Agendamentos
                      </span>
                      <span className="mt-0.5 block text-sm font-medium text-[#2A2624] tabular-nums truncate">
                        {SITE_CONFIG.contact.phoneDisplay}
                      </span>
                    </div>
                  </a>

                  {/* Instagram */}
                  <a
                    href={SITE_CONFIG.contact.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-2xl bg-[#FAF8F5]/80 hover:bg-[#FAF8F5] border border-stone-900/[0.06] hover:border-[#C5A880]/40 p-4 transition-all duration-300 flex items-start gap-3.5"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#C5A880]/25 flex items-center justify-center text-[#A88B63] shrink-0 group-hover:bg-[#C5A880] group-hover:text-white transition-colors">
                      <AtSign className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[10px] uppercase tracking-[0.16em] text-[#68625D]">
                        Instagram Oficial
                      </span>
                      <span className="mt-0.5 block text-sm font-medium text-[#2A2624] truncate">
                        {SITE_CONFIG.contact.instagramHandle}
                      </span>
                    </div>
                  </a>

                  {/* Official Email (Spans 2 cols on sm) */}
                  <a
                    href={`mailto:${SITE_CONFIG.contact.email}`}
                    className="sm:col-span-2 group rounded-2xl bg-[#FAF8F5]/80 hover:bg-[#FAF8F5] border border-stone-900/[0.06] hover:border-[#C5A880]/40 p-4 transition-all duration-300 flex items-center justify-between gap-3.5"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-white border border-[#C5A880]/25 flex items-center justify-center text-[#A88B63] shrink-0 group-hover:bg-[#C5A880] group-hover:text-white transition-colors">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <span className="block text-[10px] uppercase tracking-[0.16em] text-[#68625D]">
                          E-mail Oficial
                        </span>
                        <span className="mt-0.5 block text-xs sm:text-sm font-medium text-[#2A2624] truncate">
                          {SITE_CONFIG.contact.email}
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#C5A880] shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Google Maps Action Bar */}
              <div className="pt-4 border-t border-stone-900/[0.06] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <a
                  href={SITE_CONFIG.brand.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#2A2624] hover:bg-[#3E3835] text-white px-6 py-3.5 min-h-[48px] text-xs uppercase tracking-[0.15em] font-medium transition-all duration-300 shadow-xs"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Traçar Rota no Google Maps</span>
                </a>

                <span className="text-xs text-[#68625D] text-center sm:text-right">
                  Videira • Santa Catarina
                </span>
              </div>
            </div>

            {/* Right Column (5 Cols): Opening Hours Table & Boutique Scheduling Note */}
            <div className="lg:col-span-5 p-6 sm:p-10 lg:p-12 bg-[#FAF8F5]/60 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between gap-2">
                  <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#8C6D46] font-medium">
                    <Clock className="w-4 h-4 text-[#C5A880]" />
                    <span>Horários de Atendimento</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.16em] px-2.5 py-1 rounded-full bg-white border border-[#C5A880]/25 text-[#2A2624] font-medium">
                    Hora Marcada
                  </span>
                </div>

                <h4 className="font-serif-editorial text-2xl text-[#2A2624] font-medium">
                  Agenda Clínica Semanal
                </h4>

                {/* Tabular Hours Schedule */}
                <div className="divide-y divide-stone-900/[0.07] border-y border-stone-900/[0.07] text-sm tabular-nums">
                  <div className="py-3.5 flex items-center justify-between gap-4">
                    <span className="text-[#2A2624] font-medium">Segunda a Sexta (Manhã)</span>
                    <span className="text-[#68625D] font-medium">{SITE_CONFIG.hours.morning}</span>
                  </div>
                  <div className="py-3.5 flex items-center justify-between gap-4">
                    <span className="text-[#2A2624] font-medium">Segunda a Sexta (Tarde)</span>
                    <span className="text-[#68625D] font-medium">{SITE_CONFIG.hours.afternoon}</span>
                  </div>
                  <div className="py-3.5 flex items-center justify-between gap-4">
                    <span className="text-[#68625D]">Sábados e Domingos</span>
                    <span className="text-[#B98579] font-medium">Fechado</span>
                  </div>
                </div>

                {/* Private Notice */}
                <div className="rounded-2xl bg-white/90 border border-[#C5A880]/20 p-4 flex items-start gap-3">
                  <CalendarCheck className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                  <p className="text-xs text-[#68625D] leading-relaxed text-pretty">
                    {SITE_CONFIG.hours.notice}
                  </p>
                </div>
              </div>

              <a
                href={SITE_CONFIG.contact.whatsappDefaultUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#C5A880] hover:bg-[#A88B63] text-white px-6 py-4 min-h-[50px] text-xs uppercase tracking-[0.16em] font-medium shadow-sm transition-all duration-300"
              >
                <span>Verificar Disponibilidade de Agenda</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
