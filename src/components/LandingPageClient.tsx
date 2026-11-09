"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { Navbar } from "./Navbar";
import { HeroSection } from "./HeroSection";
import { ServicesSection } from "./ServicesSection";
import { AuthoritySection } from "./AuthoritySection";
import { GallerySection } from "./GallerySection";
import { ReviewsSection } from "./ReviewsSection";
import { FaqSection } from "./FaqSection";
import { LocationSection } from "./LocationSection";
import { FooterAndFloatingCta } from "./FooterAndFloatingCta";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function LandingPageClient() {
  const mainRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // 1. Hero Entrance Timeline
        gsap.from(".hero-animate", {
          y: 24,
          opacity: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          clearProps: "transform",
        });

        // 2. Section Headers & Blocks Reveal
        const sections = gsap.utils.toArray<HTMLElement>(".reveal-section");
        sections.forEach((section) => {
          gsap.from(section, {
            y: 28,
            opacity: 0,
            duration: 0.85,
            ease: "power3.out",
            clearProps: "transform",
            scrollTrigger: {
              trigger: section,
              start: "top 90%",
              once: true,
            },
          });
        });

        // 3. Service Bento Cards Staggered Reveal
        const cards = gsap.utils.toArray<HTMLElement>(".service-card");
        if (cards.length > 0) {
          gsap.from(cards, {
            y: 24,
            opacity: 0,
            duration: 0.75,
            stagger: 0.08,
            ease: "power3.out",
            clearProps: "transform",
            scrollTrigger: {
              trigger: "#procedimentos",
              start: "top 88%",
              once: true,
            },
          });
        }

        // Refresh ScrollTrigger after initial layout calculation
        ScrollTrigger.refresh();
      });
    },
    { scope: mainRef }
  );

  return (
    <div ref={mainRef} className="relative min-h-screen overflow-x-clip bg-[#FAF8F5] text-[#2A2624]">
      {/* Fixed Editorial SVG Noise Overlay (Luxury Film Grain Texture) */}
      <svg
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.025]"
      >
        <filter id="editorial-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#editorial-noise)" />
      </svg>

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <HeroSection />
        <ServicesSection />
        <AuthoritySection />
        <GallerySection />
        <ReviewsSection />
        <FaqSection />
        <LocationSection />
      </main>

      {/* Footer & Discreet Floating WhatsApp CTA */}
      <FooterAndFloatingCta />
    </div>
  );
}

