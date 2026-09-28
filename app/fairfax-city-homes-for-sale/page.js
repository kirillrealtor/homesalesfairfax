import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FAIRFAX_LISTINGS } from "../data/listings";
import Link from "next/link";

export const metadata = {
  title: "Fairfax City VA Homes For Sale | 22030 Real Estate & Listings | homesalesfairfax.com",
  description: "Explore active homes for sale in Fairfax City, VA (ZIP 22030). Single family estates, Woodson & Fairfax school pyramids, and private tour booking with Kirill.",
  alternates: {
    canonical: "https://homesalesfairfax.com/fairfax-city-homes-for-sale",
  },
};

export default function FairfaxCityPage() {
  const fairfaxCityHomes = FAIRFAX_LISTINGS.filter(h => h.city === "Fairfax" || h.neighborhood === "Fairfax City");

  return (
    <main>
      <div className="page-wrapper" style={{ paddingBottom: 0 }}>
        <Navbar />
      </div>
      
      <section className="container" style={{ padding: "40px 20px 20px", textAlign: "center", maxWidth: "860px" }}>
        <span className="section-pretitle">Fairfax City Real Estate Guide</span>
        <h1 className="hero-title-main" style={{ fontSize: "3.2rem", margin: "10px auto 16px" }}>
          Fairfax City, VA Homes For Sale
        </h1>
        <p className="hero-subtitle-clean" style={{ maxWidth: "700px" }}>
          A local guide to living, buying, and selling in historic Fairfax City (ZIP 22030). Quiet neighborhoods, top-rated schools, and private home tours.
        </p>
      </section>

      <section className="content-section" style={{ background: "#FFFFFF", borderTop: "1px solid var(--ink-200)", borderBottom: "1px solid var(--ink-200)" }}>
        <div className="container">
          <div style={{ maxWidth: "860px", margin: "0 auto 48px" }}>
            <h2 className="section-title-bold" style={{ fontSize: "2rem", marginBottom: "16px" }}>Why Homebuyers Choose Fairfax City</h2>
            <p style={{ marginBottom: "18px", color: "var(--ink-700)", lineHeight: "1.7" }}>
              Fairfax City offers a wonderful blend of small-town charm and modern convenience. Residents enjoy historic Old Town dining, community festivals, and easy commutes to Washington, D.C. and Tysons Corner.
            </p>
            <p style={{ marginBottom: "20px", color: "var(--ink-700)", lineHeight: "1.7" }}>
              Median home prices range from <strong>$850,000 to $1,475,000</strong>. You will find charming colonials, updated ramblers, and modern luxury estates near George Mason University and the Orange Line Metro.
            </p>

            <div style={{ background: "var(--bg-subtle)", padding: "28px", borderRadius: "var(--radius-md)", borderLeft: "4px solid var(--accent-gold)", margin: "32px 0" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "8px", color: "var(--ink-950)" }}>Fairfax City Quick Market Facts</h3>
              <ul style={{ listStyle: "none", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginTop: "16px", color: "var(--ink-700)" }}>
                <li><strong>Jurisdiction:</strong> Independent City (Surrounded by Fairfax County)</li>
                <li><strong>Primary ZIP Code:</strong> 22030, 22031</li>
                <li><strong>Average Days on Market:</strong> 9 - 14 Days</li>
                <li><strong>Public Transit:</strong> Vienna/Fairfax-GMU Metro &amp; CUE Bus</li>
              </ul>
            </div>
          </div>

          <div className="section-head-clean">
            <span className="section-pretitle">Verified Bright MLS Feed</span>
            <h2 className="section-title-bold">Active Fairfax City Properties</h2>
          </div>

          <div className="properties-3col">
            {fairfaxCityHomes.map((property) => (
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
                      href={`sms:+15712760986?body=Hi%20Kirill,%20I'm%20interested%20in%20a%20private%20showing%20for%20${encodeURIComponent(property.address)}.`}
                      className="btn-capsule-black"
                      style={{ textAlign: "center", padding: "10px", fontSize: "0.85rem", fontWeight: 700 }}
                      title="Text Us via SMS"
                    >
                      Text Us
                    </a>
                    <a 
                      href="tel:5712760986"
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
