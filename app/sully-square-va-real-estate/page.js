import SullySquareClient from "./SullySquareClient";

export const metadata = {
  title: "Sully Square VA Real Estate: Route 28 Tech Hub & Homes",
  description: "Exhaustive guide to Sully Square VA real estate: 1.8 sq mi CDP, Route 28 & Route 50 corridor, Udvar-Hazy Center, executive townhomes & Chantilly/Westfield pyramids.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/sully-square-va-real-estate",
  },
  openGraph: {
    title: "Sully Square VA Real Estate: Route 28 Tech Hub & Homes",
    description: "Exhaustive guide to Sully Square VA real estate: 1.8 sq mi CDP, Route 28 & Route 50 corridor, Udvar-Hazy Center, executive townhomes & Chantilly/Westfield pyramids.",
    url: "https://www.homesalesfairfax.com/sully-square-va-real-estate",
    siteName: "homesalesfairfax.com",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sully Square VA Real Estate: Route 28 Tech Hub & Homes",
    description: "Exhaustive guide to Sully Square VA real estate: 1.8 sq mi CDP, Route 28 & Route 50 corridor, Udvar-Hazy Center, executive townhomes & Chantilly/Westfield pyramids.",
  },
};

export default function SullySquarePage() {
  const schemas = [
    // 1. Article / Research Monograph Schema
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": "https://www.homesalesfairfax.com/sully-square-va-real-estate#article",
      "headline": "Sully Square, VA Real Estate: The Definitive Guide to Route 28 Tech Corridor Living, Executive Townhomes, Udvar-Hazy Center & Chantilly/Westfield Pyramids",
      "description": "Comprehensive architectural monograph & real estate guide to Sully Square VA: 1.8 square-mile Census-Designated Place, Route 28 and Route 50 interchange, Udvar-Hazy Air & Space Museum, executive brick townhomes and single-family colonials, and top Chantilly and Westfield high school pyramids.",
      "url": "https://www.homesalesfairfax.com/sully-square-va-real-estate",
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
      "mainEntityOfPage": "https://www.homesalesfairfax.com/sully-square-va-real-estate",
      "about": [
        "Sully Square, Virginia",
        "Sully Square CDP",
        "Sully Historic Site",
        "Route 28 Sully Road",
        "Route 50 Lee Jackson Memorial Highway",
        "Steven F. Udvar-Hazy Center",
        "Chantilly High School",
        "Westfield High School",
        "Fairfax County real estate",
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
          "item": "https://www.homesalesfairfax.com",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Fairfax County Real Estate",
          "item": "https://www.homesalesfairfax.com/fairfax-county-history-real-estate-landscape",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Sully Square, VA Real Estate & Community Guide",
          "item": "https://www.homesalesfairfax.com/sully-square-va-real-estate",
        },
      ],
    },
    // 3. FAQPage Schema (10 Comprehensive Encyclopedic Questions)
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.homesalesfairfax.com/sully-square-va-real-estate#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are the geographic boundaries and spatial dimensions of Sully Square, Virginia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Sully Square Census-Designated Place (CDP) encompasses approximately 1.8 square miles in western Fairfax County (ZIP code 20151, Sully District). It is centered at the junction of Route 28 (Sully Road) and Route 50 (Lee Jackson Memorial Highway), bounded by Centreville Road to the east, Dulles International Airport and Loudoun County to the west, and Franklin Farm to the north.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the historical origin of the Sully name?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sully Square draws its historic name from nearby Sully Historic Site, the 1794 plantation manor completed by Richard Bland Lee, Northern Virginia's first representative to the United States Congress. The area evolved from 18th-century agricultural farmland into a premier modern commercial, aerospace, and residential hub.",
          },
        },
        {
          "@type": "Question",
          "name": "What architectural styles predominate across Sully Square?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sully Square features a balanced portfolio of modern housing developed from the 1980s through recent infill. Dominant types include spacious three-level brick-front garage townhomes, detached Center-Hall Colonials on manicured cul-de-sacs, and contemporary garden condominiums offering low-maintenance living.",
          },
        },
        {
          "@type": "Question",
          "name": "What shopping, dining, and commercial centers exist in Sully Square?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Residents enjoy exceptional retail convenience, including the Sully Square Shopping Center, Chantilly Crossing (Costco, Target), and Sully Plaza, alongside dozens of international restaurants, specialty bakeries, fitness clubs, and professional healthcare suites.",
          },
        },
        {
          "@type": "Question",
          "name": "Which Fairfax County Public Schools serve Sully Square?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The community is served by top-rated FCPS institutions, including Lees Corner Elementary and Brookfield Elementary. Intermediate students attend Franklin Middle School or Rocky Run Middle School, feeding into the acclaimed Chantilly High School and Westfield High School pyramids.",
          },
        },
        {
          "@type": "Question",
          "name": "What is Sully Square's proximity to the Smithsonian Udvar-Hazy Center?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Steven F. Udvar-Hazy Center of the National Air and Space Museum is located just two minutes west on Route 28, housing historic aviation icons including the Space Shuttle Discovery, the Lockheed SR-71 Blackbird, and thousands of aerospace artifacts.",
          },
        },
        {
          "@type": "Question",
          "name": "What commuter highways and transit options serve Sully Square?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sully Square offers direct vehicular access to Route 28 (Sully Road), Route 50, and Interstate 66. Commuters reach Washington Dulles International Airport in under seven minutes and are located within eight minutes of the Silver Line Metrorail stations at Innovation Center and Herndon.",
          },
        },
        {
          "@type": "Question",
          "name": "What parks and outdoor recreation surround Sully Square?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Residents enjoy Ellanor C. Lawrence Park (650 acres of stream trails, historic sites, and athletic fields), Flatlick Branch Stream Valley Park, and nearby Cub Run Stream Valley trails.",
          },
        },
        {
          "@type": "Question",
          "name": "What is Sully Square's proximity to major tech and defense employers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sully Square is situated within the Dulles Technology Corridor, surrounded by regional corporate campuses for aerospace and defense leaders including Boeing, Northrop Grumman, General Dynamics, Leidos, CACI, and major cloud computing facilities.",
          },
        },
        {
          "@type": "Question",
          "name": "How does Fairfax County assess property values across Sully Square?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pursuant to Code of Virginia § 58.1-3201, all real property is assessed annually at 100 percent of true fair market value. The Fairfax County Department of Tax Administration (DTA) conducts computerized mass appraisal equalizations based on verified arm's-length sales of comparable townhomes, condominiums, and single-family homes within Sully Square's designated submarket codes.",
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
      <SullySquareClient />
    </>
  );
}
