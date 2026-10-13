import MerrifieldClient from "./MerrifieldClient";

export const metadata = {
  title: "Merrifield VA Real Estate: The Definitive Guide to Mosaic District, Inova & Transit",
  description: "Exhaustive guide to Merrifield VA real estate: Mosaic District urban lofts, Inova Fairfax health campus, Dunn Loring Metro, Falls Church High pyramid, and zoning.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/merrifield-va-real-estate",
  },
  openGraph: {
    title: "Merrifield VA Real Estate: The Definitive Guide to Mosaic District, Inova & Transit",
    description: "Exhaustive guide to Merrifield VA real estate: Mosaic District urban lofts, Inova Fairfax health campus, Dunn Loring Metro, Falls Church High pyramid, and zoning.",
    url: "https://www.homesalesfairfax.com/merrifield-va-real-estate",
    siteName: "homesalesfairfax.com",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Merrifield VA Real Estate: The Definitive Guide to Mosaic District, Inova & Transit",
    description: "Exhaustive guide to Merrifield VA real estate: Mosaic District urban lofts, Inova Fairfax health campus, Dunn Loring Metro, Falls Church High pyramid, and zoning.",
  },
};

export default function MerrifieldPage() {
  const schemas = [
    // 1. Article / Research Monograph Schema
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": "https://www.homesalesfairfax.com/merrifield-va-real-estate#article",
      "headline": "Merrifield VA Real Estate: The Definitive Guide to the Mosaic District, Inova Regional Health Nexus & Transit Infill",
      "description": "Exhaustive guide to Merrifield VA real estate: Mosaic District urban lofts, Inova Fairfax health campus, Dunn Loring Metro, Falls Church High pyramid, and zoning.",
      "url": "https://www.homesalesfairfax.com/merrifield-va-real-estate",
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
      "mainEntityOfPage": "https://www.homesalesfairfax.com/merrifield-va-real-estate",
      "about": [
        "Merrifield, Virginia",
        "Fairfax County real estate",
        "Mosaic District",
        "Dunn Loring-Merrifield Metro",
        "Inova Fairfax Medical Campus",
        "Fairfax County zoning zMOD",
        "Falls Church High School pyramid",
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
          "name": "Merrifield VA Real Estate Guide",
          "item": "https://www.homesalesfairfax.com/merrifield-va-real-estate",
        },
      ],
    },
    // 3. FAQPage Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.homesalesfairfax.com/merrifield-va-real-estate#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is Merrifield an incorporated municipality or part of Fairfax County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Merrifield is an unincorporated census-designated place (CDP) governed directly by the Fairfax County Board of Supervisors within the Providence Magisterial District. It is not an incorporated city or town. Property owners in Merrifield pay only the single Fairfax County base real estate levy and countywide service assessments, avoiding secondary municipal town taxes.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the Mosaic District and how does it influence Merrifield real estate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Mosaic District is an internationally recognized 31-acre New Urbanist master-planned mixed-use community in the heart of Merrifield. Developed by EDENS, it transformed a former industrial and multiplex cinema site into a pedestrianized town center featuring high-end boutique shopping, the Angelika Film Center, chef-driven dining, Strawberry Park outdoor event lawns, contemporary luxury townhomes, and modern residential lofts, serving as a primary regional lifestyle anchor.",
          },
        },
        {
          "@type": "Question",
          "name": "What role does the Inova Fairfax Medical Campus play in the local housing market?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Inova Fairfax Medical Campus—housing Northern Virginia's only Level 1 Trauma Center, the Inova Schar Cancer Institute, and the Inova Children's Hospital—is the largest non-governmental employer in Fairfax County. Its presence within Merrifield creates sustained year-round residential demand and consistent liquidity from physicians, researchers, medical executives, and healthcare professionals.",
          },
        },
        {
          "@type": "Question",
          "name": "Which Metrorail station serves Merrifield?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Merrifield is served directly by the Dunn Loring-Merrifield Metrorail Station on the Washington Metro Orange Line, situated on Gallows Road. The heavy-rail transit station provides direct, rapid service west to Vienna and east to Ballston, the Pentagon, and downtown Washington, D.C., and is flanked by transit-oriented residential developments.",
          },
        },
        {
          "@type": "Question",
          "name": "What architectural home styles predominate in Merrifield?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Merrifield is characterized by dynamic architectural diversity: sleek contemporary multi-level urban townhomes with rooftop terraces in and around Mosaic, modern mid-rise and high-rise luxury condominium lofts, and established mid-century brick ramblers, split-levels, and custom craftsman infill homes in surrounding residential pockets.",
          },
        },
        {
          "@type": "Question",
          "name": "Which public schools serve Merrifield residents?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Residential sectors of Merrifield are served by Fairfax County Public Schools (FCPS), primarily within the Falls Church High School academic pyramid (fed by Luther Jackson Middle School, Fairhill Elementary, and Pine Spring Elementary). Bordering quadrants intersect the George C. Marshall High School International Baccalaureate (IB) pyramid and the Oakton High School pyramid.",
          },
        },
        {
          "@type": "Question",
          "name": "What arterial highways connect Merrifield to the regional employment grid?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Merrifield occupies a dominant highway junction, located at the crossroads of Route 50 (Arlington Boulevard), Route 29 (Lee Highway), and Gallows Road, with immediate access to Interstate 66 and the Interstate 495 Capital Beltway (including direct access to the 495 Express Lanes).",
          },
        },
        {
          "@type": "Question",
          "name": "How is zoning regulated across Merrifield?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Land use is governed under the Fairfax County Zoning Ordinance (zMOD). Key districts include the Planned Development Commercial (PDC) and Planned Residential Mixed-Use (PRM) classifications in the Mosaic core, Commercial Revitalization Area (CRA) guidelines, and standard R-3 and R-4 single-family residential districts in surrounding subdivisions.",
          },
        },
        {
          "@type": "Question",
          "name": "Do residential communities in Merrifield have mandatory HOAs or condominium fees?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Properties located within the Mosaic District and surrounding townhome or condominium complexes are governed by mandatory community associations that manage structured garages, common courtyards, swimming pools, and architectural covenants. In contrast, older single-family neighborhoods bordering Merrifield operate as fee-simple non-HOA properties.",
          },
        },
        {
          "@type": "Question",
          "name": "How does the Accotink Creek watershed affect property development in Merrifield?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tributaries of the Accotink Creek and Holmes Run stream valleys traverse Merrifield, triggering statutory 100-foot Resource Protection Area (RPA) buffer restrictions under the Chesapeake Bay Preservation Act. These buffers prohibit unpermitted tree clearing and impermeable construction within riparian zones to safeguard regional water quality.",
          },
        },
      ],
    },
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <MerrifieldClient />
    </>
  );
}
