import DunnLoringClient from "./DunnLoringClient";

export const metadata = {
  title: "Dunn Loring VA Real Estate: The Definitive Guide to Homes, Metro & W&OD Trail",
  description: "Exhaustive guide to Dunn Loring VA real estate: historic 1886 village, Dunn Loring Woods, Orange Line Metro, Marshall High IB pyramid, and zoning.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/dunn-loring-va-real-estate",
  },
  openGraph: {
    title: "Dunn Loring VA Real Estate: The Definitive Guide to Homes, Metro & W&OD Trail",
    description: "Exhaustive guide to Dunn Loring VA real estate: historic 1886 village, Dunn Loring Woods, Orange Line Metro, Marshall High IB pyramid, and zoning.",
    url: "https://www.homesalesfairfax.com/dunn-loring-va-real-estate",
    siteName: "homesalesfairfax.com",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dunn Loring VA Real Estate: The Definitive Guide to Homes, Metro & W&OD Trail",
    description: "Exhaustive guide to Dunn Loring VA real estate: historic 1886 village, Dunn Loring Woods, Orange Line Metro, Marshall High IB pyramid, and zoning.",
  },
};

export default function DunnLoringPage() {
  const schemas = [
    // 1. Article / Research Monograph Schema
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": "https://www.homesalesfairfax.com/dunn-loring-va-real-estate#article",
      "headline": "Dunn Loring VA Real Estate: The Definitive Guide to Historic Origins, Metrorail Connectivity & Infill Architecture",
      "description": "Exhaustive guide to Dunn Loring VA real estate: historic 1886 village, Dunn Loring Woods, Orange Line Metro, Marshall High IB pyramid, and zoning.",
      "url": "https://www.homesalesfairfax.com/dunn-loring-va-real-estate",
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
      "mainEntityOfPage": "https://www.homesalesfairfax.com/dunn-loring-va-real-estate",
      "about": [
        "Dunn Loring, Virginia",
        "Fairfax County real estate",
        "Dunn Loring-Merrifield Metro",
        "George C. Marshall High School IB pyramid",
        "W&OD Trail",
        "Dunn Loring Woods",
        "Fairfax County zoning zMOD",
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
          "name": "Dunn Loring VA Real Estate Guide",
          "item": "https://www.homesalesfairfax.com/dunn-loring-va-real-estate",
        },
      ],
    },
    // 3. FAQPage Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.homesalesfairfax.com/dunn-loring-va-real-estate#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the historical significance of Dunn Loring, Virginia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Founded in 1886 by General William McKee Dunn and his son-in-law Dr. George B. Loring (U.S. Commissioner of Agriculture), Dunn Loring holds the distinction of being the earliest platted residential subdivision in Fairfax County. Developed around a dedicated passenger depot on the Washington and Old Dominion (W&OD) Railroad, the community was designed with tree-named avenues, historic Victorian farmhouses, and Sears catalog homes.",
          },
        },
        {
          "@type": "Question",
          "name": "Is Dunn Loring an incorporated town or part of Fairfax County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dunn Loring is an unincorporated census-designated place (CDP) governed directly by the Fairfax County Board of Supervisors within the Providence Magisterial District. It is not an incorporated municipality. Property owners pay a single unified real estate tax bill to Fairfax County, avoiding secondary town municipal taxes.",
          },
        },
        {
          "@type": "Question",
          "name": "Does Dunn Loring have direct Metrorail access?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Dunn Loring is served directly by the Dunn Loring-Merrifield Metrorail Station on the Washington Metro Orange Line, situated on Gallows Road. The heavy-rail transit facility features an integrated structured commuter garage, pedestrian bridges, and direct service west to Vienna and east to Ballston, Arlington, and downtown Washington, D.C.",
          },
        },
        {
          "@type": "Question",
          "name": "What architectural home styles predominate in Dunn Loring?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dunn Loring features an extraordinary architectural spectrum: restored late 19th-century Victorian farmhouses and Craftsman bungalows in the historic village core, established 1960s split-levels and brick ramblers in Dunn Loring Woods, and dramatic multi-million-dollar custom luxury infill craftsman and modern farmhouse estates on generous half-acre parcels.",
          },
        },
        {
          "@type": "Question",
          "name": "Which public schools serve Dunn Loring residents?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dunn Loring is served primarily by the George C. Marshall High School academic pyramid within Fairfax County Public Schools (FCPS). Marshall High is an authorized International Baccalaureate (IB) World School, fed by Kilmer Middle School and Stenwood Elementary School (featuring an FCPS Advanced Academic Programs Level IV center). Select western streets feed into the James Madison High School pyramid.",
          },
        },
        {
          "@type": "Question",
          "name": "How does the W&OD Trail function within Dunn Loring?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The 45-mile paved Washington & Old Dominion (W&OD) Railroad Regional Park passes directly through Dunn Loring, tracing the historic rail line that gave birth to the town. The trail serves as a premier recreational greenway and an active non-motorized commuter highway for cyclists and runners commuting between Vienna, Falls Church, and Arlington.",
          },
        },
        {
          "@type": "Question",
          "name": "Do neighborhoods in Dunn Loring have mandatory Homeowners Associations (HOAs)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The vast majority of single-family residential properties in historic Dunn Loring and Dunn Loring Woods are completely fee-simple non-HOA properties, granting owners freedom from mandatory monthly assessments and private covenants. Conversely, modern transit-oriented condominium and townhome clusters near the Metro concourse operate under mandatory associations.",
          },
        },
        {
          "@type": "Question",
          "name": "What major highways provide access to Dunn Loring?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dunn Loring occupies an exceptional regional highway position, bordered by Interstate 66, Gallows Road, Route 123 (Chain Bridge Road), Route 7 (Leesburg Pike), and the Interstate 495 Capital Beltway, providing rapid access to Tysons, the Mosaic District, and Washington, D.C.",
          },
        },
        {
          "@type": "Question",
          "name": "How is zoning regulated for custom infill construction in Dunn Loring?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Residential zoning is governed by Fairfax County zMOD under districts such as R-1 (1 unit/acre), R-2 (2 units/acre), and R-3 (3 units/acre). These classifications enforce minimum lot sizes, 30- to 35-foot front setbacks, and building height caps of 35 feet, preserving neighborhood tree canopies and spatial character during custom infill redevelopment.",
          },
        },
        {
          "@type": "Question",
          "name": "How does Dunn Loring compare to neighboring Vienna and Tysons?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dunn Loring provides the quiet, wooded, large-lot residential charm of Vienna and the world-class transit and commercial access of Tysons, without the secondary municipal taxes or strict Architectural Review Board restrictions of the incorporated Town of Vienna, or the high-density commercial congestion of Tysons.",
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
      <DunnLoringClient />
    </>
  );
}
