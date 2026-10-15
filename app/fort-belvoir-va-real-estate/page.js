import FortBelvoirClient from "./FortBelvoirClient";

export const metadata = {
  title: "Fort Belvoir VA Real Estate: The Definitive Military, Architecture & Enclave Guide",
  description: "Exhaustive guide to Fort Belvoir VA real estate: 8,600-acre military cantonment, on-post villages, off-post enclaves, Mount Vernon IB pyramid, and Potomac waterfront.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/fort-belvoir-va-real-estate",
  },
  openGraph: {
    title: "Fort Belvoir VA Real Estate: The Definitive Military, Architecture & Enclave Guide",
    description: "Exhaustive guide to Fort Belvoir VA real estate: 8,600-acre military cantonment, on-post villages, off-post enclaves, Mount Vernon IB pyramid, and Potomac waterfront.",
    url: "https://www.homesalesfairfax.com/fort-belvoir-va-real-estate",
    siteName: "homesalesfairfax.com",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fort Belvoir VA Real Estate: The Definitive Military, Architecture & Enclave Guide",
    description: "Exhaustive guide to Fort Belvoir VA real estate: 8,600-acre military cantonment, on-post villages, off-post enclaves, Mount Vernon IB pyramid, and Potomac waterfront.",
  },
};

export default function FortBelvoirPage() {
  const schemas = [
    // 1. Article / Research Monograph Schema
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": "https://www.homesalesfairfax.com/fort-belvoir-va-real-estate#article",
      "headline": "Fort Belvoir, VA Real Estate: The Definitive Guide to Spatial Morphology, Military Enclaves, Potomac Shoreline & Regional Housing Corridors",
      "description": "Exhaustive architectural monograph & real estate guide to Fort Belvoir VA: 8,600-acre military installation, privatized on-post villages, off-post residential enclaves, Mount Vernon High IB pyramid, and Potomac River parklands.",
      "url": "https://www.homesalesfairfax.com/fort-belvoir-va-real-estate",
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
      "mainEntityOfPage": "https://www.homesalesfairfax.com/fort-belvoir-va-real-estate",
      "about": [
        "Fort Belvoir, Virginia",
        "Fairfax County real estate",
        "Military housing enclaves",
        "Alexander T. Augusta Military Medical Center",
        "National Museum of the United States Army",
        "Defense Logistics Agency DLA",
        "National Geospatial-Intelligence Agency NGA",
        "Mount Vernon High School IB pyramid",
        "Fort Belvoir Primary and Upper Elementary Schools",
        "Accotink Bay Wildlife Refuge",
        "Mount Vernon Magisterial District",
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
          "name": "Fort Belvoir VA Real Estate Guide",
          "item": "https://www.homesalesfairfax.com/fort-belvoir-va-real-estate",
        },
      ],
    },
    // 3. FAQPage Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.homesalesfairfax.com/fort-belvoir-va-real-estate#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is Fort Belvoir a municipality or a federal military installation in Fairfax County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Fort Belvoir is a major United States Army military installation and federal cantonment spanning over 8,600 acres in southern Fairfax County, primarily situated within the Mount Vernon Magisterial District. The surrounding census-designated place (CDP) encompasses postal ZIP code 22060 and contiguous civilian communities governed directly by the Fairfax County Board of Supervisors.",
          },
        },
        {
          "@type": "Question",
          "name": "What was the historical origin of Fort Belvoir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The installation sits upon the historic 18th-century Belvoir Manor plantation owned by William Fairfax, cousin of Lord Thomas Fairfax. Young George Washington frequently surveyed the estate and socialized with the Fairfax family. During World War I in 1917, the federal government established Camp A.A. Humphreys as an engineer training facility, which was formally renamed Fort Belvoir in 1935 in honor of the historic plantation.",
          },
        },
        {
          "@type": "Question",
          "name": "How is residential housing organized on Fort Belvoir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "On-post housing is operated through the Department of Defense Military Housing Privatization Initiative by Fort Belvoir Residential Communities LLC (a partnership with The Michaels Organization). The installation features 15 master-planned residential villages comprising thousands of homes ranging from historic brick colonial revival officers' quarters to modern high-efficiency townhomes and single-family dwellings.",
          },
        },
        {
          "@type": "Question",
          "name": "What off-post residential communities surround Fort Belvoir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Service members, defense civilians, and contractors reside across established contiguous residential submarkets in Fairfax County, including Kingstowne and Island Creek to the north, Mount Vernon, Woodlawn, and Fort Hunt along the historic George Washington Memorial Parkway corridor to the east, and Lorton, Laurel Hill, and Mason Neck to the southwest.",
          },
        },
        {
          "@type": "Question",
          "name": "Which public schools serve families at Fort Belvoir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Fort Belvoir features two dedicated on-post elementary schools operated by Fairfax County Public Schools (FCPS): Fort Belvoir Primary Elementary (Pre-K to Grade 2) and Fort Belvoir Upper Elementary (Grades 3 to 6). Secondary students attend Walt Whitman Middle School and Mount Vernon High School, an authorized International Baccalaureate (IB) World School offering the full IB Diploma Programme.",
          },
        },
        {
          "@type": "Question",
          "name": "What major military, medical, and intelligence commands are headquartered at Fort Belvoir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Fort Belvoir serves as a joint strategic defense headquarters, hosting the Defense Logistics Agency (DLA) headquarters, the Defense Threat Reduction Agency (DTRA), the National Geospatial-Intelligence Agency (NGA) headquarters at Fort Belvoir North Area, U.S. Army Intelligence and Security Command (INSCOM), and the Alexander T. Augusta Military Medical Center.",
          },
        },
        {
          "@type": "Question",
          "name": "What environmental preserves and recreation areas exist on the installation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Fort Belvoir preserves over 1,300 acres of protected natural habitat, including the Accotink Bay Wildlife Refuge and the Jackson Miles Abbott Wetland Sanctuary. Amenities include scenic shoreline hiking trails, bald eagle nesting preserves, the Fort Belvoir Marina along the Potomac River and Gunston Cove, and multiple outdoor sports facilities.",
          },
        },
        {
          "@type": "Question",
          "name": "What cultural and historic attractions are located at or near Fort Belvoir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Fort Belvoir is home to the landmark 84-acre campus of the National Museum of the United States Army (NMUSA). Adjacent historic sites along Route 1 include George Washington's Mount Vernon estate, Woodlawn Historic Site (originally part of Mount Vernon), Frank Lloyd Wright's Pope-Leighey House, and historic Pohick Church (1774).",
          },
        },
        {
          "@type": "Question",
          "name": "How is commuter transit structured between Fort Belvoir and Washington, D.C.?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Commuter access is anchored by Richmond Highway (U.S. Route 1), the Fairfax County Parkway (Route 286), Interstate 95, and Telegraph Road. Multimodal transit includes express bus routes connecting directly to the Franconia-Springfield Metrorail (Blue Line) and VRE commuter rail station, along with the planned Embark Richmond Highway Bus Rapid Transit (BRT) extension.",
          },
        },
        {
          "@type": "Question",
          "name": "How does real estate property taxation apply to Fort Belvoir and surrounding areas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Federal installation land is constitutionally exempt from local property taxation. However, private residential properties located in off-post civilian enclaves are subject to annual real estate assessments conducted by the Fairfax County Department of Tax Administration (DTA) under Virginia Code § 58.1-3201 at 100 percent of fair market value, with taxes paid semi-annually on July 28 and December 5.",
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
      <FortBelvoirClient />
    </>
  );
}
