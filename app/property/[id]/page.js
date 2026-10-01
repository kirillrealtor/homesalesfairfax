import { FAIRFAX_LISTINGS } from "../../data/listings";
import PropertyDetailClient from "./PropertyDetailClient";

export async function generateStaticParams() {
  return FAIRFAX_LISTINGS.map((p) => ({
    id: p.id,
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const property = FAIRFAX_LISTINGS.find((p) => p.id === id);

  if (!property) {
    return {
      title: "Fairfax Property | Showing Tours & Top Listings",
      description: "Explore active Fairfax County Virginia real estate listings with Elena Gorbounova and Kirill.",
      alternates: {
        canonical: "https://www.homesalesfairfax.com",
      },
    };
  }

  const cleanCity = property.city.includes("/") ? property.city.split("/")[0].trim() : property.city;
  const title = `${property.address}, ${cleanCity} VA | Homes For Sale`;
  const description = `${property.title}: ${property.beds} Bed, ${property.baths} Bath, ${property.sqft.toLocaleString()} SqFt ${property.propertyType} in ${property.neighborhood}, ${property.city} VA. Schedule a private showing tour with Elena & Kirill.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.homesalesfairfax.com/property/${property.id}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.homesalesfairfax.com/property/${property.id}`,
      siteName: "homesalesfairfax.com",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: `https://www.homesalesfairfax.com${property.image}`,
          width: 1200,
          height: 800,
          alt: `${property.title} - ${property.address}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`https://www.homesalesfairfax.com${property.image}`],
    },
  };
}

export default async function PropertyDetailPage({ params }) {
  const { id } = await params;
  const property = FAIRFAX_LISTINGS.find((p) => p.id === id) || FAIRFAX_LISTINGS[0];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SingleFamilyResidence",
    "name": property.title,
    "description": property.description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": property.address,
      "addressLocality": property.city,
      "addressRegion": property.state,
      "postalCode": property.zip,
      "addressCountry": "US"
    },
    "numberOfRooms": property.beds,
    "numberOfBedrooms": property.beds,
    "numberOfBathroomsTotal": property.baths,
    "floorSize": {
      "@type": "QuantitativeValue",
      "value": property.sqft,
      "unitCode": "FTK"
    },
    "image": `https://www.homesalesfairfax.com${property.image}`,
    "url": `https://www.homesalesfairfax.com/property/${property.id}`,
    "broker": {
      "@type": "RealEstateAgent",
      "name": "Elena Gorbounova & Kirill",
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
      <PropertyDetailClient property={property} />
    </>
  );
}
