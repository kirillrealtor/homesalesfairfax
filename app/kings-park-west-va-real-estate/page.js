import KingsParkWestClient from "./KingsParkWestClient";

export const metadata = {
  title: "Kings Park West VA Real Estate: Royal Lake, Robinson Secondary & Community Guide",
  description: "Exhaustive guide to Kings Park West VA real estate: 1967 Richmarr architecture, 38-acre Royal Lake, Robinson Secondary IB pyramid, Laurel Ridge, and zero mandatory HOA.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/kings-park-west-va-real-estate",
  },
  openGraph: {
    title: "Kings Park West VA Real Estate: Royal Lake, Robinson Secondary & Community Guide",
    description: "Exhaustive guide to Kings Park West VA real estate: 1967 Richmarr architecture, 38-acre Royal Lake, Robinson Secondary IB pyramid, Laurel Ridge, and zero mandatory HOA.",
    url: "https://www.homesalesfairfax.com/kings-park-west-va-real-estate",
    siteName: "homesalesfairfax.com",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kings Park West VA Real Estate: Royal Lake, Robinson Secondary & Community Guide",
    description: "Exhaustive guide to Kings Park West VA real estate: 1967 Richmarr architecture, 38-acre Royal Lake, Robinson Secondary IB pyramid, Laurel Ridge, and zero mandatory HOA.",
  },
};

export default function KingsParkWestPage() {
  const schemas = [
    // 1. Article / Research Monograph Schema
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": "https://www.homesalesfairfax.com/kings-park-west-va-real-estate#article",
      "headline": "Kings Park West, VA Real Estate: The Definitive Guide to Spatial Morphology, Richmarr Architecture, Royal Lake & Robinson Secondary Pyramid",
      "description": "Comprehensive architectural monograph & real estate guide to Kings Park West VA: 1967 Richmarr Construction master plan, 3.03 square-mile CDP, 38-acre Royal Lake reservoir, collegiate streetscapes, zero mandatory HOA fees, three swim clubs, Laurel Ridge Elementary, and Robinson Secondary School IB pyramid.",
      "url": "https://www.homesalesfairfax.com/kings-park-west-va-real-estate",
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
      "mainEntityOfPage": "https://www.homesalesfairfax.com/kings-park-west-va-real-estate",
      "about": [
        "Kings Park West, Virginia",
        "Kings Park West CDP",
        "Kings Park West Civic Association",
        "Fairfax County real estate",
        "Richmarr Construction Corporation",
        "Royal Lake Park",
        "Laurel Ridge Elementary School",
        "Robinson Secondary School",
        "Lakeview Swim Club",
        "George Mason University corridor",
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
          "name": "Kings Park West, VA Real Estate & Community Guide",
          "item": "https://www.homesalesfairfax.com/kings-park-west-va-real-estate",
        },
      ],
    },
    // 3. FAQPage Schema (10 Comprehensive Encyclopedic Questions)
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.homesalesfairfax.com/kings-park-west-va-real-estate#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are the geographic boundaries and spatial dimensions of Kings Park West, Virginia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Kings Park West is an official Census-Designated Place (CDP) encompassing approximately 3.03 square miles in central Fairfax County (ZIP code 22032, Braddock Magisterial District). It is bounded by Braddock Road (Route 620) to the north directly opposite George Mason University, Ox Road (Route 123) and Zion Drive to the west, Guinea Road and Sideburn Road to the east, and the Burke community along Roberts Road to the south.",
          },
        },
        {
          "@type": "Question",
          "name": "Who developed Kings Park West and when was it established?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Kings Park West was master-planned and constructed by the Richmarr Construction Corporation, led by Richard Kirstein and Marvin Kay, breaking ground in 1967 following the acclaim of original Kings Park. The first homes were delivered in 1968, with successive residential phases continuing through 1986.",
          },
        },
        {
          "@type": "Question",
          "name": "What architectural styles predominate throughout Kings Park West?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The community encompasses approximately 2,500 residences featuring bi-level split-foyers, tri-level and quad-level split-levels, Center-Hall Colonials, single-story ramblers, and select planned townhome enclaves. Residences feature solid dimensional framing, brick masonry facades, daylight walk-out basements, and generous quarter- to third-acre lots.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the significance of Royal Lake in Kings Park West?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Royal Lake is a 38-acre scenic reservoir and ecological centerpiece built under the Pohick Creek Watershed flood prevention plan (Pohick Dam No. 2). Bordered by Royal Lake Park and Lakeside Park, it features the 1.9-mile Ronald E. Craven multi-surface loop trail, fishing docks, kayak launch points, and hosts the annual Braddock Nights summer concert series.",
          },
        },
        {
          "@type": "Question",
          "name": "Does Kings Park West have a mandatory Homeowners Association (HOA)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Detached single-family homes in Kings Park West are completely free from mandatory HOA fees and restrictive architectural review boards. Civic governance, community events, and neighborhood advocacy are led voluntarily by the Kings Park West Civic Association (KPWCA), established in 1969.",
          },
        },
        {
          "@type": "Question",
          "name": "Why do the streets in Kings Park West carry college and university names?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Richmarr Construction deliberately established a collegiate street-naming motif across Kings Park West to honor prestigious American universities and liberal arts colleges—including Colby, Purdue, Stanford, Notre Dame, Vassar, Fordham, Villanova, Swarthmore, Sweet Briar, Oberlin, Kenyon, Bucknell, and Clemson.",
          },
        },
        {
          "@type": "Question",
          "name": "Which Fairfax County Public Schools serve Kings Park West?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The community is anchored by Laurel Ridge Elementary School (Pre-K through 6) located on Commonwealth Boulevard within the neighborhood. For secondary education, students advance to Robinson Secondary School on Sideburn Road (grades 7 through 12), an internationally recognized International Baccalaureate (IB) World School offering the full IB Diploma Programme. Select southeastern blocks feed into Lake Braddock Secondary School.",
          },
        },
        {
          "@type": "Question",
          "name": "What community swimming and recreational facilities serve Kings Park West?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Kings Park West features three private, member-owned swim clubs: Lakeview Swim Club (located on the wooded shores of Royal Lake, home of the NVSL Marlins), Kings Ridge Swim Club (home of the Water Wizards), and Park West Recreation Club. The neighborhood also offers public tennis courts, basketball courts, and the Monticello Dog Park.",
          },
        },
        {
          "@type": "Question",
          "name": "What commuter transit options connect Kings Park West to Washington, D.C.?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Commuters benefit from immediate access to two Virginia Railway Express (VRE) stations—Burke Centre Station and Rolling Road Station—providing passenger rail directly to Alexandria, Crystal City, L'Enfant Plaza, and Union Station. Additionally, the City of Fairfax CUE Bus and Metrobus routes along Braddock Road connect swiftly to the Vienna/Fairfax-GMU Metrorail Station (Orange Line) and the Pentagon.",
          },
        },
        {
          "@type": "Question",
          "name": "How does Fairfax County assess real property values in Kings Park West?",
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
      <KingsParkWestClient />
    </>
  );
}
