import HomeClient from "./HomeClient";

export const metadata = {
  title: "Fairfax VA House For Sale | Single Family Homes & MLS Listings",
  description: "Browse single family homes for sale in Fairfax VA and houses for sale across Fairfax County directly from Bright MLS. Private showings and seller consultations with top Fairfax real estate agents Elena Gorbounova.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com",
  },
  openGraph: {
    title: "Fairfax VA House For Sale | Single Family Homes & MLS Listings",
    description: "Active Bright MLS real estate feed for Fairfax County, VA. Book private tours and schedule confidential seller CMA consultations with Elena Gorbounova.",
    url: "https://www.homesalesfairfax.com",
    siteName: "homesalesfairfax.com",
    images: [
      {
        url: "/images/hero-estate.jpg",
        width: 1200,
        height: 630,
        alt: "Houses For Sale in Fairfax Virginia"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fairfax VA House For Sale | Single Family Homes & MLS Listings",
    description: "Browse single family homes and active listings in Fairfax County, VA with top real estate agents Elena Gorbounova.",
    images: ["/images/hero-estate.jpg"],
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.homesalesfairfax.com/#website",
        "url": "https://www.homesalesfairfax.com",
        "name": "HomeSalesFairfax.com",
        "description": "Fairfax VA House For Sale and Luxury Real Estate Portal",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.homesalesfairfax.com/?search={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "RealEstateAgent",
        "@id": "https://www.homesalesfairfax.com/#realestateagent",
        "name": "Elena Gorbounova - RE/MAX Allegiance",
        "url": "https://www.homesalesfairfax.com",
        "telephone": "+1-703-625-7888",
        "email": "ElenaYSC@gmail.com",
        "priceRange": "$$$$",
        "image": "https://www.homesalesfairfax.com/images/hero-estate.jpg",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "5100 Leesburg Pike, Suite 200",
          "addressLocality": "Alexandria",
          "addressRegion": "VA",
          "postalCode": "22302",
          "addressCountry": "US"
        },
        "areaServed": [
          "Fairfax County, VA",
          "City of Fairfax, VA",
          "Fairfax Station, VA",
          "Oakton, VA",
          "Burke, VA",
          "Great Falls, VA",
          "Chantilly, VA",
          "Falls Church, VA",
          "Springfield, VA",
          "McLean, VA",
          "Vienna, VA"
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient />
    </>
  );
}
