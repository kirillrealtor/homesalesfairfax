import FranklinFarmClient from "./FranklinFarmClient";

export const metadata = {
  title: "Franklin Farm VA Real Estate: 1,280-Acre Master Plan, Ponds & Homes",
  description: "Exhaustive guide to Franklin Farm VA real estate: 1,280-acre master-planned community, 6 fishing ponds, 13+ miles of trails, 2 pools, Oak Hill Elementary & Chantilly/Oakton pyramids.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/franklin-farm-va-real-estate",
  },
  openGraph: {
    title: "Franklin Farm VA Real Estate: 1,280-Acre Master Plan, Ponds & Homes",
    description: "Exhaustive guide to Franklin Farm VA real estate: 1,280-acre master-planned community, 6 fishing ponds, 13+ miles of trails, 2 pools, Oak Hill Elementary & Chantilly/Oakton pyramids.",
    url: "https://www.homesalesfairfax.com/franklin-farm-va-real-estate",
    siteName: "homesalesfairfax.com",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "/images/County/Franklin Farm.jpg",
        width: 2048,
        height: 1152,
        alt: "Franklin Farm VA Real Estate - Master-Planned Enclave, 6 Ponds & Trails",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Franklin Farm VA Real Estate: 1,280-Acre Master Plan, Ponds & Homes",
    description: "Exhaustive guide to Franklin Farm VA real estate: 1,280-acre master-planned community, 6 fishing ponds, 13+ miles of trails, 2 pools, Oak Hill Elementary & Chantilly/Oakton pyramids.",
    images: ["/images/County/Franklin Farm.jpg"],
  },
};

