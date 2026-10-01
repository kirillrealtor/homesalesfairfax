import { FAIRFAX_LISTINGS } from "../data/listings";
import PillarLandingClient from "../components/PillarLandingClient";

export const metadata = {
  title: "Burke VA Homes For Sale | Houses & Real Estate in 22015",
  description: "Browse active homes for sale in Burke, VA (ZIP 22015). Single-family houses, townhomes, Lake Braddock school pyramid, and Burke Centre VRE commuter access.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/burke-va-homes-for-sale",
  },
  openGraph: {
    title: "Burke VA Homes For Sale | Houses & Real Estate in 22015",
    description: "Browse single family homes and townhomes in Burke, VA with top Fairfax real estate agent Elena Gorbounova.",
    url: "https://www.homesalesfairfax.com/burke-va-homes-for-sale",
  }
};

export default function BurkeHomesPage() {
  const burkeHomes = FAIRFAX_LISTINGS
    .filter(h => h.neighborhood.includes("Burke") || h.zip === "22015")
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
    "name": "Burke VA Homes For Sale",
    "description": "Active single-family homes and townhomes for sale in Burke, VA (ZIP 22015).",
    "url": "https://www.homesalesfairfax.com/burke-va-homes-for-sale",
    "broker": {
      "@type": "RealEstateAgent",
      "name": "Elena Gorbounova",
      "telephone": "(703) 625-7888",
      "url": "https://www.homesalesfairfax.com"
    }
  };

  const sellerCard = {
    tag: "✦ Burke County Sellers • Elena Gorbounova",
    title: "Thinking of Selling Your Burke Home?",
    description: "Burke homes currently average 6 Days on Market and sell for 102.4% of list price. Discover our 30-day listing plan and view verified settled comps in the Burke Centre Conservancy.",
    guideLink: "/contact",
    guideText: "Burke Seller Guide →"
  };

  const insights = [
    {
      title: "Lake Braddock & Robinson Secondary Pyramids",
      text: "Burke is famed for its nationally acclaimed secondary school pyramids. Both Lake Braddock and Robinson Secondary feature comprehensive grades 7-12 campuses with stellar advanced academics, varsity athletics, and high college matriculation rates that drive steady neighborhood real estate demand."
    },
    {
      title: "Burke Centre Conservancy & Outdoor Recreation",
      text: "Spanning 1,700 planned acres across five distinct sub-neighborhoods (The Commons, The Landings, The Oaks, The Ponds, and The Woods), Burke offers five community centers, six swimming pools, tennis courts, and interconnected paved paths winding around Lake Barton and Burke Lake Park."
    },
    {
      title: "Burke Centre VRE Commuter Rail Access",
      text: "Commuters benefit from the dedicated Burke Centre Virginia Railway Express (VRE) station along Roberts Parkway, offering comfortable, stress-free direct rail transit into Alexandria, Crystal City, the Pentagon, and Washington D.C.'s L'Enfant Plaza and Union Station."
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PillarLandingClient
        pretitle="Fairfax County Communities"
        title="Burke, VA Homes For Sale"
        leadText="Tree-lined streets, Lake Braddock park trails, and easy commuter rail access."
        breadcrumbLabel="Burke, VA Homes"
        sellerCard={sellerCard}
        properties={burkeHomes}
        insights={insights}
      />
    </>
  );
}
