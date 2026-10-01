import { NEIGHBORHOOD_REPORTS } from "../data/neighborhoodReports";
import NeighborhoodReportView from "../components/NeighborhoodReportView";

const data = NEIGHBORHOOD_REPORTS["mantua"];

export const metadata = {
  title: data.title,
  description: data.metaDescription,
  alternates: {
    canonical: `https://www.homesalesfairfax.com/${data.slug}`,
  },
  openGraph: {
    title: data.title,
    description: data.metaDescription,
    url: `https://www.homesalesfairfax.com/${data.slug}`,
    siteName: "homesalesfairfax.com",
    locale: "en_US",
    type: "website",
  },
};

export default function MantuaRealEstatePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Report",
    "name": data.title,
    "description": data.metaDescription,
    "url": `https://www.homesalesfairfax.com/${data.slug}`,
    "publisher": {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <NeighborhoodReportView data={data} />
    </>
  );
}
