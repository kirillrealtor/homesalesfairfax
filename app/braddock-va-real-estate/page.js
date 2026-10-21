import BraddockClient from "./BraddockClient";

export const metadata = {
  title: "Braddock VA Real Estate: Wooded Estates, Patriot Park North & Community Guide",
  description: "Exhaustive guide to Braddock VA real estate: 6.38 square-mile CDP, historic Braddock Road corridor, 67-acre Patriot Park North, luxury wooded estates, and FCPS pyramids.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/braddock-va-real-estate",
  },
  openGraph: {
    title: "Braddock VA Real Estate: Wooded Estates, Patriot Park North & Community Guide",
    description: "Exhaustive guide to Braddock VA real estate: 6.38 square-mile CDP, historic Braddock Road corridor, 67-acre Patriot Park North, luxury wooded estates, and FCPS pyramids.",
    url: "https://www.homesalesfairfax.com/braddock-va-real-estate",
    siteName: "homesalesfairfax.com",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Braddock VA Real Estate: Wooded Estates, Patriot Park North & Community Guide",
    description: "Exhaustive guide to Braddock VA real estate: 6.38 square-mile CDP, historic Braddock Road corridor, 67-acre Patriot Park North, luxury wooded estates, and FCPS pyramids.",
  },
};

export default function BraddockPage() {
  const schemas = [
    // 1. Article / Research Monograph Schema
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": "https://www.homesalesfairfax.com/braddock-va-real-estate#article",
      "headline": "Braddock, VA Real Estate: The Definitive Guide to Spatial Morphology, Wooded Acreage Estates, Patriot Park North & Public School Pyramids",
      "description": "Comprehensive architectural monograph & real estate guide to Braddock VA: 6.38 square-mile Census-Designated Place, historic 1755 Braddock Road expedition corridor, multi-acre custom estates with no mandatory HOA, 67-acre Patriot Park North sports complex, 36-hole Twin Lakes Golf Course, Popes Head Creek watershed, and top-tier Fairfax County Public School pyramids.",
      "url": "https://www.homesalesfairfax.com/braddock-va-real-estate",
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
      "mainEntityOfPage": "https://www.homesalesfairfax.com/braddock-va-real-estate",
      "about": [
        "Braddock, Virginia",
        "Braddock CDP",
        "Fairfax County real estate",
        "Braddock Road corridor",
        "Patriot Park North",
        "Twin Lakes Golf Course",
        "Willow Springs Elementary",
        "Popes Head Creek",
        "Fairfax County Parkway Route 286",
        "Fairfax County Government Center",
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
          "name": "Braddock, VA Real Estate & Community Guide",
          "item": "https://www.homesalesfairfax.com/braddock-va-real-estate",
        },
      ],
    },
    // 3. FAQPage Schema (10 Comprehensive Encyclopedic Questions)
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.homesalesfairfax.com/braddock-va-real-estate#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are the geographic boundaries and spatial dimensions of the Braddock CDP in Fairfax County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Braddock Census-Designated Place (CDP) encompasses approximately 6.38 square miles in south-central Fairfax County (ZIP code 22030, Springfield and Braddock Districts). Positioned south of Interstate 66 and the Fairfax County Government Center, it is bounded generally between the City of Fairfax / George Mason University to the east, Centreville and Clifton to the west/southwest, centered along the Braddock Road (Route 620), Shirley Gate Road, and Fairfax County Parkway (Route 286) corridors.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the historical origin of the name Braddock?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The name originates from General Edward Braddock, who commanded British regular forces during the French and Indian War. In the spring of 1755, Braddock led his expeditionary army westward across Fairfax County along what became known as Braddock Road (Virginia State Route 620) toward Fort Duquesne, establishing a permanent historical transportation artery.",
          },
        },
        {
          "@type": "Question",
          "name": "What architectural styles predominate throughout Braddock residential enclaves?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Braddock features a commanding portfolio of spacious residential architecture, including custom multi-acre luxury estates, Georgian and Federal-style brick Colonials, French Country manors, Craftsman timber-frame homes, and classic mid-to-late 20th-century executive single-family residences set on generous wooded home sites.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the typical lot size and acreage for homes in Braddock?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Unlike denser eastern suburbs, residential parcels across the Braddock CDP frequently range from half-acre home sites up to one- to five-acre wooded private parcels, with select parcels zoned for equestrian use, private stables, and extensive detached workshop structures.",
          },
        },
        {
          "@type": "Question",
          "name": "Does Braddock have a mandatory Homeowners Association (HOA)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many of the established large-lot single-family enclaves and custom estate tracts across the Braddock CDP operate with zero mandatory HOA dues or restrictive covenants. While select newer luxury cul-de-sac clusters maintain localized conservation associations, homeowners widely enjoy significant property sovereignty.",
          },
        },
        {
          "@type": "Question",
          "name": "What recreational facilities exist at Patriot Park North?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Patriot Park North is a premier 67-acre regional sports complex operated by the Fairfax County Park Authority off Braddock Road. Opened in Spring 2023, it features six lighted synthetic-turf baseball/softball diamonds in a wagon-wheel design, batting cages, covered dugouts, a 360-degree observation deck press box, MuscoVision live-streaming cameras, and walking trails.",
          },
        },
        {
          "@type": "Question",
          "name": "What golfing facilities serve the Braddock community?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Golfers enjoy immediate access to Twin Lakes Golf Course, a 36-hole public facility operated by the Fairfax County Park Authority located near Braddock and Union Mill Roads. It features two 18-hole championship layouts: the original Lakes Course (1967) and the Oaks Course (1998), complete with a lighted driving range and clubhouse.",
          },
        },
        {
          "@type": "Question",
          "name": "Which Fairfax County Public Schools serve the Braddock CDP?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Braddock is served primarily by Willow Springs Elementary School (located on Willow Springs School Road) alongside Oak View Elementary, advancing to Katherine Johnson Middle School and Fairfax High School (operated in partnership with the City of Fairfax), or feeding into the Robinson Secondary School (grades 7–12) and Centreville High School pyramids.",
          },
        },
        {
          "@type": "Question",
          "name": "What commuter corridors connect Braddock to Washington, D.C., and regional job centers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Residents benefit from immediate access to the Fairfax County Parkway (Route 286), Braddock Road (Route 620), Route 29 (Lee Highway), and Interstate 66. Commuters reach the Vienna/Fairfax-GMU Metrorail Station (Orange Line) in 10 to 12 minutes, with express bus transit available from nearby park-and-ride facilities.",
          },
        },
        {
          "@type": "Question",
          "name": "How does Fairfax County assess property values across the Braddock CDP?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In accordance with Code of Virginia § 58.1-3201, all real property is assessed annually at 100 percent of true fair market value. The Fairfax County Department of Tax Administration (DTA) conducts computerized mass appraisal equalizations annually based on verified arm's-length sales of comparable homes within specific neighborhood submarket codes.",
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
      <BraddockClient />
    </>
  );
}
