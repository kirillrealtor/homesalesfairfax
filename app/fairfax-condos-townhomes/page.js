import { FAIRFAX_LISTINGS } from "../data/listings";
import FairfaxCondosClient from "./FairfaxCondosClient";

export const metadata = {
  title: "Townhomes For Sale in Fairfax VA & Condos | 22030-22033 Townhouses",
  description: "Browse townhomes for sale in Fairfax VA and luxury condos. Metro-accessible townhouses, Dunn Loring, Fair Lakes, and Mosaic District real estate with Elena.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/fairfax-condos-townhomes",
  },
  openGraph: {
    title: "Townhomes For Sale in Fairfax VA & Condos | Northern Virginia",
    description: "Explore active townhomes for sale in Fairfax VA and luxury condominiums across Fairfax County. RE/MAX Allegiance Top 1% Producers.",
    url: "https://www.homesalesfairfax.com/fairfax-condos-townhomes",
  },
};

export default function FairfaxCondosPage() {
  const condoListings = FAIRFAX_LISTINGS
    .filter(h => h.propertyType === "Condo" || h.propertyType === "Townhome")
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
    "name": "Fairfax Condos For Sale & Townhomes",
    "description": "Active condominiums and townhomes for sale in Fairfax County, VA.",
    "url": "https://www.homesalesfairfax.com/fairfax-condos-townhomes",
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
      <FairfaxCondosClient condoListings={condoListings} />
    </>
  );
}
