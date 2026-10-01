import { FAIRFAX_LISTINGS } from "../data/listings";
import AlexandriaTownhomesClient from "./AlexandriaTownhomesClient";

export const metadata = {
  title: "Alexandria Townhomes For Sale | Condos & Real Estate Alexandria VA",
  description: "Browse Alexandria townhomes for sale and luxury condominiums. Explore Old Town rowhomes, Porto Vecchio condominiums, and West End townhouses with Elena.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/alexandria-va-townhomes-for-sale",
  },
  openGraph: {
    title: "Alexandria Townhomes For Sale | Alexandria VA Condos & Townhouses",
    description: "Find your ideal Alexandria townhome or waterfront condo. Settled comps, Old Town historic rowhomes, and expert representation with top producer Elena Gorbounova.",
    url: "https://www.homesalesfairfax.com/alexandria-va-townhomes-for-sale",
  },
};

export default function AlexandriaTownhomesPage() {
  const rawListings = FAIRFAX_LISTINGS.filter(h => 
    h.propertyType === "Townhome" || h.propertyType === "Condo" || h.neighborhood.includes("Skyline") || h.neighborhood.includes("Northampton")
  );

  const alexandriaListings = (rawListings.length > 0 ? rawListings : FAIRFAX_LISTINGS.slice(0, 3)).map(p => ({
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
    "name": "Alexandria Townhomes For Sale | Condos & Real Estate",
    "description": "Active townhomes and condominiums for sale in Alexandria, VA.",
    "url": "https://www.homesalesfairfax.com/alexandria-va-townhomes-for-sale",
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
      <AlexandriaTownhomesClient alexandriaListings={alexandriaListings} />
    </>
  );
}
