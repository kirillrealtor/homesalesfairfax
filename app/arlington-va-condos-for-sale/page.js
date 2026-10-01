import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FAIRFAX_LISTINGS } from "../data/listings";
import Link from "next/link";

export const metadata = {
  title: "Condos For Sale in Arlington VA | Arlington Condominiums & Real Estate",
  description: "Browse condos for sale in Arlington, VA. Rosslyn-Ballston Metro corridor condominiums, Fairlington Village, Pentagon City, and private tour bookings with Elena & Kirill.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/arlington-va-condos-for-sale",
  },
  openGraph: {
    title: "Condos For Sale in Arlington VA | Real Estate & Condominiums",
    description: "Explore active condominiums for sale in Arlington, Virginia. Top 1% Northern Virginia Real Estate Brokers Elena Gorbounova & Kirill.",
    url: "https://www.homesalesfairfax.com/arlington-va-condos-for-sale",
  },
};

export default function ArlingtonCondosPage() {
  const condoListings = FAIRFAX_LISTINGS.filter(h => 
    h.propertyType === "Condo" || h.neighborhood.includes("Skyline")
  );

  return (
    <main>
      <div className="page-wrapper" style={{ paddingBottom: 0 }}>
        <Navbar />
      </div>

      <section className="container" style={{ padding: "40px 20px 20px", textAlign: "center", maxWidth: "900px" }}>
        <span className="section-pretitle">Northern Virginia Urban Corridor</span>
        <h1 className="hero-title-main" style={{ fontSize: "3.2rem", margin: "10px auto 16px" }}>
          Condos For Sale in Arlington, VA
        </h1>
        <p className="hero-subtitle-clean" style={{ maxWidth: "750px" }}>
          Discover luxury condominiums for sale in Arlington, VA. Explore high-rise luxury and historic garden-style condos across Rosslyn, Courthouse, Clarendon, Ballston, Pentagon City, and Fairlington.
        </p>
      </section>

      <section className="content-section" style={{ background: "#FFFFFF", borderTop: "1px solid var(--ink-200)", borderBottom: "1px solid var(--ink-200)" }}>
        <div className="container">
          <div style={{ maxWidth: "880px", margin: "0 auto 48px" }}>
            <h2 className="section-title-bold" style={{ fontSize: "2rem", marginBottom: "16px" }}>
              Why Homebuyers Seek Condos For Sale in Arlington, VA
            </h2>
            <p style={{ marginBottom: "18px", color: "var(--ink-700)", lineHeight: "1.7", fontSize: "1.02rem" }}>
              Searching for <strong>condos for sale in Arlington VA</strong> or looking to <strong>buy condo Arlington VA</strong>? Arlington represents one of the nation's premier urban-suburban transit hubs. Positioned directly across the Potomac River from Washington, D.C., Arlington’s walkable corridors offer instant Metro access, fine dining, corporate tech headquarters (Amazon HQ2 at National Landing), and rapid equity growth.
            </p>
            <p style={{ marginBottom: "20px", color: "var(--ink-700)", lineHeight: "1.7", fontSize: "1.02rem" }}>
              Whether you are shopping for high-rise <strong>arlington condos for sale</strong> with panoramic Potomac and Monument views in Rosslyn and Crystal City, or charming historic brick townhome-condos in Fairlington Village and Shirlington, Arlington offers diverse options for every lifestyle.
            </p>

            <div style={{ background: "var(--bg-subtle)", padding: "28px", borderRadius: "var(--radius-md)", borderLeft: "4px solid var(--accent-gold)", margin: "32px 0" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "8px", color: "var(--ink-950)" }}>
                Arlington VA Condominium Market Highlights
              </h3>
              <ul style={{ listStyle: "none", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginTop: "16px", color: "var(--ink-700)" }}>
                <li><strong>Hot Neighborhoods:</strong> Rosslyn, Clarendon, Ballston, Fairlington, National Landing</li>
                <li><strong>Metro Transit:</strong> Orange, Silver, Blue, and Yellow Line Stations</li>
                <li><strong>Average Days on Market:</strong> 6 - 10 Days</li>
                <li><strong>Major Employers:</strong> Amazon HQ2, Boeing Defense, Pentagon, Tech Hubs</li>
                <li><strong>Parks &amp; Trails:</strong> Mount Vernon Trail &amp; Custis Trail</li>
                <li><strong>Proximity to DC:</strong> 5 to 10 Minutes via Key Bridge, 14th St, or Metro</li>
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
                ✦ Arlington Condo Sellers • Elena &amp; Kirill (RE/MAX Allegiance)
              </span>
              <h3 style={{ fontSize: "1.65rem", fontWeight: 800, color: "#FFFFFF", margin: "0 0 8px" }}>
                Selling Your Arlington Condominium?
              </h3>
              <p style={{ fontSize: "0.96rem", color: "#CBD5E1", margin: 0, lineHeight: 1.6 }}>
                Selling an Arlington condo requires expert handling of condo association document reviews, HOA reserves, and targeted marketing to incoming Amazon HQ2 and D.C. professionals.
              </p>
            </div>

            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <Link 
                href="/divisions/arlington-county" 
                className="btn btn-outline"
                style={{ color: "#FFFFFF", borderColor: "rgba(255,255,255,0.3)", padding: "12px 20px", fontWeight: 600, fontSize: "0.88rem" }}
              >
                Arlington Division Guide &rarr;
              </Link>
              <Link 
                href="/sell" 
                className="btn btn-primary"
                style={{ background: "var(--accent-gold)", borderColor: "var(--accent-gold)", color: "#0F172A", fontWeight: 800, padding: "12px 20px", fontSize: "0.88rem" }}
              >
                Book Listing Consultation
              </Link>
            </div>
          </div>

          <div className="section-head-clean">
            <span className="section-pretitle">Active Inventory Feed</span>
            <h2 className="section-title-bold">Featured Arlington &amp; Metro Corridor Properties</h2>
          </div>

          <div className="properties-3col">
            {(condoListings.length > 0 ? condoListings : FAIRFAX_LISTINGS.slice(0, 3)).map((property) => (
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
                      href={`sms:+17036257888?body=Hi%20Elena,%20I'm%20interested%20in%20condos%20for%20sale%20in%20Arlington%20VA.`}
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
              Frequently Asked Questions About Arlington VA Condos
            </h3>
            
            <div style={{ marginBottom: "20px" }}>
              <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--ink-900)", marginBottom: "6px" }}>
                What are the best neighborhoods to buy a condo in Arlington VA?
              </h4>
              <p style={{ color: "var(--ink-700)", lineHeight: 1.6, fontSize: "0.95rem" }}>
                The Rosslyn-Ballston corridor (Rosslyn, Courthouse, Clarendon, Virginia Square, Ballston) is the most sought-after for walkable urban transit. For quieter historic charm with lush courtyards and colonial brick architecture, <strong>Fairlington Village Arlington (Fairlington Village VA)</strong> and <strong>The Arlington Condominium (The Arlington Condos)</strong> along Shirlington are exceptionally popular choices.
              </p>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--ink-900)", marginBottom: "6px" }}>
                Why is Fairlington Village VA such a sought-after condo community?
              </h4>
              <p style={{ color: "var(--ink-700)", lineHeight: 1.6, fontSize: "0.95rem" }}>
                Listed on the National Register of Historic Places, <strong>Fairlington Village VA</strong> offers townhome-style condominiums with private brick courtyards, swimming pools, tennis courts, and express direct bus routes straight into the Pentagon and downtown Washington, D.C.
              </p>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--ink-900)", marginBottom: "6px" }}>
                What are typical condo HOA fees in Arlington VA?
              </h4>
              <p style={{ color: "var(--ink-700)", lineHeight: 1.6, fontSize: "0.95rem" }}>
                Arlington condo fees typically range from $350 to $850+ per month depending on amenities (concierge, rooftop pools, fitness centers, elevators, and included utilities).
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div style={{ textAlign: "center", marginTop: "50px", borderTop: "1px solid var(--ink-200)", paddingTop: "36px" }}>
            <span style={{ fontSize: "0.8rem", color: "var(--accent-gold)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: "12px" }}>
              Explore Neighboring Urban &amp; Metro Communities
            </span>
            <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", marginBottom: "24px" }}>
              <Link href="/divisions/arlington-county" className="btn btn-outline" style={{ fontSize: "0.85rem", padding: "8px 16px" }}>
                Arlington County Division &rarr;
              </Link>
              <Link href="/falls-church-va-homes-for-sale" className="btn btn-outline" style={{ fontSize: "0.85rem", padding: "8px 16px" }}>
                Falls Church &rarr;
              </Link>
              <Link href="/fairfax-condos-townhomes" className="btn btn-outline" style={{ fontSize: "0.85rem", padding: "8px 16px" }}>
                Fairfax Townhomes &amp; Condos &rarr;
              </Link>
              <Link href="/mosaic-district-homes" className="btn btn-outline" style={{ fontSize: "0.85rem", padding: "8px 16px" }}>
                Mosaic District &rarr;
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
            "name": "Condos For Sale in Arlington VA",
            "description": "Active condominiums and townhomes for sale in Arlington, VA.",
            "url": "https://www.homesalesfairfax.com/arlington-va-condos-for-sale",
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
