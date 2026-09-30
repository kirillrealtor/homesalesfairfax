import AboutPage from "../about/page";

export const metadata = {
  title: "Elena Gorbounova, LL.M. | Top 1% Northern Virginia Realtor",
  description: "Learn about Elena Gorbounova, Associate Broker at RE/MAX Allegiance. 21+ years experience, Top 1% nationwide, MCNE® negotiation expert & legal scholar.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/about-elena",
  },
  openGraph: {
    title: "Elena Gorbounova, LL.M. | Top 1% Northern Virginia Realtor",
    description: "Legal precision, master negotiation, and 21+ years of dedicated market leadership across Fairfax County and Northern Virginia.",
    url: "https://www.homesalesfairfax.com/about-elena",
    siteName: "homesalesfairfax.com",
    locale: "en_US",
    type: "profile",
    images: [
      {
        url: "https://www.homesalesfairfax.com/images/elena-portrait.jpg",
        width: 1100,
        height: 1380,
        alt: "Elena Gorbounova - RE/MAX Allegiance Broker Associate",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elena Gorbounova, LL.M. | Top 1% Northern Virginia Realtor",
    description: "Learn about Elena Gorbounova, Associate Broker at RE/MAX Allegiance. 21+ years experience, Top 1% nationwide, MCNE® negotiation expert & legal scholar.",
    images: ["https://www.homesalesfairfax.com/images/elena-portrait.jpg"],
  }
};

export default function AboutElenaPage() {
  return <AboutPage />;
}
