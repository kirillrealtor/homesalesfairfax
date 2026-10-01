import { FAIRFAX_LISTINGS } from "../data/listings";
import SpringfieldClient from "./SpringfieldClient";

export const metadata = {
  title: "Homes For Sale in Springfield VA | Buy House & Townhomes 22150-22153",
  description: "Search active homes for sale in Springfield, VA. Browse single-family houses, townhomes, West Springfield school pyramids, and schedule private tours with Elena.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/springfield-va-homes-for-sale",
  },
  openGraph: {
    title: "Homes For Sale in Springfield VA | Real Estate & Townhomes",
    description: "Find your dream home or buy a house in Springfield, VA. Top-rated West Springfield High School pyramid, metro access, and local market analysis.",
    url: "https://www.homesalesfairfax.com/springfield-va-homes-for-sale",
  },
};

export default function SpringfieldHomesPage() {
  const springfieldListings = FAIRFAX_LISTINGS
    .filter(h => h.city.includes("Fairfax") || h.neighborhood.includes("Burke") || h.propertyType === "Townhome")
    .map(p => ({
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
    "name": "Homes For Sale in Springfield VA",
    "description": "Active homes for sale, townhomes, and houses in Springfield, VA (ZIP 22150-22153).",
    "url": "https://www.homesalesfairfax.com/springfield-va-homes-for-sale",
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
      <SpringfieldClient springfieldListings={springfieldListings} />
    </>
  );
}
