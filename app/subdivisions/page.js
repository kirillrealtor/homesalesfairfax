import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { VIRGINIA_SUBDIVISIONS } from "../data/virginiaDivisions";

export const metadata = {
  title: "Virginia Subdivisions Real Estate Guide | Sell Your Home with Elena & Kirill",
  description: "Browse high-demand Northern Virginia subdivisions including Mantua, Mosby Woods, Franklin Farm, Kings Park West, Burke Centre, Oakton, and Reston. Recent sales comps and top listing agent representation.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/subdivisions",
  },
  openGraph: {
    title: "Virginia Subdivisions Real Estate Directory | Top Listing Agents",
    description: "Subdivision-level market reports, closed comps, and top producer listing strategies across Northern Virginia.",
    url: "https://www.homesalesfairfax.com/subdivisions",
    siteName: "homesalesfairfax.com",
    locale: "en_US",
    type: "website",
  }
};

export default function SubdivisionsIndexPage() {
  return (
    <main style={{ background: "#FFFFFF", color: "var(--ink-950)" }}>
      <div className="page-wrapper" style={{ paddingBottom: 0 }}>
        <Navbar />
      </div>

      {/* Hero Header */}
      <section style={{
        background: "linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)",
        borderBottom: "1px solid var(--ink-200)",
        padding: "68px 20px 52px"
      }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "880px" }}>
          <span style={{
            display: "inline-block",
            fontSize: "0.82rem",
            fontWeight: 800,
            color: "var(--accent-gold)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: "12px"
          }}>
            Subdivision-Level Market Intelligence
          </span>

          <h1 style={{
            fontSize: "clamp(2.4rem, 4.5vw, 3.5rem)",
            fontWeight: 800,
            color: "var(--ink-950)",
            lineHeight: 1.15,
            letterSpacing: "-0.03em",
            marginBottom: "20px"
          }}>
            Virginia Subdivisions Directory
          </h1>

          <p style={{
            fontSize: "1.15rem",
            color: "var(--ink-700)",
            lineHeight: 1.7,
            maxWidth: "760px",
            margin: "0 auto 32px auto"
          }}>
            Homeowners hire Elena Gorbounova &amp; Kirill because we know their exact subdivision, school boundaries, and settled comp history. Explore recent sales comps and custom listing plans for your neighborhood.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
            <Link href="/divisions" className="btn btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontWeight: 700 }}>
              &larr; View Virginia Divisions
            </Link>
            <Link href="/sell" className="btn btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontWeight: 700 }}>
              Book In-Home Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Subdivisions Grid */}
      <section className="container" style={{ padding: "60px 20px 90px", maxWidth: "1140px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "32px", borderBottom: "1px solid var(--ink-200)", paddingBottom: "16px" }}>
          <div>
            <span style={{ fontSize: "0.82rem", color: "var(--ink-500)", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 700 }}>
              Showing {VIRGINIA_SUBDIVISIONS.length} High-Demand Subdivisions
            </span>
          </div>
          <span style={{ fontSize: "0.85rem", color: "var(--ink-600)" }}>
            Bright MLS Verified Settled Comps
          </span>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "28px"
        }}>
          {VIRGINIA_SUBDIVISIONS.map((sub) => (
            <article 
              key={sub.id}
              style={{
                background: "#FFFFFF",
                border: "1px solid var(--ink-200)",
                borderRadius: "14px",
                overflow: "hidden",
                boxShadow: "var(--shadow-card)",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.2s ease, box-shadow 0.2s ease"
              }}
            >
              <div style={{ height: "180px", position: "relative", overflow: "hidden", background: "#0F172A" }}>
                <img 
                  src={sub.image} 
                  alt={sub.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, rgba(15, 23, 42, 0.1) 0%, rgba(15, 23, 42, 0.85) 100%)"
                }} />

                <div style={{
                  position: "absolute",
                  top: "12px",
                  left: "12px",
                  background: "rgba(15, 23, 42, 0.75)",
                  backdropFilter: "blur(6px)",
                  color: "#FFFFFF",
                  padding: "4px 10px",
                  borderRadius: "4px",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  border: "1px solid rgba(255, 255, 255, 0.2)"
                }}>
                  ZIP {sub.zip}
                </div>

                <div style={{
                  position: "absolute",
                  bottom: "12px",
                  left: "16px",
                  right: "16px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  color: "#FFFFFF"
                }}>
                  <div>
                    <span style={{ fontSize: "0.7rem", color: "#CBD5E1", textTransform: "uppercase", letterSpacing: "0.06em", display: "block" }}>
                      Market Velocity
                    </span>
                    <strong style={{ fontSize: "1.15rem", fontWeight: 800 }}>
                      High Seller Demand
                    </strong>
                  </div>
                  <span style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    background: "var(--accent-gold)",
                    color: "#0F172A",
                    padding: "3px 8px",
                    borderRadius: "4px"
                  }}>
                    {sub.avgDOM} DOM
                  </span>
                </div>
              </div>

              <div style={{ padding: "22px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "4px" }}>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--ink-950)", margin: 0 }}>
                    {sub.name}
                  </h3>
                  <span style={{ fontSize: "0.82rem", color: "var(--ink-500)", fontWeight: 600 }}>
                    {sub.city}, VA
                  </span>
                </div>

                <span style={{ fontSize: "0.82rem", color: "var(--accent-gold-hover)", fontWeight: 700, marginBottom: "10px", display: "block" }}>
                  {sub.divisionName} • {sub.schools.split("Pyramid")[0]}
                </span>

                <p style={{ fontSize: "0.88rem", color: "var(--ink-700)", lineHeight: 1.55, marginBottom: "18px" }}>
                  {sub.sellerLeadSnippet}
                </p>

                <div style={{ marginTop: "auto", borderTop: "1px solid var(--ink-100)", paddingTop: "14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "0.8rem", color: "var(--status-active)", fontWeight: 700 }}>
                    {sub.listToSaleRatio} List-to-Sale
                  </span>
                  <Link 
                    href={`/subdivisions/${sub.slug}`} 
                    className="btn btn-primary"
                    style={{ fontSize: "0.82rem", padding: "8px 16px", fontWeight: 700 }}
                  >
                    Seller Report &rarr;
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Seller Callout Banner */}
      <section style={{
        background: "var(--ink-950)",
        color: "#FFFFFF",
        padding: "64px 20px",
        textAlign: "center"
      }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <span style={{ fontSize: "0.82rem", color: "var(--accent-gold)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: "12px" }}>
            ✦ Subdivision Precision • RE/MAX Allegiance
          </span>
          <h2 style={{ fontSize: "2.4rem", fontWeight: 800, color: "#FFFFFF", marginBottom: "16px", letterSpacing: "-0.02em" }}>
            Don't See Your Subdivision Listed?
          </h2>
          <p style={{ fontSize: "1.1rem", color: "#CBD5E1", lineHeight: 1.7, marginBottom: "32px" }}>
            Elena and Kirill pull direct Bright MLS sales data for any street or neighborhood in Northern Virginia. Text your address for an immediate valuation dossier.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "14px", flexWrap: "wrap" }}>
            <a 
              href="sms:+17036257888?body=Hi%20Elena,%20what%20is%20my%20home%20worth%20in%20my%20subdivision?"
              className="btn btn-primary"
              style={{ background: "var(--accent-gold)", borderColor: "var(--accent-gold)", color: "#0F172A", fontWeight: 800, padding: "14px 28px" }}
            >
              Text Address for Custom Report &rarr;
            </a>
            <Link 
              href="/sell" 
              className="btn btn-outline"
              style={{ color: "#FFFFFF", borderColor: "rgba(255,255,255,0.3)", padding: "14px 28px", fontWeight: 600 }}
            >
              Book In-Home Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
