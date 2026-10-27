import GreenbriarClient from "./GreenbriarClient";

export const metadata = {
  title: "Greenbriar VA Real Estate: Mid-Century Colonials & Chantilly High",
  description: "Exhaustive guide to Greenbriar VA real estate: 1.6 sq mi CDP, Levitt & Sons colonials & split-levels, Greenbriar East/West Elementary, Rocky Run Middle & Chantilly High.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/greenbriar-va-real-estate",
  },
  openGraph: {
    title: "Greenbriar VA Real Estate: Mid-Century Colonials & Chantilly High",
    description: "Exhaustive guide to Greenbriar VA real estate: 1.6 sq mi CDP, Levitt & Sons colonials & split-levels, Greenbriar East/West Elementary, Rocky Run Middle & Chantilly High.",
    url: "https://www.homesalesfairfax.com/greenbriar-va-real-estate",
    siteName: "homesalesfairfax.com",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Greenbriar VA Real Estate: Mid-Century Colonials & Chantilly High",
    description: "Exhaustive guide to Greenbriar VA real estate: 1.6 sq mi CDP, Levitt & Sons colonials & split-levels, Greenbriar East/West Elementary, Rocky Run Middle & Chantilly High.",
  },
};

export default function GreenbriarPage() {
  const schemas = [
    // 1. Article / Research Monograph Schema
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": "https://www.homesalesfairfax.com/greenbriar-va-real-estate#article",
      "headline": "Greenbriar, VA Real Estate: The Definitive Guide to Levitt & Sons Mid-Century Architecture, Greenbriar East & West Elementary, Rocky Run & Chantilly Feeder Pyramids",
      "description": "Comprehensive architectural monograph & real estate guide to Greenbriar VA: 1.6 square-mile Census-Designated Place, classic Levitt & Sons single-family colonials and split-levels with zero mandatory HOA, Greenbriar Shopping Center, Greenbriar Pool Club, Rocky Run Middle School, and Chantilly High School pyramid.",
      "url": "https://www.homesalesfairfax.com/greenbriar-va-real-estate",
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
      "mainEntityOfPage": "https://www.homesalesfairfax.com/greenbriar-va-real-estate",
      "about": [
        "Greenbriar, Virginia",
        "Greenbriar CDP",
        "Levitt & Sons architecture",
        "Greenbriar East Elementary School",
        "Greenbriar West Elementary School",
        "Rocky Run Middle School",
        "Chantilly High School",
        "Fairfax County real estate",
        "Greenbriar Shopping Center",
        "Route 50 corridor",
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
          "name": "Greenbriar, VA Real Estate & Community Guide",
          "item": "https://www.homesalesfairfax.com/greenbriar-va-real-estate",
        },
      ],
    },
    // 3. FAQPage Schema (10 Comprehensive Encyclopedic Questions)
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.homesalesfairfax.com/greenbriar-va-real-estate#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are the geographic boundaries and spatial dimensions of Greenbriar, Virginia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Greenbriar Census-Designated Place (CDP) spans approximately 1.6 square miles in western Fairfax County (ZIP code 22033, Sully Magisterial District). It is positioned directly north of Route 50 (Lee Jackson Memorial Highway), bounded by the Fairfax County Parkway (Route 286) to the east, Stringfellow Road to the west, and Franklin Farm to the north.",
          },
        },
        {
          "@type": "Question",
          "name": "Who developed Greenbriar and what is its architectural heritage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Greenbriar was developed primarily between 1965 and 1975 by renowned suburban builder Levitt & Sons. It comprises nearly 2,000 single-family detached homes featuring signature mid-century Center-Hall Colonials, Dutch Colonials with gambrel rooflines, split-foyer/bi-level models, and sprawling single-story ramblers on mature quarter- to third-acre landscaped lots.",
          },
        },
        {
          "@type": "Question",
          "name": "Does Greenbriar have a mandatory Homeowners Association (HOA)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Greenbriar operates with zero mandatory HOA fees and zero restrictive master HOA covenants. The community is supported by the voluntary Greenbriar Civic Association (GCA), which organizes neighborhood safety initiatives, holiday parades, and civic engagement.",
          },
        },
        {
          "@type": "Question",
          "name": "What recreational facilities and pools are available in Greenbriar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Residents enjoy the private membership Greenbriar Pool Club featuring a 25-meter competitive swimming pool, diving well, wading pool, and home to the Greenbriar Dolphins swim team. Greenbriar Commons Park provides athletic fields, playgrounds, and direct connections to the Rocky Run Stream Valley trail network.",
          },
        },
        {
          "@type": "Question",
          "name": "Which Fairfax County Public Schools serve the Greenbriar community?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Greenbriar is anchored internally by two neighborhood elementary schools: Greenbriar East Elementary and Greenbriar West Elementary (home to a full-time FCPS AAP Level IV center). Students advance to the highly rated Rocky Run Middle School and Chantilly High School, recognized for its Governor's STEM Academy and AP Capstone programs.",
          },
        },
        {
          "@type": "Question",
          "name": "What commercial and shopping options exist within walking distance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The community is anchored at Route 50 and Stringfellow Road by the Greenbriar Shopping Center, featuring a full-service Giant Food, CVS Pharmacy, specialty dining, banking branches, medical suites, and local neighborhood retail services.",
          },
        },
        {
          "@type": "Question",
          "name": "What commuter highways and public transit options serve Greenbriar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Greenbriar offers direct vehicular access to Route 50, Fairfax County Parkway (Route 286), Interstate 66, and Route 28. Commuters benefit from the nearby Stringfellow Road Park & Ride lot offering express Fairfax Connector buses to the Vienna Metrorail station (Orange Line) and Herndon/Innovation Center Silver Line stations.",
          },
        },
        {
          "@type": "Question",
          "name": "What parklands and stream valleys run through Greenbriar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Greenbriar is bordered by the Rocky Run Stream Valley Park and Flatlick Branch greenway, offering miles of forested multi-use trails, nature observation areas, and scenic pedestrian connections throughout western Fairfax County.",
          },
        },
        {
          "@type": "Question",
          "name": "How does Greenbriar compare to adjacent master-planned subdivisions like Franklin Farm?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Greenbriar offers classic late-1960s to 1970s mid-century architecture, larger mature tree canopies, and zero mandatory HOA fees, whereas Franklin Farm features 1980s cluster construction with mandatory HOA dues supporting six retention ponds, dual pools, and 13+ miles of association-maintained trails.",
          },
        },
        {
          "@type": "Question",
          "name": "How does Fairfax County assess real property values across Greenbriar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In accordance with Code of Virginia § 58.1-3201, all real property is assessed annually at 100 percent of true fair market value. The Fairfax County Department of Tax Administration (DTA) employs computerized mass appraisal equalizations based on verified arm's-length sales of comparable homes within Greenbriar's designated neighborhood submarket codes.",
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
      <GreenbriarClient />
    </>
  );
}
