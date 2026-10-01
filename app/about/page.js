import AboutClient from "./AboutClient";

export const metadata = {
  title: "Fairfax Real Estate Agent | Elena Gorbounova | REALTOR® in Fairfax VA",
  description: "Looking for top Fairfax real estate agents? Elena Gorbounova (LL.M., MCNE) is a premier realtor in Fairfax VA serving since 2006 with 400+ sold properties.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/about",
  },
  openGraph: {
    title: "Fairfax Real Estate Agent | Elena Gorbounova | Top REALTOR®",
    description: "Ranked among America's Top 100 Real Estate Agents. Elena Gorbounova provides master fiduciary advocacy across Fairfax County.",
    url: "https://www.homesalesfairfax.com/about",
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
    title: "Fairfax Real Estate Agent | Elena Gorbounova",
    description: "Top 1% Northern Virginia Broker Associate with RE/MAX Allegiance. 400+ properties sold across Fairfax County.",
    images: ["https://www.homesalesfairfax.com/images/elena-portrait.jpg"],
  }
};

export default function AboutPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "@id": "https://www.homesalesfairfax.com/about#webpage",
      "url": "https://www.homesalesfairfax.com/about",
      "name": "About Elena Gorbounova | Top 1% REALTOR® & Broker Associate",
      "description": "Meet Elena Gorbounova (LL.M., MCNE): Top 1% Northern Virginia Broker Associate with RE/MAX Allegiance. 400+ properties sold, serving Northern Virginia since 2006.",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.homesalesfairfax.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "About Elena Gorbounova",
            "item": "https://www.homesalesfairfax.com/about"
          }
        ]
      },
      "mainEntity": {
        "@type": "Person",
        "@id": "https://www.homesalesfairfax.com/about#elena-gorbounova",
        "name": "Elena Gorbounova",
        "jobTitle": "Broker Associate, REALTOR®, Master Certified Negotiation Expert",
        "image": "https://www.homesalesfairfax.com/images/elena-portrait.jpg",
        "telephone": "+1-703-625-7888",
        "email": "ElenaYSC@gmail.com",
        "url": "https://www.homesalesfairfax.com/about",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "5100 Leesburg Pike, Suite 200",
          "addressLocality": "Alexandria",
          "addressRegion": "VA",
          "postalCode": "22302",
          "addressCountry": "US"
        },
        "worksFor": {
          "@type": "RealEstateAgent",
          "name": "RE/MAX Allegiance • YSC Real Estate Group",
          "image": "https://www.homesalesfairfax.com/images/elena-portrait.jpg",
          "telephone": "+1-703-824-4800",
          "url": "https://www.homesalesfairfax.com",
          "priceRange": "$$$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "5100 Leesburg Pike, Suite 200",
            "addressLocality": "Alexandria",
            "addressRegion": "VA",
            "postalCode": "22302",
            "addressCountry": "US"
          }
        },
        "alumniOf": [
          {
            "@type": "CollegeOrUniversity",
            "name": "American University Washington College of Law",
            "award": "Master of Laws (LL.M.)"
          }
        ],
        "award": [
          "Top 1% Real Estate Agents in America (America's Top 100)",
          "Top 3% of ALL RE/MAX Agents in the United States",
          "RE/MAX Hall of Fame",
          "RE/MAX Chairman's Club",
          "RE/MAX Platinum Club",
          "Lifetime NVAR Top Producer",
          "Five Star Real Estate Agent Award (2021-2026)"
        ],
        "knowsAbout": [
          "Fairfax County Real Estate",
          "Residential Contract Law",
          "Real Estate Negotiation",
          "Home Valuation & Bright MLS Comps",
          "Mantua Real Estate",
          "Mosby Woods Real Estate",
          "Franklin Farm Real Estate",
          "Kings Park West Real Estate",
          "Oakton Real Estate",
          "Clifton Luxury Estates"
        ],
        "sameAs": [
          "https://www.youtube.com/c/ElenaGorbounova",
          "https://www.linkedin.com/in/elenagorbounovaremax",
          "https://www.facebook.com/egorbounova",
          "https://www.yourskylineconnection.com/about-elena/"
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.homesalesfairfax.com/about#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What distinguishes Elena Gorbounova from other Northern Virginia real estate agents?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Elena combines an 18-year scholarly background as a university professor with a Master of Laws (LL.M.) from American University's Washington College of Law and the elite Master Certified Negotiation Expert (MCNE®) designation held by less than 1% of agents nationwide. Her legal acumen and tactical negotiation provide unmatched protection and financial leverage for clients."
          }
        },
        {
          "@type": "Question",
          "name": "What real estate credentials and designations does Elena Gorbounova hold?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Elena is an Associate Broker, REALTOR®, Master Certified Negotiation Expert (MCNE®), and Graduate, REALTOR® Institute (GRI). She has been inducted into the RE/MAX Hall of Fame and Chairman's Club (Top 3% nationally), recognized as America's Top 100 Real Estate Agents (Top 1% nationwide), and honored as a Lifetime NVAR Top Producer."
          }
        },
        {
          "@type": "Question",
          "name": "Which geographic areas and subdivisions in Northern Virginia does Elena specialize in?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Elena specializes across Fairfax County and Northern Virginia, including Fairfax City, Oakton, Vienna, McLean, Great Falls, Burke, Clifton, and Alexandria. She provides deep micro-market specialization for sought-after subdivisions including Mantua, Mosby Woods, Franklin Farm, and Kings Park West."
          }
        },
        {
          "@type": "Question",
          "name": "Which brokerage is Elena Gorbounova affiliated with?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Elena is a Broker Associate with RE/MAX Allegiance and leads the YSC Real Estate Group, headquartered at 5100 Leesburg Pike, Suite 200, Alexandria, VA 22302."
          }
        },
        {
          "@type": "Question",
          "name": "How can buyers and sellers contact or schedule a consultation with Elena Gorbounova?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Clients can reach Elena directly by calling or texting (703) 625-7888 or emailing ElenaYSC@gmail.com."
          }
        }
      ]
    }
  ];

  return (
    <>
      {structuredData.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <AboutClient />
    </>
  );
}
