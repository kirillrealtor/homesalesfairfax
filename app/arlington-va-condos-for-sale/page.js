import { FAIRFAX_LISTINGS } from "../data/listings";
import ArlingtonCondosClient from "./ArlingtonCondosClient";

export const metadata = {
  title: "Condos For Sale in Arlington VA | Arlington Condominiums & Real Estate",
  description: "Browse condos for sale in Arlington, VA. Rosslyn-Ballston Metro corridor condominiums, Fairlington Village, Pentagon City, and private tour bookings with Elena.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/arlington-va-condos-for-sale",
  },
  openGraph: {
    title: "Condos For Sale in Arlington VA | Real Estate & Condominiums",
    description: "Explore active condominiums for sale in Arlington, Virginia. Top 1% Northern Virginia Real Estate Broker Elena Gorbounova.",
    url: "https://www.homesalesfairfax.com/arlington-va-condos-for-sale",
  },
};

export default function ArlingtonCondosPage() {
  const rawListings = FAIRFAX_LISTINGS.filter(h => 
    h.propertyType === "Condo" || h.neighborhood.includes("Skyline")
  );

  const condoListings = (rawListings.length > 0 ? rawListings : FAIRFAX_LISTINGS.slice(0, 3)).map(p => ({
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
    "name": "Condos For Sale in Arlington VA",
    "description": "Active condominiums and townhomes for sale in Arlington, VA.",
    "url": "https://www.homesalesfairfax.com/arlington-va-condos-for-sale",
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
      <ArlingtonCondosClient condoListings={condoListings} />
    </>
  );
}
