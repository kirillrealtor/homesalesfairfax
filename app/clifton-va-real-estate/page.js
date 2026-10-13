import CliftonClient from "./CliftonClient";

export const metadata = {
  title: "Clifton VA Real Estate: The Definitive Historic Town & 5-Acre Estate Guide",
  description: "Exhaustive guide to Clifton VA real estate: Historic Victorian town, 5-acre Occoquan conservation estates, equestrian acreage, Centreville & Robinson pyramids, and zoning.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/clifton-va-real-estate",
  },
  openGraph: {
    title: "Clifton VA Real Estate: The Definitive Historic Town & 5-Acre Estate Guide",
    description: "Exhaustive guide to Clifton VA real estate: Historic Victorian town, 5-acre Occoquan conservation estates, equestrian acreage, Centreville & Robinson pyramids, and zoning.",
    url: "https://www.homesalesfairfax.com/clifton-va-real-estate",
    siteName: "homesalesfairfax.com",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clifton VA Real Estate: The Definitive Historic Town & 5-Acre Estate Guide",
    description: "Exhaustive guide to Clifton VA real estate: Historic Victorian town, 5-acre Occoquan conservation estates, equestrian acreage, Centreville & Robinson pyramids, and zoning.",
  },
};

export default function CliftonPage() {
  const schemas = [
    // 1. Article / Research Monograph Schema
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": "https://www.homesalesfairfax.com/clifton-va-real-estate#article",
      "headline": "Clifton VA Real Estate: The Definitive Guide to the Historic Victorian Town, 5-Acre Occoquan Conservation Estates & Equestrian Acreage",
      "description": "Exhaustive guide to Clifton VA real estate: Historic Victorian town, 5-acre Occoquan conservation estates, equestrian acreage, Centreville & Robinson pyramids, and zoning.",
      "url": "https://www.homesalesfairfax.com/clifton-va-real-estate",
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
      "mainEntityOfPage": "https://www.homesalesfairfax.com/clifton-va-real-estate",
      "about": [
        "Clifton, Virginia",
        "Town of Clifton",
        "Fairfax County real estate",
        "Occoquan Watershed 5-acre downzoning",
        "R-C zoning",
        "Clifton Historic District",
        "Equestrian real estate",
        "Clifton Elementary School",
        "Centreville High School pyramid",
        "Robinson Secondary pyramid",
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
          "name": "Clifton VA Real Estate Guide",
          "item": "https://www.homesalesfairfax.com/clifton-va-real-estate",
        },
      ],
    },
    // 3. FAQPage Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.homesalesfairfax.com/clifton-va-real-estate#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the difference between the incorporated Town of Clifton and greater Clifton?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The incorporated Town of Clifton is a self-governing historic municipality covering approximately 0.25 square miles with its own Mayor, Town Council, and Architectural Review Board. Residents in the town pay a modest municipal town real estate levy in addition to Fairfax County taxes. Greater Clifton refers to the expansive unincorporated rural-residential area in the Springfield Magisterial District governed directly by Fairfax County, where properties are not subject to town taxes.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the landmark 1982 Occoquan Watershed 5-acre downzoning (R-C zoning)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In 1982, the Fairfax County Board of Supervisors enacted landmark conservation legislation downzoning 41,000 acres in the Occoquan Reservoir watershed to R-C (Residential Conservation), mandating a minimum lot size of 5 acres (217,800 square feet) per single-family dwelling. This statutory policy protected the primary regional drinking water supply and permanently preserved Clifton as a pastoral enclave of private custom estates, preventing suburban tract sprawl.",
          },
        },
        {
          "@type": "Question",
          "name": "What architectural home styles define Clifton real estate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Clifton features two distinct architectural worlds: within the historic town, meticulously preserved late Victorian, Queen Anne, Italianate, and Carpenter Gothic clapboard homes dating from the 1870s to 1910s; across greater unincorporated Clifton, grand custom brick and stone luxury manors, modern craftsman estates, and sprawling equestrian farmhouses situated on 5-acre to 20-acre wooded parcels.",
          },
        },
        {
          "@type": "Question",
          "name": "Do homes in Clifton have municipal public water and sewer service?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most properties throughout greater unincorporated Clifton rely on private drinking water wells and engineered on-site sewage disposal systems (septic drainfields). The absence of public sewer mains across the R-C conservation district is a deliberate planning mechanism that legally and physically reinforces the 5-acre minimum density requirement.",
          },
        },
        {
          "@type": "Question",
          "name": "Which public schools serve Clifton residents?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Clifton is served by Fairfax County Public Schools (FCPS). Elementary students primarily attend historic Clifton Elementary School (renowned for high academic marks and community involvement) or Union Mill Elementary. Middle and high school students advance through the Centreville High School pyramid (via Liberty Middle School) or the Robinson Secondary School pyramid, depending on exact boundary coordinates.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the history of the Town of Clifton?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Originally developing around a rail siding on the Orange and Alexandria Railroad during the Civil War, Clifton Station became a fashionable late nineteenth-century summer resort destination for Washington dignitaries and politicians seeking clean country air and mineral springs. In 1902, it was formally incorporated as the first independent town in Fairfax County, and in 1985, the entire town was placed on the National Register of Historic Places.",
          },
        },
        {
          "@type": "Question",
          "name": "Are equestrian properties and horse keeping permitted in Clifton?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Clifton is one of Northern Virginia's premier equestrian enclaves. Under Fairfax County R-C zoning, keeping horses is permitted by right on qualifying acreage, typically requiring a minimum of two acres for the first horse and additional land per additional animal. Many properties feature professional barns, fenced riding rings, and direct access to local bridle trails.",
          },
        },
        {
          "@type": "Question",
          "name": "What parks and natural recreation areas border Clifton?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Clifton is bordered by extensive regional parkland, including Hemlock Overlook Regional Park (challenge courses and Bull Run nature trails), Bull Run Regional Park and the 17.5-mile Bull Run Occoquan Trail, the Webb Sanctuary, and Paradise Springs Winery on the town's forested fringe.",
          },
        },
        {
          "@type": "Question",
          "name": "What major transportation corridors connect Clifton to regional employment centers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Scenic two-lane arterial roads—including Clifton Road (Route 645), Chapel Road, Popes Head Road, and Compton Road—connect residents quickly to Route 28 (Sully Road), Route 29 (Lee Highway), Interstate 66, and the Fairfax County Parkway (Route 286). Commuter rail is accessible via the Virginia Railway Express (VRE) stations in Burke Centre, Rolling Road, and Manassas Park.",
          },
        },
        {
          "@type": "Question",
          "name": "What is 'Clifton Day' and how does it reflect community life?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Clifton Day is a famous annual festival held on the second Sunday of October that draws tens of thousands of regional visitors to Main Street. The historic town closes streets to automotive traffic, hosting hundreds of craft artisans, antique vendors, live music, and regional foods, with the Virginia Railway Express train making a special festival passenger stop in the center of town.",
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
      <CliftonClient />
    </>
  );
}
