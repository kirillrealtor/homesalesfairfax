import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FAIRFAX_LISTINGS } from "../data/listings";
import Link from "next/link";

export const metadata = {
  title: "Chantilly VA Homes For Sale | Houses & Townhomes in 20151-20152",
  description: "Browse houses for sale in Chantilly, VA. Single-family homes, luxury townhomes, Chantilly High School pyramid, and private tour booking with Elena & Kirill.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/chantilly-va-homes-for-sale",
  },
  openGraph: {
    title: "Chantilly VA Homes For Sale | Real Estate & Townhomes",
    description: "Explore active listings, single family houses, and townhomes in Chantilly, Virginia. Top 1% Northern Virginia Real Estate Brokers.",
    url: "https://www.homesalesfairfax.com/chantilly-va-homes-for-sale",
  },
};

export default function ChantillyHomesPage() {
  const chantillyListings = FAIRFAX_LISTINGS.filter(h => 
    h.city.includes("Fairfax") || h.neighborhood.includes("Fair Lakes") || h.propertyType === "Townhome"
  );

  return (
    <main>
      <div className="page-wrapper" style={{ paddingBottom: 0 }}>
        <Navbar />
      </div>

      <section className="container" style={{ padding: "40px 20px 20px", textAlign: "center", maxWidth: "900px" }}>
        <span className="section-pretitle">Western Fairfax County Corridor</span>
        <h1 className="hero-title-main" style={{ fontSize: "3.2rem", margin: "10px auto 16px" }}>
          Homes For Sale in Chantilly, VA
        </h1>
        <p className="hero-subtitle-clean" style={{ maxWidth: "750px" }}>
          Discover houses for sale in Chantilly, VA across ZIP codes 20151 and 20152. Explore master-planned neighborhoods, townhomes, Dulles Tech Corridor access, and top-tier Chantilly High School pyramids.
        </p>
      </section>

      <section className="content-section" style={{ background: "#FFFFFF", borderTop: "1px solid var(--ink-200)", borderBottom: "1px solid var(--ink-200)" }}>
        <div className="container">
          <div style={{ maxWidth: "880px", margin: "0 auto 48px" }}>
            <h2 className="section-title-bold" style={{ fontSize: "2rem", marginBottom: "16px" }}>
              Why Homebuyers Seek Houses For Sale in Chantilly, VA
            </h2>
            <p style={{ marginBottom: "18px", color: "var(--ink-700)", lineHeight: "1.7", fontSize: "1.02rem" }}>
              Strategically positioned along the Route 28 and Route 50 technology arteries in western Fairfax County, <strong>Chantilly, Virginia</strong> is one of the region’s premier destinations for professionals and growing families. Whether you are looking for spacious <strong>houses for sale in Chantilly VA</strong> or modern <strong>townhomes for sale in Chantilly VA</strong>, the community offers modern floor plans, lush neighborhood parks, and unmatched convenience to Washington Dulles International Airport.
            </p>
            <p style={{ marginBottom: "20px", color: "var(--ink-700)", lineHeight: "1.7", fontSize: "1.02rem" }}>
              Chantilly is home to beloved master-planned neighborhoods such as South Riding, Franklin Farm, Poplar Tree Estates, and Pleasant Valley. With top-rated educational institutions (Chantilly High School, Westfield High School, and Rocky Run Middle) and easy access to the Silver Line Metro innovation stations, Chantilly continues to see strong property value growth and high buyer demand.
            </p>

            <div style={{ background: "var(--bg-subtle)", padding: "28px", borderRadius: "var(--radius-md)", borderLeft: "4px solid var(--accent-gold)", margin: "32px 0" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "8px", color: "var(--ink-950)" }}>
                Chantilly VA Market &amp; Community Highlights
              </h3>
              <ul style={{ listStyle: "none", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginTop: "16px", color: "var(--ink-700)" }}>
                <li><strong>ZIP Codes:</strong> 20151 (Fairfax Co.) &amp; 20152 (Loudoun Co.)</li>
                <li><strong>Average Days on Market:</strong> 5 - 7 Days</li>
                <li><strong>Top High School Pyramids:</strong> Chantilly &amp; Westfield</li>
                <li><strong>Air &amp; Transit:</strong> 8 mins to Dulles International Airport (IAD)</li>
                <li><strong>Recreation:</strong> Ellanor C. Lawrence Park &amp; Pleasant Valley Golf</li>
                <li><strong>Major Employers:</strong> Aerospace, Defense &amp; Dulles Tech Corridor</li>
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
                ✦ Selling in Chantilly • Elena Gorbounova &amp; Kirill
              </span>
              <h3 style={{ fontSize: "1.65rem", fontWeight: 800, color: "#FFFFFF", margin: "0 0 8px" }}>
                Planning to Sell Your Home in Chantilly, VA?
              </h3>
              <p style={{ fontSize: "0.96rem", color: "#CBD5E1", margin: 0, lineHeight: 1.6 }}>
                Chantilly homes attract high-earning tech and defense contractors relocating to Northern Virginia. We price down to the specific school boundary and stage with 4K media to defend your equity against appraisal and inspection contingencies.
              </p>
            </div>

            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <Link 
                href="/franklin-farm-values" 
                className="btn btn-outline"
                style={{ color: "#FFFFFF", borderColor: "rgba(255,255,255,0.3)", padding: "12px 20px", fontWeight: 600, fontSize: "0.88rem" }}
              >
                Franklin Farm Values &rarr;
              </Link>
              <Link 
                href="/sell" 
                className="btn btn-primary"
                style={{ background: "var(--accent-gold)", borderColor: "var(--accent-gold)", color: "#0F172A", fontWeight: 800, padding: "12px 20px", fontSize: "0.88rem" }}
              >
                Book Home Consultation
              </Link>
            </div>
          </div>

          <div className="section-head-clean">
            <span className="section-pretitle">Active MLS Listings</span>
            <h2 className="section-title-bold">Featured Chantilly &amp; Western Fairfax Properties</h2>
          </div>

          <div className="properties-3col">
            {chantillyListings.slice(0, 3).map((property) => (
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
                      href={`sms:+17036257888?body=Hi%20Elena,%20I'm%20inquiring%20about%20homes%20for%20sale%20in%20Chantilly%20VA.`}
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
              Chantilly VA Real Estate Frequently Asked Questions
            </h3>
            
            <div style={{ marginBottom: "20px" }}>
              <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--ink-900)", marginBottom: "6px" }}>
                What are the best subdivisions in Chantilly VA?
              </h4>
              <p style={{ color: "var(--ink-700)", lineHeight: 1.6, fontSize: "0.95rem" }}>
                Notable subdivisions include Franklin Farm (featuring 13 miles of trails and community pools), Poplar Tree Estates, Armfield Farm, Waverly Crossing, and South Riding.
              </p>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--ink-900)", marginBottom: "6px" }}>
                Is Chantilly VA in Fairfax County or Loudoun County?
              </h4>
              <p style={{ color: "var(--ink-700)", lineHeight: 1.6, fontSize: "0.95rem" }}>
                Chantilly spans across both counties. ZIP code 20151 is situated in Fairfax County, while ZIP code 20152 falls within Loudoun County. Both sections benefit from premier school pyramids and high tech employment.
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div style={{ textAlign: "center", marginTop: "50px", borderTop: "1px solid var(--ink-200)", paddingTop: "36px" }}>
            <span style={{ fontSize: "0.8rem", color: "var(--accent-gold)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: "12px" }}>
              Explore Neighboring Western Fairfax Communities
            </span>
            <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", marginBottom: "24px" }}>
              <Link href="/franklin-farm-values" className="btn btn-outline" style={{ fontSize: "0.85rem", padding: "8px 16px" }}>
                Franklin Farm &rarr;
              </Link>
              <Link href="/oakton-homes-for-sale" className="btn btn-outline" style={{ fontSize: "0.85rem", padding: "8px 16px" }}>
                Oakton &rarr;
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
            "name": "Chantilly VA Homes For Sale",
            "description": "Active MLS listings, houses for sale, and townhomes in Chantilly, VA (ZIP 20151-20152).",
            "url": "https://www.homesalesfairfax.com/chantilly-va-homes-for-sale",
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
