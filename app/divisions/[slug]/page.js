import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { VIRGINIA_DIVISIONS, getDivisionBySlug } from "../../data/virginiaDivisions";
import { FAIRFAX_COMMUNITIES } from "../../data/communities";

export function generateStaticParams() {
  return VIRGINIA_DIVISIONS.map((d) => ({
    slug: d.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const division = getDivisionBySlug(slug);

  if (!division) {
    return {
      title: "Division Not Found | homesalesfairfax.com",
    };
  }

  const pageTitle = `${division.name}, VA Real Estate Guide`;

  return {
    title: pageTitle,
    description: `Comprehensive real estate & community guide for ${division.fullName}. Settled comps, history, top school pyramids, subdivisions directory, and listing representation with Elena Gorbounova.`,
    alternates: {
      canonical: `https://www.homesalesfairfax.com/divisions/${division.slug}`,
    },
    openGraph: {
      title: pageTitle,
      description: division.subheadline,
      url: `https://www.homesalesfairfax.com/divisions/${division.slug}`,
      siteName: "homesalesfairfax.com",
      images: [
        {
          url: `https://www.homesalesfairfax.com${division.image}`,
          width: 1200,
          height: 800,
          alt: `${division.name} Real Estate & History`,
        },
      ],
      locale: "en_US",
      type: "article",
    },
  };
}

export default async function DivisionDetailPage({ params }) {
  const { slug } = await params;
  const division = getDivisionBySlug(slug);

  if (!division) {
    notFound();
  }

  const directPhone = "(703) 625-7888";
  const telHref = "tel:7036257888";
  const smsHref = `sms:+17036257888?body=Hi%20Elena,%20I'm%20interested%20in%20real%20estate%20in%20${encodeURIComponent(division.name)}.`;
  const email = "ElenaYSC@gmail.com";
  const mailHref = `mailto:ElenaYSC@gmail.com?subject=${encodeURIComponent(division.name)}%20Real%20Estate%20Inquiry`;

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Place",
      "name": division.fullName,
      "description": division.description,
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "VA",
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
      "url": `https://www.homesalesfairfax.com/divisions/${division.slug}`,
      "priceRange": "$$$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "5100 Leesburg Pike, Suite 200",
        "addressLocality": "Alexandria",
        "addressRegion": "VA",
        "postalCode": "22302",
        "addressCountry": "US"
      },
      "areaServed": division.fullName
    }
  ];

  if (division.faqs && division.faqs.length > 0) {
    structuredData.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": division.faqs.map(faq => ({
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

      {/* Header & Breadcrumb */}
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
                {division.name}
              </h1>
              <span style={{ fontSize: "1rem", color: "var(--ink-500)", fontWeight: 600 }}>
                {division.divisionType} • Virginia
              </span>
            </div>
          </div>

          <nav aria-label="Breadcrumb" style={{ fontSize: "0.86rem", color: "var(--ink-500)", display: "flex", alignItems: "center", gap: "8px" }}>
            <Link href="/" style={{ color: "var(--ink-600)", textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <Link href="/divisions" style={{ color: "var(--ink-600)", textDecoration: "none" }}>Divisions</Link>
            <span>/</span>
            <span style={{ color: "var(--ink-950)", fontWeight: 600 }}>{division.name}</span>
          </nav>
        </div>
      </section>

      {/* Hero Visual Presentation */}
      <section className="container" style={{ maxWidth: "1080px", marginBottom: "36px" }}>
        <div style={{
          position: "relative",
          width: "100%",
          paddingTop: "44%",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 18px 45px -10px rgba(15, 23, 42, 0.18)",
          background: "#0F172A"
        }}>
          <img 
            src={division.image} 
            alt={`${division.fullName} Real Estate & History`}
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
            padding: "40px 32px 28px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "18px",
            color: "#FFFFFF"
          }}>
            <div>
              <span style={{ fontSize: "0.82rem", color: "var(--accent-gold)", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700, display: "block" }}>
                {division.tagline}
              </span>
              <div style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "#FFFFFF", marginTop: "4px" }}>
                {division.heroHeadline}
              </div>
            </div>

            <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
              <span style={{
                background: "rgba(255, 255, 255, 0.18)",
                backdropFilter: "blur(8px)",
                padding: "8px 16px",
                borderRadius: "9999px",
                fontSize: "0.86rem",
                fontWeight: 700,
                border: "1px solid rgba(255, 255, 255, 0.3)"
              }}>
                Avg {division.avgDOM} DOM
              </span>
              <span style={{
                background: "var(--accent-gold)",
                color: "#0F172A",
                padding: "8px 16px",
                borderRadius: "9999px",
                fontSize: "0.86rem",
                fontWeight: 800
              }}>
                {division.listToSaleRatio} List-to-Sale
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Editorial & Overview */}
      <article className="container" style={{ maxWidth: "860px", margin: "0 auto 60px", padding: "0 20px" }}>
        
        {/* Section Headline & Description */}
        <h2 style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.3rem)", fontWeight: 800, color: "var(--ink-950)", letterSpacing: "-0.025em", lineHeight: 1.3, marginBottom: "18px" }}>
          The Complete Guide to {division.fullName} Real Estate
        </h2>

        <p style={{ fontSize: "1.12rem", color: "var(--ink-800)", lineHeight: 1.85, marginBottom: "36px" }}>
          {division.description}
        </p>

        {/* History Section */}
        {division.history && (
          <section style={{ marginBottom: "44px" }}>
            <h3 style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--ink-950)", letterSpacing: "-0.02em", marginBottom: "16px" }}>
              {division.historyHeadline || `History & Regional Heritage of ${division.name}`}
            </h3>
            {division.history.split("\n\n").map((para, i) => (
              <p key={i} style={{ fontSize: "1.08rem", color: "var(--ink-800)", lineHeight: 1.85, marginBottom: "18px" }}>
                {para}
              </p>
            ))}
          </section>
        )}

        {/* Super Interesting & Important Highlights */}
        {division.interestingFacts && division.interestingFacts.length > 0 && (
          <section style={{ marginBottom: "44px" }}>
            <h3 style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--ink-950)", letterSpacing: "-0.02em", marginBottom: "18px" }}>
              Fascinating Facts &amp; Key Highlights of {division.name}
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
              {division.interestingFacts.map((fact, idx) => (
                <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "1.04rem", color: "var(--ink-800)", lineHeight: 1.75 }}>
                  <span style={{ color: "var(--accent-gold)", fontWeight: 800, fontSize: "1.15rem", lineHeight: 1.3, flexShrink: 0 }}>✦</span>
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* School Pyramids Impact */}
        {division.topSchoolPyramids && (
          <section style={{ marginBottom: "44px" }}>
            <h3 style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--ink-950)", letterSpacing: "-0.02em", marginBottom: "16px" }}>
              Top School Pyramids Driving Demand in {division.name}
            </h3>
            <p style={{ fontSize: "1.06rem", color: "var(--ink-800)", lineHeight: 1.8, marginBottom: "16px" }}>
              In Northern Virginia, school assignments represent one of the primary drivers of long-term property equity. Highly acclaimed pyramids across {division.name} include:
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {division.topSchoolPyramids.map((pyr, i) => (
                <li key={i} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "1.02rem", color: "var(--ink-900)" }}>
                  <span style={{ color: "var(--accent-gold)", fontSize: "1.1rem" }}>🎓</span>
                  <strong>{pyr}</strong>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Subdivisions Directory inside this Division */}
        <section style={{ marginBottom: "48px" }}>
          <h3 style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--ink-950)", letterSpacing: "-0.02em", marginBottom: "18px" }}>
            Featured Subdivisions &amp; Communities in {division.name}
          </h3>
          <p style={{ fontSize: "1.06rem", color: "var(--ink-800)", lineHeight: 1.8, marginBottom: "20px" }}>
            Explore specific neighborhoods across {division.name} with verified sales comps, school boundaries, and community market trends:
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "14px" }}>
            {division.subdivisions.map((sub, i) => (
              <div 
                key={i}
                style={{
                  border: "1px solid var(--ink-200)",
                  borderRadius: "10px",
                  padding: "16px 18px",
                  background: "#FAFAFA"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "6px" }}>
                  <h4 style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--ink-950)", margin: 0 }}>
                    {sub.name}
                  </h4>
                  <span style={{ fontSize: "0.75rem", color: "var(--ink-500)", fontWeight: 600 }}>
                    ZIP {sub.zip}
                  </span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "8px" }}>
                  <span style={{ fontSize: "0.8rem", color: "var(--status-active)", fontWeight: 700 }}>
                    Avg {sub.dom || "5 Days"} DOM
                  </span>
                  <Link 
                    href={sub.href || `/subdivisions/${sub.slug}`}
                    style={{ fontSize: "0.84rem", color: "var(--accent-gold)", fontWeight: 700, textDecoration: "underline" }}
                  >
                    Neighborhood Guide &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs Section */}
        {division.faqs && division.faqs.length > 0 && (
          <section style={{ marginBottom: "56px" }}>
            <span style={{ fontSize: "0.78rem", color: "var(--accent-gold)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", display: "block", marginBottom: "6px" }}>
              Division Intelligence
            </span>
            <h3 style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--ink-950)", marginBottom: "20px" }}>
              Frequently Asked Questions About {division.name}
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {division.faqs.map((faq, idx) => (
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

        {/* Clean Direct Contact Callout Banner */}
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
            {division.name} Real Estate Specialist • Elena Gorbounova
          </span>

          <h3 style={{ fontSize: "clamp(1.7rem, 2.8vw, 2.2rem)", fontWeight: 800, color: "#FFFFFF", marginBottom: "14px", letterSpacing: "-0.02em" }}>
            Planning to Buy or Sell in {division.name}?
          </h3>

          <p style={{ fontSize: "1.08rem", color: "#CBD5E1", lineHeight: 1.75, maxWidth: "620px", margin: "0 auto 28px" }}>
            Connect directly with Elena Gorbounova for hyper-local pricing insights, verified closed comps on your block, and customized consultation.
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
              💬 Text for Market Report
            </a>
          </div>
        </section>

        {/* Explore All Virginia Divisions */}
        <section style={{ borderTop: "1px solid var(--ink-200)", paddingTop: "40px", marginTop: "48px", marginBottom: "36px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px", flexWrap: "wrap", gap: "10px" }}>
            <h4 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--ink-950)", margin: 0 }}>
              Explore Virginia Regional Jurisdictions
            </h4>
            <Link href="/divisions" style={{ fontSize: "0.88rem", color: "var(--accent-gold)", fontWeight: 700, textDecoration: "none" }}>
              All Virginia Divisions &rarr;
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "14px" }}>
            {VIRGINIA_DIVISIONS.filter(d => d.slug !== division.slug).map((d) => (
              <Link
                key={d.id}
                href={`/divisions/${d.slug}`}
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
                  <strong style={{ fontSize: "1rem", color: "var(--ink-950)", display: "block" }}>{d.name}</strong>
                  <span style={{ fontSize: "0.8rem", color: "var(--ink-500)", display: "block", marginTop: "2px" }}>{d.divisionType}</span>
                </div>
                <span style={{ fontSize: "0.82rem", color: "var(--accent-gold)", fontWeight: 700, marginTop: "10px" }}>
                  View Division Guide &rarr;
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Communities Cross-Link Strip */}
        <section style={{ borderTop: "1px solid var(--ink-200)", paddingTop: "32px" }}>
          <span style={{ fontSize: "0.78rem", fontWeight: 800, color: "var(--accent-gold)", textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: "8px" }}>
            Regional Communities &amp; Enclaves
          </span>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "12px" }}>
            {FAIRFAX_COMMUNITIES.slice(0, 8).map(c => (
              <Link
                key={c.id}
                href={`/communities/${c.slug}`}
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
                {c.name} &rarr;
              </Link>
            ))}
          </div>
        </section>
      </article>

      <Footer />
    </main>
  );
}