export default function FranklinFarmPage() {
  const schemas = [
    // 1. Article / Research Monograph Schema
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": "https://www.homesalesfairfax.com/franklin-farm-va-real-estate#article",
      "headline": "Franklin Farm, VA Real Estate: The Definitive Guide to 1,280-Acre Master-Planned Living, 6 Fishing Ponds, 13+ Miles of Trails & Top School Pyramids",
      "description": "Comprehensive architectural monograph & real estate guide to Franklin Farm VA: 1,280-acre nationally recognized master-planned community, 6 community fishing ponds, 13+ miles of paved forested trails, dual aquatic centers, tennis and pickleball facilities, Oak Hill Elementary, Franklin Middle, and Chantilly/Oakton high school pyramids.",
      "url": "https://www.homesalesfairfax.com/franklin-farm-va-real-estate",
      "image": "https://www.homesalesfairfax.com/images/County/Franklin%20Farm.jpg",
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
      "mainEntityOfPage": "https://www.homesalesfairfax.com/franklin-farm-va-real-estate",
      "about": [
        "Franklin Farm, Virginia",
        "Franklin Farm CDP",
        "Franklin Farm Community Association",
        "Franklin Farm Shopping Center",
        "Oak Hill Elementary School",
        "Franklin Middle School",
        "Chantilly High School",
        "Fairfax County real estate",
        "Fairfax County Parkway Route 286",
        "Dulles Technology Corridor",
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
          "name": "Franklin Farm, VA Real Estate & Community Guide",
          "item": "https://www.homesalesfairfax.com/franklin-farm-va-real-estate",
        },
      ],
    },
    // 3. FAQPage Schema (10 Comprehensive Encyclopedic Questions)
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.homesalesfairfax.com/franklin-farm-va-real-estate#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are the geographic boundaries and spatial dimensions of Franklin Farm, Virginia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Franklin Farm is an acclaimed 1,280-acre master-planned community and Census-Designated Place (CDP) in western Fairfax County (ZIP codes 20171 and 20151, Sully District). It is bounded by the Fairfax County Parkway (Route 286) to the east, West Ox Road and Stringfellow Road corridors, Centreville Road (Route 657) to the west, and Route 50 (Lee Jackson Memorial Highway) to the south, bordered by Floris, Oak Hill, Chantilly, and Greenbriar.",
          },
        },
        {
          "@type": "Question",
          "name": "What was the historical origin of Franklin Farm before its master-planned development?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Before its transformation in the late 1970s and 1980s, Franklin Farm was an expansive agricultural dairy farm and timberland estate operated by the Franklin family. Planned residential development commenced in 1980, earning national acclaim for pioneering cluster zoning that preserved mature tree canopies, stream valleys, and natural topography.",
          },
        },
        {
          "@type": "Question",
          "name": "What recreational amenities and facilities are managed by the Franklin Farm Community Association?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Franklin Farm Community Association (FFCA) manages six community fishing ponds equipped with gazebos and fountain aerators, over 13 miles of paved multi-use trails, two comprehensive aquatic centers with swimming pools, six tennis courts with dedicated pickleball striping, a regulation sand volleyball court, two basketball courts, and 14 neighborhood pocket playgrounds.",
          },
        },
        {
          "@type": "Question",
          "name": "What architectural styles and housing types predominate across Franklin Farm?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Franklin Farm features approximately 2,600 residences, including detached single-family Center-Hall Colonials, transitional contemporary homes, and split-levels built primarily between 1980 and 1992 on landscaped quarter- to half-acre lots, alongside several enclave sections of neo-traditional garage townhomes and clustered carriage residences.",
          },
        },
        {
          "@type": "Question",
          "name": "Which Fairfax County Public Schools serve Franklin Farm residents?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The community is anchored internally by Oak Hill Elementary School (and Brookfield Elementary for select southern sections) and Franklin Middle School located directly on Franklin Farm Road. Students advance to premier secondary pyramids including Chantilly High School and Oakton High School, known for nationally ranked AP and STEM curricula.",
          },
        },
        {
          "@type": "Question",
          "name": "What shopping, dining, and daily services exist within Franklin Farm?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The community is centered around the Franklin Farm Village Shopping Center located at Franklin Farm Road and Centreville Road. It features a full-service Giant Food supermarket, local bistros, cafes, pharmacies, banks, dental and medical practices, pet care, dry cleaners, and essential community retail.",
          },
        },
        {
          "@type": "Question",
          "name": "How is Franklin Farm governed, and what do HOA assessments cover?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Franklin Farm is governed by the Franklin Farm Community Association (FFCA), a resident-elected Board of Trustees. Mandatory quarterly assessments fund the continuous maintenance of the six ponds, 13+ miles of paved paths, dual swimming pools, tennis/pickleball courts, common ground landscaping, professional on-site management, and architectural covenant enforcement.",
          },
        },
        {
          "@type": "Question",
          "name": "What commuter routes and transit options serve Franklin Farm?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Franklin Farm provides direct arterial access to Fairfax County Parkway (Route 286), Route 50, Route 28 (Sully Road), and Interstate 66. Fairfax Connector commuter buses provide express connectivity to the Reston, Herndon, and Innovation Center Metrorail Silver Line stations, while Washington Dulles International Airport is located approximately 10 minutes west.",
          },
        },
        {
          "@type": "Question",
          "name": "What ecological and environmental conservation features distinguish Franklin Farm?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Over 180 acres of the master plan are designated as permanent contiguous open space. The community protects forested stream valleys of Difficult Run and Flatlick Branch tributaries, creating extensive wildlife corridors with mature oak, hickory, and tulip poplar canopies that provide natural thermal buffers and scenic tranquility.",
          },
        },
        {
          "@type": "Question",
          "name": "How does Fairfax County assess property values in Franklin Farm?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pursuant to Code of Virginia § 58.1-3201, all real property is assessed annually at 100 percent of true fair market value. The Fairfax County Department of Tax Administration (DTA) employs computerized mass appraisal modeling analyzing verified arm's-length sales of comparable single-family homes and townhomes within Franklin Farm's specific neighborhood submarket codes.",
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
      <FranklinFarmClient />
    </>
  );
}
