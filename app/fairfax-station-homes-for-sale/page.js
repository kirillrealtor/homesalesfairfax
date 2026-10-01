import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FAIRFAX_LISTINGS } from "../data/listings";
import Link from "next/link";

export const metadata = {
  title: "Fairfax Station VA Homes For Sale | Luxury Houses & Acreage Estates",
  description: "Browse houses for sale in Fairfax Station, VA (ZIP 22039). Luxury 5-acre estates, custom single-family homes, South County school pyramid, and private broker tours.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/fairfax-station-homes-for-sale",
  },
  openGraph: {
    title: "Fairfax Station Homes For Sale | Luxury Estates & Acre Properties",
    description: "Explore exclusive active listings and custom estates in Fairfax Station, VA. Elena Gorbounova & Kirill, Top 1% Northern Virginia Brokers.",
    url: "https://www.homesalesfairfax.com/fairfax-station-homes-for-sale",
  },
};

export default function FairfaxStationPage() {
  const stationListings = FAIRFAX_LISTINGS.filter(h => 
    h.neighborhood.includes("Fairfax") || h.propertyType === "Single Family"
  );

  return (
    <main>
      <div className="page-wrapper" style={{ paddingBottom: 0 }}>
        <Navbar />
      </div>

      <section className="container" style={{ padding: "40px 20px 20px", textAlign: "center", maxWidth: "900px" }}>
        <span className="section-pretitle">Fairfax County Luxury Enclaves</span>
        <h1 className="hero-title-main" style={{ fontSize: "3.2rem", margin: "10px auto 16px" }}>
          Fairfax Station Homes For Sale
        </h1>
        <p className="hero-subtitle-clean" style={{ maxWidth: "750px" }}>
          Your guide to buying and selling luxury real estate in Fairfax Station, VA (ZIP 22039). Discover private multi-acre parcels, equestrian properties, custom colonial manors, and top-tier South County schools.
        </p>
      </section>

      <section className="content-section" style={{ background: "#FFFFFF", borderTop: "1px solid var(--ink-200)", borderBottom: "1px solid var(--ink-200)" }}>
        <div className="container">
          {/* SEO Content Section targeting Low KD Keywords */}
          <div style={{ maxWidth: "880px", margin: "0 auto 48px" }}>
            <h2 className="section-title-bold" style={{ fontSize: "2rem", marginBottom: "16px" }}>
              Why Homebuyers Seek Houses For Sale in Fairfax Station, VA
            </h2>
            <p style={{ marginBottom: "18px", color: "var(--ink-700)", lineHeight: "1.7", fontSize: "1.02rem" }}>
              Situated in southwestern Fairfax County, <strong>Fairfax Station</strong> is renowned for its tranquil wooded landscape, historic charm, and expansive 1-to-5-acre private estates. If you are searching for a <strong>home for sale in Fairfax Station VA</strong>, you will find custom-built architecture ranging from stately brick Colonials to modern French Country and transitional manor homes.
            </p>
            <p style={{ marginBottom: "20px", color: "var(--ink-700)", lineHeight: "1.7", fontSize: "1.02rem" }}>
              Buyers looking at <strong>houses for sale Fairfax Station VA</strong> prioritize the South County and Robinson High School pyramids, Burke Lake Park recreational trails, Fountainhead Regional Park marina, and effortless commuter connections to the Burke Centre VRE station, Fairfax County Parkway (Route 286), and I-95.
            </p>

            <div style={{ background: "var(--bg-subtle)", padding: "28px", borderRadius: "var(--radius-md)", borderLeft: "4px solid var(--accent-gold)", margin: "32px 0" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "8px", color: "var(--ink-950)" }}>
                Fairfax Station Real Estate &amp; Market Snapshot
              </h3>
              <ul style={{ listStyle: "none", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginTop: "16px", color: "var(--ink-700)" }}>
                <li><strong>Primary ZIP Code:</strong> 22039</li>
                <li><strong>Typical Lot Sizes:</strong> 1 to 5+ Wooded Acres</li>
                <li><strong>Average Days on Market:</strong> 6 - 9 Days</li>
                <li><strong>Top High School Pyramids:</strong> South County &amp; Robinson</li>
                <li><strong>Commuter Rail Access:</strong> Burke Centre VRE Station (10 mins)</li>
                <li><strong>Parks &amp; Nature:</strong> Burke Lake &amp; Fountainhead Regional Park</li>
              </ul>
            </div>
          </div>

          {/* High-Converting Seller Advisory Card */}
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
                ✦ Fairfax Station Sellers • Elena Gorbounova &amp; Kirill
              </span>
              <h3 style={{ fontSize: "1.65rem", fontWeight: 800, color: "#FFFFFF", margin: "0 0 8px" }}>
                Selling Your Estate in Fairfax Station?
              </h3>
              <p style={{ fontSize: "0.96rem", color: "#CBD5E1", margin: 0, lineHeight: 1.6 }}>
                Luxury acreage properties require precision micro-market marketing. From FAA-licensed 4K drone cinematography showcasing your lot topography to direct syndication to incoming tech executives, we maximize your net equity with a documented 102.8% list-to-sale ratio.
              </p>
            </div>

            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <Link 
                href="/home-valuation" 
                className="btn btn-outline"
                style={{ color: "#FFFFFF", borderColor: "rgba(255,255,255,0.3)", padding: "12px 20px", fontWeight: 600, fontSize: "0.88rem" }}
              >
                Instant Property Valuation &rarr;
              </Link>
              <Link 
                href="/sell" 
                className="btn btn-primary"
                style={{ background: "var(--accent-gold)", borderColor: "var(--accent-gold)", color: "#0F172A", fontWeight: 800, padding: "12px 20px", fontSize: "0.88rem" }}
              >
                Schedule Seller Appraisal
              </Link>
            </div>
          </div>

          <div className="section-head-clean">
            <span className="section-pretitle">Verified MLS Inventory</span>
            <h2 className="section-title-bold">Featured Fairfax Station &amp; Enclave Properties</h2>
          </div>

          <div className="properties-3col">
            {stationListings.slice(0, 3).map((property) => (
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
                      href={`sms:+17036257888?body=Hi%20Elena,%20I'm%20inquiring%20about%20homes%20for%20sale%20in%20Fairfax%20Station%20VA.`}
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

          {/* Local FAQ Schema Component */}
          <div style={{ maxWidth: "860px", margin: "60px auto 0", borderTop: "1px solid var(--ink-200)", paddingTop: "40px" }}>
            <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "20px", color: "var(--ink-950)" }}>
              Frequently Asked Questions About Fairfax Station VA Real Estate
            </h3>
            
            <div style={{ marginBottom: "20px" }}>
              <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--ink-900)", marginBottom: "6px" }}>
                What types of houses are for sale in Fairfax Station VA?
              </h4>
              <p style={{ color: "var(--ink-700)", lineHeight: 1.6, fontSize: "0.95rem" }}>
                Most Fairfax Station real estate consists of luxury detached single-family houses situated on 1-to-5-acre private wooded lots. Popular styles include custom brick Colonials, European-inspired stone estates, and transitional contemporary homes.
              </p>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--ink-900)", marginBottom: "6px" }}>
                What are the property tax rates in Fairfax Station?
              </h4>
              <p style={{ color: "var(--ink-700)", lineHeight: 1.6, fontSize: "0.95rem" }}>
                Fairfax Station is an unincorporated community governed by Fairfax County. Real estate is assessed at the standard Fairfax County base real estate tax rate, with no extra town or municipal add-on taxes.
              </p>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--ink-900)", marginBottom: "6px" }}>
                How do I schedule a private tour of Fairfax Station homes?
              </h4>
              <p style={{ color: "var(--ink-700)", lineHeight: 1.6, fontSize: "0.95rem" }}>
                You can reach Elena Gorbounova directly at <a href="tel:7036257888" style={{ color: "var(--accent-gold)", fontWeight: 700 }}>(703) 625-7888</a> for direct lockbox access and private showings of active and off-market Fairfax Station homes.
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div style={{ textAlign: "center", marginTop: "50px", borderTop: "1px solid var(--ink-200)", paddingTop: "36px" }}>
            <span style={{ fontSize: "0.8rem", color: "var(--accent-gold)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: "12px" }}>
              Explore Neighboring Communities
            </span>
            <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", marginBottom: "24px" }}>
              <Link href="/burke-va-homes-for-sale" className="btn btn-outline" style={{ fontSize: "0.85rem", padding: "8px 16px" }}>
                Burke &amp; Lake Braddock &rarr;
              </Link>
              <Link href="/communities/clifton" className="btn btn-outline" style={{ fontSize: "0.85rem", padding: "8px 16px" }}>
                Clifton Estates &rarr;
              </Link>
              <Link href="/oakton-homes-for-sale" className="btn btn-outline" style={{ fontSize: "0.85rem", padding: "8px 16px" }}>
                Oakton &rarr;
              </Link>
              <Link href="/fairfax-city-homes-for-sale" className="btn btn-outline" style={{ fontSize: "0.85rem", padding: "8px 16px" }}>
                Fairfax City &rarr;
              </Link>
              <Link href="/divisions/fairfax-county" className="btn btn-outline" style={{ fontSize: "0.85rem", padding: "8px 16px" }}>
                Fairfax County Overview &rarr;
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
            "name": "Fairfax Station VA Homes For Sale",
            "description": "Active homes for sale and luxury estates in Fairfax Station, VA (ZIP 22039).",
            "url": "https://www.homesalesfairfax.com/fairfax-station-homes-for-sale",
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
