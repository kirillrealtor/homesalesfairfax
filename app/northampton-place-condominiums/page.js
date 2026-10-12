import NorthamptonPlaceClient from "./NorthamptonPlaceClient";

export const metadata = {
  title: "Northampton Place Condominiums - Elena Gorbounova - Your True Skyline Expert",
  description: "Northampton Place is a distinguished 16-story, 275-unit luxury condominium residence in Alexandria, Virginia with 24-hour concierge, pool, and garage.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/northampton-place-condominiums",
  },
  openGraph: {
    title: "Northampton Place Condominiums Alexandria VA | 16-Story Luxury High-Rise",
    description: "Explore Northampton Place Condominiums in Alexandria, VA. 16 stories, 275 units, heated pool, 24-hour concierge, floorplans, and active inventory with Elena Gorbounova.",
    url: "https://www.homesalesfairfax.com/northampton-place-condominiums",
  },
};

export default function NorthamptonPlacePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    "name": "Northampton Place Condominiums Alexandria VA",
    "description": "Luxury high-rise condominium community guide for Northampton Place in Alexandria, Virginia.",
    "url": "https://www.homesalesfairfax.com/northampton-place-condominiums",
    "broker": {
      "@type": "RealEstateAgent",
      "name": "Elena Gorbounova",
      "telephone": "(703) 625-7888",
      "url": "https://www.homesalesfairfax.com"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NorthamptonPlaceClient />
    </>
  );
}
