import FlorisClient from "./FlorisClient";

export const metadata = {
  title: "Floris VA Real Estate: Frying Pan Park, Tech Corridor & Homes",
  description: "Exhaustive guide to Floris VA real estate: 2.8 sq mi CDP, historic Frying Pan Farm Park, Dulles Tech Corridor, Floris Elementary, and Silver Line Metro access.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/floris-va-real-estate",
  },
  openGraph: {
    title: "Floris VA Real Estate: Frying Pan Park, Tech Corridor & Homes",
    description: "Exhaustive guide to Floris VA real estate: 2.8 sq mi CDP, historic Frying Pan Farm Park, Dulles Tech Corridor, Floris Elementary, and Silver Line Metro access.",
    url: "https://www.homesalesfairfax.com/floris-va-real-estate",
    siteName: "homesalesfairfax.com",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "/images/County/Floris.jpg",
        width: 2048,
        height: 1152,
        alt: "Floris VA Real Estate - Frying Pan Farm Park, Custom Enclaves & Dulles Tech Corridor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Floris VA Real Estate: Frying Pan Park, Tech Corridor & Homes",
    description: "Exhaustive guide to Floris VA real estate: 2.8 sq mi CDP, historic Frying Pan Farm Park, Dulles Tech Corridor, Floris Elementary, and Silver Line Metro access.",
    images: ["/images/County/Floris.jpg"],
  },
};

export default function FlorisPage() {
  const schemas = [
    // 1. Article / Research Monograph Schema
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": "https://www.homesalesfairfax.com/floris-va-real-estate#article",
      "headline": "Floris, VA Real Estate: The Definitive Guide to Frying Pan Farm Park, Dulles Tech Corridor, Executive Colonials & Silver Line Metro",
      "description": "Comprehensive architectural monograph & real estate guide to Floris VA: 2.8 square-mile Census-Designated Place, historic 135-acre working Frying Pan Farm Park, executive single-family colonials with zero mandatory HOA, top-ranked Floris Elementary and Carson Middle, and Innovation Center Silver Line Metrorail connectivity.",
      "url": "https://www.homesalesfairfax.com/floris-va-real-estate",
      "image": "https://www.homesalesfairfax.com/images/County/Floris.jpg",
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
      "mainEntityOfPage": "https://www.homesalesfairfax.com/floris-va-real-estate",
      "about": [
        "Floris, Virginia",
        "Floris CDP",
        "Frying Pan Farm Park",
        "Dulles Technology Corridor",
        "Floris Elementary School",
        "Rachel Carson Middle School",
        "Fairfax County real estate",
        "Innovation Center Metrorail Station",
        "Horsepen Run Watershed",
        "Dulles Airport Proximity",
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
          "name": "Floris, VA Real Estate & Community Guide",
          "item": "https://www.homesalesfairfax.com/floris-va-real-estate",
        },
      ],
    },
    // 3. FAQPage Schema (10 Comprehensive Encyclopedic Questions)
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.homesalesfairfax.com/floris-va-real-estate#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are the geographic boundaries and spatial dimensions of Floris, Virginia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Floris Census-Designated Place (CDP) encompasses approximately 2.8 square miles in western Fairfax County (ZIP code 20171, Dranesville and Hunter Mill Districts). It is bounded by the Town of Herndon to the north, Reston to the east, Franklin Farm and Chantilly to the south, and Washington Dulles International Airport and Route 28 to the west, framed by Centreville Road, West Ox Road, and Frying Pan Road.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the historical heritage of Floris and Frying Pan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Originally known as 'Frying Pan' in 18th-century colonial deeds referencing a nearby copper mining camp and Frying Pan Run, the community was renamed 'Floris' in the late 19th century from the Latin word for flowers, reflecting its blooming orchards and dairy pastures. It is anchored by the historic 1791 Frying Pan Spring Meeting House and the 135-acre working Kidwell Farm at Frying Pan Farm Park.",
          },
        },
        {
          "@type": "Question",
          "name": "What attractions and amenities does Frying Pan Farm Park provide?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Frying Pan Farm Park preserves a 135-acre operating 1930s Depression-era working farm (Kidwell Farm) with draft horses, cows, sheep, goats, and antique tractors, alongside an equestrian complex with indoor and outdoor riding arenas, 4-H agricultural programs, a restored country store, a one-room schoolhouse, and seasonal country fairs.",
          },
        },
        {
          "@type": "Question",
          "name": "What architectural styles predominate throughout Floris?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Floris features upscale executive single-family detached homes, predominantly brick Center-Hall Colonials, federal revivals, and modern transitional farmhouses built from the 1980s through the 2010s on third- to half-acre manicured lots, featuring two-story open foyers, side-loading garages, and finished walkout basements, alongside custom acreage estates.",
          },
        },
        {
          "@type": "Question",
          "name": "Does Floris have mandatory Homeowners Associations (HOAs)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many established single-family homes along historic country corridors like Fox Mill Road and original subdivisions operate with zero mandatory HOA dues, providing full fee-simple property sovereignty. Master-planned residential subdivisions maintain localized HOAs that care for community landscaping and recreation courts.",
          },
        },
        {
          "@type": "Question",
          "name": "Which Fairfax County Public Schools serve the Floris community?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Floris is anchored by Floris Elementary School, consistently recognized among the top-performing elementary schools in Virginia with advanced STEM and AAP curricula. Middle school students attend the acclaimed Rachel Carson Middle School, feeding into Westfield High School, South Lakes High School (IB World), or Oakton High School depending on neighborhood boundaries.",
          },
        },
        {
          "@type": "Question",
          "name": "What is Floris's proximity to the Dulles Technology Corridor and data centers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Floris sits at the absolute center of the Dulles Technology Corridor. Residents are located within five to ten minutes of major corporate headquarters, cloud infrastructure campuses (AWS, Microsoft, Google), aerospace contractors (Northrop Grumman, Boeing), and major federal intelligence institutions.",
          },
        },
        {
          "@type": "Question",
          "name": "What commuter transit and highway corridors serve Floris?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Commuters benefit from immediate access to the Dulles Toll Road (Route 267), Route 28 (Sully Road), Fairfax County Parkway (Route 286), and Centreville Road. The Innovation Center Metrorail Station and Herndon Metrorail Station (Silver Line) are reachable in under five minutes, connecting directly to Tysons, downtown D.C., and Dulles Airport.",
          },
        },
        {
          "@type": "Question",
          "name": "What parklands and stream trails connect through Floris?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Residents enjoy miles of walking and equestrian trails through Frying Pan Farm Park, Frying Pan Stream Valley Park, Fox Mill District Park, Arrowbrook Centre Park, and direct connections to the nearby 45-mile paved Washington & Old Dominion (W&OD) Trail.",
          },
        },
        {
          "@type": "Question",
          "name": "How does Fairfax County assess real property values across Floris?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under Code of Virginia § 58.1-3201, all real property is assessed annually at 100 percent of true fair market value. The Fairfax County Department of Tax Administration (DTA) conducts computerized mass appraisal equalizations annually based on verified arm's-length sales of comparable homes within specific neighborhood submarket codes.",
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
      <FlorisClient />
    </>
  );
}
