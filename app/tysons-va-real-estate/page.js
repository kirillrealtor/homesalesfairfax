import TysonsClient from "./TysonsClient";

export const metadata = {
  title: "Tysons, VA Real Estate: Condos, Homes & Metro Guide",
  description: "Explore the Tysons VA real estate market: history, Silver Line Metro, The Boro, luxury condos, neighborhoods, zoning, and buyer and seller guidance.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/tysons-va-real-estate",
  },
  openGraph: {
    title: "Tysons, VA Real Estate: The Complete Guide to Homes, Condos, and America’s Next Great City",
    description: "Explore the Tysons VA real estate market: history, Silver Line Metro, The Boro, luxury condos, neighborhoods, zoning, and buyer and seller guidance.",
    url: "https://www.homesalesfairfax.com/tysons-va-real-estate",
    siteName: "homesalesfairfax.com",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "/images/tysons.jpg",
        width: 2400,
        height: 1792,
        alt: "Tysons, VA Real Estate - Guide to Homes, Condos, and America’s Next Great City"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tysons, VA Real Estate: Condos, Homes & Metro Guide",
    description: "Explore the Tysons VA real estate market: history, Silver Line Metro, The Boro, luxury condos, neighborhoods, zoning, and buyer and seller guidance.",
    images: ["/images/tysons.jpg"],
  }
};

export default function TysonsPage() {
  const schemas = [
    // 1. Article / Report Schema
    {
      "@context": "https://schema.org",
      "@type": "Report",
      "@id": "https://www.homesalesfairfax.com/tysons-va-real-estate#report",
      "headline": "Tysons, VA Real Estate: The Complete Guide to Homes, Condos, and America’s Next Great City",
      "description": "Explore the Tysons VA real estate market: history, Silver Line Metro, The Boro, luxury condos, neighborhoods, zoning, and buyer and seller guidance.",
      "url": "https://www.homesalesfairfax.com/tysons-va-real-estate",
      "image": "https://www.homesalesfairfax.com/images/tysons.jpg",
      "inLanguage": "en-US",
      "author": {
        "@type": "Person",
        "name": "Elena Gorbounova",
        "jobTitle": "Associate Broker, REALTOR®, Master Certified Negotiation Expert",
        "url": "https://www.homesalesfairfax.com/about"
      },
      "publisher": {
        "@type": "Organization",
        "name": "homesalesfairfax.com",
        "url": "https://www.homesalesfairfax.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.homesalesfairfax.com/images/logo-ysc-remax.png"
        }
      },
      "about": [
        {
          "@type": "Place",
          "name": "Tysons, Fairfax County, Virginia",
          "address": {
            "@type": "PostalAddress",
            "addressRegion": "VA",
            "addressCountry": "US"
          }
        }
      ]
    },
    // 2. Breadcrumbs
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.homesalesfairfax.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Tysons VA Real Estate Guide 2026",
          "item": "https://www.homesalesfairfax.com/tysons-va-real-estate"
        }
      ]
    },
    // 3. FAQPage Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.homesalesfairfax.com/tysons-va-real-estate#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is Tysons VA a good place to invest?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tysons has several structural demand drivers: a Silver Line Metro hub with direct links to Washington and Dulles Airport, one of the largest employment centers in the Mid-Atlantic, a county plan that targets significant residential growth, and a diversified economy with government, technology, finance, and professional-services employers. Risks include construction disruption during redevelopment, office-market restructuring, and differences in building quality across eras. Investors should evaluate each building's age, association governance, and proximity to the station on its own merits."
          }
        },
        {
          "@type": "Question",
          "name": "What types of homes are for sale in Tysons Corner?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Homes for sale in Tysons Corner are primarily high-rise and mid-rise condominiums, new-construction townhomes in mixed-use districts such as The Boro, and a smaller number of older condominium communities in the eastern and north-central areas. Detached single-family homes are found in the surrounding neighborhoods of McLean, Vienna, and Falls Church rather than in the Tysons core."
          }
        },
        {
          "@type": "Question",
          "name": "What do condo associations in Tysons typically provide, and what should buyers review?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tysons condominium associations typically manage common elements, building systems, and shared amenities such as fitness centers, pools, lounges, concierge service, and parking structures. Before buying, review the governing documents, reserve study, meeting minutes, and resale disclosure package, and ask whether any special projects are planned. Older buildings warrant extra attention to the condition of major systems."
          }
        },
        {
          "@type": "Question",
          "name": "Is Tysons walkable, and how does the Silver Line Metro affect daily life?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Walkability is strongest within a short distance of the four Metro stations and around The Boro, Capital One Center, and the mall districts. The Silver Line makes it practical to commute to Washington, reach Dulles Airport, and travel to Reston and Loudoun County without driving. Walkability continues to improve as the new street grid is built."
          }
        },
        {
          "@type": "Question",
          "name": "What are the main differences between Tysons Central and the East Side?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tysons Central has the tallest buildings, the strongest retail and dining presence, and the newest luxury high-rise communities. The East Side and North Central area near the McLean station has a more established, lower-rise character, with older condominium communities, more landscaped grounds, and a quieter setting. The right choice depends on whether a buyer prioritizes urban amenities and newer construction or a calmer environment and larger floor plans."
          }
        }
      ]
    }
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
      <TysonsClient />
    </>
  );
}
