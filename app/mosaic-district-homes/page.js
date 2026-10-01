import { FAIRFAX_LISTINGS } from "../data/listings";
import MosaicDistrictClient from "./MosaicDistrictClient";

export const metadata = {
  title: "Mosaic District Condos & Townhomes | Merrifield Fairfax VA 22031",
  description: "Browse luxury townhomes and condos for sale in Mosaic District, Merrifield VA (ZIP 22031). Walk to Dunn Loring Metro, Angelika Film Center, and private showings.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/mosaic-district-homes",
  },
  openGraph: {
    title: "Mosaic District Condos & Townhomes | Merrifield Fairfax VA",
    description: "Browse luxury brownstones and condominiums in Mosaic District, Fairfax VA with Elena Gorbounova.",
    url: "https://www.homesalesfairfax.com/mosaic-district-homes",
  }
};

export default function MosaicDistrictPage() {
  const mosaicHomes = FAIRFAX_LISTINGS
    .filter(h => h.neighborhood.includes("Mosaic") || h.propertyType === "Townhome")
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
    "name": "Mosaic District Condos & Townhomes",
    "description": "Active townhomes and condominiums for sale in Mosaic District, Merrifield, Fairfax VA (ZIP 22031).",
    "url": "https://www.homesalesfairfax.com/mosaic-district-homes",
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
      <MosaicDistrictClient mosaicHomes={mosaicHomes} />
    </>
  );
}
