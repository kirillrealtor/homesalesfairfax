import Link from "next/link";
import { NEIGHBORHOOD_GUIDES } from "../data/listings";

export default function NeighborhoodsSection({ onFilterNeighborhood }) {
  const hyperLocalReports = [
    {
      name: "Mantua",
      zip: "22031",
      path: "/mantua-real-estate",
      velocity: "High Seller Favor",
      dom: "8 Days DOM",
      pyramid: "Woodson High School",
      tagline: "Wooded half-acre lots & active swim/tennis"
    },
    {
      name: "Mosby Woods",
      zip: "22030",
      path: "/mosby-woods-market",
      velocity: "Multiple Offer Pace",
      dom: "7 Days DOM",
      pyramid: "Fairfax High School",
      tagline: "Vienna Metro corridor & walk to Old Town"
    },
    {
      name: "Franklin Farm",
      zip: "22033",
      path: "/franklin-farm-values",
      velocity: "Rapid Absorption",
      dom: "8 Days DOM",
      pyramid: "Oakton / Chantilly",
      tagline: "6 fishing ponds, 13 miles of trails & pools"
    },
    {
      name: "Kings Park West",
      zip: "22032",
      path: "/kings-park-west-real-estate",
      velocity: "High Equity Velocity",
      dom: "9 Days DOM",
      pyramid: "Robinson Secondary IB",
      tagline: "Lake Royal recreation & George Mason corridor"
    },
  ];

  return (
    <section id="neighborhoods" className="content-section" style={{ background: "var(--bg-page)" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-head-clean">
          <span className="section-pretitle">Hyper-Local Neighborhood Authority</span>
          <h2 className="section-title-bold">Fairfax County Neighborhood Market Reports</h2>
          <p className="section-lead-text">
            Sellers want a true neighborhood specialist, not just a generic city agent. Explore live pricing benchmarks, recent closed sales comps, and monthly market reports for high-turnover subdivisions across ZIP codes 22030, 22031, 22032, and 22033.
          </p>
        </div>

        {/* Hyper-Local Neighborhood Reports Strip (Formula: [Neighborhood Name] + Real Estate / Market Report) */}
        <div style={{ marginBottom: "48px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px", flexWrap: "wrap", gap: "10px" }}>
            <span style={{ fontSize: "0.82rem", color: "var(--accent-gold)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em" }}>
              ✦ Direct Postcard &amp; Monthly QR Dossiers
            </span>
            <Link href="/market-report" style={{ fontSize: "0.88rem", color: "var(--ink-950)", fontWeight: 700, textDecoration: "underline" }}>
              View All Fairfax County ZIP Reports &rarr;
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "18px" }}>
            {hyperLocalReports.map((nh) => (
              <Link 
                key={nh.name}
                href={nh.path}
                style={{ 
                  background: "#FFFFFF", 
                  borderRadius: "var(--radius-md)", 
                  padding: "24px", 
                  border: "1.5px solid var(--ink-200)", 
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
                    <span style={{ fontSize: "0.75rem", background: "rgba(197, 168, 128, 0.15)", color: "var(--accent-gold)", padding: "2px 8px", borderRadius: "9999px", fontWeight: 800 }}>
                      ZIP {nh.zip}
                    </span>
                    <span style={{ fontSize: "0.78rem", color: "var(--status-active)", fontWeight: 700 }}>
                      {nh.dom}
                    </span>
                  </div>
                  <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--ink-950)", margin: "4px 0" }}>
                    {nh.name}
                  </h3>
                  <span style={{ display: "block", fontSize: "0.82rem", color: "var(--accent-gold)", fontWeight: 700, marginBottom: "8px" }}>
                    {nh.pyramid}
                  </span>
                  <p style={{ fontSize: "0.85rem", color: "var(--ink-600)", lineHeight: "1.45", margin: "0 0 16px" }}>
                    {nh.tagline}
                  </p>
                </div>

                <div style={{ borderTop: "1px solid var(--ink-100)", paddingTop: "12px", display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <div>
                    <span style={{ fontSize: "0.7rem", color: "var(--ink-400)", textTransform: "uppercase", fontWeight: 700, display: "block" }}>Market Velocity</span>
                    <strong style={{ fontSize: "1.05rem", color: "var(--accent-gold)" }}>{nh.velocity}</strong>
                  </div>
                  <span style={{ fontSize: "0.82rem", color: "var(--ink-950)", fontWeight: 700 }}>
                    Report &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Established Submarket Communities */}
        <div style={{ marginTop: "32px", marginBottom: "18px" }}>
          <span style={{ fontSize: "0.82rem", color: "var(--ink-500)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>
            Fairfax Submarket Exploration
          </span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))", gap: "24px" }}>
          {NEIGHBORHOOD_GUIDES.map((nh) => (
            <div 
              key={nh.slug}
              style={{
                borderRadius: "var(--radius-md)",
                overflow: "hidden",
                border: "1px solid var(--ink-200)",
                background: "#FFFFFF",
                boxShadow: "var(--shadow-card)",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.2s ease"
              }}
            >
              <div style={{ height: "190px", position: "relative", overflow: "hidden", background: "#E5E7EB" }}>
                <img 
                  src={nh.image} 
                  alt={nh.name} 
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  loading="lazy"
                />
                <div style={{
                  position: "absolute",
                  bottom: "10px",
                  left: "10px",
                  background: "rgba(11, 15, 25, 0.88)",
                  backdropFilter: "blur(4px)",
                  color: "#FFFFFF",
                  padding: "4px 12px",
                  borderRadius: "9999px",
                  fontSize: "0.75rem",
                  fontWeight: 700
                }}>
                  ZIP: {nh.zip}
                </div>
              </div>

              <div style={{ padding: "22px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "4px", color: "var(--ink-950)", letterSpacing: "-0.01em" }}>
                  {nh.name}
                </h3>

                <div style={{ fontSize: "0.85rem", color: "var(--accent-gold-hover)", fontWeight: 700, marginBottom: "10px" }}>
                  Market Pace: {nh.marketVelocity || "High Seller Favor"}
                </div>

                <p style={{ fontSize: "0.88rem", color: "var(--ink-600)", marginBottom: "16px", fontStyle: "italic", lineHeight: "1.5" }}>
                  "{nh.vibe}"
                </p>

                <ul style={{ listStyle: "none", marginBottom: "20px", display: "flex", flexDirection: "column", gap: "7px" }}>
                  {nh.highlights.map((h, i) => (
                    <li key={i} style={{ fontSize: "0.84rem", color: "var(--ink-700)", display: "flex", alignItems: "center", gap: "8px" }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      {h}
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => onFilterNeighborhood(nh.name.split(" ")[0])}
                  className="btn-card-ask" 
                  style={{ width: "100%", textAlign: "center", marginTop: "auto", fontWeight: 700 }}
                >
                  Explore {nh.name.split(" ")[0]} Residences &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "32px", textAlign: "center", padding: "18px 24px", background: "rgba(255,255,255,0.75)", borderRadius: "14px", border: "1px solid var(--ink-200)" }}>
          <span style={{ fontSize: "0.9rem", color: "var(--ink-700)", lineHeight: "1.6" }}>
            Considering Vienna, McLean, Great Falls, Reston, or Falls Church? Elena represents clients across all of Northern Virginia.{" "}
            <a href="sms:+17036257888?body=Hi%20Elena,%20I'm%20exploring%20homes%20in%20" style={{ color: "var(--ink-950)", fontWeight: 700, textDecoration: "underline" }}>
              Text Us at (703) 625-7888 for private off-market insight &rarr;
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}
