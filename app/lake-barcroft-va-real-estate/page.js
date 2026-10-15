import LakeBarcroftClient from "./LakeBarcroftClient";

export const metadata = {
  title: "Lake Barcroft VA Real Estate: The Definitive Waterfront & Architecture Guide",
  description: "Exhaustive guide to Lake Barcroft VA real estate: 135-acre private lake, Mid-Century Modern architecture, LBWID conservation, 5 private beaches, and FCPS pyramids.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/lake-barcroft-va-real-estate",
  },
  openGraph: {
    title: "Lake Barcroft VA Real Estate: The Definitive Waterfront & Architecture Guide",
    description: "Exhaustive guide to Lake Barcroft VA real estate: 135-acre private lake, Mid-Century Modern architecture, LBWID conservation, 5 private beaches, and FCPS pyramids.",
    url: "https://www.homesalesfairfax.com/lake-barcroft-va-real-estate",
    siteName: "homesalesfairfax.com",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lake Barcroft VA Real Estate: The Definitive Waterfront & Architecture Guide",
    description: "Exhaustive guide to Lake Barcroft VA real estate: 135-acre private lake, Mid-Century Modern architecture, LBWID conservation, 5 private beaches, and FCPS pyramids.",
  },
};

export default function LakeBarcroftPage() {
  const schemas = [
    // 1. Article / Research Monograph Schema
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": "https://www.homesalesfairfax.com/lake-barcroft-va-real-estate#article",
      "headline": "Lake Barcroft, VA Real Estate: The Definitive Guide to Private Waterfront Living, Mid-Century Modern Architecture & Watershed Stewardship",
      "description": "Exhaustive architectural monograph & real estate guide to Lake Barcroft VA: 135-acre private freshwater lake, 5 private beaches, LBWID conservation, Justice High IB pyramid, and Mid-Century Modern homes.",
      "url": "https://www.homesalesfairfax.com/lake-barcroft-va-real-estate",
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
      "mainEntityOfPage": "https://www.homesalesfairfax.com/lake-barcroft-va-real-estate",
      "about": [
        "Lake Barcroft, Virginia",
        "Fairfax County real estate",
        "Lake Barcroft Association LBA",
        "Lake Barcroft Watershed Improvement District LBWID",
        "Mid-Century Modern architecture",
        "Private freshwater lake community",
        "Justice High School IB pyramid",
        "Belvedere Elementary IB PYP",
        "Holmes Run dam and watershed",
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
          "name": "Lake Barcroft VA Real Estate Guide",
          "item": "https://www.homesalesfairfax.com/lake-barcroft-va-real-estate",
        },
      ],
    },
    // 3. FAQPage Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.homesalesfairfax.com/lake-barcroft-va-real-estate#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is Lake Barcroft a public lake or a private community?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lake Barcroft is a strictly private community. The 135-acre lake, its surface waters, shoreline easements, and five white-sand community beaches are private property owned and managed by the Lake Barcroft Association (LBA). Access is restricted exclusively to Lake Barcroft residential property owners and their registered guests. There is no public boat ramp or recreational access for non-residents.",
          },
        },
        {
          "@type": "Question",
          "name": "What are the boating and watercraft regulations on Lake Barcroft?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To preserve water clarity, prevent petroleum pollution, and protect community tranquility, internal combustion gasoline engines are strictly prohibited on Lake Barcroft. Boating is restricted to human-powered craft (canoes, kayaks, paddleboards, rowboats, sailboats) and electric-powered watercraft (such as electric pontoon boats and electric launches). All boats must be registered with the Lake Barcroft Association and display official LBA decals.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the historical origin of Lake Barcroft?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The lake originated in 1913 when the Alexandria Water Company constructed a dam on Holmes Run to create a drinking water reservoir, named after Dr. John W. Barcroft, a prominent 19th-century inventor and local mill operator. The reservoir supplied municipal water to Alexandria and federal facilities during World War I and World War II. In 1950, when the water company relocated its primary intake to the Occoquan, developers Barger-Bready purchased the 680-acre tract and transformed the reservoir into a private master-planned residential lake community.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the Lake Barcroft Watershed Improvement District (LBWID)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Established in 1973 by the Circuit Court of Fairfax County following the severe siltation caused by Tropical Storm Agnes, the Lake Barcroft Watershed Improvement District (LBWID) was the first urban conservation watershed district in the Commonwealth of Virginia. Governed by three elected trustees and funded via a dedicated line item on residents' real estate tax bills, the LBWID is responsible for water quality testing, routine sediment dredging, shoreline stabilization, and the operation and maintenance of the Barcroft Dam spillway gates.",
          },
        },
        {
          "@type": "Question",
          "name": "What architectural styles predominate in Lake Barcroft?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lake Barcroft is nationally renowned for its custom Mid-Century Modern (MCM) residential architecture, California Contemporary post-and-beam homes, split-levels, and low-slung Prairie-style ramblers constructed between 1951 and 1970. Homes typically feature expansive floor-to-ceiling glass fenestration, cathedral tongue-and-groove timber ceilings, exposed native stone chimney masses, and generous multi-tiered cedar decks engineered to harmonize with steep, forested lakeside contours.",
          },
        },
        {
          "@type": "Question",
          "name": "How many beaches are there in Lake Barcroft and what amenities do they offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lake Barcroft features five private white-sand community beaches, designated Beaches 1 through 5. Each beach offers roped swimming areas with certified lifeguards during summer operating seasons, shaded picnic pavilions, boat storage racks, playground equipment, and community gathering spaces that host neighborhood concerts, Fourth of July festivities, and environmental workshops.",
          },
        },
        {
          "@type": "Question",
          "name": "Which public schools serve the Lake Barcroft community?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lake Barcroft is served by Fairfax County Public Schools (FCPS) within the Justice High School pyramid. High school students attend Justice High School, an authorized International Baccalaureate (IB) World School offering the prestigious IB Diploma Programme. Middle school students attend Glasgow Middle School (IB Middle Years Programme), and elementary students are zoned to Belvedere Elementary School (an authorized IB Primary Years Programme school) or Sleepy Hollow Elementary, with access to Bailey's Elementary Arts and Sciences Magnet.",
          },
        },
        {
          "@type": "Question",
          "name": "What are the commuter connections from Lake Barcroft to Washington, D.C.?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lake Barcroft is located approximately seven to eight miles from downtown Washington, D.C. Commuters utilize Columbia Pike (Route 244) or US Route 50 (Arlington Boulevard) for direct access to the Pentagon, Crystal City/National Landing, and downtown D.C. In addition, express Metrobus service—including the 16M Columbia Pike line—provides frequent one-seat transit connectivity to the Pentagon Metrorail Station (Blue and Yellow Lines).",
          },
        },
        {
          "@type": "Question",
          "name": "How does the Barcroft Dam manage water levels and flood events?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Barcroft Dam across Holmes Run incorporates automated inflatable Obermeyer spillway crest gates. Controlled by the LBWID, these pneumatically operated gates allow precise regulation of the lake’s water elevation, ensuring consistent lake levels for recreation while providing automated rapid lowering during severe precipitation events to safely manage floodwaters without impacting lakeside structural foundations.",
          },
        },
        {
          "@type": "Question",
          "name": "How are real estate assessments and taxes structured in Lake Barcroft?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Properties in Lake Barcroft are assessed annually at 100 percent of fair market value by the Fairfax County Department of Tax Administration under Virginia Code § 58.1-3201. Real estate tax bills are paid semi-annually on July 28 and December 5. In addition to the Fairfax County general levy and stormwater service district tax, Lake Barcroft properties include a dedicated special tax levy that exclusively funds the operational and capital reserves of the Lake Barcroft Watershed Improvement District (LBWID).",
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
      <LakeBarcroftClient />
    </>
  );
}
