import OaktonClient from "./OaktonClient";

export const metadata = {
  title: "Oakton VA Real Estate: The Definitive Guide to Wooded Acreage & Estates",
  description: "Comprehensive guide to Oakton VA real estate: history, R-E estate zoning, Difficult Run watershed, Oakton High pyramid, Oak Marr RECenter, and luxury acreage.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/oakton-homes-for-sale",
  },
  openGraph: {
    title: "Oakton VA Real Estate: The Definitive Guide to Wooded Acreage & Estates",
    description: "Comprehensive guide to Oakton VA real estate: history, R-E estate zoning, Difficult Run watershed, Oakton High pyramid, Oak Marr RECenter, and luxury acreage.",
    url: "https://www.homesalesfairfax.com/oakton-homes-for-sale",
    siteName: "homesalesfairfax.com",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "/images/oakton.jpg",
        width: 2400,
        height: 1350,
        alt: "Oakton VA Real Estate - Definitive Guide to Wooded Acreage and Luxury Estates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oakton VA Real Estate: The Definitive Guide to Wooded Acreage & Estates",
    description: "Comprehensive guide to Oakton VA real estate: history, R-E estate zoning, Difficult Run watershed, Oakton High pyramid, Oak Marr RECenter, and luxury acreage.",
    images: ["/images/oakton.jpg"],
  },
};

export default function OaktonPage() {
  const schemas = [
    // 1. Article / Report Schema
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": "https://www.homesalesfairfax.com/oakton-homes-for-sale#article",
      "headline": "Oakton VA Real Estate: The Definitive Guide to Wooded Acreage, Luxury Estates, Zoning & Schools",
      "description": "Comprehensive guide to Oakton VA real estate: history, R-E estate zoning, Difficult Run watershed, Oakton High pyramid, Oak Marr RECenter, and luxury acreage.",
      "url": "https://www.homesalesfairfax.com/oakton-homes-for-sale",
      "image": "https://www.homesalesfairfax.com/images/oakton.jpg",
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
      "mainEntityOfPage": "https://www.homesalesfairfax.com/oakton-homes-for-sale",
      "about": [
        "Oakton, Virginia",
        "Fairfax County real estate",
        "Oakton luxury homes",
        "Difficult Run watershed",
        "Oakton High School pyramid",
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
          "name": "Oakton VA Real Estate Guide",
          "item": "https://www.homesalesfairfax.com/oakton-homes-for-sale",
        },
      ],
    },
    // 3. FAQPage Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.homesalesfairfax.com/oakton-homes-for-sale#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is Oakton an incorporated town or part of Fairfax County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oakton is an unincorporated community and Census-Designated Place (CDP) within Fairfax County, Virginia. Unlike the neighboring Town of Vienna, Oakton does not have an independent municipal town government, mayor, or town council. Municipal services, police protection, public schools, and zoning enforcement are administered directly by Fairfax County under the Providence and Hunter Mill Magisterial Districts.",
          },
        },
        {
          "@type": "Question",
          "name": "Where does the name \"Oakton\" come from?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Originally known in the 18th and 19th centuries as Flint Hill (due to abundant surface quartz and flint stone deposits), the community was renamed Oakton around 1875 in honor of the \"Oakton Oak\" (or Great Oak). This massive white oak tree flourished for centuries at the crossroads of Chain Bridge Road (Route 123) and Hunter Mill Road, serving as a historic regional landmark.",
          },
        },
        {
          "@type": "Question",
          "name": "What public high school pyramid serves Oakton?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oakton is served by the prestigious Oakton High School pyramid in Fairfax County Public Schools (FCPS), fed by Rachel Carson Middle School and Thoreau Middle School. Feeder elementary schools include Waples Mill Elementary (hosting a full-time Level IV AAP center), Oakton Elementary, and Crossfield Elementary. Qualified students can also attend Thomas Jefferson High School for Science and Technology (TJHSST).",
          },
        },
        {
          "@type": "Question",
          "name": "What are typical lot sizes in Oakton?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Due to Fairfax County’s low-density zoning, lot sizes in Oakton are among the largest in Northern Virginia. In northern and western Oakton along Hunter Mill Road and Vale Road, lots routinely range from 1 to 5+ acres under R-E (Residential Estate) and R-1 zoning. Central and southern Oakton feature established neighborhoods with 0.35- to 0.75-acre parcels, alongside townhome enclaves near Interstate 66.",
          },
        },
        {
          "@type": "Question",
          "name": "Does Oakton have direct Metrorail access?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The Vienna / Fairfax-GMU Metrorail Station—the western terminus of the Washington Metro Orange Line—is situated directly on Oakton’s southern boundary along Interstate 66 at Route 123. Oakton residents enjoy under five-minute access to commuter parking garages, providing a direct, one-seat heavy-rail commute into downtown Washington.",
          },
        },
        {
          "@type": "Question",
          "name": "How are real estate taxes structured in Oakton?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Real estate in Oakton is assessed annually at 100% of fair market value by the Fairfax County Department of Tax Administration. Property owners pay the countywide base real estate tax, the county stormwater management service district levy, and a small pest control fee. Oakton residents pay zero municipal town taxes (unlike Town of Vienna residents) and do not pay the McLean Community Center special district tax.",
          },
        },
        {
          "@type": "Question",
          "name": "Do homes in Oakton have mandatory Homeowners Associations (HOAs)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Over 85% of single-family detached homes on acreage in Oakton have no mandatory Homeowners Association (HOA). Property owners enjoy complete freedom over their parcels, subject strictly to Fairfax County zoning and building codes. Mandatory HOAs are primarily found in gated enclaves (such as Oakton Reserve) and condominium/townhome communities.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the Difficult Run watershed and how does it affect properties?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Difficult Run is Fairfax County’s largest watershed basin, with headwaters flowing through Oakton. Under the Virginia Chesapeake Bay Preservation Act, perennial stream corridors feature 100-foot Resource Protection Area (RPA) vegetative buffer zones where clearing and construction are prohibited. These regulations preserve mature forests and wildlife habitats while shaping buildable lot envelopes.",
          },
        },
        {
          "@type": "Question",
          "name": "What is Oak Marr RECenter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oak Marr RECenter is a premier 56-acre facility operated by the Fairfax County Park Authority in Oakton. It features an Olympic-sized indoor swimming pool, diving complex, fitness center, lighted driving range, and a 9-hole executive par-3 golf course, serving as a recreational centerpiece for local families.",
          },
        },
        {
          "@type": "Question",
          "name": "Is Flint Hill School located in Oakton?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Flint Hill School’s flagship campus is situated directly on Chain Bridge Road (Route 123) in Oakton. It is one of the Mid-Atlantic’s leading independent college-preparatory day schools, serving students from preschool through grade 12 with championship athletics, STEM labs, and fine arts facilities.",
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
      <OaktonClient />
    </>
  );
}
