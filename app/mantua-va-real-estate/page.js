import MantuaClient from "./MantuaClient";

export const metadata = {
  title: "Mantua VA Real Estate: The Definitive Woodland Estates, Schools & Architecture Guide",
  description: "Exhaustive architectural and real estate guide to Mantua VA: rolling half-acre wooded estates, Mid-Century Modern ranches, Mantua Elementary AAP, and Woodson High pyramid.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/mantua-va-real-estate",
  },
  openGraph: {
    title: "Mantua VA Real Estate: The Definitive Woodland Estates, Schools & Architecture Guide",
    description: "Exhaustive architectural and real estate guide to Mantua VA: rolling half-acre wooded estates, Mid-Century Modern ranches, Mantua Elementary AAP, and Woodson High pyramid.",
    url: "https://www.homesalesfairfax.com/mantua-va-real-estate",
    siteName: "homesalesfairfax.com",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mantua VA Real Estate: The Definitive Woodland Estates, Schools & Architecture Guide",
    description: "Exhaustive architectural and real estate guide to Mantua VA: rolling half-acre wooded estates, Mid-Century Modern ranches, Mantua Elementary AAP, and Woodson High pyramid.",
  },
};

export default function MantuaPage() {
  const schemas = [
    // 1. Article / Research Monograph Schema
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": "https://www.homesalesfairfax.com/mantua-va-real-estate#article",
      "headline": "Mantua, VA Real Estate: The Definitive Guide to Spatial Morphology, Wooded Half-Acre Parcels, Mid-Century Modern Architecture, Mantua Elementary AAP & Woodson High Pyramid",
      "description": "Exhaustive architectural monograph & real estate guide to Mantua VA: post-war conservation planning, rolling wooded landscapes, custom ramblers and contemporary masterworks, Mantua Swim & Tennis Club, and W.T. Woodson High School feeder pyramid.",
      "url": "https://www.homesalesfairfax.com/mantua-va-real-estate",
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
      "mainEntityOfPage": "https://www.homesalesfairfax.com/mantua-va-real-estate",
      "about": [
        "Mantua, Virginia",
        "Fairfax County real estate",
        "Mantua Elementary School AAP Center",
        "W.T. Woodson High School pyramid",
        "Frost Middle School",
        "Mid-Century Modern architecture",
        "Mantua Swim & Tennis Club",
        "Accotink Creek stream valley",
        "Providence Magisterial District",
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
          "name": "Mantua VA Real Estate Guide",
          "item": "https://www.homesalesfairfax.com/mantua-va-real-estate",
        },
      ],
    },
    // 3. FAQPage Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.homesalesfairfax.com/mantua-va-real-estate#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is Mantua an incorporated town or an unincorporated community in Fairfax County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mantua is an unincorporated census-designated place (CDP) governed directly by the Fairfax County Board of Supervisors within the Providence Magisterial District. Although it carries a Fairfax postal address (ZIP code 22031), it is not part of the independent City of Fairfax. All public services, road maintenance, zoning enforcement, emergency rescue, and public education are administered by Fairfax County.",
          },
        },
        {
          "@type": "Question",
          "name": "What was the founding vision and historical development of Mantua?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Developed beginning in 1952–1954, Mantua was conceived as a conservation-oriented woodland residential sanctuary. Unlike typical grid subdivisions of the post-war era, developers established rolling curvilinear streets without sidewalks, preserving towering native oak and beech canopies on generous parcels typically spanning one-third to three-quarters of an acre, creating a tranquil retreat just minutes from the nation's capital.",
          },
        },
        {
          "@type": "Question",
          "name": "What architectural styles characterize the residential fabric of Mantua?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mantua is celebrated for its diverse architectural collection: authentic 1950s and 1960s Mid-Century Modern contemporary homes with post-and-beam construction and floor-to-ceiling glass walls; sprawling brick ramblers with walkout lower levels; stately center-hall Colonials and split-levels; and modern luxury custom architectural craftsman and transitional estates built on original oversized parcels.",
          },
        },
        {
          "@type": "Question",
          "name": "Which public schools serve the Mantua community?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mantua is served by the prestigious W.T. Woodson High School pyramid within Fairfax County Public Schools (FCPS). Students attend the neighborhood Mantua Elementary School (nationally recognized for its Full-Time Advanced Academic Programs AAP Level IV Center and Deaf and Hard of Hearing Total Communication Program), Robert Frost Middle School, and W.T. Woodson High School (famed for AP Capstone, STEM academies, and championship athletics).",
          },
        },
        {
          "@type": "Question",
          "name": "What community amenities and recreational facilities are located in Mantua?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The social epicenter of the neighborhood is the member-owned Mantua Swim & Tennis Club (home to a 25-meter competition pool, diving well, lighted tennis and pickleball courts, and the Mantua Marlins swim team). The community also features direct trailheads connecting to the Accotink Stream Valley Park and the Gerry Connolly Cross County Trail (CCT), along with neighborhood tot lots and civic parklands.",
          },
        },
        {
          "@type": "Question",
          "name": "How is commuter transit structured from Mantua to major regional employment centers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mantua enjoys central Northern Virginia positioning bordered by Route 50 (Arlington Boulevard) and Route 236 (Little River Turnpike). The Vienna/Fairfax-GMU Metrorail Station (Orange Line) is approximately 2.5 miles northwest, while the Dunn Loring-Merrifield station is 3.5 miles northeast. Commuters have immediate access to I-66, I-495 (Capital Beltway), Inova Fairfax Hospital, Tysons Corner, and Washington, D.C.",
          },
        },
        {
          "@type": "Question",
          "name": "What environmental and mature tree canopy considerations apply to Mantua homeownership?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Homeowners in Mantua maintain mature deciduous forests featuring white oaks, tulip poplars, and red maples. Best practices include periodic professional arborist inspections for crown thinning and root health, maintaining positive foundation drainage slopes to manage Accotink watershed runoff, and installing sump pumps with dual battery backups in daylight walkout basements.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the role and governance of the Mantua Citizens Association (MCA)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Founded in 1954, the Mantua Citizens Association (MCA) is one of Fairfax County's oldest and most active volunteer civic organizations. The MCA represents neighborhood interests before the Board of Supervisors, coordinates architectural and environmental covenants, publishes the monthly Mantua Directory, and organizes cherished traditions such as the Annual Memorial Day Parade and neighborhood picnics.",
          },
        },
        {
          "@type": "Question",
          "name": "What retail, dining, and cultural destinations surround Mantua?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Residents enjoy close proximity to the vibrant Mosaic District in Merrifield (featuring boutique dining, retail, and the Angelika Film Center), the historic downtown City of Fairfax (featuring Old Town Square, local eateries, and library resources), Pickett Shopping Center (Trader Joe's and Home Depot), and premier medical care at Inova Fairfax Hospital.",
          },
        },
        {
          "@type": "Question",
          "name": "How are real estate property assessments and taxes governed in Mantua?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under Virginia Code § 58.1-3201, all residential property in Mantua is assessed annually at 100 percent of fair market value by the Fairfax County Department of Tax Administration (DTA). Notices are mailed in February based on arm's-length sales of comparable properties, with real estate taxes paid semi-annually on July 28 and December 5, and formal administrative appeal mechanisms through the Board of Equalization.",
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
      <MantuaClient />
    </>
  );
}
