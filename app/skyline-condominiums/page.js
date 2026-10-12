import SkylineCondominiumsClient from "./SkylineCondominiumsClient";

export const metadata = {
  title: "Skyline Condominiums - Elena Gorbounova - Your True Skyline Expert",
  description: "Residential real estate agent focused on the Skyline Subdivision located in Falls Church, Northern Virginia. Skyline Plaza, Skyline Square, and Skyline House condos.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/skyline-condominiums",
  },
  openGraph: {
    title: "Skyline Condominiums Falls Church VA | Skyline Plaza, Square & House",
    description: "Explore Skyline Condominiums in Falls Church, VA. 5 miles from the Pentagon, 24/7 concierge, pools, garage parking, and active condominium inventory with top specialist Elena Gorbounova.",
    url: "https://www.homesalesfairfax.com/skyline-condominiums",
  },
};

export default function SkylineCondominiumsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    "name": "Skyline Condominiums Falls Church VA",
    "description": "Active condominiums and residential community guide for Skyline Subdivision in Falls Church, Virginia.",
    "url": "https://www.homesalesfairfax.com/skyline-condominiums",
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
      <SkylineCondominiumsClient />
    </>
  );
}
