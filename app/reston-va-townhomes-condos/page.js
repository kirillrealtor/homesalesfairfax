import { FAIRFAX_LISTINGS } from "../data/listings";
import RestonCondosClient from "./RestonCondosClient";

export const metadata = {
  title: "Reston VA Condos & Townhomes For Sale | Reston Town Center 20190",
  description: "Browse condos for sale in Reston, VA and townhouses in Reston & Herndon. Silver Line Metro access, Reston Town Center, Lake Anne, and private tours with Elena.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/reston-va-townhomes-condos",
  },
  openGraph: {
    title: "Reston VA Condos & Townhomes For Sale | Silver Line Metro",
    description: "Explore active condominiums and townhouses for sale in Reston & Herndon, Virginia. Top 1% Northern Virginia Real Estate Brokers.",
    url: "https://www.homesalesfairfax.com/reston-va-townhomes-condos",
  },
};

export default function RestonCondosPage() {
  const restonListings = FAIRFAX_LISTINGS
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
    "name": "Reston VA Condos & Townhomes For Sale",
    "description": "Active condominiums and townhouses for sale in Reston & Herndon, VA.",
    "url": "https://www.homesalesfairfax.com/reston-va-townhomes-condos",
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
      <RestonCondosClient restonListings={restonListings} />
    </>
  );
}
