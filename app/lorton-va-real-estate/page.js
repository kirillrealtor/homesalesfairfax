import LortonClient from "./LortonClient";

export const metadata = {
  title: "Lorton VA Real Estate: The Definitive Laurel Hill, Liberty & VRE Guide",
  description: "Exhaustive guide to Lorton VA real estate: Laurel Hill golf estates, Liberty historic adaptive reuse, VRE commuter rail, South County pyramid, and zoning.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/lorton-va-real-estate",
  },
  openGraph: {
    title: "Lorton VA Real Estate: The Definitive Laurel Hill, Liberty & VRE Guide",
    description: "Exhaustive guide to Lorton VA real estate: Laurel Hill golf estates, Liberty historic adaptive reuse, VRE commuter rail, South County pyramid, and zoning.",
    url: "https://www.homesalesfairfax.com/lorton-va-real-estate",
    siteName: "homesalesfairfax.com",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lorton VA Real Estate: The Definitive Laurel Hill, Liberty & VRE Guide",
    description: "Exhaustive guide to Lorton VA real estate: Laurel Hill golf estates, Liberty historic adaptive reuse, VRE commuter rail, South County pyramid, and zoning.",
  },
};

export default function LortonPage() {
  const schemas = [
    // 1. Article / Research Monograph Schema
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": "https://www.homesalesfairfax.com/lorton-va-real-estate#article",
      "headline": "Lorton VA Real Estate: The Definitive Guide to Laurel Hill, Liberty Adaptive Reuse, VRE Commuter Rail & Mason Neck",
      "description": "Exhaustive guide to Lorton VA real estate: Laurel Hill golf estates, Liberty historic adaptive reuse, VRE commuter rail, South County pyramid, and zoning.",
      "url": "https://www.homesalesfairfax.com/lorton-va-real-estate",
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
      "mainEntityOfPage": "https://www.homesalesfairfax.com/lorton-va-real-estate",
      "about": [
        "Lorton, Virginia",
        "Fairfax County real estate",
        "Laurel Hill community",
        "Liberty Lorton adaptive reuse",
        "Workhouse Arts Center",
        "Virginia Railway Express VRE",
        "Mason Neck State Park",
        "South County High School pyramid",
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
          "name": "Lorton VA Real Estate Guide",
          "item": "https://www.homesalesfairfax.com/lorton-va-real-estate",
        },
      ],
    },
    // 3. FAQPage Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.homesalesfairfax.com/lorton-va-real-estate#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is Lorton an incorporated municipality or an unincorporated part of Fairfax County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lorton is an unincorporated census-designated place (CDP) governed directly by the Fairfax County Board of Supervisors within the Mount Vernon and Springfield Magisterial Districts. It is not an incorporated city or town. Homeowners in Lorton pay solely the unified Fairfax County real estate tax without separate municipal town tax surcharges.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the Liberty Lorton development and its historic significance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Liberty Lorton is an acclaimed master-planned adaptive reuse community located on the former grounds of the historic D.C. Workhouse and Reformatory (established in 1910). Renowned historically as the site where suffragists from the National Woman's Party were imprisoned in 1917, the complex has been meticulously transformed into an architectural community featuring luxury single-family homes, multi-story townhomes, and historic loft apartments integrated with the adjacent 55-acre Workhouse Arts Center.",
          },
        },
        {
          "@type": "Question",
          "name": "What commuter rail transit serves Lorton?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lorton is served directly by the Virginia Railway Express (VRE) Lorton Station on the Fredericksburg Line. The commuter rail line provides a direct, stress-free commute northward to Franconia-Springfield, Crystal City, L'Enfant Plaza, and Washington Union Station. Additionally, Lorton hosts the national northern terminal of the Amtrak Auto Train.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the Laurel Hill master-planned community?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Laurel Hill is one of southern Fairfax County's largest master-planned residential environments, encompassing thousands of acres of former public lands. It integrates neighborhoods of executive single-family homes and spacious townhomes centered around the public 18-hole Laurel Hill Golf Club, extensive equestrian and mountain bike trails, and modern public school campuses.",
          },
        },
        {
          "@type": "Question",
          "name": "Which public schools serve Lorton residents?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The majority of Lorton is served by Fairfax County Public Schools (FCPS) within the South County High School academic pyramid. South County High School features modern academic and athletic facilities, extensive Advanced Placement (AP) coursework, and competitive career/STEM pathways. It is fed by South County Middle School and elementary schools including Laurel Hill, Silverbrook, Halley, and Lorton Station Elementary.",
          },
        },
        {
          "@type": "Question",
          "name": "What recreational and ecological resources surround Lorton?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lorton is surrounded by exceptional open space and parkland, including the Mason Neck peninsula (housing Mason Neck State Park and the Mason Neck National Wildlife Refuge, the first federal refuge dedicated to bald eagles), Pohick Bay Regional Park with golf and marina facilities, Meadowood Special Recreation Management Area (800 BLM acres of trails), and Occoquan Regional Park.",
          },
        },
        {
          "@type": "Question",
          "name": "What architectural home styles predominate in Lorton?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lorton features a contemporary and diverse housing mix: large colonial and craftsman executive single-family residences in Laurel Hill and Lorton Valley, historic adaptive reuse lofts and brick brownstones at Liberty, transit-oriented multi-level townhomes near Lorton Station, and private multi-acre waterfront and equestrian estates on the Mason Neck peninsula.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the historical significance of Pohick Church in Lorton?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Established in 1732, Pohick Church is a historic colonial parish whose present brick sanctuary was constructed between 1769 and 1774. George Washington, George Mason of Gunston Hall, and George William Fairfax served on its vestry and were directly involved in its site selection and architectural planning, making it one of the foundational historical landmarks of Fairfax County.",
          },
        },
        {
          "@type": "Question",
          "name": "What major highways provide access to Lorton?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lorton provides immediate access to Interstate 95 (including direct access ramps to the 95 Express Lanes), Route 1 (Richmond Highway), Route 123 (Ox Road), and Lorton Road, offering rapid vehicular connectivity north to Springfield, Tysons, and Washington, D.C., and south across the Occoquan River to Prince William County.",
          },
        },
        {
          "@type": "Question",
          "name": "Do residential communities in Lorton have mandatory HOAs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most master-planned communities in Lorton (such as Laurel Hill, Liberty, Lorton Valley, and Lorton Station) operate with mandatory community associations governed by the Virginia Property Owners' Association Act (POAA). These associations maintain extensive amenities including neighborhood swimming pools, community clubhouses, fitness centers, sports courts, and common landscaping. Older outlying parcels and Mason Neck acreage operate as fee-simple non-HOA properties.",
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
      <LortonClient />
    </>
  );
}
