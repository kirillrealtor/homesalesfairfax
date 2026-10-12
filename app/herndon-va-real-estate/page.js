import HerndonClient from "./HerndonClient";

export const metadata = {
  title: "Herndon VA Real Estate: The Definitive Guide to Homes, Historic Preservation & Dulles Tech Corridor",
  description: "Exhaustive guide to Herndon VA real estate: incorporated town vs. Oak Hill, W&OD Trail, Silver Line Metro, Sugarland Run watershed, Herndon High pyramid, and zoning.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/herndon-va-real-estate",
  },
  openGraph: {
    title: "Herndon VA Real Estate: The Definitive Guide to Homes, Historic Preservation & Dulles Tech Corridor",
    description: "Exhaustive guide to Herndon VA real estate: incorporated town vs. Oak Hill, W&OD Trail, Silver Line Metro, Sugarland Run watershed, Herndon High pyramid, and zoning.",
    url: "https://www.homesalesfairfax.com/herndon-va-real-estate",
    siteName: "homesalesfairfax.com",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "/images/herndon.jpg",
        width: 2400,
        height: 1350,
        alt: "Herndon VA Real Estate - Definitive Guide to Historic Preservation, Zoning, and Dulles Tech Corridor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Herndon VA Real Estate: The Definitive Guide to Homes, Historic Preservation & Dulles Tech Corridor",
    description: "Exhaustive guide to Herndon VA real estate: incorporated town vs. Oak Hill, W&OD Trail, Silver Line Metro, Sugarland Run watershed, Herndon High pyramid, and zoning.",
    images: ["/images/herndon.jpg"],
  },
};

