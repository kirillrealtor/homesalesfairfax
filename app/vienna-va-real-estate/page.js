import ViennaClient from "./ViennaClient";

export const metadata = {
  title: "Vienna VA Real Estate: The Definitive Community & Neighborhood Guide",
  description: "Comprehensive guide to Vienna VA real estate: history, Town zoning (RS-10/RS-12.5), Madison High School pyramid, W&OD Trail, neighborhoods, and buyer/seller strategies.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/vienna-va-real-estate",
  },
  openGraph: {
    title: "Vienna VA Real Estate: The Definitive Community & Neighborhood Guide",
    description: "Comprehensive guide to Vienna VA real estate: history, Town zoning (RS-10/RS-12.5), Madison High School pyramid, W&OD Trail, neighborhoods, and buyer/seller strategies.",
    url: "https://www.homesalesfairfax.com/vienna-va-real-estate",
    siteName: "homesalesfairfax.com",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "/images/vienna.jpg",
        width: 2400,
        height: 1350,
        alt: "Vienna VA Real Estate - Definitive Community and Architectural Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vienna VA Real Estate: The Definitive Community Guide",
    description: "Comprehensive guide to Vienna VA real estate: history, Town zoning (RS-10/RS-12.5), Madison High School pyramid, W&OD Trail, neighborhoods, and buyer/seller strategies.",
    images: ["/images/vienna.jpg"],
  },
};

export default function ViennaPage() {
  const schemas = [
    // 1. Article / Report Schema
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": "https://www.homesalesfairfax.com/vienna-va-real-estate#article",
      "headline": "Vienna VA Real Estate: The Definitive Guide to History, Neighborhoods, Zoning & Community Character",
      "description": "Comprehensive guide to Vienna VA real estate: history, Town zoning (RS-10/RS-12.5), Madison High School pyramid, W&OD Trail, neighborhoods, and buyer/seller strategies.",
      "url": "https://www.homesalesfairfax.com/vienna-va-real-estate",
      "image": "https://www.homesalesfairfax.com/images/vienna.jpg",
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
      "mainEntityOfPage": "https://www.homesalesfairfax.com/vienna-va-real-estate",
      "about": [
        "Vienna, Virginia",
        "Town of Vienna real estate",
        "Fairfax County real estate",
        "Northern Virginia real estate",
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
          "name": "Vienna VA Real Estate Guide",
          "item": "https://www.homesalesfairfax.com/vienna-va-real-estate",
        },
      ],
    },
    // 3. FAQPage Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.homesalesfairfax.com/vienna-va-real-estate#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is Vienna an incorporated town or part of Fairfax County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Vienna contains both an incorporated municipality (the Town of Vienna, chartered in 1890) and unincorporated Greater Vienna within Fairfax County. Residents living inside town boundaries receive independent municipal police, public works, snow removal, and curbside leaf collection services, governed by the Vienna Town Council and Mayor, while participating in the countywide public school and library systems.",
          },
        },
        {
          "@type": "Question",
          "name": "What makes the Town of Vienna's zoning unique?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Unlike unincorporated Fairfax County, properties within town boundaries are regulated by the independent Town of Vienna Zoning Ordinance. Predominant single-family zones include RS-10 (minimum 10,000 sq ft lot), RS-12.5 (minimum 12,500 sq ft lot), and RS-16. The town enforces strict lot coverage limits (traditionally 25%), independent building height caps (maximum 35 feet), and municipal tree canopy preservation standards.",
          },
        },
        {
          "@type": "Question",
          "name": "What public high school pyramids serve Vienna?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The majority of Vienna is served by the James Madison High School pyramid in Fairfax County Public Schools (FCPS), fed by Thoreau Middle School. Northern Vienna sectors bordering Tysons and Wolf Trap feed George C. Marshall High School, celebrated for its full International Baccalaureate (IB) Diploma Programme. Qualified students can also attend Thomas Jefferson High School for Science and Technology (TJHSST).",
          },
        },
        {
          "@type": "Question",
          "name": "How does the W&OD Trail impact Vienna's community character?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Washington & Old Dominion (W&OD) Railroad Regional Park is a 45-mile paved linear trail that bisects the center of Vienna. Converted from the historic rail corridor in the 1970s, it functions as a vibrant bicycle commuting highway and recreational corridor connecting downtown Church Street, the historic red caboose, and local cafes directly eastward to Arlington and Alexandria.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the historical origin of the name Vienna?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Originally known in the 18th century as Ayr Hill (named by John Hunter in 1767 after Ayr, Scotland), the village was renamed Vienna in the 1850s. Dr. William Hendrick, a physician from Vienna, New York, purchased local property and agreed to construct a general store on the condition that the community adopt the name of his upstate New York hometown.",
          },
        },
        {
          "@type": "Question",
          "name": "Does Vienna have direct Metrorail heavy rail access?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The Vienna / Fairfax-GMU Metrorail Station serves as the western terminus of the Washington Metro Orange Line, situated along Interstate 66 at Nutley Street. The station provides direct, one-seat heavy-rail transit eastward into Rosslyn, Foggy Bottom, Metro Center, and the U.S. Capitol complex, complemented by commuter parking garages and connecting bus routes.",
          },
        },
        {
          "@type": "Question",
          "name": "What are the key differences between living inside the Town of Vienna vs. Greater Vienna?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Living inside town boundaries (ZIP 22180) provides walkability to Church Street and Maple Avenue, municipal trash and leaf collection, town police protection, and participation in town elections, subject to town real estate taxes and zoning codes. Greater Vienna (ZIPs 22181 and 22182) features larger half-acre to multi-acre parcels, wooded privacy, and Fairfax County municipal administration without town taxes.",
          },
        },
        {
          "@type": "Question",
          "name": "What are the prominent parks and cultural facilities in Vienna?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Premier facilities include Wolf Trap National Park for the Performing Arts (the nation's only national park dedicated to performing arts), Meadowlark Botanical Gardens (95 acres of ornamental gardens and the Korean Bell Garden), the Town Green amphitheater, Freeman Store and Museum, Northside Park, and Waters-Caffi Field.",
          },
        },
        {
          "@type": "Question",
          "name": "Do single-family homes in Vienna have mandatory HOAs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The vast majority of single-family homes in both the Town of Vienna and Greater Vienna have no mandatory Homeowners Association (HOA). Certain planned communities such as Shouse Village maintain active community associations supporting shared pools and lakes, while townhome developments maintain mandatory common element maintenance fees.",
          },
        },
        {
          "@type": "Question",
          "name": "How does infill redevelopment operate in Vienna?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Because raw land is fully developed, new construction in Vienna relies on architectural infill. Builders acquire older 1950s ramblers on established quarter-acre to third-acre lots and replace them with custom Craftsman, modern farmhouse, and transitional residences subject to town lot coverage and stormwater management regulations.",
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
      <ViennaClient />
    </>
  );
}
