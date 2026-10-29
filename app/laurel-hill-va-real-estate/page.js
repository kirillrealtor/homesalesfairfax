import LaurelHillClient from "./LaurelHillClient";

export const metadata = {
  title: "Laurel Hill VA Real Estate: Community Guide, Arts & Golf",
  description: "Definitive guide to Laurel Hill VA real estate: 4.6 sq mi CDP, Workhouse Arts Center, championship Laurel Hill Golf Club, South County schools, and VRE access.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/laurel-hill-va-real-estate",
  },
  openGraph: {
    title: "Laurel Hill VA Real Estate: Community Guide, Arts & Golf",
    description: "Definitive guide to Laurel Hill VA real estate: 4.6 sq mi CDP, Workhouse Arts Center, championship Laurel Hill Golf Club, South County schools, and VRE access.",
    url: "https://www.homesalesfairfax.com/laurel-hill-va-real-estate",
    siteName: "homesalesfairfax.com",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "/images/County/Laurel Hill.jpg",
        width: 2048,
        height: 1152,
        alt: "Laurel Hill VA Real Estate - Workhouse Arts Center, Championship Golf & Homes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laurel Hill VA Real Estate: Community Guide, Arts & Golf",
    description: "Definitive guide to Laurel Hill VA real estate: 4.6 sq mi CDP, Workhouse Arts Center, championship Laurel Hill Golf Club, South County schools, and VRE access.",
    images: ["/images/County/Laurel Hill.jpg"],
  },
};

export default function LaurelHillPage() {
  const schemas = [
    // 1. Article / Research Monograph Schema
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": "https://www.homesalesfairfax.com/laurel-hill-va-real-estate#article",
      "headline": "Laurel Hill, VA Real Estate: The Definitive Guide to Master-Planned Living, Workhouse Arts Center, Championship Golf & South County Schools",
      "description": "Comprehensive architectural monograph & real estate guide to Laurel Hill VA: 4.6 square-mile Census-Designated Place, historic Workhouse Arts Center adaptive reuse, championship 18-hole Laurel Hill Golf Club, neo-traditional single-family homes and luxury townhomes, Laurel Hill Elementary, and Lorton VRE commuter rail access.",
      "url": "https://www.homesalesfairfax.com/laurel-hill-va-real-estate",
      "image": "https://www.homesalesfairfax.com/images/County/Laurel%20Hill.jpg",
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
      "mainEntityOfPage": "https://www.homesalesfairfax.com/laurel-hill-va-real-estate",
      "about": [
        "Laurel Hill, Virginia",
        "Laurel Hill CDP",
        "Workhouse Arts Center",
        "Laurel Hill Golf Club",
        "Laurel Hill Elementary School",
        "South County High School",
        "Fairfax County real estate",
        "Liberty Lorton",
        "Lorton VRE Station",
        "Occoquan Regional Park",
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
          "name": "Laurel Hill, VA Real Estate & Community Guide",
          "item": "https://www.homesalesfairfax.com/laurel-hill-va-real-estate",
        },
      ],
    },
    // 3. FAQPage Schema (10 Comprehensive Encyclopedic Questions)
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.homesalesfairfax.com/laurel-hill-va-real-estate#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are the geographic boundaries and spatial dimensions of Laurel Hill, Virginia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Laurel Hill Census-Designated Place (CDP) encompasses approximately 4.6 square miles in southern Fairfax County (ZIP code 22079, Mount Vernon District). It is bounded by Silverbrook Road and Newington Forest to the north, Interstate 95 and Lorton to the east, the Occoquan River and Occoquan Regional Park to the south, and Ox Road (Route 123) and Crosspointe to the west.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the historical background of the Laurel Hill property?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Laurel Hill was originally part of an expansive colonial estate before being acquired by the federal government in 1910 under President Theodore Roosevelt's commission to establish the District of Columbia Lorton Reformatory—a progressive, open-air agricultural correctional institution. Following the prison complex closure in late 2001, Fairfax County acquired the 2,300-acre property in 2002 and executed a master plan converting it into parkland, arts facilities, and modern residential neighborhoods.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the Workhouse Arts Center and what role does it play in the community?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Workhouse Arts Center is a 55-acre cultural arts complex occupying the historic, repurposed brick dormitories of the former Occoquan Workhouse. It houses over 85 resident visual artist studios, art galleries, performing arts venues, music programs, the Lucy Burns Museum honoring the American women's suffrage movement, and host sites for community festivals and seasonal outdoor markets.",
          },
        },
        {
          "@type": "Question",
          "name": "What architectural styles predominate throughout Laurel Hill?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Laurel Hill is characterized by 21st-century neo-traditional architecture, featuring executive single-family detached homes with double-deck front porches, fiber-cement and brick exteriors, rear-alley-loaded two-car garages, and open floor plans. The community also offers luxury multi-level townhomes with rooftop sky terraces and the Liberty adaptive-reuse enclave featuring historic exposed-brick loft designs.",
          },
        },
        {
          "@type": "Question",
          "name": "What golf and recreational amenities are located in Laurel Hill?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Laurel Hill is home to the acclaimed Laurel Hill Golf Club, an 18-hole championship municipal course designed by Bill Love spanning 300 scenic acres of rolling Piedmont hills. Residents also enjoy hundreds of acres of parkland in Laurel Hill Park, the Giles Run Disc Golf Course, equestrian and mountain biking trails, and direct access to Occoquan Regional Park.",
          },
        },
        {
          "@type": "Question",
          "name": "Which Fairfax County Public Schools serve Laurel Hill?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The community is anchored by Laurel Hill Elementary School, located on Laurel Crest Drive directly within the neighborhood. Middle school students attend South County Middle School, and high school students graduate from South County High School in Lorton, known for exceptional STEAM academies, Advanced Placement programs, and championship athletic facilities.",
          },
        },
        {
          "@type": "Question",
          "name": "What is Laurel Hill's proximity to Fort Belvoir and defense facilities?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Laurel Hill is located just five to ten minutes from Fort Belvoir's primary gates, Fort Belvoir Community Hospital, Defense Logistics Agency (DLA) headquarters, and the National Geospatial-Intelligence Agency (NGA) campus in Springfield, making it an exceptionally popular residential community for military leaders and defense civilian personnel.",
          },
        },
        {
          "@type": "Question",
          "name": "What commuter transit and highway corridors serve Laurel Hill?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Laurel Hill provides direct access to Interstate 95 via Exit 163 (Lorton Road) and Exit 160 (Route 123), the Fairfax County Parkway (Route 286), and the Lorton VRE Station (Virginia Railway Express Fredericksburg Line), offering direct rail transit to Alexandria and Washington Union Station. The Saratoga Park-and-Ride facility is also minutes away for express bus transit to the Pentagon.",
          },
        },
        {
          "@type": "Question",
          "name": "Does Laurel Hill have Homeowners Associations (HOAs)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Laurel Hill's residential subdivisions are governed by professional Homeowners Associations that maintain common neighborhood open spaces, private community swimming pools, clubhouse facilities, fitness centers, tot lots, and multi-use trail connectors, while enforcing architectural guidelines to protect long-term property values.",
          },
        },
        {
          "@type": "Question",
          "name": "How does Fairfax County assess real property values across Laurel Hill?",
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
      <LaurelHillClient />
    </>
  );
}
