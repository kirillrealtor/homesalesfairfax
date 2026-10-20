import RavensworthClient from "./RavensworthClient";

export const metadata = {
  title: "Ravensworth VA Real Estate: The Definitive Community, History & Lake Accotink Guide",
  description: "Exhaustive guide to Ravensworth VA real estate: 1685 colonial land patent, mid-century Crestwood architecture, Lake Accotink Park, and Lake Braddock pyramid.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/ravensworth-va-real-estate",
  },
  openGraph: {
    title: "Ravensworth VA Real Estate: The Definitive Community, History & Lake Accotink Guide",
    description: "Exhaustive guide to Ravensworth VA real estate: 1685 colonial land patent, mid-century Crestwood architecture, Lake Accotink Park, and Lake Braddock pyramid.",
    url: "https://www.homesalesfairfax.com/ravensworth-va-real-estate",
    siteName: "homesalesfairfax.com",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ravensworth VA Real Estate: The Definitive Community, History & Lake Accotink Guide",
    description: "Exhaustive guide to Ravensworth VA real estate: 1685 colonial land patent, mid-century Crestwood architecture, Lake Accotink Park, and Lake Braddock pyramid.",
  },
};

export default function RavensworthPage() {
  const schemas = [
    // 1. Article / Research Monograph Schema
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": "https://www.homesalesfairfax.com/ravensworth-va-real-estate#article",
      "headline": "Ravensworth, VA Real Estate: The Definitive Guide to Spatial Morphology, Colonial History, Crestwood Mid-Century Architecture, Lake Accotink & Lake Braddock Pyramid",
      "description": "Comprehensive architectural monograph & real estate guide to Ravensworth VA: 1685 Fitzhugh land grant, 1959–1965 Crestwood Construction mid-century ramblers and split-levels, Lake Accotink Park, Flag Run tributary, Ravensworth Elementary Spanish Immersion, and Lake Braddock Secondary School pyramid.",
      "url": "https://www.homesalesfairfax.com/ravensworth-va-real-estate",
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
      "mainEntityOfPage": "https://www.homesalesfairfax.com/ravensworth-va-real-estate",
      "about": [
        "Ravensworth, Virginia",
        "Ravensworth CDP",
        "Ravensworth Farm",
        "Fairfax County real estate",
        "Crestwood Construction Corporation",
        "Lake Accotink Park",
        "Gerry Connolly Cross County Trail",
        "Lake Braddock Secondary School pyramid",
        "Ravensworth Elementary School",
        "Spanish Dual Language Immersion",
        "Colonel William Fitzhugh",
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
          "name": "Ravensworth, VA Real Estate & Community Guide",
          "item": "https://www.homesalesfairfax.com/ravensworth-va-real-estate",
        },
      ],
    },
    // 3. FAQPage Schema (10 Comprehensive Encyclopedic Questions)
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.homesalesfairfax.com/ravensworth-va-real-estate#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are the geographic boundaries and spatial dimensions of Ravensworth, Virginia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Ravensworth Census-Designated Place (CDP) encompasses approximately 0.98 square miles (2.54 square kilometers) in central Fairfax County within the Braddock Magisterial District (ZIP code 22151). Its perimeters are defined by Braddock Road (Route 620) to the north, the Capital Beltway (Interstate 495) to the east, Lake Accotink and Lake Accotink Park to the south, and Accotink Creek and Flag Run to the west and southwest.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the historical origin of the Ravensworth name and its colonial estate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ravensworth traces its lineage to 1685, when Colonel William Fitzhugh acquired a proprietary land grant of 24,112 acres—encompassing roughly one-tenth of modern Fairfax County. Named after the Fitzhugh family ancestral seat of Ravensworth Castle in North Yorkshire, England, the estate hosted a grand frame Palladian mansion built in 1796 by William Fitzhugh of Chatham. The estate sheltered prominent figures including Mary Lee Fitzhugh Custis and served as a Civil War refuge for Mrs. Robert E. Lee before the historic residence was destroyed by fire in 1926.",
          },
        },
        {
          "@type": "Question",
          "name": "Who developed the Ravensworth Farm residential community and when was it built?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ravensworth Farm was master-developed by the Crestwood Construction Corporation, with sales handled by Crestwood Realty Corp. Home construction commenced in December 1959 and reached completion around 1965, delivering 790 single-family residences across gently undulating, mature hardwood terrain.",
          },
        },
        {
          "@type": "Question",
          "name": "What distinct architectural models were constructed in Ravensworth Farm?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Crestwood designed four primary architectural models: The Virginian (a single-level rambler with carport and slab foundation, influenced by mid-century Levittown designs), The New Crestwood Rambler (a three-bedroom layout with a full daylight basement), The Larger Four-Bedroom Rambler (an expanded single-level design with full basement), and The Four-Bedroom Split-Level (featuring multi-tier staggered living zones). Later phases also introduced experimental split-foyer models scaling up to larger footprints.",
          },
        },
        {
          "@type": "Question",
          "name": "Which public schools serve residents of Ravensworth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ravensworth is zoned within the prestigious Fairfax County Public Schools (FCPS) Lake Braddock Secondary School pyramid (Region 4). Elementary students attend Ravensworth Elementary School (grades PK–6), which features an acclaimed Spanish Dual Language Immersion (DLI) curriculum. Secondary students attend Lake Braddock Secondary School (grades 7–12 under one roof in Burke), celebrated for Advanced Placement (AP) Capstone credentials, championship athletics, and elite college admissions.",
          },
        },
        {
          "@type": "Question",
          "name": "How does Ravensworth connect to Lake Accotink Park and the regional trail system?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ravensworth Farm borders the northern shoreline of the 496-acre Lake Accotink Park. Direct pedestrian neighborhood access trails connect residents immediately into the 3.9-mile Lake Accotink Loop Trail and the 40-mile Gerry Connolly Cross County Trail (CCT), offering uninterrupted hiking, running, cycling, canoeing, and wildlife observation.",
          },
        },
        {
          "@type": "Question",
          "name": "Does Ravensworth Farm have a mandatory Homeowners Association (HOA)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Ravensworth Farm operates without a mandatory HOA, exempting homeowners from restrictive covenants, architectural review boards, or compulsory monthly assessments. Community governance, neighborhood directories, and seasonal events are managed by the voluntary Ravensworth Farm Civic Association (RFCA).",
          },
        },
        {
          "@type": "Question",
          "name": "What recreational facilities and aquatic amenities exist in Ravensworth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Community recreation is anchored by the member-owned Ravensworth Farm Swim & Racquet Club (RFSRC) on Inverchapel Road, which sponsors competitive NVSL swim and dive teams (the Ravens), tennis courts, pickleball, and social activities. In addition, Lake Accotink Park provides boat rentals, a marina, fishing piers, and historic railroad trestle views.",
          },
        },
        {
          "@type": "Question",
          "name": "What commuter routes and transit options serve Ravensworth residents?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ravensworth offers premier commuter connectivity at Interstate 495 (Exit 54 - Braddock Road) with immediate access to the 495 Express Lanes. Commuter bus routes on Braddock Road provide direct express transit to the Pentagon. Rail options include the Virginia Railway Express (VRE) Rolling Road and Backlick Road stations, alongside Metrorail connections at Franconia-Springfield and Vienna.",
          },
        },
        {
          "@type": "Question",
          "name": "How are real estate property values assessed in Ravensworth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Real property taxation in Ravensworth is governed strictly by Code of Virginia § 58.1-3201, which mandates annual assessments at one hundred percent (100%) of true fair market value. The Fairfax County Department of Tax Administration (DTA) conducts computerized mass appraisal equalizations annually based on verified arm's-length market transactions within neighborhood submarket clusters.",
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
      <RavensworthClient />
    </>
  );
}
