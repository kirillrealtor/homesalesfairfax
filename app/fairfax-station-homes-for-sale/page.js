import { FAIRFAX_LISTINGS } from "../data/listings";
import FairfaxStationClient from "./FairfaxStationClient";

export const metadata = {
  title: "Fairfax Station VA Homes For Sale | Luxury Houses & Acreage Estates",
  description: "Browse houses for sale in Fairfax Station, VA (ZIP 22039). Luxury 5-acre estates, custom single-family homes, South County school pyramid, and private broker tours.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/fairfax-station-homes-for-sale",
  },
  openGraph: {
    title: "Fairfax Station Homes For Sale | Luxury Estates & Acre Properties",
    description: "Explore exclusive active listings and custom estates in Fairfax Station, VA. Elena Gorbounova, Top 1% Northern Virginia Broker.",
    url: "https://www.homesalesfairfax.com/fairfax-station-homes-for-sale",
  },
};

export default function FairfaxStationPage() {
  const stationListings = FAIRFAX_LISTINGS
    .filter(h => h.neighborhood.includes("Fairfax") || h.propertyType === "Single Family")
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
    "name": "Fairfax Station VA Homes For Sale",
    "description": "Active homes for sale and luxury estates in Fairfax Station, VA (ZIP 22039).",
    "url": "https://www.homesalesfairfax.com/fairfax-station-homes-for-sale",
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
      <FairfaxStationClient stationListings={stationListings} />
    </>
  );
}
