import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { FAIRFAX_COMMUNITIES, getCommunityBySlug } from "../../data/communities";
import { VIRGINIA_DIVISIONS } from "../../data/virginiaDivisions";

export function generateStaticParams() {
  return FAIRFAX_COMMUNITIES.map((c) => ({
    slug: c.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const community = getCommunityBySlug(slug);

  if (!community) {
    return {
      title: "Community Not Found | homesalesfairfax.com",
    };
  }

  return {
    title: `${community.name}, VA Real Estate & Homes | History, Market Comps & Guide`,
    description: `Comprehensive 2026 real estate & neighborhood guide for ${community.name}, ${community.cityState}. Settled comps, history, architectural styles, ${community.schools}, and representation with Elena Gorbounova.`,
    alternates: {
      canonical: `https://www.homesalesfairfax.com/communities/${community.slug}`,
    },
    openGraph: {
      title: `${community.name} Real Estate & History | Fairfax County Guide`,
      description: community.heroHeadline,
      url: `https://www.homesalesfairfax.com/communities/${community.slug}`,
      siteName: "homesalesfairfax.com",
      images: [
        {
          url: `https://www.homesalesfairfax.com${community.image}`,
          width: 1200,
          height: 800,
          alt: `${community.name} Real Estate & History`,
        },
      ],
      locale: "en_US",
      type: "article",
    },
  };
}

export default async function CommunityDetailPage({ params }) {
  const { slug } = await params;
  const community = getCommunityBySlug(slug);

  if (!community) {
    notFound();
  }

  const directPhone = "(703) 625-7888";
  const telHref = "tel:7036257888";
  const smsHref = `sms:+17036257888?body=Hi%20Elena,%20I'm%20interested%20in%20${encodeURIComponent(community.name)}%20real%20estate.`;
  const email = "ElenaYSC@gmail.com";
  const mailHref = `mailto:ElenaYSC@gmail.com?subject=${encodeURIComponent(community.name)}%20Real%20Estate%20Inquiry`;

  // Schema.org structured data: Place + FAQPage
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Place",
      "name": `${community.name}, Fairfax County, Virginia`,
      "description": community.story,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": community.city,
        "addressRegion": "VA",
        "postalCode": community.zip,
        "addressCountry": "US"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "RealEstateAgent",
      "name": "Elena Gorbounova & Kirill - RE/MAX Allegiance",
      "image": "https://www.homesalesfairfax.com/images/elena-portrait.jpg",
      "telephone": "+1-703-625-7888",
      "email": "ElenaYSC@gmail.com",
      "url": `https://www.homesalesfairfax.com/communities/${community.slug}`,
      "priceRange": "$$$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "5100 Leesburg Pike, Suite 200",
        "addressLocality": "Alexandria",
        "addressRegion": "VA",
        "postalCode": "22302",
        "addressCountry": "US"
      },
      "areaServed": `${community.name}, ${community.cityState}`
    }
  ];

  if (community.faqs && community.faqs.length > 0) {
    structuredData.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": community.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    });
  }

  // Get rotating neighboring communities for comprehensive internal network linking
  const currentIndex = FAIRFAX_COMMUNITIES.findIndex(c => c.slug === community.slug);
  const otherCommunities = [];
  for (let i = 1; i <= 6; i++) {
    const nextIndex = (currentIndex + i) % FAIRFAX_COMMUNITIES.length;
    otherCommunities.push(FAIRFAX_COMMUNITIES[nextIndex]);
  }

  return (
    <main style={{ background: "#FFFFFF", color: "var(--ink-950)" }}>
      {structuredData.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="page-wrapper" style={{ paddingBottom: 0 }}>
        <Navbar />
      </div>

      {/* Header & Breadcrumbs */}
      <section className="container" style={{ maxWidth: "1080px", paddingTop: "36px", paddingBottom: "20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "12px", borderBottom: "1px solid var(--ink-200)", paddingBottom: "18px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "1.2rem", color: "var(--accent-gold-hover)" }}>📍</span>
              <h1 style={{
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                fontWeight: 800,
                color: "var(--ink-950)",
                letterSpacing: "-0.03em",
                margin: 0
              }}>
                {community.name}
              </h1>
              <span style={{ fontSize: "1.1rem", color: "var(--ink-500)", fontWeight: 400, marginLeft: "8px" }}>
                {community.cityState}
              </span>
            </div>
          </div>

          <nav aria-label="Breadcrumb" style={{ fontSize: "0.86rem", color: "var(--ink-500)", display: "flex", alignItems: "center", gap: "8px" }}>
            <Link href="/" style={{ color: "var(--ink-600)", textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <Link href="/communities" style={{ color: "var(--ink-600)", textDecoration: "none" }}>Communities</Link>
            <span>/</span>
            <span style={{ color: "var(--ink-950)", fontWeight: 600 }}>{community.name}</span>
          </nav>
        </div>
      </section>

      {/* Hero Visual Presentation */}
      <section className="container" style={{ maxWidth: "1080px", marginBottom: "36px" }}>
        <div style={{
          position: "relative",
          width: "100%",
          paddingTop: "50%",
          borderRadius: "14px",
          overflow: "hidden",
          boxShadow: "0 18px 45px -10px rgba(15, 23, 42, 0.18)",
          background: "#0F172A"
        }}>
          <img 
            src={community.image} 
            alt={`${community.name} Real Estate & Architecture`}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }}
          />

          <div style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            background: "linear-gradient(180deg, transparent 0%, rgba(15, 23, 42, 0.90) 100%)",
            padding: "36px 32px 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "16px",
            color: "#FFFFFF"
          }}>
            <div>
              <span style={{ fontSize: "0.8rem", color: "var(--accent-gold)", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700, display: "block" }}>
                {community.subdivision} • ZIP {community.zip}
              </span>
              <div style={{ fontSize: "1.7rem", fontWeight: 800, letterSpacing: "-0.02em", color: "#FFFFFF" }}>
                {community.name} Real Estate &amp; Heritage
              </div>
            </div>

            <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
              <span style={{
                background: "rgba(255, 255, 255, 0.18)",
                backdropFilter: "blur(8px)",
                padding: "6px 14px",
                borderRadius: "9999px",
                fontSize: "0.82rem",
                fontWeight: 700,
                border: "1px solid rgba(255, 255, 255, 0.3)"
              }}>
                Avg {community.avgDOM} DOM
              </span>
              <span style={{
                background: "var(--accent-gold-hover)",
                color: "#FFFFFF",
                padding: "6px 14px",
                borderRadius: "9999px",
                fontSize: "0.82rem",
                fontWeight: 700
              }}>
                {community.priceChangeYoY} YoY
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Editorial Story Section */}
      <article className="container" style={{ maxWidth: "860px", margin: "0 auto 60px", padding: "0 20px" }}>
        
        {/* Primary Headline */}
        <h2 style={{
          fontSize: "clamp(1.8rem, 3.2vw, 2.3rem)",
          fontWeight: 800,
          color: "var(--ink-950)",
          letterSpacing: "-0.025em",
          lineHeight: 1.3,
          marginBottom: "20px"
        }}>
          {community.heroHeadline}
        </h2>

        {/* Narrative Intro */}
        <p style={{
          fontSize: "1.12rem",
          color: "var(--ink-800)",
          lineHeight: 1.85,
          marginBottom: "36px"
        }}>
          {community.story}
        </p>

        {/* History Section */}
        {community.history && (
          <section style={{ marginBottom: "44px" }}>
            <h3 style={{
              fontSize: "1.6rem",
              fontWeight: 800,
              color: "var(--ink-950)",
              letterSpacing: "-0.02em",
              marginBottom: "16px"
            }}>
              {community.historyHeadline || `History & Heritage of ${community.name}`}
            </h3>
            {community.history.split("\n\n").map((para, i) => (
              <p key={i} style={{
                fontSize: "1.08rem",
                color: "var(--ink-800)",
                lineHeight: 1.85,
                marginBottom: "18px"
              }}>
                {para}
              </p>
            ))}
          </section>
        )}

        {/* Super Interesting & Important Highlights */}
        {community.interestingFacts && community.interestingFacts.length > 0 && (
          <section style={{ marginBottom: "44px" }}>
            <h3 style={{
              fontSize: "1.6rem",
              fontWeight: 800,
              color: "var(--ink-950)",
              letterSpacing: "-0.02em",
              marginBottom: "18px"
            }}>
              Key Highlights &amp; Fascinating Facts About {community.name}
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
              {community.interestingFacts.map((fact, idx) => (
                <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "1.04rem", color: "var(--ink-800)", lineHeight: 1.75 }}>
                  <span style={{ color: "var(--accent-gold-hover)", fontWeight: 800, fontSize: "1.15rem", lineHeight: 1.3, flexShrink: 0 }}>✦</span>
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Architectural Styles Section */}
        {community.architecture && (
          <section style={{ marginBottom: "44px" }}>
            <h3 style={{
              fontSize: "1.6rem",
              fontWeight: 800,
              color: "var(--ink-950)",
              letterSpacing: "-0.02em",
              marginBottom: "16px"
            }}>
              {community.architectureHeadline || "Architectural Character & Floor Plans"}
            </h3>
            <p style={{
              fontSize: "1.08rem",
              color: "var(--ink-800)",
              lineHeight: 1.85,
              marginBottom: 0
            }}>
              {community.architecture}
            </p>
          </section>
        )}

        {/* School Pyramid & Education */}
        <section style={{ marginBottom: "44px" }}>
          <h3 style={{
            fontSize: "1.6rem",
            fontWeight: 800,
            color: "var(--ink-950)",
            letterSpacing: "-0.02em",
            marginBottom: "16px"
          }}>
            Fairfax County Public Schools: {community.schools}
          </h3>
          <p style={{ fontSize: "1.06rem", color: "var(--ink-800)", lineHeight: 1.8, marginBottom: "12px" }}>
            {community.schoolPyramidDetails || `Residents in ${community.name} enjoy assignment to premier Fairfax County Public Schools, known for advanced academics, International Baccalaureate and AP options, and comprehensive athletic programs.`}
          </p>
          <p style={{ fontSize: "1.04rem", color: "var(--ink-800)", lineHeight: 1.75, marginBottom: 0 }}>
            <strong>Assigned Schools:</strong> {community.elementarySchool} • {community.middleSchool} • {community.highSchool}
          </p>
        </section>

        {/* Commute & Transit Access */}
        {community.commuteDetails && (
          <section style={{ marginBottom: "44px" }}>
            <h3 style={{
              fontSize: "1.6rem",
              fontWeight: 800,
              color: "var(--ink-950)",
              letterSpacing: "-0.02em",
              marginBottom: "16px"
            }}>
              Commute Corridors &amp; Metrorail Access
            </h3>
            <p style={{
              fontSize: "1.08rem",
              color: "var(--ink-800)",
              lineHeight: 1.85,
              marginBottom: 0
            }}>
              {community.commuteDetails}
            </p>
          </section>
        )}

        {/* Parks, Recreation & Lifestyle */}
        {community.lifestyle && (
          <section style={{ marginBottom: "44px" }}>
            <h3 style={{
              fontSize: "1.6rem",
              fontWeight: 800,
              color: "var(--ink-950)",
              letterSpacing: "-0.02em",
              marginBottom: "16px"
            }}>
              Parks, Recreation &amp; Local Lifestyle
            </h3>
            <p style={{
              fontSize: "1.08rem",
              color: "var(--ink-800)",
              lineHeight: 1.85,
              marginBottom: 0
            }}>
              {community.lifestyle}
            </p>
          </section>
        )}

        {/* Seller Market Advisory & Equity Guide */}
        {community.sellerAdvice && (
          <section style={{ marginBottom: "48px" }}>
            <h3 style={{
              fontSize: "1.6rem",
              fontWeight: 800,
              color: "var(--ink-950)",
              letterSpacing: "-0.02em",
              marginBottom: "16px"
            }}>
              How to Maximize Your Home Equity in {community.name}
            </h3>
            <p style={{
              fontSize: "1.08rem",
              color: "var(--ink-800)",
              lineHeight: 1.85,
              marginBottom: 0
            }}>
              {community.sellerAdvice}
            </p>
          </section>
        )}

        {/* Recent Settled Sales Comparables */}
        {community.comps && community.comps.length > 0 && (
          <section style={{ marginBottom: "52px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "16px", flexWrap: "wrap", gap: "10px" }}>
              <div>
                <span style={{ fontSize: "0.78rem", color: "var(--status-active)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  Bright MLS Verified Closed Transactions
                </span>
                <h3 style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--ink-950)", margin: "4px 0" }}>
                  Recent Settled Sales in {community.name}
                </h3>
              </div>
              <span style={{ fontSize: "0.82rem", color: "var(--ink-500)" }}>
                Direct MLS comps
              </span>
            </div>

            <div style={{ border: "1px solid var(--ink-200)", borderRadius: "12px", overflow: "hidden" }}>
              {community.comps.map((c, idx) => (
                <div 
                  key={idx}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "16px 20px",
                    background: idx % 2 === 0 ? "#FFFFFF" : "#F8FAFC",
                    borderBottom: idx === community.comps.length - 1 ? "none" : "1px solid var(--ink-100)",
                    flexWrap: "wrap",
                    gap: "12px"
                  }}
                >
                  <div>
                    <strong style={{ fontSize: "1.02rem", color: "var(--ink-950)", display: "block" }}>{c.address}</strong>
                    <span style={{ fontSize: "0.84rem", color: "var(--ink-600)" }}>{c.specs}</span>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: "0.95rem", fontWeight: 800, color: "var(--status-active)" }}>Bright MLS Settled Record</div>
                    <span style={{ fontSize: "0.78rem", color: "var(--ink-500)", fontWeight: 600 }}>{c.days} • Full Details on Request</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Frequently Asked Questions Accordion */}
        {community.faqs && community.faqs.length > 0 && (
          <section style={{ marginBottom: "56px" }}>
            <span style={{ fontSize: "0.78rem", color: "var(--accent-gold-hover)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", display: "block", marginBottom: "6px" }}>
              Buyer &amp; Seller Intelligence
            </span>
            <h3 style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--ink-950)", marginBottom: "20px" }}>
              Frequently Asked Questions About {community.name}
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {community.faqs.map((faq, idx) => (
                <details 
                  key={idx}
                  style={{
                    background: "#F8FAFC",
                    border: "1px solid var(--ink-200)",
                    borderRadius: "10px",
                    padding: "16px 20px"
                  }}
                >
                  <summary style={{
                    fontSize: "1.02rem",
                    fontWeight: 700,
                    color: "var(--ink-950)",
                    cursor: "pointer",
                    outline: "none"
                  }}>
                    {faq.question}
                  </summary>
                  <p style={{
                    fontSize: "0.98rem",
                    color: "var(--ink-700)",
                    lineHeight: 1.75,
                    marginTop: "12px",
                    marginBottom: 0
                  }}>
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* Clean Direct Contact Callout */}
        <section style={{
          background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
          color: "#FFFFFF",
          borderRadius: "16px",
          padding: "44px 32px",
          textAlign: "center",
          boxShadow: "0 20px 40px -10px rgba(15, 23, 42, 0.25)",
          marginBottom: "56px"
        }}>
          <span style={{
            fontSize: "0.82rem",
            color: "var(--accent-gold)",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            display: "block",
            marginBottom: "10px"
          }}>
            {community.name} Specialist • Elena Gorbounova
          </span>

          <h3 style={{ fontSize: "clamp(1.7rem, 2.8vw, 2.2rem)", fontWeight: 800, color: "#FFFFFF", marginBottom: "14px", letterSpacing: "-0.02em" }}>
            Questions About Buying or Selling in {community.name}?
          </h3>

          <p style={{ fontSize: "1.08rem", color: "#CBD5E1", lineHeight: 1.75, maxWidth: "620px", margin: "0 auto 28px" }}>
            Elena Gorbounova provides private in-home valuations, settled comp reports, and off-market buyer matching with zero obligation.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "14px", flexWrap: "wrap", alignItems: "center" }}>
            <a 
              href={telHref} 
              className="btn btn-primary"
              style={{
                background: "var(--accent-gold-hover)",
                borderColor: "var(--accent-gold-hover)",
                color: "#FFFFFF",
                padding: "14px 26px",
                fontWeight: 800,
                fontSize: "1rem"
              }}
            >
              📞 Call Direct: {directPhone}
            </a>

            <a 
              href={mailHref} 
              className="btn btn-outline"
              style={{
                color: "#FFFFFF",
                borderColor: "rgba(255, 255, 255, 0.4)",
                padding: "14px 26px",
                fontWeight: 700,
                fontSize: "1rem"
              }}
            >
              ✉️ Email: {email}
            </a>

            <a 
              href={smsHref} 
              className="btn btn-outline"
              style={{
                color: "#FFFFFF",
                borderColor: "rgba(255, 255, 255, 0.4)",
                padding: "14px 22px",
                fontWeight: 600,
                fontSize: "0.95rem"
              }}
            >
              💬 Text for Comps
            </a>
          </div>
        </section>

        {/* Explore Other Fairfax Communities */}
        <section style={{ borderTop: "1px solid var(--ink-200)", paddingTop: "40px", marginBottom: "40px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", flexWrap: "wrap", gap: "10px" }}>
            <h4 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--ink-950)", margin: 0 }}>
              Explore Nearby Northern Virginia Communities
            </h4>
            <Link href="/communities" style={{ fontSize: "0.88rem", color: "var(--accent-gold)", fontWeight: 700, textDecoration: "none" }}>
              View All 16 Communities &rarr;
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
            {otherCommunities.map(other => (
              <Link 
                key={other.id} 
                href={`/communities/${other.slug}`}
                style={{
                  display: "flex",
                  gap: "14px",
                  alignItems: "center",
                  textDecoration: "none",
                  color: "inherit",
                  padding: "14px",
                  borderRadius: "12px",
                  border: "1px solid var(--ink-200)",
                  background: "#F8FAFC",
                  transition: "all 0.2s ease"
                }}
              >
                <img 
                  src={other.image} 
                  alt={other.name} 
                  style={{ width: "68px", height: "68px", borderRadius: "8px", objectFit: "cover", flexShrink: 0 }}
                />
                <div>
                  <strong style={{ fontSize: "0.95rem", color: "var(--ink-950)", display: "block" }}>{other.name}</strong>
                  <span style={{ fontSize: "0.78rem", color: "var(--ink-600)", display: "block" }}>{other.cityState}</span>
                  <span style={{ fontSize: "0.82rem", color: "var(--accent-gold-hover)", fontWeight: 700, display: "block", marginTop: "2px" }}>
                    {other.avgDOM} DOM • {other.schools}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Regional Virginia Divisions Cross-Link Strip */}
        <section style={{ borderTop: "1px solid var(--ink-200)", paddingTop: "32px" }}>
          <span style={{ fontSize: "0.78rem", fontWeight: 800, color: "var(--accent-gold)", textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: "8px" }}>
            Explore Virginia Regional Divisions &amp; Jurisdictions
          </span>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "12px" }}>
            {VIRGINIA_DIVISIONS.map(div => (
              <Link
                key={div.id}
                href={`/divisions/${div.slug}`}
                style={{
                  padding: "8px 14px",
                  background: "#F1F5F9",
                  borderRadius: "9999px",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "var(--ink-800)",
                  textDecoration: "none",
                  border: "1px solid var(--ink-200)",
                  transition: "background 0.15s ease"
                }}
              >
                {div.name} Division &rarr;
              </Link>
            ))}
          </div>
        </section>

      </article>

      <Footer />
    </main>
  );
}
