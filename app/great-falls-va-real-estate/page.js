import GreatFallsRealEstateClient from "./GreatFallsRealEstateClient";

export const metadata = {
  title: "Great Falls VA Real Estate: The Definitive Potomac Palisades & Luxury Estate Guide",
  description: "Exhaustive guide to Great Falls VA real estate: 2-acre estate zoning, Potomac Riverfront manors, Langley High School pyramid, Great Falls Park, and zoning.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/great-falls-va-real-estate",
  },
  openGraph: {
    title: "Great Falls VA Real Estate: The Definitive Potomac Palisades & Luxury Estate Guide",
    description: "Exhaustive guide to Great Falls VA real estate: 2-acre estate zoning, Potomac Riverfront manors, Langley High School pyramid, Great Falls Park, and zoning.",
    url: "https://www.homesalesfairfax.com/great-falls-va-real-estate",
    siteName: "homesalesfairfax.com",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Great Falls VA Real Estate: The Definitive Potomac Palisades & Luxury Estate Guide",
    description: "Exhaustive guide to Great Falls VA real estate: 2-acre estate zoning, Potomac Riverfront manors, Langley High School pyramid, Great Falls Park, and zoning.",
  },
};

export default function GreatFallsRealEstatePage() {
  const schemas = [
    // 1. Article / Research Monograph Schema
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": "https://www.homesalesfairfax.com/great-falls-va-real-estate#article",
      "headline": "Great Falls VA Real Estate: The Definitive Guide to 2-Acre Estate Zoning, Potomac Palisades & the Langley High School Pyramid",
      "description": "Exhaustive guide to Great Falls VA real estate: 2-acre estate zoning, Potomac Riverfront manors, Langley High School pyramid, Great Falls Park, and zoning.",
      "url": "https://www.homesalesfairfax.com/great-falls-va-real-estate",
      "inLanguage": "en-US",
      "publisher": {
        "@type": "Organization",
        "name": "homesalesfairfax.com",
        "url": "https://www.homesalesfairfax.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.homesalesfairfax.com/icon.jpeg",
        },
      },
      "mainEntityOfPage": "https://www.homesalesfairfax.com/great-falls-va-real-estate",
      "about": [
        "Great Falls, Virginia",
        "Fairfax County real estate",
        "2-acre estate zoning R-E",
        "Great Falls Park",
        "Riverbend Park",
        "Langley High School pyramid",
        "Potomac Riverfront estates",
        "Georgetown Pike scenic byway",
        "Fairfax County zoning zMOD",
        "Equestrian real estate",
      ],
    },
    // 2. BreadcrumbList Schema
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.homesalesfairfax.com/",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Great Falls VA Real Estate Guide",
          "item": "https://www.homesalesfairfax.com/great-falls-va-real-estate",
        },
      ],
    },
    // 3. FAQPage Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.homesalesfairfax.com/great-falls-va-real-estate#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is Great Falls an incorporated town or an unincorporated community?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Great Falls is an unincorporated census-designated place (CDP) situated in the Dranesville Magisterial District of northern Fairfax County. It possesses no independent town charter or town council. Municipal administration, law enforcement, public education, and property taxation are managed directly by Fairfax County, meaning homeowners pay strictly the unified county real estate tax without separate town levies.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the 2-acre minimum zoning requirement in Great Falls?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under the Fairfax County Zoning Ordinance (zMOD), the predominant residential classification across Great Falls is R-E (Residential Estate), which mandates a minimum parcel size of two contiguous acres (87,120 square feet) per single-family residence. This statutory density restriction preserves expansive wooded buffers, safeguards privacy, and prevents high-density suburban tract subdivision.",
          },
        },
        {
          "@type": "Question",
          "name": "Do properties in Great Falls use public water and sewer or private systems?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The vast majority of residential homes in Great Falls rely on private deep-drilled drinking water wells and engineered on-site sewage disposal systems (septic drainfields). The deliberate absence of municipal public sewer mains across the R-E zoning district serves as an immutable physical and legal safeguard reinforcing the community's low-density estate character.",
          },
        },
        {
          "@type": "Question",
          "name": "What architectural home styles define Great Falls real estate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Great Falls features exceptional architectural diversity across its multi-acre parcels: monumental custom stone and brick European manors, French Provincial and Georgian estates, bespoke contemporary residences with floor-to-ceiling glass walls, sprawling equestrian farmhouses with private barns, and modern transitional craftsman estates.",
          },
        },
        {
          "@type": "Question",
          "name": "Which public schools serve Great Falls residents?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Great Falls is served by Fairfax County Public Schools (FCPS) within the nationally acclaimed Langley High School pyramid. Langley High School is consistently ranked among the top public high schools in Virginia and the United States. Feeder schools include Cooper Middle School (AAP center) and prestigious neighborhood elementary campuses including Great Falls Elementary, Forestville Elementary, and Colvin Run Elementary.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the historic significance of Great Falls Park and the Patowmack Canal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Great Falls Park is an 800-acre National Park Service site where the Potomac River drops 76 feet through Mather Gorge. The park preserves the historic stone ruins of the Patowmack Canal, chartered in 1785 and overseen by George Washington as one of the first engineered bypass canals in American history designed to open trade routes to the Ohio River Valley.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the Great Falls Village Center and what amenities does it offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Great Falls Village Center, situated at the intersection of Georgetown Pike (Route 193) and Walker Road, serves as the community's colonial-style commercial and civic hub. It features a historic village green with a gazebo, weekly farmers markets, art galleries, boutique shops, and celebrated restaurants including The Old Brogue Irish Pub, alongside neighboring institutions like the world-famous L'Auberge Chez François.",
          },
        },
        {
          "@type": "Question",
          "name": "Are equestrian properties and horse keeping permitted in Great Falls?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Great Falls is one of the premier equestrian centers in the Washington metropolitan area. Under Fairfax County R-E zoning, horse keeping is permitted by right on qualifying multi-acre parcels. The community maintains an active network of private and public bridle trails connecting private stables to regional parklands.",
          },
        },
        {
          "@type": "Question",
          "name": "What major transportation corridors connect Great Falls to regional employment centers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The primary east-west corridors are Georgetown Pike (Route 193, a designated Virginia Scenic Byway connecting east to McLean, Route 123, and the Beltway) and Route 7 (Leesburg Pike, connecting east to Tysons and west to Loudoun County). Commuters also enjoy rapid access to the Silver Line Metrorail stations in nearby Reston and Tysons.",
          },
        },
        {
          "@type": "Question",
          "name": "Do homes in Great Falls have mandatory homeowner associations (HOAs)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many multi-acre properties in Great Falls operate as independent fee-simple holdings with no mandatory HOA dues, giving owners maximum architectural freedom within county zoning parameters. Certain private cul-de-sacs and enclave developments have small, private road maintenance or architectural covenants governed under the Virginia Property Owners' Association Act (POAA).",
          },
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <GreatFallsRealEstateClient />
    </>
  );
}
