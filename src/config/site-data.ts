export interface ServiceItem {
  id: string;
  number: string;
  category: "Harmonização Orofacial" | "Odontologia Estética";
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  durationInfo: string;
  featured?: boolean;
  whatsappText: string;
}

export interface MethodPillar {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  image: string;
  objectPosition: string;
  aspectClass: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  procedure: string;
  rating: number;
  date: string;
  quote: string;
  highlight: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  technicalNote: string;
}

export const SITE_CONFIG = {
  brand: {
    name: "Dra. Lislânie Thaelis",
    clinicName: "Conceito Oral Odontologia",
    fullName: "Dra. Lislânie Thaelis | Conceito Oral Odontologia",
    subtitle: "ODONTOLOGIA & HARMONIZAÇÃO FACIAL",
    cro: "CRO-SC 12103",
    specialty: "Cirurgiã-Dentista • Harmonização Orofacial & Estética do Sorriso",
    city: "Videira",
    state: "SC",
    locationLabel: "Videira - SC",
    addressFull: "Consultório Boutique Privativo — Conceito Oral Odontologia • Videira, Santa Catarina",
    mapsQuery: "Conceito Oral Odontologia Dra Lislanie Thaelis Videira SC",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Conceito+Oral+Odontologia+Videira+SC",
  },
  contact: {
    phoneRaw: "5549999256694",
    phoneDisplay: "+55 (49) 99925-6694",
    whatsappDefaultUrl:
      "https://wa.me/5549999256694?text=Ol%C3%A1%2C+Dra.+Lisl%C3%A2nie%21+Visitei+o+site+e+gostaria+de+agendar+uma+consulta+de+avalia%C3%A7%C3%A3o+personalizada.",
    email: "conceitooralodontologia@gmail.com",
    instagramHandle: "@dra.lislaniethaelis",
    instagramUrl: "https://www.instagram.com/dra.lislaniethaelis/",
  },
  hours: {
    weekdays: "Segunda a Sexta-feira",
    morning: "08:30 às 12:00",
    afternoon: "13:30 às 19:00",
    weekend: "Sábados e Domingos: Fechado",
    notice: "Atendimento estritamente sob agendamento prévio para preservação total do sigilo e conforto.",
    schemaOpeningHours: "Mo-Fr 08:30-12:00 13:30-19:00",
  },
  navigation: [
    { label: "Procedimentos", href: "#procedimentos" },
    { label: "O Método", href: "#metodo" },
    { label: "A Clínica", href: "#clinica" },
    { label: "Avaliações", href: "#avaliacoes" },
    { label: "Dúvidas", href: "#faq" },
    { label: "Localização", href: "#contato" },
  ],
  hero: {
    eyebrow: "ODONTOLOGIA ESTÉTICA & HARMONIZAÇÃO OROFACIAL • VIDEIRA - SC",
    headlinePart1: "A arte de realçar a sua beleza com ",
    headlineItalic1: "sutileza",
    headlinePart2: ", elegância e segurança médica.",
    subheadline:
      "Procedimentos orofaciais avançados e estética do sorriso conduzidos pela Dra. Lislânie Thaelis. Protocolos desenhados para devolver o frescor da pele e a harmonia do seu rosto, sem abrir mão da sua naturalidade.",
    primaryCta: "Agendar Consulta de Avaliação",
    secondaryCta: "Conhecer os Procedimentos",
    badges: [
      { id: "anatomia", label: "Planejamento Anatômico 1 a 1" },
      { id: "anvisa", label: "Produtos Biocompatíveis Anvisa" },
      { id: "boutique", label: "Consultório Boutique Privativo" },
    ],
  },
  services: [
    {
      id: "toxina-botulinica",
      number: "01",
      category: "Harmonização Orofacial",
      title: "Toxina Botulínica Preventiva e Reparadora",
      subtitle: "Modulação Muscular & Prevenção Dinâmica",
      description:
        "Suavização cirúrgica de linhas hipercinéticas na testa, glabela e região periorbital, com arqueamento sutil da cauda das sobrancelhas e controle terapêutico do bruxismo sem congelar sua expressão.",
      highlights: [
        "Preservação do movimento natural e expressão autêntica",
        "Protocolo terapêutico para hipertrofia de masseter e bruxismo",
        "Toxina purificada de alta precisão biológica",
      ],
      durationInfo: "Aplicação em 30 min • Retorno imediato",
      featured: true,
      whatsappText:
        "Olá, Dra. Lislânie! Gostaria de saber mais sobre Toxina Botulínica Preventiva e Reparadora e agendar uma avaliação.",
    },
    {
      id: "preenchimento-labial",
      number: "02",
      category: "Harmonização Orofacial",
      title: "Preenchimento e Escultura Labial",
      subtitle: "Proporção Áurea & Hidratação Profunda",
      description:
        "Definição milimétrica do arco do cupido, contorno do filtro labial e volumização harmônica com ácido hialurônico ultramacio, respeitando a dinâmica do seu sorriso e o biótipo facial.",
      highlights: [
        "Efeito gloss de hidratação tecidual sem aspecto projetado",
        "Integração direta entre suporte labial e exposição dental",
        "Técnica atraumática com anestesia intraoral indolor",
      ],
      durationInfo: "Sessão de 45 a 60 min • Conforto absoluto",
      featured: true,
      whatsappText:
        "Olá, Dra. Lislânie! Gostaria de saber mais sobre Preenchimento e Escultura Labial e agendar uma avaliação.",
    },
    {
      id: "bioestimuladores-colageno",
      number: "03",
      category: "Harmonização Orofacial",
      title: "Bioestimuladores de Colágeno (Radiesse / Sculptra)",
      subtitle: "Gerenciamento do Envelhecimento & Firmeza Dérmica",
      description:
        "Redensificação dérmica progressiva e sustentação biológica profunda que reativam a produção natural de colágeno tipo I, combatendo a flacidez tecidual com resultados elegantes e duradouros.",
      highlights: [
        "Efeito de pele descansada, luminosa e firme ao toque",
        "Banco de colágeno preventivo sem ganho de volume excessivo",
        "Biocompatibilidade certificada com ação de até 24 meses",
      ],
      durationInfo: "Protocolo personalizado • Estímulo contínuo",
      featured: false,
      whatsappText:
        "Olá, Dra. Lislânie! Gostaria de saber mais sobre Bioestimuladores de Colágeno (Radiesse/Sculptra) e agendar uma avaliação.",
    },
    {
      id: "sustentacao-malar-mandibular",
      number: "04",
      category: "Harmonização Orofacial",
      title: "Sustentação Malar, Mandibular e Mento",
      subtitle: "Reestruturação Tridimensional & Contorno Facial",
      description:
        "Reposicionamento estratégico dos coxins profundos de gordura, efeito lifting mecânico sutil e definição elegante da linha mandibular e do queixo, restaurando o triângulo da juventude.",
      highlights: [
        "Suavização indireta do sulco nasogeniano (bigode chinês)",
        "Refinamento de perfil (Perfiloplastia não cirúrgica)",
        "Reologia de ácido hialurônico específica para suporte ósseo",
      ],
      durationInfo: "Planejamento 3D • Resultado imediato e progressivo",
      featured: false,
      whatsappText:
        "Olá, Dra. Lislânie! Gostaria de saber mais sobre Sustentação Malar, Mandibular e Mento e agendar uma avaliação.",
    },
    {
      id: "lentes-contato-facetas",
      number: "05",
      category: "Odontologia Estética",
      title: "Lentes de Contato Dental & Facetas",
      subtitle: "Arquitetura do Sorriso & Naturalidade Óptica",
      description:
        "Reabilitação estética minimamente invasiva em porcelana ou resina de alta carga cerâmica para alinhamento de formato, fechamento de diastemas e devolução da textura e translucidez natural.",
      highlights: [
        "Mimética dental com microtextura e brilho vitrificado",
        "Harmonia entre linha do sorriso, zênite gengival e lábios",
        "Planejamento previsível com preservação da estrutura sadia",
      ],
      durationInfo: "Desenho personalizado • Acabamento microscópico",
      featured: false,
      whatsappText:
        "Olá, Dra. Lislânie! Gostaria de saber mais sobre Lentes de Contato Dental & Facetas e agendar uma avaliação.",
    },
    {
      id: "clareamento-dental",
      number: "06",
      category: "Odontologia Estética",
      title: "Clareamento Dental Fotoativado em Consultório",
      subtitle: "Luminosidade Segura & Blindagem Pulpar",
      description:
        "Protocolo clínico supervisionado de clareamento dental associado a dessensibilizantes nanotecnológicos, devolvendo o brilho jovial ao sorriso com controle rigoroso de sensibilidade.",
      highlights: [
        "Barreira gengival protetora e protocolo anti-sensibilidade",
        "Rejuvenescimento imediato da moldura do sorriso",
        "Acompanhamento individualizado do grau de saturação",
      ],
      durationInfo: "Sessões confortáveis • Brilho natural",
      featured: false,
      whatsappText:
        "Olá, Dra. Lislânie! Gostaria de saber mais sobre Clareamento Dental Fotoativado em Consultório e agendar uma avaliação.",
    },
  ] as ServiceItem[],
  authority: {
    eyebrow: "FILOSOFIA DO REJUVENESCIMENTO INVISÍVEL",
    titlePart1: "Rigor anatômico onde a ",
    titleItalic: "essência",
    titlePart2: " precede qualquer intervenção.",
    lead: "A verdadeira sofisticação na Harmonização Orofacial não está em transformar quem você é, mas em devolver ao seu rosto o descanso, a sustentação e a harmonia que o tempo suavemente deslocou.",
    bodyParagraph1:
      "Como Cirurgiã-Dentista (CRO-SC 12103), a Dra. Lislânie Thaelis fundamenta cada protocolo no domínio profundo da anatomia craniofacial, vascularização, inervação e biodinâmica entre músculos da face, suporte ósseo e arquitetura do sorriso.",
    bodyParagraph2:
      "Através da filosofia de dosimetria individualizada, trabalhamos com quantidades precisas em planos anatômicos estratégicos. O resultado é uma beleza silenciosa: você recebe elogios pelo viço e frescor da pele, jamais pelo estigma de um procedimento artificial.",
    quote:
      "“O segredo de um resultado elegante está no que decidimos preservar. Menos excesso, mais anatomia e respeito absoluto à identidade de cada paciente.”",
    pillars: [
      {
        number: "3D",
        title: "Avaliação Anatômica Tridimensional",
        subtitle: "Mapeamento Osteomuscular & Proporção Áurea",
        description:
          "Análise minuciosa da estrutura óssea, compartimentos de gordura, qualidade dérmica e dinâmica do sorriso em repouso e movimento antes de qualquer indicação.",
      },
      {
        number: "0.01ml",
        title: "Precisão Milimétrica na Dosimetria",
        subtitle: "Insumos Padrão Ouro ANVISA",
        description:
          "Seleção criteriosa da reologia de cada gel de ácido hialurônico e bioestimulador, priorizando naturalidade mecânica, integração tecidual e segurança vascular.",
      },
      {
        number: "1 : 1",
        title: "Atendimento Exclusivo sem Espera",
        subtitle: "Agenda Boutique com Intervalo Estendido",
        description:
          "Consultas com tempo ampliado na Conceito Oral Odontologia para escuta ativa, anestesia confortável sem pressa e preservação total da sua privacidade.",
      },
    ] as MethodPillar[],
  },
  gallery: {
    eyebrow: "CONCEITO ORAL ODONTOLOGIA • ARQUITETURA SENSORIAL",
    titlePart1: "Um refúgio de ",
    titleItalic: "naturalidade",
    titlePart2: " e privacidade em Videira.",
    description:
      "Cada detalhe do nosso consultório boutique foi desenhado para substituir a frieza hospitalar pela serenidade: superfícies orgânicas em mármore travertino curvo, marcenaria ripada em carvalho natural e iluminação difusa que acolhe desde o primeiro instante.",
    items: [
      {
        id: "recepcao-travertino",
        title: "Recepção em Travertino & Carvalho",
        subtitle: "Balcão esculpido em pedra natural com curvas orgânicas e assinatura em metal champanhe escovado.",
        tag: "Arquitetura & Acolhimento",
        image: "/hero-desktop.jpg",
        objectPosition: "object-left",
        aspectClass: "aspect-[16/10] sm:aspect-[16/9]",
      },
      {
        id: "lounge-espera",
        title: "Lounge Privativo de Espera Zero",
        subtitle: "Ambiente reservado com mobiliário orgânico e horários espaçados para que seu atendimento ocorra com total discrição.",
        tag: "Conforto & Sigilo",
        image: "/hero-desktop.jpg",
        objectPosition: "object-right",
        aspectClass: "aspect-[4/3]",
      },
      {
        id: "identidade-conceito",
        title: "Ateliê Clínico & Biossegurança",
        subtitle: "Integração entre tecnologia odontológica de ponta, rigor de esterilização e atmosfera sensorial relaxante.",
        tag: "Excelência Clínica",
        image: "/hero-mobile.jpg",
        objectPosition: "object-center",
        aspectClass: "aspect-[4/3]",
      },
    ] as GalleryItem[],
  },
  reviews: {
    eyebrow: "EXPERIÊNCIAS REAIS • PACIENTES CONCEITO ORAL",
    titlePart1: "A tranquilidade de se reconhecer no espelho com ",
    titleItalic: "sutileza",
    titlePart2: ".",
    averageRating: "5.0",
    totalLabel: "Excelência avaliada por pacientes em Videira e região",
    items: [
      {
        id: "rev-1",
        author: "Mariana C. S.",
        procedure: "Harmonização Facial & Bioestimulador",
        rating: 5,
        date: "Paciente Verificada • Videira, SC",
        highlight: "Naturalidade absoluta e zero dor",
        quote:
          "Eu tinha muito receio de ficar com o rosto marcado ou artificial. A Dra. Lislânie teve uma delicadeza ímpar desde a consulta: explicou cada ponto anatômico e propôs um plano super sutil. As pessoas comentam que estou com o rosto descansado e iluminado, mas ninguém diz que fiz procedimento.",
      },
      {
        id: "rev-2",
        author: "Fernanda R. M.",
        procedure: "Escultura Labial & Toxina Botulínica",
        rating: 5,
        date: "Paciente Verificada • Videira, SC",
        highlight: "Mão extremamente leve e anestesia indolor",
        quote:
          "O fato de ela ser cirurgiã-dentista faz toda a diferença no bloqueio anestésico — não senti absolutamente nada no preenchimento labial. O contorno ficou sofisticado, hidratado e proporcional ao meu sorriso. O consultório em si já transmite uma paz indescritível.",
      },
      {
        id: "rev-3",
        author: "Patrícia V. L.",
        procedure: "Estética do Sorriso & Rejuvenescimento Perioral",
        rating: 5,
        date: "Paciente Verificada • Videira, SC",
        highlight: "Atendimento sem pressa e transparência técnica",
        quote:
          "Pontualidade britânica e um cuidado que raramente vemos hoje. A consulta de avaliação é uma verdadeira aula sobre o nosso próprio rosto. Alinhamos clareamento, facetas e suporte labial em conjunto, e o resultado rejuvenesceu minha expressão com total elegância.",
      },
    ] as ReviewItem[],
  },
  faq: {
    eyebrow: "TRANSPARÊNCIA CLÍNICA & DÚVIDAS FREQUENTES",
    titlePart1: "Esclarecimentos para uma decisão segura e ",
    titleItalic: "consciente",
    titlePart2: ".",
    subtitle:
      "Reunimos as principais dúvidas abordadas em nossas consultas diagnósticas para que você compreenda nossa filosofia de trabalho antes mesmo de chegar ao consultório.",
    items: [
      {
        id: "faq-1",
        question: "A harmonização facial pode deixar meu rosto artificial ou inchado?",
        answer:
          "Não em nossa filosofia clínica. O aspecto artificial ('overfilled') ocorre quando há excesso de volume aplicado em planos incorretos. Na Conceito Oral, adotamos a dosimetria leve e progressiva: priorizamos a reestruturação de pontos de sustentação e o estímulo de colágeno próprio, respeitando rigorosamente os seus traços originais e a mímica facial.",
        technicalNote: "Protocolo de Dosimetria Individualizada • Respeito à Proporção Áurea",
      },
      {
        id: "faq-2",
        question: "Qual a durabilidade média do ácido hialurônico e dos bioestimuladores?",
        answer:
          "A cinética de absorção varia conforme o metabolismo individual e a reticulação do produto utilizado. Os preenchedores de ácido hialurônico de alta gama mantêm sua estrutura entre 12 e 18 meses. Já os bioestimuladores de colágeno (Radiesse e Sculptra) promovem neocolagênese contínua com efeitos de firmeza tecidual que perduram de 18 a 24 meses.",
        technicalNote: "Insumos Biocompatíveis Certificados ANVISA • Degradação Fisiológica Segura",
      },
      {
        id: "faq-3",
        question: "Como é realizada a primeira consulta de avaliação facial?",
        answer:
          "Nossa consulta inicial tem tempo estendido e foco diagnóstico. Realizamos fotografias clínicas padronizadas, análise da dinâmica muscular em movimento, avaliação da qualidade da pele e da harmonia com o sorriso. Ouvimos suas queixas sem pressa e desenhamos um plano de tratamento cronológico, transparente e alinhado às suas expectativas reais.",
        technicalNote: "Planejamento Clínico 1 a 1 • Sem Compromisso de Execução Imediata",
      },
      {
        id: "faq-4",
        question: "Preciso de repouso após os procedimentos injetáveis?",
        answer:
          "A grande maioria dos protocolos permite retorno imediato à rotina social e de trabalho no mesmo dia. Recomendamos apenas cuidados simples nas primeiras 24 a 48 horas, como evitar atividade física intensa, exposição ao calor excessivo (saunas ou sol direto) e manipulação da área tratada.",
        technicalNote: "Cânulas Atraumáticas • Recuperação Rápida e Discreta",
      },
      {
        id: "faq-5",
        question: "A harmonização orofacial complementa tratamentos dentários estéticos?",
        answer:
          "Totalmente. Dentes e tecidos faciais formam uma unidade estética inseparável: o suporte dos lábios depende do volume dental, e a exposição do sorriso é regida pela musculatura perioral. Integrar Lentes, Facetas ou Clareamento com a Harmonização Orofacial garante um resultado onde sorriso e face conversam em perfeita sinergia.",
        technicalNote: "Visão Integrada Orofacial • Domínio Anatômico Odontológico",
      },
    ] as FaqItem[],
  },
  footer: {
    closingHeadlinePart1: "A harmonia que o seu rosto merece, com a ",
    closingHeadlineItalic: "delicadeza",
    closingHeadlinePart2: " que você procura.",
    closingSubheadline:
      "Agende sua avaliação individualizada com a Dra. Lislânie Thaelis e descubra um protocolo desenhado exclusivamente para a sua anatomia.",
    ethicsDisclaimer:
      "Em estrita conformidade com o Código de Ética Odontológica (CFO), informamos que os tratamentos descritos possuem indicação individualizada mediante avaliação clínica presencial. Os resultados biológicos variam de acordo com o organismo e características anatômicas de cada paciente.",
  },
} as const;

export function buildWhatsAppLink(customText?: string): string {
  if (!customText) {
    return SITE_CONFIG.contact.whatsappDefaultUrl;
  }
  const encoded = encodeURIComponent(customText);
  return `https://wa.me/${SITE_CONFIG.contact.phoneRaw}?text=${encoded}`;
}

