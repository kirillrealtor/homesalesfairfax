import ChantillyRealEstateClient from "./ChantillyRealEstateClient";

export const metadata = {
  title: "Chantilly VA Real Estate: The Definitive Guide to Homes, Tech Corridors & Schools",
  description: "Exhaustive guide to Chantilly VA real estate: Fairfax vs. Loudoun border, Poplar Tree Estates, Pleasant Valley, Governor's STEM Academy, zoning & parks.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/chantilly-va-real-estate",
  },
  openGraph: {
    title: "Chantilly VA Real Estate: The Definitive Guide to Homes, Tech Corridors & Schools",
    description: "Exhaustive guide to Chantilly VA real estate: Fairfax vs. Loudoun border, Poplar Tree Estates, Pleasant Valley, Governor's STEM Academy, zoning & parks.",
    url: "https://www.homesalesfairfax.com/chantilly-va-real-estate",
    siteName: "homesalesfairfax.com",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "/images/chantilly.jpg",
        width: 2400,
        height: 1350,
        alt: "Chantilly VA Real Estate - Definitive Guide to Homes, Tech Corridors, and Communities",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chantilly VA Real Estate: The Definitive Guide to Homes, Tech Corridors & Schools",
    description: "Exhaustive guide to Chantilly VA real estate: Fairfax vs. Loudoun border, Poplar Tree Estates, Pleasant Valley, Governor's STEM Academy, zoning & parks.",
    images: ["/images/chantilly.jpg"],
  },
};

export default function ChantillyRealEstatePage() {
  const schemas = [
    // 1. Article / Report Schema
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": "https://www.homesalesfairfax.com/chantilly-va-real-estate#article",
      "headline": "Chantilly VA Real Estate: The Definitive Guide to Homes, Tech Corridors, Zoning & Schools",
      "description": "Exhaustive guide to Chantilly VA real estate: Fairfax vs. Loudoun border, Poplar Tree Estates, Pleasant Valley, Governor's STEM Academy, zoning & parks.",
      "url": "https://www.homesalesfairfax.com/chantilly-va-real-estate",
      "image": "https://www.homesalesfairfax.com/images/chantilly.jpg",
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
      "mainEntityOfPage": "https://www.homesalesfairfax.com/chantilly-va-real-estate",
      "about": [
        "Chantilly, Virginia",
        "Fairfax County real estate",
        "Poplar Tree Estates",
        "Pleasant Valley",
        "Chantilly High School pyramid",
        "Governor's STEM Academy",
        "Ellanor C. Lawrence Park",
        "Cub Run RECenter",
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
          "name": "Chantilly VA Real Estate Guide",
          "item": "https://www.homesalesfairfax.com/chantilly-va-real-estate",
        },
      ],
    },
    // 3. FAQPage Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.homesalesfairfax.com/chantilly-va-real-estate#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is Chantilly an incorporated town or part of Fairfax County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Chantilly is an unincorporated community and census-designated place (CDP) governed directly by county administration. Eastern Chantilly (ZIP code 20151) is in Fairfax County under the Sully Magisterial District, while western Chantilly (ZIP code 20152) is in Loudoun County. Chantilly has no separate town mayor, council, or municipal town tax.",
          },
        },
        {
          "@type": "Question",
          "name": "Where does the name \"Chantilly\" originate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The name originated from the late-18th-century plantation established by Charles Calvert Stuart along the Little River Turnpike, named after the historic Château de Chantilly located north of Paris, France.",
          },
        },
        {
          "@type": "Question",
          "name": "How does the Fairfax County and Loudoun County boundary divide Chantilly?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Chantilly spans the border of two prominent Northern Virginia counties. Eastern Chantilly (20151) is governed by Fairfax County, featuring established subdivisions such as Poplar Tree Estates, Brookfield, and Pleasant Valley, along with the Westfields tech corridor. Western Chantilly (20152) is in Loudoun County, encompassing planned communities such as South Riding and Stone Ridge. Taxes, school pyramids, and zoning depend strictly on county jurisdiction.",
          },
        },
        {
          "@type": "Question",
          "name": "What public high school pyramids serve Chantilly?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Fairfax County portions of Chantilly are served primarily by the Chantilly High School pyramid (fed by Rocky Run Middle School, Poplar Tree Elementary, and Brookfield Elementary) and the Westfield High School pyramid (fed by Stone Middle School and Cub Run Elementary). Chantilly High School is home to the acclaimed Governor’s STEM Academy.",
          },
        },
        {
          "@type": "Question",
          "name": "How are real estate taxes calculated for Chantilly homeowners?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In Fairfax County (20151), real property is assessed annually at 100 percent of fair market value by the Department of Tax Administration under Virginia Code Title 58.1. Homeowners pay the countywide base real estate levy, the county stormwater service district fee, and regional transportation assessments, with zero municipal town taxes.",
          },
        },
        {
          "@type": "Question",
          "name": "Do homes in Chantilly have mandatory Homeowners Associations (HOAs)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most subdivisions developed from the 1980s onward—including Poplar Tree Estates, Pleasant Valley, and Armfield Farms—feature mandatory HOAs that manage private community pools, tennis courts, and common grounds. Older 1960s–1970s subdivisions such as Brookfield are predominantly fee-simple with no mandatory HOA dues.",
          },
        },
        {
          "@type": "Question",
          "name": "What are 100-foot Resource Protection Areas (RPAs) in Chantilly?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under the Virginia Chesapeake Bay Preservation Act, mandatory 100-foot vegetated buffer zones are enforced landward of all perennial streams, such as Flatlick Branch and Cub Run. Clearing, grading, or adding permanent impervious structures (like swimming pools or home additions) is strictly prohibited within this buffer.",
          },
        },
        {
          "@type": "Question",
          "name": "What major employers are located in Chantilly?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Chantilly is a regional headquarters hub for federal aerospace, defense, and intelligence organizations, anchored by the National Reconnaissance Office (NRO) headquarters in Westfields, alongside major defense systems integrators, cybersecurity firms, and data center facilities.",
          },
        },
        {
          "@type": "Question",
          "name": "What commuter transit options serve Chantilly?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Chantilly offers direct vehicular access via Route 28 (freeway grade-separated), Route 50, and nearby Interstate 66. Commuters access the Silver Line Metrorail via the Innovation Center and Dulles Airport stations, as well as express commuter bus routes.",
          },
        },
        {
          "@type": "Question",
          "name": "What recreational facilities and parks anchor Chantilly?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Premier facilities include the 650-acre Ellanor C. Lawrence Park, the 65,000-square-foot Cub Run RECenter featuring an indoor leisure waterpark and lap pool, the Smithsonian Steven F. Udvar-Hazy Center, and Pleasant Valley Golf Club.",
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
      <ChantillyRealEstateClient />
    </>
  );
}