export default function HerndonPage() {
  const schemas = [
    // 1. Article / Report Schema
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": "https://www.homesalesfairfax.com/herndon-va-real-estate#article",
      "headline": "Herndon VA Real Estate: The Definitive Guide to Homes, Historic Preservation, Zoning & Schools",
      "description": "Exhaustive guide to Herndon VA real estate: incorporated town vs. Oak Hill, W&OD Trail, Silver Line Metro, Sugarland Run watershed, Herndon High pyramid, and zoning.",
      "url": "https://www.homesalesfairfax.com/herndon-va-real-estate",
      "image": "https://www.homesalesfairfax.com/images/herndon.jpg",
      "inLanguage": "en-US",
      "publisher": {
        "@type": "Organization",
        "name": "homesalesfairfax.com",
        "url": "https://www.homesalesfairfax.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.homesalesfairfax.com/images/logo-ysc-remax.png",
        },
      },
      "mainEntityOfPage": "https://www.homesalesfairfax.com/herndon-va-real-estate",
      "about": [
        "Herndon, Virginia",
        "Fairfax County real estate",
        "Town of Herndon zoning",
        "Heritage Preservation Overlay District",
        "Herndon High School pyramid",
        "W&OD Trail",
        "Sugarland Run watershed",
        "Silver Line Metrorail",
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
          "name": "Herndon VA Real Estate Guide",
          "item": "https://www.homesalesfairfax.com/herndon-va-real-estate",
        },
      ],
    },
    // 3. FAQPage Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.homesalesfairfax.com/herndon-va-real-estate#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is Herndon an incorporated town or part of Fairfax County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Herndon functions as both, operating through an interconnected dual-jurisdictional structure. The Town of Herndon is a legally chartered, self-governing incorporated municipality spanning 4.2 square miles within Fairfax County. It maintains an elected Mayor, Town Council, independent municipal police department, public works department, and autonomous zoning ordinance. However, all town properties are also part of Fairfax County; town residents pay county real estate taxes, vote in county elections, and utilize Fairfax County Public Schools. Conversely, Greater Herndon / Oak Hill (ZIP 20171) lies south of the Dulles Toll Road and is unincorporated land governed directly by the Fairfax County Board of Supervisors, with no municipal town affiliation.",
          },
        },
        {
          "@type": "Question",
          "name": "Where does the name \"Herndon\" originate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The community was named in 1858 in honor of Commander William Lewis Herndon (1813–1857), a distinguished United States Navy officer, oceanographer, and explorer who led the first scientific survey of the Amazon Basin. In September 1857, Commander Herndon captained the commercial mail steamship SS Central America (the \"Ship of Gold\") when it encountered a Category 2 hurricane off Cape Hatteras. Over a thirty-hour battle against rising bilge waters, Herndon coordinated the rescue of all 152 women and children aboard onto a passing vessel. Remaining on the hurricane deck in full dress uniform, he went down with his vessel. Impressed by his bravery, the crossroads citizens petitioned the Post Office Department to name their rail depot \"Herndon.\"",
          },
        },
        {
          "@type": "Question",
          "name": "Does Herndon have a dedicated Metrorail station?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Herndon is served directly by the Herndon Metrorail Station on the Washington Metro Silver Line, located in the median of the Dulles Toll Road (Route 267) adjacent to the Herndon-Monroe Park and Ride facility. Opened in November 2022 as part of the Silver Line Phase 2 extension, the heavy-rail station features pedestrian bridges crossing the highway, a multi-level structured commuter parking garage, and frequent direct service. Commute times run roughly ten minutes west to Washington Dulles International Airport, eighteen minutes east to Tysons, and forty-two to forty-five minutes to the Washington, D.C., regional employment core.",
          },
        },
        {
          "@type": "Question",
          "name": "How does Town of Herndon zoning differ from Fairfax County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Town of Herndon exercises independent statutory zoning authority under Chapter 78 of the Herndon Town Code, completely distinct from the Fairfax County Zoning Ordinance (zMOD). Key differences include: planning and zoning decisions are administered by the Herndon Planning Commission, Town Council, and Town Department of Community Development, rather than county boards; town residential zones establish unique setbacks, maximum building heights, and impervious surface lot coverage limits designed for an intimate town grid; and town-administered overlay zoning—including the Heritage Preservation Overlay District and Planned Development Traditional Downtown (PD-TD)—regulates historic preservation, zero-lot-line commercial activation, and town-scale infill projects.",
          },
        },
        {
          "@type": "Question",
          "name": "How are real estate taxes calculated for Town of Herndon homeowners?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Real estate taxes follow the legal requirements of Virginia Code Title 58.1, which mandates annual assessment of all real property at 100 percent of fair market value by the Fairfax County Department of Tax Administration. Homeowners located within the incorporated town pay two separate levies: the Fairfax County Base Real Estate Levy and the Town of Herndon Municipal Real Estate Levy, alongside dedicated stormwater district assessments. In exchange for the town levy, residents receive dedicated services: independent police protection through the Herndon Police Department, weekly municipal trash/recycling pickup, seasonal curbside leaf vacuuming, and direct street snow removal by the Town Department of Public Works. Homeowners in unincorporated Greater Herndon (ZIP 20171) pay only the Fairfax County levy, relying on county police, VDOT road clearance, and private trash haulers.",
          },
        },
        {
          "@type": "Question",
          "name": "What public high school pyramid serves Herndon?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The primary public secondary school serving the area is Herndon High School, anchored within Fairfax County Public Schools (FCPS) Region 1. The educational pyramid includes feeder institutions such as Herndon Middle School, Herndon Elementary, Clearview Elementary, Dranesville Elementary, and Hutchison Elementary. Herndon High School is celebrated for its historic Naval Junior Reserve Officers Training Corps (NJROTC), its Advanced Placement (AP) curricula, and an internationally recognized instrumental music program (\"The Pride of Herndon\"). Students across the pyramid are also screened for FCPS Advanced Academic Programs (AAP) Level IV centers and are eligible to apply to the prestigious Thomas Jefferson High School for Science and Technology (TJHSST).",
          },
        },
        {
          "@type": "Question",
          "name": "What are the rules for renovating a home in the Herndon Historic District?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Properties within the town's Heritage Preservation Overlay District (HPOD) are overseen by the Town Architectural Review Board (ARB). Under the Herndon Heritage Preservation Design Guidelines: any exterior alteration visible from a public street—including window or siding replacement, roof alterations, paint color modifications, demolitions, or additions—requires a formal Certificate of Appropriateness (COA) approved by the ARB. The board prioritizes the preservation and repair of authentic historic building fabric (such as heart pine, original wood siding, and true-divided-light glass) over modern synthetic materials, requiring replacements to match original architectural details.",
          },
        },
        {
          "@type": "Question",
          "name": "What is Runnymede Park and how does it affect nearby real estate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Runnymede Park is a 58-acre protected nature preserve owned and maintained by the Town of Herndon along Herndon Parkway and Sugarland Run. Designed for passive nature conservation, it features native meadows, non-tidal wetlands, bird sanctuaries, and walking trails, with an absolute prohibition on motorized vehicles or active sports complexes. Properties bordering the park enjoy permanent, protected natural views, minimal through-traffic, and direct trail access. These homes command strong market interest and sustained holding periods due to the permanent buffer against future development.",
          },
        },
        {
          "@type": "Question",
          "name": "Do homes in Herndon have mandatory Homeowners Associations (HOAs)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Association governance depends on the neighborhood: many older detached single-family residences in the historic core and early mid-century town subdivisions are completely fee-simple and non-HOA, freeing owners from monthly association assessments and covenants (though properties within the HPOD remain subject to Town ARB oversight). Most subdivisions platted from the 1970s onward—including Kingston Chase in 20170, as well as Franklin Farm, Fox Mill Estates, and Chantilly Highlands in 20171—maintain mandatory HOAs. These associations collect dues to fund shared swimming pools, tennis/pickleball courts, common grounds landscaping, private trail networks, and enforce architectural guidelines.",
          },
        },
        {
          "@type": "Question",
          "name": "How does the W&OD Trail function within Herndon?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Washington & Old Dominion (W&OD) Railroad Regional Park is a 45-mile paved linear park operated by NOVA Parks that runs directly through the historic core of downtown Herndon. Tracing the historic bed of the Alexandria, Loudoun & Hampshire / W&OD Railroad, the trail serves as both a recreational amenity and a key non-motorized commuter highway. It provides grade-separated, paved, and town-cleared transportation links east toward Reston, Vienna, Tysons, and Arlington, directly passing the Herndon Depot Museum, the Town Green, and downtown cafes, cycling shops, and restaurants.",
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
      <HerndonClient />
    </>
  );
}
