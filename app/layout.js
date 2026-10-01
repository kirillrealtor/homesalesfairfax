import "./globals.css";
import QuickContactDock from "./components/QuickContactDock";

export const metadata = {
  metadataBase: new URL("https://www.homesalesfairfax.com"),
  title: "Fairfax VA House For Sale | Single Family Homes & MLS Listings",
  description: "Browse single family homes for sale in Fairfax VA and houses for sale across Fairfax County directly from Bright MLS. Private showings with top Fairfax real estate agents Elena Gorbounova.",
  keywords: "single family homes for sale in fairfax va, fairfax va house for sale, house for sale in fairfax virginia, fairfax station homes for sale, fairfax condos for sale, fairfax real estate agents, realtors in fairfax, Elena Gorbounova, Northern Virginia real estate",
  authors: [{ name: "homesalesfairfax.com" }],
  openGraph: {
    title: "Fairfax VA House For Sale | Single Family Homes & MLS Listings",
    description: "Browse single family homes and houses for sale across Fairfax County VA. Schedule private showings and instant valuations with Elena Gorbounova.",
    url: "https://www.homesalesfairfax.com",
    siteName: "homesalesfairfax.com",
    images: [
      {
        url: "/images/hero-estate.jpg",
        width: 1200,
        height: 630,
        alt: "Houses For Sale in Fairfax Virginia"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fairfax VA Homes For Sale | homesalesfairfax.com",
    description: "Active Bright MLS listings in Fairfax, VA. Private showings and seller listing consultations with Elena.",
    images: ["/images/hero-estate.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.jpeg", sizes: "any" },
      
    ],
    shortcut: "/icon.jpeg",
    apple: "/icon.jpeg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "homesalesfairfax.com - Elena Gorbounova | Fairfax Real Estate & Showing Network",
  "image": "https://www.homesalesfairfax.com/images/hero-estate.jpg",
  "telephone": "+1-703-625-7888",
  "email": "ElenaYSC@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "5100 Leesburg Pike, Suite 200",
    "addressLocality": "Alexandria",
    "addressRegion": "VA",
    "postalCode": "22302",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 38.8462,
    "longitude": -77.3064
  },
  "url": "https://www.homesalesfairfax.com",
  "priceRange": "$$$$",
  "areaServed": [
    "Fairfax, VA",
    "Fairfax City",
    "Mosaic District",
    "Oakton, VA",
    "Burke, VA",
    "Northern Virginia"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var h=window.location.hostname;var isLocal=h==='localhost'||h==='127.0.0.1'||h.endsWith('.local')||h==='';var isPreview=window.location.search.indexOf('preview=fairfax2026')!==-1||document.cookie.indexOf('preview_access=true')!==-1;if(window.location.search.indexOf('preview=fairfax2026')!==-1){document.cookie='preview_access=true;path=/;max-age=2592000';}if(!isLocal&&!isPreview){document.documentElement.innerHTML='<head><meta name="robots" content="noindex,nofollow"><title></title></head><body style="background:#fff"></body>';}}catch(e){}})();`
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <QuickContactDock />
      </body>
    </html>
  );
}
