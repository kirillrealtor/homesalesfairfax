import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FAIRFAX_LISTINGS } from "../data/listings";
import Link from "next/link";

export const metadata = {
  title: "Homes For Sale in Springfield VA | Buy House & Townhomes 22150-22153",
  description: "Search active homes for sale in Springfield, VA. Browse single-family houses, townhomes, West Springfield school pyramids, and schedule private tours with Elena & Kirill.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/springfield-va-homes-for-sale",
  },
  openGraph: {
    title: "Homes For Sale in Springfield VA | Real Estate & Townhomes",
    description: "Find your dream home or buy a house in Springfield, VA. Top-rated West Springfield High School pyramid, metro access, and local market analysis.",
    url: "https://www.homesalesfairfax.com/springfield-va-homes-for-sale",
  },
};

export default function SpringfieldHomesPage() {
  const springfieldListings = FAIRFAX_LISTINGS.filter(h => 
    h.city.includes("Fairfax") || h.neighborhood.includes("Burke") || h.propertyType === "Townhome"
  );

  return (
    <main>
      <div className="page-wrapper" style={{ paddingBottom: 0 }}>
        <Navbar />
      </div>

      <section className="container" style={{ padding: "40px 20px 20px", textAlign: "center", maxWidth: "900px" }}>
        <span className="section-pretitle">Fairfax County Commuter Communities</span>
        <h1 className="hero-title-main" style={{ fontSize: "3.2rem", margin: "10px auto 16px" }}>
          Homes For Sale in Springfield, VA
        </h1>
        <p className="hero-subtitle-clean" style={{ maxWidth: "750px" }}>
          Looking to buy a house in Springfield, VA? Explore active listings across ZIP codes 22150, 22151, 22152, and 22153. Enjoy direct Franconia-Springfield Metro transit, top West Springfield schools, and Lake Accotink recreation.
        </p>
      </section>

      <section className="content-section" style={{ background: "#FFFFFF", borderTop: "1px solid var(--ink-200)", borderBottom: "1px solid var(--ink-200)" }}>
        <div className="container">
          <div style={{ maxWidth: "880px", margin: "0 auto 48px" }}>
            <h2 className="section-title-bold" style={{ fontSize: "2rem", marginBottom: "16px" }}>
              Why Homebuyers Want to Buy a House in Springfield, VA
            </h2>
            <p style={{ marginBottom: "18px", color: "var(--ink-700)", lineHeight: "1.7", fontSize: "1.02rem" }}>
              As one of Fairfax County’s most strategic transit and residential hubs, <strong>Springfield, Virginia</strong> offers an outstanding balance of accessibility, competitive pricing, and top-tier community amenities. Whether you are seeking <strong>houses for sale in Springfield VA</strong> or looking for modern <strong>townhomes for sale in Springfield VA</strong>, this vibrant area offers exceptional value for families, defense contractors, and corporate commuters alike.
            </p>
            <p style={{ marginBottom: "20px", color: "var(--ink-700)", lineHeight: "1.7", fontSize: "1.02rem" }}>
              Neighborhoods like West Springfield, Orange Hunt, Cardinal Forest, and Rolling Valley boast award-winning schools (West Springfield High School and Lake Braddock Secondary), scenic hiking along Lake Accotink Park, and rapid access to the Pentagon and downtown D.C. via the I-95/I-395/I-495 Springfield Interchange and the Franconia-Springfield Blue Line Metro &amp; VRE station.
            </p>

            <div style={{ background: "var(--bg-subtle)", padding: "28px", borderRadius: "var(--radius-md)", borderLeft: "4px solid var(--accent-gold)", margin: "32px 0" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "8px", color: "var(--ink-950)" }}>
                Springfield VA Housing Market &amp; Commuter Highlights
              </h3>
              <ul style={{ listStyle: "none", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginTop: "16px", color: "var(--ink-700)" }}>
                <li><strong>ZIP Codes:</strong> 22150, 22151, 22152, 22153</li>
                <li><strong>Housing Types:</strong> Single-Family Colonials, Split-Levels &amp; Townhomes</li>
                <li><strong>Average Days on Market:</strong> 6 - 8 Days</li>
                <li><strong>High School Pyramids:</strong> West Springfield, Lake Braddock &amp; Edison</li>
                <li><strong>Transit Hub:</strong> Franconia-Springfield Metro (Blue Line) &amp; VRE</li>
                <li><strong>Retail &amp; Dining:</strong> Springfield Town Center &amp; Kingstowne Center</li>
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
                ✦ Selling in Springfield VA • Elena &amp; Kirill
              </span>
              <h3 style={{ fontSize: "1.65rem", fontWeight: 800, color: "#FFFFFF", margin: "0 0 8px" }}>
                Planning to Sell Your Springfield Home or Townhouse?
              </h3>
              <p style={{ fontSize: "0.96rem", color: "#CBD5E1", margin: 0, lineHeight: 1.6 }}>
                Springfield single-family homes and townhomes are selling with rapid absorption and competitive multi-offer escalation addenda. Our targeted listing methodology connects your home with verified pre-approved Pentagon and tech buyers.
              </p>
            </div>

            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <Link 
                href="/home-valuation" 
                className="btn btn-outline"
                style={{ color: "#FFFFFF", borderColor: "rgba(255,255,255,0.3)", padding: "12px 20px", fontWeight: 600, fontSize: "0.88rem" }}
              >
                Instant Home Valuation &rarr;
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
            <h2 className="section-title-bold">Featured Springfield &amp; Fairfax County Properties</h2>
          </div>

          <div className="properties-3col">
            {springfieldListings.slice(0, 3).map((property) => (
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
                      href={`sms:+17036257888?body=Hi%20Elena,%20I'm%20interested%20in%20homes%20for%20sale%20in%20Springfield%20VA.`}
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

          {/* FAQ Section with Schema */}
          <div style={{ maxWidth: "860px", margin: "60px auto 0", borderTop: "1px solid var(--ink-200)", paddingTop: "40px" }}>
            <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "20px", color: "var(--ink-950)" }}>
              Springfield VA Real Estate Frequently Asked Questions
            </h3>
            
            <div style={{ marginBottom: "20px" }}>
              <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--ink-900)", marginBottom: "6px" }}>
                What are the best neighborhoods to buy a house in Springfield VA?
              </h4>
              <p style={{ color: "var(--ink-700)", lineHeight: 1.6, fontSize: "0.95rem" }}>
                Top-rated neighborhoods include West Springfield (22152), Cardinal Forest, Orange Hunt Estates, Keene Mill Woods, and Rolling Valley. These neighborhoods feature spacious lots, mature trees, and direct access to top-ranking schools.
              </p>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--ink-900)", marginBottom: "6px" }}>
                How is the commute from Springfield VA to Washington D.C. and the Pentagon?
              </h4>
              <p style={{ color: "var(--ink-700)", lineHeight: 1.6, fontSize: "0.95rem" }}>
                Springfield is exceptionally commuter-friendly. The Franconia-Springfield Metro station provides direct Blue Line service to the Pentagon, Reagan National Airport (DCA), and Washington D.C., alongside VRE Fredericksburg line service to L’Enfant Plaza and Union Station.
              </p>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--ink-900)", marginBottom: "6px" }}>
                Are there townhomes for sale in Springfield VA?
              </h4>
              <p style={{ color: "var(--ink-700)", lineHeight: 1.6, fontSize: "0.95rem" }}>
                Yes, Springfield has a wide selection of spacious 3-to-4-bedroom townhouses in communities like Cardinal Forest, Rolling Valley, and Saratoga, offering low-maintenance living with neighborhood pools and tot lots.
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div style={{ textAlign: "center", marginTop: "50px", borderTop: "1px solid var(--ink-200)", paddingTop: "36px" }}>
            <span style={{ fontSize: "0.8rem", color: "var(--accent-gold)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: "12px" }}>
              Nearby Fairfax County Communities
            </span>
            <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", marginBottom: "24px" }}>
              <Link href="/burke-va-homes-for-sale" className="btn btn-outline" style={{ fontSize: "0.85rem", padding: "8px 16px" }}>
                Burke &amp; Lake Braddock &rarr;
              </Link>
              <Link href="/fairfax-station-homes-for-sale" className="btn btn-outline" style={{ fontSize: "0.85rem", padding: "8px 16px" }}>
                Fairfax Station &rarr;
              </Link>
              <Link href="/kings-park-west-real-estate" className="btn btn-outline" style={{ fontSize: "0.85rem", padding: "8px 16px" }}>
                Kings Park West &rarr;
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
            "name": "Homes For Sale in Springfield VA",
            "description": "Active homes for sale, townhomes, and houses in Springfield, VA (ZIP 22150-22153).",
            "url": "https://www.homesalesfairfax.com/springfield-va-homes-for-sale",
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
