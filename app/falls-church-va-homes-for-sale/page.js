import { FAIRFAX_LISTINGS } from "../data/listings";
import FallsChurchClient from "./FallsChurchClient";

export const metadata = {
  title: "Homes For Sale in Falls Church VA | Houses & Properties 22041-22046",
  description: "Explore active homes for sale in Falls Church, VA. Stately colonials, craftsman new builds, Falls Church City and Fairfax County schools, and private showings.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/falls-church-va-homes-for-sale",
  },
  openGraph: {
    title: "Homes For Sale in Falls Church VA | Real Estate & Luxury Houses",
    description: "Discover houses for sale in Falls Church, VA. Elena Gorbounova, Top 1% Northern Virginia Real Estate Broker.",
    url: "https://www.homesalesfairfax.com/falls-church-va-homes-for-sale",
  },
};

export default function FallsChurchHomesPage() {
  const rawListings = FAIRFAX_LISTINGS.filter(h => 
    h.city.includes("Falls Church") || h.zip === "22041" || h.neighborhood.includes("Skyline")
  );

  const fallsChurchListings = (rawListings.length > 0 ? rawListings : FAIRFAX_LISTINGS.slice(0, 3)).map(p => ({
    id: p.id,
    title: p.title,
    image: p.image,
    status: p.status,
    priceFormatted: p.priceFormatted,
    propertyType: p.propertyType,
    address: p.address,
    city: p.city,
    state: p.state,
    zip: p.zip,
    beds: p.beds,
    baths: p.baths,
    sqft: p.sqft
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    "name": "Homes For Sale in Falls Church VA",
    "description": "Active MLS listings, houses for sale, and luxury properties in Falls Church, VA.",
    "url": "https://www.homesalesfairfax.com/falls-church-va-homes-for-sale",
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
      <FallsChurchClient fallsChurchListings={fallsChurchListings} />
    </>
  );
}
