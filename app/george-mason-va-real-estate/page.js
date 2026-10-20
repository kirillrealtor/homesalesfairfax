import GeorgeMasonClient from "./GeorgeMasonClient";

export const metadata = {
  title: "George Mason VA Real Estate: The Definitive Community, Schools & University Guide",
  description: "Exhaustive guide to George Mason VA real estate: Country Club View, George Mason Forest, GMU campus, Woodson & Robinson pyramids, and CUE bus transit.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/george-mason-va-real-estate",
  },
  openGraph: {
    title: "George Mason VA Real Estate: The Definitive Community, Schools & University Guide",
    description: "Exhaustive guide to George Mason VA real estate: Country Club View, George Mason Forest, GMU campus, Woodson & Robinson pyramids, and CUE bus transit.",
    url: "https://www.homesalesfairfax.com/george-mason-va-real-estate",
    siteName: "homesalesfairfax.com",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "George Mason VA Real Estate: The Definitive Community, Schools & University Guide",
    description: "Exhaustive guide to George Mason VA real estate: Country Club View, George Mason Forest, GMU campus, Woodson & Robinson pyramids, and CUE bus transit.",
  },
};

export default function GeorgeMasonPage() {
  const schemas = [
    // 1. Article / Research Monograph Schema
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": "https://www.homesalesfairfax.com/george-mason-va-real-estate#article",
      "headline": "George Mason, VA Real Estate: The Definitive Guide to Spatial Morphology, Country Club View, George Mason Forest, GMU Cultural Hub & Secondary Pyramids",
      "description": "Comprehensive architectural monograph & real estate guide to George Mason VA: 2.53-square-mile census-designated place, Country Club View brick colonials with no HOA, George Mason Forest, George Mason University R1 campus, EagleBank Arena, Center for the Arts, CUE bus to Vienna Metro, Oak View Elementary, and W.T. Woodson and Robinson Secondary pyramids.",
      "url": "https://www.homesalesfairfax.com/george-mason-va-real-estate",
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
      "mainEntityOfPage": "https://www.homesalesfairfax.com/george-mason-va-real-estate",
      "about": [
        "George Mason, Virginia",
        "George Mason CDP",
        "George Mason University",
        "Country Club View",
        "George Mason Forest",
        "Fairfax County real estate",
        "EagleBank Arena",
        "Center for the Arts",
        "W.T. Woodson High School pyramid",
        "Robinson Secondary School pyramid",
        "Oak View Elementary School",
        "CUE Bus Vienna Metro",
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
          "name": "George Mason, VA Real Estate & Community Guide",
          "item": "https://www.homesalesfairfax.com/george-mason-va-real-estate",
        },
      ],
    },
    // 3. FAQPage Schema (10 Comprehensive Encyclopedic Questions)
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.homesalesfairfax.com/george-mason-va-real-estate#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are the geographic boundaries and land area of George Mason, Virginia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The George Mason Census-Designated Place (CDP) encompasses approximately 2.53 square miles (6.55 square kilometers) in central Fairfax County (ZIP codes 22030 and 22032). It is situated directly southwest of the City of Fairfax, bounded by the city limits to the north, Roberts Road to the east, Braddock Road (Route 620) to the south, and Ox Road (Route 123) and Shirley Gate Road to the west.",
          },
        },
        {
          "@type": "Question",
          "name": "What residential subdivisions are located in the George Mason CDP?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Prominent residential neighborhoods within or immediately adjacent to the George Mason CDP include Country Club View (an established community of approximately 470 mid-century brick colonials, split-levels, and ramblers with no mandatory HOA), George Mason Forest (a collection of roughly 200 single-family homes built in the 1980s to early 2000s), University Square, University Commons, and University Courts.",
          },
        },
        {
          "@type": "Question",
          "name": "How does George Mason University influence the local community and real estate market?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "As Virginia's largest public research university (R1 Carnegie classification), George Mason University anchors the community with cultural, academic, and athletic amenities. Residents enjoy walking access to NCAA Division I athletic events at EagleBank Arena, world-class symphonic and theatrical performances at the Center for the Arts, community memberships at the Aquatic and Fitness Center (AFC), and sustained housing demand driven by thousands of faculty and medical professionals.",
          },
        },
        {
          "@type": "Question",
          "name": "Which public schools serve residents of the George Mason area?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The area is zoned for two of Fairfax County Public Schools' most distinguished secondary pyramids (FCPS Region 4 and Region 5): W.T. Woodson High School (celebrated for the AP Capstone Diploma and STEM excellence) and Robinson Secondary School (grades 7–12; offering both the International Baccalaureate IB Diploma and AP courses). Elementary students predominantly attend Oak View Elementary School on Sideburn Road.",
          },
        },
        {
          "@type": "Question",
          "name": "Does Country Club View have a mandatory Homeowners Association (HOA)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Country Club View operates with no mandatory HOA fees or restrictive covenants. Community affairs, directories, and seasonal events are managed on a voluntary basis by the Country Club View Civic Association (CCVCA), offering homeowners full architectural freedom over their properties.",
          },
        },
        {
          "@type": "Question",
          "name": "What architectural styles predominate in George Mason residential neighborhoods?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The housing stock features solid mid-century and transitional American suburban architecture, dominated by classic center-hall brick colonials, tri-level split-levels, sprawling brick ramblers, and contemporary multi-level homes. Most residences offer 4 to 5 bedrooms, full daylight basements, two-car garages, and generous maturely landscaped lots ranging from 0.25 to 0.40 acres.",
          },
        },
        {
          "@type": "Question",
          "name": "What public transit options connect George Mason to the Metrorail network?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Residents benefit from the City of Fairfax CUE Bus system, which provides direct, high-frequency transit from the university campus and residential stops straight to the Vienna/Fairfax-GMU Metrorail Station (Orange Line). Additionally, Mason Shuttles provide regional bus service, and the Burke Centre VRE commuter rail station is located just two miles to the south.",
          },
        },
        {
          "@type": "Question",
          "name": "What recreational facilities and parks exist within the George Mason community?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Neighborhood recreation is anchored by Country Club View Park, featuring lighted tennis and basketball courts, playgrounds, and creek trails. Furthermore, residents enjoy access to GMU's 50-meter Olympic swimming pool at the Aquatic and Fitness Center, scenic walking paths around Mason Pond, and nearby Patriot Park.",
          },
        },
        {
          "@type": "Question",
          "name": "What retail shopping and dining venues are located near George Mason?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Daily retail convenience is anchored by University Mall directly across Braddock Road (featuring Giant Food, dining, and cinemas). Historic Old Town Fairfax is located just one mile north, offering award-winning local dining, craft breweries, and farmers markets, with regional shopping hubs like Fairfax Corner and Fair Oaks Mall minutes away.",
          },
        },
        {
          "@type": "Question",
          "name": "How does Fairfax County assess real estate property values in George Mason?",
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
      <GeorgeMasonClient />
    </>
  );
}
