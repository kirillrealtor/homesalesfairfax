import WestFallsChurchClient from "./WestFallsChurchClient";

export const metadata = {
  title: "West Falls Church VA Real Estate: The Definitive Metro TOD & Enclave Guide",
  description: "Exhaustive guide to West Falls Church VA real estate: West Falls Church Metro TOD, Marshall High IB pyramid, W&OD Trail corridor, Shrevewood, and FCPS pyramids.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/west-falls-church-va-real-estate",
  },
  openGraph: {
    title: "West Falls Church VA Real Estate: The Definitive Metro TOD & Enclave Guide",
    description: "Exhaustive guide to West Falls Church VA real estate: West Falls Church Metro TOD, Marshall High IB pyramid, W&OD Trail corridor, Shrevewood, and FCPS pyramids.",
    url: "https://www.homesalesfairfax.com/west-falls-church-va-real-estate",
    siteName: "homesalesfairfax.com",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "West Falls Church VA Real Estate: The Definitive Metro TOD & Enclave Guide",
    description: "Exhaustive guide to West Falls Church VA real estate: West Falls Church Metro TOD, Marshall High IB pyramid, W&OD Trail corridor, Shrevewood, and FCPS pyramids.",
  },
};

export default function WestFallsChurchPage() {
  const schemas = [
    // 1. Article / Research Monograph Schema
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": "https://www.homesalesfairfax.com/west-falls-church-va-real-estate#article",
      "headline": "West Falls Church, VA Real Estate: The Definitive Guide to Transit-Oriented Development, W&OD Trail Living & Residential Enclaves",
      "description": "Exhaustive architectural monograph & real estate guide to West Falls Church VA: West Falls Church Metro Station mixed-use redevelopment, Marshall High IB pyramid, W&OD Trail, and Shrevewood.",
      "url": "https://www.homesalesfairfax.com/west-falls-church-va-real-estate",
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
      "mainEntityOfPage": "https://www.homesalesfairfax.com/west-falls-church-va-real-estate",
      "about": [
        "West Falls Church, Virginia",
        "Fairfax County real estate",
        "West Falls Church-VT/UVA Metrorail Station",
        "Transit-Oriented Development TOD",
        "Washington and Old Dominion W&OD Trail",
        "Marshall High School IB pyramid",
        "Providence Magisterial District",
        "Shrevewood Elementary",
        "Interstate 66 corridor",
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
          "name": "West Falls Church VA Real Estate Guide",
          "item": "https://www.homesalesfairfax.com/west-falls-church-va-real-estate",
        },
      ],
    },
    // 3. FAQPage Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.homesalesfairfax.com/west-falls-church-va-real-estate#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is West Falls Church an independent municipality or part of Fairfax County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "West Falls Church is an unincorporated census-designated place (CDP) situated directly within Fairfax County under the governance of the Fairfax County Board of Supervisors within the Providence Magisterial District. It is entirely distinct from the adjacent, independent City of Falls Church. Municipal services, public education (FCPS), police protection, and land-use zoning are administered by Fairfax County.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the West Falls Church Metrorail Station Transit-Oriented Development (TOD)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The West Falls Church Metro TOD is a landmark 24-acre joint development project between the Washington Metropolitan Area Transit Authority (WMATA), Fairfax County, and development partners (EYA, Rushmark, and HITT). The initiative replaces underutilized surface parking lots with a walkable urban village featuring modern multi-family residences, luxury townhomes, corporate office spaces, civic gathering plazas, and dedicated bicycle infrastructure directly linked to the Orange Line.",
          },
        },
        {
          "@type": "Question",
          "name": "What role does the Washington & Old Dominion (W&OD) Trail play in the community?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The historic 45-mile Washington & Old Dominion (W&OD) Railroad Regional Park bisects West Falls Church, serving as a primary non-motorized commuter superhighway and recreational spine. Residents utilize the paved trail for non-motorized commuting to Tysons, Arlington, and the East Falls Church Metro station, as well as running, walking, and cycling through contiguous stream valley parklands.",
          },
        },
        {
          "@type": "Question",
          "name": "Which public schools serve West Falls Church residential neighborhoods?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "West Falls Church is served by Fairfax County Public Schools (FCPS), primarily within the George C. Marshall High School pyramid (renowned for the International Baccalaureate Diploma Programme) and the Falls Church High School pyramid. Feeder schools include Kilmer Middle School (an AAP Level IV center), Longfellow Middle School, Shrevewood Elementary, Lemon Road Elementary, and Haycock Elementary.",
          },
        },
        {
          "@type": "Question",
          "name": "What residential architectural typologies are found in West Falls Church?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Housing in West Falls Church features an attractive spectrum ranging from post-war 1950s and 1960s brick ramblers and split-levels on quarter-to-third-acre lots in subdivisions like Shrevewood and Poplar Heights, to custom modern luxury craftsman infill estates, established transit-adjacent townhome communities, and contemporary transit-oriented condominiums near the Metro station.",
          },
        },
        {
          "@type": "Question",
          "name": "How does commuter connectivity operate from West Falls Church?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "West Falls Church offers unmatched multimodal logistics, anchored by the West Falls Church-VT/UVA Metrorail Station (Orange Line) providing a direct one-seat ride to Arlington, Foggy Bottom, and downtown Washington, D.C. Vehicular commuters enjoy immediate access to Interstate 66, State Route 7 (Leesburg Pike), Route 267 (Dulles Toll Road), and the Capital Beltway (I-495).",
          },
        },
        {
          "@type": "Question",
          "name": "What higher education and innovation facilities are located in West Falls Church?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The community is home to the Virginia Tech Northern Virginia Center, an established graduate education and research campus adjacent to the Metro station. The institution plays a pivotal role in regional innovation, computer science, and engineering education, anchoring the broader educational-tech corridor alongside the University of Virginia.",
          },
        },
        {
          "@type": "Question",
          "name": "What environmental watersheds and parks characterize West Falls Church?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "West Falls Church sits across the geological Fall Line transition, drained by tributaries of Tripps Run, Holmes Run, and Pimmit Run. Protected parks include Idylwood Park, Shrevewood Park, and the continuous greenway of the W&OD Trail, providing expansive athletic fields, tennis courts, and native oak-hickory woodland canopies.",
          },
        },
        {
          "@type": "Question",
          "name": "What structural maintenance considerations are essential for mid-century homes in West Falls Church?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Purchasers of mid-century single-family properties should conduct fiber-optic camera sewer scope inspections to check for root intrusion or rust scaling in original underground cast iron lines, upgrade original 60-amp or 100-amp electrical panels to 200-amp circuit breakers with AFCI/GFCI protection, and inspect basement crawl space moisture barriers and drainage slopes.",
          },
        },
        {
          "@type": "Question",
          "name": "How are real estate assessments governed in West Falls Church under Virginia law?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under Virginia Code § 58.1-3201, all real property in West Falls Church is assessed annually at 100 percent of fair market value by the Fairfax County Department of Tax Administration (DTA). Assessment notices are mailed every February based on arm's-length market sales, with taxes paid semi-annually on July 28 and December 5, and formal administrative appeal rights through the county Board of Equalization.",
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
      <WestFallsChurchClient />
    </>
  );
}
