import BurkeCentreClient from "./BurkeCentreClient";

export const metadata = {
  title: "Burke Centre VA Real Estate: The Definitive 5 Neighborhoods, Conservancy & VRE Guide",
  description: "Exhaustive guide to Burke Centre VA real estate: 1,700-acre master plan, The Commons, The Landings, The Oaks, The Ponds, The Woods, VRE rail, and top schools.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/burke-centre-va-real-estate",
  },
  openGraph: {
    title: "Burke Centre VA Real Estate: The Definitive 5 Neighborhoods, Conservancy & VRE Guide",
    description: "Exhaustive guide to Burke Centre VA real estate: 1,700-acre master plan, The Commons, The Landings, The Oaks, The Ponds, The Woods, VRE rail, and top schools.",
    url: "https://www.homesalesfairfax.com/burke-centre-va-real-estate",
    siteName: "homesalesfairfax.com",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Burke Centre VA Real Estate: The Definitive 5 Neighborhoods, Conservancy & VRE Guide",
    description: "Exhaustive guide to Burke Centre VA real estate: 1,700-acre master plan, The Commons, The Landings, The Oaks, The Ponds, The Woods, VRE rail, and top schools.",
  },
};

export default function BurkeCentrePage() {
  const schemas = [
    // 1. Article / Research Monograph Schema
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": "https://www.homesalesfairfax.com/burke-centre-va-real-estate#article",
      "headline": "Burke Centre, VA Real Estate: The Definitive Guide to Spatial Morphology, The Five Neighborhoods, Conservancy Governance, VRE Commuter Rail & Secondary Pyramids",
      "description": "Comprehensive architectural monograph & real estate guide to Burke Centre VA: 1,700-acre planned residential community, Hazel/Peterson master plan, The Commons, The Landings, The Oaks, The Ponds, The Woods, 30 miles of trails, 5 community pools, Burke Centre VRE Station with Amtrak service, Terra Centre Elementary, and Robinson & Lake Braddock Secondary pyramids.",
      "url": "https://www.homesalesfairfax.com/burke-centre-va-real-estate",
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
      "mainEntityOfPage": "https://www.homesalesfairfax.com/burke-centre-va-real-estate",
      "about": [
        "Burke Centre, Virginia",
        "Burke Centre CDP",
        "Burke Centre Conservancy",
        "Fairfax County real estate",
        "Hazel and Peterson",
        "The Five Neighborhoods of Burke Centre",
        "Burke Centre VRE Station",
        "Terra Centre Elementary School",
        "Robinson Secondary School pyramid",
        "Lake Braddock Secondary School pyramid",
        "Burke Lake Park",
        "Planned Residential Community PRC",
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
          "name": "Burke Centre, VA Real Estate & Conservancy Guide",
          "item": "https://www.homesalesfairfax.com/burke-centre-va-real-estate",
        },
      ],
    },
    // 3. FAQPage Schema (10 Comprehensive Encyclopedic Questions)
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.homesalesfairfax.com/burke-centre-va-real-estate#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are the geographic boundaries and land area of Burke Centre, Virginia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Burke Centre Census-Designated Place (CDP) encompasses approximately 3.12 square miles (8.08 square kilometers, roughly 1,700 acres) in central-southern Fairfax County (ZIP code 22015). It is bounded by the VRE rail corridor to the north, Ox Road (Route 123) to the west, the Fairfax County Parkway (Route 286) to the south and southwest, and Burke Lake Road to the east and southeast.",
          },
        },
        {
          "@type": "Question",
          "name": "Who developed Burke Centre and when was the master plan conceived?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Burke Centre was master-planned in 1976 and broke ground in 1977 by the Hazel/Peterson Companies (led by John T. 'Til' Hazel Jr. and Milton V. Peterson). They assembled approximately 1,700 acres of rural farmland, designing a unified Planned Residential Community (PRC) zoning district that preserved extensive native pine and oak canopies alongside engineered retention ponds.",
          },
        },
        {
          "@type": "Question",
          "name": "What are 'The Five Neighborhoods' of Burke Centre?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Burke Centre is organized into five distinct clusters or neighborhoods: The Commons (centered on community commerce and the Conservancy headquarters), The Landings (flanking Burke Centre Parkway with diverse single-family and townhome models), The Oaks (western woodland sector near Fairfax County Parkway), The Ponds (southeastern sector with scenic ponds and fountain aerators), and The Woods (northern sector featuring densely forested streets).",
          },
        },
        {
          "@type": "Question",
          "name": "How does the Burke Centre Conservancy govern the community?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Burke Centre Conservancy (BCC) is a professionally managed property owners association established under Virginia law. Headquartered on Burke Centre Parkway, the Conservancy maintains 30 miles of private paved and nature trails, six retention ponds, five community centers, five swimming pools, open parklands, and enforces architectural standards through its Architectural Review Board (ARB).",
          },
        },
        {
          "@type": "Question",
          "name": "What recreational facilities and amenities are included in Burke Centre?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Burke Centre features exceptional recreational infrastructure: five full-size neighborhood swimming pools, five community centers, 18 tennis courts, six pickleball courts, multi-use athletic fields, numerous tot lots and playgrounds, six retention ponds, and 30 miles of walking and cycling pathways interconnected across all five neighborhoods.",
          },
        },
        {
          "@type": "Question",
          "name": "Which public schools serve residents of Burke Centre?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Burke Centre is zoned across two of the highest-rated secondary pyramids in Fairfax County Public Schools (FCPS Region 4): Robinson Secondary School (grades 7–12; offering both the International Baccalaureate IB Diploma and Advanced Placement AP courses) and Lake Braddock Secondary School (grades 7–12; offering the AP Capstone Diploma). Elementary students primarily attend Terra Centre Elementary School (located within Burke Centre) or Fairview Elementary School.",
          },
        },
        {
          "@type": "Question",
          "name": "What commuter rail and transit options are available in Burke Centre?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Burke Centre VRE Station on Roberts Parkway anchors commuter rail on the Manassas Line, providing non-stop passenger service to Alexandria, Crystal City (Amazon HQ2), and Washington Union Station. In addition, it is one of the rare suburban stations offering daily Amtrak Northeast Regional rail service directly to New York City and Boston. Commuter express buses also run to the Pentagon.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the annual Burke Centre Festival?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Held every September on the Conservancy Festival grounds, the Burke Centre Festival is an iconic regional event drawing over 10,000 visitors. It features juried arts and crafts artisans, interactive wildlife exhibits, carnival amusements, live musical performances, international food trucks, and multi-generational civic celebrations.",
          },
        },
        {
          "@type": "Question",
          "name": "What architectural styles predominate across Burke Centre homes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Burke Centre features 5,862 homes encompassing colonial revival single-family residences, contemporary transitional two-story designs, cedar-and-brick split-levels, upscale multi-story townhomes, and garden condominiums. Properties feature mature tree canopies, wooded common ground views, and harmonious earth-tone exterior palettes.",
          },
        },
        {
          "@type": "Question",
          "name": "How are real estate property values assessed in Burke Centre?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In accordance with Code of Virginia § 58.1-3201, all real property is assessed annually at 100 percent of true fair market value. The Fairfax County Department of Tax Administration (DTA) conducts computerized mass appraisal equalizations annually based on verified arm's-length sales of comparable homes within specific neighborhood submarket codes.",
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
      <BurkeCentreClient />
    </>
  );
}
