import NorthSpringfieldClient from "./NorthSpringfieldClient";

export const metadata = {
  title: "North Springfield VA Real Estate: The Definitive Community, History & Parks Guide",
  description: "Exhaustive guide to North Springfield VA real estate: 1955 Edward R. Carr mid-century architecture, Lake Accotink Park, and Annandale High IB pyramid.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/north-springfield-va-real-estate",
  },
  openGraph: {
    title: "North Springfield VA Real Estate: The Definitive Community, History & Parks Guide",
    description: "Exhaustive guide to North Springfield VA real estate: 1955 Edward R. Carr mid-century architecture, Lake Accotink Park, and Annandale High IB pyramid.",
    url: "https://www.homesalesfairfax.com/north-springfield-va-real-estate",
    siteName: "homesalesfairfax.com",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "North Springfield VA Real Estate: The Definitive Community, History & Parks Guide",
    description: "Exhaustive guide to North Springfield VA real estate: 1955 Edward R. Carr mid-century architecture, Lake Accotink Park, and Annandale High IB pyramid.",
  },
};

export default function NorthSpringfieldPage() {
  const schemas = [
    // 1. Article / Research Monograph Schema
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": "https://www.homesalesfairfax.com/north-springfield-va-real-estate#article",
      "headline": "North Springfield, VA Real Estate: The Definitive Guide to Spatial Morphology, Edward R. Carr Mid-Century Architecture, Lake Accotink & Annandale High IB Pyramid",
      "description": "Comprehensive architectural monograph & real estate guide to North Springfield VA: 1955 Edward R. Carr planned development, historic 1956 house schools, classic brick ramblers and split-levels, Lake Accotink Park eastern trails, North Springfield Elementary, Holmes Middle, and Annandale High School International Baccalaureate (IB) pyramid.",
      "url": "https://www.homesalesfairfax.com/north-springfield-va-real-estate",
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
      "mainEntityOfPage": "https://www.homesalesfairfax.com/north-springfield-va-real-estate",
      "about": [
        "North Springfield, Virginia",
        "North Springfield CDP",
        "Fairfax County real estate",
        "Edward R. Carr",
        "Mid-century brick ramblers",
        "Lake Accotink Park",
        "Gerry Connolly Cross County Trail",
        "Annandale High School pyramid",
        "International Baccalaureate program",
        "North Springfield Elementary School",
        "Holmes Middle School",
        "Backlick Road VRE corridor",
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
          "name": "North Springfield, VA Real Estate & Community Guide",
          "item": "https://www.homesalesfairfax.com/north-springfield-va-real-estate",
        },
      ],
    },
    // 3. FAQPage Schema (10 Comprehensive Encyclopedic Questions)
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.homesalesfairfax.com/north-springfield-va-real-estate#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are the geographic boundaries and spatial dimensions of North Springfield, Virginia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The North Springfield Census-Designated Place (CDP) encompasses approximately 1.55 square miles (4.02 square kilometers) in southern Fairfax County (ZIP code 22151). Its borders are defined by Braddock Road (Route 620) to the north, Backlick Run and Backlick Road to the east, the Norfolk Southern Railway and Capital Beltway (I-495) to the south, and Flag Run and Lake Accotink Park to the west.",
          },
        },
        {
          "@type": "Question",
          "name": "Who developed North Springfield and when was the community founded?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "North Springfield was master-developed by prominent builder Edward R. Carr (Edward R. Carr, Inc., and Crestwood Construction Corporation), with initial model homes opening in 1955. Following the completion of the Shirley Highway, Carr transformed agricultural farmland into one of Fairfax County's earliest and most successful planned post-WWII suburban communities.",
          },
        },
        {
          "@type": "Question",
          "name": "What were the famous 'house schools' of 1956 in North Springfield?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "During the initial construction boom in 1956, population growth outpaced school construction. Fairfax County Public Schools temporarily rented ten newly constructed residential homes from developer Edward R. Carr on Axton Street and Kempsville Street, converting living rooms and bedrooms into makeshift classrooms for approximately 350 elementary students until North Springfield Elementary School opened its doors.",
          },
        },
        {
          "@type": "Question",
          "name": "What architectural styles predominate across North Springfield?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "North Springfield is renowned for mid-century American suburban architecture, dominated by solid red-brick ramblers (ranch-style homes), tri-level split-levels, and Cape Cods. Built with heavy timber framing, masonry fireplaces, and broad picture windows, many homes feature full daylight walk-out basements, attached carports, and generous wooded lots.",
          },
        },
        {
          "@type": "Question",
          "name": "Which public schools serve residents of North Springfield?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "North Springfield is zoned within the distinguished Annandale High School pyramid of Fairfax County Public Schools (FCPS Region 6). Students attend North Springfield Elementary School (PreK–5) on Leesville Boulevard, advance to Holmes Middle School (grades 6–8), and graduate from Annandale High School (grades 9–12), celebrated for its elite International Baccalaureate (IB) Diploma Program.",
          },
        },
        {
          "@type": "Question",
          "name": "How does North Springfield connect to Lake Accotink Park and regional trail networks?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "North Springfield directly borders the eastern perimeter of the 496-acre Lake Accotink Park. Neighborhood pathways connect residents to the 3.9-mile Lake Accotink Loop Trail and the 40-mile Gerry Connolly Cross County Trail (CCT), providing direct access to canoeing, hiking, biking, and protected nature preserves.",
          },
        },
        {
          "@type": "Question",
          "name": "Does North Springfield have a mandatory Homeowners Association (HOA)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. North Springfield operates with no mandatory HOA fees or restrictive covenants. Community affairs, directories, and seasonal events are stewarded by the voluntary North Springfield Civic Association (NSCA), founded in 1956.",
          },
        },
        {
          "@type": "Question",
          "name": "What recreational facilities exist within North Springfield?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Neighborhood recreation centers around the private, member-owned North Springfield Swim Club (NSSC) on Leesville Boulevard, featuring a 25-meter competition pool, diving well, toddler pool, and tennis courts. In addition, the 5-acre North Springfield Park provides youth athletic fields and playgrounds.",
          },
        },
        {
          "@type": "Question",
          "name": "What commuter transit routes and rail facilities serve North Springfield?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "North Springfield offers exceptional commuter connectivity with immediate access to Interstate 495 (Exit 52 at Little River Turnpike and Exit 54 at Braddock Road) and the 495 Express Lanes. Commuter bus routes run along Braddock Road directly to the Pentagon, while the Backlick Road Virginia Railway Express (VRE) station is located less than two miles away.",
          },
        },
        {
          "@type": "Question",
          "name": "How are real estate property values assessed in North Springfield?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Property taxation is governed strictly by Code of Virginia § 58.1-3201, requiring annual assessments at 100 percent of true fair market value. The Fairfax County Department of Tax Administration (DTA) conducts computerized mass appraisal equalizations annually based on verified arm's-length market transactions of comparable homes within specific neighborhood submarket codes.",
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
      <NorthSpringfieldClient />
    </>
  );
}
