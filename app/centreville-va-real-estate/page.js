import CentrevilleClient from "./CentrevilleClient";

export const metadata = {
  title: "Centreville VA Real Estate: The Definitive Guide to Homes, PUDs & Bull Run Parkland",
  description: "Exhaustive guide to Centreville VA real estate: Virginia Run, Little Rocky Run, Sully Station, Occoquan watershed, Centreville High pyramid, zoning & parks.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/centreville-va-real-estate",
  },
  openGraph: {
    title: "Centreville VA Real Estate: The Definitive Guide to Homes, PUDs & Bull Run Parkland",
    description: "Exhaustive guide to Centreville VA real estate: Virginia Run, Little Rocky Run, Sully Station, Occoquan watershed, Centreville High pyramid, zoning & parks.",
    url: "https://www.homesalesfairfax.com/centreville-va-real-estate",
    siteName: "homesalesfairfax.com",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "/images/centreville.jpg",
        width: 2400,
        height: 1350,
        alt: "Centreville VA Real Estate - Definitive Guide to Homes, PUDs, and Historic Bull Run Enclaves",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Centreville VA Real Estate: The Definitive Guide to Homes, PUDs & Bull Run Parkland",
    description: "Exhaustive guide to Centreville VA real estate: Virginia Run, Little Rocky Run, Sully Station, Occoquan watershed, Centreville High pyramid, zoning & parks.",
    images: ["/images/centreville.jpg"],
  },
};

export default function CentrevillePage() {
  const schemas = [
    // 1. Article / Report Schema
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": "https://www.homesalesfairfax.com/centreville-va-real-estate#article",
      "headline": "Centreville VA Real Estate: The Definitive Guide to Homes, PUDs, Zoning & Schools",
      "description": "Exhaustive guide to Centreville VA real estate: Virginia Run, Little Rocky Run, Sully Station, Occoquan watershed, Centreville High pyramid, zoning & parks.",
      "url": "https://www.homesalesfairfax.com/centreville-va-real-estate",
      "image": "https://www.homesalesfairfax.com/images/centreville.jpg",
      "inLanguage": "en-US",
      "publisher": {
        "@type": "Organization",
        "name": "homesalesfairfax.com",
        "url": "https://www.homesalesfairfax.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.homesalesfairfax.com/images/logo-ysc-remax.png",
        },
      },
      "mainEntityOfPage": "https://www.homesalesfairfax.com/centreville-va-real-estate",
      "about": [
        "Centreville, Virginia",
        "Fairfax County real estate",
        "Virginia Run",
        "Little Rocky Run",
        "Centreville High School pyramid",
        "Bull Run Regional Park",
        "Occoquan Watershed Protection District",
        "I-66 Express Lanes",
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
          "name": "Centreville VA Real Estate Guide",
          "item": "https://www.homesalesfairfax.com/centreville-va-real-estate",
        },
      ],
    },
    // 3. FAQPage Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.homesalesfairfax.com/centreville-va-real-estate#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is Centreville an incorporated town or part of Fairfax County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Centreville is an unincorporated community and census-designated place (CDP) within Fairfax County, split between the Sully and Springfield Magisterial Districts. While originally chartered as a town in 1792 by the Virginia General Assembly (making it the first chartered town in Fairfax County), its municipal charter later lapsed. Municipal services, police protection, public schools, and zoning enforcement are administered directly by Fairfax County.",
          },
        },
        {
          "@type": "Question",
          "name": "Where does the name \"Centreville\" originate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Originally known as the crossroads settlement of Newgate, the community was incorporated as 'Centerville' in 1792 due to its central geographic location equidistant between Alexandria, Colchester, Dumfries, Leesburg, Middleburg, and Warrenton.",
          },
        },
        {
          "@type": "Question",
          "name": "What public high school pyramids serve Centreville?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Centreville is served primarily by the Centreville High School pyramid (fed by Liberty Middle School, Centreville Elementary, Colin Powell Elementary, and Union Mill Elementary) and the Westfield High School pyramid (fed by Stone Middle School and Virginia Run Elementary). Colin Powell Elementary hosts a nationally celebrated Korean Language Immersion Program.",
          },
        },
        {
          "@type": "Question",
          "name": "What are the largest master-planned communities in Centreville?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The premier master-planned communities in Centreville include Little Rocky Run (over 2,000 homes with three recreation centers and pools), Virginia Run (1,400+ executive colonials on one-third to full-acre lots), Sully Station and Sully Station II, and Centre Ridge.",
          },
        },
        {
          "@type": "Question",
          "name": "How are real estate taxes structured in Centreville?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Real estate is assessed annually at 100 percent of fair market value by the Fairfax County Department of Tax Administration under Virginia Code Title 58.1. Homeowners pay the countywide base real estate levy, the county stormwater management service district fee, and regional transportation funds, with zero municipal town taxes.",
          },
        },
        {
          "@type": "Question",
          "name": "Do homes in Centreville have mandatory Homeowners Associations (HOAs)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "More than 85 percent of residences in Centreville are located within mandatory Planned Unit Developments (PUDs) with active HOAs. These associations maintain private community clubhouses, swimming pools, tennis/pickleball courts, and miles of paved walking trails, while enforcing architectural design covenants.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the Occoquan Reservoir Watershed Protection District in Centreville?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Occoquan Reservoir is a primary drinking water reservoir serving over one million Northern Virginia residents. Much of southern Centreville drains into this basin via Cub Run and Bull Run. In 1982, Fairfax County enacted historic environmental downzoning across the basin to protect drinking water quality, restricting baseline residential densities to one dwelling unit per five acres in conservation areas.",
          },
        },
        {
          "@type": "Question",
          "name": "What commuter transit options connect Centreville to Washington, D.C.?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Centreville features direct access to Interstate 66, the dynamically tolled I-66 Express Lanes, Route 28, and Route 29. The Stringfellow Road Park & Ride Transit Center provides commuter parking and direct express bus service to the Vienna / Fairfax-GMU Orange Line Metrorail Station.",
          },
        },
        {
          "@type": "Question",
          "name": "What role did Centreville play in the Civil War?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Centreville was a critical military hub during both Battles of Manassas (Bull Run). In the winter of 1861–1862, Confederate General Joseph E. Johnston fortified the village with massive earthworks and over 40,000 soldiers, famously using black-painted wooden 'Quaker guns' to bluff Union reconnaissance. Historic landmarks include Mount Gilead and St. John's Episcopal Church.",
          },
        },
        {
          "@type": "Question",
          "name": "What major parks and recreational facilities are located in Centreville?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Major amenities include Bull Run Regional Park (spanning 1,500+ acres with the Atlantis Waterpark and the Bull Run Occoquan Trail), Ellanor C. Lawrence Park along Centreville’s northern boundary, and the nearby Cub Run RECenter.",
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
      <CentrevilleClient />
    </>
  );
}
