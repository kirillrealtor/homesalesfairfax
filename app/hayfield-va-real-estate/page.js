import HayfieldClient from "./HayfieldClient";

export const metadata = {
  title: "Hayfield VA Real Estate: The Definitive Heritage, Schools & Enclave Guide",
  description: "Exhaustive guide to Hayfield VA real estate: Hayfield Farm, historic Washington heritage, Hayfield Secondary 7-12 campus, and Huntley Meadows borders.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/hayfield-va-real-estate",
  },
  openGraph: {
    title: "Hayfield VA Real Estate: The Definitive Heritage, Schools & Enclave Guide",
    description: "Exhaustive guide to Hayfield VA real estate: Hayfield Farm, historic Washington heritage, Hayfield Secondary 7-12 campus, and Huntley Meadows borders.",
    url: "https://www.homesalesfairfax.com/hayfield-va-real-estate",
    siteName: "homesalesfairfax.com",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hayfield VA Real Estate: The Definitive Heritage, Schools & Enclave Guide",
    description: "Exhaustive guide to Hayfield VA real estate: Hayfield Farm, historic Washington heritage, Hayfield Secondary 7-12 campus, and Huntley Meadows borders.",
  },
};

export default function HayfieldPage() {
  const schemas = [
    // 1. Article / Research Monograph Schema
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": "https://www.homesalesfairfax.com/hayfield-va-real-estate#article",
      "headline": "Hayfield, VA Real Estate: The Definitive Guide to Spatial Morphology, Historic Washington Heritage, Hayfield Secondary Campus & Residential Enclaves",
      "description": "Comprehensive architectural monograph & real estate guide to Hayfield VA: George Washington and Lund Washington plantation roots, Hayfield Farm, Hayfield Secondary 7-12 campus, and Huntley Meadows parklands.",
      "url": "https://www.homesalesfairfax.com/hayfield-va-real-estate",
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
      "mainEntityOfPage": "https://www.homesalesfairfax.com/hayfield-va-real-estate",
      "about": [
        "Hayfield, Virginia",
        "Fairfax County real estate",
        "Hayfield Farm",
        "Hayfield Secondary School",
        "Hayfield Elementary School",
        "Lund Washington Hayfield Plantation",
        "Huntley Meadows Park",
        "Franconia Magisterial District",
        "Telegraph Road corridor",
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
          "name": "Hayfield VA Real Estate Guide",
          "item": "https://www.homesalesfairfax.com/hayfield-va-real-estate",
        },
      ],
    },
    // 3. FAQPage Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.homesalesfairfax.com/hayfield-va-real-estate#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is Hayfield an incorporated municipality or an unincorporated community in Fairfax County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hayfield is an unincorporated census-designated place (CDP) governed directly by the Fairfax County Board of Supervisors within the Franconia Magisterial District. It carries an Alexandria postal address (ZIP code 22315) for postal routing purposes, but it is entirely located within Fairfax County. Public safety, road maintenance, public education (FCPS), and land-use zoning are administered by Fairfax County.",
          },
        },
        {
          "@type": "Question",
          "name": "What was the historical origin of Hayfield?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The land comprising Hayfield was originally owned by George Washington as part of his Mount Vernon estate holdings. In 1785, Lund Washington (George Washington's second cousin and wartime manager of Mount Vernon) acquired the 460-acre tract and established Hayfield Plantation. Lund Washington constructed a prominent mansion and a famous 16-sided barn, modeled after George Washington's innovative circular treading barn at Dogue Run Farm.",
          },
        },
        {
          "@type": "Question",
          "name": "What makes the Hayfield Secondary School campus unique in Fairfax County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hayfield Secondary School is one of Fairfax County Public Schools' signature comprehensive secondary campuses, housing both a middle school (grades 7–8) and a high school (grades 9–12) on an expansive 80-acre site. It features the AP Capstone Diploma program, STEM pathways, championship athletic facilities, and nationally recognized music and performing arts programs.",
          },
        },
        {
          "@type": "Question",
          "name": "What architectural typologies define residential neighborhoods in Hayfield?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hayfield is distinguished primarily by mid-to-late 20th-century residential architecture: classic two-story brick Colonials, split-levels, and ramblers platted in the late 1960s and 1970s in Hayfield Farm on mature quarter-to-third-acre lots; traditional multi-level brick townhomes in Hayfield View; and newer planned single-family enclaves along the Kingstowne and Beulah Street borders.",
          },
        },
        {
          "@type": "Question",
          "name": "Which public schools serve the Hayfield community?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hayfield is served by Fairfax County Public Schools (FCPS) within the Hayfield Secondary School pyramid. Students attend Hayfield Elementary School (located within the neighborhood) for grades Pre-K through 6, and advance seamlessly to Hayfield Secondary School for middle school (grades 7–8) and high school (grades 9–12).",
          },
        },
        {
          "@type": "Question",
          "name": "What recreational facilities and parklands are located in and around Hayfield?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Recreational amenities include the private, member-owned Hayfield Farm Community Pool and tennis courts, Hayfield Park athletic grounds, the Greendale Golf Course (an 18-hole public course operated by FCPA just north on Telegraph Road), and direct trail connectivity to the 1,500-acre Huntley Meadows Park wetland sanctuary.",
          },
        },
        {
          "@type": "Question",
          "name": "How is commuter transit structured from Hayfield to major employment hubs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Commuters benefit from immediate access to Telegraph Road (Route 611) and Beulah Street (Route 613). The Franconia-Springfield Metrorail (Blue Line) and VRE commuter rail station is located approximately 3.5 miles northwest, while the Huntington Metrorail Station (Yellow Line) is approximately 5 miles northeast. Fort Belvoir and the NGA campus are situated less than 2 miles south.",
          },
        },
        {
          "@type": "Question",
          "name": "What structural maintenance considerations are essential for homes in Hayfield Farm?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Buyers of late 1960s and 1970s homes should conduct fiber-optic camera sewer scope inspections of underground cast iron lines to check for root penetration and internal scaling, verify that electrical panels have been upgraded to modern 200-amp service with AFCI/GFCI protection, and maintain proper perimeter foundation drainage slopes to manage coastal plain soil moisture.",
          },
        },
        {
          "@type": "Question",
          "name": "What commercial and retail amenities serve the Hayfield area?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Residents enjoy convenient shopping at the Hayfield Shopping Center (anchored by neighborhood restaurants, banking, and convenience retail), the adjacent Hilltop Village Center (featuring Wegmans, dining, and specialty services), and the comprehensive retail, cinema, and dining options at Kingstowne Towne Center and Springfield Town Center.",
          },
        },
        {
          "@type": "Question",
          "name": "How are real estate property assessments and taxes governed in Hayfield?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under Virginia Code § 58.1-3201, all real property in Hayfield is assessed annually at 100 percent of fair market value by the Fairfax County Department of Tax Administration (DTA). Assessment notices are mailed every February based on verified arm's-length market sales, with taxes paid semi-annually on July 28 and December 5, and formal administrative appeal rights through the county Board of Equalization.",
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
      <HayfieldClient />
    </>
  );
}
