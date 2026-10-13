import MountVernonClient from "./MountVernonClient";

export const metadata = {
  title: "Mount Vernon VA Real Estate: The Definitive Potomac Riverfront & Heritage Guide",
  description: "Exhaustive guide to Mount Vernon VA real estate: historic riverfront estates, Fort Belvoir corridor, George Washington Parkway, Mount Vernon High IB pyramid, and zoning.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/mount-vernon-va-real-estate",
  },
  openGraph: {
    title: "Mount Vernon VA Real Estate: The Definitive Potomac Riverfront & Heritage Guide",
    description: "Exhaustive guide to Mount Vernon VA real estate: historic riverfront estates, Fort Belvoir corridor, George Washington Parkway, Mount Vernon High IB pyramid, and zoning.",
    url: "https://www.homesalesfairfax.com/mount-vernon-va-real-estate",
    siteName: "homesalesfairfax.com",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mount Vernon VA Real Estate: The Definitive Potomac Riverfront & Heritage Guide",
    description: "Exhaustive guide to Mount Vernon VA real estate: historic riverfront estates, Fort Belvoir corridor, George Washington Parkway, Mount Vernon High IB pyramid, and zoning.",
  },
};

export default function MountVernonPage() {
  const schemas = [
    // 1. Article / Research Monograph Schema
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": "https://www.homesalesfairfax.com/mount-vernon-va-real-estate#article",
      "headline": "Mount Vernon VA Real Estate: The Definitive Guide to Potomac Riverfront Estates, Historic Conservation & the Richmond Highway Corridor",
      "description": "Exhaustive guide to Mount Vernon VA real estate: historic riverfront estates, Fort Belvoir corridor, George Washington Parkway, Mount Vernon High IB pyramid, and zoning.",
      "url": "https://www.homesalesfairfax.com/mount-vernon-va-real-estate",
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
      "mainEntityOfPage": "https://www.homesalesfairfax.com/mount-vernon-va-real-estate",
      "about": [
        "Mount Vernon, Virginia",
        "Fairfax County real estate",
        "Potomac Riverfront estates",
        "George Washington Memorial Parkway",
        "Fort Belvoir",
        "Inova Mount Vernon Hospital",
        "Mount Vernon High School IB World School",
        "Fairfax County zoning zMOD",
        "Historic Overlay Districts",
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
          "name": "Mount Vernon VA Real Estate Guide",
          "item": "https://www.homesalesfairfax.com/mount-vernon-va-real-estate",
        },
      ],
    },
    // 3. FAQPage Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.homesalesfairfax.com/mount-vernon-va-real-estate#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is Mount Vernon an incorporated town or an unincorporated area of Fairfax County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mount Vernon is an unincorporated census-designated place (CDP) situated entirely within the Mount Vernon Magisterial District of Fairfax County. It has no independent town charter or town council. Municipal administration, emergency services, public schools, and property taxation are managed directly by Fairfax County, meaning homeowners pay only countywide real estate levies without municipal town surcharges.",
          },
        },
        {
          "@type": "Question",
          "name": "What architectural home styles define Mount Vernon real estate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mount Vernon features diverse architectural typologies spanning distinct developmental eras: custom riverfront estates and colonial revival mansions along the Potomac River, mid-century brick ramblers and split-levels in established neighborhoods like Waynewood and Stratford Landing, custom mid-century modern and contemporary homes, and modern infill estates on quarter-acre to multi-acre lots.",
          },
        },
        {
          "@type": "Question",
          "name": "What environmental regulations affect Potomac Riverfront and creek-adjacent properties?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Riverfront parcels bordering the Potomac River, Little Hunting Creek, and Dogue Creek are governed by the Chesapeake Bay Preservation Act and Fairfax County's Chesapeake Bay Preservation Ordinance. Properties fall within statutory 100-foot Resource Protection Areas (RPAs), which impose strict restrictions on land disturbance, impervious surface additions, and tree removal to preserve water quality and estuarine bank stability.",
          },
        },
        {
          "@type": "Question",
          "name": "How does Fort Belvoir impact residential demand in Mount Vernon?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Fort Belvoir borders Mount Vernon immediately to the southwest and is one of Northern Virginia's largest military and defense installations, housing the Defense Logistics Agency (DLA), the National Geospatial-Intelligence Agency (NGA) New Campus East nearby, and Belvoir Community Hospital. It generates substantial, non-cyclical housing demand from military flag officers, federal civilian leadership, defense contractors, and healthcare professionals.",
          },
        },
        {
          "@type": "Question",
          "name": "What are the primary commuter corridors connecting Mount Vernon to Washington, D.C.?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The primary scenic commuter artery is the George Washington Memorial Parkway, offering an uninterrupted drive north along the Potomac River into Old Town Alexandria, Reagan National Airport, and Washington, D.C. The western sector is anchored by Route 1 (Richmond Highway), while the Huntington Metrorail Station (Yellow Line) serves as the closest heavy-rail transit hub, supplemented by Fairfax Connector express bus service.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the Embark Richmond Highway project and how does it affect Mount Vernon?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Embark Richmond Highway is Fairfax County's transformative multimodal initiative to revitalize the Route 1 corridor. It includes dedicated median-running Bus Rapid Transit (BRT)—known as The One—linking Fort Belvoir and Mount Vernon directly to the Huntington Metrorail Station, accompanied by protected pedestrian and cycling facilities and mixed-use urban town center redevelopment.",
          },
        },
        {
          "@type": "Question",
          "name": "Which public schools serve the Mount Vernon community?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mount Vernon is served by Fairfax County Public Schools (FCPS) within the Mount Vernon High School pyramid. Mount Vernon High School is an authorized International Baccalaureate (IB) World School offering the rigorous IB Diploma Programme. Feeder schools include Carl Sandburg Middle School and acclaimed elementary schools such as Waynewood, Stratford Landing, and Fort Hunt Elementary.",
          },
        },
        {
          "@type": "Question",
          "name": "Are private boat docks and riparian rights permitted along Little Hunting Creek and the Potomac?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Select waterfront properties along Little Hunting Creek and the Potomac shoreline hold deeded riparian rights allowing private deep-water or tidal piers. Construction and maintenance of private docks require joint statutory permits from the Virginia Marine Resources Commission (VMRC), the U.S. Army Corps of Engineers (USACE), and the Fairfax County Department of Land Development Services.",
          },
        },
        {
          "@type": "Question",
          "name": "What are the Mount Vernon and Woodlawn Historic Overlay Districts (HODs)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Fairfax County maintains specialized Historic Overlay Districts surrounding George Washington's Mount Vernon Estate and Woodlawn Plantation. Properties inside or bordering these districts are subject to enhanced architectural review, building height limits, setback standards, and vegetative buffering to safeguard the historic viewsheds and pastoral character of these national landmarks.",
          },
        },
        {
          "@type": "Question",
          "name": "Do neighborhoods in Mount Vernon have mandatory HOAs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many of Mount Vernon's established mid-century and custom subdivisions (such as sections of Waynewood, Stratford Landing, and older riverfront streets) operate without mandatory HOAs, giving owners architectural flexibility within Fairfax County zoning parameters. Some communities maintain voluntary civic associations that manage neighborhood pools, tennis facilities, and community events, while newer townhome enclaves have mandatory associations.",
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
      <MountVernonClient />
    </>
  );
}
