import McleanClient from "./McleanClient";

export const metadata = {
  title: "McLean VA Real Estate Market: The Definitive Community & Neighborhood Guide",
  description: "Comprehensive guide to McLean VA real estate: history, zoning, school pyramids, neighborhood directory, transportation corridors, and buyer and seller strategies.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/mclean-va-real-estate-market",
  },
  openGraph: {
    title: "McLean VA Real Estate Market: The Definitive Community & Neighborhood Guide",
    description: "Comprehensive guide to McLean VA real estate: history, zoning, school pyramids, neighborhood directory, transportation corridors, and buyer and seller strategies.",
    url: "https://www.homesalesfairfax.com/mclean-va-real-estate-market",
    siteName: "homesalesfairfax.com",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "/images/Mcleancounty.jpg",
        width: 2400,
        height: 1792,
        alt: "McLean VA Real Estate - Definitive Community & Architectural Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "McLean VA Real Estate Market: The Definitive Community Guide",
    description: "Comprehensive guide to McLean VA real estate: history, zoning, school pyramids, neighborhood directory, transportation corridors, and buyer and seller strategies.",
    images: ["/images/Mcleancounty.jpg"],
  },
};

export default function McleanPage() {
  const schemas = [
    // 1. Article / Report Schema
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": "https://www.homesalesfairfax.com/mclean-va-real-estate-market#article",
      "headline": "McLean VA Real Estate Market: The Definitive Guide to Trends, Neighborhoods, Schools & Outlook",
      "description": "Comprehensive guide to McLean VA real estate: history, zoning, school pyramids, neighborhood directory, transportation corridors, and buyer and seller strategies.",
      "url": "https://www.homesalesfairfax.com/mclean-va-real-estate-market",
      "image": "https://www.homesalesfairfax.com/images/Mcleancounty.jpg",
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
      "mainEntityOfPage": "https://www.homesalesfairfax.com/mclean-va-real-estate-market",
      "about": [
        "McLean, Virginia",
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
          "name": "McLean VA Real Estate Guide",
          "item": "https://www.homesalesfairfax.com/mclean-va-real-estate-market",
        },
      ],
    },
    // 3. FAQPage Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.homesalesfairfax.com/mclean-va-real-estate-market#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is McLean an incorporated city or town?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. McLean is an unincorporated community and Census-Designated Place (CDP) within Fairfax County, Virginia. Municipal services—including police, fire and rescue, public schools, road maintenance, and zoning enforcement—are administered directly by Fairfax County under the Dranesville Magisterial District.",
          },
        },
        {
          "@type": "Question",
          "name": "Where does the name McLean originate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The community was named in 1906 in honor of John Roll McLean, former owner and publisher of The Washington Post. In 1902, McLean and U.S. Senator Stephen B. Elkins chartered the Great Falls and Old Dominion Railroad, an electric passenger trolley line. The depot built at the intersection of Chain Bridge Road was named McLean, establishing the modern town's name.",
          },
        },
        {
          "@type": "Question",
          "name": "What public high schools serve McLean?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "McLean is served by two public high schools in Fairfax County Public Schools: Langley High School (located on Georgetown Pike) and McLean High School (located on Davidson Road). Both consistently rank among the top public high schools in Virginia, with over 80% Advanced Placement (AP) participation and 97%+ college graduation rates.",
          },
        },
        {
          "@type": "Question",
          "name": "Does McLean have access to the Metrorail system?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The McLean Metrorail Station is located on the Washington Metro Silver Line at the intersection of Route 123 (Dolley Madison Blvd) and the Dulles Toll Road. The station provides direct, one-seat rail transit eastward into downtown Washington and westward to Reston Town Center, Washington Dulles International Airport, and Ashburn.",
          },
        },
        {
          "@type": "Question",
          "name": "How are real estate taxes structured in McLean?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Real estate taxes in McLean are assessed annually at 100% of fair market value by the Fairfax County Department of Tax Administration. The tax bill consists of the county base real estate tax rate, the countywide Stormwater Management Service District tax, pest control levy, and for eligible parcels, the McLean Community Center Small District 1 tax.",
          },
        },
        {
          "@type": "Question",
          "name": "Is the CIA Headquarters located in McLean?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The George Bush Center for Intelligence, the global headquarters of the Central Intelligence Agency (CIA), is located in the Langley sector of McLean along Route 123 and the George Washington Memorial Parkway on a secluded 258-acre forested campus opened in 1961.",
          },
        },
        {
          "@type": "Question",
          "name": "Do homes in McLean have mandatory Homeowners Associations (HOAs)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most single-family detached homes in McLean do not have mandatory HOAs. Established neighborhoods such as Salona Village, Chesterbrook Woods, and Franklin Park have voluntary citizens' associations with modest annual dues. Mandatory HOAs are primarily found in gated luxury enclaves (such as Evans Farm) and condominium communities.",
          },
        },
        {
          "@type": "Question",
          "name": "Why are teardowns and infill building so common in McLean?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Because McLean has virtually no undeveloped farmland remaining, new residential construction relies on architectural infill. In established neighborhoods, underlying land value accounts for a significant portion of an older home's total value, making it economically advantageous for builders to acquire older ramblers and replace them with custom residences.",
          },
        },
        {
          "@type": "Question",
          "name": "What are the best parks and recreational facilities in McLean?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Key parklands include the 384-acre Scotts Run Nature Preserve (featuring hiking trails and a waterfall on the Potomac River), Clemyjontri Park (an all-abilities playground), McLean Central Park (walking trails, lit tennis courts, and an open-air amphitheater), and nearby Great Falls Park (overlooks of the Potomac River gorge and historic canal ruins).",
          },
        },
        {
          "@type": "Question",
          "name": "What is the historical significance of Salona?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Salona is a historic brick plantation manor house in McLean built around 1801. During the War of 1812, after British troops burned the White House in August 1814, President James Madison sought refuge and established his temporary wartime command post at Salona. Approximately 52 acres of the estate are preserved under permanent conservation easements facing Route 123.",
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
      <McleanClient />
    </>
  );
}
