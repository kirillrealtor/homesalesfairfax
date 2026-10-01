import AboutPage from "../about/page";

export const metadata = {
  title: "Elena Gorbounova | Real Estate Agent Fairfax VA & Top Broker",
  description: "Meet Elena Gorbounova (LL.M., MCNE): Premier real estate agent in Fairfax VA with RE/MAX Allegiance. Serving NoVA since 2006, Top 1% nationwide, and 400+ properties sold.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/about-elena",
  },
  openGraph: {
    title: "Elena Gorbounova | Real Estate Agent Fairfax VA & Top Broker",
    description: "Legal precision, master negotiation, and dedicated market leadership since 2006 across Fairfax County and Northern Virginia.",
    url: "https://www.homesalesfairfax.com/about-elena",
    siteName: "homesalesfairfax.com",
    locale: "en_US",
    type: "profile",
    images: [
      {
        url: "https://www.homesalesfairfax.com/images/elena-portrait.jpg",
        width: 1100,
        height: 1380,
        alt: "Elena Gorbounova - Top Real Estate Agent Fairfax VA",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elena Gorbounova | Real Estate Agent Fairfax VA & Top Broker",
    description: "Meet Elena Gorbounova (LL.M., MCNE): Premier real estate agent in Fairfax VA with RE/MAX Allegiance. Serving Northern Virginia since 2006 and 400+ properties sold.",
    images: ["https://www.homesalesfairfax.com/images/elena-portrait.jpg"],
  }
};

export default function AboutElenaPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Elena Gorbounova",
    "jobTitle": "Associate Broker, REALTOR®",
    "worksFor": {
      "@type": "RealEstateAgent",
      "name": "RE/MAX Allegiance",
      "telephone": "(703) 625-7888",
      "url": "https://www.homesalesfairfax.com"
    },
    "description": "Top 1% Real Estate Agent in Fairfax, VA. Master of Laws (LL.M.), Master Certified Negotiation Expert (MCNE®).",
    "url": "https://www.homesalesfairfax.com/about-elena"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <AboutPage />
    </>
  );
}
