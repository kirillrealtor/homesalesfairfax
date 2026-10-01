"use client";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Link from "next/link";

export default function PillarLandingClient({
  pretitle,
  title,
  leadText,
  breadcrumbLabel,
  sellerCard,
  properties = [],
  insights = []
}) {
  return (
    <main>
      <div className="page-wrapper" style={{ paddingBottom: 0 }}>
        <Navbar />
      </div>

      <section className="container" style={{ padding: "40px 20px 80px" }}>
        {/* Breadcrumb Navigation linking to Home */}
        <div style={{ display: "flex", justifyContent: "center", gap: "8px", fontSize: "0.85rem", color: "var(--ink-500)", marginBottom: "16px" }}>
          <Link href="/" style={{ color: "var(--ink-600)", textDecoration: "none" }}>Home</Link>
          <span>/</span>
          <span style={{ color: "var(--ink-950)", fontWeight: 600 }}>{breadcrumbLabel || title}</span>
        </div>

        <div className="section-head-clean">
          <span className="section-pretitle">{pretitle}</span>
          <h1 className="section-title-bold">{title}</h1>
          <p className="section-lead-text">{leadText}</p>
        </div>

        {/* High-Converting Seller Advisory Card */}
        {sellerCard && (
          <div style={{
            background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
            color: "#FFFFFF",
            borderRadius: "16px",
            padding: "32px 28px",
            marginBottom: "44px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px"
          }}>
            <div style={{ maxWidth: "660px" }}>
              <span style={{ fontSize: "0.8rem", color: "var(--accent-gold)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: "6px" }}>
                {sellerCard.tag || "✦ Top Northern Virginia Listing Advisory • Elena"}
              </span>
              <h2 style={{ fontSize: "1.65rem", fontWeight: 800, color: "#FFFFFF", margin: "0 0 8px" }}>
                {sellerCard.title}
              </h2>
              <p style={{ fontSize: "0.96rem", color: "#CBD5E1", margin: 0, lineHeight: 1.6 }}>
                {sellerCard.description}
              </p>
            </div>

            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {sellerCard.guideLink && (
                <Link 
                  href={sellerCard.guideLink} 
                  className="btn btn-outline"
                  style={{ color: "#FFFFFF", borderColor: "rgba(255,255,255,0.3)", padding: "12px 20px", fontWeight: 600, fontSize: "0.88rem" }}
                >
                  {sellerCard.guideText || "Area Guide & Comps →"}
                </Link>
              )}
              <a 
                href="/#sell" 
                className="btn btn-primary"
                style={{ background: "var(--accent-gold)", borderColor: "var(--accent-gold)", color: "#0F172A", fontWeight: 800, padding: "12px 20px", fontSize: "0.88rem", textDecoration: "none" }}
              >
                Book In-Home Consultation
              </a>
            </div>
          </div>
        )}

        {/* Properties Grid */}
        <div className="properties-3col">
          {properties.map((property) => (
            <article key={property.id} className="property-card-clean">
              <div className="card-top-img-wrap">
                <Link href={`/property/${property.id}`} style={{ display: "block", width: "100%", height: "100%" }}>
                  <img src={property.image} alt={property.title} className="card-img-element" />
                </Link>
                <div className="card-tag-status">
                  <span className="dot-green"></span>
                  <span>{property.status}</span>
                </div>
              </div>
              <div className="card-body-clean">
                <div className="card-price-headline">
                  <span className="price-big">{property.priceFormatted}</span>
                  <span className="property-badge-type">{property.propertyType}</span>
                </div>
                <h3 className="card-street-name">
                  <Link href={`/property/${property.id}`} style={{ color: "inherit", textDecoration: "none" }}>
                    {property.address}
                  </Link>
                </h3>
                <p className="card-city-zip">{property.city}, {property.state} {property.zip}</p>
                <div className="card-specs-row">
                  <span><strong>{property.beds}</strong> Beds</span>
                  <span><strong>{property.baths}</strong> Baths</span>
                  <span><strong>{property.sqft.toLocaleString()}</strong> SqFt</span>
                </div>
                <div style={{ marginTop: "12px", marginBottom: "6px" }}>
                  <Link
                    href={`/property/${property.id}`}
                    style={{
                      display: "block",
                      textAlign: "center",
                      padding: "8px 12px",
                      borderRadius: "8px",
                      background: "#F8FAFC",
                      border: "1px solid var(--ink-200)",
                      color: "var(--ink-900)",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      textDecoration: "none"
                    }}
                  >
                    View Property Details &rarr;
                  </Link>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginTop: "14px" }}>
                  <a 
                    href={`sms:+17036257888?body=Hi%20Elena,%20I'm%20interested%20in%20a%20private%20showing%20for%20${encodeURIComponent(property.address)}.`}
                    className="btn-capsule-black"
                    style={{ textAlign: "center", padding: "10px", fontSize: "0.85rem", fontWeight: 700 }}
                    title="Text Us via SMS"
                  >
                    Text Us
                  </a>
                  <a 
                    href="tel:7036257888"
                    className="btn-card-ask"
                    style={{ textAlign: "center", padding: "10px", fontSize: "0.85rem", fontWeight: 700 }}
                    title="Call Us Direct"
                  >
                    Call Us
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Editorial Insights & Real Estate Guide */}
        {insights.length > 0 && (
          <div style={{ marginTop: "48px", background: "#F8FAFC", borderRadius: "16px", border: "1px solid var(--ink-200)", padding: "36px 32px" }}>
            <h3 style={{ fontSize: "1.45rem", fontWeight: 800, color: "var(--ink-950)", marginBottom: "20px" }}>
              Local Real Estate Insights &amp; Market Dynamics
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
              {insights.map((item, idx) => (
                <div key={idx} style={{ background: "#FFFFFF", padding: "22px 24px", borderRadius: "12px", border: "1px solid var(--ink-200)" }}>
                  <h4 style={{ fontSize: "1.08rem", fontWeight: 700, color: "var(--ink-950)", marginBottom: "8px" }}>
                    {item.title}
                  </h4>
                  <p style={{ color: "var(--ink-700)", lineHeight: 1.65, fontSize: "0.93rem", margin: 0 }}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Exploration links */}
        <div style={{ textAlign: "center", marginTop: "50px", borderTop: "1px solid var(--ink-200)", paddingTop: "36px" }}>
          <span style={{ fontSize: "0.8rem", color: "var(--accent-gold)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: "12px" }}>
            Explore Other Northern Virginia Area Guides
          </span>
          <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", marginBottom: "24px" }}>
            <Link href="/fairfax-station-homes-for-sale" className="btn btn-outline" style={{ fontSize: "0.85rem", padding: "8px 16px" }}>
              Fairfax Station &rarr;
            </Link>
            <Link href="/mosaic-district-homes" className="btn btn-outline" style={{ fontSize: "0.85rem", padding: "8px 16px" }}>
              Mosaic District &rarr;
            </Link>
            <Link href="/oakton-homes-for-sale" className="btn btn-outline" style={{ fontSize: "0.85rem", padding: "8px 16px" }}>
              Oakton Luxury Estates &rarr;
            </Link>
            <Link href="/burke-va-homes-for-sale" className="btn btn-outline" style={{ fontSize: "0.85rem", padding: "8px 16px" }}>
              Burke &amp; Lake Braddock &rarr;
            </Link>
            <Link href="/great-falls-va-homes-for-sale" className="btn btn-outline" style={{ fontSize: "0.85rem", padding: "8px 16px" }}>
              Great Falls &rarr;
            </Link>
            <Link href="/falls-church-va-homes-for-sale" className="btn btn-outline" style={{ fontSize: "0.85rem", padding: "8px 16px" }}>
              Falls Church &rarr;
            </Link>
            <Link href="/arlington-va-condos-for-sale" className="btn btn-outline" style={{ fontSize: "0.85rem", padding: "8px 16px" }}>
              Arlington Condos &rarr;
            </Link>
          </div>
          <Link href="/" className="btn-card-ask" style={{ display: "inline-block", padding: "12px 24px" }}>
            ← Return to Full Fairfax Portal
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
