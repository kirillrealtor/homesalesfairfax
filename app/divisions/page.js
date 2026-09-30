import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { VIRGINIA_DIVISIONS, VIRGINIA_SUBDIVISIONS } from "../data/virginiaDivisions";

export const metadata = {
  title: "Virginia Real Estate Divisions & Subdivisions | List Your Home with Elena & Kirill",
  description: "Comprehensive guide to Virginia real estate divisions and subdivisions across Fairfax County, City of Fairfax, Arlington, Alexandria, and Loudoun. Hire Northern Virginia's top listing team to sell for top dollar.",
  alternates: {
    canonical: "https://homesalesfairfax.com/divisions",
  },
  openGraph: {
    title: "Virginia Divisions & Subdivisions | Top Listing Real Estate Agents",
    description: "Explore Virginia county divisions and high-turnover subdivisions. Settled comps, school pyramids, and proven listing strategies to maximize seller equity.",
    url: "https://homesalesfairfax.com/divisions",
    siteName: "homesalesfairfax.com",
    locale: "en_US",
    type: "website",
  }
};

export default function DivisionsPage() {
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
        <div className="container" style={{ textAlign: "center", maxWidth: "900px" }}>
          <span style={{
            display: "inline-block",
            fontSize: "0.82rem",
            fontWeight: 800,
            color: "var(--accent-gold)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: "12px"
          }}>
            Commonwealth of Virginia • Regional Divisions &amp; Subdivisions
          </span>

          <h1 style={{
            fontSize: "clamp(2.4rem, 4.8vw, 3.6rem)",
            fontWeight: 800,
            color: "var(--ink-950)",
            lineHeight: 1.15,
            letterSpacing: "-0.03em",
            marginBottom: "20px"
          }}>
            Virginia Real Estate Divisions &amp; Subdivisions
          </h1>

          <p style={{
            fontSize: "1.18rem",
            color: "var(--ink-700)",
            lineHeight: 1.7,
            maxWidth: "780px",
            margin: "0 auto 32px auto"
          }}>
            Thinking of selling your home? Elena Gorbounova &amp; Kirill represent sellers across Virginia's highest-earning county divisions, independent cities, and premier master-planned subdivisions.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
            <a href="#divisions-list" className="btn btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontWeight: 700 }}>
              Browse Virginia Divisions &darr;
            </a>
            <Link href="/sell" className="btn btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontWeight: 700 }}>
              Book In-Home Listing Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Main Divisions Directory */}
      <section id="divisions-list" className="container" style={{ padding: "64px 20px 40px", maxWidth: "1140px" }}>
        <div style={{ marginBottom: "36px" }}>
          <span style={{ fontSize: "0.82rem", color: "var(--accent-gold)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", display: "block", marginBottom: "4px" }}>
            ✦ Primary Jurisdictions
          </span>
          <h2 style={{ fontSize: "2.1rem", fontWeight: 800, color: "var(--ink-950)", letterSpacing: "-0.02em", margin: 0 }}>
            Northern Virginia County &amp; Municipal Divisions
          </h2>
          <p style={{ color: "var(--ink-600)", fontSize: "1.02rem", marginTop: "6px" }}>
            Select your division to view settled market absorption rates, buyer demographics, and custom listing plans.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "28px"
        }}>
          {VIRGINIA_DIVISIONS.map((division) => (
            <article 
              key={division.id}
              style={{
                background: "#FFFFFF",
                border: "1px solid var(--ink-200)",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "var(--shadow-card)",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.2s ease, box-shadow 0.2s ease"
              }}
            >
              <div style={{ height: "200px", position: "relative", overflow: "hidden", background: "#0F172A" }}>
                <img 
                  src={division.image} 
                  alt={division.fullName}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, rgba(15, 23, 42, 0.1) 0%, rgba(15, 23, 42, 0.85) 100%)"
                }} />
                
                <div style={{
                  position: "absolute",
                  top: "14px",
                  left: "14px",
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
                  {division.divisionType}
                </div>

                <div style={{
                  position: "absolute",
                  bottom: "14px",
                  left: "18px",
                  right: "18px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  color: "#FFFFFF"
                }}>
                  <div>
                    <span style={{ fontSize: "0.72rem", color: "#CBD5E1", textTransform: "uppercase", letterSpacing: "0.06em", display: "block" }}>
                      Market Velocity
                    </span>
                    <strong style={{ fontSize: "1.25rem", fontWeight: 800 }}>
                      High Seller Favor
                    </strong>
                  </div>
                  <span style={{
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    background: "var(--accent-gold)",
                    color: "#0F172A",
                    padding: "3px 8px",
                    borderRadius: "4px"
                  }}>
                    {division.avgDOM} DOM
                  </span>
                </div>
              </div>

              <div style={{ padding: "26px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <h3 style={{ fontSize: "1.45rem", fontWeight: 800, color: "var(--ink-950)", marginBottom: "6px" }}>
                  {division.name}
                </h3>

                <p style={{ fontSize: "0.88rem", color: "var(--accent-gold-hover)", fontWeight: 700, marginBottom: "12px" }}>
                  {division.tagline}
                </p>

                <p style={{ fontSize: "0.92rem", color: "var(--ink-700)", lineHeight: 1.6, marginBottom: "20px" }}>
                  {division.description.slice(0, 160)}...
                </p>

                {/* Subdivisions pill summary */}
                <div style={{ marginBottom: "24px" }}>
                  <span style={{ fontSize: "0.74rem", color: "var(--ink-500)", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 700, display: "block", marginBottom: "8px" }}>
                    Key Subdivisions &amp; Enclaves:
                  </span>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {division.subdivisions.slice(0, 4).map((sub, i) => (
                      <span 
                        key={i}
                        style={{
                          background: "var(--bg-page)",
                          border: "1px solid var(--ink-200)",
                          borderRadius: "9999px",
                          padding: "3px 10px",
                          fontSize: "0.78rem",
                          color: "var(--ink-800)",
                          fontWeight: 600
                        }}
                      >
                        {sub.name}
                      </span>
                    ))}
                    {division.subdivisions.length > 4 && (
                      <span style={{ fontSize: "0.78rem", color: "var(--accent-gold)", fontWeight: 700, padding: "3px 6px" }}>
                        +{division.subdivisions.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                <div style={{ marginTop: "auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                  <Link 
                    href={`/divisions/${division.slug}`} 
                    className="btn btn-outline"
                    style={{ textAlign: "center", padding: "10px", fontSize: "0.85rem", fontWeight: 700 }}
                  >
                    Division Guide &rarr;
                  </Link>
                  <Link 
                    href="/sell" 
                    className="btn btn-primary"
                    style={{ textAlign: "center", padding: "10px", fontSize: "0.85rem", fontWeight: 700 }}
                  >
                    List in {division.name.split(" ")[0]}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Featured Subdivisions Grid */}
      <section style={{ background: "var(--bg-page)", borderTop: "1px solid var(--ink-200)", padding: "64px 20px 80px" }}>
        <div className="container" style={{ maxWidth: "1140px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "32px", flexWrap: "wrap", gap: "12px" }}>
            <div>
              <span style={{ fontSize: "0.82rem", color: "var(--accent-gold)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", display: "block" }}>
                ✦ High-Demand Subdivisions
              </span>
              <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "var(--ink-950)", letterSpacing: "-0.02em", margin: "4px 0" }}>
                Explore Virginia Subdivisions
              </h2>
            </div>
            <Link href="/subdivisions" style={{ fontSize: "0.92rem", color: "var(--ink-950)", fontWeight: 700, textDecoration: "underline" }}>
              View All Subdivisions &rarr;
            </Link>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "20px"
          }}>
            {VIRGINIA_SUBDIVISIONS.slice(0, 8).map((sub) => (
              <Link 
                key={sub.id}
                href={`/subdivisions/${sub.slug}`}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid var(--ink-200)",
                  borderRadius: "12px",
                  padding: "20px",
                  boxShadow: "var(--shadow-card)",
                  textDecoration: "none",
                  color: "inherit",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "transform 0.15s ease, border-color 0.15s ease"
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                    <span style={{ fontSize: "0.72rem", background: "rgba(197, 168, 128, 0.15)", color: "var(--accent-gold)", padding: "2px 8px", borderRadius: "9999px", fontWeight: 700 }}>
                      ZIP {sub.zip}
                    </span>
                    <span style={{ fontSize: "0.76rem", color: "var(--status-active)", fontWeight: 700 }}>
                      {sub.avgDOM} DOM
                    </span>
                  </div>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--ink-950)", margin: "4px 0" }}>
                    {sub.name}
                  </h3>
                  <span style={{ display: "block", fontSize: "0.82rem", color: "var(--ink-600)", marginBottom: "8px" }}>
                    {sub.divisionName}
                  </span>
                  <p style={{ fontSize: "0.84rem", color: "var(--ink-700)", lineHeight: 1.5, margin: "0 0 14px" }}>
                    {sub.sellerLeadSnippet.slice(0, 95)}...
                  </p>
                </div>

                <div style={{ borderTop: "1px solid var(--ink-100)", paddingTop: "10px", display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <div>
                    <span style={{ fontSize: "0.68rem", color: "var(--ink-400)", textTransform: "uppercase", fontWeight: 700, display: "block" }}>Seller Ratio</span>
                    <strong style={{ fontSize: "0.95rem", color: "var(--status-active)" }}>102.8% List-to-Sale</strong>
                  </div>
                  <span style={{ fontSize: "0.82rem", color: "var(--accent-gold)", fontWeight: 700 }}>
                    Seller Guide &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
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
            ✦ Top 1% Northern Virginia Listing Agents
          </span>
          <h2 style={{ fontSize: "2.4rem", fontWeight: 800, color: "#FFFFFF", marginBottom: "16px", letterSpacing: "-0.02em" }}>
            Ready to List Your Virginia Home for Top Dollar?
          </h2>
          <p style={{ fontSize: "1.1rem", color: "#CBD5E1", lineHeight: 1.7, marginBottom: "32px" }}>
            Elena Gorbounova and Kirill bring over 400 closed transactions, 21+ years of local mastery, dedicated staging, 4K HDR marketing, and relentless contract negotiation directly to your living room.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "14px", flexWrap: "wrap" }}>
            <Link 
              href="/sell" 
              className="btn btn-primary"
              style={{ background: "var(--accent-gold)", borderColor: "var(--accent-gold)", color: "#0F172A", fontWeight: 800, padding: "14px 28px" }}
            >
              Book In-Home Listing Appointment
            </Link>
            <a 
              href="tel:7036257888" 
              className="btn btn-outline"
              style={{ color: "#FFFFFF", borderColor: "rgba(255,255,255,0.3)", padding: "14px 28px", fontWeight: 600 }}
            >
              Call Elena Direct: (703) 625-7888
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
