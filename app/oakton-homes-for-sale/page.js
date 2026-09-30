import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FAIRFAX_LISTINGS } from "../data/listings";
import Link from "next/link";

export const metadata = {
  title: "Oakton VA Luxury Homes For Sale | 22124 Real Estate",
  description: "Browse luxury single-family homes, custom estates, and acre properties in Oakton, VA (ZIP 22124). Oakton High School pyramid and private showings.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/oakton-homes-for-sale",
  },
};

export default function OaktonHomesPage() {
  const oaktonHomes = FAIRFAX_LISTINGS.filter(h => h.neighborhood.includes("Oakton") || h.zip === "22124");

  return (
    <main>
      <div className="page-wrapper" style={{ paddingBottom: 0 }}>
        <Navbar />
      </div>

      <section className="container" style={{ padding: "40px 20px 80px" }}>
        <div className="section-head-clean">
          <span className="section-pretitle">Fairfax Luxury Communities</span>
          <h1 className="section-title-bold">Oakton, VA Luxury Homes For Sale</h1>
          <p className="section-lead-text">
            Private wooded lots, top-rated schools, and quick access to Tysons Corner and Vienna Metro.
          </p>
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
              ✦ Oakton Estate Sellers • Elena Gorbounova &amp; Kirill
            </span>
            <h2 style={{ fontSize: "1.65rem", fontWeight: 800, color: "#FFFFFF", margin: "0 0 8px" }}>
              Planning to Sell Your Oakton Estate?
            </h2>
            <p style={{ fontSize: "0.96rem", color: "#CBD5E1", margin: 0, lineHeight: 1.6 }}>
              Oakton custom homes and acre parcels command <strong>exceptional equity premiums</strong> and rapid absorption of <strong>7 Days on Market</strong>. Discover our cinematic 4K drone marketing, private wealth syndication, and school pyramid pricing.
            </p>
          </div>

          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <Link 
              href="/subdivisions/oakton-estates" 
              className="btn btn-outline"
              style={{ color: "#FFFFFF", borderColor: "rgba(255,255,255,0.3)", padding: "12px 20px", fontWeight: 600, fontSize: "0.88rem" }}
            >
              Oakton Seller Guide &rarr;
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

        <div className="properties-3col">
          {oaktonHomes.map((property) => (
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

        <div style={{ textAlign: "center", marginTop: "50px", borderTop: "1px solid var(--ink-200)", paddingTop: "36px" }}>
          <span style={{ fontSize: "0.8rem", color: "var(--accent-gold)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: "12px" }}>
            Explore Other Northern Virginia Area Guides
          </span>
          <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", marginBottom: "24px" }}>
            <Link href="/fairfax-city-homes-for-sale" className="btn btn-outline" style={{ fontSize: "0.85rem", padding: "8px 16px" }}>
              Fairfax City &rarr;
            </Link>
            <Link href="/mosaic-district-homes" className="btn btn-outline" style={{ fontSize: "0.85rem", padding: "8px 16px" }}>
              Mosaic District &rarr;
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
          <Link href="/" className="btn-card-ask" style={{ display: "inline-block", padding: "12px 24px" }}>
            ← Return to Full Fairfax Portal
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
