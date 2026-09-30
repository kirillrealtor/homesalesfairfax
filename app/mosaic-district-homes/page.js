import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FAIRFAX_LISTINGS } from "../data/listings";
import Link from "next/link";

export const metadata = {
  title: "Mosaic District Homes & Townhomes For Sale | Merrifield Fairfax VA | homesalesfairfax.com",
  description: "Browse luxury townhomes and condos in Mosaic District, Merrifield VA (ZIP 22031). Walk to Dunn Loring Metro, boutique shopping, and dining with Elena.",
  alternates: {
    canonical: "https://homesalesfairfax.com/mosaic-district-homes",
  },
};

export default function MosaicDistrictPage() {
  const mosaicHomes = FAIRFAX_LISTINGS.filter(h => h.neighborhood.includes("Mosaic") || h.propertyType === "Townhome");

  return (
    <main>
      <div className="page-wrapper" style={{ paddingBottom: 0 }}>
        <Navbar />
      </div>
      
      <section className="container" style={{ padding: "40px 20px 20px", textAlign: "center", maxWidth: "860px" }}>
        <span className="section-pretitle">Walkable Modern Living</span>
        <h1 className="hero-title-main" style={{ fontSize: "3.2rem", margin: "10px auto 16px" }}>
          Mosaic District &amp; Merrifield Townhomes
        </h1>
        <p className="hero-subtitle-clean" style={{ maxWidth: "700px" }}>
          Northern Virginia's favorite walkable community. Modern brownstones, private rooftop terraces, and steps to dining and metro.
        </p>
      </section>

      <section className="content-section" style={{ background: "#FFFFFF", borderTop: "1px solid var(--ink-200)", borderBottom: "1px solid var(--ink-200)" }}>
        <div className="container">
          <div style={{ maxWidth: "860px", margin: "0 auto 48px" }}>
            <h2 className="section-title-bold" style={{ fontSize: "2rem", marginBottom: "16px" }}>The Mosaic District Lifestyle in Fairfax</h2>
            <p style={{ marginBottom: "18px", color: "var(--ink-700)", lineHeight: "1.7" }}>
              Mosaic District is one of the most exciting neighborhoods in Northern Virginia. Residents can walk to over 50 restaurants, boutique shops, the Angelika Film Center, and fresh grocery stores.
            </p>
            <p style={{ marginBottom: "20px", color: "var(--ink-700)", lineHeight: "1.7" }}>
              Townhomes here offer spacious four-level layouts, private two-car garages, and rooftop decks with outdoor kitchens. The Dunn Loring-Merrifield Metro is just a short stroll away.
            </p>
          </div>

          {/* High-Converting Seller Advisory Card */}
          <div style={{
            background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
            color: "#FFFFFF",
            borderRadius: "16px",
            padding: "32px 28px",
            marginBottom: "40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px"
          }}>
            <div style={{ maxWidth: "660px" }}>
              <span style={{ fontSize: "0.8rem", color: "var(--accent-gold)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: "6px" }}>
                ✦ Mosaic District &amp; Merrifield Sellers • Elena &amp; Kirill
              </span>
              <h3 style={{ fontSize: "1.65rem", fontWeight: 800, color: "#FFFFFF", margin: "0 0 8px" }}>
                Selling Your Mosaic Brownstone or Condo?
              </h3>
              <p style={{ fontSize: "0.96rem", color: "#CBD5E1", margin: 0, lineHeight: 1.6 }}>
                Four-level townhomes and modern condos in 22031 sell in <strong>9 Days on Market</strong>. We target affluent D.C. and Tysons commuters looking for walkable metro-accessible luxury.
              </p>
            </div>

            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <Link 
                href="/communities/mosaic-district" 
                className="btn btn-outline"
                style={{ color: "#FFFFFF", borderColor: "rgba(255,255,255,0.3)", padding: "12px 20px", fontWeight: 600, fontSize: "0.88rem" }}
              >
                Mosaic Comps &rarr;
              </Link>
              <Link 
                href="/sell" 
                className="btn btn-primary"
                style={{ background: "var(--accent-gold)", borderColor: "var(--accent-gold)", color: "#0F172A", fontWeight: 800, padding: "12px 20px", fontSize: "0.88rem" }}
              >
                Book In-Home Consultation
              </Link>
            </div>
          </div>

          <div className="section-head-clean">
            <span className="section-pretitle">Featured Submarket Inventory</span>
            <h2 className="section-title-bold">Mosaic District &amp; Metro-Accessible Homes</h2>
          </div>

          <div className="properties-3col">
            {mosaicHomes.map((property) => (
              <article key={property.id} className="property-card-clean">
                <div className="card-top-img-wrap">
                  <img src={property.image} alt={property.title} className="card-img-element" />
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
                  <h3 className="card-street-name">{property.address}</h3>
                  <p className="card-city-zip">{property.city}, {property.state} {property.zip}</p>
                  <div className="card-specs-row">
                    <div className="spec-entry"><strong>{property.beds}</strong> <span>Beds</span></div>
                    <div className="spec-entry"><strong>{property.baths}</strong> <span>Baths</span></div>
                    <div className="spec-entry"><strong>{property.sqft.toLocaleString()}</strong> <span>SqFt</span></div>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginTop: "18px" }}>
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

          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <Link href="/" className="btn-card-ask" style={{ padding: "12px 28px", fontWeight: 700 }}>
              ← Return to Full Fairfax Portal
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
