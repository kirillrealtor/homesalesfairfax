import WakefieldClient from "./WakefieldClient";

export const metadata = {
  title: "Wakefield VA Real Estate: Woodson Pyramid, Wakefield Park & Community Guide",
  description: "Exhaustive guide to Wakefield VA real estate: 1790 Oak Hill provenance, 1899 Wakefield Chapel, 290-acre Wakefield Park, Audrey Moore RECenter, and W.T. Woodson High pyramid.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/wakefield-va-real-estate",
  },
  openGraph: {
    title: "Wakefield VA Real Estate: Woodson Pyramid, Wakefield Park & Community Guide",
    description: "Exhaustive guide to Wakefield VA real estate: 1790 Oak Hill provenance, 1899 Wakefield Chapel, 290-acre Wakefield Park, Audrey Moore RECenter, and W.T. Woodson High pyramid.",
    url: "https://www.homesalesfairfax.com/wakefield-va-real-estate",
    siteName: "homesalesfairfax.com",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wakefield VA Real Estate: Woodson Pyramid, Wakefield Park & Community Guide",
    description: "Exhaustive guide to Wakefield VA real estate: 1790 Oak Hill provenance, 1899 Wakefield Chapel, 290-acre Wakefield Park, Audrey Moore RECenter, and W.T. Woodson High pyramid.",
  },
};

export default function WakefieldPage() {
  const schemas = [
    // 1. Article / Research Monograph Schema
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": "https://www.homesalesfairfax.com/wakefield-va-real-estate#article",
      "headline": "Wakefield, VA Real Estate: The Definitive Guide to Spatial Morphology, Mid-Century Architecture, W.T. Woodson Pyramid & Wakefield Park",
      "description": "Comprehensive architectural monograph & real estate guide to Wakefield VA: 3.80 square-mile CDP, historic 1790 Oak Hill estate, 1899 Wakefield Chapel, 290-acre Wakefield Park, Audrey Moore RECenter, zero mandatory HOA fees, Wakefield Chapel Wahoos swim club, and the premier W.T. Woodson High School pyramid.",
      "url": "https://www.homesalesfairfax.com/wakefield-va-real-estate",
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
      "mainEntityOfPage": "https://www.homesalesfairfax.com/wakefield-va-real-estate",
      "about": [
        "Wakefield, Virginia",
        "Wakefield CDP",
        "Wakefield Chapel",
        "Wakefield Forest",
        "Oak Hill historic estate",
        "Wakefield Park",
        "Audrey Moore RECenter",
        "Wakefield Chapel Recreation Association",
        "W.T. Woodson High School pyramid",
        "Northern Virginia Community College Annandale Campus",
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
          "name": "Wakefield, VA Real Estate & Community Guide",
          "item": "https://www.homesalesfairfax.com/wakefield-va-real-estate",
        },
      ],
    },
    // 3. FAQPage Schema (10 Comprehensive Encyclopedic Questions)
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.homesalesfairfax.com/wakefield-va-real-estate#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are the geographic boundaries and spatial dimensions of Wakefield, Virginia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Wakefield is an official Census-Designated Place (CDP) encompassing approximately 3.80 square miles in central-eastern Fairfax County (ZIP code 22003, Braddock and Mason Magisterial Districts). It is bounded by Little River Turnpike (Route 236) to the north, the Capital Beltway (Interstate 495) to the east, Braddock Road (Route 620) to the south, and Guinea Road to the west, bisected centrally by Wakefield Chapel Road.",
          },
        },
        {
          "@type": "Question",
          "name": "Where does the name Wakefield originate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The community derives its name from historic Wakefield Chapel, an 1899 Gothic-style Methodist chapel built along Wakefield Chapel Road on land donated by Oliver Besley and constructed by Reverend Elhanan Wakefield, a Civil War veteran and carpenter-preacher. The restored chapel is now preserved by the Fairfax County Park Authority.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the historical significance of Oak Hill within Wakefield?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oak Hill, located at 4716 Wakefield Chapel Road, was constructed circa 1790 by Richard Fitzhugh. It is the sole surviving 18th-century plantation manor from the original 24,112-acre Ravensworth land grant. President Thomas Jefferson recorded four overnight visits to Oak Hill between 1804 and 1809. It is listed on the National Register of Historic Places and the Virginia Landmarks Register.",
          },
        },
        {
          "@type": "Question",
          "name": "What architectural styles predominate throughout Wakefield neighborhoods?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Wakefield features a rich blend of mid-century and late-20th-century residences, including solid red-brick ramblers, multi-level split-levels, Center-Hall Colonials, bi-level split-foyers, and contemporary custom infill estates. Homes sit on spacious quarter- to half-acre wooded lots enveloped by mature oak, beech, and tulip poplar canopies.",
          },
        },
        {
          "@type": "Question",
          "name": "Does Wakefield have a mandatory Homeowners Association (HOA)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. The vast majority of single-family residences across Wakefield, including Wakefield Forest and Wakefield Chapel Estates, operate with no mandatory HOA dues or restrictive architectural review committees. Community cohesion and events are maintained through voluntary civic associations.",
          },
        },
        {
          "@type": "Question",
          "name": "What recreational facilities exist at Wakefield Park and Audrey Moore RECenter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The 290-acre Wakefield Park hosts the 76,000-square-foot Audrey Moore RECenter, the very first public recreation center built in Fairfax County (1977). It features an Olympic-size 50-meter indoor pool, gymnasium, racquetball/squash courts, pottery labs, lighted tennis and pickleball courts, multi-sport athletic turf fields, a skate park, and direct access to the Gerry Connolly Cross County Trail.",
          },
        },
        {
          "@type": "Question",
          "name": "What community swim clubs serve Wakefield families?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Community swimming is headlined by the member-owned Wakefield Chapel Recreation Association (WCRA) on Wakefield Chapel Road, home to the championship Wakefield Chapel Wahoos swim and dive teams (competing in NVSL Division 1). Additional facilities include the Wakefield Forest Recreation Association and nearby community pool clubs.",
          },
        },
        {
          "@type": "Question",
          "name": "Which Fairfax County Public Schools serve the Wakefield community?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Wakefield is served primarily by Wakefield Forest Elementary School (opened in 1955 on Iva Lane) or Canterbury Woods Elementary, advancing to Frost Middle School, and feeding into the prestigious W.T. Woodson High School pyramid. Woodson High is nationally celebrated for the AP Capstone Diploma, STEM academies, and elite college matriculation.",
          },
        },
        {
          "@type": "Question",
          "name": "What commuter transit and highway corridors serve Wakefield?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Wakefield offers instantaneous connectivity to the Capital Beltway (Interstate 495) via Exits 52 (Little River Turnpike) and 54 (Braddock Road). Express commuter bus lines offer non-stop rush-hour service directly to the Pentagon, while the Dunn Loring-Merrifield Metro (Orange Line) and Rolling Road VRE station are just minutes away.",
          },
        },
        {
          "@type": "Question",
          "name": "How does Fairfax County assess real property values in Wakefield?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under Code of Virginia § 58.1-3201, all real property is assessed annually at 100 percent of true fair market value. The Fairfax County Department of Tax Administration (DTA) conducts computerized mass appraisal equalizations annually based on verified arm's-length sales of comparable homes within specific neighborhood submarket codes.",
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
      <WakefieldClient />
    </>
  );
}
