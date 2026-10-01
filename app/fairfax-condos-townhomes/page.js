import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FAIRFAX_LISTINGS } from "../data/listings";
import Link from "next/link";

export const metadata = {
  title: "Townhomes For Sale in Fairfax VA & Condos | 22030-22033 Townhouses",
  description: "Browse townhomes for sale in Fairfax VA and luxury condos. Metro-accessible townhouses, Dunn Loring, Fair Lakes, and Mosaic District real estate with Elena & Kirill.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/fairfax-condos-townhomes",
  },
  openGraph: {
    title: "Townhomes For Sale in Fairfax VA & Condos | Northern Virginia",
    description: "Explore active townhomes for sale in Fairfax VA and luxury condominiums across Fairfax County. RE/MAX Allegiance Top 1% Producers.",
    url: "https://www.homesalesfairfax.com/fairfax-condos-townhomes",
  },
};

export default function FairfaxCondosPage() {
  const condoListings = FAIRFAX_LISTINGS.filter(h => 
    h.propertyType === "Condo" || h.propertyType === "Townhome"
  );

  return (
    <main>
      <div className="page-wrapper" style={{ paddingBottom: 0 }}>
        <Navbar />
      </div>

      <section className="container" style={{ padding: "40px 20px 20px", textAlign: "center", maxWidth: "900px" }}>
        <span className="section-pretitle">Fairfax County Modern &amp; Low-Maintenance Living</span>
        <h1 className="hero-title-main" style={{ fontSize: "3.2rem", margin: "10px auto 16px" }}>
          Townhomes For Sale in Fairfax, VA
        </h1>
        <p className="hero-subtitle-clean" style={{ maxWidth: "750px" }}>
          Discover luxury townhouses and condos for sale in Fairfax, VA. Enjoy lock-and-leave convenience, Orange and Silver Line Metro accessibility, private rooftop terraces, and walkable urban centers.
        </p>
      </section>

      <section className="content-section" style={{ background: "#FFFFFF", borderTop: "1px solid var(--ink-200)", borderBottom: "1px solid var(--ink-200)" }}>
        <div className="container">
          <div style={{ maxWidth: "880px", margin: "0 auto 48px" }}>
            <h2 className="section-title-bold" style={{ fontSize: "2rem", marginBottom: "16px" }}>
              Why Homebuyers Seek Townhomes &amp; Condos For Sale in Fairfax, VA
            </h2>
            <p style={{ marginBottom: "18px", color: "var(--ink-700)", lineHeight: "1.7", fontSize: "1.02rem" }}>
              Looking for <strong>townhomes for sale in Fairfax VA</strong> or exploring modern <strong>fairfax condos for sale</strong>? Whether you are a first-time homebuyer, relocating tech/defense professional, or downsizer seeking a low-maintenance lifestyle, a <strong>townhouse for sale in Fairfax VA</strong> provides the perfect blend of multi-level living, private garages, and premier neighborhood amenities.
            </p>
            <p style={{ marginBottom: "18px", color: "var(--ink-700)", lineHeight: "1.7", fontSize: "1.02rem" }}>
              For first-time homebuyers, busy professionals, and downsizers seeking low-maintenance living without compromising on location, <strong>condos for sale in Fairfax VA</strong> and modern executive townhomes offer the ideal Northern Virginia lifestyle. Condominium communities throughout Fairfax provide premier clubhouses, swimming pools, fitness centers, and covered garage parking.
            </p>
            <p style={{ marginBottom: "20px", color: "var(--ink-700)", lineHeight: "1.7", fontSize: "1.02rem" }}>
              From urban high-rise living near Tysons Corner and Dunn Loring-Merrifield Metro (Mosaic District) to garden-style condominiums in Fair Lakes, Oakton, and Fairfax City, buyers can secure exceptional equity appreciation with minimal exterior maintenance.
            </p>

            <div style={{ background: "var(--bg-subtle)", padding: "28px", borderRadius: "var(--radius-md)", borderLeft: "4px solid var(--accent-gold)", margin: "32px 0" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "8px", color: "var(--ink-950)" }}>
                Fairfax Condominium &amp; Townhome Market Insights
              </h3>
              <ul style={{ listStyle: "none", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginTop: "16px", color: "var(--ink-700)" }}>
                <li><strong>Hot Spots:</strong> Mosaic District, Fair Lakes, Vienna Metro, Reston</li>
                <li><strong>Typical Formats:</strong> 1-3 Bedroom Condos &amp; 3-4 Level Townhomes</li>
                <li><strong>Average Days on Market:</strong> 7 - 11 Days</li>
                <li><strong>HOA / Condo Amenities:</strong> Pools, Gyms, Elevators &amp; Garage Parking</li>
                <li><strong>Metro Proximity:</strong> Vienna, Dunn Loring, Tysons, Wiehle-Reston</li>
                <li><strong>FHA / VA Financing:</strong> Approved condominium community tracking</li>
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
                ✦ Condo Sellers • Elena Gorbounova (Skyline Specialist) &amp; Kirill
              </span>
              <h3 style={{ fontSize: "1.65rem", fontWeight: 800, color: "#FFFFFF", margin: "0 0 8px" }}>
                Selling Your Fairfax Condo or Townhome?
              </h3>
              <p style={{ fontSize: "0.96rem", color: "#CBD5E1", margin: 0, lineHeight: 1.6 }}>
                Condominium sales require specialized resale disclosure expertise, lender warrantability management, and targeted digital marketing to first-time and downsizing buyers.
              </p>
            </div>

            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <Link 
                href="/home-valuation" 
                className="btn btn-outline"
                style={{ color: "#FFFFFF", borderColor: "rgba(255,255,255,0.3)", padding: "12px 20px", fontWeight: 600, fontSize: "0.88rem" }}
              >
                Condo Valuation Report &rarr;
              </Link>
              <Link 
                href="/sell" 
                className="btn btn-primary"
                style={{ background: "var(--accent-gold)", borderColor: "var(--accent-gold)", color: "#0F172A", fontWeight: 800, padding: "12px 20px", fontSize: "0.88rem" }}
              >
                Book Seller Consultation
              </Link>
            </div>
          </div>

          <div className="section-head-clean">
            <span className="section-pretitle">Active Inventory</span>
            <h2 className="section-title-bold">Featured Condos &amp; Townhomes in Fairfax County</h2>
          </div>

          <div className="properties-3col">
            {condoListings.map((property) => (
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
                      href={`sms:+17036257888?body=Hi%20Elena,%20I'm%20interested%20in%20condos%20and%20townhomes%20in%20Fairfax%20VA.`}
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

          {/* Navigation Links */}
          <div style={{ textAlign: "center", marginTop: "50px", borderTop: "1px solid var(--ink-200)", paddingTop: "36px" }}>
            <span style={{ fontSize: "0.8rem", color: "var(--accent-gold)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: "12px" }}>
              Explore Other Property Categories &amp; Areas
            </span>
            <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", marginBottom: "24px" }}>
              <Link href="/mosaic-district-homes" className="btn btn-outline" style={{ fontSize: "0.85rem", padding: "8px 16px" }}>
                Mosaic District Condos &rarr;
              </Link>
              <Link href="/fairfax-city-homes-for-sale" className="btn btn-outline" style={{ fontSize: "0.85rem", padding: "8px 16px" }}>
                Fairfax City Homes &rarr;
              </Link>
              <Link href="/oakton-homes-for-sale" className="btn btn-outline" style={{ fontSize: "0.85rem", padding: "8px 16px" }}>
                Oakton Estates &rarr;
              </Link>
              <Link href="/burke-va-homes-for-sale" className="btn btn-outline" style={{ fontSize: "0.85rem", padding: "8px 16px" }}>
                Burke Townhomes &rarr;
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
            "name": "Fairfax Condos For Sale & Townhomes",
            "description": "Active condominiums and townhomes for sale in Fairfax County, VA.",
            "url": "https://www.homesalesfairfax.com/fairfax-condos-townhomes",
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
