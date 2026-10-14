import CityOfFairfaxClient from "./CityOfFairfaxClient";

export const metadata = {
  title: "City of Fairfax VA Real Estate: The Definitive Independent Municipality Guide",
  description: "Exhaustive guide to City of Fairfax VA real estate: independent city governance, Old Town historic core, Country Club Hills, Mosby Woods, Fairfax High pyramid, and GMU nexus.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/city-of-fairfax-va-real-estate",
  },
  openGraph: {
    title: "City of Fairfax VA Real Estate: The Definitive Independent Municipality Guide",
    description: "Exhaustive guide to City of Fairfax VA real estate: independent city governance, Old Town historic core, Country Club Hills, Mosby Woods, Fairfax High pyramid, and GMU nexus.",
    url: "https://www.homesalesfairfax.com/city-of-fairfax-va-real-estate",
    siteName: "homesalesfairfax.com",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "City of Fairfax VA Real Estate: The Definitive Independent Municipality Guide",
    description: "Exhaustive guide to City of Fairfax VA real estate: independent city governance, Old Town historic core, Country Club Hills, Mosby Woods, Fairfax High pyramid, and GMU nexus.",
  },
};

export default function CityOfFairfaxPage() {
  const schemas = [
    // 1. Article / Research Monograph Schema
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": "https://www.homesalesfairfax.com/city-of-fairfax-va-real-estate#article",
      "headline": "City of Fairfax VA Real Estate: The Definitive Guide to Independent Municipality Governance, Old Town Heritage & Architectural Enclaves",
      "description": "Exhaustive guide to City of Fairfax VA real estate: independent city governance, Old Town historic core, Country Club Hills, Mosby Woods, Fairfax High pyramid, and GMU nexus.",
      "url": "https://www.homesalesfairfax.com/city-of-fairfax-va-real-estate",
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
      "mainEntityOfPage": "https://www.homesalesfairfax.com/city-of-fairfax-va-real-estate",
      "about": [
        "City of Fairfax, Virginia",
        "Independent City in Virginia",
        "Fairfax VA real estate",
        "Old Town Fairfax",
        "Country Club Hills",
        "Mosby Woods",
        "George Mason University",
        "Fairfax High School pyramid",
        "CUE Bus system",
        "Vienna/Fairfax-GMU Metrorail",
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
          "name": "City of Fairfax VA Real Estate Guide",
          "item": "https://www.homesalesfairfax.com/city-of-fairfax-va-real-estate",
        },
      ],
    },
    // 3. FAQPage Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.homesalesfairfax.com/city-of-fairfax-va-real-estate#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is the City of Fairfax part of Fairfax County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Under the unique constitutional structure of the Commonwealth of Virginia, the City of Fairfax is an independent city, completely separate from Fairfax County. It possesses its own independent municipal government, City Council, Mayor, City Manager, Police Department, Fire and Rescue Department, and public works. City homeowners pay independent city real estate taxes rather than Fairfax County property taxes.",
          },
        },
        {
          "@type": "Question",
          "name": "How does public schooling work in the City of Fairfax if it is an independent city?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The City of Fairfax School Board owns the four city educational facilities—Fairfax High School, Katherine Johnson Middle School, Daniels Run Elementary, and Providence Elementary. Under a long-standing contractual agreement, instructional delivery, curriculum, and faculty administration are operated by Fairfax County Public Schools (FCPS). Students graduate with standard FCPS diplomas and participate in all county academic programs, including admission to Thomas Jefferson High School for Science and Technology (TJHSST).",
          },
        },
        {
          "@type": "Question",
          "name": "Why is the Fairfax County Judicial Center located inside the City of Fairfax?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The historic Fairfax County Courthouse was constructed in 1799–1800 at the historic crossroads of Little River Turnpike and Ox Road before the town or city incorporated. When the City of Fairfax separated from Fairfax County in 1961 as an independent city, the 1961 transition charter established a permanent county enclave allowing Fairfax County to retain and expand its primary judicial complex inside the municipal limits of the City.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the CUE Bus transit system?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The City-University-Energysaver (CUE) Bus is a municipal transit service owned and operated directly by the City of Fairfax. It provides comprehensive, low-cost and fare-free transit connecting residential neighborhoods, commercial hubs, Old Town Fairfax, George Mason University, and the Vienna/Fairfax-GMU Metrorail Station on the Washington Metrorail Orange Line.",
          },
        },
        {
          "@type": "Question",
          "name": "What architectural styles predominate across City of Fairfax residential neighborhoods?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The City features an eclectic architectural heritage. Historic Old Town showcases late-eighteenth, Victorian, and early-twentieth-century colonial revival structures alongside modern luxury infill townhomes and elevator condominiums. Surrounding subdivisions like Country Club Hills, Mosby Woods, and Old Lee Hills feature mid-century brick ramblers, split-levels, and an accelerating wave of custom-built modern craftsman and modern farmhouse single-family rebuilds.",
          },
        },
        {
          "@type": "Question",
          "name": "How are real estate property taxes assessed in the City of Fairfax?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In accordance with Virginia Code Title 58.1-3201, real property in the City of Fairfax is assessed annually at 100 percent of fair market value by the City's Office of the Commissioner of the Revenue and real estate assessment division. Real estate tax rates are established annually by the City of Fairfax City Council during its spring budgetary cycle.",
          },
        },
        {
          "@type": "Question",
          "name": "What is George Mason University's relationship to the City of Fairfax?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "George Mason University's flagship campus borders the southern municipal limit of the City. The university serves as a primary intellectual, cultural, and economic engine for the City, anchoring demand for faculty and professional housing, student-accessible amenities, athletic events at EagleBank Arena, and fine arts performances at the Center for the Arts.",
          },
        },
        {
          "@type": "Question",
          "name": "What major commuter highway corridors serve the City of Fairfax?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The City of Fairfax sits at the historic crossroad of Northern Virginia. Route 50 (Fairfax Boulevard) and Route 29 (Main Street) traverse the city east-to-west, while Route 123 (Chain Bridge Road) runs north-to-south connecting directly to Interstate 66, Oakton, Vienna, and Tysons to the north and GMU and Burke to the south.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the Northfax Small Area Plan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Northfax Small Area Plan is a comprehensive municipal redevelopment framework established by the City of Fairfax to transform the northern gateway around Route 50, Route 29, and Chain Bridge Road into a walkable, mixed-use urban district featuring multi-family residential, retail, civic plazas, and enhanced pedestrian connectivity to the nearby Vienna Metrorail station.",
          },
        },
        {
          "@type": "Question",
          "name": "What park and trail networks are situated within the City of Fairfax?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The City is anchored by Daniels Run Park, a 90-acre wooded stream valley corridor with multi-use trails connecting neighborhoods from Old Town to Fairfax High School. Other major recreational hubs include the 15-acre Van Dyck Park, Kutner Park, Gateway Park, and continuous connections to the broader Accotink Creek Stream Valley trail network.",
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
      <CityOfFairfaxClient />
    </>
  );
}
