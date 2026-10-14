import RestonRealEstateClient from "./RestonRealEstateClient";

export const metadata = {
  title: "Reston VA Real Estate: The Definitive Planned Community & Silver Line Metro Guide",
  description: "Exhaustive guide to Reston VA real estate: Robert E. Simon's master plan, Lake Anne, Reston Town Center, Silver Line Metrorail, South Lakes IB pyramid, and zoning.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/reston-va-real-estate",
  },
  openGraph: {
    title: "Reston VA Real Estate: The Definitive Planned Community & Silver Line Metro Guide",
    description: "Exhaustive guide to Reston VA real estate: Robert E. Simon's master plan, Lake Anne, Reston Town Center, Silver Line Metrorail, South Lakes IB pyramid, and zoning.",
    url: "https://www.homesalesfairfax.com/reston-va-real-estate",
    siteName: "homesalesfairfax.com",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reston VA Real Estate: The Definitive Planned Community & Silver Line Metro Guide",
    description: "Exhaustive guide to Reston VA real estate: Robert E. Simon's master plan, Lake Anne, Reston Town Center, Silver Line Metrorail, South Lakes IB pyramid, and zoning.",
  },
};

export default function RestonRealEstatePage() {
  const schemas = [
    // 1. Article / Research Monograph Schema
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": "https://www.homesalesfairfax.com/reston-va-real-estate#article",
      "headline": "Reston VA Real Estate: The Definitive Guide to Master-Planned Urbanism, Lakefront Living & the Silver Line Tech Corridor",
      "description": "Exhaustive guide to Reston VA real estate: Robert E. Simon's master plan, Lake Anne, Reston Town Center, Silver Line Metrorail, South Lakes IB pyramid, and zoning.",
      "url": "https://www.homesalesfairfax.com/reston-va-real-estate",
      "inLanguage": "en-US",
      "publisher": {
        "@type": "Organization",
        "name": "homesalesfairfax.com",
        "url": "https://www.homesalesfairfax.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.homesalesfairfax.com/icon.jpeg",
        },
      },
      "mainEntityOfPage": "https://www.homesalesfairfax.com/reston-va-real-estate",
      "about": [
        "Reston, Virginia",
        "Fairfax County real estate",
        "Planned Residential Community (PRC)",
        "Robert E. Simon master plan",
        "Lake Anne Historic District",
        "Reston Town Center",
        "Silver Line Metrorail",
        "Reston Association (RA)",
        "South Lakes High School IB pyramid",
        "Dulles Technology Corridor",
      ],
    },
    // 2. BreadcrumbList Schema
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.homesalesfairfax.com/",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Reston VA Real Estate Guide",
          "item": "https://www.homesalesfairfax.com/reston-va-real-estate",
        },
      ],
    },
    // 3. FAQPage Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.homesalesfairfax.com/reston-va-real-estate#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What was Robert E. Simon's founding vision for Reston?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Founded in 1964 by Robert E. Simon (whose initials R-E-S formed 'Reston'), the community was designed around seven guiding principles of modern urban planning. Simon envisioned an inclusive new town where residents could live, work, play, and age in place across diverse housing typologies, preserving extensive open natural spaces, lakes, and cluster woodlands rather than succumbing to automobile-dependent tract sprawl.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the Reston Association (RA) and what amenities does it provide?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Reston Association (RA) is one of the largest and most comprehensive community associations in the United States, governing residential properties within Reston's planned community footprint. RA maintains more than 1,350 acres of open parkland, four major lakes (Anne, Thoreau, Audubon, and Newport), 15 outdoor swimming pools, 52 tennis and pickleball courts, and 55 miles of paved, shaded multi-use pathways.",
          },
        },
        {
          "@type": "Question",
          "name": "How does Metrorail Silver Line access operate in Reston?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Reston is directly served by two Washington Metrorail Silver Line stations: Wiehle-Reston East Station (opened 2014) and Reston Town Center Station (opened 2022). These stations provide seamless, one-seat rapid rail transit east into Tysons, Arlington, and downtown Washington, D.C., and west directly to Washington Dulles International Airport and eastern Loudoun County.",
          },
        },
        {
          "@type": "Question",
          "name": "What is Planned Residential Community (PRC) zoning?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "PRC (Planned Residential Community) is a specialized zoning classification within the Fairfax County Zoning Ordinance (zMOD) specifically tailored to Reston. It permits clustered residential density in townhomes, lakefront clusters, and urban mid-rises while legally mandating the preservation of substantial open recreational green space, stream valleys, and community lakes.",
          },
        },
        {
          "@type": "Question",
          "name": "What architectural styles define Lake Anne Village Center?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lake Anne Village Center is celebrated internationally for its mid-century European-style Brutalist and modernist architecture, designed by architects Whittlesey & Conklin (James Rossant). Built in the mid-1960s, the center features crescent-shaped concrete residential flats above pedestrian retail arcades on Washington Plaza, flanked by modern Waterview townhomes with private boat moorings.",
          },
        },
        {
          "@type": "Question",
          "name": "What public high school pyramids serve Reston?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Reston is primarily served by South Lakes High School (home of the Seahawks, renowned for its prestigious International Baccalaureate IB Diploma Programme) fed by Langston Hughes Middle and elementary schools including Terraset and Hunters Woods. Northern sections feed into Herndon High School. Students are also eligible for competitive regional admission to Thomas Jefferson High School for Science and Technology (TJHSST).",
          },
        },
        {
          "@type": "Question",
          "name": "What distinguishes Reston Town Center (RTC)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Reston Town Center is the premier open-air downtown urban district of western Fairfax County. It features luxury high-rise condominium towers (such as The Midtown and The Carlton), Class-A trophy office buildings housing national tech firms, an open-air pavilion (hosting outdoor ice skating in winter), boutique shopping, fine dining, and pedestrian gathering plazas.",
          },
        },
        {
          "@type": "Question",
          "name": "How are real estate property taxes assessed in Reston?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pursuant to Virginia Code Title 58.1-3201, all real property in Reston is assessed annually at 100 percent of fair market value by the Fairfax County Department of Tax Administration (DTA). Homeowners pay unified county property taxes (supporting public schools, safety, and infrastructure) alongside annual Reston Association (RA) assessments for local recreational maintenance.",
          },
        },
        {
          "@type": "Question",
          "name": "What boating and lake recreation amenities exist in Reston?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Reston encompasses four distinct man-made lakes: Lake Anne, Lake Thoreau, Lake Audubon, and Lake Newport. Residents enjoy pontoon boating, electric-powered cruising, kayaking, stand-up paddleboarding, and freshwater fishing from private neighborhood docks and community launches.",
          },
        },
        {
          "@type": "Question",
          "name": "What major tech employers anchor the Reston corridor?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Situated within the Dulles Technology Corridor along Route 267, Reston hosts major corporate regional headquarters, research hubs, and aerospace contractors including Google, Microsoft, General Dynamics, Leidos, CACI, Carahsoft, and Bechtel, creating a robust local employment base that sustains continuous housing demand.",
          },
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <RestonRealEstateClient />
    </>
  );
}
