import DranesvilleClient from "./DranesvilleClient";

export const metadata = {
  title: "Dranesville VA Real Estate: Luxury Estates & Langley High",
  description: "Exhaustive guide to Dranesville VA real estate: 3.9 sq mi CDP, historic 1820s Dranesville Tavern, Colvin Run Mill, custom acreage estates & Langley High pyramid.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/dranesville-va-real-estate",
  },
  openGraph: {
    title: "Dranesville VA Real Estate: Luxury Estates & Langley High",
    description: "Exhaustive guide to Dranesville VA real estate: 3.9 sq mi CDP, historic 1820s Dranesville Tavern, Colvin Run Mill, custom acreage estates & Langley High pyramid.",
    url: "https://www.homesalesfairfax.com/dranesville-va-real-estate",
    siteName: "homesalesfairfax.com",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "/images/County/Dranesville.jpg",
        width: 2048,
        height: 1152,
        alt: "Dranesville VA Real Estate - Historic Crossroads, Custom Manors & Langley High",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dranesville VA Real Estate: Luxury Estates & Langley High",
    description: "Exhaustive guide to Dranesville VA real estate: 3.9 sq mi CDP, historic 1820s Dranesville Tavern, Colvin Run Mill, custom acreage estates & Langley High pyramid.",
    images: ["/images/County/Dranesville.jpg"],
  },
};

export default function DranesvillePage() {
  const schemas = [
    // 1. Article / Research Monograph Schema
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": "https://www.homesalesfairfax.com/dranesville-va-real-estate#article",
      "headline": "Dranesville, VA Real Estate: The Definitive Guide to Historic Stagecoach Crossroads, Custom Acreage Estates, Colvin Run Mill & Langley High Pyramid",
      "description": "Comprehensive architectural monograph & real estate guide to Dranesville VA: 3.9 square-mile Census-Designated Place, historic 1820s Dranesville Tavern and 1861 Civil War battlefield, operational Colvin Run Mill, custom multi-acre luxury manors with zero mandatory HOA, and top-tier Langley High School pyramid.",
      "url": "https://www.homesalesfairfax.com/dranesville-va-real-estate",
      "image": "https://www.homesalesfairfax.com/images/County/Dranesville.jpg",
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
      "mainEntityOfPage": "https://www.homesalesfairfax.com/dranesville-va-real-estate",
      "about": [
        "Dranesville, Virginia",
        "Dranesville CDP",
        "Dranesville Tavern Historic Site",
        "Battle of Dranesville 1861",
        "Colvin Run Mill",
        "Langley High School pyramid",
        "Colvin Run Elementary School",
        "Forestville Elementary School",
        "Fairfax County real estate",
        "Georgetown Pike Route 193",
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
          "name": "Dranesville, VA Real Estate & Community Guide",
          "item": "https://www.homesalesfairfax.com/dranesville-va-real-estate",
        },
      ],
    },
    // 3. FAQPage Schema (10 Comprehensive Encyclopedic Questions)
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.homesalesfairfax.com/dranesville-va-real-estate#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are the geographic boundaries and spatial dimensions of Dranesville, Virginia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Dranesville Census-Designated Place (CDP) encompasses approximately 3.9 square miles in northern Fairfax County (ZIP codes 22066 and 22182, Dranesville District). It is centered along Route 7 (Leesburg Pike) and Georgetown Pike (Route 193), bounded by Great Falls to the northeast, Reston and Herndon to the south, and Sugarland Run and Loudoun County to the northwest.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the historical significance of Dranesville Tavern and the 1861 Civil War Battle?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dranesville was established as a vital 19th-century stagecoach stop along the Leesburg Turnpike, anchored by Dranesville Tavern built circa 1824 by Washington Drane. On December 20, 1861, the historic Battle of Dranesville was fought here, resulting in an early Union victory led by General E.O.C. Ord against Confederate forces under General J.E.B. Stuart.",
          },
        },
        {
          "@type": "Question",
          "name": "What operational heritage does Colvin Run Mill preserve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Located along Route 7 in Dranesville, Colvin Run Mill is an operational early 19th-century water-powered gristmill maintained by the Fairfax County Park Authority. It features working wooden milling machinery, a Miller's house, an authentic general store, and educational demonstrations of stone-ground cornmeal and wheat production.",
          },
        },
        {
          "@type": "Question",
          "name": "What architectural styles predominate throughout Dranesville?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dranesville is celebrated for custom luxury single-family residences on private one- to five-acre wooded parcels. Dominant architecture includes custom brick Georgian and Federal manors, French provincial country chateaus, modern transitional luxury farmhouses, and timber-framed executive retreats featuring circular motor courts, equestrian facilities, and swimming pools.",
          },
        },
        {
          "@type": "Question",
          "name": "Does Dranesville have mandatory Homeowners Associations (HOAs)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The vast majority of custom acreage estates across Dranesville operate with zero mandatory HOA dues and zero master association restrictions. Homeowners enjoy unencumbered fee-simple land ownership, allowing for private stables, guest carriage houses, detached workshops, and tennis courts.",
          },
        },
        {
          "@type": "Question",
          "name": "Which Fairfax County Public Schools serve the Dranesville community?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dranesville is served by top-performing FCPS institutions, including Colvin Run Elementary and Forestville Elementary. Students matriculate into Cooper Middle School and the prestigious Langley High School pyramid, consistently ranked among the top high schools in Virginia and the nation.",
          },
        },
        {
          "@type": "Question",
          "name": "What parklands and outdoor recreation surround Dranesville?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Residents enjoy immediate access to Colvin Run Mill Park, Dranesville District Park, the Colvin Run Stream Valley Trail network, and are minutes from the Potomac River palisades at Great Falls National Park and Riverbend Park.",
          },
        },
        {
          "@type": "Question",
          "name": "What transportation corridors connect Dranesville to regional employment hubs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dranesville provides direct access to the recently widened Route 7 (Leesburg Pike) expressway, Georgetown Pike (Virginia Scenic Byway Route 193), and Baron Cameron Avenue. Commuters reach Reston Town Center and the Wiehle-Reston East Silver Line Metro in under 10 minutes, and Tysons in approximately 12 to 15 minutes.",
          },
        },
        {
          "@type": "Question",
          "name": "What retail and dining options serve Dranesville?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Residents enjoy intimate village dining and boutiques in Great Falls Village Centre to the east, full-scale shopping and dining at Reston Town Center to the south, and local commercial services along Route 7 and in the Town of Herndon.",
          },
        },
        {
          "@type": "Question",
          "name": "How does Fairfax County assess property values across Dranesville?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pursuant to Code of Virginia § 58.1-3201, all real property is assessed annually at 100 percent of true fair market value. The Fairfax County Department of Tax Administration (DTA) conducts computerized mass appraisal equalizations analyzing verified arm's-length sales of comparable acreage estates and custom homes within Dranesville's specific submarket codes.",
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
      <DranesvilleClient />
    </>
  );
}
