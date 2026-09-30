import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { VIRGINIA_SUBDIVISIONS, VIRGINIA_DIVISIONS, getSubdivisionBySlug, getDivisionBySlug } from "../../data/virginiaDivisions";
import { FAIRFAX_COMMUNITIES } from "../../data/communities";

export function generateStaticParams() {
  return VIRGINIA_SUBDIVISIONS.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const sub = getSubdivisionBySlug(slug);

  if (!sub) {
    return {
      title: "Subdivision Not Found | homesalesfairfax.com",
    };
  }

  const pageTitle = `${sub.name}, VA Real Estate Guide`;

  return {
    title: pageTitle,
    description: `Complete guide to ${sub.name}, ${sub.city} VA (${sub.zip}). History, architectural styles, ${sub.schools}, settled comps, and top listing representation with Elena Gorbounova.`,
    alternates: {
      canonical: `https://www.homesalesfairfax.com/subdivisions/${sub.slug}`,
    },
    openGraph: {
      title: pageTitle,
      description: sub.sellerLeadSnippet,
      url: `https://www.homesalesfairfax.com/subdivisions/${sub.slug}`,
      siteName: "homesalesfairfax.com",
      images: [
        {
          url: `https://www.homesalesfairfax.com${sub.image}`,
          width: 1200,
          height: 800,
          alt: `${sub.name} Real Estate & History`,
        },
      ],
      locale: "en_US",
      type: "article",
    },
  };
}

