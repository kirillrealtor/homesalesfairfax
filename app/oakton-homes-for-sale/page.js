import { FAIRFAX_LISTINGS } from "../data/listings";
import PillarLandingClient from "../components/PillarLandingClient";

export const metadata = {
  title: "Houses For Sale Oakton VA | Homes For Sale in Oakton 22124",
  description: "Browse houses for sale in Oakton, VA (ZIP 22124) and homes for sale in Oakton VA. Luxury acreage estates, Oakton High School pyramid, and private broker showings.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/oakton-homes-for-sale",
  },
};

export default function OaktonHomesPage() {
  const oaktonHomes = FAIRFAX_LISTINGS
    .filter(h => h.neighborhood.includes("Oakton") || h.zip === "22124")
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
    "name": "Houses For Sale Oakton VA",
    "description": "Active luxury houses and homes for sale in Oakton, VA (ZIP 22124).",
    "url": "https://www.homesalesfairfax.com/oakton-homes-for-sale",
    "broker": {
      "@type": "RealEstateAgent",
      "name": "Elena Gorbounova",
      "telephone": "(703) 625-7888",
      "url": "https://www.homesalesfairfax.com"
    }
  };

  const sellerCard = {
    tag: "✦ Oakton Estate Sellers • Elena Gorbounova",
    title: "Planning to Sell Your Oakton Estate?",
    description: "Oakton custom homes and acre parcels command exceptional equity premiums and rapid absorption of 7 Days on Market. Discover our cinematic 4K drone marketing, private wealth syndication, and school pyramid pricing.",
    guideLink: "/contact",
    guideText: "Oakton Seller Guide →"
  };

  const insights = [
    {
      title: "Wooded Acreage & Custom Architecture",
      text: "Unlike higher-density Northern Virginia suburbs, Oakton is renowned for preserving scenic topography with one- to five-acre estate zoning. Properties feature custom architectural styles including brick Georgian colonials, stone transitionals, and modern craftsman residences with private swimming pools and circular drives."
    },
    {
      title: "Top-Ranked Oakton High School Pyramid",
      text: "Residents enjoy access to Fairfax County Public Schools' prestigious Oakton High School pyramid, known for academic excellence, AP programs, and state champion athletic teams. Proximity to Oakton Elementary and Flint Hill private academy offers premier educational flexibility."
    },
    {
      title: "Strategic Northern Virginia Commuter Access",
      text: "Oakton offers unmatched geographical positioning. Situated directly between Vienna, Reston, and Fairfax City, residents access Route 123, Interstate 66, and the Vienna / Fairfax-GMU Orange Line Metro in under 7 minutes, while Tysons Corner's world-class retail and corporate centers are only 10 minutes away."
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PillarLandingClient
        pretitle="Fairfax County Luxury Real Estate"
        title="Houses For Sale in Oakton, VA"
        leadText="Explore active homes for sale in Oakton VA (ZIP 22124). Private wooded acre lots, custom luxury manors, top-rated Oakton High School pyramid, and swift access to Tysons Corner and Vienna Metro."
        breadcrumbLabel="Oakton Houses For Sale"
        sellerCard={sellerCard}
        properties={oaktonHomes}
        insights={insights}
      />
    </>
  );
}
