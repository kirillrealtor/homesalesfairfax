import GrovetonClient from "./GrovetonClient";

export const metadata = {
  title: "Groveton VA Real Estate: The Definitive Transit, Architecture & Enclave Guide",
  description: "Exhaustive guide to Groveton VA real estate: Historic Huntley, Beacon Hill, Route 1 BRT corridor, West Potomac High pyramid, and residential enclaves.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/groveton-va-real-estate",
  },
  openGraph: {
    title: "Groveton VA Real Estate: The Definitive Transit, Architecture & Enclave Guide",
    description: "Exhaustive guide to Groveton VA real estate: Historic Huntley, Beacon Hill, Route 1 BRT corridor, West Potomac High pyramid, and residential enclaves.",
    url: "https://www.homesalesfairfax.com/groveton-va-real-estate",
    siteName: "homesalesfairfax.com",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Groveton VA Real Estate: The Definitive Transit, Architecture & Enclave Guide",
    description: "Exhaustive guide to Groveton VA real estate: Historic Huntley, Beacon Hill, Route 1 BRT corridor, West Potomac High pyramid, and residential enclaves.",
  },
};

export default function GrovetonPage() {
  const schemas = [
    // 1. Article / Research Monograph Schema
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": "https://www.homesalesfairfax.com/groveton-va-real-estate#article",
      "headline": "Groveton, VA Real Estate: The Definitive Guide to Spatial Morphology, Historic Huntley, Richmond Highway BRT Corridor & Residential Enclaves",
      "description": "Comprehensive architectural monograph & real estate guide to Groveton VA: Historic Huntley, Beacon Hill, Embark Richmond Highway Bus Rapid Transit, West Potomac High pyramid, and diverse residential enclaves.",
      "url": "https://www.homesalesfairfax.com/groveton-va-real-estate",
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
      "mainEntityOfPage": "https://www.homesalesfairfax.com/groveton-va-real-estate",
      "about": [
        "Groveton, Virginia",
        "Fairfax County real estate",
        "Historic Huntley",
        "Beacon Hill Fairfax County",
        "Embark Richmond Highway Bus Rapid Transit",
        "Huntley Meadows Park",
        "West Potomac High School",
        "Groveton Elementary School",
        "Carl Sandburg Middle School",
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
          "name": "Groveton VA Real Estate Guide",
          "item": "https://www.homesalesfairfax.com/groveton-va-real-estate",
        },
      ],
    },
    // 3. FAQPage Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.homesalesfairfax.com/groveton-va-real-estate#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is Groveton an independent municipality or an unincorporated community in Fairfax County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Groveton is an unincorporated census-designated place (CDP) governed directly by the Fairfax County Board of Supervisors within the Mount Vernon Magisterial District. It utilizes an Alexandria postal address (ZIP code 22306) for mailing delivery, but is entirely situated in Fairfax County. Public schooling, law enforcement (Fairfax County Police Mount Vernon District Station), fire rescue, and land-use zoning are administered by Fairfax County.",
          },
        },
        {
          "@type": "Question",
          "name": "What was the historical origin of Groveton?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Groveton originated in the nineteenth century as an agricultural crossroad hamlet along the historic turnpike connecting Alexandria and Colchester (which evolved into U.S. Route 1 / Richmond Highway). Named for its prominent hardwood groves, the area's prominent historic landmark is Historic Huntley, a Federal-style villa constructed circa 1825 for Thomson Francis Mason, grandson of Founding Father George Mason IV.",
          },
        },
        {
          "@type": "Question",
          "name": "What was Beacon Field Airport and how did it shape Groveton's topography?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "From the 1920s through the late 1950s, the high geographic ridge in Groveton served as Beacon Field Airport, an active early civil aviation airfield equipped with a prominent illuminated airway navigation beacon. Today, the ridge is known as Beacon Hill, housing residential neighborhoods and the Beacon Center commercial retail complex, offering panoramic vistas across the lower Potomac River valley.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the Embark Richmond Highway Bus Rapid Transit (BRT) project?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Embark Richmond Highway is a transformative multi-million-dollar transportation and land-use initiative sponsored by Fairfax County and VDOT. It creates a dedicated median-running Bus Rapid Transit (BRT) system along Route 1 with modern stations, connecting Groveton directly north to the Huntington Metrorail Station (Yellow Line) and south to Fort Belvoir, spurring walkable, mixed-use town center redevelopment.",
          },
        },
        {
          "@type": "Question",
          "name": "What residential architectural styles characterize Groveton neighborhoods?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Groveton features an attractive architectural continuum: post-war 1950s and 1960s brick ramblers and split-levels in enclaves like Memorial Heights and Beacon Hill; established multi-level brick executive townhomes in Groveton Woods; and modern luxury multi-story infill townhomes and custom residences with attached garages and high-efficiency building envelopes.",
          },
        },
        {
          "@type": "Question",
          "name": "Which public schools serve the Groveton community?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Groveton is served by Fairfax County Public Schools (FCPS) primarily within the West Potomac High School pyramid. Students attend West Potomac High School (home to the AP Capstone Diploma and specialized West Potomac Academy), Carl Sandburg Middle School (a Full-Time AAP Level IV Center), and Groveton Elementary School (celebrated for STEAM labs and community focus). Select neighborhoods also align with the Edison High School IB pyramid.",
          },
        },
        {
          "@type": "Question",
          "name": "What parklands and historic attractions are located in and around Groveton?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Recreational and cultural amenities include Historic Huntley (a restored 1825 Federal villa on the National Register of Historic Places), the adjacent 1,500-acre Huntley Meadows Park (featuring extensive wetland boardwalks and nature centers), Groveton Heights Park, and the nearby Mount Vernon RECenter with an indoor ice arena and Olympic swimming pool.",
          },
        },
        {
          "@type": "Question",
          "name": "How is commuter transit structured from Groveton to employment centers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Commuters benefit from immediate access to U.S. Route 1 (Richmond Highway), leading north to the Huntington Metrorail Station (Yellow Line terminus, located approximately 2 miles away) for a direct one-seat ride to Old Town Alexandria, Reagan National Airport, the Pentagon, and downtown Washington, D.C. Additionally, Fort Belvoir is situated less than 5 miles south.",
          },
        },
        {
          "@type": "Question",
          "name": "What structural maintenance considerations are essential for mid-century homes in Groveton?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Buyers of mid-century single-family properties should conduct fiber-optic camera sewer scope inspections of underground cast iron lines to check for root penetration and interior scaling, upgrade original electrical panels to modern 200-amp service with AFCI/GFCI protection, and maintain proper perimeter foundation drainage slopes to manage coastal plain soil moisture.",
          },
        },
        {
          "@type": "Question",
          "name": "How are real estate property assessments and taxes governed in Groveton?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under Virginia Code § 58.1-3201, all real property in Groveton is assessed annually at 100 percent of fair market value by the Fairfax County Department of Tax Administration (DTA). Property owners receive annual assessment notices in February, pay county real estate taxes semi-annually on July 28 and December 5, and retain statutory rights to appeal valuations to the county Board of Equalization.",
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
      <GrovetonClient />
    </>
  );
}
