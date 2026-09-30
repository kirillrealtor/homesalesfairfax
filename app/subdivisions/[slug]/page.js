import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { VIRGINIA_SUBDIVISIONS, getSubdivisionBySlug, getDivisionBySlug } from "../../data/virginiaDivisions";

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

  return {
    title: `Sell Your Home in ${sub.name}, VA | Top Listing Agent Elena Gorbounova`,
    description: `Selling your home in ${sub.name}, ${sub.city} VA (ZIP ${sub.zip})? View recent settled comps, average days on market (${sub.avgDOM} DOM), school pyramids, and our proven listing plan to maximize seller equity.`,
    alternates: {
      canonical: `https://homesalesfairfax.com/subdivisions/${sub.slug}`,
    },
    openGraph: {
      title: `Sell Your ${sub.name} Home for Top Dollar | Elena & Kirill`,
      description: sub.sellerLeadSnippet,
      url: `https://homesalesfairfax.com/subdivisions/${sub.slug}`,
      siteName: "homesalesfairfax.com",
      images: [
        {
          url: `https://homesalesfairfax.com${sub.image}`,
          width: 1200,
          height: 800,
          alt: `${sub.name} Real Estate Listing Specialist`,
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
      "telephone": "+17036257888",
      "email": "ElenaYSC@gmail.com",
      "url": `https://homesalesfairfax.com/subdivisions/${sub.slug}`,
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
      <section className="container" style={{ maxWidth: "1120px", paddingTop: "36px", paddingBottom: "20px" }}>
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
      <section className="container" style={{ maxWidth: "1120px", marginBottom: "36px" }}>
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
            alt={`${sub.name} Real Estate & Homes`}
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
                High Seller Equity: {sub.name}
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

      {/* Fast Facts Bar */}
      <section className="container" style={{ maxWidth: "1120px", marginBottom: "48px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
          gap: "12px",
          background: "#F8FAFC",
          border: "1px solid var(--ink-200)",
          borderRadius: "14px",
          padding: "20px 24px"
        }}>
          <div>
            <span style={{ fontSize: "0.72rem", color: "var(--ink-500)", textTransform: "uppercase", letterSpacing: "0.06em", display: "block", fontWeight: 600 }}>
              Market Pace
            </span>
            <strong style={{ fontSize: "1.02rem", color: "var(--status-active)", fontWeight: 800, marginTop: "3px", display: "block" }}>
              Under 7 Days DOM
            </strong>
          </div>

          <div>
            <span style={{ fontSize: "0.72rem", color: "var(--ink-500)", textTransform: "uppercase", letterSpacing: "0.06em", display: "block", fontWeight: 600 }}>
              List-to-Sale Ratio
            </span>
            <strong style={{ fontSize: "1.02rem", color: "var(--ink-950)", fontWeight: 800, marginTop: "3px", display: "block" }}>
              {sub.listToSaleRatio}
            </strong>
          </div>

          <div>
            <span style={{ fontSize: "0.72rem", color: "var(--ink-500)", textTransform: "uppercase", letterSpacing: "0.06em", display: "block", fontWeight: 600 }}>
              Average DOM
            </span>
            <strong style={{ fontSize: "1.05rem", color: "var(--status-active)", fontWeight: 800, marginTop: "3px", display: "block" }}>
              {sub.avgDOM}
            </strong>
          </div>

          <div>
            <span style={{ fontSize: "0.72rem", color: "var(--ink-500)", textTransform: "uppercase", letterSpacing: "0.06em", display: "block", fontWeight: 600 }}>
              Seller Demand
            </span>
            <strong style={{ fontSize: "1.02rem", color: "var(--status-active)", fontWeight: 800, marginTop: "3px", display: "block" }}>
              High Equity Favor
            </strong>
          </div>

          <div>
            <span style={{ fontSize: "0.72rem", color: "var(--ink-500)", textTransform: "uppercase", letterSpacing: "0.06em", display: "block", fontWeight: 600 }}>
              Lot Sizes
            </span>
            <strong style={{ fontSize: "1.02rem", color: "var(--ink-950)", fontWeight: 800, marginTop: "3px", display: "block" }}>
              {sub.typicalLotSize}
            </strong>
          </div>

          <div>
            <span style={{ fontSize: "0.72rem", color: "var(--ink-500)", textTransform: "uppercase", letterSpacing: "0.06em", display: "block", fontWeight: 600 }}>
              YoY Appreciation
            </span>
            <strong style={{ fontSize: "1.05rem", color: "var(--accent-gold)", fontWeight: 800, marginTop: "3px", display: "block" }}>
              {sub.priceChangeYoY}
            </strong>
          </div>
        </div>
      </section>

      {/* Main Editorial Story */}
      <article className="container" style={{ maxWidth: "900px", margin: "0 auto", padding: "0 20px" }}>
        
        <h2 style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.4rem)", fontWeight: 800, color: "var(--ink-950)", letterSpacing: "-0.025em", lineHeight: 1.25, marginBottom: "20px" }}>
          {sub.headline}
        </h2>

        <p style={{ fontSize: "1.08rem", color: "var(--ink-800)", lineHeight: 1.8, marginBottom: "32px" }}>
          {sub.overview}
        </p>

        {/* Subdivision Specific Seller Advisory Box */}
        <section style={{
          background: "linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)",
          border: "1.5px solid var(--accent-gold)",
          borderRadius: "14px",
          padding: "32px 28px",
          marginBottom: "48px"
        }}>
          <span style={{ fontSize: "0.8rem", color: "var(--accent-gold)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: "8px" }}>
            Subdivision Seller Advisory • Elena Gorbounova &amp; Kirill
          </span>
          <h3 style={{ fontSize: "1.65rem", fontWeight: 800, color: "var(--ink-950)", marginBottom: "12px" }}>
            How to Maximize Your Home Equity in {sub.name}
          </h3>
          <p style={{ fontSize: "1.02rem", color: "var(--ink-800)", lineHeight: 1.75, marginBottom: "22px" }}>
            {sub.sellerStrategy}
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
            <Link 
              href="/sell" 
              className="btn btn-primary"
              style={{ background: "var(--accent-gold)", borderColor: "var(--accent-gold)", color: "#0F172A", fontWeight: 800, padding: "12px 22px" }}
            >
              Book In-Home Consultation &rarr;
            </Link>
            <a 
              href={`sms:+17036257888?body=Hi%20Elena,%20I'm%20interested%20in%20selling%20my%20home%20in%20${encodeURIComponent(sub.name)}.`}
              className="btn btn-outline"
              style={{ padding: "12px 20px", fontWeight: 700 }}
            >
              Text Elena Direct
            </a>
          </div>
        </section>

        {/* Key Subdivision Info Details */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "48px" }}>
          <div style={{ background: "#F8FAFC", padding: "20px", borderRadius: "12px", border: "1px solid var(--ink-200)" }}>
            <span style={{ fontSize: "0.75rem", color: "var(--ink-500)", textTransform: "uppercase", fontWeight: 700, display: "block", marginBottom: "4px" }}>
              School Pyramid
            </span>
            <strong style={{ fontSize: "1rem", color: "var(--ink-950)" }}>
              {sub.schools}
            </strong>
          </div>

          <div style={{ background: "#F8FAFC", padding: "20px", borderRadius: "12px", border: "1px solid var(--ink-200)" }}>
            <span style={{ fontSize: "0.75rem", color: "var(--ink-500)", textTransform: "uppercase", fontWeight: 700, display: "block", marginBottom: "4px" }}>
              HOA &amp; Recreation
            </span>
            <strong style={{ fontSize: "1rem", color: "var(--ink-950)" }}>
              {sub.hoa}
            </strong>
          </div>
        </div>

        {/* Recent Settled Comps */}
        {sub.comps && sub.comps.length > 0 && (
          <section style={{ marginBottom: "52px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "16px", flexWrap: "wrap", gap: "10px" }}>
              <div>
                <span style={{ fontSize: "0.78rem", color: "var(--status-active)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  Bright MLS Verified Closed Transactions
                </span>
                <h3 style={{ fontSize: "1.65rem", fontWeight: 800, color: "var(--ink-950)", margin: "4px 0" }}>
                  Recent Settled Sales in {sub.name}
                </h3>
              </div>
              <span style={{ fontSize: "0.82rem", color: "var(--ink-500)" }}>
                Direct MLS comps
              </span>
            </div>

            <div style={{ border: "1px solid var(--ink-200)", borderRadius: "12px", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }}>
              {sub.comps.map((c, idx) => (
                <div 
                  key={idx}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "18px 22px",
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
          <section style={{ marginBottom: "60px" }}>
            <span style={{ fontSize: "0.78rem", color: "var(--accent-gold)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", display: "block", marginBottom: "6px" }}>
              Subdivision Intelligence
            </span>
            <h3 style={{ fontSize: "1.65rem", fontWeight: 800, color: "var(--ink-950)", marginBottom: "20px" }}>
              Frequently Asked Questions About Selling in {sub.name}
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
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
                  <p style={{ fontSize: "0.96rem", color: "var(--ink-700)", lineHeight: 1.75, marginTop: "12px", marginBottom: 0 }}>
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* In-Home Listing Consultation Callout */}
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
            Fairfax &amp; Northern Virginia Specialist • Elena Gorbounova
          </span>

          <h3 style={{ fontSize: "clamp(1.8rem, 3vw, 2.3rem)", fontWeight: 800, color: "#FFFFFF", marginBottom: "14px", letterSpacing: "-0.02em" }}>
            Considering Selling Your Home in {sub.name}?
          </h3>

          <p style={{ fontSize: "1.08rem", color: "#CBD5E1", lineHeight: 1.75, maxWidth: "660px", margin: "0 auto 30px" }}>
            Find out what pre-approved buyers are willing to pay for your address. Elena provides a discreet in-home valuation, verified comp analysis, and our 30-day listing plan.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
            <Link 
              href="/sell" 
              className="btn btn-primary"
              style={{ background: "var(--accent-gold)", borderColor: "var(--accent-gold)", color: "#0F172A", fontWeight: 800, padding: "14px 28px" }}
            >
              Book In-Home Listing Appointment
            </Link>
            <a 
              href="tel:7036257888" 
              className="btn btn-outline"
              style={{ color: "#FFFFFF", borderColor: "rgba(255,255,255,0.3)", padding: "14px 28px", fontWeight: 600 }}
            >
              Call Elena Direct: (703) 625-7888
            </a>
          </div>
        </section>

      </article>

      <Footer />
    </main>
  );
}
