import HistoryClient from "./HistoryClient";
import { FAQ_DATA, DOCUMENT_METADATA } from "../data/fairfaxHistoryDoc";

export const metadata = {
  title: "Fairfax County Virginia History & Real Estate Landscape | Comprehensive Guide",
  description: "Comprehensive research report covering Fairfax County, Virginia history from Algonquian times to the modern era, housing typologies, zoning, transportation corridors, and real estate development.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/fairfax-county-history-real-estate-landscape",
  },
  openGraph: {
    title: "Fairfax County, Virginia: History, Neighborhoods and Real Estate Landscape",
    description: "A research report on the county's historical development and the structural, spatial and morphological character of its real estate environment.",
    url: "https://www.homesalesfairfax.com/fairfax-county-history-real-estate-landscape",
    siteName: "homesalesfairfax.com",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "/images/Homepage.jpg",
        width: 2400,
        height: 1792,
        alt: "Welcome to Fairfax County, Virginia - History and Real Estate Landscape"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fairfax County, Virginia: History, Neighborhoods and Real Estate Landscape",
    description: "Comprehensive analysis of Fairfax County's historical development, master-planned communities, zoning, and real estate landscape.",
    images: ["/images/Homepage.jpg"],
  }
};

export default function HistoryPage() {
  const schemas = [
    // 1. Article / Report Schema
    {
      "@context": "https://schema.org",
      "@type": "Report",
      "@id": "https://www.homesalesfairfax.com/fairfax-county-history-real-estate-landscape#report",
      "headline": DOCUMENT_METADATA.title,
      "alternativeHeadline": DOCUMENT_METADATA.subtitle,
      "description": "A research report on Fairfax County's historical development and the structural, spatial and morphological character of its real estate environment.",
      "url": "https://www.homesalesfairfax.com/fairfax-county-history-real-estate-landscape",
      "image": "https://www.homesalesfairfax.com/images/Homepage.jpg",
      "inLanguage": "en-US",
      "wordCount": DOCUMENT_METADATA.totalWords,
      "author": {
        "@type": "Person",
        "name": "Elena Gorbounova",
        "jobTitle": "Associate Broker, REALTOR®, Master Certified Negotiation Expert",
        "url": "https://www.homesalesfairfax.com/about"
      },
      "publisher": {
        "@type": "Organization",
        "name": "homesalesfairfax.com",
        "url": "https://www.homesalesfairfax.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.homesalesfairfax.com/images/logo-ysc-remax.png"
        }
      },
      "about": [
        {
          "@type": "Place",
          "name": "Fairfax County, Virginia",
          "address": {
            "@type": "PostalAddress",
            "addressRegion": "VA",
            "addressCountry": "US"
          }
        }
      ]
    },
    // 2. Breadcrumbs
    {
      "@context": "https://schema.org",
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
          "name": "Fairfax County History & Real Estate Landscape",
          "item": "https://www.homesalesfairfax.com/fairfax-county-history-real-estate-landscape"
        }
      ]
    },
    // 3. FAQPage Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.homesalesfairfax.com/fairfax-county-history-real-estate-landscape#faq",
      "mainEntity": FAQ_DATA.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <HistoryClient />
    </>
  );
}
