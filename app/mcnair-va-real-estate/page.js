import McNairClient from "./McNairClient";

export const metadata = {
  title: "McNair VA Real Estate: Innovation Center Metro & Modern Homes",
  description: "Exhaustive guide to McNair VA real estate: 2.1 sq mi CDP, Innovation Center Silver Line Metro, McNair Farms, McNair Upper Elementary & Dulles Tech Corridor.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/mcnair-va-real-estate",
  },
  openGraph: {
    title: "McNair VA Real Estate: Innovation Center Metro & Modern Homes",
    description: "Exhaustive guide to McNair VA real estate: 2.1 sq mi CDP, Innovation Center Silver Line Metro, McNair Farms, McNair Upper Elementary & Dulles Tech Corridor.",
    url: "https://www.homesalesfairfax.com/mcnair-va-real-estate",
    siteName: "homesalesfairfax.com",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "/images/County/McNair.jpg",
        width: 2048,
        height: 1152,
        alt: "McNair VA Real Estate - Innovation Center Silver Line Metro, Townhomes & Tech Corridor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "McNair VA Real Estate: Innovation Center Metro & Modern Homes",
    description: "Exhaustive guide to McNair VA real estate: 2.1 sq mi CDP, Innovation Center Silver Line Metro, McNair Farms, McNair Upper Elementary & Dulles Tech Corridor.",
    images: ["/images/County/McNair.jpg"],
  },
};

export default function McNairPage() {
  const schemas = [
    // 1. Article / Research Monograph Schema
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": "https://www.homesalesfairfax.com/mcnair-va-real-estate#article",
      "headline": "McNair, VA Real Estate: The Definitive Guide to Innovation Center Silver Line Metro, McNair Farms, Executive Townhomes & Tech Corridor Living",
      "description": "Comprehensive architectural monograph & real estate guide to McNair VA: 2.1 square-mile Census-Designated Place, Innovation Center Metrorail Station (Silver Line), McNair Farms master-planned amenities, luxury multi-level townhomes, McNair Elementary and Upper campuses, and immediate Dulles Technology Corridor connectivity.",
      "url": "https://www.homesalesfairfax.com/mcnair-va-real-estate",
      "image": "https://www.homesalesfairfax.com/images/County/McNair.jpg",
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
      "mainEntityOfPage": "https://www.homesalesfairfax.com/mcnair-va-real-estate",
      "about": [
        "McNair, Virginia",
        "McNair CDP",
        "Innovation Center Metrorail Station",
        "McNair Farms",
        "McNair Elementary School",
        "McNair Upper Elementary School",
        "Rachel Carson Middle School",
        "Westfield High School",
        "Fairfax County real estate",
        "Dulles Technology Corridor",
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
          "item": "https://www.homesalesfairfax.com",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Fairfax County Real Estate",
          "item": "https://www.homesalesfairfax.com/fairfax-county-history-real-estate-landscape",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "McNair, VA Real Estate & Community Guide",
          "item": "https://www.homesalesfairfax.com/mcnair-va-real-estate",
        },
      ],
    },
    // 3. FAQPage Schema (10 Comprehensive Encyclopedic Questions)
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.homesalesfairfax.com/mcnair-va-real-estate#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are the geographic boundaries and spatial dimensions of McNair, Virginia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The McNair Census-Designated Place (CDP) encompasses approximately 2.1 square miles in western Fairfax County (ZIP code 20171, Dranesville and Hunter Mill Districts). It is bounded by the Dulles Toll Road (Route 267) and the Town of Herndon to the north, Centreville Road to the east, Frying Pan Road and Floris to the south, and Route 28 (Sully Road) and Dulles International Airport to the west.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the historical background of McNair?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "McNair derives its name from the historic McNair family and their 19th- and early 20th-century agricultural farmsteads along Horsepen Run. As the Dulles Technology Corridor expanded in the late 1990s, the farmland was master-planned into dynamic transit-oriented residential communities, corporate campuses, and neighborhood parks.",
          },
        },
        {
          "@type": "Question",
          "name": "What commuter transit and Metrorail access does McNair provide?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "McNair directly hosts the Innovation Center Metrorail Station on the Silver Line, providing rapid, one-seat passenger rail travel directly into Washington Dulles International Airport, Tysons, Reston, Arlington, and downtown Washington, D.C. The community also features instant access to the Dulles Toll Road (Route 267), Route 28, and Fairfax County Parkway.",
          },
        },
        {
          "@type": "Question",
          "name": "What architectural styles and housing typologies predominate across McNair?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "McNair offers contemporary executive living developed primarily from 1995 to the present. Dominant housing includes spacious three- and four-level brick-front garage townhomes, upscale modern condominiums, elevator flats, and master-planned detached single-family colonials within enclaves such as McNair Farms, Woodland Park, and Discovery Square.",
          },
        },
        {
          "@type": "Question",
          "name": "What community amenities are provided within McNair Farms?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The McNair Farms master association provides a central community center, a 25-meter outdoor swimming pool with children's wading area, lighted tennis courts, basketball courts, multiple neighborhood playgrounds, and scenic walking trails connecting through Horsepen Run greenways.",
          },
        },
        {
          "@type": "Question",
          "name": "Which Fairfax County Public Schools serve McNair residents?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "McNair is served by a unique dual-campus elementary model: McNair Elementary School (grades Pre-K through 2) and McNair Upper Elementary School (grades 3 through 6), both equipped with advanced STEAM learning laboratories. Students advance to the highly rated Rachel Carson Middle School and Westfield High School (or Herndon High School depending on neighborhood boundaries).",
          },
        },
        {
          "@type": "Question",
          "name": "What commercial and dining centers are located in McNair?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Residents enjoy Woodland Park Crossing and the Village Center at Dulles, featuring grocery anchors, casual bistros, international cafes, fitness gyms, banking branches, and medical offices, alongside the vibrant mixed-use dining and retail expanding around the Innovation Center Metro plaza.",
          },
        },
        {
          "@type": "Question",
          "name": "What parks and outdoor recreational spaces exist in and around McNair?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "McNair is home to Arrowbrook Centre Park, offering an outdoor performance amphitheater, soccer fields, tennis/pickleball courts, and a dog park. Residents also enjoy immediate access to Frying Pan Farm Park directly to the south and the 45-mile paved W&OD Trail just north in Herndon.",
          },
        },
        {
          "@type": "Question",
          "name": "What is McNair's proximity to major tech and aerospace employers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "McNair sits within the heart of the Dulles Cloud and Technology Corridor. Residents are located within five minutes of major regional technology campuses for Amazon Web Services (AWS), Microsoft, Cisco Systems, Boeing, Peraton, and major Northern Virginia data center campuses.",
          },
        },
        {
          "@type": "Question",
          "name": "How does Fairfax County assess property values across McNair?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pursuant to Code of Virginia § 58.1-3201, all real property is assessed annually at 100 percent of true fair market value. The Fairfax County Department of Tax Administration (DTA) employs computerized mass appraisal equalizations based on verified arm's-length sales of comparable townhomes, condominiums, and single-family homes within McNair's specific neighborhood codes.",
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
      <McNairClient />
    </>
  );
}
