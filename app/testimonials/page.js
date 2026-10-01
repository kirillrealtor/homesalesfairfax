import TestimonialsClient from "./TestimonialsClient";
import { testimonials } from "../data/testimonials";

export const metadata = {
  title: "Elena Gorbounova Reviews | Best Realtor in Fairfax VA Testimonials",
  description: "Read 325+ verified five-star client testimonials and reviews for top real estate agent Elena Gorbounova across Fairfax County and Northern Virginia.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/testimonials",
  },
  openGraph: {
    title: "325+ Verified Real Estate Client Reviews | Elena Gorbounova",
    description: "Authentic seller and buyer reviews across Fairfax County and Northern Virginia.",
    url: "https://www.homesalesfairfax.com/testimonials",
    siteName: "homesalesfairfax.com",
    locale: "en_US",
    type: "website",
  }
};

export default function TestimonialsPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Elena Gorbounova - RE/MAX Allegiance",
    "image": "https://www.homesalesfairfax.com/images/elena-portrait.jpg",
    "telephone": "+17036257888",
    "email": "ElenaYSC@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "5100 Leesburg Pike, Suite 200",
      "addressLocality": "Alexandria",
      "addressRegion": "VA",
      "postalCode": "22302",
      "addressCountry": "US"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": testimonials.length.toString(),
      "reviewCount": testimonials.length.toString()
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <TestimonialsClient />
    </>
  );
}
