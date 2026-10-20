import KingsParkClient from "./KingsParkClient";

export const metadata = {
  title: "Kings Park VA Real Estate: The Definitive Community, Schools & Parks Guide",
  description: "Exhaustive guide to Kings Park VA real estate: 1960 Richmarr mid-century architecture, paired Kings Park/Kings Glen schools, Lake Braddock, and Accotink trails.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/kings-park-va-real-estate",
  },
  openGraph: {
    title: "Kings Park VA Real Estate: The Definitive Community, Schools & Parks Guide",
    description: "Exhaustive guide to Kings Park VA real estate: 1960 Richmarr mid-century architecture, paired Kings Park/Kings Glen schools, Lake Braddock, and Accotink trails.",
    url: "https://www.homesalesfairfax.com/kings-park-va-real-estate",
    siteName: "homesalesfairfax.com",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kings Park VA Real Estate: The Definitive Community, Schools & Parks Guide",
    description: "Exhaustive guide to Kings Park VA real estate: 1960 Richmarr mid-century architecture, paired Kings Park/Kings Glen schools, Lake Braddock, and Accotink trails.",
  },
};

export default function KingsParkPage() {
  const schemas = [
    // 1. Article / Research Monograph Schema
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": "https://www.homesalesfairfax.com/kings-park-va-real-estate#article",
      "headline": "Kings Park, VA Real Estate: The Definitive Guide to Spatial Morphology, Richmarr Mid-Century Architecture, Paired Elementary Schools & Lake Braddock Pyramid",
      "description": "Comprehensive architectural monograph & real estate guide to Kings Park VA: 1960 Richmarr Construction planned community, 1,100 brick homes with no HOA, British streetscapes, Lake Accotink Park adjacency, paired Kings Park and Kings Glen elementary schools, and Lake Braddock Secondary School pyramid.",
      "url": "https://www.homesalesfairfax.com/kings-park-va-real-estate",
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
      "mainEntityOfPage": "https://www.homesalesfairfax.com/kings-park-va-real-estate",
      "about": [
        "Kings Park, Virginia",
        "Kings Park CDP",
        "Kings Park Civic Association",
        "Fairfax County real estate",
        "Richmarr Construction Corporation",
        "Kings Park Elementary School",
        "Kings Glen Elementary School",
        "Lake Braddock Secondary School pyramid",
        "Lake Accotink Park",
        "Braddock Road corridor",
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
          "name": "Kings Park, VA Real Estate & Community Guide",
          "item": "https://www.homesalesfairfax.com/kings-park-va-real-estate",
        },
      ],
    },
    // 3. FAQPage Schema (10 Comprehensive Encyclopedic Questions)
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.homesalesfairfax.com/kings-park-va-real-estate#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are the geographic boundaries and spatial dimensions of Kings Park, Virginia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Kings Park Census-Designated Place (CDP) encompasses approximately 1.33 square miles (3.44 square kilometers) in central Fairfax County (ZIP code 22003, Braddock Magisterial District). It is bounded by Braddock Road (Route 620) to the north, Accotink Creek and Lake Accotink Park to the east, Rolling Road (Route 638) to the west, and Burke to the south.",
          },
        },
        {
          "@type": "Question",
          "name": "Who developed Kings Park and when was the community constructed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Kings Park was master-developed by the Richmarr Construction Corporation (Richard Kirstein and Marvin Kay), with construction breaking ground in early 1960. Richmarr was celebrated for preserving native hardwood tree canopies and contouring serpentine streets along the natural topography rather than clear-cutting the land.",
          },
        },
        {
          "@type": "Question",
          "name": "What architectural styles predominate across Kings Park homes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The community comprises approximately 1,100 single-family residences featuring solid brick construction. Dominant styles include split-foyers, tri-level split-levels, Center-Hall Colonials, single-story brick ramblers, and Cape Cods, built with dimensional lumber, full daylight basements, and generous setbacks along curved, British-named streets.",
          },
        },
        {
          "@type": "Question",
          "name": "Does Kings Park have a mandatory Homeowners Association (HOA)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Kings Park operates with no mandatory HOA fees or restrictive architectural review boards. Community cohesion, neighborhood directories, and events are stewarded by the voluntary Kings Park Civic Association (KPCA), founded in 1960.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the unique paired elementary school model serving Kings Park?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Kings Park features a distinctive paired primary-intermediate elementary structure within Fairfax County Public Schools (FCPS Region 4). Primary students attend Kings Park Elementary School (grades Pre-K through 3) on Harrow Way, and then transition together to Kings Glen Elementary School (grades 4 through 6) on Danbury Forest Drive.",
          },
        },
        {
          "@type": "Question",
          "name": "Which secondary school serves Kings Park students?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Upon completing 6th grade at Kings Glen, students advance to Lake Braddock Secondary School in Burke, which houses both middle school (grades 7–8) and high school (grades 9–12) under one roof. Lake Braddock is nationally celebrated for the AP Capstone Diploma, STEM academies, and championship athletics.",
          },
        },
        {
          "@type": "Question",
          "name": "What parks, pools, and recreational amenities exist within Kings Park?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Recreation is anchored by the member-owned Kings Park Swim Club on Victoria Road (home of the Kingfish NVSL swim and dive team), the 8.2-acre Kings Park Park (featuring baseball fields, basketball courts, and playgrounds), and direct access to Lake Accotink Park and the 40-mile Gerry Connolly Cross County Trail.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the difference between Kings Park and Kings Park West?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Kings Park is the original 1960 subdivision located between Rolling Road and Accotink Creek. Kings Park West is a larger sister community developed by Richmarr beginning in 1967, positioned immediately to the west of Rolling Road surrounding the 42-acre Royal Lake reservoir.",
          },
        },
        {
          "@type": "Question",
          "name": "What commuter transit options serve Kings Park residents?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Residents enjoy express commuter buses along Braddock Road connecting directly to the Pentagon, immediate access to the Rolling Road Virginia Railway Express (VRE) station just one mile south, and swift vehicular access to Interstate 495 (Exit 54) and the 495 Express Lanes.",
          },
        },
        {
          "@type": "Question",
          "name": "How does Fairfax County assess real estate property values in Kings Park?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In accordance with Code of Virginia § 58.1-3201, all real property is assessed annually at 100 percent of true fair market value. The Fairfax County Department of Tax Administration (DTA) conducts computerized mass appraisal equalizations annually based on verified arm's-length sales of comparable homes within specific neighborhood submarket codes.",
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
      <KingsParkClient />
    </>
  );
}
