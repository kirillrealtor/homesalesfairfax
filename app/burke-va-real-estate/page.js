import BurkeClient from "./BurkeClient";

export const metadata = {
  title: "Burke VA Real Estate: The Definitive Burke Centre, Lake Braddock & VRE Guide",
  description: "Exhaustive guide to Burke VA real estate: Burke Centre Conservancy, Lake Braddock secondary pyramid, Burke Lake Park, VRE commuter rail, and zoning.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/burke-va-real-estate",
  },
  openGraph: {
    title: "Burke VA Real Estate: The Definitive Burke Centre, Lake Braddock & VRE Guide",
    description: "Exhaustive guide to Burke VA real estate: Burke Centre Conservancy, Lake Braddock secondary pyramid, Burke Lake Park, VRE commuter rail, and zoning.",
    url: "https://www.homesalesfairfax.com/burke-va-real-estate",
    siteName: "homesalesfairfax.com",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Burke VA Real Estate: The Definitive Burke Centre, Lake Braddock & VRE Guide",
    description: "Exhaustive guide to Burke VA real estate: Burke Centre Conservancy, Lake Braddock secondary pyramid, Burke Lake Park, VRE commuter rail, and zoning.",
  },
};

export default function BurkePage() {
  const schemas = [
    // 1. Article / Research Monograph Schema
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": "https://www.homesalesfairfax.com/burke-va-real-estate#article",
      "headline": "Burke VA Real Estate: The Definitive Guide to Burke Centre Conservancy, Lake Braddock, VRE Commuter Rail & Burke Lake Park",
      "description": "Exhaustive guide to Burke VA real estate: Burke Centre Conservancy, Lake Braddock secondary pyramid, Burke Lake Park, VRE commuter rail, and zoning.",
      "url": "https://www.homesalesfairfax.com/burke-va-real-estate",
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
      "mainEntityOfPage": "https://www.homesalesfairfax.com/burke-va-real-estate",
      "about": [
        "Burke, Virginia",
        "Fairfax County real estate",
        "Burke Centre Conservancy",
        "Lake Braddock",
        "Burke Lake Park",
        "Virginia Railway Express VRE",
        "Lake Braddock Secondary School",
        "Robinson Secondary School",
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
          "name": "Burke VA Real Estate Guide",
          "item": "https://www.homesalesfairfax.com/burke-va-real-estate",
        },
      ],
    },
    // 3. FAQPage Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.homesalesfairfax.com/burke-va-real-estate#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is Burke an incorporated town or an unincorporated area of Fairfax County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Burke is an unincorporated census-designated place (CDP) situated in the Braddock and Springfield Magisterial Districts of Fairfax County. It possesses no separate town mayor, town council, or municipal town tax. All public services, public safety, schooling, and property tax administration are managed directly by Fairfax County government, meaning residents pay solely unified county real estate taxes.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the Burke Centre Conservancy and how is it structured?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Burke Centre Conservancy is an acclaimed 1,700-acre master-planned residential community established between 1976 and 1988 under Planned Residential Community (PRC) zoning. It comprises 5,862 residences divided into five distinct enclaves: The Commons, The Landings, The Oaks, The Ponds, and The Woods. The Conservancy operates five community centers, six swimming pools, 18 tennis and pickleball courts, and over 30 miles of interconnected paved nature paths.",
          },
        },
        {
          "@type": "Question",
          "name": "What commuter rail transit options serve Burke?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Burke is served by two dedicated Virginia Railway Express (VRE) stations on the Manassas Line: the Burke Centre Station (which features a multi-level commuter parking garage and also accommodates select Amtrak regional trains) and the Rolling Road Station. The VRE provides direct, seated train transit to Alexandria, Crystal City, L'Enfant Plaza, and Washington Union Station.",
          },
        },
        {
          "@type": "Question",
          "name": "Which public schools serve the Burke community?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Burke is served by Fairfax County Public Schools (FCPS) across two highly ranked secondary school pyramids: the Lake Braddock Secondary School pyramid (grades 7-12, renowned for advanced academic programs, varsity athletics, and fine arts) and the Robinson Secondary School pyramid (grades 7-12, offering the prestigious International Baccalaureate / IB Diploma Programme).",
          },
        },
        {
          "@type": "Question",
          "name": "What is the history behind Burke Lake Park and the 1950s airport controversy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In the early 1950s, the federal government condemned 4,500 acres in Burke to construct the second major international airport for the Washington region. Intense civic opposition from local residents successfully blocked the project, forcing the federal government to relocate the airport site to Chantilly (which became Dulles International Airport). The federal government subsequently transferred the condemned Burke acreage to Fairfax County, establishing the 888-acre Burke Lake Park and providing land for the Burke Centre master plan.",
          },
        },
        {
          "@type": "Question",
          "name": "What architectural home styles are found in Burke?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Burke offers diverse architectural typologies built predominantly from the 1970s through the 1990s: classic two-story brick and siding colonial revivals, split-levels, split-foyers, contemporary cedar-accented single-family homes, and multi-level fee-simple townhomes with private fenced rear gardens and assigned or garage parking.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the Lake Braddock community and lake ecosystem?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lake Braddock is an established residential enclave centered around a 19-acre man-made lake constructed in 1969 as part of the Pohick Creek watershed flood mitigation system. The neighborhood features lakefront single-family homes, clusters of townhomes, a community center, swimming pool, and private docks for non-motorized canoeing, kayaking, and catch-and-release fishing.",
          },
        },
        {
          "@type": "Question",
          "name": "What recreational facilities does Burke Lake Park offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Burke Lake Park is an 888-acre flagship regional park managed by the Fairfax County Park Authority. It features a 218-acre public fishing lake, a 4.7-mile scenic shoreline loop trail, an 18-hole par-3 golf course, driving range, public boat launch and electric motor boat rentals, a miniature steam train, antique carousel, 18-hole disc golf course, and camping sites.",
          },
        },
        {
          "@type": "Question",
          "name": "What major highways provide access to Burke?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Burke is connected by major arterial roads including Old Keene Mill Road (Route 644), Burke Centre Parkway, Roberts Parkway, Burke Lake Road, Braddock Road (Route 620), and the Fairfax County Parkway (Route 286), offering rapid routes to Interstate 95, Interstate 66, and the Capital Beltway (I-495).",
          },
        },
        {
          "@type": "Question",
          "name": "Do homes in Burke have mandatory HOA dues?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Residences within planned communities like Burke Centre and Lake Braddock are subject to mandatory community associations governed by the Virginia Property Owners' Association Act (POAA), which fund extensive amenities including pools, community centers, tennis/pickleball courts, and trail maintenance. Older non-conservancy subdivisions in Burke operate as fee-simple properties with no mandatory HOA dues.",
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
      <BurkeClient />
    </>
  );
}
