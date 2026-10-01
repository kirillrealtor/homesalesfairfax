import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FAIRFAX_LISTINGS } from "../data/listings";
import Link from "next/link";

export const metadata = {
  title: "Great Falls VA Luxury Homes For Sale | 22066 Real Estate & Estates",
  description: "Browse luxury homes for sale in Great Falls, VA (ZIP 22066). Custom acreage manors, Langley High School pyramid, Riverbend Park, and private showings with Elena & Kirill.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/great-falls-va-homes-for-sale",
  },
  openGraph: {
    title: "Great Falls VA Luxury Homes For Sale | Multi-Acre Estates",
    description: "Exclusive luxury estates and houses for sale in Great Falls, Virginia. Elena Gorbounova & Kirill, RE/MAX Allegiance Top 1% Producers.",
    url: "https://www.homesalesfairfax.com/great-falls-va-homes-for-sale",
  },
};

export default function GreatFallsHomesPage() {
  const luxuryListings = FAIRFAX_LISTINGS.filter(h => 
    h.neighborhood.includes("Oakton") || h.propertyType === "Single Family"
  );

  return (
    <main>
      <div className="page-wrapper" style={{ paddingBottom: 0 }}>
        <Navbar />
      </div>

      <section className="container" style={{ padding: "40px 20px 20px", textAlign: "center", maxWidth: "900px" }}>
        <span className="section-pretitle">Fairfax County Gold Coast</span>
        <h1 className="hero-title-main" style={{ fontSize: "3.2rem", margin: "10px auto 16px" }}>
          Homes For Sale in Great Falls, VA
        </h1>
        <p className="hero-subtitle-clean" style={{ maxWidth: "750px" }}>
          Explore luxury houses for sale in Great Falls, Virginia (ZIP 22066). Private 2-to-5-acre estates along the Potomac River, equestrian grounds, and Virginia's top-ranked Langley High School pyramid.
        </p>
      </section>

      <section className="content-section" style={{ background: "#FFFFFF", borderTop: "1px solid var(--ink-200)", borderBottom: "1px solid var(--ink-200)" }}>
        <div className="container">
          <div style={{ maxWidth: "880px", margin: "0 auto 48px" }}>
            <h2 className="section-title-bold" style={{ fontSize: "2rem", marginBottom: "16px" }}>
              The Pinnacle of Northern Virginia Luxury Living
            </h2>
            <p style={{ marginBottom: "18px", color: "var(--ink-700)", lineHeight: "1.7", fontSize: "1.02rem" }}>
              Perched along the scenic bluffs of the Potomac River in northern Fairfax County, <strong>Great Falls, Virginia</strong> represents the ultimate destination for discerning homebuyers seeking uncompromised privacy, sprawling estate lots, and world-class architectural design. Searching for <strong>homes for sale Great Falls VA</strong> connects you with custom-built French provincial châteaux, modern glass masterworks, and historic equestrian compounds.
            </p>
            <p style={{ marginBottom: "20px", color: "var(--ink-700)", lineHeight: "1.7", fontSize: "1.02rem" }}>
              Great Falls maintains a strict low-density zoning code (generally 2 to 5-acre minimum parcel sizes), preserving its rolling countryside feel while remaining just 15 minutes from Tysons Galleria, Reston Town Center, and the Dulles Technology Corridor. Families prioritize Great Falls for its community atmosphere centered around Great Falls Village Centre and its tier-one academic path through Forestville / Colvin Run Elementary, Cooper Middle, and Langley High School.
            </p>

            <div style={{ background: "var(--bg-subtle)", padding: "28px", borderRadius: "var(--radius-md)", borderLeft: "4px solid var(--accent-gold)", margin: "32px 0" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "8px", color: "var(--ink-950)" }}>
                Great Falls VA Real Estate &amp; Lifestyle Overview
              </h3>
              <ul style={{ listStyle: "none", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginTop: "16px", color: "var(--ink-700)" }}>
                <li><strong>ZIP Code:</strong> 22066</li>
                <li><strong>Typical Acreage:</strong> 2 to 5+ Acres per Parcel</li>
                <li><strong>Top High School:</strong> Langley High School (Ranked #2 in VA)</li>
                <li><strong>Parks &amp; Trails:</strong> Great Falls National Park &amp; Riverbend Park</li>
                <li><strong>Commercial Center:</strong> The Village Green &amp; Great Falls Village Centre</li>
                <li><strong>Commuter Proximity:</strong> 15 mins to Tysons, 20 mins to Dulles Airport (IAD)</li>
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
                ✦ Selling in Great Falls • Elena Gorbounova (LL.M., MCNE®) &amp; Kirill
              </span>
              <h3 style={{ fontSize: "1.65rem", fontWeight: 800, color: "#FFFFFF", margin: "0 0 8px" }}>
                Listing Your Multi-Million Dollar Great Falls Estate?
              </h3>
              <p style={{ fontSize: "0.96rem", color: "#CBD5E1", margin: 0, lineHeight: 1.6 }}>
                Selling an ultra-luxury property requires bespoke architectural storytelling, FAA-licensed aerial twilight cinematography, and direct outreach to corporate wealth management networks across D.C., New York, and Silicon Valley.
              </p>
            </div>

            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <Link 
                href="/home-valuation" 
                className="btn btn-outline"
                style={{ color: "#FFFFFF", borderColor: "rgba(255,255,255,0.3)", padding: "12px 20px", fontWeight: 600, fontSize: "0.88rem" }}
              >
                Confidential Asset Valuation &rarr;
              </Link>
              <Link 
                href="/sell" 
                className="btn btn-primary"
                style={{ background: "var(--accent-gold)", borderColor: "var(--accent-gold)", color: "#0F172A", fontWeight: 800, padding: "12px 20px", fontSize: "0.88rem" }}
              >
                Private Listing Presentation
              </Link>
            </div>
          </div>

          <div className="section-head-clean">
            <span className="section-pretitle">Active Luxury Portfolio</span>
            <h2 className="section-title-bold">Featured Great Falls &amp; Acreage Estates</h2>
          </div>

          <div className="properties-3col">
            {luxuryListings.slice(0, 3).map((property) => (
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
                    <span><strong>{property.beds}</strong> Beds</span>
                    <span><strong>{property.baths}</strong> Baths</span>
                    <span><strong>{property.sqft.toLocaleString()}</strong> SqFt</span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginTop: "14px" }}>
                    <a 
                      href={`sms:+17036257888?body=Hi%20Elena,%20I'm%20inquiring%20about%20luxury%20homes%20for%20sale%20in%20Great%20Falls%20VA.`}
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
              Great Falls VA Real Estate FAQs
            </h3>
            
            <div style={{ marginBottom: "20px" }}>
              <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--ink-900)", marginBottom: "6px" }}>
                What is the typical price range for houses for sale in Great Falls VA?
              </h4>
              <p style={{ color: "var(--ink-700)", lineHeight: 1.6, fontSize: "0.95rem" }}>
                Entry-level single-family homes in Great Falls generally start around $1.4M to $1.8M, while custom-built luxury manors and riverfront estates routinely sell between $2.5M and $8M+.
              </p>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--ink-900)", marginBottom: "6px" }}>
                What are the building and zoning requirements in Great Falls?
              </h4>
              <p style={{ color: "var(--ink-700)", lineHeight: 1.6, fontSize: "0.95rem" }}>
                Great Falls is governed by Fairfax County R-E (Residential Estate) and R-1 zoning, requiring minimum lot sizes of 2 acres in most areas to protect the watershed, preserving vast green buffers and equestrian trails.
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div style={{ textAlign: "center", marginTop: "50px", borderTop: "1px solid var(--ink-200)", paddingTop: "36px" }}>
            <span style={{ fontSize: "0.8rem", color: "var(--accent-gold)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: "12px" }}>
              Explore Neighboring Luxury Communities
            </span>
            <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", marginBottom: "24px" }}>
              <Link href="/communities/mclean" className="btn btn-outline" style={{ fontSize: "0.85rem", padding: "8px 16px" }}>
                McLean &amp; Gold Coast &rarr;
              </Link>
              <Link href="/oakton-homes-for-sale" className="btn btn-outline" style={{ fontSize: "0.85rem", padding: "8px 16px" }}>
                Oakton Estates &rarr;
              </Link>
              <Link href="/communities/clifton" className="btn btn-outline" style={{ fontSize: "0.85rem", padding: "8px 16px" }}>
                Clifton Estates &rarr;
              </Link>
              <Link href="/fairfax-city-homes-for-sale" className="btn btn-outline" style={{ fontSize: "0.85rem", padding: "8px 16px" }}>
                Fairfax City &rarr;
              </Link>
              <Link href="/divisions/fairfax-county" className="btn btn-outline" style={{ fontSize: "0.85rem", padding: "8px 16px" }}>
                Fairfax County &rarr;
              </Link>
            </div>
            <Link href="/" className="btn-card-ask" style={{ display: "inline-block", padding: "12px 24px" }}>
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
            "name": "Great Falls VA Luxury Homes For Sale",
            "description": "Active luxury estates and acreage homes for sale in Great Falls, VA (ZIP 22066).",
            "url": "https://www.homesalesfairfax.com/great-falls-va-homes-for-sale",
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
