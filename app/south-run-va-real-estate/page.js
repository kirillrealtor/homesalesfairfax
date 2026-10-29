import SouthRunClient from "./SouthRunClient";

export const metadata = {
  title: "South Run VA Real Estate: Community Guide, RECenter & Trails",
  description: "Exhaustive guide to South Run VA real estate: 2.6 sq mi executive CDP, South Run RECenter, Lake Mercer, Burke Lake trails, and Lake Braddock pyramid.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/south-run-va-real-estate",
  },
  openGraph: {
    title: "South Run VA Real Estate: Community Guide, RECenter & Trails",
    description: "Exhaustive guide to South Run VA real estate: 2.6 sq mi executive CDP, South Run RECenter, Lake Mercer, Burke Lake trails, and Lake Braddock pyramid.",
    url: "https://www.homesalesfairfax.com/south-run-va-real-estate",
    siteName: "homesalesfairfax.com",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "/images/County/South Run.jpg",
        width: 2048,
        height: 1152,
        alt: "South Run VA Real Estate - Custom Brick Colonials, South Run RECenter & Lake Mercer Trails",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "South Run VA Real Estate: Community Guide, RECenter & Trails",
    description: "Exhaustive guide to South Run VA real estate: 2.6 sq mi executive CDP, South Run RECenter, Lake Mercer, Burke Lake trails, and Lake Braddock pyramid.",
    images: ["/images/County/South Run.jpg"],
  },
};

export default function SouthRunPage() {
  const schemas = [
    // 1. Article / Research Monograph Schema
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": "https://www.homesalesfairfax.com/south-run-va-real-estate#article",
      "headline": "South Run, VA Real Estate: The Definitive Guide to Executive Living, South Run RECenter, Lake Mercer & Burke Lake Trails",
      "description": "Comprehensive architectural monograph & real estate guide to South Run VA: 2.6 square-mile executive Census-Designated Place, custom brick colonials on half-acre to one-acre wooded lots, South Run Community Association pool, South Run RECenter, Lake Mercer and Burke Lake trail connectivity, and top FCPS pyramids.",
      "url": "https://www.homesalesfairfax.com/south-run-va-real-estate",
      "image": "https://www.homesalesfairfax.com/images/County/South%20Run.jpg",
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
      "mainEntityOfPage": "https://www.homesalesfairfax.com/south-run-va-real-estate",
      "about": [
        "South Run, Virginia",
        "South Run CDP",
        "South Run Community Association",
        "South Run RECenter",
        "Lake Mercer",
        "Burke Lake Park",
        "Fairfax County real estate",
        "Lake Braddock Secondary School",
        "Sangster Elementary School",
        "Fairfax County Parkway Route 286",
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
          "item": "https://www.homesalesfairfax.com",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Fairfax County Real Estate",
          "item": "https://www.homesalesfairfax.com/fairfax-county-history-real-estate-landscape",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "South Run, VA Real Estate & Community Guide",
          "item": "https://www.homesalesfairfax.com/south-run-va-real-estate",
        },
      ],
    },
    // 3. FAQPage Schema (10 Comprehensive Encyclopedic Questions)
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.homesalesfairfax.com/south-run-va-real-estate#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are the geographic boundaries and spatial dimensions of South Run, Virginia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The South Run Census-Designated Place (CDP) encompasses approximately 2.6 square miles in south-central Fairfax County (ZIP codes 22039 and 22153, Springfield Magisterial District). It is positioned between Lake Mercer, Burke, and West Springfield to the north, Crosspointe to the south, Newington Forest to the east, and Burke Lake Park and Fairfax Station to the west, bisected by the Fairfax County Parkway (Route 286) and South Run Stream Valley.",
          },
        },
        {
          "@type": "Question",
          "name": "When was South Run established and how was it developed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "South Run was established primarily between 1980 and the mid-1990s as a low-density executive enclave. Builders designed the community around the natural topography of the South Run stream basin, preserving mature hardwood canopies and creating substantial residential parcels typically ranging from one-third to full one-acre wooded lots.",
          },
        },
        {
          "@type": "Question",
          "name": "What amenities does the South Run Community Association (SRCA) provide?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The South Run Community Association maintains a dedicated private recreation complex featuring a 25-meter six-lane swimming pool with a diving well and wading pool (home to the South Run Seahawks swim team), tennis courts, pickleball courts, multi-purpose sport courts, children's tot lots, and direct trail connectors linking to regional parklands.",
          },
        },
        {
          "@type": "Question",
          "name": "What architectural styles predominate throughout South Run?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "South Run is defined by custom and semi-custom executive single-family detached homes, predominantly stately brick Center-Hall Colonials, federal revivals, and transitional luxury estates. Residences feature full-brick fronts, side-loading two- and three-car garages, two-story open foyers, main-floor executive paneled studies, luxury primary suites, and finished walkout basements.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the South Run RECenter and what facilities does it feature?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The South Run RECenter is a premier Fairfax County Park Authority regional recreation complex situated within the community. It features a 25-meter by 25-yard heated indoor pool, a two-story fitness and cardiovascular center, an elevated indoor running track, lighted synthetic-turf athletic fields, an off-leash dog park, and direct paved trail connections into Lake Mercer and Burke Lake Park.",
          },
        },
        {
          "@type": "Question",
          "name": "Which Fairfax County Public Schools serve the South Run community?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Depending on specific neighborhood platting, elementary students attend Sangster Elementary School or Silverbrook Elementary School. Middle and high school students advance to the nationally acclaimed Lake Braddock Secondary School (grades 7-12) in Burke, or the South County Middle and High School campus in Lorton.",
          },
        },
        {
          "@type": "Question",
          "name": "What parks and lakes are directly accessible from South Run trails?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "South Run offers direct off-road trail connections to the 154-acre Lake Mercer (surrounded by a continuous gravel and paved loop trail), the 888-acre Burke Lake Park (offering a 218-acre freshwater lake, 4.7-mile perimeter trail, and 18-hole golf course), and the South Run Stream Valley Park conservation greenway.",
          },
        },
        {
          "@type": "Question",
          "name": "What is South Run's proximity to Fort Belvoir and defense agencies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "South Run is situated within eight to ten minutes of Fort Belvoir's Tulley Gate, Fort Belvoir Community Hospital, Defense Logistics Agency (DLA) headquarters, and the National Geospatial-Intelligence Agency (NGA) Springfield campus, making it an exceptionally popular home base for military flag officers, defense executives, and senior civil servants.",
          },
        },
        {
          "@type": "Question",
          "name": "What commuter transit and highway corridors serve South Run?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Residents enjoy swift vehicular transit via the Fairfax County Parkway (Route 286), Hooes Road, Rolling Road, and Route 123 (Ox Road). Commuters access the Rolling Road and Burke Centre VRE stations (Manassas Line) in under seven minutes, the Saratoga Park-and-Ride for express Pentagon bus service, and the Franconia-Springfield Metrorail (Blue Line) in ten minutes.",
          },
        },
        {
          "@type": "Question",
          "name": "How does Fairfax County assess real property values across South Run?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under Code of Virginia § 58.1-3201, all real property is assessed annually at 100 percent of true fair market value. The Fairfax County Department of Tax Administration (DTA) conducts computerized mass appraisal equalizations annually based on verified arm's-length sales of comparable homes within specific neighborhood submarket codes.",
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
      <SouthRunClient />
    </>
  );
}
