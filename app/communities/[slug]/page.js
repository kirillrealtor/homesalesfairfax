import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { FAIRFAX_COMMUNITIES, getCommunityBySlug } from "../../data/communities";

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
    title: `${community.name} Real Estate & Homes For Sale | ${community.zip} Market Guide`,
    description: `Comprehensive 2026 real estate guide for ${community.name}, ${community.cityState}. View recent settled comps, history, architectural styles, ${community.schools}, and market reports with Elena Gorbounova.`,
    alternates: {
      canonical: `https://homesalesfairfax.com/communities/${community.slug}`,
    },
    openGraph: {
      title: `${community.name} Real Estate | Fairfax County Market Guide`,
      description: community.heroHeadline,
      url: `https://homesalesfairfax.com/communities/${community.slug}`,
      siteName: "homesalesfairfax.com",
      images: [
        {
          url: `https://homesalesfairfax.com${community.image}`,
          width: 1200,
          height: 800,
          alt: `${community.name} Luxury Real Estate`,
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

  // Schema.org structured data: Place + FAQPage for rich Google SERP snippets
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

  // Get neighboring communities for quick cross-linking
  const otherCommunities = FAIRFAX_COMMUNITIES
    .filter(c => c.slug !== community.slug)
    .slice(0, 3);

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

      {/* Chris Cortazzo Style Area Header Strip */}
      <section className="container" style={{ maxWidth: "1120px", paddingTop: "36px", paddingBottom: "20px" }}>
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

          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" style={{ fontSize: "0.86rem", color: "var(--ink-500)", display: "flex", alignItems: "center", gap: "8px" }}>
            <Link href="/" style={{ color: "var(--ink-600)", textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <Link href="/communities" style={{ color: "var(--ink-600)", textDecoration: "none" }}>Communities</Link>
            <span>/</span>
            <span style={{ color: "var(--ink-950)", fontWeight: 600 }}>{community.name}</span>
          </nav>
        </div>
      </section>

      {/* Chris Cortazzo Style Hero Image Presentation */}
      <section className="container" style={{ maxWidth: "1120px", marginBottom: "36px" }}>
        <div style={{
          position: "relative",
          width: "100%",
          paddingTop: "50%", /* Cinematic Luxury Ratio */
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

          {/* Luxury Bottom Stats Strip Inside Image */}
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
                Median Sold: {community.medianPrice}
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

      {/* Quick Fast Facts Bar */}
      {community.fastFacts && (
        <section className="container" style={{ maxWidth: "1120px", marginBottom: "48px" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
            gap: "12px",
            background: "#F8FAFC",
            border: "1px solid var(--ink-200)",
            borderRadius: "12px",
            padding: "20px 24px"
          }}>
            {community.fastFacts.map((fact, i) => (
              <div key={i} style={{ borderRight: i === community.fastFacts.length - 1 ? "none" : "1px solid var(--ink-200)", paddingRight: "10px" }}>
                <span style={{ fontSize: "0.72rem", color: "var(--ink-500)", textTransform: "uppercase", letterSpacing: "0.06em", display: "block", fontWeight: 600 }}>
                  {fact.label}
                </span>
                <strong style={{ fontSize: "1.02rem", color: "var(--ink-950)", fontWeight: 800, marginTop: "3px", display: "block" }}>
                  {fact.value}
                </strong>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Main Editorial Story Section */}
      <article className="container" style={{ maxWidth: "900px", margin: "0 auto", padding: "0 20px" }}>
        
        {/* Primary Headline */}
        <h2 style={{
          fontSize: "clamp(1.8rem, 3.2vw, 2.4rem)",
          fontWeight: 800,
          color: "var(--ink-950)",
          letterSpacing: "-0.025em",
          lineHeight: 1.25,
          marginBottom: "24px"
        }}>
          {community.heroHeadline}
        </h2>

        {/* Narrative Intro */}
        <div style={{
          fontSize: "1.14rem",
          color: "var(--ink-800)",
          lineHeight: 1.85,
          marginBottom: "36px"
        }}>
          <p style={{ marginBottom: "20px" }}>
            {community.story}
          </p>
        </div>

        {/* Cortazzo Three-Dot Divider */}
        <div style={{ textAlign: "center", margin: "40px 0", color: "var(--accent-gold-hover)", fontSize: "1.6rem", letterSpacing: "12px" }}>
          •••
        </div>

        {/* History Section */}
        <section style={{ marginBottom: "48px" }}>
          <h3 style={{
            fontSize: "1.65rem",
            fontWeight: 800,
            color: "var(--ink-950)",
            letterSpacing: "-0.02em",
            marginBottom: "16px"
          }}>
            {community.historyHeadline}
          </h3>
          <p style={{
            fontSize: "1.06rem",
            color: "var(--ink-700)",
            lineHeight: 1.85
          }}>
            {community.history}
          </p>
        </section>

        {/* Architectural Styles Section */}
        <section style={{ marginBottom: "48px" }}>
          <h3 style={{
            fontSize: "1.65rem",
            fontWeight: 800,
            color: "var(--ink-950)",
            letterSpacing: "-0.02em",
            marginBottom: "16px"
          }}>
            {community.architectureHeadline}
          </h3>
          <p style={{
            fontSize: "1.06rem",
            color: "var(--ink-700)",
            lineHeight: 1.85
          }}>
            {community.architecture}
          </p>
        </section>

        {/* School Pyramid & Education Box */}
        <section style={{
          background: "linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)",
          borderRadius: "14px",
          border: "1px solid var(--ink-200)",
          padding: "32px 28px",
          marginBottom: "48px",
          boxShadow: "0 4px 14px rgba(15, 23, 42, 0.04)"
        }}>
          <span style={{ fontSize: "0.78rem", color: "#B45309", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", display: "block", marginBottom: "8px" }}>
            Fairfax County Public Schools (FCPS)
          </span>
          <h3 style={{ fontSize: "1.55rem", fontWeight: 800, color: "var(--ink-950)", marginBottom: "12px" }}>
            Assigned School Pyramid: {community.schools}
          </h3>
          {community.schoolPyramidDetails && (
            <p style={{ fontSize: "0.98rem", color: "var(--ink-700)", lineHeight: 1.7, marginBottom: "20px" }}>
              {community.schoolPyramidDetails}
            </p>
          )}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
            <div style={{ background: "#FFFFFF", padding: "18px", borderRadius: "10px", border: "1px solid var(--ink-200)" }}>
              <span style={{ fontSize: "0.75rem", color: "var(--ink-500)", textTransform: "uppercase", fontWeight: 700 }}>Elementary School</span>
              <strong style={{ display: "block", color: "var(--ink-950)", fontSize: "0.95rem", marginTop: "4px" }}>{community.elementarySchool}</strong>
            </div>
            <div style={{ background: "#FFFFFF", padding: "18px", borderRadius: "10px", border: "1px solid var(--ink-200)" }}>
              <span style={{ fontSize: "0.75rem", color: "var(--ink-500)", textTransform: "uppercase", fontWeight: 700 }}>Middle School</span>
              <strong style={{ display: "block", color: "var(--ink-950)", fontSize: "0.95rem", marginTop: "4px" }}>{community.middleSchool}</strong>
            </div>
            <div style={{ background: "#FFFFFF", padding: "18px", borderRadius: "10px", border: "1px solid var(--ink-200)" }}>
              <span style={{ fontSize: "0.75rem", color: "var(--ink-500)", textTransform: "uppercase", fontWeight: 700 }}>High School</span>
              <strong style={{ display: "block", color: "var(--ink-950)", fontSize: "0.95rem", marginTop: "4px" }}>{community.highSchool}</strong>
            </div>
          </div>
        </section>

        {/* Commute & Transit Access */}
        {community.commuteDetails && (
          <section style={{ marginBottom: "48px" }}>
            <h3 style={{
              fontSize: "1.65rem",
              fontWeight: 800,
              color: "var(--ink-950)",
              letterSpacing: "-0.02em",
              marginBottom: "16px"
            }}>
              Commute Corridors &amp; Metrorail Access
            </h3>
            <p style={{
              fontSize: "1.06rem",
              color: "var(--ink-700)",
              lineHeight: 1.85
            }}>
              {community.commuteDetails}
            </p>
          </section>
        )}

        {/* Parks, Recreation & Lifestyle */}
        <section style={{ marginBottom: "48px" }}>
          <h3 style={{
            fontSize: "1.65rem",
            fontWeight: 800,
            color: "var(--ink-950)",
            letterSpacing: "-0.02em",
            marginBottom: "16px"
          }}>
            Parks, Recreation &amp; Local Lifestyle
          </h3>
          <p style={{
            fontSize: "1.06rem",
            color: "var(--ink-700)",
            lineHeight: 1.85
          }}>
            {community.lifestyle}
          </p>
        </section>

        {/* Seller Market Advisory & Equity Guide */}
        {community.sellerAdvice && (
          <section style={{
            background: "#FFFBEB",
            border: "1px solid #FDE68A",
            borderRadius: "14px",
            padding: "32px 28px",
            marginBottom: "52px"
          }}>
            <span style={{ fontSize: "0.78rem", color: "#B45309", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", display: "block", marginBottom: "8px" }}>
              Subdivision Seller Advisory • Elena Gorbounova
            </span>
            <h3 style={{ fontSize: "1.55rem", fontWeight: 800, color: "var(--ink-950)", marginBottom: "14px" }}>
              How to Maximize Your Home Valuation in {community.name}
            </h3>
            <p style={{ fontSize: "1.02rem", color: "var(--ink-800)", lineHeight: 1.8, marginBottom: "18px" }}>
              {community.sellerAdvice}
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
              <Link 
                href="/home-valuation" 
                className="btn btn-primary"
                style={{ background: "#B45309", borderColor: "#B45309", color: "#FFFFFF", padding: "10px 20px", fontSize: "0.9rem" }}
              >
                Request Custom Equity Report &rarr;
              </Link>
              <Link
                href={community.postcardHref || "/market-report"}
                className="btn btn-outline"
                style={{ borderColor: "#D97706", color: "#92400E", padding: "10px 20px", fontSize: "0.9rem" }}
              >
                View Monthly Market Report
              </Link>
            </div>
          </section>
        )}

        {/* Recent Settled Sales Comparables */}
        <section style={{ marginBottom: "52px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "16px", flexWrap: "wrap", gap: "10px" }}>
            <div>
              <span style={{ fontSize: "0.78rem", color: "var(--status-active)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                Bright MLS Verified Closed Transactions
              </span>
              <h3 style={{ fontSize: "1.65rem", fontWeight: 800, color: "var(--ink-950)", margin: "4px 0" }}>
                Recent Settled Sales in {community.name}
              </h3>
            </div>
            <span style={{ fontSize: "0.82rem", color: "var(--ink-500)" }}>
              Direct MLSsettled comps
            </span>
          </div>

          <div style={{ border: "1px solid var(--ink-200)", borderRadius: "12px", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }}>
            {community.comps.map((c, idx) => (
              <div 
                key={idx}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "18px 22px",
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
                  <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--ink-950)" }}>{c.price}</div>
                  <span style={{ fontSize: "0.78rem", color: "var(--status-active)", fontWeight: 600 }}>{c.days} • {c.status}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Frequently Asked Questions Accordion */}
        {community.faqs && community.faqs.length > 0 && (
          <section style={{ marginBottom: "60px" }}>
            <span style={{ fontSize: "0.78rem", color: "var(--accent-gold-hover)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", display: "block", marginBottom: "6px" }}>
              Buyer &amp; Seller Intelligence
            </span>
            <h3 style={{ fontSize: "1.65rem", fontWeight: 800, color: "var(--ink-950)", marginBottom: "20px" }}>
              Frequently Asked Questions About {community.name}
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
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
                    fontSize: "0.96rem",
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

        {/* Cortazzo Dedicated Consultation / Valuation Callout */}
        <section style={{
          background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
          color: "#FFFFFF",
          borderRadius: "16px",
          padding: "48px 36px",
          textAlign: "center",
          marginBottom: "60px",
          boxShadow: "0 20px 40px -10px rgba(15, 23, 42, 0.25)"
        }}>
          <span style={{
            fontSize: "0.8rem",
            color: "var(--accent-gold)",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            display: "block",
            marginBottom: "12px"
          }}>
            Fairfax County Specialist • Elena Gorbounova
          </span>

          <h3 style={{ fontSize: "clamp(1.8rem, 3vw, 2.3rem)", fontWeight: 800, color: "#FFFFFF", marginBottom: "14px", letterSpacing: "-0.02em" }}>
            Considering Selling Your Home in {community.name}?
          </h3>

          <p style={{ fontSize: "1.08rem", color: "#CBD5E1", lineHeight: 1.75, maxWidth: "660px", margin: "0 auto 30px" }}>
            Discover what active qualified buyers are willing to pay for your specific street address. Elena provides a discreet, in-home valuation, settled comp analysis, and tailored pre-listing strategy.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
            <a 
              href="tel:7036257888" 
              className="btn btn-primary"
              style={{
                background: "var(--accent-gold-hover)",
                borderColor: "var(--accent-gold-hover)",
                color: "#FFFFFF",
                padding: "14px 28px",
                fontWeight: 700
              }}
            >
              Call Elena: (703) 625-7888
            </a>

            <a 
              href={`sms:+17036257888?body=Hi%20Elena,%20I%20own%20a%20home%20in%20${encodeURIComponent(community.name)}.%20Can%20you%20send%20me%20recent%20settled%20comps%20and%20an%20equity%20estimate?`}
              className="btn btn-outline"
              style={{
                color: "#FFFFFF",
                borderColor: "rgba(255, 255, 255, 0.35)",
                padding: "14px 28px",
                fontWeight: 600
              }}
            >
              Text Address for Comps
            </a>

            <Link 
              href="/home-valuation" 
              className="btn btn-outline"
              style={{
                color: "#FFFFFF",
                borderColor: "rgba(255, 255, 255, 0.35)",
                padding: "14px 28px",
                fontWeight: 600
              }}
            >
              Instant Home Valuation &rarr;
            </Link>
          </div>
        </section>

        {/* Explore Other Fairfax Communities */}
        <section style={{ borderTop: "1px solid var(--ink-200)", paddingTop: "40px", marginBottom: "60px" }}>
          <h4 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--ink-950)", marginBottom: "20px" }}>
            Explore Nearby Fairfax Communities
          </h4>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
            {otherCommunities.map(other => (
              <Link 
                key={other.id} 
                href={other.href}
                style={{
                  display: "flex",
                  gap: "14px",
                  alignItems: "center",
                  textDecoration: "none",
                  color: "inherit",
                  padding: "12px",
                  borderRadius: "10px",
                  border: "1px solid var(--ink-200)",
                  background: "#F8FAFC",
                  transition: "background 0.2s ease"
                }}
              >
                <img 
                  src={other.image} 
                  alt={other.name} 
                  style={{ width: "64px", height: "64px", borderRadius: "8px", objectFit: "cover" }}
                />
                <div>
                  <strong style={{ fontSize: "0.95rem", color: "var(--ink-950)", display: "block" }}>{other.name}</strong>
                  <span style={{ fontSize: "0.78rem", color: "var(--ink-600)" }}>{other.cityState}</span>
                  <span style={{ fontSize: "0.82rem", color: "var(--accent-gold-hover)", fontWeight: 700, display: "block", marginTop: "2px" }}>
                    {other.medianPrice}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </article>

      <Footer />
    </main>
  );
}
