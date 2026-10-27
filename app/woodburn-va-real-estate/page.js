import WoodburnClient from "./WoodburnClient";

export const metadata = {
  title: "Woodburn VA Real Estate: Inova Campus, Parks & Community Guide",
  description: "Exhaustive guide to Woodburn VA real estate: 2.78 sq mi CDP, Inova Fairfax Hospital campus, Pine Ridge Park, Woodburn Elementary, and Mosaic District proximity.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/woodburn-va-real-estate",
  },
  openGraph: {
    title: "Woodburn VA Real Estate: Inova Campus, Parks & Community Guide",
    description: "Exhaustive guide to Woodburn VA real estate: 2.78 sq mi CDP, Inova Fairfax Hospital campus, Pine Ridge Park, Woodburn Elementary, and Mosaic District proximity.",
    url: "https://www.homesalesfairfax.com/woodburn-va-real-estate",
    siteName: "homesalesfairfax.com",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Woodburn VA Real Estate: Inova Campus, Parks & Community Guide",
    description: "Exhaustive guide to Woodburn VA real estate: 2.78 sq mi CDP, Inova Fairfax Hospital campus, Pine Ridge Park, Woodburn Elementary, and Mosaic District proximity.",
  },
};

export default function WoodburnPage() {
  const schemas = [
    // 1. Article / Research Monograph Schema
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": "https://www.homesalesfairfax.com/woodburn-va-real-estate#article",
      "headline": "Woodburn, VA Real Estate: The Definitive Guide to Spatial Morphology, Inova Biomedical Nexus, Pine Ridge & Accotink Parks",
      "description": "Comprehensive architectural monograph & real estate guide to Woodburn VA: 2.78 square-mile Census-Designated Place, world-class Inova Fairfax Medical Campus, Pine Ridge Park, mid-century homes with zero mandatory HOA, Strathmeade Square townhomes, Woodburn Elementary, and Dunn Loring Metro access.",
      "url": "https://www.homesalesfairfax.com/woodburn-va-real-estate",
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
      "mainEntityOfPage": "https://www.homesalesfairfax.com/woodburn-va-real-estate",
      "about": [
        "Woodburn, Virginia",
        "Woodburn CDP",
        "Inova Fairfax Medical Campus",
        "Pine Ridge Park",
        "Woodburn Elementary School",
        "Strathmeade Square",
        "Fairfax County real estate",
        "Accotink Creek",
        "Capital Beltway Interstate 495",
        "Mosaic District",
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
          "name": "Woodburn, VA Real Estate & Community Guide",
          "item": "https://www.homesalesfairfax.com/woodburn-va-real-estate",
        },
      ],
    },
    // 3. FAQPage Schema (10 Comprehensive Encyclopedic Questions)
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.homesalesfairfax.com/woodburn-va-real-estate#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are the geographic boundaries and spatial dimensions of Woodburn, Virginia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Woodburn Census-Designated Place (CDP) spans approximately 2.78 square miles in northern-central Fairfax County (ZIP codes 22003 and 22031, Providence and Mason Districts). It is bounded by Arlington Boulevard (Route 50) to the north, the Capital Beltway (Interstate 495) to the east, Little River Turnpike (Route 236) to the south, and Prosperity Avenue to the west, centered around Woodburn Road and Gallows Road.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the historical origin of the Woodburn community?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Woodburn originated as a tranquil rural agricultural and timber community in the 19th and early 20th centuries, centered along the historic Woodburn Road corridor and anchored by the one-room Woodburn Schoolhouse built around 1914. Rapid post-war residential expansion occurred in the 1950s and 1960s, coinciding with the 1961 opening of Fairfax Hospital along Gallows Road.",
          },
        },
        {
          "@type": "Question",
          "name": "What major medical and research institutions are located within Woodburn?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Woodburn is home to the flagship Inova Fairfax Medical Campus, a nationally recognized 923-bed tertiary healthcare complex, Level 1 Trauma Center, and biomedical research anchor housing the Inova Schar Cancer Institute, Inova Heart and Vascular Institute, Inova Children's Hospital, and Inova Women's Hospital.",
          },
        },
        {
          "@type": "Question",
          "name": "What architectural styles predominate throughout Woodburn neighborhoods?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Woodburn features a versatile architectural fabric, including mid-century red-brick ramblers, multi-level split-levels, traditional Center-Hall Colonials, and modern custom luxury infill homes on third- to half-acre lots in Pine Ridge, as well as established brick-front townhomes in Strathmeade Square and garden condominiums in Woodburn Village.",
          },
        },
        {
          "@type": "Question",
          "name": "Does Woodburn have a mandatory Homeowners Association (HOA)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. The vast majority of detached single-family residences across Woodburn (such as Pine Ridge and original Woodburn enclaves) operate with zero mandatory HOA dues or restrictive review boards. Homeowners enjoy full property sovereignty supported by voluntary civic associations. Townhome and condominium communities maintain localized associations for common grounds maintenance.",
          },
        },
        {
          "@type": "Question",
          "name": "What recreational facilities and parks exist within Woodburn?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Recreation is anchored by the 45-acre Pine Ridge Park on Woodburn Road, featuring lighted synthetic-turf athletic fields, adult baseball diamonds, youth soccer pitches, community garden plots, and walking trails, alongside Eakin Community Park, the Accotink Stream Valley, and direct access to the 40-mile Gerry Connolly Cross County Trail.",
          },
        },
        {
          "@type": "Question",
          "name": "Which Fairfax County Public Schools serve the Woodburn community?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Woodburn is served by Woodburn Elementary School (a recognized FCPS School of the Fine Arts and Communicative Arts on Hemlock Drive), advancing to Luther Jackson Middle School, and feeding into the Falls Church High School pyramid. Select neighborhood sectors connect with the Annandale High School (IB World) and W.T. Woodson High School pyramids.",
          },
        },
        {
          "@type": "Question",
          "name": "What shopping and dining destinations are accessible from Woodburn?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Residents enjoy instantaneous access to the Mosaic District just across Route 50 in Merrifield, featuring the Angelika Film Center, boutique fashion, artisanal dining, and weekly farmers markets, alongside the Yorktown Shopping Center, Inova retail plazas, and Annandale's acclaimed culinary corridor.",
          },
        },
        {
          "@type": "Question",
          "name": "What commuter transit and highway corridors serve Woodburn?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Woodburn offers premier multimodal connectivity via Capital Beltway (I-495) Exits 50 and 51, Route 50 (Arlington Boulevard), and Gallows Road. Commuters reach the Dunn Loring-Merrifield Metrorail Station (Orange Line) in under five minutes, with direct express bus routes connecting to Washington, D.C., Tysons, and the Pentagon.",
          },
        },
        {
          "@type": "Question",
          "name": "How does Fairfax County assess real property values across Woodburn?",
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
      <WoodburnClient />
    </>
  );
}