export default async function SubdivisionDetailPage({ params }) {
  const { slug } = await params;
  const sub = getSubdivisionBySlug(slug);

  if (!sub) {
    notFound();
  }

  const division = getDivisionBySlug(sub.divisionSlug);
  const directPhone = "(703) 625-7888";
  const telHref = "tel:7036257888";
  const smsHref = `sms:+17036257888?body=Hi%20Elena,%20I'm%20interested%20in%20${encodeURIComponent(sub.name)}%20real%20estate.`;
  const email = "ElenaYSC@gmail.com";
  const mailHref = `mailto:ElenaYSC@gmail.com?subject=${encodeURIComponent(sub.name)}%20Real%20Estate%20Inquiry`;

  // Get rotating neighboring subdivisions for comprehensive internal network linking
  const currentIndex = VIRGINIA_SUBDIVISIONS.findIndex(s => s.slug === sub.slug);
  const otherSubdivisions = [];
  for (let i = 1; i <= 6; i++) {
    const nextIndex = (currentIndex + i) % VIRGINIA_SUBDIVISIONS.length;
    otherSubdivisions.push(VIRGINIA_SUBDIVISIONS[nextIndex]);
  }

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Place",
      "name": `${sub.name}, ${sub.city}, Virginia`,
      "description": sub.overview,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": sub.city,
        "addressRegion": "VA",
        "postalCode": sub.zip,
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
      "url": `https://www.homesalesfairfax.com/subdivisions/${sub.slug}`,
      "priceRange": "$$$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "5100 Leesburg Pike, Suite 200",
        "addressLocality": "Alexandria",
        "addressRegion": "VA",
        "postalCode": "22302",
        "addressCountry": "US"
      },
      "areaServed": `${sub.name}, ${sub.city}, VA`
    }
  ];

  if (sub.faqs && sub.faqs.length > 0) {
    structuredData.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": sub.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    });
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
            <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "1.2rem", color: "var(--accent-gold)" }}>📍</span>
              <h1 style={{
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                fontWeight: 800,
                color: "var(--ink-950)",
                letterSpacing: "-0.03em",
                margin: 0
              }}>
                {sub.name}
              </h1>
              <span style={{ fontSize: "1.05rem", color: "var(--ink-500)", fontWeight: 500 }}>
                {sub.city}, VA {sub.zip}
              </span>
            </div>
          </div>

          <nav aria-label="Breadcrumb" style={{ fontSize: "0.86rem", color: "var(--ink-500)", display: "flex", alignItems: "center", gap: "8px" }}>
            <Link href="/" style={{ color: "var(--ink-600)", textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <Link href="/divisions" style={{ color: "var(--ink-600)", textDecoration: "none" }}>Divisions</Link>
            <span>/</span>
            {division && (
              <>
                <Link href={`/divisions/${division.slug}`} style={{ color: "var(--ink-600)", textDecoration: "none" }}>
                  {division.name}
                </Link>
                <span>/</span>
              </>
            )}
            <span style={{ color: "var(--ink-950)", fontWeight: 600 }}>{sub.name}</span>
          </nav>
        </div>
      </section>

      {/* Hero Visual Presentation */}
      <section className="container" style={{ maxWidth: "1080px", marginBottom: "36px" }}>
        <div style={{
          position: "relative",
          width: "100%",
          paddingTop: "46%",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 18px 45px -10px rgba(15, 23, 42, 0.18)",
          background: "#0F172A"
        }}>
          <img 
            src={sub.image} 
            alt={`${sub.name} Real Estate & History`}
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
            background: "linear-gradient(180deg, transparent 0%, rgba(15, 23, 42, 0.92) 100%)",
            padding: "40px 32px 26px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "18px",
            color: "#FFFFFF"
          }}>
            <div>
              <span style={{ fontSize: "0.82rem", color: "var(--accent-gold)", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700, display: "block" }}>
                {sub.divisionName} • ZIP {sub.zip}
              </span>
              <div style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "#FFFFFF", marginTop: "4px" }}>
                {sub.name} Real Estate &amp; Heritage
              </div>
            </div>

            <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
              <span style={{
                background: "rgba(255, 255, 255, 0.18)",
                backdropFilter: "blur(8px)",
                padding: "8px 16px",
                borderRadius: "9999px",
                fontSize: "0.85rem",
                fontWeight: 700,
                border: "1px solid rgba(255, 255, 255, 0.3)"
              }}>
                Avg {sub.avgDOM} DOM
              </span>
              <span style={{
                background: "var(--accent-gold)",
                color: "#0F172A",
                padding: "8px 16px",
                borderRadius: "9999px",
                fontSize: "0.85rem",
                fontWeight: 800
              }}>
                {sub.listToSaleRatio} List-to-Sale
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Editorial & Story */}
      <article className="container" style={{ maxWidth: "860px", margin: "0 auto 60px", padding: "0 20px" }}>
        
        {/* Headline & Overview */}
        <h2 style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.3rem)", fontWeight: 800, color: "var(--ink-950)", letterSpacing: "-0.025em", lineHeight: 1.3, marginBottom: "18px" }}>
          {sub.headline}
        </h2>

        <p style={{ fontSize: "1.12rem", color: "var(--ink-800)", lineHeight: 1.85, marginBottom: "36px" }}>
          {sub.overview}
        </p>

        {/* History Section */}
        {sub.history && (
          <section style={{ marginBottom: "44px" }}>
            <h3 style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--ink-950)", letterSpacing: "-0.02em", marginBottom: "16px" }}>
              {sub.historyHeadline || `History & Heritage of ${sub.name}`}
            </h3>
            {sub.history.split("\n\n").map((para, i) => (
              <p key={i} style={{ fontSize: "1.08rem", color: "var(--ink-800)", lineHeight: 1.85, marginBottom: "18px" }}>
                {para}
              </p>
            ))}
          </section>
        )}

        {/* Super Interesting & Important Highlights */}
        {sub.interestingFacts && sub.interestingFacts.length > 0 && (
          <section style={{ marginBottom: "44px" }}>
            <h3 style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--ink-950)", letterSpacing: "-0.02em", marginBottom: "18px" }}>
              Key Highlights &amp; Fascinating Facts About {sub.name}
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
              {sub.interestingFacts.map((fact, idx) => (
                <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "1.04rem", color: "var(--ink-800)", lineHeight: 1.75 }}>
                  <span style={{ color: "var(--accent-gold)", fontWeight: 800, fontSize: "1.15rem", lineHeight: 1.3, flexShrink: 0 }}>✦</span>
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Neighborhood Dynamics: Schools, Lots & HOA */}
        <section style={{ marginBottom: "44px" }}>
          <h3 style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--ink-950)", letterSpacing: "-0.02em", marginBottom: "16px" }}>
            Schools, Architecture &amp; Community Setting
          </h3>
          <p style={{ fontSize: "1.06rem", color: "var(--ink-800)", lineHeight: 1.8, marginBottom: "14px" }}>
            <strong>Assigned School Pyramid:</strong> {sub.schools}. Top-tier school boundaries in Northern Virginia consistently preserve higher long-term property equity and attract steady out-of-area buyer demand.
          </p>
          <p style={{ fontSize: "1.06rem", color: "var(--ink-800)", lineHeight: 1.8, marginBottom: "14px" }}>
            <strong>Homes &amp; Lot Profiles:</strong> {sub.propertyTypes} situated on generous {sub.typicalLotSize} parcels with mature tree canopies and established streetscapes.
          </p>
          <p style={{ fontSize: "1.06rem", color: "var(--ink-800)", lineHeight: 1.8, marginBottom: "0" }}>
            <strong>Civic &amp; Recreation:</strong> {sub.hoa}.
          </p>
        </section>

        {/* Equity Strategy */}
        {sub.sellerStrategy && (
          <section style={{ marginBottom: "48px" }}>
            <h3 style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--ink-950)", letterSpacing: "-0.02em", marginBottom: "16px" }}>
              Maximizing Your Home Valuation in {sub.name}
            </h3>
            <p style={{ fontSize: "1.08rem", color: "var(--ink-800)", lineHeight: 1.85, marginBottom: "0" }}>
              {sub.sellerStrategy}
            </p>
          </section>
        )}

        {/* Settled Comps */}
        {sub.comps && sub.comps.length > 0 && (
          <section style={{ marginBottom: "52px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "16px", flexWrap: "wrap", gap: "10px" }}>
              <div>
                <span style={{ fontSize: "0.78rem", color: "var(--status-active)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  Bright MLS Verified Closed Transactions
                </span>
                <h3 style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--ink-950)", margin: "4px 0" }}>
                  Recent Settled Sales in {sub.name}
                </h3>
              </div>
              <span style={{ fontSize: "0.82rem", color: "var(--ink-500)" }}>
                Direct MLS comps
              </span>
            </div>

            <div style={{ border: "1px solid var(--ink-200)", borderRadius: "12px", overflow: "hidden" }}>
              {sub.comps.map((c, idx) => (
                <div 
                  key={idx}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "16px 20px",
                    background: idx % 2 === 0 ? "#FFFFFF" : "#F8FAFC",
                    borderBottom: idx === sub.comps.length - 1 ? "none" : "1px solid var(--ink-100)",
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

        {/* FAQs */}
        {sub.faqs && sub.faqs.length > 0 && (
          <section style={{ marginBottom: "56px" }}>
            <span style={{ fontSize: "0.78rem", color: "var(--accent-gold)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", display: "block", marginBottom: "6px" }}>
              Subdivision Intelligence
            </span>
            <h3 style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--ink-950)", marginBottom: "20px" }}>
              Frequently Asked Questions About {sub.name}
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {sub.faqs.map((faq, idx) => (
                <details 
                  key={idx}
                  style={{
                    background: "#F8FAFC",
                    border: "1px solid var(--ink-200)",
                    borderRadius: "10px",
                    padding: "16px 20px"
                  }}
                >
                  <summary style={{ fontSize: "1.02rem", fontWeight: 700, color: "var(--ink-950)", cursor: "pointer" }}>
                    {faq.question}
                  </summary>
                  <p style={{ fontSize: "0.98rem", color: "var(--ink-700)", lineHeight: 1.75, marginTop: "12px", marginBottom: 0 }}>
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
          boxShadow: "0 20px 40px -10px rgba(15, 23, 42, 0.25)"
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
            {sub.name} Specialist • Elena Gorbounova
          </span>

          <h3 style={{ fontSize: "clamp(1.7rem, 2.8vw, 2.2rem)", fontWeight: 800, color: "#FFFFFF", marginBottom: "14px", letterSpacing: "-0.02em" }}>
            Questions About Buying or Selling in {sub.name}?
          </h3>

          <p style={{ fontSize: "1.08rem", color: "#CBD5E1", lineHeight: 1.75, maxWidth: "620px", margin: "0 auto 28px" }}>
            Reach out directly to Elena Gorbounova for recent settled sales comps, custom neighborhood valuations, and off-market intelligence.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "14px", flexWrap: "wrap", alignItems: "center" }}>
            <a 
              href={telHref} 
              className="btn btn-primary"
              style={{ background: "var(--accent-gold)", borderColor: "var(--accent-gold)", color: "#0F172A", fontWeight: 800, padding: "14px 26px", fontSize: "1rem" }}
            >
              📞 Call Direct: {directPhone}
            </a>

            <a 
              href={mailHref} 
              className="btn btn-outline"
              style={{ color: "#FFFFFF", borderColor: "rgba(255,255,255,0.4)", padding: "14px 26px", fontWeight: 700, fontSize: "1rem" }}
            >
              ✉️ Email: {email}
            </a>

            <a 
              href={smsHref} 
              className="btn btn-outline"
              style={{ color: "#FFFFFF", borderColor: "rgba(255,255,255,0.4)", padding: "14px 22px", fontWeight: 600, fontSize: "0.95rem" }}
            >
              💬 Text for Comps
            </a>
          </div>
        </section>

        {/* Explore Other Subdivisions */}
        <section style={{ borderTop: "1px solid var(--ink-200)", paddingTop: "40px", marginTop: "48px", marginBottom: "36px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px", flexWrap: "wrap", gap: "10px" }}>
            <h4 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--ink-950)", margin: 0 }}>
              Explore Nearby Virginia Subdivisions
            </h4>
            <Link href="/subdivisions" style={{ fontSize: "0.88rem", color: "var(--accent-gold)", fontWeight: 700, textDecoration: "none" }}>
              All 16 Subdivisions &rarr;
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "14px" }}>
            {otherSubdivisions.map(s => (
              <Link
                key={s.id}
                href={`/subdivisions/${s.slug}`}
                style={{
                  padding: "16px",
                  borderRadius: "12px",
                  background: "#F8FAFC",
                  border: "1px solid var(--ink-200)",
                  textDecoration: "none",
                  color: "inherit",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all 0.2s ease"
                }}
              >
                <div>
                  <strong style={{ fontSize: "1rem", color: "var(--ink-950)", display: "block" }}>{s.name}</strong>
                  <span style={{ fontSize: "0.8rem", color: "var(--ink-500)", display: "block", marginTop: "2px" }}>{s.city}, VA {s.zip} • {s.schools}</span>
                </div>
                <span style={{ fontSize: "0.82rem", color: "var(--accent-gold)", fontWeight: 700, marginTop: "10px" }}>
                  View Subdivision Guide &rarr;
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Regional Virginia Divisions Cross-Link Strip */}
        <section style={{ borderTop: "1px solid var(--ink-200)", paddingTop: "32px" }}>
          <span style={{ fontSize: "0.78rem", fontWeight: 800, color: "var(--accent-gold)", textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: "8px" }}>
            Virginia Regional Jurisdictions
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
                {div.name} &rarr;
              </Link>
            ))}
          </div>
        </section>
      </article>

      <Footer />
    </main>
  );
}
