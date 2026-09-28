import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FAIRFAX_LISTINGS } from "../data/listings";
import Link from "next/link";

export const metadata = {
  title: "Oakton VA Luxury Homes For Sale | 22124 Real Estate",
  description: "Browse luxury single-family homes, custom estates, and acre properties in Oakton, VA (ZIP 22124). Oakton High School pyramid and private showings.",
  alternates: {
    canonical: "https://homesalesfairfax.com/oakton-homes-for-sale",
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

        <div style={{ maxWidth: "840px", margin: "0 auto 50px", lineHeight: "1.7", color: "var(--ink-700)" }}>
          <p style={{ marginBottom: "16px" }}>
            Oakton is famous for its quiet wooded acreage, custom estate homes, and top-ranked schools like Oakton High School.
          </p>
          <p>
            Home prices in Oakton typically range from <strong>$1.2M to over $3.5M</strong>. You get peaceful country privacy just minutes from I-66 and Route 123.
          </p>
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

        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <Link href="/" className="btn-card-ask" style={{ display: "inline-block", padding: "12px 24px" }}>
            ← Return to Full Fairfax Portal
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
