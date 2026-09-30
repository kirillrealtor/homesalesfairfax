import { NEIGHBORHOOD_REPORTS } from "../data/neighborhoodReports";
import NeighborhoodReportView from "../components/NeighborhoodReportView";

const data = NEIGHBORHOOD_REPORTS["mosby-woods"];

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

export default function MosbyWoodsMarketPage() {
  return <NeighborhoodReportView data={data} />;
}
