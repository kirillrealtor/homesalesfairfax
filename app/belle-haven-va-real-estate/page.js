import BelleHavenClient from "./BelleHavenClient";

export const metadata = {
  title: "Belle Haven VA Real Estate: The Definitive Potomac River, Country Club & Architecture Guide",
  description: "Exhaustive guide to Belle Haven VA real estate: Belle Haven Country Club, historic 1920s estates, Mount Vernon Trail, West Potomac High, and Potomac waterfront.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/belle-haven-va-real-estate",
  },
  openGraph: {
    title: "Belle Haven VA Real Estate: The Definitive Potomac River, Country Club & Architecture Guide",
    description: "Exhaustive guide to Belle Haven VA real estate: Belle Haven Country Club, historic 1920s estates, Mount Vernon Trail, West Potomac High, and Potomac waterfront.",
    url: "https://www.homesalesfairfax.com/belle-haven-va-real-estate",
    siteName: "homesalesfairfax.com",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Belle Haven VA Real Estate: The Definitive Potomac River, Country Club & Architecture Guide",
    description: "Exhaustive guide to Belle Haven VA real estate: Belle Haven Country Club, historic 1920s estates, Mount Vernon Trail, West Potomac High, and Potomac waterfront.",
  },
};

export default function BelleHavenPage() {
  const schemas = [
    // 1. Article / Research Monograph Schema
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": "https://www.homesalesfairfax.com/belle-haven-va-real-estate#article",
      "headline": "Belle Haven, VA Real Estate: The Definitive Guide to Spatial Morphology, Historic Country Club Estates, Potomac River Shoreline & Parkways",
      "description": "Comprehensive architectural monograph & real estate guide to Belle Haven VA: 1920s estate origins, Belle Haven Country Club, Dyke Marsh Wildlife Preserve, Mount Vernon Trail, and West Potomac High pyramid.",
      "url": "https://www.homesalesfairfax.com/belle-haven-va-real-estate",
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
      "mainEntityOfPage": "https://www.homesalesfairfax.com/belle-haven-va-real-estate",
      "about": [
        "Belle Haven, Virginia",
        "Fairfax County real estate",
        "Belle Haven Country Club",
        "Dyke Marsh Wildlife Preserve",
        "Mount Vernon Trail",
        "George Washington Memorial Parkway",
        "West Potomac High School",
        "Carl Sandburg Middle School",
        "Belle View Elementary School",
        "Mount Vernon Magisterial District",
        "Potomac River waterfront estates",
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
          "name": "Belle Haven VA Real Estate Guide",
          "item": "https://www.homesalesfairfax.com/belle-haven-va-real-estate",
        },
      ],
    },
    // 3. FAQPage Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.homesalesfairfax.com/belle-haven-va-real-estate#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is Belle Haven an independent municipality or an unincorporated community in Fairfax County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Belle Haven is an unincorporated census-designated place (CDP) governed directly by the Fairfax County Board of Supervisors within the Mount Vernon Magisterial District. Although it carries an Alexandria postal address for mailing purposes, it is not part of the independent City of Alexandria. Municipal services, public education (FCPS), police protection, and land-use zoning are administered entirely by Fairfax County.",
          },
        },
        {
          "@type": "Question",
          "name": "What was the historical origin of the name 'Belle Haven'?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The name 'Belle Haven' dates to the early eighteenth century when Scottish merchants and tobacco planters established a port settlement along Hunting Creek and the Potomac River, naming it Belle Haven (French for 'beautiful harbor'). Although the adjacent settlement was incorporated as Alexandria in 1749, the historic name was revived in the 1920s during the development of the Belle Haven Country Club and its surrounding residential estates.",
          },
        },
        {
          "@type": "Question",
          "name": "What role does the Belle Haven Country Club play in the neighborhood?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Founded in 1924, the Belle Haven Country Club is a private, member-owned club that serves as the social and recreational centerpiece of the community. It features an 18-hole championship golf course renovated by Arthur Hills, a waterfront clubhouse overlooking the Potomac River, indoor and outdoor tennis centers, an Olympic-sized swimming facility, athletic training fitness centers, and fine dining amenities.",
          },
        },
        {
          "@type": "Question",
          "name": "What architectural typologies define residential properties in Belle Haven?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Belle Haven is celebrated for architectural diversity and historic integrity: classic 1920s to 1950s Georgian Revival, English Tudor, and French Provincial custom stone and brick residences set on mature half-acre lots; mid-century split-levels and ramblers in Belle Haven Terrace; and modern custom infill estates that blend contemporary luxury with traditional architectural detailing.",
          },
        },
        {
          "@type": "Question",
          "name": "Which public schools serve the Belle Haven community?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Belle Haven is served by Fairfax County Public Schools (FCPS) within the West Potomac High School pyramid. Students attend West Potomac High School (home to the AP Capstone program and the West Potomac Academy for specialized health sciences and communications), Carl Sandburg Middle School (a Full-Time AAP Level IV Center), and Belle View Elementary School (offering Spanish partial immersion and AAP curriculum).",
          },
        },
        {
          "@type": "Question",
          "name": "What natural preserves and waterfront recreation areas are located in Belle Haven?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Belle Haven sits along the Potomac River shoreline adjacent to the Dyke Marsh Wildlife Preserve, a 485-acre tidal freshwater wetland managed by the National Park Service. It also hosts the Belle Haven Marina (providing sailboat moorings, boat rentals, and sailing instruction) and the paved 18-mile Mount Vernon Trail running along the George Washington Memorial Parkway.",
          },
        },
        {
          "@type": "Question",
          "name": "How is commuter transit structured from Belle Haven to Washington, D.C.?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Belle Haven offers exceptional commuter logistics: the scenic George Washington Memorial Parkway provides direct, traffic-light-free driving north to Old Town Alexandria (5 minutes), Reagan National Airport (10 minutes), and downtown Washington, D.C. (15 to 20 minutes). Public transit users benefit from the nearby Huntington Metrorail Station (Yellow Line terminus), situated just over one mile to the west.",
          },
        },
        {
          "@type": "Question",
          "name": "What technical and structural considerations apply when purchasing historic homes in Belle Haven?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Buyers of 1920s to 1950s historic residences should conduct specialized inspections of slate roofs and copper flashing, evaluate true masonry cavity walls and lime mortar joints, commission fiber-optic camera sewer scope inspections of underground cast iron lines to detect root intrusion, and verify that electrical service panels have been upgraded to 200-amp circuit breakers.",
          },
        },
        {
          "@type": "Question",
          "name": "What zoning designations govern residential development in Belle Haven?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Parcels in Belle Haven are zoned primarily R-2 or R-3 (Residential Single-Family) by Fairfax County, permitting low-density detached residences on generous quarter-acre to three-quarter-acre lots. Properties along Hunting Creek or the Potomac River are also subject to Fairfax County Chesapeake Bay Preservation Ordinance regulations and Resource Protection Area (RPA) buffer requirements.",
          },
        },
        {
          "@type": "Question",
          "name": "How are real estate assessments and property taxes governed in Belle Haven?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under Virginia Code § 58.1-3201, all real property in Belle Haven is assessed annually at 100 percent of fair market value by the Fairfax County Department of Tax Administration (DTA). Property owners receive annual assessment notices in February, pay real estate taxes semi-annually on July 28 and December 5, and retain statutory appeal rights through the county Board of Equalization.",
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
      <BelleHavenClient />
    </>
  );
}
