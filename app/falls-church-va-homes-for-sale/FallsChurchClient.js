"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function FallsChurchClient({ fallsChurchListings }) {
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
          <span style={{ color: "var(--ink-950)", fontWeight: 600 }}>Falls Church, VA Homes</span>
        </div>

        <span className="section-pretitle">Northern Virginia Historic &amp; Commuter Corridor</span>
        <h1 className="hero-title-main" style={{ fontSize: "3.2rem", margin: "10px auto 16px" }}>
          Homes For Sale in Falls Church, VA
        </h1>
        <p className="hero-subtitle-clean" style={{ maxWidth: "750px" }}>
          Explore houses for sale in Falls Church, Virginia across ZIP codes 22041, 22042, 22043, 22044, and 22046. Walkable neighborhoods, historic charm, East Falls Church Metro transit, and premier public schools.
        </p>
      </section>

      <section className="content-section" style={{ background: "#FFFFFF", borderTop: "1px solid var(--ink-200)", borderBottom: "1px solid var(--ink-200)" }}>
        <div className="container">
          <div style={{ maxWidth: "880px", margin: "0 auto 48px" }}>
            <h2 className="section-title-bold" style={{ fontSize: "2rem", marginBottom: "16px" }}>
              Why Homebuyers Search for Houses For Sale in Falls Church, VA
            </h2>
            <p style={{ marginBottom: "18px", color: "var(--ink-700)", lineHeight: "1.7", fontSize: "1.02rem" }}>
              Nicknamed "The Little City," <strong>Falls Church, Virginia</strong> provides one of Northern Virginia’s most desirable lifestyles, seamlessly linking Fairfax County’s lush residential enclaves with rapid proximity to Arlington, Tysons Corner, and Washington, D.C. Whether you are browsing <strong>homes for sale in Falls Church VA</strong> or looking for newly constructed <strong>houses for sale in Falls Church VA</strong>, the area offers high property appreciation and robust school pyramids.
            </p>
            <p style={{ marginBottom: "20px", color: "var(--ink-700)", lineHeight: "1.7", fontSize: "1.02rem" }}>
              Falls Church encompasses both the independent City of Falls Church (consistently rated among the top school systems in the country) and surrounding Fairfax County neighborhoods like Lake Barcroft, Pimmit Hills, and Sleepy Hollow. With access to the East Falls Church and West Falls Church Orange &amp; Silver Line Metro stations, Route 7 (Leesburg Pike), and I-66, residents enjoy unmatched regional convenience.
            </p>

            <div style={{ background: "var(--bg-subtle)", padding: "28px", borderRadius: "var(--radius-md)", borderLeft: "4px solid var(--accent-gold)", margin: "32px 0" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "8px", color: "var(--ink-950)" }}>
                Falls Church VA Real Estate &amp; Transit Snapshot
              </h3>
              <ul style={{ listStyle: "none", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginTop: "16px", color: "var(--ink-700)" }}>
                <li><strong>ZIP Codes:</strong> 22041, 22042, 22043, 22044, 22046</li>
                <li><strong>Jurisdictions:</strong> Independent City &amp; Fairfax County</li>
                <li><strong>Average Days on Market:</strong> 5 - 8 Days</li>
                <li><strong>High School Pyramids:</strong> Meridian High, McLean High, Marshall High</li>
                <li><strong>Metro Transit:</strong> East &amp; West Falls Church (Orange / Silver Lines)</li>
                <li><strong>Parks &amp; Water:</strong> Lake Barcroft &amp; W&amp;OD Trail</li>
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
                ✦ Selling in Falls Church • Elena (RE/MAX Allegiance)
              </span>
              <h3 style={{ fontSize: "1.65rem", fontWeight: 800, color: "#FFFFFF", margin: "0 0 8px" }}>
                Looking to Sell Your Falls Church Property?
              </h3>
              <p style={{ fontSize: "0.96rem", color: "#CBD5E1", margin: 0, lineHeight: 1.6 }}>
                Falls Church properties regularly command multi-offer escalation addenda when marketed with cinema-grade media, architectural staging, and hyper-targeted corporate relocation syndication.
              </p>
            </div>

            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <Link 
                href="/#sell" 
                className="btn btn-primary"
                style={{ background: "var(--accent-gold)", borderColor: "var(--accent-gold)", color: "#0F172A", fontWeight: 800, padding: "12px 20px", fontSize: "0.88rem" }}
              >
                Book In-Home Consultation
              </Link>
            </div>
          </div>

          <div className="section-head-clean">
            <span className="section-pretitle">Active Bright MLS Feed</span>
            <h2 className="section-title-bold">Featured Falls Church &amp; Skyline Properties</h2>
          </div>

          <div className="properties-3col">
            {fallsChurchListings.map((property) => (
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
                      href={`sms:+17036257888?body=Hi%20Elena,%20I'm%20interested%20in%20homes%20for%20sale%20in%20Falls%20Church%20VA.`}
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
              Frequently Asked Questions About Falls Church VA Homes
            </h3>
            
            <div style={{ marginBottom: "20px" }}>
              <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--ink-900)", marginBottom: "6px" }}>
                What is the difference between City of Falls Church and Falls Church in Fairfax County?
              </h4>
              <p style={{ color: "var(--ink-700)", lineHeight: 1.6, fontSize: "0.95rem" }}>
                The City of Falls Church (ZIP 22046) is an independent jurisdiction of approximately 2 square miles with its own acclaimed school division (FCCPS). The broader Falls Church postal area (ZIPs 22041, 22042, 22043, 22044) is located within Fairfax County, served by Fairfax County Public Schools (FCPS) and Fairfax County police/fire services.
              </p>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--ink-900)", marginBottom: "6px" }}>
                How fast do houses for sale in Falls Church VA sell?
              </h4>
              <p style={{ color: "var(--ink-700)", lineHeight: 1.6, fontSize: "0.95rem" }}>
                Due to intense buyer competition from Tysons Corner and D.C. professionals, well-staged homes in Falls Church consistently sell in 5 to 8 days on market, frequently exceeding asking price.
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div style={{ textAlign: "center", marginTop: "50px", borderTop: "1px solid var(--ink-200)", paddingTop: "36px" }}>
            <span style={{ fontSize: "0.8rem", color: "var(--accent-gold)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: "12px" }}>
              Explore Neighboring Northern Virginia Markets
            </span>
            <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", marginBottom: "24px" }}>
              <Link href="/mosaic-district-homes" className="btn btn-outline" style={{ fontSize: "0.85rem", padding: "8px 16px" }}>
                Mosaic District &rarr;
              </Link>
              <Link href="/burke-va-homes-for-sale" className="btn btn-outline" style={{ fontSize: "0.85rem", padding: "8px 16px" }}>
                Burke &rarr;
              </Link>
              <Link href="/great-falls-va-homes-for-sale" className="btn btn-outline" style={{ fontSize: "0.85rem", padding: "8px 16px" }}>
                Great Falls &rarr;
              </Link>
              <Link href="/arlington-va-condos-for-sale" className="btn btn-outline" style={{ fontSize: "0.85rem", padding: "8px 16px" }}>
                Arlington Condos &rarr;
              </Link>
              <Link href="/fairfax-station-homes-for-sale" className="btn btn-outline" style={{ fontSize: "0.85rem", padding: "8px 16px" }}>
                Fairfax Station &rarr;
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
