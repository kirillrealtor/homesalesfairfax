import LincolniaClient from "./LincolniaClient";

export const metadata = {
  title: "Lincolnia VA Real Estate: The Definitive TJHSST, Transit & Enclave Guide",
  description: "Exhaustive guide to Lincolnia VA real estate: Thomas Jefferson High School for Science and Technology (TJHSST), Little River Turnpike corridor, Indian Run parklands, and FCPS pyramids.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/lincolnia-va-real-estate",
  },
  openGraph: {
    title: "Lincolnia VA Real Estate: The Definitive TJHSST, Transit & Enclave Guide",
    description: "Exhaustive guide to Lincolnia VA real estate: Thomas Jefferson High School for Science and Technology (TJHSST), Little River Turnpike corridor, Indian Run parklands, and FCPS pyramids.",
    url: "https://www.homesalesfairfax.com/lincolnia-va-real-estate",
    siteName: "homesalesfairfax.com",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lincolnia VA Real Estate: The Definitive TJHSST, Transit & Enclave Guide",
    description: "Exhaustive guide to Lincolnia VA real estate: Thomas Jefferson High School for Science and Technology (TJHSST), Little River Turnpike corridor, Indian Run parklands, and FCPS pyramids.",
  },
};

export default function LincolniaPage() {
  const schemas = [
    // 1. Article / Research Monograph Schema
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": "https://www.homesalesfairfax.com/lincolnia-va-real-estate#article",
      "headline": "Lincolnia, VA Real Estate: The Definitive Guide to Spatial Morphology, Academic Excellence, Historic Turnpikes & Residential Enclaves",
      "description": "Exhaustive architectural monograph & real estate guide to Lincolnia VA: Thomas Jefferson High School for Science and Technology (TJHSST), Little River Turnpike, Indian Run Stream Valley, and mid-century enclaves.",
      "url": "https://www.homesalesfairfax.com/lincolnia-va-real-estate",
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
      "mainEntityOfPage": "https://www.homesalesfairfax.com/lincolnia-va-real-estate",
      "about": [
        "Lincolnia, Virginia",
        "Fairfax County real estate",
        "Thomas Jefferson High School for Science and Technology TJHSST",
        "Little River Turnpike Route 236",
        "Indian Run Stream Valley Park",
        "Mason Magisterial District",
        "Weyanoke Elementary School",
        "Annandale High School pyramid",
        "Interstate 395 Shirley Highway corridor",
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
          "name": "Lincolnia VA Real Estate Guide",
          "item": "https://www.homesalesfairfax.com/lincolnia-va-real-estate",
        },
      ],
    },
    // 3. FAQPage Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.homesalesfairfax.com/lincolnia-va-real-estate#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is Lincolnia an independent municipality or part of Fairfax County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lincolnia is an unincorporated census-designated place (CDP) situated directly within Fairfax County under the jurisdiction of the Fairfax County Board of Supervisors within the Mason Magisterial District. It is not an incorporated city or town. Municipal governance, public education (FCPS), police protection (FCPD Mason District Station), and land-use zoning are administered entirely by Fairfax County.",
          },
        },
        {
          "@type": "Question",
          "name": "Where is Thomas Jefferson High School for Science and Technology (TJHSST) located?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Thomas Jefferson High School for Science and Technology (TJHSST) is located directly within the geographic boundaries of Lincolnia at 6560 Braddock Road. Established in 1985 as a regional Governor's School for Science and Technology, TJHSST is consistently ranked as the number one public high school in the United States, operating specialized research laboratories in optics, robotics, astronomy, and biotechnology.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the historical origin of the name \"Lincolnia\"?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "During the eighteenth and early nineteenth centuries, the settlement was originally known as Lebanon. Following the Civil War in the late 1860s, the village was renamed Lincolnia in honor of President Abraham Lincoln, influenced by an active local post office and historic churches established along the historic Little River Turnpike.",
          },
        },
        {
          "@type": "Question",
          "name": "What was the significance of the Little River Turnpike in Lincolnia's development?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Chartered by the Virginia General Assembly in 1795 and completed in 1806, the Little River Turnpike (State Route 236) was one of the earliest privately financed, paved toll roads in the United States. Connecting Alexandria with the Shenandoah agricultural basin, the turnpike established Lincolnia as a vital staging post for stagecoaches, livestock drovers, and freight wagons throughout the nineteenth century.",
          },
        },
        {
          "@type": "Question",
          "name": "What residential architectural styles predominate in Lincolnia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lincolnia features an eclectic blend of post-war and modern residential typologies, dominated by 1950s and 1960s solid brick ramblers and split-levels in subdivisions like Lincolnia Park and Weyanoke, traditional colonial revival homes, established multi-story brick townhome enclaves, and garden-style condominium residences along the transit corridors.",
          },
        },
        {
          "@type": "Question",
          "name": "Which public schools serve Lincolnia residential properties?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lincolnia is served by Fairfax County Public Schools (FCPS), primarily within the Annandale High School and Justice High School pyramids. Feeder schools include Holmes Middle School, Glasgow Middle School, Weyanoke Elementary School, Parklawn Elementary, and Bren Mar Park Elementary, alongside competitive regional admissions eligibility to TJHSST.",
          },
        },
        {
          "@type": "Question",
          "name": "How is commuter connectivity structured from Lincolnia to major employment centers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lincolnia offers exceptional highway logistics, located immediately adjacent to Interstate 395 (Shirley Highway) via Little River Turnpike and Duke Street. Commuters reach the Pentagon, Crystal City/National Landing, and downtown Washington, D.C. in approximately 12 to 15 minutes, with direct express bus routes connecting to the Pentagon Metrorail Station.",
          },
        },
        {
          "@type": "Question",
          "name": "What natural parks and environmental watersheds define Lincolnia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lincolnia sits within the Cameron Run watershed, drained primarily by Indian Run and Turkeycock Run. Major protected green spaces include Indian Run Stream Valley Park, Green Spring Gardens (an acclaimed 31-acre public horticultural park), and Pinecrest Golf Course, preserving mature native deciduous tree canopies and stream valley floodplains.",
          },
        },
        {
          "@type": "Question",
          "name": "What structural maintenance considerations are critical for mid-century homes in Lincolnia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mid-century single-family properties constructed between 1950 and 1968 require specialized structural diligence, including evaluating original cast iron underground sewer laterals with video camera scopes, upgrading original 60-amp or 100-amp electrical panels to 200-amp circuit breakers with GFCI/AFCI protection, and inspecting crawl space moisture management systems.",
          },
        },
        {
          "@type": "Question",
          "name": "How are real estate taxes and assessments governed in Lincolnia under Virginia law?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under Virginia Code § 58.1-3201, all real property in Lincolnia is assessed annually at 100 percent of fair market value by the Fairfax County Department of Tax Administration (DTA). Assessment notices are mailed every February based on arm's-length market sales, with taxes paid semi-annually on July 28 and December 5, and formal appeal rights through the county Board of Equalization.",
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
      <LincolniaClient />
    </>
  );
}
