import FranconiaClient from "./FranconiaClient";

export const metadata = {
  title: "Franconia VA Real Estate: The Definitive Metro, Architecture & Enclave Guide",
  description: "Exhaustive guide to Franconia VA real estate: Franconia-Springfield Metro/VRE hub, Edison High IB pyramid, 193-acre Franconia Park, and enclaves.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/franconia-va-real-estate",
  },
  openGraph: {
    title: "Franconia VA Real Estate: The Definitive Metro, Architecture & Enclave Guide",
    description: "Exhaustive guide to Franconia VA real estate: Franconia-Springfield Metro/VRE hub, Edison High IB pyramid, 193-acre Franconia Park, and enclaves.",
    url: "https://www.homesalesfairfax.com/franconia-va-real-estate",
    siteName: "homesalesfairfax.com",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Franconia VA Real Estate: The Definitive Metro, Architecture & Enclave Guide",
    description: "Exhaustive guide to Franconia VA real estate: Franconia-Springfield Metro/VRE hub, Edison High IB pyramid, 193-acre Franconia Park, and enclaves.",
  },
};

export default function FranconiaPage() {
  const schemas = [
    // 1. Article / Research Monograph Schema
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": "https://www.homesalesfairfax.com/franconia-va-real-estate#article",
      "headline": "Franconia, VA Real Estate: The Definitive Guide to Spatial Morphology, Dual-Rail Transit, 193-Acre Franconia Park & Residential Enclaves",
      "description": "Exhaustive architectural monograph & real estate guide to Franconia VA: Franconia-Springfield Metro/VRE hub, Edison High IB pyramid, 193-acre Franconia Park, and residential enclaves.",
      "url": "https://www.homesalesfairfax.com/franconia-va-real-estate",
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
      "mainEntityOfPage": "https://www.homesalesfairfax.com/franconia-va-real-estate",
      "about": [
        "Franconia, Virginia",
        "Fairfax County real estate",
        "Franconia-Springfield Metrorail Station",
        "Virginia Railway Express VRE",
        "Franconia Magisterial District",
        "Thomas A. Edison High School IB pyramid",
        "Mark Twain Middle School AAP Level IV",
        "Franconia Elementary School",
        "Franconia Park and RECenter",
        "Bush Hill historic enclaves",
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
          "name": "Franconia VA Real Estate Guide",
          "item": "https://www.homesalesfairfax.com/franconia-va-real-estate",
        },
      ],
    },
    // 3. FAQPage Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.homesalesfairfax.com/franconia-va-real-estate#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is Franconia an incorporated municipality or an unincorporated community in Fairfax County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Franconia is an unincorporated census-designated place (CDP) governed directly by the Fairfax County Board of Supervisors within the Franconia Magisterial District (formerly known as the Lee District). It carries an Alexandria postal address for mailing purposes but is entirely located in Fairfax County. Municipal services, public education (FCPS), police protection, and land-use zoning are administered by Fairfax County.",
          },
        },
        {
          "@type": "Question",
          "name": "What was the historical origin of Franconia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Franconia developed in the early 1870s as a rural railroad hamlet and freight whistle-stop on the Richmond, Fredericksburg and Potomac (RF&P) Railroad. Named after the historic German region of Franconia (Franken) or an early local estate, the station served dairy farmers and timber operations shipping goods north into Alexandria and Washington, D.C.",
          },
        },
        {
          "@type": "Question",
          "name": "What makes the Franconia-Springfield transit hub a major regional asset?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Franconia-Springfield Transportation Center is one of Northern Virginia's premier multimodal hubs. It serves as the southern terminus of the Metrorail Blue Line (providing a direct one-seat ride to the Pentagon, Rosslyn, and downtown Washington, D.C.) and hosts a station on the Virginia Railway Express (VRE) Fredericksburg Line, alongside extensive commuter parking, regional bus bays, and express toll lane access.",
          },
        },
        {
          "@type": "Question",
          "name": "What amenities are featured at the 193-acre Franconia Park and RECenter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Operated by the Fairfax County Park Authority, Franconia Park (formerly Lee District Park) spans 193 acres. It houses the Franconia RECenter with a 50-meter Olympic-sized indoor competition pool, diving complex, fitness center, dance/aerobic studios, lighted baseball and soccer fields, outdoor tennis/pickleball courts, an outdoor amphitheater, the 'Our Special Harbor' spray park, and Chessie's Big Backyard accessible playground.",
          },
        },
        {
          "@type": "Question",
          "name": "What residential architectural typologies are found in Franconia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Franconia features a diverse housing continuum: mid-century brick ramblers, split-levels, and split-foyers constructed between 1952 and 1975 on mature quarter-to-third-acre lots (such as Bush Hill Woods and Windsor Park); established multi-level brick townhome communities from the 1970s and 1980s (Franconia Forest, Franconia Commons); and modern custom craftsman infill homes.",
          },
        },
        {
          "@type": "Question",
          "name": "Which public schools serve the Franconia community?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Franconia is served by Fairfax County Public Schools (FCPS), primarily within the Thomas A. Edison High School pyramid. Students attend Edison High School, an authorized International Baccalaureate (IB) World School offering the prestigious full IB Diploma Programme and the specialized Edison Academy for technical sciences. Middle school students attend Mark Twain Middle School (an AAP Level IV Center), and elementary students attend Franconia Elementary or Bush Hill Elementary.",
          },
        },
        {
          "@type": "Question",
          "name": "How does commuter vehicular transit operate from Franconia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Franconia sits at the convergence of Northern Virginia's primary highway arteries at the Springfield Interchange ('Mixing Bowl'), providing immediate access to Interstate 95, Interstate 395 (with express toll lanes to Washington, D.C.), Interstate 495 (Capital Beltway), the Fairfax County Parkway (Route 286), and Franconia Road (Route 644).",
          },
        },
        {
          "@type": "Question",
          "name": "What structural maintenance considerations are essential for mid-century homes in Franconia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Purchasers of mid-century single-family properties should conduct fiber-optic camera sewer scope inspections of underground cast iron lines to check for root penetration and internal scaling, upgrade original 60-amp or 100-amp electrical panels to modern 200-amp circuit breakers with AFCI/GFCI protection, and ensure positive drainage grading around foundation masonry walls.",
          },
        },
        {
          "@type": "Question",
          "name": "What major regional retail and commercial destinations are adjacent to Franconia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Residents enjoy immediate access to Springfield Town Center (a two-level premier shopping, dining, and entertainment destination featuring multi-screen cinema and major retailers), Kingstowne Towne Center (offering grocery centers, boutiques, and lakeside dining), and Manchester Lakes commercial centers.",
          },
        },
        {
          "@type": "Question",
          "name": "How are real estate assessments and property taxes governed in Franconia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under Virginia Code § 58.1-3201, all real property in Franconia is assessed annually at 100 percent of fair market value by the Fairfax County Department of Tax Administration (DTA). Assessment notices are mailed every February based on verified arm's-length market sales, with taxes paid semi-annually on July 28 and December 5, and formal appeal rights through the county Board of Equalization.",
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
      <FranconiaClient />
    </>
  );
}
