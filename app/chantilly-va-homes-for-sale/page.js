import { FAIRFAX_LISTINGS } from "../data/listings";
import ChantillyClient from "./ChantillyClient";

export const metadata = {
  title: "Chantilly VA Homes For Sale | Houses & Townhomes in 20151-20152",
  description: "Browse houses for sale in Chantilly, VA. Single-family homes, luxury townhomes, Chantilly High School pyramid, and private tour booking with Elena.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/chantilly-va-homes-for-sale",
  },
  openGraph: {
    title: "Chantilly VA Homes For Sale | Real Estate & Townhomes",
    description: "Explore active listings, single family houses, and townhomes in Chantilly, Virginia. Top 1% Northern Virginia Real Estate Brokers.",
    url: "https://www.homesalesfairfax.com/chantilly-va-homes-for-sale",
  },
};

export default function ChantillyHomesPage() {
  const chantillyListings = FAIRFAX_LISTINGS
    .filter(h => h.city.includes("Fairfax") || h.neighborhood.includes("Fair Lakes") || h.propertyType === "Townhome")
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
    "name": "Chantilly VA Homes For Sale",
    "description": "Active MLS listings, houses for sale, and townhomes in Chantilly, VA (ZIP 20151-20152).",
    "url": "https://www.homesalesfairfax.com/chantilly-va-homes-for-sale",
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
      <ChantillyClient chantillyListings={chantillyListings} />
    </>
  );
}
