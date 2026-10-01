"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function RestonCondosClient({ restonListings }) {
  return (
    <main>
      <div className="page-wrapper" style={{ paddingBottom: 0 }}>
        <Navbar />
      </div>

      <section className="container" style={{ padding: "40px 20px 20px", textAlign: "center", maxWidth: "900px" }}>
        {/* Breadcrumb Navigation */}
        <div style={{ display: "flex", justifyContent: "center", gap: "8px", fontSize: "0.85rem", color: "var(--ink-500)", marginBottom: "16px" }}>
          <Link href="/" style={{ color: "var(--ink-600)", textDecoration: "none" }}>Home</Link>
          <span>/</span>
          <span style={{ color: "var(--ink-950)", fontWeight: 600 }}>Reston Condos &amp; Townhomes</span>
        </div>

        <span className="section-pretitle">Fairfax County Planned Tech Corridor</span>
        <h1 className="hero-title-main" style={{ fontSize: "3.2rem", margin: "10px auto 16px" }}>
          Reston, VA Condos &amp; Townhomes For Sale
        </h1>
        <p className="hero-subtitle-clean" style={{ maxWidth: "750px" }}>
          Explore luxury townhouses and condos for sale in Reston and Herndon, VA (ZIPs 20190, 20191, 20170). Enjoy Silver Line Metro connectivity, vibrant dining at Reston Town Center, and 55 miles of wooded trails.
        </p>
      </section>

      <section className="content-section" style={{ background: "#FFFFFF", borderTop: "1px solid var(--ink-200)", borderBottom: "1px solid var(--ink-200)" }}>
        <div className="container">
          <div style={{ maxWidth: "880px", margin: "0 auto 48px" }}>
            <h2 className="section-title-bold" style={{ fontSize: "2rem", marginBottom: "16px" }}>
              Why Homebuyers Seek Townhouses &amp; Condos For Sale in Reston, VA
            </h2>
            <p style={{ marginBottom: "18px", color: "var(--ink-700)", lineHeight: "1.7", fontSize: "1.02rem" }}>
              Renowned as America’s premier planned community, <strong>Reston, Virginia</strong> offers an enviable fusion of nature, contemporary architecture, and urban convenience. Searching for <strong>reston condos for sale</strong> or looking for <strong>townhouses for sale in reston va</strong> puts you in the center of the Dulles Technology Corridor with direct Silver Line Metro access to Washington, D.C. and Dulles International Airport (IAD).
            </p>
            <p style={{ marginBottom: "20px", color: "var(--ink-700)", lineHeight: "1.7", fontSize: "1.02rem" }}>
              From premier high-rise and mid-rise buildings such as <strong>The Savoy at Reston Town Center</strong> and <strong>Midtown at Reston Town Center</strong> with concierge services to lakeside townhouses along Lake Anne and convenient <strong>townhomes for sale in Herndon VA</strong>, buyers enjoy urban luxury surrounded by Northern Virginia's leading tech corridors.
            </p>

            <div style={{ background: "var(--bg-subtle)", padding: "28px", borderRadius: "var(--radius-md)", borderLeft: "4px solid var(--accent-gold)", margin: "32px 0" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "8px", color: "var(--ink-950)" }}>
                Reston &amp; Herndon VA Real Estate Snapshot
              </h3>
              <ul style={{ listStyle: "none", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginTop: "16px", color: "var(--ink-700)" }}>
                <li><strong>ZIP Codes:</strong> 20190, 20191, 20194, 20170</li>
                <li><strong>Premier Condominiums:</strong> The Savoy, Midtown at RTC, Stratford, Carlton House</li>
                <li><strong>Transit:</strong> Reston Town Center &amp; Wiehle-Reston East Metro (Silver Line)</li>
                <li><strong>Average Days on Market:</strong> 6 - 8 Days</li>
                <li><strong>Parks &amp; Lakes:</strong> 4 Lakes, 55 miles of trails, W&amp;OD Trail</li>
                <li><strong>Major Employers:</strong> Google, Microsoft, Fannie Mae, Leidos, Oracle</li>
              </ul>
            </div>
          </div>

          {/* Seller Advisory Card */}
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
                ✦ Reston Sellers • Elena Gorbounova
              </span>
              <h3 style={{ fontSize: "1.65rem", fontWeight: 800, color: "#FFFFFF", margin: "0 0 8px" }}>
                Planning to Sell Your Reston Condo or Townhome?
              </h3>
              <p style={{ fontSize: "0.96rem", color: "#CBD5E1", margin: 0, lineHeight: 1.6 }}>
                Reston Association regulations and cluster HOA requirements demand experienced representation. We highlight energy upgrades, lake privileges, and Metro proximity to command premium offers.
              </p>
            </div>

            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <Link 
                href="/#sell" 
                className="btn btn-primary"
                style={{ background: "var(--accent-gold)", borderColor: "var(--accent-gold)", color: "#0F172A", fontWeight: 800, padding: "12px 20px", fontSize: "0.88rem" }}
              >
                Book Listing Consultation
              </Link>
            </div>
          </div>

          <div className="section-head-clean">
            <span className="section-pretitle">Active MLS Inventory</span>
            <h2 className="section-title-bold">Featured Townhomes &amp; Condominiums</h2>
          </div>

          <div className="properties-3col">
            {restonListings.slice(0, 3).map((property) => (
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
                      href={`sms:+17036257888?body=Hi%20Elena,%20I'm%20interested%20in%20townhomes%20and%20condos%20in%20Reston%20VA.`}
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
                      Call Direct
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* FAQ Section */}
          <div style={{ maxWidth: "860px", margin: "60px auto 0", borderTop: "1px solid var(--ink-200)", paddingTop: "40px" }}>
            <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "20px", color: "var(--ink-950)" }}>
              Frequently Asked Questions About Reston VA Condos &amp; Townhouses
            </h3>
            
            <div style={{ marginBottom: "20px" }}>
              <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--ink-900)", marginBottom: "6px" }}>
                What are the top condo buildings at Reston Town Center?
              </h4>
              <p style={{ color: "var(--ink-700)", lineHeight: 1.6, fontSize: "0.95rem" }}>
                The most popular condominiums at Reston Town Center include <strong>The Savoy at Reston Town Center</strong>, <strong>Midtown at Reston Town Center</strong>, The Carlton House, and The Stratford. They feature concierge services, underground reserved garage parking, fitness centers, and rooftop pools.
              </p>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--ink-900)", marginBottom: "6px" }}>
                What is the difference between Reston Association fees and cluster HOA fees?
              </h4>
              <p style={{ color: "var(--ink-700)", lineHeight: 1.6, fontSize: "0.95rem" }}>
                Most Reston homes pay an annual Reston Association (RA) fee that maintains community pools, tennis courts, and 55 miles of paved pathways. In addition, townhome and condo clusters often have a separate monthly HOA fee for exterior maintenance, roof reserves, and landscaping.
              </p>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--ink-900)", marginBottom: "6px" }}>
                Are there townhomes for sale near Herndon and Reston Metro stations?
              </h4>
              <p style={{ color: "var(--ink-700)", lineHeight: 1.6, fontSize: "0.95rem" }}>
                Yes! Both Reston and Herndon have numerous townhome clusters within walking distance or a short bus ride to the Silver Line Metro stations at Wiehle-Reston East, Reston Town Center, and Herndon Station.
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div style={{ textAlign: "center", marginTop: "50px", borderTop: "1px solid var(--ink-200)", paddingTop: "36px" }}>
            <span style={{ fontSize: "0.8rem", color: "var(--accent-gold)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: "12px" }}>
              Explore Neighboring Northern Virginia Markets
            </span>
            <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", marginBottom: "24px" }}>
              <Link href="/great-falls-va-homes-for-sale" className="btn btn-outline" style={{ fontSize: "0.85rem", padding: "8px 16px" }}>
                Great Falls &rarr;
              </Link>
              <Link href="/chantilly-va-homes-for-sale" className="btn btn-outline" style={{ fontSize: "0.85rem", padding: "8px 16px" }}>
                Chantilly &rarr;
              </Link>
              <Link href="/oakton-homes-for-sale" className="btn btn-outline" style={{ fontSize: "0.85rem", padding: "8px 16px" }}>
                Oakton &rarr;
              </Link>
              <Link href="/falls-church-va-homes-for-sale" className="btn btn-outline" style={{ fontSize: "0.85rem", padding: "8px 16px" }}>
                Falls Church &rarr;
              </Link>
            </div>
            <Link href="/" className="btn-card-ask" style={{ display: "inline-block", padding: "12px 24px" }}>
              ← Return to Full Fairfax Portal
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
