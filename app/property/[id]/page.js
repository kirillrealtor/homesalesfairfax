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
      title: "Fairfax VA Property | Showing Tours & Top Producer Listings",
      description: "Explore active Fairfax County Virginia real estate listings with Elena Gorbounova and Kirill.",
      alternates: {
        canonical: "https://www.homesalesfairfax.com",
      },
    };
  }

  const title = `${property.address}, ${property.city}, VA ${property.zip} | ${property.neighborhood} Homes For Sale`;
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

  return <PropertyDetailClient property={property} />;
}
