import WoodlawnClient from "./WoodlawnClient";

export const metadata = {
  title: "Woodlawn VA Real Estate: The Definitive Heritage, Architecture & Enclave Guide",
  description: "Exhaustive guide to Woodlawn VA real estate: historic Woodlawn Plantation, Frank Lloyd Wright's Pope-Leighey House, Fort Belvoir borders, and Mount Vernon IB pyramid.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/woodlawn-va-real-estate",
  },
  openGraph: {
    title: "Woodlawn VA Real Estate: The Definitive Heritage, Architecture & Enclave Guide",
    description: "Exhaustive guide to Woodlawn VA real estate: historic Woodlawn Plantation, Frank Lloyd Wright's Pope-Leighey House, Fort Belvoir borders, and Mount Vernon IB pyramid.",
    url: "https://www.homesalesfairfax.com/woodlawn-va-real-estate",
    siteName: "homesalesfairfax.com",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Woodlawn VA Real Estate: The Definitive Heritage, Architecture & Enclave Guide",
    description: "Exhaustive guide to Woodlawn VA real estate: historic Woodlawn Plantation, Frank Lloyd Wright's Pope-Leighey House, Fort Belvoir borders, and Mount Vernon IB pyramid.",
  },
};

export default function WoodlawnPage() {
  const schemas = [
    // 1. Article / Research Monograph Schema
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": "https://www.homesalesfairfax.com/woodlawn-va-real-estate#article",
      "headline": "Woodlawn, VA Real Estate: The Definitive Guide to Spatial Morphology, Historic Woodlawn Plantation, Frank Lloyd Wright Architecture, Fort Belvoir Borders & Residential Enclaves",
      "description": "Comprehensive architectural monograph & real estate guide to Woodlawn VA: George Washington's 1799 wedding gift to Nelly Custis, Dr. William Thornton Georgian/Federal architecture, Frank Lloyd Wright Pope-Leighey House, Woodlawn Terrace, and Mount Vernon High School IB pyramid.",
      "url": "https://www.homesalesfairfax.com/woodlawn-va-real-estate",
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
      "mainEntityOfPage": "https://www.homesalesfairfax.com/woodlawn-va-real-estate",
      "about": [
        "Woodlawn, Virginia",
        "Fairfax County real estate",
        "Woodlawn Plantation",
        "Pope-Leighey House Frank Lloyd Wright",
        "George Washington Gristmill",
        "Fort Belvoir Military Reservation",
        "Mount Vernon High School pyramid",
        "Mount Vernon Magisterial District",
        "Dogue Creek watershed",
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
          "name": "Woodlawn VA Real Estate Guide",
          "item": "https://www.homesalesfairfax.com/woodlawn-va-real-estate",
        },
      ],
    },
    // 3. FAQPage Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.homesalesfairfax.com/woodlawn-va-real-estate#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is Woodlawn an incorporated town or an unincorporated community in Fairfax County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Woodlawn is an unincorporated census-designated place (CDP) governed directly by the Fairfax County Board of Supervisors within the Mount Vernon Magisterial District. It utilizes an Alexandria postal address (ZIP code 22309) for mailing routing purposes, but it is entirely located within Fairfax County. Public education, emergency rescue, police protection, and land-use zoning are administered by Fairfax County.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the historical origin of Woodlawn and its connection to George Washington?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The land comprising Woodlawn was originally part of George Washington's Mount Vernon estate (Dogue Run Farm). In 1799, Washington gifted 2,000 acres to his step-granddaughter, Eleanor 'Nelly' Custis, and his nephew, Major Lawrence Lewis, upon their marriage. Dr. William Thornton, the first Architect of the U.S. Capitol, designed the Georgian/Federal brick manor house completed in 1805. In 1951, Woodlawn became the first historic site acquired by the National Trust for Historic Preservation.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the Pope-Leighey House located in Woodlawn?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Pope-Leighey House is a celebrated Usonian masterwork designed in 1940 by master architect Frank Lloyd Wright. Threatened by the construction of Interstate 66 in Falls Church in 1964, the house was meticulously relocated to the Woodlawn estate grounds. It features Wright's organic architecture principles: cypress board-and-batten walls, radiant floor heating, cantilevered roofs, and patterned clerestory cutouts.",
          },
        },
        {
          "@type": "Question",
          "name": "What architectural styles characterize residential neighborhoods in Woodlawn?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Woodlawn features an attractive architectural continuum: post-WWII and 1960s solid brick ramblers and split-levels in established enclaves like Woodlawn Manor and Mount Zephyr; traditional center-hall Colonials; custom contemporary waterfront and water-view residences along Dogue Creek; and executive multi-level brick-front townhome communities like Woodlawn Mews.",
          },
        },
        {
          "@type": "Question",
          "name": "Which public schools serve students residing in Woodlawn?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Woodlawn is served by Fairfax County Public Schools (FCPS) within the Mount Vernon High School pyramid. Students attend Woodlawn Elementary School (located within the community) or Washington Mill Elementary, advance to Carl Sandburg Middle School (home to a Full-Time Advanced Academic Programs AAP Level IV Center), and attend Mount Vernon High School, an authorized International Baccalaureate (IB) World School.",
          },
        },
        {
          "@type": "Question",
          "name": "What parks, trails, and cultural attractions are located in and around Woodlawn?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Key attractions include the historic Woodlawn Estate and Frank Lloyd Wright's Pope-Leighey House, George Washington's Gristmill Historical State Park, the Mount Vernon Memorial Highway multi-use trail connecting to the 18-mile Mount Vernon Trail along the Potomac River, Huntley Meadows Park, and the Mount Vernon RECenter with an indoor Olympic pool and ice arena.",
          },
        },
        {
          "@type": "Question",
          "name": "How does Woodlawn's location serve military and defense personnel at Fort Belvoir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Woodlawn directly borders the Fort Belvoir Military Reservation, providing immediate access to the Pence Gate and Tulley Gate. Personnel enjoy commute times of less than five minutes to Fort Belvoir headquarters, the Defense Logistics Agency (DLA), Fort Belvoir Community Hospital, and the National Museum of the United States Army.",
          },
        },
        {
          "@type": "Question",
          "name": "How does the Embark Richmond Highway Bus Rapid Transit (BRT) project affect Woodlawn?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Embark Richmond Highway BRT project will extend dedicated median-running rapid transit along Route 1 directly to Fort Belvoir and Woodlawn, providing high-frequency, rapid transit connectivity north to the Huntington Metrorail Station (Yellow Line) and facilitating pedestrian, bicycle, and commercial streetscape revitalization.",
          },
        },
        {
          "@type": "Question",
          "name": "What structural maintenance considerations are important for homes in Woodlawn?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Important considerations include conducting fiber-optic camera sewer scope inspections of underground cast iron lateral sewer lines, upgrading electrical service panels to modern 200-amp capacity with AFCI/GFCI protection, installing heavy-duty crawlspace vapor barriers, and maintaining proper exterior grading slopes to manage coastal plain soil moisture near Dogue Creek.",
          },
        },
        {
          "@type": "Question",
          "name": "How are real estate property assessments and taxes governed in Woodlawn?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under Virginia Code § 58.1-3201, all real property in Woodlawn is assessed annually at 100 percent of fair market value by the Fairfax County Department of Tax Administration (DTA). Notices are mailed every February based on verified arm's-length market sales, with payments due semi-annually on July 28 and December 5, and statutory appeal rights through the Board of Equalization.",
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
      <WoodlawnClient />
    </>
  );
}
