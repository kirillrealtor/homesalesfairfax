import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FAIRFAX_LISTINGS } from "../data/listings";
import Link from "next/link";

export const metadata = {
  title: "Houses For Sale Fairfax City Virginia | 22030 Real Estate & Homes",
  description: "Browse houses for sale in Fairfax City, Virginia (ZIP 22030). Historic colonials, single-family homes, Woodson & Fairfax school pyramids with Elena & Kirill.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/fairfax-city-homes-for-sale",
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
        <span className="section-pretitle">Fairfax City Real Estate &amp; Neighborhood Guide</span>
        <h1 className="hero-title-main" style={{ fontSize: "3.2rem", margin: "10px auto 16px" }}>
          Houses For Sale in Fairfax City, Virginia
        </h1>
        <p className="hero-subtitle-clean" style={{ maxWidth: "700px" }}>
          Your local guide to buying and selling real estate in Fairfax City, VA (ZIP 22030). Explore active MLS listings, historic Old Town living, top-tier schools, and private home tours.
        </p>
      </section>

      <section className="content-section" style={{ background: "#FFFFFF", borderTop: "1px solid var(--ink-200)", borderBottom: "1px solid var(--ink-200)" }}>
        <div className="container">
          <div style={{ maxWidth: "860px", margin: "0 auto 48px" }}>
            <h2 className="section-title-bold" style={{ fontSize: "2rem", marginBottom: "16px" }}>
              Fairfax City Real Estate &amp; Lifestyle Highlights
            </h2>
            <p style={{ marginBottom: "18px", color: "var(--ink-700)", lineHeight: "1.7" }}>
              Searching for <strong>houses for sale Fairfax City Virginia</strong>? Fairfax City offers a unique combination of independent municipal efficiency, historic small-town charm, and rapid commuter connectivity to Washington, D.C. and Tysons Corner. 
            </p>
            <p style={{ marginBottom: "20px", color: "var(--ink-700)", lineHeight: "1.7" }}>
              Whether you are shopping for detached <strong>homes for sale in Fairfax City</strong> near Old Town Square or evaluating current <strong>real estate Fairfax City VA</strong> market trends near George Mason University, homes in neighborhoods like Mosby Woods and Country Club Hills command high equity appreciation and rapid sales velocity.
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
                ✦ City of Fairfax Sellers • Elena Gorbounova &amp; Kirill
              </span>
              <h3 style={{ fontSize: "1.65rem", fontWeight: 800, color: "#FFFFFF", margin: "0 0 8px" }}>
                Selling Your Property in the City of Fairfax?
              </h3>
              <p style={{ fontSize: "0.96rem", color: "#CBD5E1", margin: 0, lineHeight: 1.6 }}>
                Homes in Mosby Woods, Country Club Hills, and Old Town average <strong>5 Days on Market</strong> with <strong>103.2% list-to-sale ratio</strong>. We highlight the 0% County tax advantage and market to Vienna Metro commuters.
              </p>
            </div>

            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <Link 
                href="/divisions/city-of-fairfax" 
                className="btn btn-outline"
                style={{ color: "#FFFFFF", borderColor: "rgba(255,255,255,0.3)", padding: "12px 20px", fontWeight: 600, fontSize: "0.88rem" }}
              >
                City Division Guide &rarr;
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

          <div style={{ textAlign: "center", marginTop: "48px", borderTop: "1px solid var(--ink-200)", paddingTop: "36px" }}>
            <span style={{ fontSize: "0.8rem", color: "var(--accent-gold)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: "12px" }}>
              Explore Other Northern Virginia Area Guides
            </span>
            <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", marginBottom: "24px" }}>
              <Link href="/mosaic-district-homes" className="btn btn-outline" style={{ fontSize: "0.85rem", padding: "8px 16px" }}>
                Mosaic District &rarr;
              </Link>
              <Link href="/oakton-homes-for-sale" className="btn btn-outline" style={{ fontSize: "0.85rem", padding: "8px 16px" }}>
                Oakton Luxury Estates &rarr;
              </Link>
              <Link href="/burke-va-homes-for-sale" className="btn btn-outline" style={{ fontSize: "0.85rem", padding: "8px 16px" }}>
                Burke &amp; Lake Braddock &rarr;
              </Link>
              <Link href="/communities/clifton" className="btn btn-outline" style={{ fontSize: "0.85rem", padding: "8px 16px" }}>
                Clifton Estates &rarr;
              </Link>
              <Link href="/communities/mclean" className="btn btn-outline" style={{ fontSize: "0.85rem", padding: "8px 16px" }}>
                McLean &amp; Gold Coast &rarr;
              </Link>
              <Link href="/communities/country-club-hills" className="btn btn-outline" style={{ fontSize: "0.85rem", padding: "8px 16px" }}>
                Country Club Hills &rarr;
              </Link>
              <Link href="/divisions/arlington-county" className="btn btn-outline" style={{ fontSize: "0.85rem", padding: "8px 16px" }}>
                Arlington County &rarr;
              </Link>
            </div>
            <Link href="/" className="btn-card-ask" style={{ padding: "12px 28px", fontWeight: 700 }}>
              ← Return to Full Fairfax Portal
            </Link>
          </div>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateListing",
            "name": "Houses For Sale Fairfax City Virginia",
            "description": "Active homes for sale and real estate in Fairfax City, VA (ZIP 22030).",
            "url": "https://www.homesalesfairfax.com/fairfax-city-homes-for-sale",
            "broker": {
              "@type": "RealEstateAgent",
              "name": "Elena Gorbounova & Kirill",
              "telephone": "(703) 625-7888",
              "url": "https://www.homesalesfairfax.com"
            }
          })
        }}
      />

      <Footer />
    </main>
  );
}
