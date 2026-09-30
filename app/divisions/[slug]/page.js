import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { VIRGINIA_DIVISIONS, getDivisionBySlug } from "../../data/virginiaDivisions";

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

  return {
    title: `Sell Your Home in ${division.name}, VA | Top Listing Agent Elena Gorbounova`,
    description: `Planning to sell in ${division.fullName}? Average ${division.avgDOM} DOM and ${division.listToSaleRatio} list-to-sale ratio. Discover our 30-day listing blueprint, settled comps, and book an in-home consultation.`,
    alternates: {
      canonical: `https://homesalesfairfax.com/divisions/${division.slug}`,
    },
    openGraph: {
      title: `Sell Your ${division.name} Home for Top Dollar | Elena & Kirill`,
      description: division.subheadline,
      url: `https://homesalesfairfax.com/divisions/${division.slug}`,
      siteName: "homesalesfairfax.com",
      images: [
        {
          url: `https://homesalesfairfax.com${division.image}`,
          width: 1200,
          height: 800,
          alt: `${division.name} Real Estate Listing Authority`,
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
      "telephone": "+17036257888",
      "email": "ElenaYSC@gmail.com",
      "url": `https://homesalesfairfax.com/divisions/${division.slug}`,
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
      <section className="container" style={{ maxWidth: "1120px", marginBottom: "36px" }}>
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
            alt={`${division.fullName} Real Estate Listing Authority`}
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

      {/* Division Key Stats Bar */}
      <section className="container" style={{ maxWidth: "1120px", marginBottom: "48px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "12px",
          background: "#F8FAFC",
          border: "1px solid var(--ink-200)",
          borderRadius: "14px",
          padding: "20px 24px"
        }}>
          <div>
            <span style={{ fontSize: "0.72rem", color: "var(--ink-500)", textTransform: "uppercase", letterSpacing: "0.06em", display: "block", fontWeight: 600 }}>
              Average Days on Market
            </span>
            <strong style={{ fontSize: "1.15rem", color: "var(--status-active)", fontWeight: 800, marginTop: "3px", display: "block" }}>
              {division.avgDOM} DOM
            </strong>
          </div>

          <div>
            <span style={{ fontSize: "0.72rem", color: "var(--ink-500)", textTransform: "uppercase", letterSpacing: "0.06em", display: "block", fontWeight: 600 }}>
              List-to-Sale Ratio
            </span>
            <strong style={{ fontSize: "1.15rem", color: "var(--ink-950)", fontWeight: 800, marginTop: "3px", display: "block" }}>
              {division.listToSaleRatio}
            </strong>
          </div>

          <div>
            <span style={{ fontSize: "0.72rem", color: "var(--ink-500)", textTransform: "uppercase", letterSpacing: "0.06em", display: "block", fontWeight: 600 }}>
              Market Inventory Pace
            </span>
            <strong style={{ fontSize: "1.05rem", color: "var(--status-active)", fontWeight: 800, marginTop: "3px", display: "block" }}>
              High Seller Favor
            </strong>
          </div>

          <div>
            <span style={{ fontSize: "0.72rem", color: "var(--ink-500)", textTransform: "uppercase", letterSpacing: "0.06em", display: "block", fontWeight: 600 }}>
              Annual Closed Volume
            </span>
            <strong style={{ fontSize: "1.15rem", color: "var(--ink-950)", fontWeight: 800, marginTop: "3px", display: "block" }}>
              {division.annualClosedSales}
            </strong>
          </div>

          <div>
            <span style={{ fontSize: "0.72rem", color: "var(--ink-500)", textTransform: "uppercase", letterSpacing: "0.06em", display: "block", fontWeight: 600 }}>
              Absorption Index
            </span>
            <strong style={{ fontSize: "0.95rem", color: "var(--status-active)", fontWeight: 800, marginTop: "5px", display: "block" }}>
              {division.sellerDemandIndex.split("(")[0]}
            </strong>
          </div>
        </div>
      </section>

      {/* Main Editorial & Seller Blueprint */}
      <article className="container" style={{ maxWidth: "920px", margin: "0 auto", padding: "0 20px" }}>
        
        <h2 style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.4rem)", fontWeight: 800, color: "var(--ink-950)", letterSpacing: "-0.025em", lineHeight: 1.25, marginBottom: "20px" }}>
          The Seller's Guide to {division.fullName} Real Estate
        </h2>

        <p style={{ fontSize: "1.08rem", color: "var(--ink-800)", lineHeight: 1.8, marginBottom: "32px" }}>
          {division.description}
        </p>

        {/* Why Hire Us for this Division */}
        <section style={{
          background: "#F8FAFC",
          border: "1.5px solid var(--ink-200)",
          borderRadius: "16px",
          padding: "36px 30px",
          marginBottom: "48px"
        }}>
          <span style={{ fontSize: "0.8rem", color: "var(--accent-gold)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: "8px" }}>
            ✦ Elena Gorbounova &amp; Kirill Advantage
          </span>
          <h3 style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--ink-950)", marginBottom: "20px", letterSpacing: "-0.02em" }}>
            Why Hire Our Team to List Your {division.name} Home
          </h3>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
            {division.whyHireUs.map((pillar, idx) => (
              <div key={idx} style={{ background: "#FFFFFF", padding: "20px", borderRadius: "12px", border: "1px solid var(--ink-200)" }}>
                <strong style={{ fontSize: "1.05rem", color: "var(--ink-950)", display: "block", marginBottom: "6px" }}>
                  ✓ {pillar.title}
                </strong>
                <p style={{ fontSize: "0.9rem", color: "var(--ink-700)", lineHeight: 1.6, margin: 0 }}>
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "28px", display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
            <Link 
              href="/sell" 
              className="btn btn-primary"
              style={{ padding: "12px 24px", fontWeight: 800 }}
            >
              Book In-Home Consultation &rarr;
            </Link>
            <a 
              href="sms:+17036257888?body=Hi%20Elena,%20I'm%20interested%20in%20listing%20my%20property%20in%20"
              className="btn btn-outline"
              style={{ padding: "12px 20px", fontWeight: 700 }}
            >
              Text Elena Direct
            </a>
          </div>
        </section>

        {/* School Pyramids Impact */}
        {division.topSchoolPyramids && (
          <section style={{ marginBottom: "48px" }}>
            <span style={{ fontSize: "0.78rem", color: "var(--accent-gold)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", display: "block", marginBottom: "6px" }}>
              Equity Multipliers
            </span>
            <h3 style={{ fontSize: "1.65rem", fontWeight: 800, color: "var(--ink-950)", marginBottom: "16px" }}>
              Top School Pyramids Driving Buyer Demand in {division.name}
            </h3>
            <p style={{ fontSize: "1rem", color: "var(--ink-700)", lineHeight: 1.7, marginBottom: "18px" }}>
              In Northern Virginia, school pyramids represent one of the most powerful price drivers. We market your specific boundary to out-of-area relocations willing to pay a premium.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {division.topSchoolPyramids.map((pyr, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "14px 18px", background: "#F8FAFC", borderRadius: "10px", border: "1px solid var(--ink-200)" }}>
                  <span style={{ color: "var(--accent-gold)", fontSize: "1.1rem" }}>🎓</span>
                  <strong style={{ fontSize: "0.96rem", color: "var(--ink-900)" }}>{pyr}</strong>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Subdivisions Directory inside this Division */}
        <section style={{ marginBottom: "56px" }}>
          <span style={{ fontSize: "0.78rem", color: "var(--accent-gold)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", display: "block", marginBottom: "6px" }}>
            Hyper-Local Neighborhood Intelligence
          </span>
          <h3 style={{ fontSize: "1.65rem", fontWeight: 800, color: "var(--ink-950)", marginBottom: "20px" }}>
            Featured Subdivisions &amp; Enclaves in {division.name}
          </h3>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "16px" }}>
            {division.subdivisions.map((sub, i) => (
              <div 
                key={i}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid var(--ink-200)",
                  borderRadius: "12px",
                  padding: "18px 20px",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.03)"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "6px" }}>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--ink-950)", margin: 0 }}>
                    {sub.name}
                  </h4>
                  <span style={{ fontSize: "0.75rem", color: "var(--ink-500)", fontWeight: 600 }}>
                    ZIP {sub.zip}
                  </span>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "10px", borderTop: "1px solid var(--ink-100)", paddingTop: "10px" }}>
                  <div>
                    <span style={{ fontSize: "0.68rem", color: "var(--ink-500)", textTransform: "uppercase", display: "block" }}>Market Pace</span>
                    <strong style={{ fontSize: "0.98rem", color: "var(--status-active)" }}>High Seller Demand</strong>
                  </div>
                  <Link 
                    href={`/subdivisions/${sub.slug}`}
                    style={{ fontSize: "0.82rem", color: "var(--accent-gold)", fontWeight: 700 }}
                  >
                    Seller Report &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs Section */}
        {division.faqs && division.faqs.length > 0 && (
          <section style={{ marginBottom: "60px" }}>
            <span style={{ fontSize: "0.78rem", color: "var(--accent-gold)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", display: "block", marginBottom: "6px" }}>
              Seller Intelligence
            </span>
            <h3 style={{ fontSize: "1.65rem", fontWeight: 800, color: "var(--ink-950)", marginBottom: "20px" }}>
              Frequently Asked Questions About Selling in {division.name}
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
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
                  <p style={{ fontSize: "0.96rem", color: "var(--ink-700)", lineHeight: 1.75, marginTop: "12px", marginBottom: 0 }}>
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* In-Home Listing Appointment Callout Banner */}
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
            Direct Fiduciary Leadership • Elena Gorbounova
          </span>

          <h3 style={{ fontSize: "clamp(1.8rem, 3vw, 2.3rem)", fontWeight: 800, color: "#FFFFFF", marginBottom: "14px", letterSpacing: "-0.02em" }}>
            Considering Selling in {division.name}?
          </h3>

          <p style={{ fontSize: "1.08rem", color: "#CBD5E1", lineHeight: 1.75, maxWidth: "660px", margin: "0 auto 30px" }}>
            Book a private, in-home listing consultation. Elena will review verified closed comps on your street, recommend highest-ROI repairs, and share our active buyer list.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
            <Link 
              href="/sell" 
              className="btn btn-primary"
              style={{ background: "var(--accent-gold)", borderColor: "var(--accent-gold)", color: "#0F172A", fontWeight: 800, padding: "14px 28px" }}
            >
              Book In-Home Listing Consultation
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
