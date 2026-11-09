import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/config/site-data";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://conceitooralodontologia.com.br"
  ),
  title: "Dra. Lislânie Thaelis | Harmonização Orofacial e Odontologia em Videira - SC",
  description:
    "Clínica boutique de harmonização facial e estética dental liderada pela Dra. Lislânie Thaelis em Videira - SC. Rejuvenescimento natural, bioestimuladores e atendimento exclusivo.",
  keywords: [
    "Dra. Lislânie Thaelis",
    "Conceito Oral Odontologia",
    "Harmonização Orofacial Videira",
    "Odontologia Estética Videira SC",
    "Toxina Botulínica Videira",
    "Preenchimento Labial Videira",
    "Bioestimuladores de Colágeno Videira",
    "Lentes de Contato Dental Videira",
    "Dentista em Videira SC",
  ],
  authors: [{ name: "Dra. Lislânie Thaelis - CRO-SC 12103" }],
  creator: "Dra. Lislânie Thaelis | Conceito Oral Odontologia",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Dra. Lislânie Thaelis | Harmonização Orofacial e Odontologia em Videira - SC",
    description:
      "Clínica boutique de harmonização facial e estética dental liderada pela Dra. Lislânie Thaelis em Videira - SC. Rejuvenescimento natural, bioestimuladores e atendimento exclusivo.",
    siteName: "Dra. Lislânie Thaelis | Conceito Oral Odontologia",
    images: [
      {
        url: "/hero-desktop.jpg",
        width: 1200,
        height: 630,
        alt: "Recepção Conceito Oral Odontologia — Dra. Lislânie Thaelis em Videira, SC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dra. Lislânie Thaelis | Harmonização Orofacial e Odontologia em Videira - SC",
    description:
      "Clínica boutique de harmonização facial e estética dental liderada pela Dra. Lislânie Thaelis em Videira - SC. Rejuvenescimento natural, bioestimuladores e atendimento exclusivo.",
    images: ["/hero-desktop.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Dentist", "LocalBusiness", "MedicalBusiness"],
    name: "Dra. Lislânie Thaelis - Conceito Oral Odontologia",
    description:
      "Clínica boutique de harmonização facial e estética dental liderada pela Dra. Lislânie Thaelis em Videira - SC. Rejuvenescimento natural, bioestimuladores e atendimento exclusivo.",
    image: "/hero-desktop.jpg",
    telephone: "+5549999256694",
    email: SITE_CONFIG.contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Videira",
      addressRegion: "Santa Catarina",
      addressCountry: "BR",
    },
    areaServed: "Videira, Santa Catarina, Brasil",
    openingHours: "Mo-Fr 08:30-12:00 13:30-19:00",
    priceRange: "$$$",
    sameAs: [SITE_CONFIG.contact.instagramUrl],
  };

  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${jakarta.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans-clinical antialiased bg-[#FAF8F5] text-[#2A2624] selection:bg-[#C5A880]/25 selection:text-[#2A2624]">
        {children}
      </body>
    </html>
  );
}

