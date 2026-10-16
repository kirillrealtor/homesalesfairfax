import FortHuntClient from "./FortHuntClient";

export const metadata = {
  title: "Fort Hunt VA Real Estate: The Definitive Potomac River, Parks & Enclave Guide",
  description: "Exhaustive guide to Fort Hunt VA real estate: Fort Hunt Park, Waynewood, Villamay mid-century architecture, Mount Vernon Trail, and West Potomac High.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/fort-hunt-va-real-estate",
  },
  openGraph: {
    title: "Fort Hunt VA Real Estate: The Definitive Potomac River, Parks & Enclave Guide",
    description: "Exhaustive guide to Fort Hunt VA real estate: Fort Hunt Park, Waynewood, Villamay mid-century architecture, Mount Vernon Trail, and West Potomac High.",
    url: "https://www.homesalesfairfax.com/fort-hunt-va-real-estate",
    siteName: "homesalesfairfax.com",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fort Hunt VA Real Estate: The Definitive Potomac River, Parks & Enclave Guide",
    description: "Exhaustive guide to Fort Hunt VA real estate: Fort Hunt Park, Waynewood, Villamay mid-century architecture, Mount Vernon Trail, and West Potomac High.",
  },
};

export default function FortHuntPage() {
  const schemas = [
    // 1. Article / Research Monograph Schema
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": "https://www.homesalesfairfax.com/fort-hunt-va-real-estate#article",
      "headline": "Fort Hunt, VA Real Estate: The Definitive Guide to Spatial Morphology, River Farm Heritage, Fort Hunt Park & Potomac River Communities",
      "description": "Comprehensive architectural monograph & real estate guide to Fort Hunt VA: George Washington River Farm roots, Fort Hunt Park, Waynewood, Villamay, Mount Vernon Trail, and West Potomac High pyramid.",
      "url": "https://www.homesalesfairfax.com/fort-hunt-va-real-estate",
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
      "mainEntityOfPage": "https://www.homesalesfairfax.com/fort-hunt-va-real-estate",
      "about": [
        "Fort Hunt, Virginia",
        "Fairfax County real estate",
        "Fort Hunt Park National Park Service",
        "Waynewood community",
        "Villamay mid-century architecture",
        "Stratford Landing",
        "Hollin Hall Village",
        "George Washington River Farm",
        "Mount Vernon Trail",
        "West Potomac High School",
        "Mount Vernon Magisterial District",
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
          "name": "Fort Hunt VA Real Estate Guide",
          "item": "https://www.homesalesfairfax.com/fort-hunt-va-real-estate",
        },
      ],
    },
    // 3. FAQPage Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.homesalesfairfax.com/fort-hunt-va-real-estate#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is Fort Hunt an independent town or an unincorporated community in Fairfax County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Fort Hunt is an unincorporated census-designated place (CDP) governed directly by the Fairfax County Board of Supervisors within the Mount Vernon Magisterial District. It carries an Alexandria postal address (ZIP code 22308) for mail delivery purposes, but it is not part of the City of Alexandria. Public safety, road maintenance, public education (FCPS), and land-use zoning are administered entirely by Fairfax County.",
          },
        },
        {
          "@type": "Question",
          "name": "What was the historical origin of Fort Hunt?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The land comprising Fort Hunt was originally part of George Washington's River Farm plantation, one of the five contiguous agricultural tracts that formed Mount Vernon. In 1893, the federal government acquired the riverfront bluff to construct coastal artillery fortifications guarding the Potomac River approach to Washington, D.C., naming the post Fort Hunt after Civil War General Henry Jackson Hunt. During World War II, it served as a top-secret military intelligence installation known as P.O. Box 1142.",
          },
        },
        {
          "@type": "Question",
          "name": "What recreational facilities and historic sites are offered at Fort Hunt Park?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Managed by the National Park Service as part of the George Washington Memorial Parkway, Fort Hunt Park spans 157 acres. It features preserved Endicott-era coastal artillery batteries (such as Battery Mount Vernon), large picnic pavilions, children's play areas, multi-use athletic ballfields, and direct connectivity to the 18-mile paved Mount Vernon Trail.",
          },
        },
        {
          "@type": "Question",
          "name": "What architectural typologies define residential neighborhoods in Fort Hunt?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Fort Hunt is distinguished by a rich post-war architectural continuum: classic 1950s and 1960s brick ramblers, split-levels, and Colonials in master-planned enclaves like Waynewood and Stratford Landing; custom mid-century modern split-levels with horizontal window banks and stone fireplaces in Villamay; post-war cottages in Hollin Hall Village; and expansive custom waterfront infill estates along the Potomac River bluff.",
          },
        },
        {
          "@type": "Question",
          "name": "Which public schools serve the Fort Hunt community?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Fort Hunt is served by Fairfax County Public Schools (FCPS) within the West Potomac High School pyramid. Students attend West Potomac High School (home to the AP Capstone Diploma and West Potomac Academy), Carl Sandburg Middle School (a Full-Time AAP Level IV Center), and nationally recognized elementary schools including Waynewood Elementary (a National Blue Ribbon School), Stratford Landing Elementary, and Fort Hunt Elementary.",
          },
        },
        {
          "@type": "Question",
          "name": "What is River Farm and what role does it play in the community?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "River Farm is a 25-acre historic estate situated on a bluff overlooking the Potomac River, originally owned by George Washington. Today, it serves as the national headquarters of the American Horticultural Society (AHS). Open to the public, it features formal four-acre display gardens, a historic manor house, native meadow sanctuaries, and riverview lawns that host community festivals and educational lectures.",
          },
        },
        {
          "@type": "Question",
          "name": "How is commuter transit structured from Fort Hunt to Washington, D.C.?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Vehicular commuters travel along the scenic George Washington Memorial Parkway, reaching Old Town Alexandria in 8 to 10 minutes, Reagan National Airport (DCA) in 15 minutes, and downtown Washington, D.C. in 20 to 25 minutes. Public transit commuters utilize Fairfax Connector express bus service along Fort Hunt Road connecting directly to the Huntington Metrorail Station (Yellow Line terminus).",
          },
        },
        {
          "@type": "Question",
          "name": "What structural maintenance considerations are critical for mid-century homes in Fort Hunt?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Purchasers of 1950s and 1960s single-family homes should conduct fiber-optic camera sewer scope inspections of underground cast iron lines to detect root penetration and interior scaling, upgrade original electrical panels to modern 200-amp service with AFCI/GFCI protection, and maintain proper perimeter foundation drainage slopes to manage coastal plain moisture.",
          },
        },
        {
          "@type": "Question",
          "name": "What community recreation associations are established in Fort Hunt?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Fort Hunt is famous for its vibrant civic and neighborhood culture, anchored by member-owned neighborhood swim and tennis associations including the Waynewood Recreation Association (WRA), Riverside Gardens Recreation Association (RGRA), Stratford Landing Recreation Association (SLRA), and Hollin Meadows Swim and Tennis Club, which serve as multi-generational summer social hubs.",
          },
        },
        {
          "@type": "Question",
          "name": "How are real estate property assessments and taxes governed in Fort Hunt?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In accordance with Virginia Code § 58.1-3201, all real property in Fort Hunt is assessed annually at 100 percent of fair market value by the Fairfax County Department of Tax Administration (DTA). Assessment notices are mailed every February based on verified arm's-length market sales, with taxes paid semi-annually on July 28 and December 5, and formal administrative appeal rights through the county Board of Equalization.",
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
      <FortHuntClient />
    </>
  );
}
