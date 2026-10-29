import PohickClient from "./PohickClient";

export const metadata = {
  title: "Pohick VA Real Estate: Historic Church, Bay & Community Guide",
  description: "Exhaustive guide to Pohick VA real estate: historic 1769 Pohick Church, Pohick Bay Regional Park, custom homes, South County schools, and VRE access.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/pohick-va-real-estate",
  },
  openGraph: {
    title: "Pohick VA Real Estate: Historic Church, Bay & Community Guide",
    description: "Exhaustive guide to Pohick VA real estate: historic 1769 Pohick Church, Pohick Bay Regional Park, custom homes, South County schools, and VRE access.",
    url: "https://www.homesalesfairfax.com/pohick-va-real-estate",
    siteName: "homesalesfairfax.com",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "/images/County/Pohick.jpg",
        width: 2048,
        height: 1152,
        alt: "Pohick VA Real Estate - Historic 1769 Pohick Church, Pohick Bay & Wooded Estates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pohick VA Real Estate: Historic Church, Bay & Community Guide",
    description: "Exhaustive guide to Pohick VA real estate: historic 1769 Pohick Church, Pohick Bay Regional Park, custom homes, South County schools, and VRE access.",
    images: ["/images/County/Pohick.jpg"],
  },
};

export default function PohickPage() {
  const schemas = [
    // 1. Article / Research Monograph Schema
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": "https://www.homesalesfairfax.com/pohick-va-real-estate#article",
      "headline": "Pohick, VA Real Estate: The Definitive Guide to Colonial Heritage, Pohick Church, Pohick Bay & South County Living",
      "description": "Comprehensive architectural monograph & real estate guide to Pohick VA: historic 1769 Pohick Church of George Washington and George Mason, Pohick Bay Regional Park, Pohick Creek Stream Valley, executive and custom single-family homes, South County High School, and Lorton VRE commuter rail access.",
      "url": "https://www.homesalesfairfax.com/pohick-va-real-estate",
      "image": "https://www.homesalesfairfax.com/images/County/Pohick.jpg",
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
      "mainEntityOfPage": "https://www.homesalesfairfax.com/pohick-va-real-estate",
      "about": [
        "Pohick, Virginia",
        "Historic Pohick Church",
        "Pohick Bay Regional Park",
        "Pohick Creek Watershed",
        "South County High School",
        "Fairfax County real estate",
        "Mason Neck Peninsula",
        "Lorton VRE Station",
        "Meadowood Special Recreation Area",
        "Fort Belvoir Proximity",
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
          "name": "Pohick, VA Real Estate & Community Guide",
          "item": "https://www.homesalesfairfax.com/pohick-va-real-estate",
        },
      ],
    },
    // 3. FAQPage Schema (10 Comprehensive Encyclopedic Questions)
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.homesalesfairfax.com/pohick-va-real-estate#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are the geographic boundaries and spatial dimensions of the Pohick area?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Pohick area spans the southern tier of Fairfax County (ZIP codes 22079, 22153, and 22039, Mount Vernon and Springfield Districts). It is organized along the Pohick Creek watershed and Pohick Road, stretching from the rolling Piedmont uplands of Burke Lake and South Run down to the tidal waters of Pohick Bay, Gunston Cove, and the Potomac River on the Mason Neck peninsula.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the historical significance of Historic Pohick Church?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Established in 1732 as the parish church of Truro Parish, Pohick Church is one of the most historically significant colonial sites in America. The current two-story Georgian brick church was built between 1769 and 1774 on a site selected by a vestry committee that included George Washington, George Mason, and George William Fairfax. Both Washington and Mason served as vestrymen and owned private family pews in the church.",
          },
        },
        {
          "@type": "Question",
          "name": "What recreational facilities does Pohick Bay Regional Park offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pohick Bay Regional Park encompasses over 1,000 acres of waterfront parkland along Pohick Bay. It features an 18-hole championship municipal golf course, a deep-water boat launch ramp with Potomac River access, kayak, canoe, and paddleboard rentals, Pirate's Cove Waterpark, family camping sites, equestrian trails, and scenic waterfront hiking trails.",
          },
        },
        {
          "@type": "Question",
          "name": "What architectural styles predominate throughout the Pohick residential corridors?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Housing throughout the Pohick corridor offers great diversity, ranging from established mid-to-late 20th-century brick ramblers, split-levels, and split-foyers on private half-acre to multi-acre wooded parcels, to stately two-story brick Center-Hall Colonials, federal revivals, and custom waterfront estates along Gunston Cove and Pohick Bay.",
          },
        },
        {
          "@type": "Question",
          "name": "Does the Pohick area have mandatory Homeowners Associations (HOAs)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many detached single-family residences situated along original country corridors like Pohick Road, Old Colchester Road, and Telegraph Road operate with zero mandatory HOA dues or restrictive architectural boards, providing full property sovereignty. Newer planned subdivisions maintain localized HOAs that care for community green spaces and amenities.",
          },
        },
        {
          "@type": "Question",
          "name": "Which Fairfax County Public Schools serve the Pohick community?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Depending on specific street addresses, elementary students attend Silverbrook Elementary, Saratoga Elementary, or Halley Elementary. Middle school students attend South County Middle School, and high school students graduate from South County High School in Lorton, recognized for its advanced STEAM academies, comprehensive AP courses, and championship athletics.",
          },
        },
        {
          "@type": "Question",
          "name": "What other nature reserves and public lands surround Pohick?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pohick is bordered by the 800-acre Meadowood Special Recreation Area (managed by the Bureau of Land Management with 13+ miles of equestrian, hiking, and mountain bike trails), the Elizabeth Hartwell Mason Neck National Wildlife Refuge (protecting bald eagle nesting grounds), and Mason Neck State Park.",
          },
        },
        {
          "@type": "Question",
          "name": "What is Pohick's proximity to Fort Belvoir and defense facilities?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pohick is situated immediately west and south of Fort Belvoir, offering 5- to 10-minute access to Tulley Gate, Fort Belvoir Community Hospital, Defense Logistics Agency (DLA) headquarters, and the National Museum of the United States Army, making it a premier residential retreat for military and defense personnel.",
          },
        },
        {
          "@type": "Question",
          "name": "What commuter transit and highway corridors serve Pohick?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Residents benefit from immediate vehicular access to Interstate 95 (Exits 161 and 163), Route 1 (Richmond Highway), and the Fairfax County Parkway (Route 286). The Lorton VRE Station (Fredericksburg Line) is less than five minutes away, offering direct commuter rail to Alexandria and D.C., while the Saratoga Park-and-Ride provides express bus transit to the Pentagon.",
          },
        },
        {
          "@type": "Question",
          "name": "How does Fairfax County assess real property values across Pohick?",
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
      <PohickClient />
    </>
  );
}
