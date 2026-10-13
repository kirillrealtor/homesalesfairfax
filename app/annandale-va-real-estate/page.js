import AnnandaleClient from "./AnnandaleClient";

export const metadata = {
  title: "Annandale VA Real Estate: The Definitive Guide to Homes, Architecture, Zoning & Schools",
  description: "Exhaustive guide to Annandale VA real estate: mid-century moderns, Broyhill Crest, Truro, Accotink Creek watershed, Annandale High IB pyramid, and zoning.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/annandale-va-real-estate",
  },
  openGraph: {
    title: "Annandale VA Real Estate: The Definitive Guide to Homes, Architecture, Zoning & Schools",
    description: "Exhaustive guide to Annandale VA real estate: mid-century moderns, Broyhill Crest, Truro, Accotink Creek watershed, Annandale High IB pyramid, and zoning.",
    url: "https://www.homesalesfairfax.com/annandale-va-real-estate",
    siteName: "homesalesfairfax.com",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Annandale VA Real Estate: The Definitive Guide to Homes, Architecture, Zoning & Schools",
    description: "Exhaustive guide to Annandale VA real estate: mid-century moderns, Broyhill Crest, Truro, Accotink Creek watershed, Annandale High IB pyramid, and zoning.",
  },
};

export default function AnnandalePage() {
  const schemas = [
    // 1. Article / Research Monograph Schema
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": "https://www.homesalesfairfax.com/annandale-va-real-estate#article",
      "headline": "Annandale VA Real Estate: The Definitive Guide to Mid-Century Architecture, Accotink Watershed & Beltway Commuter Corridors",
      "description": "Exhaustive guide to Annandale VA real estate: mid-century moderns, Broyhill Crest, Truro, Accotink Creek watershed, Annandale High IB pyramid, and zoning.",
      "url": "https://www.homesalesfairfax.com/annandale-va-real-estate",
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
      "mainEntityOfPage": "https://www.homesalesfairfax.com/annandale-va-real-estate",
      "about": [
        "Annandale, Virginia",
        "Fairfax County real estate",
        "Fairfax County zoning zMOD",
        "Truro architecture",
        "Broyhill Crest",
        "Annandale High School IB pyramid",
        "Accotink Creek watershed",
        "Mason District Park",
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
          "name": "Annandale VA Real Estate Guide",
          "item": "https://www.homesalesfairfax.com/annandale-va-real-estate",
        },
      ],
    },
    // 3. FAQPage Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.homesalesfairfax.com/annandale-va-real-estate#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is Annandale an incorporated municipality or governed by Fairfax County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Annandale is an unincorporated census-designated place (CDP) governed directly by the Fairfax County Board of Supervisors, divided across the Mason and Braddock Magisterial Districts. Because it is not an incorporated town, residential properties in Annandale are not subject to secondary municipal real estate taxes, separate town council ordinances, or municipal police departments. All municipal services—including law enforcement (Fairfax County Police Department Mason and West Springfield Stations), public education, emergency response, and land-use zoning—are administered by Fairfax County.",
          },
        },
        {
          "@type": "Question",
          "name": "How did Annandale get its name and historic identity?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Annandale's origins trace to the historic Ravensworth land patent of 1685 granted to William Fitzhugh. In 1830, Scottish physician Dr. William E. G. Black officially bestowed the name 'Annandale' upon the community after the valley of the River Annan in Dumfriesshire, Scotland. The crossroads prospered following the 1806 charter of the Little River Turnpike, serving as a primary agricultural toll route linking the western Virginia piedmont to the Potomac River port of Alexandria.",
          },
        },
        {
          "@type": "Question",
          "name": "What architectural home styles dominate Annandale’s residential neighborhoods?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Annandale is renowned as Northern Virginia's heartland for authentic mid-century residential architecture. The housing stock features single-story red brick ramblers and ranches built primarily between 1950 and 1965 on full basements, split-level and bi-level homes, architect-designed mid-century modern contemporary residences with exposed timber beams and vaulted glass (exemplified by Truro), traditional two-story colonial revivals, and 21st-century luxury craftsman infill estates on generous half-acre parcels.",
          },
        },
        {
          "@type": "Question",
          "name": "How does the International Baccalaureate (IB) program function at Annandale High School?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Annandale High School is an authorized International Baccalaureate (IB) World School within Fairfax County Public Schools (FCPS) Region 2. The IB Diploma Programme provides rigorous pre-university curriculum focusing on advanced critical thinking, interdisciplinary inquiry, world languages, community service, and global perspectives. Students can pursue the full IB Diploma or individual IB course certificates, earning advanced collegiate course credits while participating in specialized collegiate preparatory pathways.",
          },
        },
        {
          "@type": "Question",
          "name": "How does the Chesapeake Bay Preservation Act impact property modifications in Annandale?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under the Chesapeake Bay Preservation Act and Fairfax County environmental ordinances, properties situated along the Accotink Creek, Indian Run, and tributary drainages are governed by mandatory 100-foot Resource Protection Area (RPA) vegetative buffer corridors. Within an RPA, the clearing of mature trees, grading, and the erection of impermeable structures (such as home additions, detached garages, or swimming pools) are strictly regulated, requiring formal water quality impact assessments and county environmental exceptions.",
          },
        },
        {
          "@type": "Question",
          "name": "What public transit options connect Annandale to Washington, D.C. and the Pentagon?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Annandale features robust multi-modal transit options. The Washington Metropolitan Area Transit Authority (WMATA) operates high-frequency Metrobus lines along Little River Turnpike (Route 236) and Columbia Pike (Route 244), delivering direct one-seat commuter transit to the Pentagon transit concourse and Washington, D.C. Additionally, Fairfax Connector routes link residential subdivisions directly to nearby Metrorail stations, including Dunn Loring-Merrifield on the Orange Line and Franconia-Springfield on the Blue Line.",
          },
        },
        {
          "@type": "Question",
          "name": "Do most neighborhoods in Annandale have mandatory Homeowners Associations (HOAs)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The vast majority of mature detached single-family subdivisions in Annandale—including Broyhill Crest, Sleepy Hollow Woods, Camelot, and Pine Ridge—are entirely non-HOA fee-simple communities, freeing homeowners from mandatory monthly dues and restrictive architectural review boards. However, notable planned communities like Truro operate active community associations that maintain neighborhood swimming pools, tennis facilities, and enforce architectural preservation covenants designed to safeguard original contemporary mid-century designs.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the significance of the Truro neighborhood in American residential architecture?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Truro is celebrated among architectural historians as one of the Mid-Atlantic's most successful master-planned mid-century contemporary woodland communities. Developed in the late 1960s and early 1970s by Miller & Smith, Truro features custom timber-and-glass homes that harmonize with the native rolling Piedmont forest. The residences showcase post-and-beam construction, expansive clerestory fenestration, cedar siding, and open interior volumes, preserved through strict community design standards.",
          },
        },
        {
          "@type": "Question",
          "name": "How are real estate taxes assessed for property owners in Annandale?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Real estate taxation in Annandale is governed by Virginia Code Title 58.1, which mandates annual assessment of real property at 100 percent of fair market value by the Fairfax County Department of Tax Administration. Homeowners pay the Fairfax County base real estate levy and countywide stormwater service district assessments. Because Annandale is unincorporated, residents benefit from paying only one single county assessment, avoiding the supplemental municipal tax rates incurred by residents of incorporated towns.",
          },
        },
        {
          "@type": "Question",
          "name": "What recreational amenities are offered by Mason District Park and Wakefield Park?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mason District Park spans 121 acres and features a dedicated covered amphitheater hosting popular summer cultural concerts, illuminated athletic fields, tennis courts, native woodland trails, a dog park, and an official Fairfax County farmers market. Wakefield Park encompasses 290 acres and houses the Audrey Moore RECenter—a flagship indoor recreational facility featuring an Olympic-sized indoor swimming pool, fitness center, gymnasium, and outdoor tennis, pickleball, and skate parks linked directly to the Gerry Connolly Cross County Trail.",
          },
        },
      ],
    },
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <AnnandaleClient />
    </>
  );
}
