import PennDawClient from "./PennDawClient";

export const metadata = {
  title: "Penn Daw VA Real Estate: The Definitive Transit, History & Enclave Guide",
  description: "Exhaustive guide to Penn Daw VA real estate: historic Penn-Daw Hotel roots, Fairhaven cottages, Embark Richmond Highway BRT, and Huntington Metro connectivity.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/penn-daw-va-real-estate",
  },
  openGraph: {
    title: "Penn Daw VA Real Estate: The Definitive Transit, History & Enclave Guide",
    description: "Exhaustive guide to Penn Daw VA real estate: historic Penn-Daw Hotel roots, Fairhaven cottages, Embark Richmond Highway BRT, and Huntington Metro connectivity.",
    url: "https://www.homesalesfairfax.com/penn-daw-va-real-estate",
    siteName: "homesalesfairfax.com",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Penn Daw VA Real Estate: The Definitive Transit, History & Enclave Guide",
    description: "Exhaustive guide to Penn Daw VA real estate: historic Penn-Daw Hotel roots, Fairhaven cottages, Embark Richmond Highway BRT, and Huntington Metro connectivity.",
  },
};

export default function PennDawPage() {
  const schemas = [
    // 1. Article / Research Monograph Schema
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": "https://www.homesalesfairfax.com/penn-daw-va-real-estate#article",
      "headline": "Penn Daw, VA Real Estate: The Definitive Guide to Spatial Morphology, Historic Motor Hotel Heritage, Embark Richmond Highway BRT & Residential Enclaves",
      "description": "Comprehensive architectural monograph & real estate guide to Penn Daw VA: 1927 Penn-Daw Motor Hotel origins, Fairhaven post-war cottages, contemporary executive townhomes, Embark BRT transit transformation, and Mount Vernon District zoning.",
      "url": "https://www.homesalesfairfax.com/penn-daw-va-real-estate",
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
      "mainEntityOfPage": "https://www.homesalesfairfax.com/penn-daw-va-real-estate",
      "about": [
        "Penn Daw, Virginia",
        "Fairfax County real estate",
        "Penn-Daw Hotel",
        "Fairhaven neighborhood",
        "Embark Richmond Highway BRT",
        "Penn Daw Community Business Center",
        "Huntington Metro Station",
        "Mount Vernon Magisterial District",
        "Thomas A. Edison High School pyramid",
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
          "name": "Penn Daw VA Real Estate Guide",
          "item": "https://www.homesalesfairfax.com/penn-daw-va-real-estate",
        },
      ],
    },
    // 3. FAQPage Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.homesalesfairfax.com/penn-daw-va-real-estate#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is Penn Daw an incorporated municipality or an unincorporated community in Fairfax County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Penn Daw is an unincorporated census-designated place (CDP) governed directly by the Fairfax County Board of Supervisors within the Mount Vernon Magisterial District. It utilizes an Alexandria postal address (ZIP codes 22303 and 22306) for mail delivery, but it is entirely located within Fairfax County. Public education, public safety, road maintenance, and land-use zoning are administered by Fairfax County.",
          },
        },
        {
          "@type": "Question",
          "name": "What was the historical origin of the name 'Penn Daw'?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The community derives its distinctive name from the historic Penn-Daw Motor Hotel, established in 1927 by developers C.C. Penn and A.H. Dawson along U.S. Route 1 (Richmond Highway). As one of America's earliest and most celebrated roadside motor courts of the automobile era, the complex featured colonial-style guest cottages, a fine dining room, and service garages catering to travelers journeying between New York, Washington, D.C., and the southern states.",
          },
        },
        {
          "@type": "Question",
          "name": "What architectural styles characterize the residential neighborhoods of Penn Daw?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Penn Daw features a rich continuum of housing typologies: post-WWII 1940s and 1950s solid brick and wood-frame cottages and Cape Cods in Fairhaven; classic mid-century brick ramblers and split-levels in Penn Daw Terrace and Marlo Heights; contemporary multi-level brick-front executive townhomes in infill enclaves like The Towns at South Kings; and modern transit-oriented mixed-use apartment communities along Richmond Highway.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the Embark Richmond Highway Bus Rapid Transit (BRT) initiative?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Embark Richmond Highway is a comprehensive multi-million-dollar regional transportation and urban revitalization project led by Fairfax County and VDOT. It creates a dedicated median-running Bus Rapid Transit (BRT) system along Route 1 with a planned flagship station at Penn Daw (near South Kings Highway), connecting residents with rapid, high-frequency transit directly north to the Huntington Metrorail Station and south to Fort Belvoir.",
          },
        },
        {
          "@type": "Question",
          "name": "How does commuter transit operate from Penn Daw to major regional employment centers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Penn Daw boasts exceptional commuter logistics. The Huntington Metrorail Station (Yellow Line terminus) is located approximately one mile north, delivering a direct one-seat ride to Old Town Alexandria, Reagan National Airport (DCA), Amazon HQ2 at National Landing, the Pentagon, and downtown Washington, D.C. Major roadways include U.S. Route 1, North Kings Highway (Route 241), and immediate access to the Capital Beltway (I-495 Exit 177).",
          },
        },
        {
          "@type": "Question",
          "name": "Which public school pyramids serve students in Penn Daw?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Penn Daw is served by Fairfax County Public Schools (FCPS) through two primary feeder pyramids: the Thomas A. Edison High School pyramid (Cameron Elementary, Mark Twain Middle, and Edison High featuring the International Baccalaureate IB Diploma Programme and Global STEM Academy) and the West Potomac High School pyramid (Belle View/Groveton Elementary, Carl Sandburg Middle Full-Time AAP Center, and West Potomac High featuring the AP Capstone).",
          },
        },
        {
          "@type": "Question",
          "name": "What commercial and retail centers are located within and adjacent to Penn Daw?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Residents enjoy convenient shopping at Kings Crossing Shopping Center (anchored by a Walmart Supercenter, retail services, and dining), Penn Daw Shopping Center, the nearby Beacon Center (featuring Giant Food and Lowe's Home Improvement), and immediate access to Old Town Alexandria's historic King Street dining and shopping district just three miles north.",
          },
        },
        {
          "@type": "Question",
          "name": "What parks, trails, and recreational facilities serve the Penn Daw community?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Recreational amenities include Mount Eagle Park, Farrington Park, Burgundy Park and Community Center, Cameron Run Regional Park (featuring Great Waves Waterpark), and direct access eastward to Belle Haven Park and the scenic multi-use Mount Vernon Trail along the George Washington Memorial Parkway.",
          },
        },
        {
          "@type": "Question",
          "name": "What structural maintenance considerations are important for Fairhaven and mid-century homes in Penn Daw?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Critical homeowner maintenance considerations include conducting video camera sewer scope inspections of original cast iron and clay sewer laterals, upgrading electrical panels to modern 200-amp service with AFCI/GFCI protection, ensuring positive foundation grading slopes, and inspecting crawlspace vapor barriers and insulation to maintain structural durability.",
          },
        },
        {
          "@type": "Question",
          "name": "How are real estate property assessments and taxes governed in Penn Daw?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under Virginia Code § 58.1-3201, all real property in Penn Daw is assessed annually at 100 percent of fair market value by the Fairfax County Department of Tax Administration (DTA). Notices are mailed every February based on verified arm's-length market sales, with payments due semi-annually on July 28 and December 5, and statutory appeal rights through the Board of Equalization.",
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
      <PennDawClient />
    </>
  );
}
