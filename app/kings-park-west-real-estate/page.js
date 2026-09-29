import { NEIGHBORHOOD_REPORTS } from "../data/neighborhoodReports";
import NeighborhoodReportView from "../components/NeighborhoodReportView";

const data = NEIGHBORHOOD_REPORTS["kings-park-west"];

export const metadata = {
  title: data.title,
  description: data.metaDescription,
  alternates: {
    canonical: `https://homesalesfairfax.com/${data.slug}`,
  },
  openGraph: {
    title: data.title,
    description: data.metaDescription,
    url: `https://homesalesfairfax.com/${data.slug}`,
    siteName: "homesalesfairfax.com",
    locale: "en_US",
    type: "website",
  },
};

export default function KingsParkWestPage() {
  return <NeighborhoodReportView data={data} />;
}
