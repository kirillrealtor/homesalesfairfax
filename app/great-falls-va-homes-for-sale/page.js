import { FAIRFAX_LISTINGS } from "../data/listings";
import GreatFallsClient from "./GreatFallsClient";

export const metadata = {
  title: "Great Falls VA Luxury Homes For Sale | 22066 Real Estate & Estates",
  description: "Browse luxury homes for sale in Great Falls, VA (ZIP 22066). Custom acreage manors, Langley High School pyramid, Riverbend Park, and private showings with Elena.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/great-falls-va-homes-for-sale",
  },
  openGraph: {
    title: "Great Falls VA Luxury Homes For Sale | Multi-Acre Estates",
    description: "Exclusive luxury estates and houses for sale in Great Falls, Virginia. Elena Gorbounova, RE/MAX Allegiance Top 1% Producer.",
    url: "https://www.homesalesfairfax.com/great-falls-va-homes-for-sale",
  },
};

export default function GreatFallsHomesPage() {
  const luxuryListings = FAIRFAX_LISTINGS
    .filter(h => h.neighborhood.includes("Oakton") || h.propertyType === "Single Family")
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
    "name": "Great Falls VA Luxury Homes For Sale",
    "description": "Active luxury estates and acreage homes for sale in Great Falls, VA (ZIP 22066).",
    "url": "https://www.homesalesfairfax.com/great-falls-va-homes-for-sale",
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
      <GreatFallsClient luxuryListings={luxuryListings} />
    </>
  );
}
