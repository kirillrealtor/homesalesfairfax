import BullRunClient from "./BullRunClient";

export const metadata = {
  title: "Bull Run VA Real Estate: Regional Park, Trails & Homes",
  description: "Exhaustive guide to Bull Run VA real estate: 2.6 sq mi CDP, 1,500-acre Bull Run Regional Park, Bull Run Occoquan Trail & Westfield/Centreville pyramids.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/bull-run-va-real-estate",
  },
  openGraph: {
    title: "Bull Run VA Real Estate: Regional Park, Trails & Homes",
    description: "Exhaustive guide to Bull Run VA real estate: 2.6 sq mi CDP, 1,500-acre Bull Run Regional Park, Bull Run Occoquan Trail & Westfield/Centreville pyramids.",
    url: "https://www.homesalesfairfax.com/bull-run-va-real-estate",
    siteName: "homesalesfairfax.com",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bull Run VA Real Estate: Regional Park, Trails & Homes",
    description: "Exhaustive guide to Bull Run VA real estate: 2.6 sq mi CDP, 1,500-acre Bull Run Regional Park, Bull Run Occoquan Trail & Westfield/Centreville pyramids.",
  },
};

export default function BullRunPage() {
  const schemas = [
    // 1. Article / Research Monograph Schema
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": "https://www.homesalesfairfax.com/bull-run-va-real-estate#article",
      "headline": "Bull Run, VA Real Estate: The Definitive Guide to 1,500-Acre Regional Parkland Living, Historic Battlefields, Wooded Colonials & Westfield Pyramids",
      "description": "Comprehensive architectural monograph & real estate guide to Bull Run VA: 2.6 square-mile Census-Designated Place, 1,500-acre Bull Run Regional Park, 19.7-mile Bull Run Occoquan Trail, executive single-family colonials and townhomes, and premier Westfield and Centreville high school feeder pyramids.",
      "url": "https://www.homesalesfairfax.com/bull-run-va-real-estate",
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
      "mainEntityOfPage": "https://www.homesalesfairfax.com/bull-run-va-real-estate",
      "about": [
        "Bull Run, Virginia",
        "Bull Run CDP",
        "Bull Run Regional Park",
        "Bull Run Occoquan Trail",
        "Atlantis Waterpark",
        "Route 29 Lee Highway",
        "Interstate 66 corridor",
        "Westfield High School",
        "Centreville High School",
        "Fairfax County real estate",
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
          "name": "Bull Run, VA Real Estate & Community Guide",
          "item": "https://www.homesalesfairfax.com/bull-run-va-real-estate",
        },
      ],
    },
    // 3. FAQPage Schema (10 Comprehensive Encyclopedic Questions)
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.homesalesfairfax.com/bull-run-va-real-estate#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are the geographic boundaries and spatial dimensions of Bull Run, Virginia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Bull Run Census-Designated Place (CDP) encompasses approximately 2.6 square miles in southwestern Fairfax County (ZIP codes 20120 and 20121, Sully District). It is centered along the Route 29 (Lee Highway) corridor, bounded by Interstate 66 to the north and east, Centreville and Virginia Run to the east, and the 1,500-acre Bull Run Regional Park and Prince William County border to the west and south.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the historical significance of the Bull Run waterway and battlegrounds?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bull Run was the site of the first major land battle of the American Civil War on July 21, 1861 (First Manassas), followed by the Second Battle of Bull Run in August 1862. The stream valley preserves historic ford crossings, stone bridges, and military earthworks that defined these crucial military campaigns.",
          },
        },
        {
          "@type": "Question",
          "name": "What amenities and attractions does Bull Run Regional Park offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Operated by NOVA Parks, the 1,500-acre Bull Run Regional Park offers the Atlantis Waterpark with waterslides and pools, a public shotgun center for skeet and trap shooting, an 18-hole disc golf course, 150 wooded campsites, extensive picnic pavilions, and the renowned annual drive-through Bull Run Festival of Lights.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the Bull Run Occoquan Trail (BROT)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Bull Run Occoquan Trail is a 19.7-mile scenic recreational trail maintained by the Northern Virginia Regional Park Authority. It winds along Bull Run and the Occoquan Reservoir through pristine hardwood forests, offering premier hiking, trail running, and equestrian pathways connecting Bull Run Regional Park with Fountainhead Regional Park.",
          },
        },
        {
          "@type": "Question",
          "name": "What architectural styles predominate across the Bull Run residential community?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bull Run features executive detached single-family homes, predominantly Center-Hall Colonials, contemporaries, and custom split-levels built between the 1980s and 2000s on landscaped quarter- to multi-acre wooded lots, alongside planned townhouse clusters offering modern garage layouts.",
          },
        },
        {
          "@type": "Question",
          "name": "Which Fairfax County Public Schools serve Bull Run residents?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The community is served by top-rated FCPS institutions, including Virginia Run Elementary and Centreville Elementary. Intermediate students attend Stone Middle School, feeding into the acclaimed Westfield High School and Centreville High School pyramids, recognized for their Governor's STEM Academies.",
          },
        },
        {
          "@type": "Question",
          "name": "What commuter highways and transit options connect Bull Run to employment hubs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bull Run provides direct access to Route 29 (Lee Highway), Interstate 66 (with I-66 Express Lanes), and Route 28 (Sully Road). Commuters reach the Centreville Park & Ride express buses, the Manassas VRE commuter rail station in 10 minutes, and Dulles International Airport in approximately 15 minutes.",
          },
        },
        {
          "@type": "Question",
          "name": "What commercial and shopping amenities exist around Bull Run?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Residents enjoy convenient shopping at the nearby Centrewood Plaza, Centreville Square, and Trinity Centre, featuring full grocery stores, diverse international dining, medical clinics, fitness clubs, and everyday banking services.",
          },
        },
        {
          "@type": "Question",
          "name": "Does Bull Run have mandatory Homeowners Associations (HOAs)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Residential subdivisions maintain localized HOAs that manage community pools, tennis courts, and neighborhood landscaping, while custom acreage properties along historic country lanes operate with zero mandatory HOA dues.",
          },
        },
        {
          "@type": "Question",
          "name": "How does Fairfax County assess property values across Bull Run?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under Code of Virginia § 58.1-3201, all real property is assessed annually at 100 percent of true fair market value. The Fairfax County Department of Tax Administration (DTA) conducts computerized mass appraisal equalizations based on verified arm's-length sales of comparable homes within Bull Run's designated submarket codes.",
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
      <BullRunClient />
    </>
  );
}
