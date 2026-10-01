import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FAIRFAX_LISTINGS } from "../data/listings";
import Link from "next/link";

export const metadata = {
  title: "Alexandria Townhomes For Sale | Condos & Real Estate Alexandria VA",
  description: "Browse Alexandria townhomes for sale and luxury condominiums. Explore Old Town rowhomes, Porto Vecchio condominiums, and West End townhouses with Elena & Kirill.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/alexandria-va-townhomes-for-sale",
  },
  openGraph: {
    title: "Alexandria Townhomes For Sale | Alexandria VA Condos & Townhouses",
    description: "Find your ideal Alexandria townhome or waterfront condo. Settled comps, Old Town historic rowhomes, and expert representation with top producer Elena Gorbounova.",
    url: "https://www.homesalesfairfax.com/alexandria-va-townhomes-for-sale",
  },
};

export default function AlexandriaTownhomesPage() {
  const alexandriaListings = FAIRFAX_LISTINGS.filter(h => 
    h.propertyType === "Townhome" || h.propertyType === "Condo" || h.neighborhood.includes("Skyline") || h.neighborhood.includes("Northampton")
  );

  return (
    <main>
      <div className="page-wrapper" style={{ paddingBottom: 0 }}>
        <Navbar />
      </div>

      <section className="container" style={{ padding: "40px 20px 20px", textAlign: "center", maxWidth: "900px" }}>
        <span className="section-pretitle">Historic Potomac Waterfront &amp; Urban Living</span>
        <h1 className="hero-title-main" style={{ fontSize: "3.2rem", margin: "10px auto 16px" }}>
          Alexandria Townhomes For Sale
        </h1>
        <p className="hero-subtitle-clean" style={{ maxWidth: "750px" }}>
          Explore luxury <strong>Alexandria townhomes for sale</strong>, historic Old Town rowhouses, and premier waterfront communities including <strong>Porto Vecchio condominiums</strong> and Kingstowne townhouses.
        </p>
      </section>

      <section className="content-section" style={{ background: "#FFFFFF", borderTop: "1px solid var(--ink-200)", borderBottom: "1px solid var(--ink-200)" }}>
        <div className="container">
          <div style={{ maxWidth: "880px", margin: "0 auto 48px" }}>
            <h2 className="section-title-bold" style={{ fontSize: "2rem", marginBottom: "16px" }}>
              Discover Townhomes &amp; Condos For Sale in Alexandria, VA
            </h2>
            <p style={{ marginBottom: "18px", color: "var(--ink-700)", lineHeight: "1.7", fontSize: "1.02rem" }}>
              Seeking <strong>alexandria townhomes for sale</strong> or looking for <strong>alexandria va condos for sale</strong>? Alexandria combines 18th-century cobblestone maritime heritage with high-velocity urban connectivity. Located just minutes from Ronald Reagan Washington National Airport (DCA), the Pentagon, Amazon HQ2, and downtown Washington D.C., Alexandria offers an unmatched lifestyle for professionals, military officers, and growing families.
            </p>
            <p style={{ marginBottom: "20px", color: "var(--ink-700)", lineHeight: "1.7", fontSize: "1.02rem" }}>
              From historic multi-story brick brownstones in Old Town to waterfront gems like the <strong>Porto Vecchio condominiums alexandria va</strong> situated right along the Potomac River, and master-planned enclaves in Kingstowne and Cameron Station, buyers enjoy private garage parking, courtyards, and immediate access to dining along the King Street Mile.
            </p>

            <div style={{ background: "var(--bg-subtle)", padding: "28px", borderRadius: "var(--radius-md)", borderLeft: "4px solid var(--accent-gold)", margin: "32px 0" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "8px", color: "var(--ink-950)" }}>
                Alexandria VA Townhome &amp; Condo Market Highlights
              </h3>
              <ul style={{ listStyle: "none", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginTop: "16px", color: "var(--ink-700)" }}>
                <li><strong>Coveted Communities:</strong> Old Town, Porto Vecchio, Cameron Station, Kingstowne, Del Ray</li>
                <li><strong>Property Types:</strong> Historic 1800s Rowhomes, Waterfront Luxury Condos, Garage Townhouses</li>
                <li><strong>Average Days on Market:</strong> 6 - 9 Days</li>
                <li><strong>Commuter Transit:</strong> King St-Old Town Metro, VRE, George Washington Parkway, I-495</li>
                <li><strong>Dining &amp; Recreation:</strong> King Street Mile, Torpedo Factory, Mount Vernon Trail</li>
                <li><strong>Proximity to DC:</strong> 10 to 15 Minutes to Capitol Hill &amp; Pentagon</li>
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
                ✦ Alexandria &amp; Skyline Condo Authority • Elena &amp; Kirill
              </span>
              <h3 style={{ fontSize: "1.65rem", fontWeight: 800, color: "#FFFFFF", margin: "0 0 8px" }}>
                Selling an Alexandria Townhome or Condominium?
              </h3>
              <p style={{ fontSize: "0.96rem", color: "#CBD5E1", margin: 0, lineHeight: 1.6 }}>
                Elena Gorbounova is a recognized top producer across Alexandria and the Skyline high-rise corridor with over 400+ transactions. We market directly to incoming military, federal, and tech relocations.
              </p>
            </div>

            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <Link 
                href="/divisions/city-of-alexandria" 
                className="btn btn-outline"
                style={{ color: "#FFFFFF", borderColor: "rgba(255,255,255,0.3)", padding: "12px 20px", fontWeight: 600, fontSize: "0.88rem" }}
              >
                Alexandria Division Guide &rarr;
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
            <h2 className="section-title-bold">Featured Alexandria &amp; Nearby Townhomes and Condominiums</h2>
          </div>

          <div className="properties-3col">
            {(alexandriaListings.length > 0 ? alexandriaListings : FAIRFAX_LISTINGS.slice(0, 3)).map((property) => (
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
                      href={`sms:+17036257888?body=Hi%20Elena,%20I'm%20interested%20in%20townhomes%20and%20condos%20in%20Alexandria%20VA.`}
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
              Frequently Asked Questions About Alexandria VA Townhomes &amp; Condos
            </h3>
            
            <div style={{ marginBottom: "20px" }}>
              <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--ink-900)", marginBottom: "6px" }}>
                What makes Porto Vecchio condominiums in Alexandria VA unique?
              </h4>
              <p style={{ color: "var(--ink-700)", lineHeight: 1.6, fontSize: "0.95rem" }}>
                <strong>Porto Vecchio condominiums</strong> is an Italianate waterfront community located along the Potomac River in south Alexandria. Featuring private boat slips, riverfront balconies, tennis courts, and immediate access to the George Washington Parkway, it is one of the most distinctive condominium enclaves in Northern Virginia.
              </p>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--ink-900)", marginBottom: "6px" }}>
                How do condo and HOA fees work in Old Town Alexandria?
              </h4>
              <p style={{ color: "var(--ink-700)", lineHeight: 1.6, fontSize: "0.95rem" }}>
                In historic Old Town, many classic rowhomes are fee-simple with zero HOA fees, while newer townhome developments and condo buildings include reserves for historic brick exterior maintenance, landscaping, common courtyard upkeep, and master insurance.
              </p>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--ink-900)", marginBottom: "6px" }}>
                Can I find townhouses for sale in Alexandria VA with garage parking?
              </h4>
              <p style={{ color: "var(--ink-700)", lineHeight: 1.6, fontSize: "0.95rem" }}>
                Yes! While early 1800s historic rowhomes often utilize street parking permits, communities such as Cameron Station, Kingstowne, Potomac Greens, and Ford’s Landing feature dedicated 1-car and 2-car garage townhomes.
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div style={{ textAlign: "center", marginTop: "50px", borderTop: "1px solid var(--ink-200)", paddingTop: "36px" }}>
            <span style={{ fontSize: "0.8rem", color: "var(--accent-gold)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: "12px" }}>
              Explore Neighboring Northern Virginia Markets
            </span>
            <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", marginBottom: "24px" }}>
              <Link href="/divisions/city-of-alexandria" className="btn btn-outline" style={{ fontSize: "0.85rem", padding: "8px 16px" }}>
                Alexandria Division &rarr;
              </Link>
              <Link href="/arlington-va-condos-for-sale" className="btn btn-outline" style={{ fontSize: "0.85rem", padding: "8px 16px" }}>
                Arlington Condos &rarr;
              </Link>
              <Link href="/fairfax-condos-townhomes" className="btn btn-outline" style={{ fontSize: "0.85rem", padding: "8px 16px" }}>
                Fairfax Townhomes &rarr;
              </Link>
              <Link href="/springfield-va-homes-for-sale" className="btn btn-outline" style={{ fontSize: "0.85rem", padding: "8px 16px" }}>
                Springfield VA Homes &rarr;
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
            "name": "Alexandria Townhomes For Sale | Condos & Real Estate",
            "description": "Active townhomes and condominiums for sale in Alexandria, VA.",
            "url": "https://www.homesalesfairfax.com/alexandria-va-townhomes-for-sale",
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
